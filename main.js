const body = document.getElementById("main-body");
const favouriteStrip = document.querySelector(".favourite-box");
const toggleModeButton = document.querySelector("#mode-button");
const favouriteButton = document.querySelector("#favourite-button");
const cards = document.querySelectorAll(".card-container");

const onCardClick = () => {
  location.href = "details.html";
};

const toggleMode = () => {
  body.classList.toggle("dark-mode");
};

const showFavouriteList = () => {
  favouriteStrip.classList.toggle("hidden");
};

favouriteButton.addEventListener("click", showFavouriteList);
toggleModeButton.addEventListener("click", toggleMode);
cards.forEach((card) => {
  card.addEventListener("click", onCardClick);
});
