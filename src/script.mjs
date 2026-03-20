import {getUserLocation} from "./components/location.mjs";
import {getCurrentWeatherForLocation, getWeatherForUpcomingDays, getWeatherInFuture} from "./components/weatherapi.mjs";
import {getDateInFuture, getFormattedDate} from "./helpers/dateHelper.mjs";
import {getGeolocationForCoords} from "./components/openWeatherApi.mjs";
import {getCoords, getForecast} from "./components/openMeteoApi.mjs";

// const response = await axios.get('https://dummyjson.com/products'); // await -> cekanje odgovora
// console.log(response.data); // da bi radilo moramo da pokrenemo komandu: npm run watch

/**
 * hocemo da znamo lokaciju jer cemo imati vise stranica na sajtu pa cemo znati za koju je korisnik lokaciju trazio
 * ako korisnik ima upisanu lokaciju u LS ne trebamo ponovo da ga pitamo
 * - Ako nemamo lokaciju isti kod gde pitamo za lokaciju
 * - Ako imamo lokaciju ne prikazujemo prompt i dodajemo dugme: Promeni lokaciju
 */

let location = localStorage.getItem('location') || getUserLocation();

updateLocation(location);

document.getElementById('changeLocation').addEventListener('click', () => {
    updateLocation(getUserLocation());
})

// 24.9 Uzimanje geolokacije
document.getElementById('showWeatherForMyLocation').addEventListener('click', async () => {
    if (!navigator.geolocation) { // navigator - ugradjena funkcionalnost u browser-u preko koje mozemo dobiti geolokaciju
        alert('The browser does not allow access geolocation');
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude; // ipak ne mozemo preko weatherApi da prosledimo podatke na osnovu geografske pozicije
        const lon = position.coords.longitude; // nego preko grada koji zelimo i moramo doci do grada preko koordinata (open weather api)

        let coords = await getGeolocationForCoords(lat, lon);
        let cityName = coords.data[0].name;
        if (cityName.includes('Municipality')) {
            cityName = cityName.replace('Municipality', ''); // izbaci rec 'Municipality'
        }

        location = cityName;
        updateLocation(location);
    })

})

// try/catch se radi unutar funkcije - ne ovde. To se radi da bi se fokusirao samo na api poziv
const response = await getCurrentWeatherForLocation(location);

let currentCity = document.getElementById('currentCity');
currentCity.innerText = response.data.location.name;

let cityName = document.getElementById('cityName');
cityName.innerHTML = response.data.location.name + ', ' + `<span>${response.data.location.country}</span>`;

let todayDate = document.getElementById('todayDate');
todayDate.innerText = getFormattedDate(response.data.current.last_updated);

let currentIcon = document.getElementById('currentIcon');
currentIcon.src = response.data.current.condition.icon;

let currentTemp = document.getElementById('currentTemp');
currentTemp.innerText = response.data.current.temp_c + '°C';

let currentDesc = document.getElementById('currentDesc');
currentDesc.innerText = response.data.current.condition.text;

let feelsLike = document.getElementById('feelsLike');
feelsLike.innerText = response.data.current.feelslike_c + '°C';

let humidity = document.getElementById('humidity');
humidity.innerText = response.data.current.humidity + '%';


let windSpeed = document.getElementById('windSpeed');
windSpeed.innerText = response.data.current.wind_kph + ' km/h';

let pressure = document.getElementById('pressure');
pressure.innerText = response.data.current.pressure_mb + ' mbar';


const forecastResponse = await getWeatherForUpcomingDays(location, 3);

let forecastForThreeDays = [];
for (let forecast of forecastResponse.data.forecast.forecastday) {
    forecastForThreeDays.push(forecast);
}

let firstDayDate = document.getElementById('firstDayDate');
firstDayDate.innerText = getFormattedDate(forecastForThreeDays[0].date);

let firstDayIcon = document.getElementById('firstDayIcon');
firstDayIcon.src = forecastForThreeDays[0].day.condition.icon;

let firstDayDesc = document.getElementById('firstDayDesc');
firstDayDesc.innerText = forecastForThreeDays[0].day.condition.text;

let firstDayTemp = document.getElementById('firstDayTemp');
firstDayTemp.innerText = forecastForThreeDays[0].day.maxtemp_c + '°C / ' + forecastForThreeDays[0].day.mintemp_c + '°C';

let secondDayDate = document.getElementById('secondDayDate');
secondDayDate.innerText = getFormattedDate(forecastForThreeDays[1].date);

let secondDayIcon = document.getElementById('secondDayIcon');
secondDayIcon.src = forecastForThreeDays[1].day.condition.icon;

let secondDayDesc = document.getElementById('secondDayDesc');
secondDayDesc.innerText = forecastForThreeDays[1].day.condition.text;

let secondDayTemp = document.getElementById('secondDayTemp');
secondDayTemp.innerText = forecastForThreeDays[1].day.maxtemp_c + '°C / ' + forecastForThreeDays[1].day.mintemp_c + '°C';

let thirdDayDate = document.getElementById('thirdDayDate');
thirdDayDate.innerText = getFormattedDate(forecastForThreeDays[2].date);

let thirdDayIcon = document.getElementById('thirdDayIcon');
thirdDayIcon.src = forecastForThreeDays[2].day.condition.icon;

let thirdDayDesc = document.getElementById('thirdDayDesc');
thirdDayDesc.innerText = forecastForThreeDays[2].day.condition.text;

let thirdDayTemp = document.getElementById('thirdDayTemp');
thirdDayTemp.innerText = forecastForThreeDays[2].day.maxtemp_c + '°C / ' + forecastForThreeDays[2].day.mintemp_c + '°C';


/**
 * 24.cas - 24.6 Kreirati buducu prognozu za 30 dana
 */


/**
 * Dalje pravimo funkciju u weatherApi.mjs - export async function getWeatherInFuture(location, days) {}
 * Ova funkcija koja pruza prognozu za narednih 30 dana ne moze da se koristi, jer usluga nije besplatna
 * Pronadjena je besplatna usluga za 7 dana preko Open-meteo-api koja trazi geolokaciju
 * koju sam preuzeo od: getCurrentWeatherForLocation(location);
 */


    let lat = response.data.location.lat;
    let lon = response.data.location.lon;

    const response1 = await getForecast(lat, lon);

    const data = response1.data.daily;

    let monthlyForecast = document.getElementById('monthlyForecast');

    for (let i = 0; i < data.time.length; i++) {
        monthlyForecast.innerHTML += `
            <div class="long-card card">
                <p class="long-date">${getFormattedDate(data.time[i])}</p>
                <p>${getWeatherIcon(data.weathercode[i])}</p>
                <p class="long-desc">${getWeatherDescription(data.weathercode[i])}</p>
                <p class="long-temp">${data.temperature_2m_max[i]}°C / ${data.temperature_2m_min[i]}°C</p>
            </div>
        `;
    }

    function getWeatherDescription(code) {
        if (code < 3) return 'Sunny';
        if (code >= 3 && code < 61) return 'Cloudy';
        if (code >= 61 && code < 71) return 'Rain';
        if (code === 65) return 'Thunderstorm';
        if (code >= 71) return 'Snow';
        return 'unknown';
    }

function getWeatherIcon(code) {
    if (code < 3) return '☀️';
    if (code >= 3 && code < 61) return '⛅';
    if (code >= 61 && code < 71) return '🌧️';
    if (code >= 71) return '❄️';
    return 'unknown';
}

function updateLocation(location) {
    localStorage.setItem('location', location);
}