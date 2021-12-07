export default class Nav {
  constructor(domElement) {
    this.domElement = domElement;
    this.render();
  }
  render() {
    this.domElement.insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
      <nav class="tabbar">
          <a href="#/feed" class="tabbar__nav-link tabbar__nav-link--home"></a>
          <a href="#/info" class="tabbar__nav-link tabbar__nav-link--info"></a>
          <a href="#/additem" class="tabbar__nav-link tabbar__nav-link--add-item"></a>
          <a href="#/map" class="tabbar__nav-link tabbar__nav-link--map"></a>
          <a href="#/profile" class="tabbar__nav-link tabbar__nav-link--profile"></a>
      </nav>
    `
    );
  }
}
