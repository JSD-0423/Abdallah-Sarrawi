import fetchData from "../utils/fetchData.js";
import renderCards from "../utils/renderCards.js";
const sortDropdown = document.getElementById("sort");
const searchBar = document.getElementById("search-bar-input");
const filter = document.getElementById("filter");

const sortData = (dataArray, selectedKey) => {
  const sortedData = dataArray.sort((a, b) => {
    if (a[selectedKey] < b[selectedKey]) {
      return -1;
    }
    if (a[selectedKey] > b[selectedKey]) {
      return 1;
    }
    return 0;
  });
  return sortedData;
};

const mappingObject = {
  "Author Name": "name",
  "Topic Title": "topic",
};

let fetchedData = [];
let filterCategories = [];
let timer;

const mainPage = () => {
  fetchData("https://tap-web-1.herokuapp.com/topics/list").then((data) => {
    filterCategories = new Set(data.map((item) => item.category));
    filterCategories.forEach((item) => {
      const category = `<option value=${item}>${item}</option>`;
      filter.insertAdjacentHTML("beforeend", category);
    });
    fetchedData = data;
    const selectedValue = sortDropdown.value;
    const sortedData = sortData(fetchedData, mappingObject[selectedValue]);
    renderCards(sortedData);
  });

  sortDropdown.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const sortedData = sortData(fetchedData, mappingObject[selectedValue]);
    renderCards(sortedData);
  });

  searchBar.addEventListener("input", (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const url = `https://tap-web-1.herokuapp.com/topics/list?phrase=${event.target.value}`;
      fetchData(url)
        .then((data) => {
          const selectedValue = sortDropdown.value;
          fetchedData = data;
          const sortedData = sortData(
            fetchedData,
            mappingObject[selectedValue]
          );
          renderCards(sortedData);
        })
        .catch((e) => console.log("e", e));
    }, 1000);
  });
};

export default mainPage;
