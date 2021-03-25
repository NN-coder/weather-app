import {
  setLoadingAndErrorStates,
  setLocationAndTimeParams,
  setSunriseAndSunsetTime,
  setConsolidatedWeather,
} from './mutations';
import { fetchWeatherData } from './actions';
import { todaysWeather, currentLocation, currentTime } from './getters';

const initialState = {
  isLoading: true,
  hasError: false,
  currentLocation: '',
  currentParentLocation: '',
  currentTimezone: '',
  timeInCurrentLocation: '',
  sunrise: '',
  sunset: '',
  consolidatedWeather: [],
};

export default {
  state: () => initialState,
  mutations: {
    setLoadingAndErrorStates,
    setLocationAndTimeParams,
    setSunriseAndSunsetTime,
    setConsolidatedWeather,
  },
  actions: {
    fetchWeatherData,
  },
  getters: {
    todaysWeather,
    currentLocation,
    currentTime,
  },
};
