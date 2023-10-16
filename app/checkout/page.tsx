import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { parseFormData } from "parse-nested-form-data";
import { z } from "zod";

import { Breadcrumbs, UpdateCartButton, DeleteButton } from "@/components";
import { Product } from "@/types";
import { getCart, setCart, formatCurrency } from "@/utils";

import type { Checkout } from "@/types";

const checkoutSchema = z.object({
  action: z.enum(["update", "remove"]),
  cart: z.array(
    z.object({
      id: z.string(),
      quantity: z.number().int().min(1).max(100),
    }),
  ),
});

const getCartList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const products: Product[] = await response.json();

  const cart = getCart();

  const items = cart.map((item) => {
    const product = products.find((product) => String(product.id) === item.id);
    if (!product) {
      throw new Error("Product not found");
    }

    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity,
    };
  });

  return {
    items,
    subtotal: items.reduce((acc, item) => acc + item.total, 0),
    total: items.reduce((acc, item) => acc + item.total, 0),
  } as Checkout;
};

const cartAction = async (formData: FormData) => {
  "use server";

  const data = parseFormData(formData);

  const result = checkoutSchema.parse(data);

  setCart(result.cart);
  revalidatePath("/checkout");
};

export default async function Checkout() {
  const checkout = await getCartList();

  return (
    <main className="container mx-auto">
      <div className="my-20">
        <Breadcrumbs links={[{ href: "/", label: "Checkout" }]} />
      </div>
      <form action={cartAction} name="cart">
        <div className="grid grid-cols-1 w-full gap-6">
          <div className="grid grid-cols-4 gap-4 px-12 py-8 shadow-lg">
            <div>Product</div>
            <div className="flex justify-center">Price</div>
            <div className="flex justify-center">Quantity</div>
            <div className="flex justify-end">Subtotal</div>
          </div>
          {checkout.items.map((item, index) => (
            <div
              key={item.id}
              className="group grid grid-cols-4 w-full justify-between px-12 py-4 shadow-lg"
            >
              <div className="flex items-center">
                <input
                  name={`cart[${index}].id`}
                  type="hidden"
                  defaultValue={item.id}
                />
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 bg-gray-200">
                    <DeleteButton id={item.id} />
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${item.image_url}`}
                      alt={item.name}
                      fill
                      sizes="(min-width: 808px) 50vw, 100vw"
                      style={{
                        objectFit: "cover", // cover, contain, none
                      }}
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {formatCurrency(item.price)}
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="number"
                  name={`+cart[${index}].quantity`}
                  min="1"
                  max="100"
                  className="w-16 h-10 indent-4 border border-black rounded-md"
                  defaultValue={item.quantity}
                />
              </div>
              <div className="flex items-center justify-end">
                {formatCurrency(item.total)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <Link href="/" className="border border-black px-8 py-4 rounded">
            Return To Shop
          </Link>
          <UpdateCartButton />
        </div>
      </form>
      <div className="flex justify-between my-12">
        <div className="space-x-4">
          <input
            type="text"
            className="w-96 h-14 indent-4 border border-black rounded-md"
            placeholder="Coupon Code"
          />
          <button className="bg-secondary text-white px-8 py-4 rounded">
            Apply Coupon
          </button>
        </div>
        <div className="w-2/5 border border-black p-12">
          <h2 className="text-xl mb-2">Cart Total</h2>
          <div className="grid grid-cols-1">
            <div className="flex py-4 justify-between">
              <div>Subtotal: </div>
              <div>{formatCurrency(checkout.subtotal)}</div>
            </div>
            <hr className="border-t-black" />
            <div className="flex py-4 justify-between">
              <div>Shipping: </div>
              <div>Free</div>
            </div>
            <hr className="border-t-black" />
            <div className="flex py-4 justify-between">
              <div>Total: </div>
              <div>{formatCurrency(checkout.total)}</div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-secondary text-white px-8 py-4 rounded">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
