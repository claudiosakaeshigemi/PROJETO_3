import axios from 'axios';

const API_KEY ='165d662266f76c0853d923fc7131264c';
//  ES6 sintax ` ${API_KEY}`
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},BR`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
        
    };
}