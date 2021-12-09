import service from "../service.js";

export default class AroundYouPage {
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
            <section id="aroundyou" class="page">
              <div class="aroundyou__title-container">
                <h2 class="aroundyou__title">FEED</h2>
              </div>

              <h2 class="aroundyou__subtitle">Around you</h2>
              
              <div class="aroundyou__items-container">
                <div class="aroundyou__item-container">
                  <img src="../img/eggs.png" alt="item" class="aroundyou__item-image" />
                  <p class="aroundyou__item-details">kr. 10 - Egg carton</p>
                  <span class="aroundyou__item-expiration">EXP: 2 days</span>
                </div>

                <div class="aroundyou__item-container">
                  <img src="../img/candy.png" alt="item" class="aroundyou__item-image" />
                  <p class="aroundyou__item-details">kr. 5 - Various treats</p>
                  <span class="aroundyou__item-expiration">EXP: 45 days</span>
                </div>

                <div class="aroundyou__item-container">
                  <img src="../img/meat.png" alt="item" class="aroundyou__item-image" />
                  <p class="aroundyou__item-details">kr. 20 - Beef steak</p>
                  <span class="aroundyou__item-expiration">EXP: 3 days</span>
                </div>

                <div class="aroundyou__item-container">
                  <img src="../img/salad.png" alt="item" class="aroundyou__item-image" />
                  <p class="aroundyou__item-details">kr. 16 - Veggies mix</p>
                  <span class="aroundyou__item-expiration">EXP: 4 days</span>
                </div>

                <div class="aroundyou__item-container">
                  <img src="../img/banana.png" alt="item" class="aroundyou__item-image" />
                  <p class="aroundyou__item-details"><span>FREE</span> - Banana</p>
                  <span class="aroundyou__item-expiration">EXP: ???</span>
                </div>

                <div class="aroundyou__item-container">
                  <img src="../img/avocado.png" alt="item" class="aroundyou__item-image" />
                  <p class="aroundyou__item-details">kr. 5 - Avocado</p>
                  <span class="aroundyou__item-expiration">EXP: ???</span>
                </div>
              </div>

            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
