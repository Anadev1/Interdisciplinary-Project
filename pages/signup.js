import loader from "../components/loader.js";
import nav from "../components/nav.js";
import router from "../router.js";
import service from "../service.js";

export default class SignupPage {
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
            <section id="${this.id}" class="page">
                <div class="signup__logo-container">
                  <img src="../img/shareat-logo.svg" alt="logo" class="signup__logo" />
                </div>
                <div class="signup__form-container">
                  <form class="signup__form">
                    <input id="signup-firstname" type="text" name="firstname" placeholder="First name" required>
                    <input id="signup-lastname" type="text" name="lastname" placeholder="Last name" required>
                    <input id="signup-email" type="text" name="email" placeholder="Email" required>
                    <input id="signup-password" type="password" placeholder="Password" autocomplete="new-password" required>
                    <input id="signup-password-check" type="password" placeholder="Confirm password" autocomplete="new-password" required>
                    <a class="signup__button btn__large">Sign up</a>
                  </form>
                </div>
                <p class="signup__login-text">Already have an account? <a href="" class="signup__login-link">Login</a></p>
            </section>
        `
    );
  }

  beforeShow() {
    nav.hide();
  }
}
