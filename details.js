import DarkModeModule from "./Modules/darkmode.js";
import showHideFavouritePanel from "./Modules/favouritepanel.js";
import renderDetails from "./utils/renderDetails.js";
import fetchData from "./utils/fetchData.js";
showHideFavouritePanel();
DarkModeModule();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetchData(`https://tap-web-1.herokuapp.com/topics/details/${id}`).then(
  (data) => {
    console.log("data", data);
    renderDetails(data);
  }
);
console.log(id);
