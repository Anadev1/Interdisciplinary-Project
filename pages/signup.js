import router from "../router.js";

export default class SignupPage {
  constructor(id) {
    this.id = id;
    this.render();
    this.signup();
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
  async signup() {
    const firstname = document.querySelector("#signup-firstname").value;
    const lastname = document.querySelector("#signup-lastname").value;
    const age = document.querySelector("#signup-age").value;
    const gender = document.querySelector("#signup-gender").value;
    const username = document.querySelector("#signup-username").value;
    const password = document.querySelector("#signup-password").value;
    const passwordCheck = document.querySelector(
      "#signup-password-check"
    ).value;

    const user = {
      firstname,
      lastname,
      age,
      gender,
      username,
      password,
      passwordCheck,
    };
    console.log(user);

    const response = await fetch(
      "http://localhost:3000/php-login-service/?action=signup",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.signupSuccess) {
      resetMessage();
      navigateTo("#/login");
    } else {
      document.querySelector(".signup-message").innerHTML = data.error;
    }
  }
}
