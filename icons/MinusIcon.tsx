import { SVGProps } from "react";

export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path strokeLinecap="round" strokeWidth={1.5} d="M20 12H4" />
  </svg>
);
