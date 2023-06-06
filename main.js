import DarkModeModule from "./Modules/darkmode.js";
import showHideFavouritePanel from "./Modules/favouritepanel.js";
import mainPage from "./Modules/mainPage.js";
const cards = document.querySelectorAll(".card-container");

const onCardClick = () => {
  location.href = "details.html";
};

cards.forEach((card) => {
  card.addEventListener("click", onCardClick);
});

DarkModeModule();
showHideFavouritePanel();
mainPage();
