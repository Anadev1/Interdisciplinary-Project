// import nav from "../components/nav.js";
import service from "../service.js";

export default class LoginPage {
  constructor(domElement) {
    this.domElement = domElement;
    this.render();
  }

  /**
   * renders the initial HTML template of the page.
   * It is using insertAdjacentHTML, which is another way of adding text as HTML to the DOM (read more here: https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp).
   */
  render() {
    this.domElement.innerHTML += /*html*/ `
            <section id="login" class="page">
                <div class="login__logo-container">
                  <img src="../img/shareat-logo.svg" alt="logo" class="login__logo" />
                </div>
                <div class="login__form-container">
                  <form class="login__form">
                    <input id="login-email" type="text" name="email" placeholder="Email" required>
                    <input id="login-password" type="password" placeholder="Password" autocomplete="new-password" required>
                    <a class="login__button btn__large">Login</a>
                  </form>
                </div>
                <p class="login__signup-text">Don't have an account? <a href="" class="login__signup-link">Sign up</a></p>
            </section>
        `;
  }

  beforeShow() {
    nav.hide();
  }
}
