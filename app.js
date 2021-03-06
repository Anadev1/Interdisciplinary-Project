// import nav from "./components/nav.js";
import Router from "./router.js";
import Nav from "./components/nav.js";

import AddItemPage from "./pages/addItem.js";
import AroundYouPage from "./pages/aroundyou.js";
import CheckoutPage from "./pages/checkout.js";
import EditProfilePage from "./pages/editprofile.js";
import FeedPage from "./pages/feed.js";
import InfoPage from "./pages/info.js";
import NewsPage from "./pages/news.js";
import TipsPage from "./pages/tips.js";
import IntroPage from "./pages/intro.js";
import ItemPage from "./pages/item.js";
import LoginPage from "./pages/login.js";
import MapPage from "./pages/map.js";
import PreferencesPage from "./pages/preferences.js";
import ProfilePage from "./pages/profile.js";
import SignupPage from "./pages/signup.js";

// app - dom element
const app = document.querySelector("#app");
const pages = document.querySelector("#pages");

// init pages
const addItemPage = new AddItemPage(pages);
const aroundYouPage = new AroundYouPage(pages);
const checkoutPage = new CheckoutPage(pages);
const editProfilePage = new EditProfilePage(pages);
const feedPage = new FeedPage(pages);
const infoPage = new InfoPage(pages);
const newsPage = new NewsPage(pages);
const tipsPage = new TipsPage(pages);
const introPage = new IntroPage(pages);
const itemPage = new ItemPage(pages);
const loginPage = new LoginPage(pages);
const mapPage = new MapPage(pages);
const preferencesPage = new PreferencesPage(pages);
const profilePage = new ProfilePage(pages);
const signupPage = new SignupPage(pages);

const nav = new Nav(app);
// init spa service
const router = new Router(app, "#/feed");

document.querySelector("#btn-signup").onclick = () => signupPage.signup();
document.querySelector("#btn-login").onclick = () => loginPage.login();
document.querySelector("#btn-logout").onclick = () => profilePage.logout();
document.querySelector("#btn-add-item").onclick = () => addItemPage.addItem();

window.selectItem = (id) => {
  aroundYouPage.singleItem(id);
  Router.navigateTo("#/item");
};
