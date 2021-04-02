const mphToMps = (speedInMph) => (speedInMph * 0.45).toFixed(1);
const mbarsToMmHg = (pressureInMbars) => (pressureInMbars * 0.75).toFixed(0);
const milesToKilometers = (miles) => (miles * 1.61).toFixed(1);

const translateWeatherState = (weatherState) => {
  if (weatherState === 'Snow') return 'Снег';
  if (weatherState === 'Sleet') return 'Слякоть';
  if (weatherState === 'Hail') return 'Град';
  if (weatherState === 'Thunderstorm') return 'Гроза';
  if (weatherState === 'Heavy Rain') return 'Ливень';
  if (weatherState === 'Light Rain') return 'Дождь';
  if (weatherState === 'Showers') return 'Небольшой дождь';
  if (weatherState === 'Heavy Cloud') return 'Облачно';
  if (weatherState === 'Light Cloud') return 'Малооблачно';
  return 'Ясно';
};

const translateWindDirection = (direction) => {
  return [...direction]
    .map((symb) => {
      if (symb === 'N') return 'С';
      if (symb === 'E') return 'В';
      if (symb === 'S') return 'Ю';
      return 'З';
    })
    .join('');
};

export default {
  searchInputPlaceholder: 'Поиск',
  currentConditions: {
    header: (currentTime) => `По состоянию на ${currentTime}`,
    temp: (celsiusTemp) => `${celsiusTemp.toFixed(0)}&#176;C`,
    weatherState: (weatherStateName) => translateWeatherState(weatherStateName),
    wind: (direction, speedInMph) =>
      `Ветер: ${translateWindDirection(direction)}, ${mphToMps(speedInMph)} м/с`,
  },
  dailyForecast: {
    header: 'Ежедневный прогноз',
    temp: (celsiusTemp) => `${celsiusTemp.toFixed(0)}&#176;C`,
  },
  todayDetails: {
    header: (location) => `Погода сегодня в ${location}`,
    list: {
      temp: {
        name: 'Макс. / Мин',
        value: (celsiusMax, celsiusMin) =>
          `${celsiusMax.toFixed(0)}&#176;C / ${celsiusMin.toFixed(0)}&#176;C`,
      },
      wind: {
        name: 'Ветер',
        value: (speedInMph) => `${mphToMps(speedInMph)} м/с`,
      },
      pressure: {
        name: 'Давление',
        value: (pressureInMbars) => `${mbarsToMmHg(pressureInMbars)} мм рт.ст.`,
      },
      visibility: {
        name: 'Видимость',
        value: (distanceInMiles) => `${milesToKilometers(distanceInMiles)} км`,
      },
      humidity: {
        name: 'Влажность',
        value: (percentages) => `${percentages.toFixed(0)}%`,
      },
    },
  },
};
