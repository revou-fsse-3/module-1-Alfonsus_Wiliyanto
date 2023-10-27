// Darkmode Iconset
let darkTheme = document.body;
let iconChange = document.getElementById("iconChange");
function darkMode() {
  darkTheme.classList.toggle("darkMode");
  darkTheme.classList.contains("darkMode")
    ? (iconChange.src = "assets/img/sun.png")
    : (iconChange.src = "assets/img/moon.png");
}

// Responsive Navbar
let sidebar = document.querySelector(".logoMobile");
sidebar.onclick = function () {
  let navSidebar = document.querySelector("nav");
  let menuSidebar = document.querySelector(".menuWrapper");
  let buttonSidebar = document.querySelector(".menuButton");
  navSidebar.classList.toggle("active");
  menuSidebar.classList.toggle("active");
  buttonSidebar.classList.toggle("active");
  sidebar.classList.toggle("rotate");
};

// Page Orbserver
const observer = new IntersectionObserver((area) => {
  area.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    } else {
      entry.target.classList.remove("animation");
    }
  });
});
const leftToRight = document.querySelectorAll(".hidden");
leftToRight.forEach((el) => observer.observe(el));
const botToTop = document.querySelectorAll(".bottom");
botToTop.forEach((el) => observer.observe(el));

// Submit Alert

function submit() {
  alert("Thanks for your review !");
}
