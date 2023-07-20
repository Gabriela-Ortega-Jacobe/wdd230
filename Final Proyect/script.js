const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=7241fcadc4949c27ce3f1a0fc45f616d";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    capDescrip.textContent = desc;
}
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) =>
{
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>
    {
        image.removeAttribute("data-src");
    };
};
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) =>
    {
        items.forEach((item) =>
        {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) =>
    {
        observer.observe(img);
    });
}
else
{
    imagesToLoad.forEach((img) =>
    {
        loadImages(img);
    });
}