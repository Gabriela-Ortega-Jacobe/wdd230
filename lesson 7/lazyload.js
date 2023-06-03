const imagesToLoad = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};
if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

imagesToLoad.forEach((figure) => {
    imgObserver.observe(figure);
});
} else {
imagesToLoad.forEach((figure) => {
    loadImages(figure);
});

}