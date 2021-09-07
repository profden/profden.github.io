let tempBorderValues = [0, 15, 20, 25];
let offerTypes = ["hot chocolate", "hot tea", "bisquit", "ice cream", "icy lemonade"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function offerOfTheDay(dayID) {
    let day = document.getElementById("weather-offer-day");
    let temperaure = document.getElementById("weather-offer-temp");
    let type = document.getElementById("weather-offer-type");
    let typeID = 0;
    let currentTemp = 20
    let increment = 0;
    if (dayID == 7) {
        let currentDate = new Date();
        dayID = currentDate.getDay();        
    }
    while (currentTemp > tempBorderValues[increment] && increment < 4) {
        increment++;
    }
    typeID = increment;
    day.innerHTML = days[dayID];
    temperaure.innerHTML = currentTemp + "°C";
    type.innerHTML = offerTypes[typeID];
}