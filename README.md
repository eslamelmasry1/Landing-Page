# Landing Page Project

# Project Description:
* Building a Navbar dynamically as an unordered list.
* Adding a class to the sections dynamically in JS, so that it applies when it is in the viewport.
* Linking the navbar items and the sections together, so that when we click each item, it goes to the relevant section.

# Author's name:
Eslam Elmasry

# Credits: 
Udacity
MDN Web Docs

## In HTML:
* HTML had 3 sections, so I've added one more sections to have 4 sections as total.
* Add script tag in the HTML to link the JavaScript sheet (app.js).
* Add a button with 2 spans inside of it to make the up arrow.



## In JavaScript:

### Global Variables
    * Store the menu list in a variable called (navBarList).
    * Store all the sections in a variable called (sections) to use it in the functions I'll be creating afterwards.

### Building Navbar list
    * Create a forEach loop from section variable I've created before.
    * Inside the forEach loop, I've created a function that consists of creating <li> tag for each section.
    * Inside each <li> tag I've added the anchor links and class by using innerHTML to link it to the correspondant section.
    * Use appendChild to store the <li> tags to the (navBarList) created previously.
    * Storing all li tags in a variable to use it later.

### Smooth Scroll
    * Using forEach loop to add event listener for each anchor link.
    * Inside this event listener I've stored data attribute in variables.
    * Then I've used the variables with scrollIntoView(), so that when we click on any link it scrolls smoothly to the relevant section.

### Adding your-active-class
    * Adding event listener that when scrolling runs a function that uses for loop to apply the code on each section.
    * Using getBoundingClientRect().top to get the the exact position in the page when scrolling.
    * Using conditional to add your-active-class when it hits the top of each section, and removing your-active-class when it doesn't fulfill the first condition.
    * In the same event listener I've Used another conditional to highlight the relevant navbar element when it hits the top of each relevant section.
    * Added active class to navbar that applies style on it when scrolling.

### Scroll Top Button
    * Adding event listener to scroll to Top button.
    * Since I've removed the scroll behavior from CSS, I've added it to btn.addEventListener



## In CSS:
* I've added border-radius and changed the color of the gradient to rgba(0, 0, 0, 0.5), in order to see the Active State of the section more clearly.
* Styling the Scroll to Top button.
* Making the up arrow by styling 2 spans.
* Making the page responsive by changing the font size and padding in the different width size by using media queries.
* Adding active class to apply style on navbar.
