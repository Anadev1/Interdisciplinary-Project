import service from "../service.js";

export default class InfoPage {
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
            <section id="info" class="page">
            <!--<h1>info</h1>-->
              <ul class="info__topBar">
                <li data-num="3" class="tab wave dark" onclick="waveBtn()"><a href="#/info">INFO</a></li>
                <li data-num="2" class="tab wave dark" onclick="waveBtn()"><a href="#/tips">TIPS</a></li>
                <li data-num="1" class="tab wave dark" onclick="waveBtn()"><a href="#/news">NEWS</a></li>
                <div class="indicator"></div>
              </ul>


              <div class="container">
                <div class="container__content">
                  <article>
                  <h1>Food waste</h1>
                  <p>Would you go into a supermarket, buy three shopping bags of food, and then immediately throw one away? Statistically, that’s what’s happening to our food today. One third of all the food that is produced for human consumption is wasted. When we waste food, we waste all the resources that go into producing and transporting the food, such as land, water and fuel use, without gaining any of the benefits of feeding people. When food ends up in landfill it also contributes to greenhouse gas emissions. Food waste remains a problem in Europe and around the world.</p>
                  <h2>What is the difference between food waste and food loss?</h2>
                  <p>In order to tackle food waste, understanding the problem is key to finding good solutions. A first step is to measure the amount of food that goes to waste and to understand where along the supply chain the waste is happening. Depending on where it happens along the supply chain, we use the terms food loss or food waste.</p>
                  </article>
                </div>
              </div>

            </section>
      `;
  }

  beforeShow(props) {
    console.log(props);
  }

  waveBtn() {
    "use strict";
    var btn = document.querySelectorAll(".wave"),
      tab = document.querySelector(".topBar"),
      indicator = document.querySelector(".indicator"),
      indi = 0;
    indicator.style.marginLeft = indi + "px";

    for (var i = 0; i < btn.length; i++) {
      btn[i].onmousedown = function (e) {
        var newRound = document.createElement("div"),
          x,
          y;

        newRound.className = "cercle";
        this.appendChild(newRound);

        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;

        newRound.style.left = x + "px";
        newRound.style.top = y + "px";
        newRound.className += " anim";

        indicator.style.marginLeft = indi + (this.dataset.num - 1) * 150 + "px";

        setTimeout(function () {
          newRound.remove();
        }, 1200);
      };
    }
  }
}
