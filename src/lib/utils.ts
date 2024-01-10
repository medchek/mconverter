/* eslint-disable no-nested-ternary */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ToWords } from "to-words";
import { CurrencyOptions } from "to-words/dist/types";
import { Locale, Currency } from "../store/settingsSlice";
import { PhysicalSize, type Monitor, type WebviewWindow, PhysicalPosition } from "@tauri-apps/api/window";
import { APP_DIMENSIONS_LOCALSTORAGE_KEY, APP_MIN_HEIGHT, APP_MIN_WIDTH } from "./constants";
import { RetrievedAppDimensions, ToWodsOptions } from "./types/utils.d";

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
export const toWords = (n: number, opt: ToWodsOptions): string => {
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

/**
 * Restore the app size and position from the localStorage data.
 * If the data is not present or is invalid, open the default app dimensions
 * @param currentWindow the currnet window object
 * @param currentMonitor the current monitor object
 */
export const restoreAppDimesions = async (
  currentWindow: WebviewWindow,
  currentMonitor: () => Promise<Monitor | null>,
) => {
  // handle app dimensions retrieval
  const localStorageAppDimensions = localStorage.getItem(APP_DIMENSIONS_LOCALSTORAGE_KEY);

  if (localStorageAppDimensions) {
    try {
      const { height, isMaximized, width, xLeft, xRight, yTop, yBottom }: RetrievedAppDimensions =
        JSON.parse(localStorageAppDimensions);

      // checking whether the app was maximized
      if (isMaximized !== undefined && typeof isMaximized === "boolean" && isMaximized) {
        currentWindow.maximize();
      } else {
        // if the app was not maximized
        const monitor = await currentMonitor();
        if (!monitor) return;

        // needed to check if the retrieved width and height do not exceeed the monitor resolution
        const {
          size: { width: monitorWidth, height: monitorHeight },
        } = monitor;
        // only run these if the app was not maximized
        // checking the app width & height
        if (
          typeof height === "number" &&
          height >= APP_MIN_HEIGHT &&
          height <= monitorHeight &&
          typeof width === "number" &&
          width >= APP_MIN_WIDTH &&
          width <= monitorWidth
        ) {
          currentWindow.setSize(new PhysicalSize(Math.floor(width), Math.floor(height)));
        }

        // checking the app position
        // in case the values are not numbers, dont run anything further
        if (
          typeof xLeft !== "number" ||
          typeof xRight !== "number" ||
          typeof yTop !== "number" ||
          typeof yBottom !== "number"
        )
          throw "invalid x or y type";

        const { width: appWidth, height: appHeight } = await currentWindow.innerSize();

        // first condition for the x axis is to check if the app is out of screen on the left. Bring it back to left 0 if so.
        // 2nd cond is to check if out of screen on the right side
        // if the app is not out of screen, restore the stored x axis value
        const targetX = xLeft < 10 ? 0 : xRight > monitorWidth ? monitorWidth - appWidth - 10 : xLeft;
        // same goes for the y axis, checking everything from top to bottom
        const targetY = yTop < 10 ? 0 : yBottom > monitorHeight ? monitorHeight - appHeight - 10 : yTop;
        const position = new PhysicalPosition(Math.floor(targetX), Math.floor(targetY));

        currentWindow.setPosition(position);
      }
    } catch (e) {
      console.error("invalid json", e);
    }
  }
};
