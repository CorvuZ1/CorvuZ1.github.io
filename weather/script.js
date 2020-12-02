// fullscreen
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});


const apiKEY = "543889e9d4515a140284d0dcc283ef8a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchInput = document.querySelector(".search");
searchInput.addEventListener("keypress", setQuery);

function setQuery(event) {
    if (event.key == "Enter") {
        getResults(searchInput.value);
    }
}

async function getResults(query) {
    var request = await fetch(`${apiURL}${query}&APPID=${apiKEY}`);
    var weatherJson = await request.json();
    if (!request.ok){
        alert(`Город ${query} не найден`);
        searchInput.value = "";
        return 0;
    }
    
    return displayResults(weatherJson)
}

function displayResults(weather) {
    console.log(weather)
    let city = document.querySelector(".city");
    city.textContent = `${weather.name}, ${weather.sys.country}`;
    
    let now = new Date();
    let date = document.querySelector(".date");
    date.textContent = dateBuilder(now);
    
    let temp = document.querySelector(".temperature");
    temp.innerHTML = `${Math.round(toCelsius(weather.main.temp))}<span>&deg;C</span>`;
    
    let weather_el = document.querySelector(".weather");
    weather_el.innerHTML = weather.weather[0].main;
    
    let hiLow = document.querySelector(".hi-low-temp");
    hiLow.innerHTML = `${Math.round(toCelsius(weather.main.temp_min))} &deg;C / ${Math.round(toCelsius(weather.main.temp_max))} &deg;C`;
}

function dateBuilder(date) {
    const MONTHS = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ];
    
    const DAYS = [
        "Понедельник", 
        "Вторник", 
        "Среда", 
        "Четверг", 
        "Пятница", 
        "Суббота", 
        "Воскресенье"
    ];
    
    let nowDay = DAYS[date.getDay()-1];
    let nowDate = date.getDate();
    let nowMonth = MONTHS[date.getMonth()];
    let nowYear = date.getFullYear();
    
    return `${nowDay} | ${nowDate} ${nowMonth} | ${nowYear}`;
}

function toCelsius(kelvins) {
    return kelvins - 273.15;
}
// https://youtu.be/n4dtwWgRueI?t=1118
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=543889e9d4515a140284d0dcc283ef8a