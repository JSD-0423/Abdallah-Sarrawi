const showHideFavouritePanel = () => {
  const favouriteStrip = document.querySelector(".favourite-box");
  const favouriteButton = document.querySelector("#favourite-button");

  const favouriteList = localStorage.getItem("favourite-panel");

  const showFavouriteList = () => {
    favouriteStrip.classList.remove("hidden");
    localStorage.setItem("favourite-panel", "enabled");
  };
  const hideFavouriteList = () => {
    favouriteStrip.classList.add("hidden");
    localStorage.setItem("favourite-panel", "disabled");
  };
  if (favouriteList === "enabled") {
    showFavouriteList(); // set state of favouritePanel on page load
  }
  favouriteButton.addEventListener("click", (e) => {
    const favouriteList = localStorage.getItem("favourite-panel");
    if (favouriteList === "disabled") {
      showFavouriteList();
    } else {
      hideFavouriteList();
    }
  });
};

export default showHideFavouritePanel;
