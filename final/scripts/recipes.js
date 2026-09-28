
async function getRecipes() {
    try {
        const response = await fetch("data/recipes.json");
        if (!response.ok) {
            throw new Error("Could not load recipe data.");
        }
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error(error);
    }
}

const dialog = document.querySelector("#pop-up-box");


function showModal(item) {

    dialog.innerHTML = ``;

    const card = document.createElement('div');
    const button = document.createElement('button');  
    const name = document.createElement('h2'); 
    const ingredients = document.createElement('div');
    const instructions = document.createElement('div');
    const ingTitle = document.createElement('h3');
    const insTitle = document.createElement('h3');
    const notes = document.createElement('p');
    const cardImage = document.createElement('img');
    
    card.id = "popup";
    button.id = "closeButton";
    name.classList.add('story-title','homemade-apple-regular');
    ingredients.classList.add('ingredients');
    instructions.classList.add('instructions');
    ingTitle.classList.add('ing');
    insTitle.classList.add('ins');
    notes.classList.add('notes');
    cardImage.classList.add('card-image');
    
    button.textContent = "\u00D7";
    button.setAttribute("aria-label", "Close dialog");        
    name.textContent = `${item.name}`; 
    ingTitle.textContent = "Ingredients:";
    insTitle.textContent = "Instructions:";
    notes.textContent = `Notes: ${item.notes}`;
  
    ingredients.appendChild(ingTitle);
    instructions.appendChild(insTitle);
    item.ingredients.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        ingredients.appendChild(p);
    });
    item.instructions.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        instructions.appendChild(p);
    });
    
    cardImage.src = item.cardImage;
    cardImage.alt = `Recipe card for ${item.name}`;
    cardImage.classList.add("card-image");
    cardImage.loading = "lazy";

    card.appendChild(button);
    card.appendChild(name);
    card.appendChild(ingredients);
    card.appendChild(instructions);
    card.appendChild(notes);
    card.appendChild(cardImage);

    dialog.appendChild(card);
    
    button.addEventListener("click", () => {
        dialog.close();
    });
    
    dialog.showModal();
}


function displayRecipes(recipes) {
    const container = document.querySelector("#recipe-container");

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const cardDiv = document.createElement("div");
        const source = document.createElement("p");
        const category = document.createElement("p");
        const tags = document.createElement("p");

        card.classList.add("recipe-card");
        name.classList.add("name");
        image.classList.add("image");
        cardDiv.classList.add("card-div");
        tags.classList.add("tags");

        image.src = recipe.image;
        image.alt = recipe.name;
        image.loading = "lazy";
        image.width = 300;
        image.height = 300;
        
        name.textContent = recipe.name;
        source.textContent = `Source: ${recipe.source}`;
        category.textContent = `Category: ${recipe.category}`;
        tags.textContent = recipe.tags.join(" • ");

        card.append(image, cardDiv);
        cardDiv.appendChild(name);
        cardDiv.appendChild(source);
        cardDiv.appendChild(category);
        card.appendChild(tags);

        container.appendChild(card);
        card.addEventListener("click", () => {
                    showModal(recipe);
                });
     
    });
}

getRecipes();



