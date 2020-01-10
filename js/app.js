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
let currentActiveSection = null;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



function scrollToSection(event) {
    event.preventDefault();
    const targetSectionID = event.target.getAttribute('data-target');
    console.log(`ID ${targetSectionID}`);
    const section = document.getElementById(targetSectionID);
    console.log(section);

    section.scrollIntoView({behavior: "smooth"});
}

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
        const id = section.id;

        const item = document.createElement('li');

        const link = document.createElement('a');
        link.href = `#${id}`;
        link.innerText = section.getAttribute('data-nav');
        link.classList.add('menu__link');
        link.setAttribute('data-target', id);
        link.id = `nav-item-${id}`;

        link.addEventListener('click', scrollToSection);

        item.appendChild(link);
        menuFragment.appendChild(item);
    }
    document.getElementById('navbar__list').appendChild(menuFragment);
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {

    for (const section of sections) {
        const boundingRect = section.getBoundingClientRect();
        if (boundingRect.top <= 50 && boundingRect.top >= 0) {
            // remove active state from old section and nav-item
            if (currentActiveSection) {
                currentActiveSection.classList.remove('your-active-class');
                document.getElementById(`nav-item-${currentActiveSection.id}`).classList.remove('active-nav-item');
            }
            // add active state to current section and nav-item
            section.classList.add('your-active-class');
            currentActiveSection = section;
            document.getElementById(`nav-item-${section.id}`).classList.add('active-nav-item');
        }
    }

}

/**
 * End Main Functions
 * Begin Events
 *
*/

document.addEventListener('DOMContentLoaded', function () {

    // Build menu
    buildMenu();

    // Set sections as active
    window.addEventListener('scroll', setActiveSection);

});


