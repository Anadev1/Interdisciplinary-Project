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
               <form class="additem__form" enctype="multipart/form-data">
                <input id="item-name" type="text" name="name" id="name" placeholder="Item Name" /><br>
                <textarea id="item-description" rows="15" name="description" id="description" placeholder="Item Description"></textarea><Br>
                <input id="item-price" type="text" name="price" id="price" placeholder="Item Price" /><br>
                <input id="item-image" type="file" name="fileToUpload" />

                <div class="additem__allergens-container">
                <h2 class="additem__allergens-title">Allergens/Dietary restrictions</h2>
                  <div class="additem__search-container">
                    <input type="search" name="search" id="search" placeholder="Search..." />
                  </div>
                </div>
                <button type="button" id="btn-add-item" class="btn btn__large additem__button">Add Item</button>
               </form>
              </div>

              
            </section>
        `;
  }
}
