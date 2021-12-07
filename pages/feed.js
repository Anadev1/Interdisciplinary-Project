// import nav from "../components/nav.js";
import service from "../service.js";

export default class FeedPage {
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
            <section id="feed" class="page">
              <div class="feed__title-container">
                <h2 class="feed__title">FEED</h2>
              </div>
              
              <div class="feed__container">
                <div class="feed__text-container">
                  <h2 class="feed__container-title">Around you</h2>
                  <p class="feed__more">More</p>
                </div>
                <div class="feed__items-container">
                  <h1 class="feed__item">Item 1</h1>
                  <h1 class="feed__item">Item 2</h1>
                  <h1 class="feed__item">Item 3</h1>
                  <h1 class="feed__item">Item 4</h1>
                  <h1 class="feed__item">Item 5</h1>
                </div>
              </div>

               <div class="feed__container">
                <div class="feed__text-container">
                  <h2 class="feed__container-title">Vegetarian</h2>
                  <p class="feed__more">More</p>
                </div>
                <div class="feed__items-container">
                  <h1 class="feed__item">Item 1</h1>
                  <h1 class="feed__item">Item 2</h1>
                  <h1 class="feed__item">Item 3</h1>
                  <h1 class="feed__item">Item 4</h1>
                  <h1 class="feed__item">Item 5</h1>
                </div>
              </div>

               <div class="feed__container">
                <div class="feed__text-container">
                  <h2 class="feed__container-title">Gluten free</h2>
                  <p class="feed__more">More</p>
                </div>
                <div class="feed__items-container">
                  <h1 class="feed__item">Item 1</h1>
                  <h1 class="feed__item">Item 2</h1>
                  <h1 class="feed__item">Item 3</h1>
                  <h1 class="feed__item">Item 4</h1>
                  <h1 class="feed__item">Item 5</h1>
                </div>
              </div>
        `;
  }

  beforeShow(props) {
    nav.show();
  }
}
