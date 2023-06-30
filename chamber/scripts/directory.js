const busInfo = 'data.json';


async function getBusData(busInfo) {
    const response = await fetch(busInfo);
    if (response.ok) {
        const data = await response.json();
        createCards(data.companies);
    }
}



getBusData(busInfo);

const createCards = (companies) => {
    const cards = document.querySelector('companies cards');

    business.forEach(companies => {
        let container = document.createElement('section');
        let icon = document.createElement('img');
        let name = document.createElement('h2');
        let fullInfo = document.createElement('p');
        let memLevel = document.createElement('p');

        busName.innerHTML = `${companies.name}`;

        icon.setAttribute('src', companies.image);
        icon.setAttribute('alt', `Logo for ${companies.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '100');
        icon.setAttribute('height', '100');

        

        fullInfo.innerHTML = `${companies.address}<br>${companies.phone}<br><a href='${companies.web}'`;

        memLevel.setAttribute('title', companies.membershiplevel);
        memLevel.setAttribute('id', 'membership');


        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(membershiplevel);

        cards.appendChild(container);
        
    });
}