Landing Page Project

In HTML:
* HTML had 3 sections, so I've added one more sections to have 4 sections as total.
* Add script tag in the HTML to link the JavaScript sheet (app.js).


In JavaScript:
* Store the menu list in a variable called (navMenu).
* Store all the sections as an array in a variable called (sections) to use it in the function I'll be creating afterwards.

* Create a forEach loop from section variable I've created before.
* Inside the forEach loop, I've created a function that consists of creating <li> tag for each section.
* Inside each <li> tag add the anchor links and class by using innerHTML to link it to the correspondant section.
* Use appendChild to store the <li> tags to the DOM.

* Create a function to get the position of the sections in the viewport by using getBoundingClientRect().
* Add event listener to scroll to relevant section on link click., by using a function that activates each section once clicking it on the nav bar.


In CSS:
* Set scroll-behavior to smooth.
* I've added border-radius and changed the color of the gradient to rgba(0, 0, 0, 0.5), in order to see the Active State of the section more clearly.
