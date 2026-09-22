
// receives the selected interesting item place, builds dialog, opens dialog, closes dialog.

const dialog = document.querySelector("#pop-up-box");

export function showModal(item) {

    dialog.innerHTML = ``;

    const card = document.createElement('div');
    const name = document.createElement('h2'); 
    const address = document.createElement('address');
    const description = document.createElement('p');
    const button = document.createElement('button');  
    
    card.id = "popup";
    button.id = "closeButton";
    name.classList.add('name');
    
    button.textContent = "Close";        
    name.textContent = `${item.name}`; 
    address.textContent = `${item.address}`;
    description.textContent = `${item.description}`; 

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(address);
    card.appendChild(button);

    dialog.appendChild(card);
    
    button.addEventListener("click", () => {
        dialog.close();
    });
    
    dialog.showModal();
}
