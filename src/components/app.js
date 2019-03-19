import React, { Component } from 'react';
import SearchBar from "../containers/searchBar.js";
import WeatherList from "../containers/weatherList.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>ReduxWeatherApp</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
