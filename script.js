const btn = document.querySelector(".custom-dropdown-btn");
const menu = document.querySelector(".custom-dropdown-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
  }
});
