
import axios from "axios";

export async function getCoords(city) {
    return await axios.get(process.env.OPEN_METEO_GEOCODING_API_URL + '/v1/search', {
        params: {
            name: city
        }
    });
}

export async function getForecast(lat, lon) {
    try {
        return await axios.get(process.env.OPEN_METEO_API_URL + '/v1/forecast', {
            params: {
                latitude: lat,
                longitude: lon,
                daily: 'temperature_2m_max,temperature_2m_min,weathercode',
                timezone: 'auto'
            }
        });
    } catch (exception) {
        return alert('Something went wrong with getting forecast from Open Meteo! Please try again later.')
    }
}