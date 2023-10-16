import Link from "next/link";
import Image from "next/image";
import { RatingStar } from "@/components";
import { EyeIcon, HeartIcon } from "@/icons";
import { Product } from "@/types";

export interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={`/product/${product.id}`} className="space-y-4">
      <div className="relative flex w-full aspect-square bg-gray-100 rounded">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${product.image_url}`}
          alt={product.name}
          fill={true}
          sizes="100%"
          className="object-cover"
        />
        <div className="absolute flex flex-col space-y-2 top-2 right-2">
          <button
            name="favorite"
            className="flex justify-center items-center bg-white h-10 w-10 rounded-full"
          >
            <HeartIcon />
          </button>
          <button
            name="look"
            className="flex justify-center items-center bg-white h-10 w-10 rounded-full"
          >
            <EyeIcon />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-medium text-base">{product.name}</h2>
        <div className="space-x-4">
          <span className="text-base text-secondary">{product.price}</span>
          <span className="text-base text-gray-400 line-through">$360</span>
        </div>
        <div className="flex space-x-2">
          <RatingStar />
          <span className="text-sm text-gray-400"> (10)</span>
        </div>
      </div>
    </Link>
  );
}
