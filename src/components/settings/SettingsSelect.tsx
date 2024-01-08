import React from "react";
import SettingsLabel from "./SettingsLabel";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  // eslint-disable-next-line react/require-default-props
  description?: string;
}

export default function SettingSelect({ label, children, description, ...props }: Props) {
  return (
    <SettingsLabel label={label} description={description}>
      <select
        className="w-full h-10 sm:h-12 lg:h-full lg:w-96 bg-neutral-200 dark:bg-select-dark  dark:text-neutral-100 rounded-md pl-1 outline-none focus:ring-2 ring-primary disabled:opacity-50 disabled:cursor-not-allowed sm:text-base text-sm disabled:dark:bg-neutral-900/50 dark:disabled:text-neutral-500"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </select>
    </SettingsLabel>
  );
}
