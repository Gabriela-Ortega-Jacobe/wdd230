const url = "chamber/data.json"

async function getBusData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        createCards(data.companies);
    }
}

getcompaniesData(url);

const createCards = (companies) => {
    const cards = document.querySelector('#companies cards');

    business.forEach(companies => {
        let container = document.createElement('section');
        let icon = document.createElement('img');
        let busName = document.createElement('h2');
        let fullInfo = document.createElement('p');
        let memLevel = document.createElement('p');

        name.innerHTML = `${companies.name}`;

        icon.setAttribute('src', companies.image);
        icon.setAttribute('alt', `Logo for ${companies.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '100');
        icon.setAttribute('height', '100');

        

        fullInfo.innerHTML = `${companies.address}<br>${companies.phone}<br><a href='${companies.web}`;


 
        container.appendChild(icon);
        container.appendChild(busName);
        container.appendChild(fullInfo);
        container.appendChild(memLevel);

        cards.appendChild(container);
        
    });
}