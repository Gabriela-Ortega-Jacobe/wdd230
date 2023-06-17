const url = "https://github.com/Gabriela-Ortega-Jacobe/wdd230/blob/main/chamber/data.json"

async function getcompaniesInfo(url) {
    const response = await fetch(url);
    if (response.ok) {
        const companies = await response.json();
        displaycompanies(companies.companies);
    }
}

getcompaniesInfo(url);

const displaycompanies = (companies) => {
  const cards = document.querySelector('div.cards');
  
  companies.forEach((companies) => {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birth = document.createElement('p');
    let portrait = document.createElement('img');
    
  
    h2.textContent = `${companies.name} ${companies.lastname}`;
    birth.innerHTML = `Date of birth: ${companies.birthdate}<br>Place of Birth: ${companies.birthplace}`;
    
    portrait.setAttribute('src', companies.imageurl);
    portrait.setAttribute('alt', `Portrait of ${companies.name} `);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', 'auto');
    
   
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(portrait);
    
    
    cards.appendChild(card);
  });

}