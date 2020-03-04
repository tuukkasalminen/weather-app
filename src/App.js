import React, { Component } from 'react';
import './App.css';
import API_KEY from './config.js'
import CityContainer from './components/CityContainer/CityContainer'
import weatherService from './services/weatherService'


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        currentWeather: [],
        forecast: [],
        selectedCity: 'all'
      }
    }
  
    async componentDidMount() {
      /**
       * Current weather and forecast data are fetched separately
       * and set to state on component mount
       */

      const cityIds = [ "658225", "634964", "655195", "650225" ]
      const currentWeatherPromises = cityIds.map(async (id) => await weatherService.getWeather(id, API_KEY))
      const current = await Promise.all(currentWeatherPromises)
      this.setState({currentWeather: current})
      const forecastPromises = cityIds.map(async (id) => await weatherService.getForecast(id, API_KEY))
      const forecast = await Promise.all(forecastPromises)
      this.setState({ forecast })
      console.log(this.state.forecast)
    }  
    
    render(){

    const hide = {
      display: 'none'
    }

    return (
      <div className="App">
          <header>
            <h1>Säätutka</h1>
          </header>
          <select value={this.state.selectedCity} onChange={e => this.setState({selectedCity: e.target.value})}>
            <option value="all">Kaikki kaupungit</option>
            <option value={658225}>Helsinki</option>
            <option value={634964}>Tampere</option>
            <option value={655195}>Jyväskylä</option>
            <option value={650225}>Kuopio</option>
          </select>
          <div className="container">
            <div className="flexContainer">
            {this.state.currentWeather.map((city, index) =>
                <div key={index} className="card" 
                  style={(this.state.selectedCity !== 'all' && city.id !== parseInt(this.state.selectedCity)) ? hide : null }>
                  <CityContainer key={city.id} currentWeather={city} forecast={this.state.forecast[index]} />
                </div>
                )}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
