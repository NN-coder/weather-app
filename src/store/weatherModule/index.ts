import { Module } from 'vuex';
import {
  setLoadingAndErrorStates,
  setLocationAndTimeParams,
  setSunriseAndSunsetTime,
  setConsolidatedWeather,
} from './mutations';
import { fetchWeatherData } from './actions';
import { todaysWeather, currentLocation, currentTime } from './getters';
import { IRootState } from '../types';
import { IState } from './types';

const initialState: IState = {
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
  namespaced: true,
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
} as Module<IState, IRootState>;
