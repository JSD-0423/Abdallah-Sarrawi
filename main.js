import DarkModeModule from "./Modules/darkmode.js";
import showHideFavouritePanel from "./Modules/favouritepanel.js";
import mainPage from "./Modules/mainPage.js";
const cardsContainer = document.querySelector(".cards-container");

const onCardClick = (event) => {};

cardsContainer.addEventListener("click", (event) => {
  const clickedCardId = event.target.closest(".card-container").id;
  console.log("clickedCardId", clickedCardId);
  location.href = `details.html?id=${+clickedCardId}`;
});

DarkModeModule();
showHideFavouritePanel();
mainPage();
