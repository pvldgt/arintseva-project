// Create a variable for the preview class
const resume = document.querySelector(".resume");
// Create a variable for the expander div 
const expander = document.querySelector(".resume__expander");
// Create a variable for the expander button 
const expanderButton = document.querySelector(".resume__expander-button");
// Create a variable for svg image class 
const expanderSvg = document.querySelector(".resume__expander-svg");


// add event listener to the expander button on click
expanderButton.addEventListener("click", expand);

// Import SVGs
import imgUp from '/src/assets/circle-arrow-direction-up-upload-svgrepo-com.svg';
import imgDown from '/src/assets/circle-arrow-direction-download-down-svgrepo-com.svg';

// Function that adds/removes the prview modifier class on click
function expand() {
    resume.classList.toggle("resume--preview");
    expander.classList.toggle("resume--preview");
    // Add if statement to add + or -
    if (expander.classList.contains("resume--preview")) {
        expanderSvg.src = imgUp;
        expanderSvg.alt = "arrow up";

    } else {
        expanderSvg.src = imgDown;
        expanderSvg.alt = "arrow down";
        resume.scrollIntoView();

    }
}
