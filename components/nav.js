class Nav {
  constructor() {}

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <nav class="tabbar">
                <a href="/" class="router-link">Feed</a>
                <a href="/intro" class="router-link">Intro</a>
                <a href="/signup" class="router-link">Sign Up</a>
                <a href="/login" class="router-link">Login</a>
                <a href="/map" class="router-link">Map</a>
                <a href="/preferences" class="router-link">Preferences</a>
                <a href="/aroundyou" class="router-link">Around You</a>
                <a href="/profile" class="router-link">Profile</a>
                <a href="/item" class="router-link">Item</a>
                <a href="/additem" class="router-link">Add Item</a>
                <a href="/info" class="router-link">Info</a>
                <a href="/editprofile" class="router-link">Edit Profile</a>
                <a href="/checkout" class="router-link">Checkout</a>
            </nav>
        `
    );
  }

  show() {
    document.querySelector(".tabbar").classList.remove("hide");
  }

  hide() {
    document.querySelector(".tabbar").classList.add("hide");
  }
}

const nav = new Nav();
export default nav;
