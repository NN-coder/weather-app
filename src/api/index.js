const corsProxyServer = 'https://secret-ocean-49799.herokuapp.com';
const apiUrl = 'https://www.metaweather.com/api';

export const searchLocation = (query, options) =>
  fetch(`${corsProxyServer}/${apiUrl}/location/search/?query=${query}`, options);

export const fetchWeather = (woeid, options) =>
  fetch(`${corsProxyServer}/${apiUrl}/location/${woeid}`, options);
