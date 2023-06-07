import fetchData from "../utils/fetchData.js";
import renderCards from "../utils/renderCards.js";
const sortDropdown = document.getElementById("sort");
const searchBar = document.getElementById("search-bar-input");
const filterDropdown = document.getElementById("filter");

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
const filterData = (dataArray, property, value) => {
  if (value === "Default") return dataArray;
  const filteredArray = dataArray.filter((obj) => obj[property] === value);
  console.log(filteredArray);
  return filteredArray;
};

const sortingMappingObject = {
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
      const category = `<option value="${item}">${item}</option>`;
      filterDropdown.insertAdjacentHTML("beforeend", category);
    });

    fetchedData = data;

    const selectedValue = sortDropdown.value;
    const sortedData = sortData(
      fetchedData,
      sortingMappingObject[selectedValue]
    );
    renderCards(sortedData);
  });

  filterDropdown.addEventListener("change", (e) => {
    let selectedFilter = e.target.value;
    console.log("fetchedData from filter", fetchedData);

    const filteredData = filterData(fetchedData, "category", selectedFilter);

    renderCards(filteredData);
  });

  sortDropdown.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const selectedFilter = filterDropdown.value;
    const sortedData = sortData(
      fetchedData,
      sortingMappingObject[selectedValue]
    );
    const filteredData = filterData(sortedData, "category", selectedFilter);
    renderCards(filteredData);
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
            sortingMappingObject[selectedValue]
          );
          renderCards(sortedData);
        })
        .catch((e) => console.log("e", e));
    }, 1000);
  });
};

export default mainPage;
