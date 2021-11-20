Landing Page Project

In HTML:
* HTML had 3 sections, so I've added one more sections to have 4 sections as total.
* Add script tag in the HTML to link the JavaScript sheet (app.js).


In JavaScript:
* Store the menu list in a variable called (navMenu).
* Store all the sections as an array in a variable called (sections) to use it in the function I'll be creating afterwards.

* Create a function with for...of loop inside.
* Inside the for...of loop, create <li> tag for each section.
* Inside each <li> tag add the anchor links and class by using innerHTML to link it to the correspondant section.
* Use appendChild to store the <li> tags to the DOM.
* Call the function to the the navbar appears.

* Create a function to get the position of the sections in the viewport by using getBoundingClientRect().
* Create another function to set sections as active.
* Add event listener to scroll to relevant section on link click.


In CSS:
* Set scroll-behavior to smooth.