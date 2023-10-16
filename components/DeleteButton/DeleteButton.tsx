"use client";

import { removeItemAction } from "@/actions";
import { CloseIcon } from "@/icons";

export interface DeleteButtonProps {
  id: number;
}

export function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <button
      name="delete"
      type="button"
      onClick={() => removeItemAction(id)}
      className="absolute top-[-8px] left-[-8px] opacity-0 z-10 group-hover:opacity-100"
    >
      <CloseIcon height={24} width={24} />
    </button>
  );
}
