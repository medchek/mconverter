import React from "react";
import Label from "./Label";
import useStore from "../store";
import { toNumber } from "../lib/utils";

export default function Input() {
  const { setNumber, number } = useStore();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const MAX_LENGTH = 15;
    const v = e.target.value.trim();
    if (v.length === 0) return setNumber("");
    const regex = /^\d{1,15}$/gis;
    if (!regex.test(v)) {
      return;
    }
    return setNumber(toNumber(v));
  };

  return (
    <Label label="Entrez votre nombre" id="number-input" info="Votre nombre ne doit pas excéder 15 chiffres.">
      <input
        onChange={handleOnChange}
        value={number}
        id="number-to-convert"
        type="number"
        className="h-14 rounded-lg bg-neutral-200 focus:ring-2 focus:ring-primary outline-none px-2 md:px-4 dark:bg-input-dark"
        placeholder="Entrez un nombre pour le convertir en mots"
        min={0}
        inputMode="decimal"
        pattern="[0-9]{1,15}"
      />
    </Label>
  );
}
