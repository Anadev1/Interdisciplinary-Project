// import nav from "../components/nav.js";
import service from "../service.js";
import Router from "../router.js";

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
                    <input id="login-email" type="email" placeholder="Email" required>
                    <input id="login-password" type="password" placeholder="Password" required>
                    <button id="btn-login" class="login__button btn__large" type="button">Login</button>
                  </form>
                </div>
                <p class="login__signup-text">Don't have an account? <a href="#/signup" class="login__signup-link">Sign up</a></p>
            </section>
        `;
  }

  beforeShow() {
    nav.hide();
  }

  async login() {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    const loginObject = { email: email, password: password };
    console.log(loginObject);
    const response = await fetch(
      "http://shareat.alexkrugeri.com//backend/backend.php?action=login",
      {
        method: "POST",
        body: JSON.stringify(loginObject),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.authenticated) {
      localStorage.setItem("userIsAuthenticated", true);
      localStorage.setItem("authUser", JSON.stringify(data.userData));
      Router.navigateTo("#/feed");
    }
  }
}
