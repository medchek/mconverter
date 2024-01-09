import React from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";
import { toWords } from "../lib/utils";
import useStore from "../store";
import Label from "./Label";
import CheckIcon from "./icons/CheckIcon";
import CopiedToast from "./CopiedToast";

const Output = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (_props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, copy] = useCopyToClipboard();

    const { number, currency, locale, ignoreZero, displayCurrency: isCurrencyDisplayed, doubleClickCopy } = useStore();

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
      e.target.select();
    };

    const displayValue = (): string => {
      if (number === "") return "";
      return toWords(number, {
        locale,
        currency,
        ignoreZero,
        displayCurrency: isCurrencyDisplayed,
      });
    };

    const handleDoubleClick = (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
      if (!doubleClickCopy) return;
      const text = e.currentTarget.textContent;
      if (text) {
        copy(text);
        toast.custom((t) => <CopiedToast onClick={() => toast.dismiss(t)} />, {
          duration: 4000,
          className: "my-classname",
          description: "My description",
          icon: <CheckIcon />,
        });
      }
    };

    return (
      <Label
        label="Votre nombre converti en mots"
        className="grow"
        id="output-textarea"
        info={
          doubleClickCopy
            ? "Vous pouvez double-cliquer sur la zone de text pour copier son contenu"
            : "Vous pouvez activer la copie par double-clic dans les paramètres"
        }
      >
        <textarea
          title={doubleClickCopy ? "Double-cliquez pour copier le texte" : ""}
          ref={ref}
          onFocus={handleFocus}
          value={displayValue()}
          className="w-full rounded-lg bg-neutral-200 dark:bg-input-dark focus:ring-2 focus:ring-primary outline-none grow h-full resize-none p-2 md:p-4 font-medium placeholder:font-normal"
          onDoubleClick={handleDoubleClick}
          readOnly
          placeholder="Votre nombre s'affichera ici"
        />
      </Label>
    );
  },
);

Output.displayName = "Output";

export default Output;
