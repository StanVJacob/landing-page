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

//random comment

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// Nav bar gets built
function createNavBar() {
    // Every section gets looped over and its atributes get put into a list item
    for (let section of sections) {
        const secID = section.id;
        const secDatasetNav = section.dataset.nav;

        
        const div = document.createElement('div');
        div.innerHTML= secDatasetNav;
        div.className = 'menu__link';
        const listItem = document.createElement('li');
        listItem.id = `navbar-${secID}`;
        listItem.appendChild(div);
        listItem.addEventListener('click', function(event) {
            event.preventDefault();
            const thing = document.getElementById(secID);
            thing.scrollIntoView({
                behavior: "smooth"
            })
        })
        navigation.appendChild(listItem);

    }
    // Text of the sections list gets appended to navigation's html
    // navigation.innerHTML = navList;


}



// Gives the section being viewed a different appearance and adds 'your-active-class' in browser's inspect menu
function toggleActive() {
    for (let section of sections) {
        // This function saves the size of a section element in relation to the viewport into a variable
        const secBound = section.getBoundingClientRect();
        if (secBound.top <= 300 && secBound.bottom >= 340) {
                //'your-active-class' gets added if it fall in range
                section.classList.add('your-active-class');
                //Background color changed signifing that it is the active class
                section.style.cssText = "background-color: blue;";
                navButton = document.getElementById(`navbar-${section.id}`);
                navButton.style.cssText = "background-color: green;";
        } 
        else {
            // If the section is no longer in the viewport 'your-active-class' gets removed ans background goes back to default 
            section.classList.remove('your-active-class');
            // Background gets set back to default 
            section.style.cssText = "linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);";
            navButton = document.getElementById(`navbar-${section.id}`);
            navButton.style.cssText = "background: rgb(212, 87, 87)";
        }

    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// triggers a function that builds the nav bar
createNavBar();



// everytime page scrolls a function is run to see add 'your-active-class' to appropriate class
window.addEventListener('scroll',toggleActive);



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


