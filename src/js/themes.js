document.querySelector(".toggle input").addEventListener("change", (event) => {
  document.documentElement.dataset.mode = event.currentTarget.checked
    ? "dark"
    : "light";
});
