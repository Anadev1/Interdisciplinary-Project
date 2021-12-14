// import nav from "../components/nav.js";
import service from "../service.js";
import router from "../router.js";

export default class SignupPage {
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
            <section id="signup" class="page">
                <div class="signup__logo-container">
                  <img src="../img/shareat-logo.svg" alt="logo" class="signup__logo" />
                </div>
                <div class="signup__form-container">
                  <form class="signup__form">
                    <input id="signup-firstname" type="text" name="firstname" placeholder="First name" required>
                    <input id="signup-lastname" type="text" name="lastname" placeholder="Last name" required>
                    <input id="signup-email" type="text" name="email" placeholder="Email" required>
                    <input id="signup-password" type="password" placeholder="Password" autocomplete="new-password" required>
                    
                    <a href="#/preferences" class="signup__button btn__large">Next</a>
                  </form>
                </div>
                <p class="signup__login-text">Already have an account? <a href="#/login" class="signup__login-link">Login</a></p>
            </section>
        `;
  }

  beforeShow() {
    nav.hide();
  }

  async signup() {
    let firstname = document.querySelector("#signup-firstname").value;
    let lastname = document.querySelector("#signup-lastname").value;
    let email = document.querySelector("#signup-email").value;
    let password = document.querySelector("#signup-password").value;

    const user = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(user);

    const response = await fetch(
      "http://localhost:3000//backend/backend.php?action=signup",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.signup) {
      router.navigateTo("#/login");
    }
  }
}
