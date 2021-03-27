/* eslint-disable promise/catch-or-return */
import router from '../../router';

export function fetchWeatherData({ commit }) {
  commit('setLoadingAndErrorStates', { isLoading: true });

  fetch(
    `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/${router.currentRoute.value.params.woeid}`
  )
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
