import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'ar',
    ns: ['sections/logins_section'],
    backend: {
      loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}.json`,
      crossDomain: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
