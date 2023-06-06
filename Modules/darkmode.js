const darkMode = () => {
  const body = document.getElementById("main-body");
  const toggleModeButton = document.getElementById("mode-button");
  let btnText = document.getElementById("btn-text");
  const darkMode = localStorage.getItem("dark-mode");

  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  };
  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  };

  if (darkMode === "enabled") {
    btnText.innerText = "Light Mode";
    enableDarkMode(); // set state of darkMode on page load
  }

  toggleModeButton.addEventListener("click", (e) => {
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
      enableDarkMode();
      btnText.innerText = "Light Mode";
    } else {
      disableDarkMode();
      btnText.innerText = "Dark Mode";
    }
  });
};

export default darkMode;
