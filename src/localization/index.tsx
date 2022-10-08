import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./en";
import { ar } from "./ar";
import config from "../config";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: config.defaultLocale,
  fallbackLng: config.defaultLocale,
  interpolation: {
    escapeValue: false,
  },
  // @here check later for upgrading to v4
  compatibilityJSON: "v3",
});

export { i18next, en };
