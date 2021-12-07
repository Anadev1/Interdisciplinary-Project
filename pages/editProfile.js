import service from "../service.js";

export default class EditProfilePage {
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
            <section id="editprofile" class="page">
              <h1>editprofile</h1>
            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
