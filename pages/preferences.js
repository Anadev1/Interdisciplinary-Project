import router from "../router.js";

export default class PreferencesPage {
  constructor(id) {
    this.id = id;
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
            <section id="${this.id}" class="page">
                <h1>${this.id}</h1>
            </section>
        `
    );
  }
}
