import i18n from "i18next";
/* eslint-disable import/no-named-as-default-member */
import { initReactI18next } from "react-i18next";
import frFR from "./locales/fr-FR";
import enUS from "./locales/en-US";
import useStore from "../store";

const resources = {
  en: {
    translation: enUS,
  },
  fr: {
    translation: frFR,
  },
} as const;

export type AvailableAppLocales = keyof typeof resources;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: "",
    resources,
    // debug: true
    fallbackLng: "fr",
    lng: useStore.getState().appLang ?? "fr",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
// fixes the autocomplete problem with the default useTranslation
