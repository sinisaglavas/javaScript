
// uvoz axios-a iz axios biblioteke
import axios from "axios";

// http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
export async function getGeolocationForCoords(lat, lon) {
    return await axios.get(process.env.OPEN_WEATHER_API_URL+'/geo/1.0/reverse', {
        params: {
            lat: lat,
            lon: lon,
            limit: 1,
            appid: process.env.OPEN_WEATHER_API_KEY
        }
    })
}