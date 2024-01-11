/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ClipboardIcon from "./icons/ClipboardIcon";
import CheckIcon from "./icons/CheckIcon";
import useStore from "../store";
import { useTranslate } from "../lang/hook";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showCopied: boolean;
}

export default function CopyButton({ showCopied, ...props }: Props) {
  const { number } = useStore();
  const { t } = useTranslate();
  return (
    <button
      type="button"
      className="w-full text-neutral-50 py-2  bg-primary hover:bg-[#3633ff] active:from-primary active:bg-[#1B18AC] transition-colors lg:py-3 rounded-lg flex gap-1 disabled:bg-neutral-400 disabled:cursor-not-allowed disabled:text-neutral-100 dark:disabled:bg-neutral-950 dark:disabled:text-neutral-600 text-sm lg:text-base"
      disabled={number === ""}
      title={number === "" ? t("copyTitleNoContent") : t("copyTitle")}
      {...props}
    >
      <span className="font-medium">{t("copy")}</span>
      <span className="size-6 md:size-7 flex items-center justify-center">
        <ClipboardIcon className="size-6 md:size-7" />
        {showCopied ? <CheckIcon className="absolute w-4 h-4" /> : null}
      </span>
    </button>
  );
}
