import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FacebookIcon, InstagramIcon, TwitterIcon } from "@/icons";

export function Footer() {
  return (
    <footer className="w-full flex flex-col bg-black text-white">
      <div className="container mx-auto grid md:grid-cols-5 sm:grid-cols-2 sm:gap-4 gap-12 py-16">
        <div className="flex flex-col space-y-4 px-4">
          <div className="font-bold text-lg">Exclusive</div>
          <div>Subscribe</div>
          <div>Get 10% off your first order</div>
          <div className="flex items-center space-between border-2 border-white px-4 py-2 space-x-4">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent text-white max-w-[80%] decoration-none outline-none"
            />
            <button name="subscribe">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          <div className="font-bold text-md">Support</div>
          <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div>exclusive@gmail.com</div>
          <div>+88015-88888-9999</div>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          <div className="font-bold text-md">Account</div>
          <Link href="#">My Account</Link>
          <Link href="#"> Login / Register</Link>
          <Link href="#"> Cart</Link>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          <div className="font-bold text-md">Quick Link</div>
          <Link href="#">Privacy Policty</Link>
          <Link href="#">Terms Of Use</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          <div className="font-bold text-md">Download App</div>
          <div className="text-sm">Save $3 with App New User Only</div>
          <div className="flex space-x-4">
            <div className="flex">
              <Image
                src="/images/qr.png"
                alt="qr code"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col h-full space-y-2">
              <div>
                <Image
                  src="/images/appstore.png"
                  alt="app store"
                  width={110}
                  height={40}
                />
              </div>
              <div>
                <Image
                  src="/images/android.png"
                  alt="google play"
                  width={110}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <TwitterIcon />
            </Link>
            <Link href="#">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t-gray-200" />
      <div className="flex justify-center items-center h-12 text-gray-200 text-sm">
        © Copyright Rimel 2022. All right reserved.
      </div>
    </footer>
  );
}
