
// ***********************spotlights****************************************

const url = 'data/members.json';
const container = document.querySelector('#directory-container');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    return data.members;
}

// ********************************** building the badge for members 

function getBadge(member) {
    const levels = {
        1: "Member",
        2: "Silver",
        3: "Gold"
    };
    const badgeText = levels[member.membershipLevel];
    const badge = document.createElement("p");
    
    badge.classList.add("s-badge");
    
    badge.textContent = badgeText;

    if (member.membershipLevel === 1) {
        badge.classList.add("member");
    } else if (member.membershipLevel === 2) {
        badge.classList.add("silver");
    } else if (member.membershipLevel === 3) {
        badge.classList.add("gold");
    }

    return badge;
}


// selecting element using querySelector and the class.

const spotlightsContainer = document.querySelector(".spotlights-container");

// gets the data from the above function and uses as argument in below function.needs to await because the getting data from outside of this code.  
async function displaySpotlights() {
    const members = await getMemberData();
    buildSpotlights(members);
}


function buildSpotlights(members) {
    spotlightsContainer.innerHTML = ""; // Clear previous spotlight cards
    
    
    // Filter only Gold or Silver members
    const eligibleMembers = members.filter(member =>
    member.membershipLevel === 2 || member.membershipLevel === 3
    );

    //build a function to apply arrays to shuffle them 
    function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
    };

    // apply array to shuffle and pick 2 random cards for spotlight
    const spotlights = shuffle(eligibleMembers).slice(0, 3);
    
    // iterate through the members and create a card
    spotlights.forEach((member) => {
                  
        const url = new URL(member.website);
        const badge = getBadge(member);
        

        let card = document.createElement('section');
        let name = document.createElement('h2'); 
        let image = document.createElement('img');
        let description = document.createElement(`p`);
        let website = document.createElement(`a`);

        card.classList.add('s-card');
        image.classList.add('s-image');
        name.classList.add('s-name');
     
        

        website.href = member.website;
        website.target = "_blank";
        website.rel = "noopener";
        website.textContent = url.hostname; 

        name.textContent = `${member.name}`; 
        description.textContent = `${member.description}`; 
        
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name}`); 
        image.setAttribute('loading', 'lazy');

        card.appendChild(name);     
       
      
        card.appendChild(badge);
        card.appendChild(description);
        card.appendChild(website);
        card.appendChild(image);

        spotlightsContainer.appendChild(card);
    });
}   

// executes

displaySpotlights();


