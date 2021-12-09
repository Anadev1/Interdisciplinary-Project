import service from "../service.js";

export default class NewsPage {
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
            <section id="news" class="page">
              <!--<h1>news</h1>-->
              <ul class="news__topBar">
                <li data-num="3" class="tab wave dark" onclick="waveBtn()"><a href="#/info">INFO</a></li>
                <li data-num="2" class="tab wave dark" onclick="waveBtn()"><a href="#/tips">TIPS</a></li>
                <li data-num="1" class="tab wave dark" onclick="waveBtn()"><a href="#/news">NEWS</a></li>
                <div class="indicator"></div>
              </ul>
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
