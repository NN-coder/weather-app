import { IState as ILocationSearchModule } from './locationSearchModule/types';
import { IState as IWeatherModule } from './weatherModule/types';

export interface IRootState {
  locationSearch: ILocationSearchModule;
  weather: IWeatherModule;
}
