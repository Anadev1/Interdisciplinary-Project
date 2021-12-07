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
          <a href="#/feed" class="nav-link">Feed</a>
          <a href="#/intro" class="nav-link">Intro</a>
          <a href="#/signup" class="nav-link">Sign Up</a>
          <a href="#/login" class="nav-link">Login</a>
          <a href="#/map" class="nav-link">Map</a>
          <a href="#/preferences" class="nav-link">Preferences</a>
          <a href="#/aroundyou" class="nav-link">Around You</a>
          <a href="#/profile" class="nav-link">Profile</a>
          <a href="#/item" class="nav-link">Item</a>
          <a href="#/additem" class="nav-link">Add Item</a>
          <a href="#/info" class="nav-link">Info</a>
          <a href="#/editprofile" class="nav-link">Edit Profile</a>
          <a href="#/checkout" class="nav-link">Checkout</a>
      </nav>
    `
    );
  }
}
