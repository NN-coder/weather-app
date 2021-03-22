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
    humidity: undefined,
  },
  mutations: {
    setWeatherData(state, todaysWeather) {
      if (!todaysWeather) state.hasError = true;
      else {
        const { format: formatDate } = Intl.DateTimeFormat('en', {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: todaysWeather.timezone,
          timeZoneName: 'short',
        });

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

        state.sun = {
          // Deletes the time zone name at the end of the line
          rise: formatDate(new Date(todaysWeather.sun_rise)).split(' ').slice(0, 2).join(' '),
          set: formatDate(new Date(todaysWeather.sun_set)).split(' ').slice(0, 2).join(' '),
        };

        state.airPressure = todaysWeather.air_pressure.toFixed(0);
        state.visibility = todaysWeather.visibility.toFixed(1);
        state.humidity = todaysWeather.humidity;
        state.currentTime = formatDate(new Date(todaysWeather.time));
      }

      state.isLoading = false;
    },
  },
  actions: {
    async fetchWeatherData({ commit }) {
      const response = await fetch(
        'https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/44418/'
      );

      if (response.ok) {
        const weatherData = await response.json();

        const todaysWeather = Object.assign(weatherData.consolidated_weather[0], {
          sun_rise: weatherData.sun_rise,
          sun_set: weatherData.sun_set,
          time: weatherData.time,
          timezone: weatherData.timezone,
        });

        commit('setWeatherData', todaysWeather);
      } else {
        commit('setWeatherData');
      }
    },
  },
  strict: process.env.NODE_ENV !== 'production',
});
