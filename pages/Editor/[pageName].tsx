import { editorConfig } from "@/Config/grapes.config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SaveModal from "@/Components/SaveModal";
import { test } from "@/Utils/test";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { uploadImage } from "@/Utils/fireBaseStorage";
import { createCustomComponent } from "@/Utils/grapesComponents";
import TestComp from "@/Components/TestComp";

const PageEditor = () => {
  const [testEditor, setTestEditor] = useState<any>();
  const [sections, setSections] = useState<any>([]);
  const [pages, setPages] = useState<any>([]);
  const [reqStatus, setReqStatus] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [lang, setLang] = useState<string>("en");

  const router = useRouter();
  let slug = router?.query?.pageName;

  useEffect(() => {
    if (window && slug) {
      const editor = editorConfig(slug);
      setTestEditor(editor);
      const bm: any = editor.BlockManager;
      // Create Custom Components On GrapesJs
      createCustomComponent(editor)

      const onDrop = async (dataTransfer: any) => {
        console.log(dataTransfer.data)
        const files = dataTransfer?.data;
        for (const file of files) {
          editor.AssetManager.remove(file.src)
          const downloadURL = await uploadImage([file]);
          if (downloadURL) {
            console.log(editor.AssetManager.Asset)
            editor.AssetManager.add({
              src: downloadURL,
              name: file.name,
              unitDim: 'px',
              height: file.height,
              width: file.width,
            });
          }
        }
      };

      editor.on('asset:upload:end', onDrop);

      const i18n = editor.I18n;
      // const getElementByTextContent = (tag:any, text:any) => {
      //   const elements = document.querySelectorAll(tag);
      //   return Array.from(elements).find(element => element.textContent.trim() === text);
      // }
      // editor.on('load', () => {
      //   // Example: Insert custom HTML into the top panel
      //   const panelTopEl = getElementByTextContent('div' , 'Saved Sections');
      //   if (panelTopEl) {
      //     const customContent = document.createElement('div');
      //     customContent.innerHTML = `
      //     <div class="custom-panel-content">
      //       <input type="text" placeholder="Search..."/>
      //       <button>Submit</button>
      //     </div>
      //   `;
      //     panelTopEl.appendChild(customContent);
      //   }
      // });
      // i18n?.setLocale(lang)
      // console.log(lang)

      editor.I18n.addMessages({
        en: {
          // indicate the locale to update
          styleManager: {
            empty: "New empty state message",
          },
        },
        ar: {
          styleManager: {
            empty: "لا يوجد رسائل",
          },
        },
      });

      //editor.getComponents().add('<link rel="stylesheet" href="../../styles/test.css">');
      
    }
    

  }, [editorConfig, router]);


  // Section
  useEffect(() => {
    const fetchSections = async () => {
      const response = await fetch("/api/section.api");
      const data = await response.json();
      //console.log(data)
      setSections(data);
    };

    fetchSections();
    console.log("Section : " , sections[0]?.html)
  }, [reqStatus]);

  const bm: any = testEditor?.BlockManager;
  sections?.forEach((section: any, index: any) => {
    bm.add(`section-${section._id}`, {
      label: `<div>${section.sectionName || index + 1}</div>`,
      category: "Saved Sections",
      content: section.html,
    });
  });

  // Page Section
  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch('/api/getAllPageNames.api');
      const data = await response.json();
      //console.log(data)
      setPages(data);
      console.log("Page : " , data[3]?.content?.pages?.frames)
    };
    fetchPages();

  }, [reqStatus]);

  const componentMapping = (pageObj : any) => {
    let page = pageObj?.content?.pages[0]?.frames[0]?.component?.components
    // console.log(pageObj)
    return page?.map((comp : any) => {
      return comp
    })
  }

  pages?.forEach((page: any, index: any) => {
    bm.add(`page-${page._id}`, {
      label: `<div>${page.slug || index + 1}</div>`,
      category: "Saved Pages",
      content: componentMapping(page),
    });
  });


  const handleSaveSection = async (sectionName: string) => {
    setShowModal(true);

    try {
      const selectedComponent = testEditor.getSelected();
      if (selectedComponent && sectionName) {

        
        const content = {
          // components: selectedComponent.toJSON(),
          // styles: testEditor.CssComposer.getAll().toJSON(),
          // html: selectedComponent.toHTML(),
          sectionName: sectionName,
          components: selectedComponent.toJSON(),
          styles: testEditor.CssComposer.getAll().toJSON(),
          html: selectedComponent,
          css: testEditor.getCss({ component: selectedComponent }),
        };
        console.log(content);
        const response = await fetch("/api/section.api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(content),
        });
        console.log(response);
        if (response.ok) {
          setReqStatus(true);
          console.log("Section saved successfully");
        }
      }
    } catch (error) {
      console.error("Error saving section", error);
    }
  };
  
  const previewPageHandler = (metaTags: string) => {
    const htmlContent = testEditor.getHtml();
    const cssContent = testEditor.getCss();


    fetch("/api/hostPages.api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: slug,
        html: htmlContent,
        css: cssContent,
        metaTags: metaTags,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          console.log(data.url);
          window.open(data.url, "_blank");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    testEditor?.I18n.setLocale(lang);
    console.log(lang);
  }, [testEditor?.I18n?._config?.locale , lang]);


  return (
    <div>
      <div className="d-flex justify-content-around">
        <SaveModal
          handleSaveSection={handleSaveSection}
          modalTitle="Section Name"
          inputType="field"
        />
        <SaveModal
          handleSaveSection={previewPageHandler}
          modalTitle="Host"
          inputType="textArea"
        />
        {/* <DropdownButton id="dropdown-basic-button" title="Select Language">
          <Dropdown.Item onClick={() => setLang("en")}>en</Dropdown.Item>
          <Dropdown.Item onClick={() => setLang("ar")}>ar</Dropdown.Item>
        </DropdownButton> */}
      </div>
      <div id="editor"></div>
      <div id="panel-action"></div>
    </div>
  );
};

export default PageEditor;