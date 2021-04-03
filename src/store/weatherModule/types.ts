import { IWeather } from '@/api/types';

export interface IFormattedWeatherObj {
  id: IWeather['id'];
  date: Date;
  weatherState: {
    name: IWeather['weather_state_name'];
    abbr: IWeather['weather_state_abbr'];
  };
  wind: {
    direction: IWeather['wind_direction_compass'];
    speed: IWeather['wind_speed'];
  };
  temp: {
    min: IWeather['min_temp'];
    max: IWeather['max_temp'];
    average: IWeather['the_temp'];
  };
  airPressure: IWeather['air_pressure'];
  humidity: IWeather['humidity'];
  visibility: IWeather['visibility'];
}

export interface IState {
  isLoading: boolean;
  hasError: boolean;
  currentLocation: string;
  currentParentLocation: string;
  currentTimezone: string;
  timeInCurrentLocation: string;
  sunrise: string;
  sunset: string;
  consolidatedWeather: IFormattedWeatherObj[];
}
