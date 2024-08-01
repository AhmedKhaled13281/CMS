// import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsMJml from "grapesjs-mjml";
import gjsPresetNewsletter from "grapesjs-preset-newsletter";
import gjsForms from 'grapesjs-plugin-forms'
import gjCustomCode from 'grapesjs-custom-code'
import grapesjs from "grapesjs";
import { customBlocks } from "@/Utils/grapesCustomBlocks";

const btnSvg = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
</svg>

`;


export const editorConfig = (slug?: any) => {

  return grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: "#editor",
    //fromElement: true,
    forceClass: false,
    avoidInlineStyle: false,
    selectorManager: {
      componentFirst: true,
      custom: false,
    },
    storageManager: {
      type: "remote",
      stepsBeforeSave: 1,

      id: "page-",
      autosave: true,
      autoload: true,

      options: {
        remote: {
          urlStore: "/api/page.api",
          urlLoad: `/api/page.api?url=${slug}`,
          headers: { "Content-Type": "application/json" },
          contentTypeJson: true,
          onStore: (data) => ({ slug: slug, data }),
          onLoad: (result) => {
            try {
              return result?.content;
            } catch (e) {
              console.error("Failed to load content:", e);
            }
          },
        },
      },
    },
    // assetManager: {
    //   upload: false,
    //   uploadName: 'files',
    //   assets: [],
    // },
    canvas: {
      styles: [
        "https://web.vodafone.com.eg/theme-assets/hometheme/css/styles.css",
        "https://web.vodafone.com.eg/theme-assets/static-lite-theme/css/style.css?v=6562121",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", // Version : 5.3.3
        //"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", // Version : 4.3.1
      ],
      scripts: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        "https://code.jquery.com/jquery-3.3.1.min.js"
      ]
    },
    plugins: [gjsPresetWebpage, gjsPresetNewsletter , gjsForms , gjCustomCode],
    pluginsOpts: { gjsPresetWebpage: {}, gjsPresetNewsletter: {} , gjsForms: {} , gjCustomCode: {}},
    blockManager: {
      //appendTo : '#blocks',
      blocks: customBlocks
    },
    panels: { defaults: [] },
    pageManager: {},
    i18n: {
      locale: 'en', // default locale
      detectLocale: true, // by default, the editor will detect the language
      localeFallback: 'en', // default fallback
      messages: { ar : {welcomeMsg : 'اهلا'} , en : {welcomeMsg : 'Hello'} },
    },
    
  });
};
