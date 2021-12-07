
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

//Creating a function to create a list items depending on the amount of sections we have in the HTML file.
//The more sections we add in the HTML file, the more list items we will get in the nav bar.


sections.forEach(function (section) {
    listElements = document.createElement("li");
    //I could've use the above code, but for performance purposes, I prefer to use one line code as the following.
    listElements.innerHTML = `<a href="#${section.id}" data="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navBarList.appendChild(listElements);
});

//Storing all li tags in a variable to use it later.
let menuList = document.querySelectorAll('a');

//Using forEach loop to add event listener for each anchor link.
menuList.forEach( (menuItem) => {
    menuItem.addEventListener('click', function smoothScroll(event) {
        event.preventDefault();
        //Store data attribute in the following variables.
        let dataAttribute = menuItem.getAttribute("data");
        let data = document.getElementById(dataAttribute);
        //Using it with scrollIntoView(), so that when we click on the any link it scrolls smoothly to the relevant section.
        data.scrollIntoView({behavior: "smooth", block: "center"});
        
    });
});

//Adding event listener that when scrolling runs the following function
window.addEventListener('scroll', function () {
    //Using for loop to apply the code on each section
    for(let i = 0; i < sections.length; i++) {
       
        //Using getBoundingClientRect().top to get the the exact position in the page when scrolling
        rectTop = sections[i].getBoundingClientRect().top;

        //Using conditional to add your-active-class when it hits the top of each section
        if(rectTop < window.innerHeight) {
            sections[i].classList.add('your-active-class');
        } else {
            //Removing your-active-class when it doesn't fulfill the first condition.
            sections[i].classList.remove('your-active-class');
        }

        //Using conditional to highlight the relevant navbar element when it hits the top of each relevant section
        let offsetTop = sections[i].offsetTop;
        let offsetHeight = sections[i].offsetHeight;

        if(offsetTop <= window.scrollY && offsetTop + offsetHeight > window.scrollY) {
            menuList[i].style.background="#333";
            menuList[i].style.color="#fff";
            menuList[i].style.transition="ease 0.3s all";
            
        } else {
            menuList[i].style.background="white";
            menuList[i].style.color="#000";
        }
    }
});




//Adding event listener to scroll to Top button
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    });
});
