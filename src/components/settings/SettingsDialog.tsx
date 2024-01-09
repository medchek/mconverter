import { ChangeEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/Dialog";
import SettingsIcon from "../icons/SettingsIcon";
import SettingsSelect from "./SettingsSelect";
import SettingsSwitch from "./SettingsSwitch";
import { Currency, Locale } from "../../store/settingsSlice";
import useStore from "../../store";

const availableLangagues: { value: Locale; display: string }[] = [
  { value: "fr-FR", display: "Français" },
  { value: "en-US", display: "Anglais" },
];

const availableCurrencies: { value: Currency; display: string }[] = [
  { value: "DZD", display: "Dinar Algérien" },
  { value: "EURO", display: "Euro" },
  { value: "USD", display: "Dollar" },
];

export default function SettingDialog() {
  const {
    locale: storeLocale,
    currency: storeCurrency,
    ignoreZero: storeIgnoreZero,
    displayCurrency: storeDisplayCurrency,
    doubleClickCopy: storeDoubleClickCopy,
    setCurrency: setStoreCurrency,
    setIngoreZero: setStoreIngoreZero,
    setLocale: setStoreLocale,
    setDisplayCurrency: setStoreDisplayCurrency,
    setDoubleClickCopy: setStoreDoubleClickCopy,
  } = useStore();

  const [isOpen, setIsOpen] = useState(false);

  const [locale, setLocale] = useState<Locale>(storeLocale);
  const [currency, setCurrecny] = useState<Currency>(storeCurrency);
  const [ignoreZero, setIngoreZero] = useState<boolean>(storeIgnoreZero);
  const [doubleClickCopy, setDoubleClickCopy] = useState<boolean>(storeDoubleClickCopy);

  const [displayCurrency, setDisplayCurrency] = useState<boolean>(storeDisplayCurrency);

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value.trim() as Locale;
    if (v !== "en-US" && v !== "fr-FR") return;
    setLocale(v);
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
    setStoreLocale(locale);
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
    setLocale(storeLocale);
    setCurrecny(storeCurrency);
    setIngoreZero(storeIgnoreZero);
    setDisplayCurrency(storeDisplayCurrency);
    setDoubleClickCopy(storeDoubleClickCopy);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
      <DialogTrigger className="outline-none" title="Paramètres">
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
          <DialogTitle className="font-semibold text-xl">Paramètres</DialogTitle>
        </DialogHeader>

        <div>
          <section className="flex flex-col gap-4">
            <SettingsSelect
              label="Langue de conversion"
              description="La langue utilisée lors de la conversion."
              onChange={handleLangChange}
              value={locale}
            >
              {availableLangagues.map(({ value, display }) => (
                <option value={value} key={value}>
                  {display}
                </option>
              ))}
            </SettingsSelect>
            <SettingsSwitch
              label="Afficher la devise"
              description="Attacher la devise séléctionnée à la fin de la conversion ou non."
              onCheckedChange={handleDisplayCurrencyCheckedChange}
              checked={displayCurrency}
            />
            <SettingsSelect
              disabled={!displayCurrency}
              title={!displayCurrency ? "Vous devez afficher la devise pour régler cette option" : ""}
              description="Le type de devise à afficher."
              label="Devise"
              onChange={handleCurrencyChange}
              value={currency}
            >
              {availableCurrencies.map(({ value, display }) => (
                <option value={value} key={value}>
                  {display}
                </option>
              ))}
            </SettingsSelect>
            <SettingsSwitch
              label="Ignorer la valeur zero"
              description="Dans le cas d'une fraction, le zero ne sera pas pris en compte."
              checked={ignoreZero}
              onCheckedChange={handleIgnoreZeroCheckedChange}
            />
            <SettingsSwitch
              label="Copie par double-clic"
              description="Ajuste si le texte doit être copié lors d'un double-clic sur la zone de texte ou non."
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
                Sauvegarder
              </button>

              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-neutral-500 hover:text-neutral-400 transition-colors"
              >
                Annuler
              </button>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
