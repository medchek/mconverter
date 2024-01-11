import CloseIcon from "./icons/CloseIcon";
import CheckIcon from "./icons/CheckIcon";
import { useTranslate } from "../lang/hook";

interface Props {
  onClick: () => void;
}

export default function CopiedToast({ onClick }: Props) {
  const { t } = useTranslate();
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 dark:border-neutral-900  h-14 items-center p-2 w-80 rounded-lg border border-neutral-200 shadow-lg flex justify-between">
      <p className="text-neutral-800 dark:text-neutral-100 flex gap-2 items-center">
        <span className="w-6 h-6 bg-primary text-neutral-50 rounded-full flex items-center justify-center">
          <CheckIcon />
        </span>
        <span className="leading-none">{t("toast.copied")}</span>
      </p>
      <button type="button" onClick={onClick} className="h-8 w-8 text-neutral-700 hover:text-neutral-800">
        <CloseIcon className=" w-5 h-5" />
      </button>
    </div>
  );
}
