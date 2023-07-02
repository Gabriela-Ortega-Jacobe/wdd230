const url = "https://gabriela-ortega-jacobe.github.io/wdd230/chamber/data.json";

getcompaniesData(url);

async function getcompaniesData(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    console.log(data.companies);
    displaycompanies(data.companies);
  }
}
const displayBusiness = (companies) => {
  const cards = document.querySelector('companiescards'); 
  companies.forEach(companies) => {
      
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let images = document.createElement('img');
      let address = document.createElement ('p')
  
      
      h2.textContent = `${companies.name} ____________`;
  
      
      images.setAttribute('src', companies.images);
      images.setAttribute('alt', `${companies.name} ______________`);
      images.setAttribute('loading', 'lazy');
      images.setAttribute('width', '340');
      images.setAttribute('height', 'auto');
  
    
      card.appendChild(h2);
      card.appendChild(images);
      card.appendChild(address);
  
      cards.appendChild(card);
    }); 
  } 
