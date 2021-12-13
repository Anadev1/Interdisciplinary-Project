import Router from "./router.js";

class Service {
  constructor() {}

  async signup() {
    const firstname = document.querySelector("#signup-firstname").value;
    const lastname = document.querySelector("#signup-lastname").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    const passwordCheck = document.querySelector(
      "#signup-password-check"
    ).value;

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
      Router.navigateTo("#/feed");
    } else {
      document.querySelector(".signup-message").innerHTML = data.error;
    }
  }

  // async uploadImage(imageFile) {
  //   let formData = new FormData();
  //   formData.append("fileToUpload", imageFile);

  //   const response = await fetch(`${this.baseUrl}?action=uploadImage`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: formData,
  //   });
  //   // waiting for the result
  //   const result = await response.json();
  //   return result;
  // }

  // async initMap() {
  //   // The map, centered at Uluru
  //   new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: uluru,
  //   });
  // }
}

const service = new Service();
export default service;
