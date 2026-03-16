
import { getUserLocation } from "./components/location.mjs";
import {getCurrentWeatherForLocation, getWeatherForUpcomingDays} from "./components/weatherapi.mjs";

// const response = await axios.get('https://dummyjson.com/products'); // await -> cekanje odgovora
// console.log(response.data); // da bi radilo moramo da pokrenemo komandu: npm run watch

/**
 * hocemo da znamo lokaciju jer cemo imati vise stranica na sajtu pa cemo znati za koju je korisnik lokaciju trazio
 * ako korisnik ima upisanu lokaciju u LS ne trebamo ponovo da ga pitamo
 * - Ako nemamo lokaciju isti kod gde pitamo za lokaciju
 * - Ako imamo lokaciju ne prikazujemo prompt i dodajemo dugme: Promeni lokaciju
 */

let location = localStorage.getItem('location') || getUserLocation(); // ako je null vracamo prazan string

localStorage.setItem('location', location);

document.getElementById('changeLocation').addEventListener('click', () => {
    location = getUserLocation();
    localStorage.setItem('location', location);
})

try { // pokusaj ucitati - try je neophodan za hvatanje gresaka, jer se greske hendluju zbog boljeg dozivljaja za korisnika

    const response = await getCurrentWeatherForLocation(location);

    if (! response.data.current.is_day) {
        document.querySelector('body').style.backgroundColor = '#261f1f';
    }
} catch (error) { // ako nije uspeo da se poveze preko api
    console.log(error);
    alert('Desila se greska prilikom uzimanja prognoze za ovu lokaciju. Pokusajte kasnije.')
}

const forecastResponse = await getWeatherForUpcomingDays(location, 3);

for (let forecast of forecastResponse.data.forecast.forecastday) {
    console.log('Na dan: '+forecast.date+' maksimalna temperatura ce biti:'+forecast.day.maxtemp_c+', a minimalna:'+forecast.day.mintemp_c);
}