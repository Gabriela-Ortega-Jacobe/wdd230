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

