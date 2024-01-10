export type ToWodsOptions = {
  locale: Locale;
  currency: Currency;
  ignoreZero: boolean;
  displayCurrency: boolean;
};

/**the retrieved dimension could be messed with, hence this type */
export type RetrievedAppDimensions = {
  xLeft?: unknown;
  xRight?: unknown;
  yTop?: unknown;
  yBottom?: unknown;
  width?: unknown;
  height?: unknown;
  isMaximized?: unknown;
};
