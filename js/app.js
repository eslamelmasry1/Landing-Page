/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * Store the menu list in a variable
 * Store all the sections as an array in a variable to use it in the function I'll be creating afterwards.
*/
const navMenu = document.querySelector('#navbar__list');
const sections = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions

*/
// Add class 'active' to section when near top of viewport
function viewport(element) {
    const position = element.getBoundingClientRect();
    return(position.top >= 0);
}
// Set sections as active
function activeState() {
    for(sect of sections) {
        if(viewport(sect)) {
                sect.classList.add('your-active-class');
        } else {
            sect.classList.remove('your-active-class');
        }
    }
}
// Scroll to section on link click
document.addEventListener('scroll', activeState);

/**
 * End Helper Functions
 * Begin Main Functions
 * Create a function with for...of loop inside.
 * Inside the for...of loop, create <li> element for each section.
 * Inside each <li> element add the anchor links and class by using innerHTML to link it to the correspondant section.
 * Use appendChild to store the <li> elements to the DOM.
*/
// Build menu 
function createNavBarList() {
    for (sect of sections) {
        // build the nav
        navBarList = document.createElement("li");
        itemId = sect.getAttribute("id");
        itemName = sect.getAttribute("data-nav");

        navBarList.innerHTML = `<a href="#${itemId}" data-nav="${itemName}" class="menu__link">${itemName}</a>`;
        navMenu.appendChild(navBarList);
    }    
}

createNavBarList();

/**
 * End Main Functions
 * Begin Events
 * 
*/
