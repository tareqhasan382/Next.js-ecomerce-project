import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "../CSS/globals.css";
import Provider from "@/lib/Providers";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// const inter = Inter({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
export const metadata: Metadata = {
  title: "Ecomerce Website",
  description: "Tareq Hasan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" font-bodyFont ">
        <Provider>
          <div className=" z-50 sticky top-0 w-full bg-bodyColor text-dartText ">
            <Header />
            {/* <Navbar /> */}
            <hr />
          </div>
          <div className=" ">{children}</div>
          <div className="w-full bg-black ">
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
