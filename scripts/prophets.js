
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.getElementById('cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
//   console.table(data.prophets); // temporary testing of data response
displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
        // card build code goes here
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        card.classList.add('card');
        let fullName = document.createElement('h2'); 
        let portrait = document.createElement('img');
        let dateOfBirth = document.createElement(`p`);
        let placeOfBirth = document.createElement(`p`);

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`; 
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

   

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);


        cards.appendChild(card);
    });

}