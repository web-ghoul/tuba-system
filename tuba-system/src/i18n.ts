import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ar",
    supportedLngs: ["ar", "en"],
    fallbackLng: "ar",
    backend: {
      loadPath: `${process.env.REACT_APP_URL}/locales/{{lng}}/{{ns}}.json`,
      crossDomain: true,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
