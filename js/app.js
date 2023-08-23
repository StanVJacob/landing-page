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
 * 
*/

// global variable for the sections
const sections = document.querySelectorAll('section');

//global variable for the navigation 
const navigation = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// Nav bar gets built
function navBar() {
    // navBar variable created as an empty string that will get filled
    let navList = '';
    // Every section gets looped over and its atributes get put into a list item
    for (section of sections) {
        const secID = section.id;
        const secDatasetNav = section.dataset.nav;
        //Adding each section as a list in text form

        const navItem = `<li><a class="menu__link" href="#${secID}">${secDatasetNav}</a></li>`;
        navList += navItem;

    }
    // Text of the sections list gets appended to navigation's html
    navigation.innerHTML = navList;

}

const listItems = navigation.getElementsByTagName('li');
for (item of listItems) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        item.scrollIntoView({
            behavior: "smooth"
        })
    })

}



// Gives the section being viewed a different appearance and adds 'your-active-class' in browser's inspect menu
function toggleActive() {
    for (section of sections) {
        // This function saves the size of a section element in relation to the viewport into a variable
        const secBound = section.getBoundingClientRect();
        if (secBound.top <= 300 && secBound.bottom >= 340) {
                //'your-active-class' gets added if it fall in range
                section.classList.add('your-active-class');
                //Background color changed signifing that it is the active class
                section.style.cssText = "background-color: blue;";
        } 
        else {
            // If the section is no longer in the viewport 'your-active-class' gets removed ans background goes back to default 
            section.classList.remove('your-active-class');
            // Background gets set back to default 
            section.style.cssText = "linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);";
        }

    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// triggers a function that builds the nav bar
navBar();

// everytime page scrolls a function is run to see add 'your-active-class' to appropriate class
window.addEventListener('scroll',toggleActive);

/* const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling(); */

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

