
// membership levels

const levels = [
    {
        id: "np",
        name: "Non-Profit Membership Level",
        benefits: [
            "A monthly newsletter",    
            "A beautiful membership status plaque to hang on the wall"
        ],
        cost: "Free for non-profit",

        image: {
            small: "images/nonprofit-small.webp",
            large: "images/nonprofit-flat.webp"
        }
    },
    {
        id: "bronze",
        name: "Bronze Membership Level",
        benefits: [
            "A monthly newsletter",
            "A beautiful membership status plaque to hang on the wall",
            "A ride on our float in parades"
        ],
        cost: "$33 annually",

        image: {
            small: "images/bronze-small.webp",
            large: "images/bronze-flat.webp"
        }
    },
    {
        id: "silver",
        name: "Silver Membership Level",
        benefits: [
            "A home page spotlight",
            "A beautiful membership status plaque to hang on the wall",
            "A ride on our float in parades",
            "Invitations to special events"
        ],
        cost: "$66 annually",

        image: {
            small: "images/silver-small.webp",
            large: "images/silver-flat.webp"
        }
    },
    {
        id: "gold",
        name: "Gold Membership Level",
        benefits: [
            "A home page spotlight",
            "A beautiful membership status plaque to hang on the wall",
            "A ride on our float in parades",
            "Invitations to special events",
            "Free fountain drinks at the snack bar"
        ],
        cost: "$99 annually",

        image: {
            small: "images/gold-small.webp",
            large: "images/gold-flat.webp"
        }
    }
];

// ********************************** building the cards for animated members levels *****************

const animatedContainer = document.querySelector('#animated-container');

function buildAnimatedCard(levels) {
    
    levels.forEach((level) => {
        const card = document.createElement('div');
        const name = document.createElement('p'); 
        const button = document.createElement('button'); 
        const image = document.createElement('img'); 

        name.innerHTML = (level.name);
        button.textContent = "Learn More" 
        image.src = level.image.small;
        image.srcset = `
            ${level.image.small} 250w,
            ${level.image.large} 400w
            `;

        image.alt = `${level.name}`;
        image.loading = "lazy";

        card.classList.add("animated-card");
        name.classList.add("name");
        // level.id is np, bronze, silver, gold
        card.id = level.id
        button.classList.add("learn-more");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(button);
        animatedContainer.appendChild(card);
    });
}

buildAnimatedCard(levels);


// ************************************* adding event listeners to link to modals for info

const dialogBox = document.querySelector("#dialogBox");

const openButton1 = document.querySelector("#np");
const openButton2 = document.querySelector("#bronze");
const openButton3 = document.querySelector("#silver");
const openButton4 = document.querySelector("#gold");

// const popUpCard = document.querySelector("#popUpCard");

openButton1.addEventListener("click", () => {
    buildPopUpCard(levels[0]);
    dialogBox.showModal();
});

openButton2.addEventListener("click", () => {
    buildPopUpCard(levels[1]);
    dialogBox.showModal();
});

openButton3.addEventListener("click", () => {
    buildPopUpCard(levels[2]);
    dialogBox.showModal();
});

openButton4.addEventListener("click", () => {
    buildPopUpCard(levels[3]);
    dialogBox.showModal();
});


// ****************build the cards for modals*********************

function buildPopUpCard(level) {
    dialogBox.innerHTML = ``;
    const card = document.createElement("div");
    
    card.id = `${level.id}Popup`;
    
    const name = document.createElement('p'); 
    const benefits = document.createElement(`ul`);
    
    const cost = document.createElement(`p`);
    const button = document.createElement('button');  
    
    name.innerHTML = level.name;
    cost.innerHTML = level.cost;
    
    button.innerHTML = "Close";        
    
    button.id = "closeButton";

    level.benefits.forEach((benefit) => {
        const benefitItem = document.createElement('li');
        benefitItem.innerHTML = benefit; 
        benefits.appendChild(benefitItem);
    })

    card.appendChild(name);
    card.appendChild(benefits);
    card.appendChild(cost);
    card.appendChild(button);

    dialogBox.appendChild(card);
    
    const closeButton = document.querySelector("#closeButton");
    closeButton.addEventListener("click", () => {
        dialogBox.close();
    });
}

