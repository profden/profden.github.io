let tempBorderValues = [0, 15, 20, 25];
let offerTypes = ["A good ol' Chocolate Lava protects well against the cold",
                "A nice hot Tea Rex will warm up your body and soul", 
                "Today is a Jurassic Cookie day", 
                "Take an Innovation Ice Cream to help you chill", 
                "Nothing's better in this warm weather than an icy Amber Lemonade"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weeklyTemperatures = [25.6, -2, 0, 7, 12, 17, 23];

function offerOfTheDay(dayID = new Date().getDay()) {
    let day = document.querySelector("#weather-offer-day");
    let temperaure = document.querySelector("#weather-offer-temp");
    let type = document.querySelector("#weather-offer-type");
    let currentTemp = weeklyTemperatures[dayID];
    let currentTempFahr = Number.parseFloat(currentTemp * 1.8 + 32).toFixed(2);
    let typeID = 0;
    let index = 0;
    for (index; currentTemp > tempBorderValues[index] && index < tempBorderValues.length; index++) {}
    typeID = index;
    day.innerHTML = days[dayID];
    temperaure.innerHTML = currentTemp + "°C / " + currentTempFahr + "°F";
    type.innerHTML = offerTypes[typeID];
}

function minTemp() {
    let minTempContainer = document.querySelector("#min-temp");
    let min = weeklyTemperatures[0];
    let minFahr = 0.00;
    for (let index = 1; index < weeklyTemperatures.length; index++) {
        min > weeklyTemperatures[index] ? min = weeklyTemperatures[index] : min;
    }
    minFahr = Number.parseFloat(min * 1.8 + 32).toFixed(2);
    minTempContainer.innerHTML = min + "°C / " + minFahr + "°F";
}

function avgTemp() {
    let avgTempContainer = document.querySelector("#avg-temp");
    let sum = 0;
    let avg = 0;
    let avgFahr = 0.00;
    for (let index = 0; index < weeklyTemperatures.length; index++) {
        sum += weeklyTemperatures[index];
    }
    avg = Number.parseFloat(sum / weeklyTemperatures.length).toFixed(2);
    avgFahr = Number.parseFloat(avg * 1.8 + 32).toFixed(2);
    avgTempContainer.innerHTML = avg + "°C / " + avgFahr + "°F";
}

function maxTemp() {
    let maxTempContainer = document.querySelector("#max-temp");
    let max = weeklyTemperatures[0];
    let maxFahr = 0.00
    for (let index = 1; index < weeklyTemperatures.length; index++) {
        max < weeklyTemperatures[index] ? max = weeklyTemperatures[index] : max;
    }
    maxFahr = Number.parseFloat(max * 1.8 + 32).toFixed(2);
    maxTempContainer.innerHTML = max + "°C / " + maxFahr + "°F";
}