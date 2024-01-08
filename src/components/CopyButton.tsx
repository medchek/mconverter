/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ClipboardIcon from "./icons/ClipboardIcon";
import CheckIcon from "./icons/CheckIcon";
import useStore from "../store";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showCopied: boolean;
}

export default function CopyButton({ showCopied, ...props }: Props) {
  const { number } = useStore();
  return (
    <button
      type="button"
      className="w-full text-neutral-50  bg-primary hover:bg-[#3633ff] active:from-primary active:bg-[#1B18AC] transition-colors py-3 rounded-lg flex gap-1 disabled:bg-neutral-400 disabled:cursor-not-allowed disabled:text-neutral-100 dark:disabled:bg-neutral-950 dark:disabled:text-neutral-600"
      disabled={number === ""}
      title={number === "" ? "Rien à copier" : "Copier le contenu"}
      {...props}
    >
      <span className="font-medium">Copier</span>
      <span className="w-7 h-7 flex items-center justify-center">
        <ClipboardIcon />
        {showCopied ? <CheckIcon className="absolute w-4 h-4" /> : null}
      </span>
    </button>
  );
}
