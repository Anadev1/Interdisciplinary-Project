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
              <div class="editprofile__title-container">
                <h2 class="editprofile__title">EDIT PROFILE</h2>
                <a class="btn btn__small editprofile__save-button">SAVE</a>
              </div>

              <div class="editprofile__info-container">
                <img src="../img/profile.png" class="editprofile__image"/>
                <form class="editprofile__form">
                  <input type="text" name="first-name" id="first-name" placeholder="Maria"/>
                  <input type="text" name="last-name" id="last-name" placeholder="Thompson"/>
                  <input type="text" placeholder="mthompson@gmail.com"/>
                </form>
              </div>

              <div class="editprofile__preferences-container">
                <h2 class="editprofile__preferences-title">Preferences</h2>
                <div class="editprofile__search-container">
                  <input type="search" name="search" id="search" placeholder="Search and add" />
                </div>
              </div>
            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
