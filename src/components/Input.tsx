import React, { useState } from "react";
import Label from "./Label";
import useStore from "../store";
import { toNumber } from "../lib/utils";
import { useTranslate } from "../lang/hook";

export default function Input() {
  const { setNumber, number } = useStore();
  const { t } = useTranslate();
  const [value, setValue] = useState<string>(number.toString() ?? "");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const MAX_LENGTH = 15;
    const v = e.target.value.trim();
    if (v.length === 0) {
      setValue("");
      return setNumber("");
    }
    const regex = /^(\d{1,15})((?=\.)\.\d{0,3})?$/gis;
    if (!regex.test(v)) {
      return;
    }
    setValue(v);
    setNumber(toNumber(v));
  };

  return (
    <Label label={t("numberInputLabel")} id="number-input" info={t("numberInputInfo")}>
      <input
        onChange={handleOnChange}
        value={value}
        id="number-to-convert"
        type="number"
        className="h-14 rounded-lg bg-neutral-200 focus:ring-2 focus:ring-primary outline-none px-2 md:px-4 dark:bg-input-dark"
        placeholder={t("numberInputPlaceholder")}
        min={0}
        title=""
      />
    </Label>
  );
}
