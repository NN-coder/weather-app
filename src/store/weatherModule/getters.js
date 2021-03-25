export function todaysWeather(state) {
  return state.consolidatedWeather[0];
}

export function currentLocation(state) {
  return `${state.currentLocation}, ${state.currentParentLocation}`;
}

export function currentTime(state) {
  const { format } = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: state.currentTimezone,
  });

  return format(new Date(state.timeInCurrentLocation));
}
