
// The --active modifier brings out the mobile menu and turns the hamburger lines into a cross

// Create a variable for the hamburger
const hamburger = document.querySelector(".navbar__hamburger");
// Create a variable for the menu as a whole 
const menu = document.querySelector(".navbar__menu");

// add event listener to the hamburger on click
hamburger.addEventListener("click", mobileMenu);

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