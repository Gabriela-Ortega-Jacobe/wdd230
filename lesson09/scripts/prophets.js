const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetsInfo(url) {
    const response = await fetch(url);
    if (response.ok) {
        const prophets = await response.json();
        displayProphets(prophets.prophets);
    }
}

getProphetsInfo(url);

const displayProphets = (prophet) => {
  const cards = document.querySelector('div.cards');
  
  prophet.forEach((prophet) => {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birth = document.createElement('p');
    let portrait = document.createElement('img');
    
  
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.innerHTML = `Date of birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', 'auto');
    
   
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(portrait);
    
    
    cards.appendChild(card);
  });

}