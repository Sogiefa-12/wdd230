const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelectorAll('#cards');

async function getProphetsData () {
    
    const response = await fetch(url);
    const data = await response.json();
    
    displayProphets(data.prophets);  // displayProphets function will be called with the fetched data.
}

getProphetsData()

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        let card = document.createElement('section');
        let fullName = document.createElement('h3');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src',prophet.imageurl);
        portrait.setAttribute('alt',`${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        card.appendChild(cards[0]);

    });
}

