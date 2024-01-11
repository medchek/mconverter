import { useEffectOnce } from "usehooks-ts";
import useStore from "../store";
import DarkThemeIcon from "./icons/DarkThemeIcon";
import LightThemeIcon from "./icons/LightThemeIcon";
import { useTranslate } from "../lang/hook";

export default function ThemeButton() {
  const { isDarkTheme, setIsDarkTheme } = useStore();
  const { t } = useTranslate();

  useEffectOnce(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    }
  });

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
      setIsDarkTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkTheme(true);
    }
  };

  return (
    <button
      type="button"
      title={t("themeButtonTitle")}
      className="size-6 md:size-7 hover:text-primary transition-colors *:size-6 md:*:size-7"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
    </button>
  );
}
