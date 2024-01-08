import React from "react";
import Label from "./Label";
import useStore from "../store";
import { toNumber } from "../lib/utils";

export default function Input() {
  const { setNumber, number } = useStore();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();

    if (v.length === 0) return setNumber("");
    return setNumber(toNumber(v));
  };

  return (
    <Label label="Entrez votre nombre">
      <input
        onChange={handleOnChange}
        value={number}
        id="number-to-convert"
        type="number"
        className="h-14 rounded-lg bg-neutral-200 focus:ring-2 focus:ring-primary outline-none px-4 dark:bg-input-dark"
        placeholder="Entrez un nombre pour le convertir en mots"
      />
    </Label>
  );
}
