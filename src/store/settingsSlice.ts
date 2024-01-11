import { StateCreator } from "zustand";
import { AvailableAppLocales } from "../lang/i18n";

export type ConversionLocale = "fr-FR" | "en-US";
export type Currency = "DZD" | "EURO" | "USD";

export type SettingsSlice = {
  appLang: AvailableAppLocales;
  conversionLang: ConversionLocale;
  currency: Currency;
  ignoreZero: boolean;
  displayCurrency: boolean;
  doubleClickCopy: boolean;

  setAppLang: (v: AvailableAppLocales) => void;
  setConversionLang: (v: ConversionLocale) => void;
  setCurrency: (v: Currency) => void;
  setIngoreZero: (v: boolean) => void;
  setDisplayCurrency: (v: boolean) => void;
  setDoubleClickCopy: (v: boolean) => void;

  // theme
  isDarkTheme: boolean;
  setIsDarkTheme: (v: boolean) => void;
};

export const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  appLang: "fr",
  conversionLang: "fr-FR",
  currency: "DZD",
  ignoreZero: false,
  displayCurrency: false,
  doubleClickCopy: true,

  setAppLang: (lang) => set(() => ({ appLang: lang })),
  setConversionLang: (locale) => set(() => ({ conversionLang: locale })),
  setCurrency: (currency) => set(() => ({ currency })),
  setIngoreZero: (v) => set(() => ({ ignoreZero: v })),
  setDisplayCurrency: (v) => set(() => ({ displayCurrency: v })),
  setDoubleClickCopy: (v) => set(() => ({ doubleClickCopy: v })),

  isDarkTheme: false,
  setIsDarkTheme: (v) => set(() => ({ isDarkTheme: v })),
});

export default createSettingsSlice;
