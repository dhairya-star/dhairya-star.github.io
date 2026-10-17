// =========================================================
// BrightPath Learning — script.js
// Only two small jobs:
//   1) Open/close the mobile navigation menu
//   2) Show the current year in the footer
// =========================================================

// 1) MOBILE MENU ------------------------------------------

// Find the elements we need on the page
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = siteNav.querySelectorAll("a");

// Open or close the menu
function setMenuOpen(isOpen) {
  siteNav.classList.toggle("is-open", isOpen);
  // aria-expanded tells screen readers whether the menu is open
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

// When the hamburger button is clicked, flip the menu state
navToggle.addEventListener("click", function () {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

// When a menu link is clicked, close the menu (so it doesn't cover the page)
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    setMenuOpen(false);
  });
});

// Pressing the Escape key also closes the menu
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

// 2) FOOTER YEAR ------------------------------------------
document.querySelector("#year").textContent = new Date().getFullYear();
