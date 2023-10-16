"use server";

import { getCart, removeFromCart, setCart } from "@/utils";
import { revalidatePath } from "next/cache";

export const removeItemAction = async (id: number) => {
  const cart = getCart();
  const updatedCard = removeFromCart(cart, String(id));
  setCart(updatedCard);
  console.log("updatedCard", updatedCard);
  revalidatePath("/checkout");
};
