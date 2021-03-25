/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */

export function fetchWeatherData({ commit }) {
  commit('setLoadingAndErrorStates', { isLoading: true });

  fetch(
    'https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/2357024/'
  )
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    })
    .then((weatherData) => {
      commit('setParameters', weatherData);
      commit('setConsolidatedWeather', weatherData.consolidated_weather);
      commit('setSunriseAndSunsetTime', weatherData);
      commit('setLoadingAndErrorStates', { hasError: false });
    })
    .catch(() => commit('setLoadingAndErrorStates', { hasError: true }))
    .finally(() => commit('setLoadingAndErrorStates', { isLoading: false }));
}

export function searchLocation({ commit, state }) {
  if (state.currentSearchText) {
    fetch(
      `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${state.currentSearchText}`
    )
      .then((res) => res.json())
      .then((searchSuggestions) => commit('setSearchSuggestions', searchSuggestions))
      .catch(console.log);
  } else {
    commit('setSearchSuggestions', []);
  }
}
