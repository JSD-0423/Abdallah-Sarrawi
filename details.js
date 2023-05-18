const body = document.getElementById("main-body");
const toggleModeButton = document.getElementById("mode-button");
const favouriteButton = document.querySelector("#favourite-button");
const favouriteStrip = document.querySelector(".favourite-box");

const toggleMode = () => {
  body.classList.toggle("dark-mode");
};

const showFavouriteList = () => {
  favouriteStrip.classList.toggle("hidden");
};

console.log(toggleModeButton);

toggleModeButton.addEventListener("click", toggleMode);
favouriteButton.addEventListener("click", showFavouriteList);

// if (favouriteButton) {
//   favouriteButton.addEventListener("click", () => {
//     console.log("btn clicked");
//   });
// }
