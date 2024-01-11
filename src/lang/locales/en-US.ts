import { LocaleResource } from "../types/locales.d";

const enUS: LocaleResource = {
  numberInputLabel: "Enter a number",
  numberInputInfo: "Your number cannot exceed 15 digits and 3 decimals",
  numberInputPlaceholder: "Enter a number to convert it into words",

  textareaLabel: "Your number in words",
  textareaPlaceholder: "Your number will be displayed here",
  textareaInfoDblClickOn: "You can double-click on the text area to copy its content.",
  textareaInfoDblClickOff: "You can enable the double-click copy in the settings.",
  textareaTitle: "Double-click to copy the text",

  copy: "Copy",
  copyTitle: "Copy the content",
  copyTitleNoContent: "Nothing to copy",

  themeButtonTitle: "Set the theme",
  settingsButtonTitle: "Settings",

  languages: {
    english: "English",
    french: "French",
  },

  toast: {
    copied: "Text successfully copied",
  },

  currency: {
    dzd: "Algerian Dinar",
    euro: "Euro",
    dollar: "Dollar",
  },

  settings: {
    /** the key translation */
    self: "Settings",

    appLang: "App language",
    appLangDescription: "Adjust the language of the user interface.",

    conversionLang: "Conversion language",
    conversionLangDescription: "Change the language which your number is converted in.",

    showCurrency: "Display the currency",
    showCurrencyDescription: "Add the selected currency to the end of each conversion.",

    currencyType: "Currency",
    currencyTypeTitle: "You have to enable currency display to adjust this setting",
    currencyTypeDescription: "The type of currency to display.",

    ignoreZero: "Ignore the zero value",
    ignoreZeroDescription: "When a decimal number is entered, the zero will no be taken into account.",

    doubleClickCopy: "Double-click copy",
    doubleClickCopyDescription: "Set whether the text should be copied when double-clicking the text area or not.",

    save: "Save",
    cancel: "Cancel",
  },
};

export default enUS;
