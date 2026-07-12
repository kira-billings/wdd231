// store the selected elements that we are going to use by querying and selecting the id from the html.
//this constant element now named navbutton is used to toggle.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle - listen for the click to run this code. toggle on and off. 
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});