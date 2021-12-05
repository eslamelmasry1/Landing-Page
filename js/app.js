
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

//Creating a function to create a list items depending on the amount of sections we have in the HTML file.
//The more sections we add in the HTML file, the more list items we will get in the nav bar.


sections.forEach(function (section) {
    listElements = document.createElement("li");
    //Another way to run the same function.
    /*let anchor = document.createElement('a');   
    anchor.href = "#" + `${section.id}`;
    anchor.textContent = `${section.dataset.nav}`;
    anchor.classList.add('menu__link');
    listElements.append(anchor);*/

    //I could've use the above code, but for performance purposes, I prefer to use one line code as the following.
    listElements.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navBarList.appendChild(listElements);
});

//Storing all li tags in a variable to use it later.
let menuList = document.querySelectorAll('li');

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
    window.scrollTo(0, 0)
})
