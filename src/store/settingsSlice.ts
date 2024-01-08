import { StateCreator } from 'zustand';

export type Locale = 'fr-FR' | 'en-US';
export type Currency = 'DZD' | 'EURO' | 'USD';

export type SettingsSlice = {
  locale: Locale;
  currency: Currency;
  ignoreZero: boolean;
  displayCurrency: boolean;
  doubleClickCopy: boolean;

  setLocale: (v: Locale) => void;
  setCurrency: (v: Currency) => void;
  setIngoreZero: (v: boolean) => void;
  setDisplayCurrency: (v: boolean) => void;
  setDoubleClickCopy: (v: boolean) => void;

  // theme
  isDarkTheme: boolean;
  setIsDarkTheme: (v: boolean) => void;
};

export const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  locale: 'fr-FR',
  currency: 'DZD',
  ignoreZero: false,
  displayCurrency: false,
  doubleClickCopy: true,
  setLocale: (locale) => set(() => ({ locale })),
  setCurrency: (currency) => set(() => ({ currency })),
  setIngoreZero: (v) => set(() => ({ ignoreZero: v })),
  setDisplayCurrency: (v) => set(() => ({ displayCurrency: v })),
  setDoubleClickCopy: (v) => set(() => ({ doubleClickCopy: v })),

  isDarkTheme: false,
  setIsDarkTheme: (v) => set(() => ({ isDarkTheme: v })),
});

export default createSettingsSlice;
