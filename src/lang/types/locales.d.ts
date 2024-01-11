/** The app traslation structre */

export type LocaleResource = {
  numberInputLabel: string;
  numberInputInfo: string;
  numberInputPlaceholder: string;

  textareaLabel: string;
  textareaPlaceholder: string;
  textareaInfoDblClickOn: string;
  textareaInfoDblClickOff: string;
  textareaTitle: string;

  copy: string;
  copyTitle: string;
  copyTitleNoContent: string;

  themeButtonTitle: string;
  settingsButtonTitle: string;

  languages: {
    english: string;
    french: string;
  };

  toast: {
    copied: string;
  };

  currency: {
    dzd: string;
    euro: string;
    dollar: string;
  };

  settings: {
    /** the key translation */
    self: string;

    appLang: string;
    appLangDescription: string;

    conversionLang: string;
    conversionLangDescription: string;

    showCurrency: string;
    showCurrencyDescription: string;

    currencyType: string;
    currencyTypeTitle: string;
    currencyTypeDescription: string;

    ignoreZero: string;
    ignoreZeroDescription: string;

    doubleClickCopy: string;
    doubleClickCopyDescription: string;

    save: string;
    cancel: string;
  };
};
