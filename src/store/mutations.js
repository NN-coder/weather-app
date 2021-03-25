const formatWeatherObj = (weatherObj) => ({
  id: weatherObj.id,
  date: new Date(weatherObj.applicable_date),
  weatherState: {
    name: weatherObj.weather_state_name,
    abbr: weatherObj.weather_state_abbr,
  },
  wind: {
    direction: weatherObj.wind_direction_compass,
    speed: weatherObj.wind_speed.toFixed(1),
  },
  temp: {
    min: weatherObj.min_temp.toFixed(0),
    max: weatherObj.max_temp.toFixed(0),
    average: weatherObj.the_temp.toFixed(0),
  },
  airPressure: weatherObj.air_pressure.toFixed(0),
  humidity: weatherObj.humidity.toFixed(0),
  visibility: weatherObj.visibility.toFixed(1),
});

export function setLoadingAndErrorStates(state, payload) {
  state.isLoading = payload.isLoading ?? state.isLoading;
  state.hasError = payload.hasError ?? state.hasError;
}

export function setParameters(state, weatherData) {
  state.parameters = {
    currentLocation: weatherData.title,
    currentParentLocation: weatherData.parent.title,
    timeInCurrentLocation: weatherData.time,
    currentTimezone: weatherData.timezone,
  };
}

export function setSunriseAndSunsetTime(state, weatherData) {
  const { format } = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: state.parameters.currentTimezone,
  });

  state.sunrise = format(new Date(weatherData.sun_rise));
  state.sunset = format(new Date(weatherData.sun_set));
}

export function setConsolidatedWeather(state, consolidatedWeather) {
  state.consolidatedWeather = consolidatedWeather.map((weatherObj) => formatWeatherObj(weatherObj));
}

export function setCurrentSearchText(state, text) {
  state.currentSearchText = text;
}

export function setSearchSuggestions(state, searchSuggestions) {
  state.searchSuggestions = searchSuggestions;
}
