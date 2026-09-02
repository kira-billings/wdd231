
// membership levels
levels = [{
    id: "np",
    name: "Non-Profit Membership Level",
    benefits: [
        "A monthly newsletter",    
        "A beautiful membership status plaque to hang on the wall"
        ],
    cost: "Free for non-profit"
    },
    {
    id: "bronze",
    name: "Bronze Membership Level",
    benefits: [
        "A monthly newsletter",
        "A beautiful membership status plaque to hang on the wall",
        "A ride on our float in parades"
        ],
    cost: "$33 annually"
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
    cost: "$66 annually"
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
    cost: "$99 annually"
    }
]

// ********************************** building the cards for animated members levels *****************

const animatedContainer = document.querySelector('#animatedContainer');

function buildAnimatedCard(levels) {
    
    levels.forEach((level) => {
        const card = document.createElement('div');
        const name = document.createElement('h2'); 
        const button = document.createElement('button'); 

        name.innerHTML = (level.name);
        button.textContent = "Learn More" 


        card.classList.add("animatedCard");
        name.classList.add("name");
        // level.id is np, bronze, silver, gold
        card.id = level.id
        button.classList.add("learnMore");

        card.appendChild(name);

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
    
    card.classList.add("popUpCard");
    
    const name = document.createElement('h2'); 
    const benefits = document.createElement(`ul`);
    const cost = document.createElement(`p`);
    const button = document.createElement('button');
    const subtitle = document.createElement('p');    
    
    name.innerHTML = level.name;
    benefits.innerHTML = level.benefits;
    cost.innerHTML = level.cost;
    subtitle.innerHTML = "Membership Level";
    
    button.innerHTML = "Close";        
    
    button.id = "closeButton";

    card.appendChild(name);
    card.appendChild(subtitle);
    card.appendChild(benefits);
    card.appendChild(cost);
    card.appendChild(button);

    dialogBox.appendChild(card);
    
    const closeButton = document.querySelector("#closeButton");
    closeButton.addEventListener("click", () => {
        dialogBox.close();
    });
}

