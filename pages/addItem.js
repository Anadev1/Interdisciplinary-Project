import service from "../service.js";

export default class AddItemPage {
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
            <section id="additem" class="page">
              <div class="additem__title-container">
                <h2 class="additem__title">ADD ITEM</h2>
              </div>

              <div class="additem__form-container">
               <form class="additem__form">
                <input type="text" name="name" id="name" placeholder="Item Name" /><br>
                <input type="textarea" name="description" id="description" placeholder="Item Description" /><Br>
                <input type="file" name="images" id="images" accept="image/png, image/jpg" />
               </form>
              </div>

              <div class="additem__allergens-container">
                <h2 class="additem__allergens-title">Allergens/Dietary restrictions</h2>
                <div class="additem__search-container">
                  <input type="search" name="search" id="search" placeholder="Search..." />
                </div>
              </div>
            </section>
        `;
  }
}
