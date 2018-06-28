import axios from "axios";

const apikey = "d04f4b2d9f11d449c095cd4ccd048bf2";

const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${apikey}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${rootURL}&q=${city},in`
  const request = axios.get(url);
  return({
    type: FETCH_WEATHER,
    payload: request
  })
}
