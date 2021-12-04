class Nav {
  constructor() {}

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <nav class="tabbar">
               <a href="/" class="router-link">Feed</a>
               <a href="/signup" class="router-link">Signup</a>
               <a href="/preferences" class="router-link">Preferences</a>
            </nav>
        `
    );
  }
}

const nav = new Nav();
export default nav;
