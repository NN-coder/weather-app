import { InjectionKey } from 'vue';
import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex';
import locationSearchModule from './locationSearchModule';
import { IRootState } from './types';
import weatherModule from './weatherModule';

const isProduction = process.env.NODE_ENV === 'production';

export const key: InjectionKey<Store<IRootState>> = Symbol('storeKey');

export default createStore<IRootState>({
  modules: {
    locationSearch: locationSearchModule,
    weather: weatherModule,
  },
  plugins: !isProduction ? [createLogger()] : undefined,
  strict: !isProduction,
});

export function useStore() {
  return baseUseStore(key);
}
