import { ILocationSearchResponse, IWeatherFetchResponse } from './types';

const corsProxyServer = 'https://secret-ocean-49799.herokuapp.com';
const apiUrl = 'https://www.metaweather.com/api';

export const searchLocation = async (query: string, options?: RequestInit) => {
  const res = await fetch(`${corsProxyServer}/${apiUrl}/location/search/?query=${query}`, options);

  if (res.ok) return (await res.json()) as ILocationSearchResponse;
  throw new Error(res.statusText);
};

export const fetchWeather = async (woeid: number | string, options?: RequestInit) => {
  const res = await fetch(`${corsProxyServer}/${apiUrl}/location/${woeid}`, options);

  if (res.ok) return (await res.json()) as IWeatherFetchResponse;
  throw new Error(res.statusText);
};
