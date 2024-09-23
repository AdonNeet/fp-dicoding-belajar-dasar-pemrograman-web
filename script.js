/**
 * Toggles the navigation menu for small screens (<=500px width).
 * Handles the opening and closing of the drop-down menu.
 * 
 * @type {HTMLElement} toggleButton - The button that toggles the menu.
 * @type {HTMLElement} navMenu - The navigation menu that will be shown or hidden.
 * @type {NodeList} menuLinks - A list of anchor elements in the menu.
 */
const toggleButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu a");

/**
 * Event listener for the toggle button click event.
 * Toggles the 'active' class on the navigation menu.
 */
toggleButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

/**
 * Event listener for clicking outside the menu.
 * Deactivates the 'active' class if the user clicks outside the toggle button and the menu.
 *
 * @param {Event} event - The click event.
 */
document.addEventListener("click", function (event) {
  if (!toggleButton.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});

/**
 * Event listener for each menu link.
 * Deactivates the 'active' class on the menu when a link is clicked.
 */
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

/**
 * Scroll up button functionality.
 * Shows the scroll up button when the user scrolls down more than 200px,
 * and scrolls the page back to the top when clicked.
 *
 * @type {HTMLElement} scrollUpBtn - The scroll up button.
 */
const scrollUpBtn = document.getElementById("scrollUpBtn");

/**
 * Event listener for the window's scroll event.
 * Shows the scroll up button when scrolled down 200px from the top.
 */
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

/**
 * Event listener for the scroll up button click event.
 * Scrolls the page back to the top with a smooth scroll effect.
 */
scrollUpBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});
