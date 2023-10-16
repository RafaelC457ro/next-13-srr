"use client";

import { useState, useCallback } from "react";
import { MinusIcon, PlusIcon } from "@/icons";

export function InputQuantity() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const name = e.currentTarget.name;
      if (name === "plus" && quantity <= 100) {
        setQuantity(quantity + 1);
      } else if (name === "minus" && quantity > 1) {
        setQuantity(quantity - 1);
      }
    },
    [quantity],
  );

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!/^\d+$/.test(value)) return;
    if (parseInt(value) < 1 || parseInt(value) > 100) return;

    setQuantity(parseInt(value));
  }, []);

  return (
    <div className="flex">
      <button
        name="minus"
        type="button"
        className="group flex items-center justify-center border h-12 p-2 border-black rounded-l-lg box-border hover:bg-secondary hover:text-white hover:border-secondary"
        onClick={handleQuantity}
      >
        <MinusIcon className="stroke-black group-hover:stroke-white" />
      </button>
      <input
        type="text"
        name="quantity"
        className="w-24 h-12 text-center border-t border-b border-black"
        value={quantity}
        min="0"
        max="100"
        onChange={handleInput}
      />
      <button
        name="plus"
        type="button"
        className="group flex items-center justify-center border h-12 p-2 border-black rounded-r-lg box-border hover:bg-secondary hover:text-white hover:border-secondary"
        onClick={handleQuantity}
      >
        <PlusIcon className="stroke-black group-hover:stroke-white" />
      </button>
    </div>
  );
}
