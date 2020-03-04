import React from 'react';
import './CityContainer.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Forecast from '../Forecast/Forecast';

function CityContainer({ currentWeather, forecast }) {
  /**
   * Contains current weather and 3 hour
   * forecasts for each city
   */

  return (
    <div className="CityContainer">
        <CurrentWeather data={currentWeather} />
        <div className="forecastContainer">
          {forecast && forecast.list.map((list, index) => 
            index<5 && <Forecast key={index} data={list} />)}
        </div>
    </div>
  );
}

export default CityContainer;
