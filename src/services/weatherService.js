import axios from 'axios';

const getWeather = async (id, key) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${key}`);
  return response.data;
};

const getForecast = async (id, key) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${key}`);
  return response.data;
};

export default { getWeather, getForecast };
