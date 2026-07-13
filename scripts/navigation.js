// store the selected elements that we are going to use by querying and selecting the id from the html.
//this constant element now named navButton is used to toggle.
const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

//Toggle - listen for the click to run this code. toggle on and off. 
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});