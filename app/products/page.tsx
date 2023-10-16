import { ProductItem } from "@/components";
import { Product } from "@/types";

const getProducts = async ({ search }: { search: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?q=${search}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const products: Product[] = await res.json();
  return { products };
};

export default async function Products({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) {
  const { search } = searchParams;
  const { products } = await getProducts({
    search: search || "",
  });

  return (
    <main className="container mx-auto">
      <div className="my-20">
        <h1 className="text-5xl">Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 mb-20">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
