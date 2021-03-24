export function todaysWeather(state) {
  return state.consolidatedWeather[0];
}

export function currentLocation({ parameters }) {
  return `${parameters.currentLocation}, ${parameters.currentParentLocation}`;
}

export function currentTime({ parameters }) {
  const { format } = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: parameters.currentTimezone,
  });

  return format(new Date(parameters.timeInCurrentLocation));
}
