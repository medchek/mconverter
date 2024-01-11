import { ChangeEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/Dialog";
import SettingsIcon from "../icons/SettingsIcon";
import SettingsSelect from "./SettingsSelect";
import SettingsSwitch from "./SettingsSwitch";
import { Currency, ConversionLocale } from "../../store/settingsSlice";
import useStore from "../../store";
// eslint-disable-next-line import/named
import { useTranslate } from "../../lang/hook";
import { AvailableAppLocales as AppLocales } from "../../lang/i18n";

export default function SettingDialog() {
  const {
    appLang: storeAppLang,
    conversionLang: storeConversionLang,
    currency: storeCurrency,
    ignoreZero: storeIgnoreZero,
    displayCurrency: storeDisplayCurrency,
    doubleClickCopy: storeDoubleClickCopy,

    setAppLang: setStoreAppLang,
    setCurrency: setStoreCurrency,
    setIngoreZero: setStoreIngoreZero,
    setConversionLang: setStoreConversionLang,
    setDisplayCurrency: setStoreDisplayCurrency,
    setDoubleClickCopy: setStoreDoubleClickCopy,
  } = useStore();
  const { t, i18n } = useTranslate();

  const availableAppLocales: { value: AppLocales; display: string }[] = [
    { value: "fr", display: t("languages.french") },
    { value: "en", display: t("languages.english") },
  ];
  const availableConversionLangagues: { value: ConversionLocale; display: string }[] = [
    { value: "fr-FR", display: t("languages.french") },
    { value: "en-US", display: t("languages.english") },
  ];

  const availableCurrencies: { value: Currency; display: string }[] = [
    { value: "DZD", display: t("currency.dzd") },
    { value: "EURO", display: t("currency.euro") },
    { value: "USD", display: t("currency.dollar") },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [appLang, setAppLang] = useState<AppLocales>(storeAppLang);
  const [conversionLang, setConversionLang] = useState<ConversionLocale>(storeConversionLang);
  const [currency, setCurrecny] = useState<Currency>(storeCurrency);
  const [ignoreZero, setIngoreZero] = useState<boolean>(storeIgnoreZero);
  const [doubleClickCopy, setDoubleClickCopy] = useState<boolean>(storeDoubleClickCopy);

  const [displayCurrency, setDisplayCurrency] = useState<boolean>(storeDisplayCurrency);

  const handleAppLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value.trim() as AppLocales;
    console.log(v);
    if (v !== "fr" && v !== "en") return;

    setAppLang(v);
  };

  const handleConversionLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value.trim() as ConversionLocale;
    if (v !== "en-US" && v !== "fr-FR") return;
    setConversionLang(v);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // c = currency
    const c = e.target.value.trim() as Currency;
    if (c !== "USD" && c !== "DZD" && c !== "EURO") return;
    setCurrecny(c);
  };

  const handleDisplayCurrencyCheckedChange = (e: boolean) => {
    setDisplayCurrency(e);
  };
  const handleIgnoreZeroCheckedChange = (e: boolean) => {
    setIngoreZero(e);
  };
  const handleDblClickCopyCheckedChange = (e: boolean) => {
    setDoubleClickCopy(e);
  };

  /**
   * Seves the settings to the store and persists them
   */
  const saveSettings = () => {
    setStoreAppLang(appLang);
    // change the app lang settings if it was chgange
    if (appLang !== storeAppLang) {
      i18n.changeLanguage(appLang);
    }
    setStoreConversionLang(conversionLang);
    setStoreCurrency(currency);
    setStoreIngoreZero(ignoreZero);
    setStoreDisplayCurrency(displayCurrency);
    setStoreDoubleClickCopy(doubleClickCopy);
    setIsOpen(false);
  };

  /**
   * When closing the dialog without saving, the state is not reset, and it
   * would always seem as if the settings were saved and persisted, which is
   * not the case.
   * This should be invoked when the dialog is closed to reset the state to how
   * it originally was.
   *
   */
  const resetState = () => {
    setAppLang(storeAppLang);
    setConversionLang(storeConversionLang);
    setCurrecny(storeCurrency);
    setIngoreZero(storeIgnoreZero);
    setDisplayCurrency(storeDisplayCurrency);
    setDoubleClickCopy(storeDoubleClickCopy);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
      <DialogTrigger className="outline-none" title={t("settingsButtonTitle")}>
        <SettingsIcon className="hover:text-primary transition-colors size-6 md:size-7" />
      </DialogTrigger>
      <DialogContent
        className="w-[92%] sm:w-4/5 2xl:w-2/3 bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-100 text-neutral-900 border-none rounded-xl px-4 sm:px-6 pt-6 pb-2 sm:pb-4"
        // manually reset the state when the component is closed
        // when the component is closed via the save button the state will
        // be reset to the saved state, therefore, changing nothing from the
        // saved data
        onCloseAutoFocus={resetState}
      >
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl">{t("settings.self")}</DialogTitle>
        </DialogHeader>

        <div>
          <section className="flex flex-col gap-4">
            <SettingsSelect
              label={t("settings.appLang")}
              description={t("settings.appLangDescription")}
              onChange={handleAppLangChange}
              value={appLang}
            >
              {availableAppLocales.map(({ value, display }) => (
                <option value={value} key={value}>
                  {display}
                </option>
              ))}
            </SettingsSelect>
            <SettingsSelect
              label={t("settings.conversionLang")}
              description={t("settings.conversionLangDescription")}
              onChange={handleConversionLangChange}
              value={conversionLang}
            >
              {availableConversionLangagues.map(({ value, display }) => (
                <option value={value} key={value}>
                  {display}
                </option>
              ))}
            </SettingsSelect>
            <SettingsSwitch
              label={t("settings.showCurrency")}
              description={t("settings.showCurrencyDescription")}
              onCheckedChange={handleDisplayCurrencyCheckedChange}
              checked={displayCurrency}
            />
            <SettingsSelect
              label={t("settings.currencyType")}
              description={t("settings.currencyTypeDescription")}
              title={!displayCurrency ? t("settings.currencyTypeTitle") : ""}
              onChange={handleCurrencyChange}
              value={currency}
              disabled={!displayCurrency}
            >
              {availableCurrencies.map(({ value, display }) => (
                <option value={value} key={value}>
                  {display}
                </option>
              ))}
            </SettingsSelect>
            <SettingsSwitch
              label={t("settings.ignoreZero")}
              description={t("settings.ignoreZeroDescription")}
              checked={ignoreZero}
              onCheckedChange={handleIgnoreZeroCheckedChange}
            />
            <SettingsSwitch
              label={t("settings.doubleClickCopy")}
              description={t("settings.doubleClickCopyDescription")}
              checked={doubleClickCopy}
              onCheckedChange={handleDblClickCopyCheckedChange}
            />
          </section>
          <section className="h-16 flex justify-end items-center mt-6">
            <div className="flex gap-8 font-semibold text-sm md:text-base [&_button]:h-10">
              <button
                type="submit"
                className="text-primary px-2 dark:bg-primary dark:text-neutral-50 rounded-lg dark:hover:bg-neutral-50 dark:hover:text-primary transition-colors"
                onClick={saveSettings}
              >
                {t("settings.save")}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-neutral-500 hover:text-neutral-400 transition-colors"
              >
                {t("settings.cancel")}
              </button>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
