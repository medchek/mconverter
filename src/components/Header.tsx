import ThemeButton from "./ThemeButton";
import SettingDialog from "./settings/SettingsDialog";

export default function Header() {
  return (
    <header className="h-14 min-h-14 mb-4 w-full flex justify-between items-center">
      <div className="flex items-end cursor-default select-none">
        <span className="text-2xl md:text-3xl font-bold text-primary">M</span>
        <span className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100">Converter</span>
      </div>

      <div className="flex gap-2 ">
        <ThemeButton />
        <SettingDialog />
      </div>
    </header>
  );
}
