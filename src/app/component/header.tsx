import Link from "next/link";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-700 via-sky-900 to-cyan-700 text-white max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center pt-7 lg:px-16">
        <div className="text-3xl pl-8 font-bold hidden md:block">
          <h1>ShopSphere.</h1>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-6 mt-3 lg:ml-14 font-semibold">
            <li className="hover:underline hover:text-gray-400"><Link href="/">Home</Link></li>
            <li className="hover:underline hover:text-gray-400"><Link href="/product">Products</Link></li>
            <li className="hover:underline hover:text-gray-400"><Link href="/about">About Us</Link></li>
            <li className="hover:underline hover:text-gray-400"><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="flex sm:mr-12">
          <a href="/product" target="blank">
            <div className="text-3xl mt-2 mr-6 hidden md:block">
              <BiSolidShoppingBags />
            </div>
          </a>
          <a href="/contact">
            <div className="text-3xl mt-2 hidden md:block">
              <IoIosContact />
            </div>
          </a>
        </div>
      </div>
      <Sheet>
        <div className="flex justify-around pb-6 ">
          <div>
            <h1 className="text-left text-3xl font-bold md:hidden">ShopSphere.</h1>
          </div>
          <div className="flex gap-3 ml-12">
            <a href="/product" target="blank">
              <div className="text-3xl mt-2 block md:hidden">
                <BiSolidShoppingBags />
              </div>
            </a>
            <a href="/contact">
              <div className="text-3xl mt-2 block md:hidden">
                <IoIosContact />
              </div>
            </a>
          </div>
          <SheetTrigger className=" text-3xl mt-2 md:hidden bg-cyan-700"><FiMenu /></SheetTrigger>
          <SheetContent>
          <div>
            <h2 className="text-3xl font-bold mt-6">ShopSphere</h2>
          </div>
          <nav className="lg:flex">
            <ul className="flex flex-col gap-6 mt-8">
              <li className="hover:underline hover:text-gray-400"><Link href="/">Home</Link></li>
              <li className="hover:underline hover:text-gray-400"><Link href="/product" target="blank">Products</Link></li>
              <li className="hover:underline hover:text-gray-400"><Link href="/about">About Us</Link></li>
              <li className="hover:underline hover:text-gray-400"><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          </SheetContent>
        </div>
      </Sheet>
    </header>
  );
}