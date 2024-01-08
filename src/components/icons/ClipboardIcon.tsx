import React from "react";
import { cn } from "../../lib/utils";

interface Props extends React.SVGProps<SVGSVGElement> {}

export default function ClipboardIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 28" className={cn("size-7", className)}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        d="M18.777 4.536a2.625 2.625 0 0 0-2.527-1.911h-3.5a2.627 2.627 0 0 0-2.527 1.911m8.554 0c.064.226.098.467.098.714a.875.875 0 0 1-.875.875h-7a.875.875 0 0 1-.875-.875c0-.247.035-.488.098-.714m8.554 0a55.34 55.34 0 0 1 2.248.215C22.31 4.9 23.25 6.007 23.25 7.3v15.45a2.625 2.625 0 0 1-2.625 2.625H8.375A2.625 2.625 0 0 1 5.75 22.75V7.3c0-1.293.94-2.4 2.225-2.55a56.233 56.233 0 0 1 2.248-.214"
      />
    </svg>
  );
}
