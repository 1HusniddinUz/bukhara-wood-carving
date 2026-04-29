import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationUz from "./translationUz";
import translationRu from "./translationRu";
import translationEn from "./translationEn";
import translationFr from "./translationFr";
import translationTr from "./translationTr";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
    en: { translation: translationEn },
    fr: { translation: translationFr },
    tr: { translation: translationTr },
  },
  lng: "uz",
  fallbackLng: "uz",
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;