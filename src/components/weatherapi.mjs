
// uvoz axios-a iz axios biblioteke
import axios from 'axios'

const apiKey = '774542f1e41044829ba103233252509'; // weatherapi.com -> api kljuc omogucuje da sajt prepozna da smo to mi

export async function getCurrentWeatherForLocation(location) {

    // https://api.weatherapi.com/v1/current.json?key=774542f1e41044829ba103233252509&q=Moscow&aqi=no
    return await axios.get('https://api.weatherapi.com/v1/current.json', { // parametri -> kao objekat
        params: {
            key: apiKey,
            q: location,
            aqi: 'no',
        }
    });
}

export async function getWeatherForUpcomingDays(location, days) {
    return await axios.get('https://api.weatherapi.com/v1/forecast.json', { // parametri -> kao objekat
        params: {
            key: apiKey,
            q: location,
            aqi: 'no',
            alerts: 'no',
            days: days
        }
    });
}