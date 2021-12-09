import service from "../service.js";

export default class CheckoutPage {
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
            <section id="checkout" class="page">
              <div class="checkout__title-container">
                <h2 class="checkout__title">CHECKOUT</h2>
              </div>
              
              <div class="checkout__logo-container">
                <img src="../img/shareat-logo.svg"  class="checkout__logo"/>
              </div>

              <div class="checkout__text-container">
                <h2 classs="checkout__text-title">
                  Thank you for purchasing this product! You just made the world a better place.
                </h2>
                <p class="checkout__text-subtitle">Choose your payment method:</p>
              </div>

              <div class="checkout__payment-container">
                <div class="checkout__payment-method">
                  <img src="../img/mobilepay.png" class="checkout__payment-logo" />
                </div>
                <div class="checkout__payment-method">
                  <p class="checkout__payment-title">Pay at the meeting point</p>
                </div>
              </div>

              <div class="checkout__button-container">
                <a href="#/feed" class="checkout__return-button">Back to the feed</a>
              </div>
              
              
            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
