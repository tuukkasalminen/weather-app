import React from 'react';
import './Forecast.css';
import utils from '../../utils';

function Forecast({ data }) {
  /**
   * Displays one 3 hour forecast
   */

  const dateAndTime = new Date(data.dt * 1000);
  const hours = `${dateAndTime.getHours()}`;
  const minutes = `${dateAndTime.getMinutes()}`;

  return (
    <div className="Forecast">
      <div className="topContainer">
        <p>{hours.padStart(2, '0') + ':' + minutes.padStart(2, '0')}</p>
        <img src={`${utils.iconUrl}${data.weather[0].icon}.png`} alt="" />
        <p className="temperature">
          {Math.round(data.main.temp)}
          { '°C' }
        </p>
      </div>
      <div className="bottomContainer">
        <p>
          {data.wind.speed}
          {' m/s'}
        </p>
        <p>
          {data.main.humidity}
          {' %'}
        </p>
        <p>
          {data.rain ? Math.round(data.rain['3h']) : '0'}
          {' mm'}
        </p>
      </div>
    </div>
  );
}

export default Forecast;
