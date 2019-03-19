import React, {Component} from "react";
import {connect} from 'react-redux';
import Chart from "../components/chart.js";
class WeatherList extends Component{
  renderWeather (cityData) {
    if(cityData == undefined) {
      alert("That's not a valid Indian city's name!")
    } else {
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      return (
        <tr key={cityData.city.name}>
          <td>{cityData.city.name}</td>
          <td><Chart color="orange" data={temps} units="K" /></td>
          <td><Chart color="green" data={pressures} units="hPa" /></td>
          <td><Chart color="black" data={humidities} units="%" /></td>
        </tr>
      )
  
    }
  }
  render(){

    return(
      <div>
        <ul>

        </ul>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure  </th>
              <th>Humidity  </th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>

    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
