/* eslint-disable no-nested-ternary */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ToWords } from "to-words";
import { CurrencyOptions } from "to-words/dist/types";
import { Locale, Currency } from "../store/settingsSlice";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Converts a number string to a number
 * @param n String number
 * @returns The converted number. If the provided string was not a valid number returns 0
 */
export const toNumber = (n: string) => {
  const converted = parseFloat(n.trim());
  return !Number.isNaN(converted) && Number.isFinite(converted) ? converted : 0;
};

/**
 * Get currency options object based on the locale and currency type
 * @param opts options object containing the target locale and currency
 * @returns CurrencyOptions object that should be used within the conversion function
 */
const getCurrencyOptions = (opts: { locale: Locale; currency: Currency }): CurrencyOptions => {
  const { locale, currency } = opts;

  return {
    name: currency === "DZD" ? "Dinar" : currency === "EURO" ? "Euro" : "Dollar",
    plural: currency === "DZD" ? "Dinars" : currency === "EURO" ? "Euros" : "Dollars",
    symbol: currency,
    fractionalUnit: {
      name: locale === "fr-FR" ? "Centime" : "Cent",
      plural: locale === "fr-FR" ? "Centimes" : "Cents",
      symbol: "C",
    },
  };
};

/**
 * Converts a number to words
 * @param n the number to convert
 * @returns a string of the provided number in words
 */
export const toWords = (
  n: number,
  opt: {
    locale: Locale;
    currency: Currency;
    ignoreZero: boolean;
    displayCurrency: boolean;
  },
): string => {
  const converter = new ToWords({
    localeCode: opt.locale,
    converterOptions: {
      currency: opt.displayCurrency,
      ignoreDecimal: false,
      ignoreZeroCurrency: opt?.ignoreZero,
      doNotAddOnly: true,
      currencyOptions: getCurrencyOptions({
        locale: opt.locale,
        currency: opt.currency,
      }),
    },
  });

  return converter.convert(n);
};
