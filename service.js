import Router from "./router.js";

class Service {
  constructor() {}

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
