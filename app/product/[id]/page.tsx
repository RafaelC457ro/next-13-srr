import Image from "next/image";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

import { Breadcrumbs, InputQuantity } from "@/components";
import { HeartIcon, ReturnIcon, ShippingIcon } from "@/icons";
import { getCart, addToCart, setCart, formatCurrency } from "@/utils";

import type { Product } from "@/types";

const getProducts = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      return notFound();
    }

    throw new Error("Failed to fetch data");
  }

  const product: Product = await response.json();

  return product;
};

async function cartAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const quantity = formData.get("quantity") as string;

  const cart = getCart();
  const updatedCart = addToCart(cart, id, parseInt(quantity));
  setCart(updatedCart);
  revalidatePath("/", "layout");
}

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProducts(id);

  return (
    <main className="container mx-auto">
      <div className="my-20">
        <Breadcrumbs links={[{ href: "#", label: product.name }]} />
      </div>
      <div className="flex mb-20">
        <div className="w-3/5">
          <div className="relative aspect-square bg-gray-200 rounded">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.image_url}`}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-2/5 pl-20 pt-20">
          <div className="flex flex-col space-y-8">
            <h1 className="text-5xl">{product.name}</h1>
            <div className="flex space-x-2">
              <span>{formatCurrency(product.price)}</span>
              <span className="text-gray-400 line-through">$399</span>
            </div>
            <p>{product.description}</p>
            <hr />
            <form className="flex w-full space-x-4" action={cartAction}>
              <input name="id" type="hidden" defaultValue={product.id} />
              <InputQuantity />
              <div className="flex flex-1">
                <button
                  name="add-to-cart"
                  className="w-full h-12 px-4 text-white bg-secondary rounded"
                >
                  Add to cart
                </button>
              </div>
              <div>
                <button
                  name="favorite"
                  className="flex items-center justify-center h-12 w-12 px-2 py-2 border border-black rounded"
                >
                  <HeartIcon />
                </button>
              </div>
            </form>
            <div className="flex flex-col border border-black rounded">
              <div className="flex py-4 px-4 space-x-2">
                <div className="flex items-center px-2">
                  <ShippingIcon />
                </div>
                <div className="space-y-4">
                  <h2 className="text-base">Free Delivery</h2>
                  <p className="text-sm underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className="border-black" />
              <div className="flex py-4 px-4 space-x-2">
                <div className="flex items-center px-2">
                  <ReturnIcon />
                </div>
                <div className="space-y-2">
                  <h2 className="text-base">Return Delivery</h2>
                  <p className="text-sm">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
