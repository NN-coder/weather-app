import { createStore } from 'vuex';
import {
  setLoadingAndErrorStates,
  setParameters,
  setConsolidatedWeather,
  setSunriseAndSunsetTime,
} from './mutations';
import { fetchWeatherData } from './actions';
import { todaysWeather, currentLocation, currentTime } from './getters';

const initialState = {
  isLoading: true,
  hasError: false,
  sunrise: '',
  sunset: '',
  parameters: {
    currentLocation: '',
    currentParentLocation: '',
    currentTimezone: '',
    timeInCurrentLocation: '',
  },
  consolidatedWeather: [],
};

export default createStore({
  state: initialState,
  mutations: {
    setLoadingAndErrorStates,
    setParameters,
    setConsolidatedWeather,
    setSunriseAndSunsetTime,
  },
  actions: {
    fetchWeatherData,
  },
  getters: {
    todaysWeather,
    currentLocation,
    currentTime,
  },
  strict: process.env.NODE_ENV !== 'production',
});
