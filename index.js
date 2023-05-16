const body = document.getElementById("main-body");
const toggleModeButton = document.querySelector("#mode-button");

const toggleMode = () => {
  body.classList.toggle("dark-mode");
};

toggleModeButton.addEventListener("click", toggleMode);
