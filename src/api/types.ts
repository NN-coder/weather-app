/* eslint-disable camelcase */
interface ILocation {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance?: number;
}

export type ILocationSearchResponse = ILocation[];

export type TWeatherStateName =
  | 'Snow'
  | 'Sleet'
  | 'Hail'
  | 'Thunderstorm'
  | 'Heavy Rain'
  | 'Light Rain'
  | 'Showers'
  | 'Heavy Cloud'
  | 'Light Cloud'
  | 'Clear';

export type TWeatherStateAbbr = 'sn' | 'sl' | 'h' | 't' | 'hr' | 'lr' | 's' | 'hc' | 'lc' | 'c';

export interface IWeather {
  id: number;
  created: string;
  applicable_date: string;
  weather_state_name: TWeatherStateName;
  weather_state_abbr: TWeatherStateAbbr;
  wind_direction_compass: string;
  wind_direction: number;
  wind_speed: number;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface IWeatherFetchResponse extends ILocation {
  consolidated_weather: IWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone: string;
  timezone_name: string;
  parent: ILocation;
  sources: { title: string; slug: string; url: string; crawl_rate: number }[];
}
