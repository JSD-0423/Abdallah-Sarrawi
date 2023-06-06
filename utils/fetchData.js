const loader = document.querySelector(".loader");

const fetchData = async (url) => {
  try {
    console.log("loader", loader);
    loader.classList.remove("hidden");
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("error", e);
    const message = `Something went wrong. Web topics failed to load.: ${response.status}`;
    loader.classList.add("hidden");
  }
};

export default fetchData;
