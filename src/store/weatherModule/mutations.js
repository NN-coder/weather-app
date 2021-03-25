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

export function setLocationAndTimeParams(state, weatherData) {
  state.currentLocation = weatherData.title;
  state.currentParentLocation = weatherData.parent.title;
  state.timeInCurrentLocation = weatherData.time;
  state.currentTimezone = weatherData.timezone;
}

export function setSunriseAndSunsetTime(state, weatherData) {
  const { format } = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: state.currentTimezone,
  });

  state.sunrise = format(new Date(weatherData.sun_rise));
  state.sunset = format(new Date(weatherData.sun_set));
}

export function setConsolidatedWeather(state, weatherData) {
  state.consolidatedWeather = weatherData.consolidated_weather.map((weatherObj) =>
    formatWeatherObj(weatherObj)
  );
}
