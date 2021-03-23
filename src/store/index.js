/* eslint-disable promise/always-return */
import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: true,
    hasError: false,
    currentTime: '',
    weatherState: {
      name: '',
      abbr: '',
    },
    wind: {
      direction: '',
      speed: '',
    },
    temp: {
      min: '',
      max: '',
      average: '',
    },
    sun: {
      rise: '',
      set: '',
    },
    airPressure: '',
    visibility: '',
    humidity: '',
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setHasError(state, hasError) {
      state.hasError = hasError;
    },
    setWeatherData(state, locationRequest) {
      const defaultFormatterOptions = {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: locationRequest.timezone,
      };

      const { format: formatSunriseAndSunsetTime } = new Intl.DateTimeFormat(
        'en',
        defaultFormatterOptions
      );

      state.sun = {
        rise: formatSunriseAndSunsetTime(new Date(locationRequest.sun_rise)),
        set: formatSunriseAndSunsetTime(new Date(locationRequest.sun_set)),
      };

      const { format: formatCurrentTime } = new Intl.DateTimeFormat('en', {
        ...defaultFormatterOptions,
        timeZoneName: 'short',
      });

      state.currentTime = formatCurrentTime(new Date(locationRequest.time));

      const todaysWeather = locationRequest.consolidated_weather[0];

      state.weatherState = {
        name: todaysWeather.weather_state_name,
        abbr: todaysWeather.weather_state_abbr,
      };

      state.wind = {
        direction: todaysWeather.wind_direction_compass,
        speed: todaysWeather.wind_speed.toFixed(1),
      };

      state.temp = {
        min: todaysWeather.min_temp.toFixed(0),
        max: todaysWeather.max_temp.toFixed(0),
        average: todaysWeather.the_temp.toFixed(0),
      };

      state.airPressure = todaysWeather.air_pressure.toFixed(0);
      state.visibility = todaysWeather.visibility.toFixed(1);
      state.humidity = todaysWeather.humidity.toFixed(0);
    },
  },
  actions: {
    fetchWeatherData({ commit }) {
      commit('setIsLoading', true);

      fetch(
        'https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/44418/'
      )
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error(res.statusText);
        })
        .then((locationRequest) => {
          commit('setWeatherData', locationRequest);
          commit('setHasError', false);
        })
        .finally(() => commit('setIsLoading', false))
        .catch(() => commit('setHasError', true));
    },
  },
  strict: process.env.NODE_ENV !== 'production',
});
