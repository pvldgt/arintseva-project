

// Create a variable for the hamburger
const hamburger = document.querySelector(".navbar__hamburger");
// Create a variable for the menu as a whole 
const menu = document.querySelector(".navbar__menu");

// add event listener to the hamburger on click
hamburger.addEventListener("click", mobileMenu);

// The --active modifier brings out the mobile menu and turns the hamburger lines into a cross
// function that adds/removes the active modifier class on click
function mobileMenu() {
    hamburger.classList.toggle("navbar--active");
    menu.classList.toggle("navbar--active");
}

// Now let's close the menu when the user clicks on any of the links in the menu 
const link = document.querySelectorAll(".navbar__link")

link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("navbar--active");
    menu.classList.remove("navbar--active");
}

// // Fix the issue where when you click on a link it takes you to the anchor 
// // but the section seems cut off because of the fixed navbar

// // The function actually applying the offset
// function offsetAnchor() {
//     if (location.hash.length !== 0) {
//         window.scrollTo(window.scrollX, window.scrollY + 300);
//     }
// }

// // Captures click events of all <a> elements with href starting with #
// document.addEventListener("click", "a[href^='#']", function (event) {
//     // Click events are captured before hashchanges. Timeout
//     // causes offsetAnchor to be called after the page jump.
//     window.setTimeout(function () {
//         offsetAnchor();
//     }, 0);
// });

// // Set the offset when entering page with hash present in the url
// window.setTimeout(offsetAnchor, 0);