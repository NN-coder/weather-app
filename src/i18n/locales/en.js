const celsiusToFahrenheit = (celsiusTemp) => (celsiusTemp * 1.8 + 32).toFixed(0);

export default {
  searchInputPlaceholder: 'Search',
  currentConditions: {
    header: (currentTime) => `As of ${currentTime}`,
    temp: (celsiusTemp) => `${celsiusToFahrenheit(celsiusTemp)}&#176;F`,
    weatherState: (weatherStateName) => weatherStateName,
    wind: (direction, speedInMph) => `Wind: ${direction}, ${speedInMph.toFixed(1)} m/h`,
  },
  dailyForecast: {
    header: 'Daily forecast',
    temp: (celsiusTemp) => `${celsiusToFahrenheit(celsiusTemp)}&#176;F`,
  },
  todayDetails: {
    header: (location) => `Weather today in ${location}`,
    list: {
      temp: {
        name: 'High / Low',
        value: (celsiusMax, celsiusMin) =>
          `${celsiusToFahrenheit(celsiusMax)}&#176;F / ${celsiusToFahrenheit(celsiusMin)}&#176;F`,
      },
      wind: {
        name: 'Wind',
        value: (speedInMph) => `${speedInMph.toFixed(1)} m/h`,
      },
      pressure: {
        name: 'Pressure',
        value: (pressureInMbars) => `${pressureInMbars.toFixed(0)} mbar`,
      },
      visibility: {
        name: 'Visibility',
        value: (distanceInMiles) => `${distanceInMiles.toFixed(1)} miles`,
      },
      humidity: {
        name: 'Humidity',
        value: (percentages) => `${percentages.toFixed(0)}%`,
      },
    },
  },
};
