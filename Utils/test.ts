import Router from "next/router";

export const test = () => {
    console.log(Router?.query?.pageName)
}

export const rr = () => {
    if(typeof document !== undefined){
        document.addEventListener('DOMContentLoaded', function () {
          console.log("Shit")
          const accordionButtons = document.querySelectorAll('.accordion-button');
        
          accordionButtons.forEach(button => {
            button.addEventListener('click', function () {
              const collapse = button.nextElementSibling;
              
              // Check if the clicked accordion is already open
              const isOpen = collapse?.classList.contains('show');
        
              // Close all open accordions
              document.querySelectorAll('.accordion-collapse').forEach(collapse => {
                collapse.classList.remove('show');
              });
        
              // Open the clicked accordion if it wasn't already open
              if (!isOpen) {
                collapse?.classList.add('show');
              }
            });
          });
        });
       }
}