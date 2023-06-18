const url = "https://github.com/Gabriela-Ortega-Jacobe/wdd230/blob/main/chamber/data.json"
async function getBusiness() {
  const response = await fetch(url);
  const data = await response.json();
  businessCards(data.business);
}

const businessCards = (places) => {
  const cards = document.querySelector('div.cards');

places.forEach((place) => {
  let card = document.createElement('section');
  let name = document.createElement('h3');
  let logo = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let web = document.createElement('p');
  let clickable = document.createElement('a');

  name.textContent = `${place.name}`;
  address.textContent = `${place.address}`;
  phone.textContent = `${place.phone}`;
  web.textContent = `${place.web}`;
  
  clickable.setAttribute('href', place.web)
  logo.setAttribute('src', place.logo);
  logo.setAttribute('alt', `${place.name} Logo`);
  logo.setAttribute('loading', 'lazy');
  logo.setAttribute('width', '160');

  clickable.appendChild(web);
  card.appendChild(name);
  card.appendChild(logo);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(clickable);


  cards.appendChild(card);
});
}

getBusiness();