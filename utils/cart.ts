import { Cart } from "@/types";
import { cookies } from "next/headers";

export const getCart = (): Cart => {
  const cart = cookies().get("cart");
  if (!cart) return [];
  return decodeCart(cart.value);
};

export const setCart = (cart: Cart) => {
  cookies().set("cart", encodeCart(cart));
};

export const encodeCart = (cart: Cart) => {
  return cart.map((item) => `${item.id}:${item.quantity}`).join(",");
};

export const decodeCart = (cartString: string): Cart => {
  if (!cartString) return [];
  return cartString.split(",").map((item) => {
    const [id, quantity] = item.split(":");
    return { id, quantity: parseInt(quantity, 10) };
  });
};

export const addToCart = (cart: Cart, id: string, quantity: number) => {
  const newCart = cart.slice();

  const index = newCart.findIndex((item) => item.id === id);
  if (index === -1) {
    newCart.push({ id, quantity });
  } else {
    newCart[index].quantity += quantity;
  }
  return newCart;
};

export const removeFromCart = (cart: Cart, id: string) => {
  return cart.filter((item) => item.id !== id);
};

export const updateQuantity = (cart: Cart, id: string, quantity: number) => {
  const newCart = [...cart];
  const index = newCart.findIndex((item) => item.id === id);
  if (index === -1) {
    newCart.push({ id, quantity });
  } else {
    newCart[index].quantity = quantity;
  }
  return newCart;
};

export const getQuantity = (cart: Cart, id: string) => {
  const item = cart.find((item) => item.id === id);
  return item ? item.quantity : 0;
};
