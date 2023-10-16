import Link from "next/link";
import { CartIcon } from "@/icons";

export interface CartButtonProps {
  quantity: number;
}

export function CartButton({ quantity }: CartButtonProps = { quantity: 0 }) {
  return (
    <div className="relative">
      {quantity >= 1 ? (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full">
          {quantity}
        </span>
      ) : null}

      <Link className="flex items-center" href="/checkout">
        <CartIcon />
      </Link>
    </div>
  );
}
