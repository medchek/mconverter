import React from "react";
import { cn } from "../../lib/utils";

interface Props extends React.SVGProps<SVGSVGElement> {}

export default function CloseIcon({ className }: Props) {
  return (
    <svg
      className={cn("size-6", className)}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </svg>
  );
}