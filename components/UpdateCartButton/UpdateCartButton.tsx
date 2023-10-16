"use client";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function UpdateCartButton() {
  const { pending } = useFormStatus();

  return (
    <button
      name="action"
      value="update"
      className="border border-black px-8 py-4 rounded disabled:opacity-5"
      aria-disabled={pending}
    >
      Update Cart
    </button>
  );
}
