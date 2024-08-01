function generateUUID(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.floor(Math.random() * chars.length);
    return chars[r];
  });
}

export const accordionComponent = (editor: any) => {
  const script = function (this: any, props: any) {
    function generateUUID(): string {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = Math.floor(Math.random() * chars.length);
          return chars[r];
        }
      );
    }
    const ff = generateUUID();

    const accordionDiv = document.getElementById(this.id);

    if (accordionDiv) {
      accordionDiv.innerHTML = `
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#${ff}" aria-expanded="true" aria-controls="${ff}">
                  <span class="editable-button-text">${props.buttonText}</span>
                </button>
              </h2>
              <div id="${ff}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" data-gjs-type="text" data-gjs-highlightable="true">
                  ${props.bodyText}
                </div>
              </div>
            </div>
          </div>
        `;
    }
  };

  editor.Components.addType("accordion-component", {
    model: {
      defaults: {
        script,
        buttonText: "",
        bodyText: "",
        traits: [
          {
            type: "text",
            label: "Button Text",
            name: "buttonText",
            changeProp: 1,
          },
          {
            type: "text",
            label: "Body Text",
            name: "bodyText",
            changeProp: 1,
          },
        ],
        tagName: "div",
        attributes: { class: "accordion-component" },
        "script-props": ["buttonText", "bodyText"],
        components: `
            <div id="accordion-component-${generateUUID()}">
            </div>
          `,
      },
    },
  });

  editor.Blocks.add("accordion-block", {
    label: "Accordion",
    category: "Saved Sections",
    content: { type: "accordion-component" },
  });
};
