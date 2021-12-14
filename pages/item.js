import service from "../service.js";

export default class ItemPage {
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
            <section id="item" class="page">
              <div class="item__image-container">
                <img src="../img/eggs-large.png" class="item__image" />
              </div>

              <div class="item__info-container">
                
              </div>
              
            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
