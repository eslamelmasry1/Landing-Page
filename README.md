Landing Page Project

In HTML:
* HTML had 3 sections, so I've added one more sections to have 4 sections as total.
* Add script tag in the HTML to link the JavaScript sheet (app.js).
* Add a button with 2 spans inside of it to make the up arrow.

In JavaScript:
* Store the menu list in a variable called (navBarList).
* Store all the sections in a variable called (sections) to use it in the functions I'll be creating afterwards.

* Create a forEach loop from section variable I've created before.
* Inside the forEach loop, I've created a function that consists of creating <li> tag for each section.
* Inside each <li> tag I've added the anchor links and class by using innerHTML to link it to the correspondant section.
* Use appendChild to store the <li> tags to the (navBarList) created previously.
* Storing all li tags in a variable to use it later.

* Adding event listener that when scrolling runs a function that uses for loop to apply the code on each section.
* Using getBoundingClientRect().top to get the the exact position in the page when scrolling.
* Using conditional to add your-active-class when it hits the top of each section, and removing your-active-class when it doesn't fulfill the first condition.
* In the same event listener I've Used another conditional to highlight the relevant navbar element when it hits the top of each relevant section.

* Adding event listener to scroll to Top button.


In CSS:
* Set scroll-behavior to smooth.
* I've added border-radius and changed the color of the gradient to rgba(0, 0, 0, 0.5), in order to see the Active State of the section more clearly.
* Styling the Scroll to Top button.
* Making the up arrow by styling 2 spans.
