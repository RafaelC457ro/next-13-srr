import { SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#f"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
    />
  </svg>
);
