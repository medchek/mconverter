import React from "react";
import { cn } from "../lib/utils";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
}
// TODO: Add info for max allowed number and shortcut, plus add size retainer plugin
export default function Label({ children, label, className }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label className={cn("flex flex-col gap-1", className)}>
      <span className="w-full md:text-lg font-semibold">{label}</span>
      {children}
    </label>
  );
}
