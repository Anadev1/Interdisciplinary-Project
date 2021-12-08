class Router {
  constructor(app, defaultPage) {
    this.defaultPage = defaultPage;
    this.basePath = location.pathname.replace("index.html", ""); // remove index.html from path
    this.pages = app.querySelectorAll(".page");
    this.navItems = app.querySelectorAll(".nav-link");
    this.routes = {
      "#/feed": "feed",
      "#/additem": "additem",
      "#/aroundyou": "aroundyou",
      "#/checkout": "checkout",
      "#/editprofile": "editprofile",
      "#/info": "info",
      "#/news": "news",
      "#/tips": "tips",
      "#/intro": "intro",
      "#/item": "item",
      "#/signup": "signup",
      "#/login": "login",
      "#/map": "map",
      "#/preferences": "preferences",
      "#/profile": "profile",
    };
    this.initRouter();
  }

  initRouter() {
    this.attachNavLinkEvents();
    window.addEventListener("popstate", () => this.showPage(location.hash));

    if (this.routes[location.hash]) {
      this.defaultPage = location.hash;
    }
    this.navigateTo(this.defaultPage);
  }

  attachNavLinkEvents() {
    for (const link of this.navItems) {
      link.addEventListener("click", (event) => {
        const path = link.getAttribute("href");
        this.navigateTo(path);
        event.preventDefault();
      });
    }
  }

  // navigate to a new view/page by changing href
  navigateTo(path) {
    window.history.pushState({}, path, this.basePath + path);
    this.showPage(path);
  }

  showPage(path) {
    if (
      path == "#/login" ||
      path == "#/signup" ||
      path == "#/intro" ||
      path == "#/preferences"
    ) {
      this.hideAllPages();
      document.querySelector(`#${this.routes[path]}`).style.display = "block"; // show page by given path
      this.setActiveTab(path);
      this.hideNav(true);
    } else {
      this.hideAllPages();
      document.querySelector(`#${this.routes[path]}`).style.display = "block"; // show page by given path
      this.setActiveTab(path);
      this.hideNav(false);
    }

    if (path == "#/feed") {
      document.querySelector(".tabbar__nav-link--home").style.background =
        'url("../../img/home-active.svg") no-repeat';
    } else {
      document.querySelector(".tabbar__nav-link--home").style.background =
        'url("../../img/home-passive.svg") no-repeat';
    }

    if (path == "#/info") {
      document.querySelector(".tabbar__nav-link--info").style.background =
        'url("../../img/info-active.svg") no-repeat';
    } else {
      document.querySelector(".tabbar__nav-link--info").style.background =
        'url("../../img/info-passive.svg") no-repeat';
    }

    if (path == "#/map") {
      document.querySelector(".tabbar__nav-link--map").style.background =
        'url("../../img/map-active.svg") no-repeat';
    } else {
      document.querySelector(".tabbar__nav-link--map").style.background =
        'url("../../img/map-passive.svg") no-repeat';
    }

    if (path == "#/profile") {
      document.querySelector(".tabbar__nav-link--profile").style.background =
        'url("../../img/profile-active.svg") no-repeat';
    } else {
      document.querySelector(".tabbar__nav-link--profile").style.background =
        'url("../../img/profile-passive.svg") no-repeat';
    }
  }

  // hide all pages
  hideAllPages() {
    for (const page of this.pages) {
      page.style.display = "none";
    }
  }

  // sets active tabbar/ menu item
  setActiveTab(pathname) {
    for (const link of this.navItems) {
      if (pathname === link.getAttribute("href")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  hideNav(hide) {
    if (hide) {
      document.querySelector(".tabbar").style.display = "none";
    } else {
      document.querySelector(".tabbar").style.display = "block";
    }
  }
}

export default Router;
