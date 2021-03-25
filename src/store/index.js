import { createStore, createLogger } from 'vuex';
import locationSearchModule from './locationSearchModule';
import weatherModule from './weatherModule';

const isProduction = process.env.NODE_ENV === 'production';

export default createStore({
  modules: {
    locationSearch: {
      namespaced: true,
      ...locationSearchModule,
    },
    weather: {
      namespaced: true,
      ...weatherModule,
    },
  },
  plugins: !isProduction ? [createLogger()] : undefined,
  strict: !isProduction,
});
