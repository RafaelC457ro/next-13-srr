import { SVGProps } from "react";
export const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 5h4l3 17h16"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 16.667h15.59a.5.5 0 0 0 .49-.402l1.8-9a.5.5 0 0 0-.49-.598H8"
    />
  </svg>
);
