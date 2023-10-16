import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Next 13 SSR",
  description: "This app is  Next 13 SSR test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
