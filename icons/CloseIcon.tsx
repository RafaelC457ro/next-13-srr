import { SVGProps } from "react";
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <circle cx={12} cy={12} r={9} fill="#DB4444" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 15 3-3m3-3-3 3m0 0L9 9m3 3 3 3"
    />
  </svg>
);
