import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translation from './locales/en/translation.json';

export const resources = {
  en: {
    translation,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  keySeparator: '.',
  resources,
});
