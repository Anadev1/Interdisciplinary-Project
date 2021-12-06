import loader from "../components/loader.js";
import nav from "../components/nav.js";
import router from "../router.js";
import service from "../service.js";

export default class IntroPage {
  constructor(id) {
    this.id = id;
    this.render();
  }

  /**
   * renders the initial HTML template of the page.
   * It is using insertAdjacentHTML, which is another way of adding text as HTML to the DOM (read more here: https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp).
   */
  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ ` 
            <section id="${this.id}" class="page intro">
              <div class="intro__logo-container">
                <img src="../img/shareat-logo.svg" alt="logo" class="intro__logo" />
              </div>
              <div class="intro__text-container">
                <h1 class="intro__title">Get Started</h1>
                <p class="intro__description">
                  Hi! Welcome to the <span>SharEat</span> community.
                  Here you can give a second chance to your food and not to be wasted.
                </p>
              </div>
              <div class="intro__buttons-container">
                <p class="intro__buttons-description">Start with signing up or login</p>
                <a class="intro__signup-button btn__large">Sign Up</a>
                <a class="intro__login-button btn__large btn__large--white">Login</a>
              </div>
            </section>
        `
    );
  }

  beforeShow() {
    nav.hide();
  }
}
