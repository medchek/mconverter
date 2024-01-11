import { LocaleResource } from "../types/locales.d";

const frFR: LocaleResource = {
  numberInputLabel: "Entrez votre nombre",
  numberInputInfo: "Votre nombre ne doit pas excéder 15 chiffres entiers et 3 chiffres décimaux",
  numberInputPlaceholder: "Entrez un nombre pour le convertir en mots",

  textareaLabel: "Votre nombre converti en mots",
  textareaPlaceholder: "",
  textareaInfoDblClickOn: "Vous pouvez double-cliquer sur la zone de text pour copier son contenu",
  textareaInfoDblClickOff: "Vous pouvez activer la copie par double-clic dans les paramètres",
  textareaTitle: "Double-cliquez pour copier le texte",

  copy: "Copier",
  copyTitle: "Copier le contenu",
  copyTitleNoContent: "Rien à copier",

  themeButtonTitle: "Ajustez le thème",
  settingsButtonTitle: "Paramètres",

  languages: {
    english: "Anglais",
    french: "Français",
  },

  toast: {
    copied: "Texte copié avec succès",
  },

  currency: {
    dzd: "Dinar Algérien",
    euro: "Euro",
    dollar: "Dollar",
  },

  settings: {
    /** the key translation */
    self: "Paramètres",

    appLang: "Langue de l'application",
    appLangDescription: "Changez la langue de l'interface de l'application.",

    conversionLang: "Langue de conversion",
    conversionLangDescription: "Changez la langue utilisée lors de la conversion.",

    showCurrency: "Afficher la devise",
    showCurrencyDescription: "Attacher la devise séléctionnée à la fin de la conversion ou non.",

    currencyType: "Devise",
    currencyTypeTitle: "Vous devez afficher la devise pour régler cette option",
    currencyTypeDescription: "Le type de devise à afficher.",

    ignoreZero: "Ignorer la valeur zero",
    ignoreZeroDescription: "Dans le cas d'une fraction, le zero ne sera pas pris en compte.",

    doubleClickCopy: "Copie par double-clic",
    doubleClickCopyDescription: "Ajuste si le texte doit être copié lors d'un double-clic sur la zone de texte ou non.",

    save: "Sauvegarder",
    cancel: "Annuler",
  },
};

export default frFR;
