/* eslint-disable promise/catch-or-return */
export function fetchWeatherData({ commit }, woeid) {
  commit('setLoadingAndErrorStates', { isLoading: true });

  fetch(
    `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
  )
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    })
    .then((weatherData) => {
      commit('setLocationAndTimeParams', weatherData);
      commit('setSunriseAndSunsetTime', weatherData);
      commit('setConsolidatedWeather', weatherData);
      return weatherData;
    })
    .catch(() => commit('setLoadingAndErrorStates', { hasError: true }))
    .finally(() => commit('setLoadingAndErrorStates', { isLoading: false }));
}
