import { reactive } from 'vue';

function bindAll(obj) {
  Object.keys(obj).forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    if (typeof obj[key] === 'function') obj[key] = obj[key].bind(obj);
  });

  return obj;
}

function t(prop) {
  return prop.split('.').reduce((value, key) => value[key], this.messages[this.locale]);
}

export function createI18n({ locale, messages }) {
  const i18n = reactive({
    locale,
    messages,
    t,
  });

  return bindAll(i18n);
}
