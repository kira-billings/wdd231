// JS for members for directory page  

const url = 'data/members.json';
const container = document.querySelector('#directory-container');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    return data.members;
}

// ********************************** building the badge for members *****************

function getBadge(member) {
    const levels = {
        1: "Member",
        2: "Silver",
        3: "Gold"
    };
    const badgeText = levels[member.membershipLevel];
    const badge = document.createElement("p");
    
    badge.classList.add("badge");
    
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


// *********************************** building the grid and member cards


function getMemberGrid(members) {
  
    container.classList.add('grid');
    container.classList.remove('list');
    container.innerHTML = '';

    members.forEach((member) => {

        const url = new URL(member.website);
        const badge = getBadge(member);
        const badgePhoneBlock = document.createElement('div');

        let card = document.createElement('section');
        let name = document.createElement('h2'); 
        let image = document.createElement('img');
        let address = document.createElement(`p`);
        let phone = document.createElement(`p`);
        let description = document.createElement(`p`);
        let website = document.createElement(`a`);

        card.classList.add('card');
        image.classList.add('image');
        name.classList.add('name');
        badgePhoneBlock.classList.add('badge-phone-block');

        website.href = member.website;
        website.target = "_blank";
        website.rel = "noopener";
        website.textContent = url.hostname; 

        name.textContent = `${member.name}`; 
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        description.textContent = `${member.description}`; 
        
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name}`); 
        image.setAttribute('loading', 'lazy');

        card.appendChild(name);     
        card.appendChild(address);
        card.appendChild(badgePhoneBlock);
        badgePhoneBlock.appendChild(phone);
        badgePhoneBlock.appendChild(badge);
        card.appendChild(description);
        card.appendChild(website);
        card.appendChild(image);

        container.appendChild(card);
    });
}

// ****************************************** building the list and member lines*****

function getMemberList(members) {
    
    container.classList.add('list');
    container.classList.remove('grid');
    container.innerHTML = '';

    const list = document.getElementById('list');
    const lines = document.createElement('ul');

    members.forEach((member) => {
        
        const line = document.createElement('li');
        const url = new URL(member.website);
        const badge = getBadge(member);
        const nameBlock = document.createElement('div');
        
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement(`a`);
        
        line.classList.add('line');
        nameBlock.classList.add('name-block');
        name.classList.add('website');
        name.classList.add('name');
        name.classList.add('phone');
        address.classList.add('address');
        
        website.href = member.website;
        website.target = "_blank";
        website.rel = "noopener";
        website.textContent = url.hostname; 
        
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        
        line.appendChild(nameBlock);
        line.appendChild(phone);
        line.appendChild(website);
        line.appendChild(badge);
        nameBlock.appendChild(name);
        nameBlock.appendChild(address);
        

        lines.appendChild(line);
    });
    
    container.appendChild(lines);
}

// ************************* calling or rendering or implementing the functions we built above so they show on the screen. with or without event listener

 async function showGrid() {
    const members = await getMemberData();
    getMemberGrid(members);
};
showGrid();


// ************************************* adding event listeners to toggle from grid to list


document.querySelector('#grid-btn').addEventListener('click', async () => {
    const members = await getMemberData();
    getMemberGrid(members);
});

document.querySelector('#list-btn').addEventListener('click', async () => {
    const members = await getMemberData();
    getMemberList(members);
});

