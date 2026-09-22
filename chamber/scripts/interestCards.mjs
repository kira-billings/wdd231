
// ***********  module to build the discover item of interest cards **********

import { showModal } from "./modal.mjs";

const container = document.querySelector('#interest-container');

export function buildInterestCards(items) {


    items.forEach((item, index) => {
        
        const card = document.createElement('figure');
        const name = document.createElement('h2'); 
        const image = document.createElement('img');
        
        if (index % 2 === 0) {
            card.classList.add('horizontal');
        } else {
            card.classList.add('vertical')
        }
        card.classList.add(`item${item.id}`);

        image.classList.add('image');
        name.classList.add('name');
        name.textContent = `${item.name}`; 
        
        image.setAttribute('src', item.imageSmall);
        image.setAttribute('alt', `${item.name}`); 
        image.setAttribute('loading', 'lazy');
        image.width = 300;
        image.height = 200;
        image.sizes = "300px";
        image.srcset = `
            ${item.imageSmall} 300w,
            ${item.imageLarge} 400w
            `;

        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.classList.add('learn-more')

        button.addEventListener("click", () => {
            showModal(item);
        });
            
        card.appendChild(image);
        card.appendChild(name); 
        card.appendChild(button);
            
        container.appendChild(card);
    });
}




