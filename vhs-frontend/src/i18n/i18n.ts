import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationEn from './en/translation.json';
import translationHr from './hr/translation.json';

i18n.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  resources: {
    en: {
      translationEn,
    },
    hr: {
      translationHr,
    },
  },
});

export default i18n;
