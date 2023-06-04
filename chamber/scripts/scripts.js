const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.textContent = fulldate;

const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);
const f = 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16
if (temp <= 10 && speed > 4.8) {
windchill= f.toFixed(1);
}
else {
    windchill = "NA";
}
document.getElementById("windchill").innerHTML = windchill;

if (weekday === 1 || weekday === 2){
    article.textContent = " Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    article.setAttribute('class', 'banner-message');
}

// select all data-src
const imagesToLoad = document.querySelectorAll("img[data-src]");

// select each image, assign the data-src content to src and remove data-src
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"

};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  };