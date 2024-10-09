import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language if detection fails
    debug: true, // Set to false in production
    detection: {
      order: ['localStorage', 'navigator'], // Detect language from localStorage first, then browser language
      caches: ['localStorage'], // Store user language choice in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },
  });

export default i18n;
