console.log("app.js is running!");

async function login() {
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;
  const loginObject = { email: email, password: password };
  console.log(loginObject);
  const response = await fetch("http://localhost:3000/?action=login", {
    method: "POST",
    body: JSON.stringify(loginObject),
  });

  const data = await response.json();
  console.log(data);
  if (data.authenticated) {
    localStorage.setItem("userIsAuthenticated", true);
    localStorage.setItem("authUser", JSON.stringify(data.userData));
    // resetMessage();
    navigateTo("#/");
  }
  // else {
  //   document.querySelector(".login-message").innerHTML = data.error;
  // }
}

// function logout() {
//   //reset localStorage
//   localStorage.removeItem("userIsAuthenticated");
//   localStorage.removeItem("authUser");
//   //navigate to login
//   navigateTo("#/login");
// }

async function signup() {
  const firstname = document.querySelector("#signup-firstname").value;
  const lastname = document.querySelector("#signup-lastname").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  const passwordCheck = document.querySelector("#signup-password-check").value;

  const user = {
    firstname,
    lastname,
    email,
    password,
    passwordCheck,
  };
  console.log(user);

  const response = await fetch("http://localhost:3000/?action=signup", {
    method: "POST",
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log(data);
  if (data.signupSuccess) {
    // resetMessage();
    navigateTo("#/login");
  }
  // else {
  //   document.querySelector(".signup-message").innerHTML = data.error;
  // }
}

// function resetMessage() {
//   document.querySelector(".signup-message").innerHTML = "";
//   document.querySelector(".login-message").innerHTML = "";
// }

// event listeners
document.querySelector("#btn-login").onclick = () => login();
// document.querySelector("#btn-logout").onclick = () => logout();
document.querySelector("#btn-signup").onclick = () => signup();
