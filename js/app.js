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
 * Begin Main Functions
 * Create a forEach loop from section variable I've created before.
 * Inside the forEach loop, I've created a function that consists of creating <li> tag for each section.
 * Inside each <li> tag add the anchor links and class by using innerHTML to link it to the correspondant section.
 * Use appendChild to store the <li> tags to the DOM.
*/
// Build menu 


sections.forEach(function createNavBarList(section) {
    list = document.createElement("li");
    id = section.id
    menuLink = section.dataset.nav;
    list.innerHTML = `<a href="#${id}" class="menu__link">${menuLink}</a>`;
    navMenu.appendChild(list);
});


/**
 * End Main Functions
 * Start Helper Functions

*/
// Add class 'active' to section when near top of viewport
function viewport(element) {
    const position = element.getBoundingClientRect();
    return(position.top >= 0);
}
// Set sections as active


/**
 * End Helper Functions
 * Begin Events
 * Add event listener to scroll to relevant section on link click., by using a function that activates each section once clicking it on the nav bar. 
*/
document.addEventListener('scroll', function activeState() {
    for(section of sections) {
        if(viewport(section)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
});
