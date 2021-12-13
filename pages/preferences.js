import service from "../service.js";
import router from "../router.js";

export default class PreferencesPage {
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
            <section id="preferences" class="page">
            <div class="preferences__title-container">
                <h2 class="preferences__title">PREFERENCES</h2>
              </div>

              <h2 class="preferences__subtitle">Dietary restrictions</h2>
                <div class="preferences__dietary-container">
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Vegan</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Gluten free</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Vegetarian</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Dairy free</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Kosher</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Diabetes</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Low carb</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Halal</p>
                  </div>
                  <div class="preferences__dietary-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Keto</p>
                  </div>

                </div>

                <h2 class="preferences__subtitle">Allergies</h2>
                <div class="preferences__allergies-container">
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Vegan</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Gluten free</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Vegetarian</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Dairy free</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Kosher</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Diabetes</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Low carb</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Halal</p>
                  </div>
                  <div class="preferences__allergy-preference">
                    <img src="../img/plus.svg" class="preferences__plus-icon"/>
                    <p class="preferences__preference-title">Keto</p>
                  </div>
                </div>

                <a href="#/feed" id="btn-signup" class="btn btn__large preferences__button">Create account</a>

            </section>
        `;
  }

  beforeShow(props) {
    console.log(props);
  }
}
