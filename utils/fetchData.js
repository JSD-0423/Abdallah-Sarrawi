const loader = document.querySelector(".loader");
const errorMessage = document.querySelector(".error-container");

const fetchData = async (url) => {
  try {
    errorMessage.classList.add("hidden");
    loader.classList.remove("hidden");
    const response = await fetch(url);
    const data = await response.json();
    loader.classList.add("hidden");
    return data;
  } catch (e) {
    loader.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
};

export default fetchData;
