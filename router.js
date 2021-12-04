import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";
import PreferencesPage from "./pages/preferences.js";
import FeedPage from "./pages/feed.js";
import ItemPage from "./pages/item.js";
import CategoryPage from "./pages/category.js";
import AddItemPage from "./pages/addItem.js";
import MapPage from "./pages/map.js";
import ProfilePage from "./pages/profile.js";
import EditProfilePage from "./pages/editProfile.js";
import InfoPage from "./pages/info.js";
import CheckoutPage from "./pages/checkout.js";

class Router {
  constructor() {
    this.routes = [
      {
        path: "/",
        view: new FeedPage("feed"),
      },
      {
        path: "/signup",
        view: new SignupPage("signup"),
      },
      {
        path: "/login",
        view: new LoginPage("login"),
      },
      {
        path: "/preferences",
        view: new PreferencesPage("preferences"),
      },
      {
        path: "/item/:id",
        view: new ItemPage("item"),
      },
      {
        path: "/additem",
        view: new AddItemPage("addItem"),
      },
      {
        path: "/category",
        view: new CategoryPage("category"),
      },
      {
        path: "/map",
        view: new MapPage("map"),
      },
      {
        path: "/profile/:id",
        view: new ProfilePage("profile"),
      },
      {
        path: "/editprofile",
        view: new EditProfilePage("editProfile"),
      },
      {
        path: "/info",
        view: new InfoPage("info"),
      },
      {
        path: "/checkout",
        view: new CheckoutPage("checkout"),
      },
    ];
    //declaring properties: pages and navLinks. Initialised in init().
    this.pages;
    this.navLinks;
    this.basePath = location.pathname.replace("index.html", "");
  }

  /**
   * Initialising the router, calling attachNavLinkEvents(), popstate event and navigateTo()
   */
  init() {
    this.pages = document.querySelectorAll(".page");
    this.navLinks = document.querySelectorAll("nav a");
    this.attachNavLinkEvents();
    window.addEventListener("popstate", () => this.showPage(location.pathname)); // change page when using back and forth in browser
    this.navigateTo(location.pathname);
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
   * props can be passed from one component (page) to another through the router.navigateTo
   */
  navigateTo(path, props) {
    window.history.pushState({}, path, path);
    this.showPage(path, props);
  }

  showPage(path, props = {}) {
    this.hideAllPages(); // hide all pages
    const route = this.matchRoute(path, props); // finds a matching route by the path
    route.view.beforeShow(props); // before we display the page, beforeShow is called inside of the page. By that we can execute stuff and use passed props (properties).
    document.getElementById(route.view.id).style.display = "block"; // chaning display to block of the view (page)
    this.setActiveTab(route.path);
  }

  /**
   * returns a route from this.routes matching the path name
   */
  matchRoute(path, props) {
    const route = this.routes.find((route) => {
      if (route.path.includes("/:id")) {
        const mainRoute = route.path.split("/:id")[0];
        if (path.includes(mainRoute)) {
          props.id = path.split("/").pop();
          return route;
        }
      } else if (route.path.includes(path)) {
        return route;
      }
    });

    return route;
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
}

const router = new Router();
export default router;
