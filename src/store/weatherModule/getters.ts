import { Getter } from 'vuex';
import { IRootState } from '../types';
import { IState } from './types';

export const todaysWeather: Getter<IState, IRootState> = (state) => {
  return state.consolidatedWeather[0];
};

export const currentLocation: Getter<IState, IRootState> = (state) => {
  return `${state.currentLocation}, ${state.currentParentLocation}`;
};

export const currentTime: Getter<IState, IRootState> = (state) => {
  const { format } = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: state.currentTimezone,
  });

  return format(new Date(state.timeInCurrentLocation));
};
