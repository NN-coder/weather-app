/* eslint-disable promise/catch-or-return */
import router from '../../router';
import { fetchWeather } from '../../api';

export function fetchWeatherData({ commit }) {
  commit('setLoadingAndErrorStates', { isLoading: true });
  const { woeid } = router.currentRoute.value.params;

  fetchWeather(woeid)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    })
    .then((weatherData) => {
      commit('setLocationAndTimeParams', weatherData);
      commit('setSunriseAndSunsetTime', weatherData);
      commit('setConsolidatedWeather', weatherData);
      commit('setLoadingAndErrorStates', { hasError: false });
      return weatherData;
    })
    .catch(() => commit('setLoadingAndErrorStates', { hasError: true }))
    .finally(() => commit('setLoadingAndErrorStates', { isLoading: false }));
}
