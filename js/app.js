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
 * Define Global Variables
 * 
*/

// stores all section elements of teh website.
let sections = null;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu() {
    // fetch all sections at the beginning as new sections could be added dynamically
    sections = document.getElementsByTagName('section');

    const menuFragment = document.createDocumentFragment();
    for (const section of sections) {
        const h2 = section.querySelector('h2');
        const id = section.id;
        console.log(id);

        const item = document.createElement('li');

        const link = document.createElement('a');
        link.href = `#${id}`;
        link.innerText = h2.innerText;
        link.classList.add('menu__link');

        item.appendChild(link);
        menuFragment.appendChild(item);
    }
    document.getElementById('navbar__list').appendChild(menuFragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

document.addEventListener('DOMContentLoaded', function () {

    // Build menu
    buildMenu();

    // Set sections as active

    // Scroll to section on link click

});


