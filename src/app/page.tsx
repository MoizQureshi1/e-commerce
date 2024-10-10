import Image from "next/image";
import shop from "../../Public/shop.png";
import { TbShoppingBagCheck } from "react-icons/tb";
import Items from "./component/items";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400 pt-10">
      <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-tl-3xl rounded-br-3xl mx-5 lg:mx-10">
        <div className="m-8 lg:m-16 lg:w-1/2 sm:ml-52">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-800 font-semibold">
            Fashion Gives Impression
          </h1>
          <p className="pt-3 text-white text-sm sm:text-lg">
            Discover quality products and <br /> enjoy fast shipping today.
          </p>
          <div className="flex text-white">
            <a
              href="https://a.co/d/9NtMUCy"
              target="blank"
              className="flex p-2 mt-5 gap-1 font-semibold rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700"
            >
              <TbShoppingBagCheck className="text-2xl text-blue-400" />
              Buy Now
            </a>
          </div>
        </div>
        <div className="m-8 lg:m-16 lg:w-1/2 flex justify-center">
          <Image src={shop} alt="Fashion Shop" width={400} height={600} className="max-w-full h-auto" />
        </div>
      </div>
      <Items />
    </main>
  );
}