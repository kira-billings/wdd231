
// receives the selected item , builds dialog, opens dialog, closes dialog.

const dialog = document.querySelector("#pop-up-box");

export function showModal(item) {

    dialog.innerHTML = ``;

    const card = document.createElement('div');
    const button = document.createElement('button');  
    const title = document.createElement('h2'); 
    const story = document.createElement('div');
    
    card.id = "popup";
    button.id = "closeButton";
    title.classList.add('story-title','homemade-apple-regular');
    
    button.textContent = "\u00D7";
    button.setAttribute("aria-label", "Close dialog");        
    title.textContent = `${item.title}`; 
    item.story.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        story.appendChild(p);
    });

    card.appendChild(button);
    card.appendChild(title);
    card.appendChild(story);

    dialog.appendChild(card);
    
    button.addEventListener("click", () => {
        dialog.close();
    });
    
    dialog.showModal();
}
