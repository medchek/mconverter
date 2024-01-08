import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  // eslint-disable-next-line react/require-default-props
  description?: string;
}

export default function SettingsLabel({ label, description, children }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label className="lg:h-12 flex justify-between flex-col lg:flex-row gap-2">
      <span className=" h-full flex justify-center flex-col lg:w-3/5 ">
        <span className="font-semibold text-sm sm:text-base">{label}</span>
        <span className="text-xs sm:text-sm text-neutral-500 lg:w-3/4 text-balance">
          {description && description.length > 0 ? description : null}
        </span>
      </span>
      <span className="flex items-center lg:justify-end lg:min-w-[40%]">{children}</span>
    </label>
  );
}
