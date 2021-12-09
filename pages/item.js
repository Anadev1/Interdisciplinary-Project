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
                <div class="item__description-container">
                  <h2 class="item__title">Egg carton</h2>
                  <p class="item__posted-time">Posted 2 hours ago by <span>Alex K.</span></p>
                </div>
                <p class="item__price">10 DKK</p>
              </div>
              <div class="item__container">
                  <a class="btn btn__large">BUY</a>
              </div>
              <div class="item__map"></div>
              <h2 class="item__description-title">Description</h2>
              <p class="item__description">This egg carton has eggs in it and it’s amazing.<br>
                You can make an omlette or you can use it in a cake. Up to you. </p>
            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
