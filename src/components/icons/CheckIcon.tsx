import React from "react";
import { cn } from "../../lib/utils";

interface Props extends React.SVGProps<SVGSVGElement> {}

export default function CheckIcon({ className }: Props) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
