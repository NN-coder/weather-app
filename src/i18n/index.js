import { inject } from 'vue';
import { createI18n } from './utils';
import en from './locales/en';
import ru from './locales/ru';

export default createI18n({
  locale: 'en',
  messages: {
    en,
    ru,
  },
});

export function useI18n() {
  return inject('i18n');
}
