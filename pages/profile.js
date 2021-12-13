import service from "../service.js";
import router from "../router.js";

export default class ProfilePage {
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
            <section id="profile" class="page">
              <div class="profile__title-container">
                <h2 class="profile__title">PROFILE</h2>
                <button class="btn btn__small editprofile__save-button">LOG OUT</button>
              </div>
              <div class="profile__info-container">
                <img src="../img/profile.png" class="profile__image"/>
                <a href="#/editprofile" class="profile__edit-button">Edit</a>
                <div class="profile__text-container">
                  <p class="profile__name">Maria Thompson</p>
                  <p class="profile__email">mthompson@gmail.com</p>
                </div>
              </div>
              <div class="profile__preferences-container">
                <h2 class="profile__preferences-title">Preferences</h2>
                <div class="profile__preferences-items">
                  <p class="profile__preference">Vegan</p>
                  <p class="profile__preference">Gluten free</p>
                </div>
              </div>
              <div class="profile__posts-container">
                <h2 class="profile__posts-title">My posts</h2>
                <div class="profile__posts">
                  <div class="aroundyou__item-container">
                    <img src="../img/salad.png" alt="item" class="aroundyou__item-image" />
                    <p class="aroundyou__item-details">kr. 16 - Veggies mix</p>
                    <span class="aroundyou__item-expiration">EXP: 4 days</span>
                  </div>
                  <div class="aroundyou__item-container">
                    <img src="../img/eggs.png" alt="item" class="aroundyou__item-image" />
                    <p class="aroundyou__item-details">kr. 10 - Egg carton</p>
                    <span class="aroundyou__item-expiration">EXP: 2 days</span>
                  </div>
                  <div class="aroundyou__item-container">
                    <img src="../img/salad.png" alt="item" class="aroundyou__item-image" />
                    <p class="aroundyou__item-details">kr. 16 - Veggies mix</p>
                    <span class="aroundyou__item-expiration">EXP: 4 days</span>
                  </div>
                </div>
              </div>
            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
