import loader from "../components/loader.js";
import nav from "../components/nav.js";
import router from "../router.js";
import service from "../service.js";

export default class FeedPage {
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
              <h1>${this.id}</h1>
            </section>
        `
    );
  }

  beforeShow(props) {
    nav.show();
  }
}
