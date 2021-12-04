import router from "../router";
import services from "../services";

class SignupPage {
  constructor() {
    this.id = "signup";
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
            <section id="${this.id}" class="page">
                <div class="logo-container">
                      <img src="" alt="logo" />
                </div>
                <form>
                  <input id="signup-firstname" type="text" name="firstname" placeholder="First name">
                  <input id="signup-lastname" type="text" name="lastname" placeholder="Last name">
                  <input id="signup-email" type="email" name="email" placeholder="Email">
                  <input id="signup-password" type="password" placeholder="Password" autocomplete="new-password">
                  <input id="signup-password-check" type="password" placeholder="Confirm password" autocomplete="new-password">

                  <button type="button" id="btn-signup">Sign up</button>
                </form>

                <p>Already have an account? <a href="">Login</a> </p>
            </section>
        `
    );
  }
}

const signupPage = new SignupPage();
export default signupPage;
