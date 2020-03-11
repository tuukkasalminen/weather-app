import React from 'react';
import './CurrentWeather.css';
import utils from '../../utils';

function CurrentWeather({ data }) {
  /**
   * Displays current weather data
   */

  const dateAndTime = new Date(data.dt * 1000);

  const date = `${dateAndTime.toLocaleString('en-EN', { month: 'short' })} ${utils.ordinalDay(dateAndTime)}`;
  const hours = `${dateAndTime.getHours()}`;
  const minutes = `${dateAndTime.getMinutes()}`;

  return (
    <div className="CurrentWeather">
      <div className="flex">
        <div className="city">
          {data.name}
          <p>{data.weather[0].description}</p>
        </div>
        <div className="temp">
          <img src={`${utils.iconUrl}${data.weather[0].icon}.png`} alt="" />
          <span>
            {Math.round(data.main.temp)}
             °C
          </span>
        </div>
      </div>
      <div className="flex bottom">
        <div className="date">
          {date.padStart(2, '0')}
          <p>{hours.padStart(2, '0') + ':' + minutes.padStart(2, '0')}</p>
        </div>
        <div className="otherInfo">
          <p>
            { 'Wind: ' }
            {data.wind.speed}
            { ' m/s' }
          </p>
          <p>
            { 'Humidity: ' }
            {data.main.humidity}
            { ' %' }
          </p>
          <p>
            { 'Precipitation (3 h): ' }
            {data.rain ? data.rain['3h'] : '0'}
            { 'mm' }
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
