
// ***********  module to build the cards **********

import { showModal } from "./modal.mjs";

const container = document.querySelector('#spotlights-container');

export function buildSpotlightCards(items) {


    items.forEach((item, index) => {
        
        const card = document.createElement('figure');
        const title = document.createElement('h2'); 
        const image = document.createElement('img');
        
        if (item.id === 'finbread' || item.id === 'lemon-cake') {
            card.classList.add('horizontal');
        } else {
            card.classList.add('vertical');
        }

        card.classList.add(`${item.id}`);

        image.classList.add('image');
        title.classList.add('story-title');
        title.textContent = `${item.title}`; 
        
        image.src = item.image;
        image.alt = item.imageAlt;
        image.loading = "lazy";
        image.width = 400;
        image.height = 400;

        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.classList.add('learn-more')

        button.addEventListener("click", () => {
            showModal(item);
        });
            
        card.appendChild(image);
        card.appendChild(title); 
        card.appendChild(button);
            
        container.appendChild(card);
    });
}




