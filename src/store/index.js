import { createStore, createLogger } from 'vuex';
import {
  setLoadingAndErrorStates,
  setParameters,
  setConsolidatedWeather,
  setSunriseAndSunsetTime,
  setCurrentSearchText,
  setSearchSuggestions,
} from './mutations';
import { fetchWeatherData, searchLocation } from './actions';
import { todaysWeather, currentLocation, currentTime } from './getters';

const isProduction = process.env.NODE_ENV === 'production';

const initialState = {
  currentSearchText: '',
  searchSuggestions: [],
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
    setCurrentSearchText,
    setSearchSuggestions,
  },
  actions: {
    fetchWeatherData,
    searchLocation,
  },
  getters: {
    todaysWeather,
    currentLocation,
    currentTime,
  },
  plugins: !isProduction ? [createLogger()] : undefined,
  strict: !isProduction,
});
