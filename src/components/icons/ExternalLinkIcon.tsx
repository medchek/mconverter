import React from "react";
import { cn } from "../../lib/utils";

interface Props extends React.SVGProps<SVGSVGElement> {}

export default function ExternalLinkIcon({ className }: Props) {
  return (
    <svg
      className={cn("size-5 ml-0.5", className)}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
    </svg>
  );
}
