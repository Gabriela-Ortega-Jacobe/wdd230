function currentDate() {

    let d = new Date();
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate = dayName + "," + " " + d.getDate() + " " + monthName + " " + year;
    document.getElementById("currentdate").textContent = fulldate;
}