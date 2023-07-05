const url = "https://gabriela-ortega-jacobe.github.io/wdd230/chamber/data.json"

async function getbussInfo(url) {
    const response = await fetch(url);
    if (response.ok) {
        const buss = await response.json();
        displaybuss(buss.buss);
    }
}

getbussInfo(url);

const displaybuss = (buss) => {
  const cards = document.querySelector('div.cards');
  
  prophet.forEach((buss) => {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birth = document.createElement('p');
    let portrait = document.createElement('img');
    
  
    h2.textContent = `${buss.name}`;
    
    portrait.setAttribute('src', buss.imageurl);
    portrait.setAttribute('alt', `Portrait of ${buss.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', 'auto');
    
   
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(portrait);
    
    
    cards.appendChild(card);
  });

}