import { Mutation } from 'vuex';
import { IWeather, IWeatherFetchResponse } from '@/api/types';
import { IFormattedWeatherObj, IState } from './types';

const formatWeatherObj = (weatherObj: IWeather): IFormattedWeatherObj => ({
  id: weatherObj.id,
  date: new Date(weatherObj.applicable_date),
  weatherState: {
    name: weatherObj.weather_state_name,
    abbr: weatherObj.weather_state_abbr,
  },
  wind: {
    direction: weatherObj.wind_direction_compass,
    speed: weatherObj.wind_speed,
  },
  temp: {
    min: weatherObj.min_temp,
    max: weatherObj.max_temp,
    average: weatherObj.the_temp,
  },
  airPressure: weatherObj.air_pressure,
  humidity: weatherObj.humidity,
  visibility: weatherObj.visibility,
});

export const setLoadingAndErrorStates: Mutation<IState> = (
  state,
  payload: { isLoading?: boolean; hasError?: boolean }
) => {
  state.isLoading = payload.isLoading ?? state.isLoading;
  state.hasError = payload.hasError ?? state.hasError;
};

export const setLocationAndTimeParams: Mutation<IState> = (
  state,
  weatherData: IWeatherFetchResponse
) => {
  state.currentLocation = weatherData.title;
  state.currentParentLocation = weatherData.parent.title;
  state.timeInCurrentLocation = weatherData.time;
  state.currentTimezone = weatherData.timezone;
};

export const setSunriseAndSunsetTime: Mutation<IState> = (
  state,
  weatherData: IWeatherFetchResponse
) => {
  const { format } = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: state.currentTimezone,
  });

  state.sunrise = format(new Date(weatherData.sun_rise));
  state.sunset = format(new Date(weatherData.sun_set));
};

export const setConsolidatedWeather: Mutation<IState> = (
  state,
  weatherData: IWeatherFetchResponse
) => {
  state.consolidatedWeather = weatherData.consolidated_weather.map((weatherObj) =>
    formatWeatherObj(weatherObj)
  );
};
