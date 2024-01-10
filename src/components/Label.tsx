import React from "react";
import { cn } from "../lib/utils";
import { Tooltip } from "react-tooltip";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  /** Required for the tooltip to work properly */
  id: string;
  /** additional field information */
  info?: string;
}

export default function Label({ children, label, id, className, info }: Props) {
  const tooltipId = `${id}-tooltip`;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label className={cn("flex flex-col gap-1", className)}>
      <span className="flex justify-between items-center">
        <span className="w-full md:text-lg font-semibold">{label}</span>
        {/* description tooltip */}

        {info ? (
          <>
            <span
              className="flex items-center justify-center border-2 text-xs text-neutral-500 font-semibold dark:border-neutral-500 border-neutral-400 size-4 md:size-[18px] rounded-full"
              data-tooltip-id={tooltipId}
            >
              i
            </span>
            <Tooltip
              id={tooltipId}
              place="top-end"
              offset={5}
              content={info}
              noArrow
              className="!bg-neutral-100 shadow-sm dark:shadow-none shadow-neutral-300 !text-neutral-600 dark:!bg-neutral-900 dark:!text-neutral-300 !opacity-100 !h-auto max-w-60 sm:max-w-fit md:max-w-max"
            />
          </>
        ) : null}
      </span>
      {children}
    </label>
  );
}
