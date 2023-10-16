import Image from "next/image";
import { SeeMoreButton, ProductItem, SubTitle } from "@/components";
import { Product } from "@/types";

const getProducts = async ({ limit }: { limit: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?_limit=${limit}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const products: Product[] = await res.json();
  return { products };
};

export default async function Home({
  searchParams,
}: {
  searchParams: {
    limit?: string;
  };
}) {
  const { limit } = searchParams;
  const { products } = await getProducts({
    limit: limit || "4",
  });

  return (
    <main className="container mx-auto">
      <section className="py-12">
        <Image
          src="/images/carrosel.png"
          alt="hero"
          width={1920}
          height={1080}
        />
      </section>
      <section className="py-14 space-y-16">
        <div className="flex flex-col space-y-8">
          <SubTitle>This Month</SubTitle>
          <h1 className="text-5xl">Best Selling Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          {products.length > 4 ? null : <SeeMoreButton />}
        </div>
        <hr />
      </section>
      <section className="mt-14 mb-28">
        <Image src="/images/frame.png" alt="frame" width={1920} height={1080} />
      </section>
    </main>
  );
}
