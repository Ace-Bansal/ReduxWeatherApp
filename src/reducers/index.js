import { combineReducers } from 'redux';
import fetchWeather from "./weather.js"


const rootReducer = combineReducers({
  weather: fetchWeather
});

export default rootReducer;
