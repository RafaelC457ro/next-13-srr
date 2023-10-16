import Link from "next/link";
import { HeartIcon, SearchIcon } from "@/icons";
import { CartButton } from "@/components";
import { getCart } from "@/utils";

const getCartQuantity = async () => {
  const cart = getCart();
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return quantity;
};

export async function Header() {
  const quantity = await getCartQuantity();
  return (
    <header className="flex flex-col w-full">
      <div className="flex justify-center bg-black text-white h-[48px] w-full">
        <div className="container relative mx-auto flex justify-center items-center">
          <div className="flex items-center h-full">
            <span className="text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              href="/"
              className="ml-4 text-sm font-bold underline hover:text-gray-900"
            >
              Shop Now
            </Link>
          </div>
          <div className="absolute right-0">
            <select
              name="language"
              className="bg-transparent text-white text-sm"
            >
              <option value="pr-br">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/" className="font-bold text-2xl">
              Exclusive
            </Link>
          </div>
          <div className="flex">
            <ol className="flex space-x-10 text-base">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="/#">About</Link>
              </li>
              <li>
                <Link href="#">Sign Up</Link>
              </li>
            </ol>
          </div>
          <div className="flex space-x-3">
            <form
              className="flex py-2 px-4 bg-gray-100 rounded space-x-4"
              action="/products"
              method="GET"
            >
              <input
                className="bg-transparent outline-none"
                type="text"
                name="search"
                placeholder="What are you looking for?"
              />
              <button className="flex items-center">
                <SearchIcon />
              </button>
            </form>
            <Link className="flex items-center" href="#">
              <HeartIcon />
            </Link>
            <CartButton quantity={quantity} />
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
}
