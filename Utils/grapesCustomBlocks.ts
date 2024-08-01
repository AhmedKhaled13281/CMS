import TestComp from "@/Components/TestComp";
import Accordion from "react-bootstrap/Accordion";
import grapesjs from "grapesjs";
import { editorConfig } from "@/Config/grapes.config";
import { rr } from "./test";


export const customBlocks = [
  {
    id: "button",
    label: "Button",
    // media: btnSvg,
    content: `<button class='btn btn-primary'>Submit Vodafone</button>`,
  },
  {
    label: "Base Layout",
    category: "Layout",
    // content : { type: 'my-cmp', prop1: 'value1-EXT', prop2: 'value2-EXT' },
    content: `
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
    </nav>


    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="column">
                <h3>About Us</h3>
                <p>We are a company dedicated to providing the best services in our industry.</p>
            </div>
            <div class="column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="column">
                <h3>Contact Us</h3>
                <p>Email: info@company.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div class="column">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
      `,
  },
  {
    id: "vodafone-layout",
    label: "Vodafone Layout",
    category: "Layout",
    content: `
        <div class="bg-white">
            <div class="container">
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img width="70px" alt="vodafone_logo" src="data:image/jpeg;base64,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"/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link  active  text-dark" aria-current="page" href="#">Shopes</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-black" href="#">Services</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link text-black" href="#">Promotions</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link text-black" href="#">Recharge your balance</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link text-black" href="#">Pay your bills</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            </div>
        </div>
        <div class="row"></div>

        <footer class="footer">
          <div class="footer-main">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-3">
                <span _ngcontent-ng-c4228287462="">
                  <img width="50px" src="https://firebasestorage.googleapis.com/v0/b/content-management-syste-5da80.appspot.com/o/images%2Fimages-removebg-preview.png?alt=media&token=57d3859d-fbac-44a5-8847-721f41931a24" alt="logo"/>
              </span>
              </div>
                <div class="col-9">
                  <ul class="footer-social mt-2">
                    <li class="footer-social-item me-3">
                      <a class="">
                        <img width="25px" class="rounded" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABYWFjy8vJTU1Pm5ub39/cwMDBubm7q6upLS0tGRkb7+/vAwMDPz89ra2uVlZVeXl7V1dWfn58pKSnb29u7u7t7e3tlZWXHx8ewsLCQkJA6OjoPDw+lpaWbm5sbGxt+fn6GhoYxrr3TAAACsklEQVR4nO3cbVPaUBCG4UiIxRBBEQVRC/b//8jOVEms9eXkhJ19Nr3v78zs9QFyWEKKgoiIiIiIiIiIiIh8q+7vrjbbaV3P/1S/NH1t8tL1xHvMvJr7/fwsMe9ZMyp321RdSOFq1ocXT7ioe/qCCav+vljChwxfJGH1mAWMI7zM88UR/swFRhHus4FBhDf5wBjC3QBgCOFqCDCCsHkau7DvQTScMPtCGEXYrMcuHHKhCCFshgLlhVejFw4GqgvvRi+cjl1YDQeKC/O/FUYRXo9dWJ4AqC1cjF44YHcRRHiKt6G28BRAaeHwU7e6sNd+ZrNbXXyYt+KrehxKZ433sFmlLxFvvEfNLPm74cx70tw2qcLSe9LclonArfeg2aVe8Hfeg2Y3SRQuvAfNLlUofcn7slRh2A8ahAgDhBChfggR6ocQoX4IEeqHEKF+qbu2IBv9h/ZfZ+2/zw6Jwvcv/Kv5pbfsWOr6t3cywoH3yX6ezDbVTFh5y46ZCWU+h8yE3rA2K+HaG9ZmJZx6w9qshM/esDYroc5P/FZCnZ9PrYQyRxoz4a03rM1KeO4Na7MSeru6jIQHb1eXkbD2dnUZCYVuCDMS/vJ2dRkJ996uLiOhzpHGSiizwzATyuwwzIRC97zZCA9C+3Ab4aPMHspKqPS0Nhvh0pv1Jhuh0JHGSKizpbES6uwwrIRCRxojoc6Wpih6Pe0xOaEjTVFW7ytTHzdwe/HPa495q75p/HcqIESoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IYwvTH32ZVzhcv0jpae4wuY8Le85iYiI/oN+Ax8gNcxZmandAAAAAElFTkSuQmCC" alt="social-1"/>
                      </a>
                    </li>
                    <li class="footer-social-item me-3">
                    <a class="">
                    <img width="25px" class="rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT086HJnYSz0CDS1pha4EdeZUEityKO3mpNRg&s" alt="social-1"/>
                  </a>
                    </li>
                    <li class="footer-social-item me-3">
                    <a class="">
                    <img width="25px" class="rounded"  src="data:image/png;base64,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" alt="social-1"/>
                  </a>
                    </li>
                    <li class="footer-social-item me-3">
                    <a class="">
                    <img width="25px" class="rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaF7RWHRi4L559ah3-PKNp6DqbO_9YVoXwNg&s" alt="social-1"/>
                  </a>
                    </li>
                  </ul>
                </div>
                <div _ngcontent-ng-c4228287462="" class="col-12">
                <hr
                  class="border-color-anthracite mt-4 d-none d-lg-block"
                />
              </div>
              </div>
              <div class="row">
                  <div class="col-12">
                    <div  class="panel-group footer-accordion" style="display: block">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                         <h4 class="mb-2">About Vodafone</h4>
                         <div>
                            <ul class="navbar-nav">
                              <li>
                                <a class="nav-link">Careers</a>
                              </li>
                              <li>
                                <a class="nav-link">News & press releases</a>
                              </li>
                              <li>
                                <a class="nav-link">TV Commercials</a>
                              </li>
                            </ul>
                         </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                         <h4 class="mb-2">Products and services</h4>
                         <div>
                            <ul class="navbar-nav">
                              <li>
                                <a class="nav-link">shop</a>
                              </li>
                              <li>
                                <a class="nav-link">DSL</a>
                              </li>
                              <li>
                                <a class="nav-link">Broadband</a>
                              </li>
                            </ul>
                         </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                         <h4 class="mb-2">Help</h4>
                         <div>
                            <ul class="navbar-nav">
                              <li>
                                <a class="nav-link">Careers</a>
                              </li>
                              <li>
                                <a class="nav-link">News & press releases</a>
                              </li>
                              <li>
                                <a class="nav-link">TV Commercials</a>
                              </li>
                            </ul>
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="row">
              <div _ngcontent-ng-c4228287462="" class="mt-lg-4">
        <ul _ngcontent-ng-c4228287462="" class="footer-other-links">
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-0"
              href="https://web.vodafone.com.eg/en/contact-us"
              >Contact US</a
            >
          </li>
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-1"
              href="https://web.vodafone.com.eg/en/business"
              >Switch to business</a
            >
          </li>
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-2"
              href="https://web.vodafone.com.eg/en/website-terms-conditions"
              >Terms &amp; conditions</a
            >
          </li>
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-3"
              href="privacy-policy-of-vodafone-egypt"
              >Privacy policy</a
            >
          </li>
          <!---->
        </ul>
      </div>
              </div>
              <div class="row">
              <div class="text-center">
              <p
                _ngcontent-ng-c4228287462=""
                id="footer-copy-rights"
                class="mb-0 small-2x"
              >
                @ 2024 Vodafone Egypt
              </p>
            </div>
              </div>
            </div>
          </div>
        </footer>
    `,
  },
  {
    id: "test",
    label: "Test Component",
    category: "Layout",
    content: [{ type: `<TestComp />` }, `<div>Hello</div>`],
  },
  {
    label: "<div>Sections</div>",
    category: "Sections",
    content: `
      <div class="container p-3" w-100 h-100>
          <div class="row"></div>
      </div>
    `,
  },
  {
    label: "Vodafone Footer",
    category: "Layout",
    content : `
    <footer class="footer">
          <div class="footer-main">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-3">
                <span _ngcontent-ng-c4228287462="">
                  <img width="50px" src="https://firebasestorage.googleapis.com/v0/b/content-management-syste-5da80.appspot.com/o/images%2Fimages-removebg-preview.png?alt=media&token=57d3859d-fbac-44a5-8847-721f41931a24" alt="logo"/>
              </span>
              </div>
                <div class="col-9">
                  <ul class="footer-social mt-2">
                    <li class="footer-social-item me-3">
                      <a class="">
                        <img width="25px" class="rounded" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABYWFjy8vJTU1Pm5ub39/cwMDBubm7q6upLS0tGRkb7+/vAwMDPz89ra2uVlZVeXl7V1dWfn58pKSnb29u7u7t7e3tlZWXHx8ewsLCQkJA6OjoPDw+lpaWbm5sbGxt+fn6GhoYxrr3TAAACsklEQVR4nO3cbVPaUBCG4UiIxRBBEQVRC/b//8jOVEms9eXkhJ19Nr3v78zs9QFyWEKKgoiIiIiIiIiIiIh8q+7vrjbbaV3P/1S/NH1t8tL1xHvMvJr7/fwsMe9ZMyp321RdSOFq1ocXT7ioe/qCCav+vljChwxfJGH1mAWMI7zM88UR/swFRhHus4FBhDf5wBjC3QBgCOFqCDCCsHkau7DvQTScMPtCGEXYrMcuHHKhCCFshgLlhVejFw4GqgvvRi+cjl1YDQeKC/O/FUYRXo9dWJ4AqC1cjF44YHcRRHiKt6G28BRAaeHwU7e6sNd+ZrNbXXyYt+KrehxKZ433sFmlLxFvvEfNLPm74cx70tw2qcLSe9LclonArfeg2aVe8Hfeg2Y3SRQuvAfNLlUofcn7slRh2A8ahAgDhBChfggR6ocQoX4IEeqHEKF+qbu2IBv9h/ZfZ+2/zw6Jwvcv/Kv5pbfsWOr6t3cywoH3yX6ezDbVTFh5y46ZCWU+h8yE3rA2K+HaG9ZmJZx6w9qshM/esDYroc5P/FZCnZ9PrYQyRxoz4a03rM1KeO4Na7MSeru6jIQHb1eXkbD2dnUZCYVuCDMS/vJ2dRkJ996uLiOhzpHGSiizwzATyuwwzIRC97zZCA9C+3Ab4aPMHspKqPS0Nhvh0pv1Jhuh0JHGSKizpbES6uwwrIRCRxojoc6Wpih6Pe0xOaEjTVFW7ytTHzdwe/HPa495q75p/HcqIESoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IYwvTH32ZVzhcv0jpae4wuY8Le85iYiI/oN+Ax8gNcxZmandAAAAAElFTkSuQmCC" alt="social-1"/>
                      </a>
                    </li>
                    <li class="footer-social-item me-3">
                    <a class="">
                    <img width="25px" class="rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT086HJnYSz0CDS1pha4EdeZUEityKO3mpNRg&s" alt="social-1"/>
                  </a>
                    </li>
                    <li class="footer-social-item me-3">
                    <a class="">
                    <img width="25px" class="rounded"  src="data:image/png;base64,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" alt="social-1"/>
                  </a>
                    </li>
                    <li class="footer-social-item me-3">
                    <a class="">
                    <img width="25px" class="rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaF7RWHRi4L559ah3-PKNp6DqbO_9YVoXwNg&s" alt="social-1"/>
                  </a>
                    </li>
                  </ul>
                </div>
                <div _ngcontent-ng-c4228287462="" class="col-12">
                <hr
                  class="border-color-anthracite mt-4 d-none d-lg-block"
                />
              </div>
              </div>
              <div class="row">
                  <div class="col-12">
                    <div  class="panel-group footer-accordion" style="display: block">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                         <h4 class="mb-2">About Vodafone</h4>
                         <div>
                            <ul class="navbar-nav">
                              <li>
                                <a class="nav-link">Careers</a>
                              </li>
                              <li>
                                <a class="nav-link">News & press releases</a>
                              </li>
                              <li>
                                <a class="nav-link">TV Commercials</a>
                              </li>
                            </ul>
                         </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                         <h4 class="mb-2">Products and services</h4>
                         <div>
                            <ul class="navbar-nav">
                              <li>
                                <a class="nav-link">shop</a>
                              </li>
                              <li>
                                <a class="nav-link">DSL</a>
                              </li>
                              <li>
                                <a class="nav-link">Broadband</a>
                              </li>
                            </ul>
                         </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                         <h4 class="mb-2">Help</h4>
                         <div>
                            <ul class="navbar-nav">
                              <li>
                                <a class="nav-link">Careers</a>
                              </li>
                              <li>
                                <a class="nav-link">News & press releases</a>
                              </li>
                              <li>
                                <a class="nav-link">TV Commercials</a>
                              </li>
                            </ul>
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="row">
              <div _ngcontent-ng-c4228287462="" class="mt-lg-4">
        <ul _ngcontent-ng-c4228287462="" class="footer-other-links">
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-0"
              href="https://web.vodafone.com.eg/en/contact-us"
              >Contact US</a
            >
          </li>
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-1"
              href="https://web.vodafone.com.eg/en/business"
              >Switch to business</a
            >
          </li>
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-2"
              href="https://web.vodafone.com.eg/en/website-terms-conditions"
              >Terms &amp; conditions</a
            >
          </li>
          <li _ngcontent-ng-c4228287462="" class="footer-list-item">
            <a
              _ngcontent-ng-c4228287462=""
              class="nav-link"
              id="footer-link-other-3"
              href="privacy-policy-of-vodafone-egypt"
              >Privacy policy</a
            >
          </li>
          <!---->
        </ul>
      </div>
              </div>
              <div class="row">
              <div class="text-center">
              <p
                _ngcontent-ng-c4228287462=""
                id="footer-copy-rights"
                class="mb-0 small-2x"
              >
                @ 2024 Vodafone Egypt
              </p>
            </div>
              </div>
            </div>
          </div>
        </footer>
    `
  },
  // {
  //   label: "Accordion",
  //   category: "Saved Sections",
  //   activate: true,
  //   content: {
  //     content: `
  //     <div class="accordion" id="accordionExample">
  //     <div class="accordion-item">
  //           <h2 class="accordion-header">
  //             <button class="accordion-button" type="button" data-bs-toggle="collapse"
  //              data-bs-target="#jh" aria-expanded="true" aria-controls="oj">
  //               Accordion Item #1
  //             </button>
  //           </h2>
  //           <div id="oijn" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  //             <div class="accordion-body">
  //               <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
  //             </div>
  //           </div>
  //         </div>
  //     </div>
  //   `,
  //     script: function () {
  //       console.log(new Date().getSeconds());

  //       function generateUUID(): string {
  //         const chars =
  //           "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //         return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
  //           /[xy]/g,
  //           function (c) {
  //             const r = Math.floor(Math.random() * chars.length);
  //             return chars[r];
  //           }
  //         );
  //       }
  //       let ff = generateUUID();
  //       const accordionBody = document?.querySelector('.accordion-collapse')
  //       const accordionButton = document?.querySelector('.accordion-button')

  //       const accordionBodyValue : any = accordionBody?.getAttribute('id')
  //       const accordionButtonTargetValue : any = accordionButton?.getAttribute('data-bs-target')
  //       const accordionButtonControlValue : any = accordionButton?.getAttribute('aria-controls')

  //       accordionBody?.setAttribute('id', `${ff + new Date().getSeconds()}`);
  //       accordionButton?.setAttribute('data-bs-target', `#${ff + new Date().getSeconds()}`);
  //       accordionButton?.setAttribute('aria-controls', `${ff + new Date().getSeconds()}`);

  //       console.log(accordionBodyValue)
  //       console.log(accordionButtonTargetValue)
  //       console.log(accordionButtonControlValue)

  //     },
  //   },
  // },
];
