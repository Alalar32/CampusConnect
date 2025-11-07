const toggleBtn = document.getElementById("toggleBtn");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
