/* eslint-disable promise/catch-or-return */
import { Action } from 'vuex';
import router from '../../router';
import { fetchWeather } from '../../api';
import { IRootState } from '../types';
import { IState } from './types';

export const fetchWeatherData: Action<IState, IRootState> = ({ commit }) => {
  commit('setLoadingAndErrorStates', { isLoading: true });
  const { woeid } = router.currentRoute.value.params as { woeid: string };

  fetchWeather(woeid)
    .then((weatherData) => {
      commit('setLocationAndTimeParams', weatherData);
      commit('setSunriseAndSunsetTime', weatherData);
      commit('setConsolidatedWeather', weatherData);
      commit('setLoadingAndErrorStates', { hasError: false });
      return weatherData;
    })
    .catch(() => commit('setLoadingAndErrorStates', { hasError: true }))
    .finally(() => commit('setLoadingAndErrorStates', { isLoading: false }));
};
