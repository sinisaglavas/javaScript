
// uvoz axios-a iz axios biblioteke
import axios from 'axios'

export async function getCurrentWeatherForLocation(location) {
    try { // pokusaj ucitati - try je neophodan za hvatanje gresaka, jer se greske hendluju zbog boljeg dozivljaja za korisnika
        // https://api.weatherapi.com/v1/current.json?key=774542f1e41044829ba103233252509&q=Moscow&aqi=no
        return await axios.get(process.env.API_URL+'/v1/current.json', { // parametri -> kao objekat
            params: {
                key: process.env.API_KEY, // uzimamo vrednost iz .env fajla, process je webpack ako smo nesto stavili u plugins to znaci da se to nalazi u process-u
                q: location,
                aqi: 'no',
            }
        });
    } catch (exception) {
        return alert('Something went wrong with getting weather for location! Please try again later.')
    }

}
// http://api.weatherapi.com/v1/forecast.json?key=&q=London&days=4&aqi=no&alerts=no
export async function getWeatherForUpcomingDays(location, days) {
    try {
        return await axios.get(process.env.API_URL+'/v1/forecast.json', { // parametri -> kao objekat
            params: {
                key: process.env.API_KEY,
                q: location,
                days: days,
                aqi: 'no',
                alerts: 'no'
            }
        });
    } catch (exception) {
        return alert('Something went wrong with getting weather for upcoming days! Please try again later.')
    }
}

/**
 * Svi fajlovi su prekopirani iz proslog casa (23.cas)
 * 24.cas Projekat II
 * Na pocetku cemo instalirati paket: npm install --save-dev dotenv dotenv-webpack
 * Ovaj paket omogucava da mi pravimo konfiguracione fajlove unutar kojih cemo cuvati apiKey, apiUrl ...
 * Posle instalacije moramo da ga podesimo u webpack.config.js fajlu - moramo to dodati
 */

// http://api.weatherapi.com/v1/future.json?key=&q=London&dt=2026-04-17
export async function getWeatherInFuture(location, date) {
    try {
        return await axios.get(process.env.API_URL+'/v1/future.json', { // parametri -> kao objekat
            params: {
                key: process.env.API_KEY, // uzimamo vrednost iz .env fajla, process je webpack ako smo nesto stavili u plugins to znaci da se to nalazi u process-u
                dt: date,
                q: location,
            }
        });
    } catch (exception) {
        return alert('Something went wrong with fetching data for weather in the future! Please try again later.')
    }
}