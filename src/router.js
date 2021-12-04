import signupPage from "./pages/signup.js";
import loginPage from "./pages/login.js";
import preferencesPage from "./pages/preferences.js";
import feedPage from "./pages/feed.js";
import itemPage from "./pages/item.js";
import categoryPage from "./pages/category.js";
import addItemPage from "./pages/addItem.js";
import mapPage from "./pages/map.js";
import profilePage from "./pages/profile.js";
import editProfilePage from "./pages/editProfile.js";
import infoPage from "./pages/info.js";
import checkoutPage from "./pages/checkout.js";

class Router {
  constructor() {
    this.routes = [
      {
        path: "#/",
        view: feedPage,
      },
      {
        path: "#/signup",
        view: signupPage,
      },
      {
        path: "#/login",
        view: loginPage,
      },
      {
        path: "#/preferences",
        view: preferencesPage,
      },
      {
        path: "#/item/:id",
        view: itemPage,
      },
      {
        path: "#/additem",
        view: addItemPage,
      },
      {
        path: "#/category",
        view: categoryPage,
      },
      {
        path: "#/map",
        view: mapPage,
      },
      {
        path: "#/profile/:id",
        view: profilePage,
      },
      {
        path: "#/editprofile",
        view: editProfilePage,
      },
      {
        path: "#/info",
        view: infoPage,
      },
      {
        path: "#/checkout",
        view: checkoutPage,
      },
    ];

    this.basePath = location.pathname.replace("index.html", ""); // remove index.html from path
    this.pages = document.querySelectorAll(".page");
    this.navLinks = document.querySelectorAll("nav a");
    this.initRouter();
  }

  /**
   * Changing display to none for all pages
   */
  hideAllPages() {
    for (const page of this.pages) {
      page.style.display = "none";
    }
  }

  /**
   * Navigating SPA to specific page by given path
   */
  navigateTo(path, params) {
    window.history.pushState({}, path, this.basePath + path);
    this.showPage(path, params);
  }

  showPage(path, params = {}) {
    this.hideAllPages(); // hide all pages
    const currentRoute = this.routes.find((route) => {
      if (route.path.includes("/:id")) {
        const mainRoute = route.path.split("/:id")[0];
        if (path.includes(mainRoute)) {
          params.id = path.split("/").pop();
          return route;
        }
      } else if (route.path.includes(path)) {
        return route;
      }
    });
    console.log(currentRoute);
    currentRoute.view.beforeShow(params);
    document.getElementById(currentRoute.view.id).style.display = "block"; // show page by given path
    this.setActiveTab(path);
  }

  /**
   * sets active menu item by given path
   */
  setActiveTab(path) {
    for (const link of this.navLinks) {
      if (path === link.getAttribute("href")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  /**
   * Attaching event to nav links and preventing default anchor link event
   */
  attachNavLinkEvents() {
    const navLinks = document.querySelectorAll(".router-link");
    for (const link of navLinks) {
      link.addEventListener("click", (event) => {
        const path = link.getAttribute("href");
        this.navigateTo(path);
        event.preventDefault();
      });
    }
  }

  goBack() {
    history.back();
  }

  /**
   * Initialising the router, calling attachNavLinkEvents(), popstate event and navigateTo()
   */
  initRouter() {
    this.attachNavLinkEvents();
    window.addEventListener("popstate", () => this.showPage(location.hash)); // change page when using back and forth in browser

    this.navigateTo(location.hash);
  }
}

const router = new Router();
export default router;
