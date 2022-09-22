import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/** Import Resource File--------------------------------- **/
import bm from "./bm.json";
import en from "./en.json";

export const resources = {
  bm: {
    lng: bm,
  },
  en: {
    lng: en,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ["lng"],
  resources,
});