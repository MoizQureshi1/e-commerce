import Image from "next/image";
import shop from "../../Public/shop.png";
import { TbShoppingBagCheck } from "react-icons/tb";
import Items from "@/components/items";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400 pt-10 max-w-screen-2xl mx-auto">
      <title>Shop Sphere</title>
      <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-tl-3xl rounded-br-3xl mx-6 sm:mx-10 lg:mx-20">
        <div className="mt-8 sm:mt-16 sm:ml-24 sm:mx-12 mx-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-800 font-bold">
            Fashion Gives Impression
          </h1>
          <p className=" text-white text-sm sm:text-xl my-4">
            Discover quality products and <br /> enjoy fast shipping today.
          </p>
          <div className="flex text-white">
            <Link href="product"className="flex p-2 px-6 mt-5 gap-1 font-semibold rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 transition-transform transform hover:scale-105"><TbShoppingBagCheck className="text-2xl text-blue-400" />Buy Now</Link>
          </div>
        </div>
        <div className="flex justify-center m-5 sm:m-12 sm:mx-16">
          <Image src={shop} alt="Fashion Shop" width={400} height={600} className="max-w-full h-auto" />
        </div>
      </div>
      <Items />
    </main>
  );
}