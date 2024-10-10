import Link from "next/link";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-700 via-sky-900 to-cyan-700 text-white p-4">
      <div className="flex justify-between items-center ">
        <div className="pl-8 text-2xl font-semibold">
          <h1>ShopSphere.</h1>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-6 mr-60 mt-2 ">
            <li className="hover:bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400"><Link href="/">Home</Link></li>
            <li className="hover:bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400"><Link href="https://a.co/d/jawfEXu" target="blank">Products</Link></li>
            <li className="hover:bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400"><Link href="/about">About Us</Link></li>
            <li className="hover:bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400"><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="flex mr-8">
          <a href="https://a.co/d/iaJYtXD" target="blank">
            <div className="text-2xl mt-2 mr-4">
              <BiSolidShoppingBags />
            </div>
          </a>
          <a href="/contact">
            <div className="text-2xl mt-2">
              <IoIosContact />
            </div>
          </a>
        </div>
      </div>
      <div className="lg:hidden mt-4">
        <nav>
          <ul className="flex gap-5 ml-9">
            <li><Link href="/">Home</Link></li>
            <li><Link href="https://a.co/d/jawfEXu" target="blank">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}