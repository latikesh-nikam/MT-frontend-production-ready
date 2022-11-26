import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageConstants } from '../constants/languageConstants';

i18n.use(initReactI18next).init({
  fallbackLng: languageConstants.english,
  lng: languageConstants.english,
  resources: {
    en: {
      translations: require('./locales/languages/en.json'),
      translations: require('./locales/languages/en.json'),
    },
    hn: {
      translations: require('./locales/languages/hn.json'),
    },
      translations: require('./locales/languages/hn.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = [languageConstants.english, languageConstants.hindi];

export default i18n;

