import Link from "next/link";
import {FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-800 via-slate-700 to-cyan-900 text-gray-400 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-around px-10">
        <div className="py-10">
          <h3 className="text-3xl md:text-4xl font-bold text-black">ShopeSphere</h3>
          <p className=" font-semibold text-sm md:text-lg py-4 mt-2">We help you find <br /> your dream products</p>
          <ul className="flex gap-4 mt-3 text-xl">
            <li className="border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-700"><a href="https://www.facebook.com/profile.php?id=100089981983705"><FaFacebookF /></a></li>
            <li className="border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-700"><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9"><FaLinkedinIn /></a></li>
            <li className="border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-700"><a href="https://www.youtube.com/@Moiz_Qureshi00"><ImYoutube2 /></a></li>
          </ul>
        </div>
        
        <div className="pt-4 md:mt-7 md:ml-36">
          <h3 className="text-black text-2xl font-bold">Information</h3>
          <ul className="font-semibold mt-4">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/product" className="hover:underline">Product</Link></li>
            <li><a href="https://www.facebook.com/profile.php?id=100089981983705" target="blank" className="hover:underline">Blog</a></li>
            <li><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9" target="blank" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div>
        
        <div className="pt-4 md:mt-7">
          <h3 className="text-black text-2xl font-bold">Company</h3>
          <ul className="font-semibold mt-4">
            <li><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9" target="blank" className="hover:underline">Community</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100089981983705" target="blank" className="hover:underline">Career</a></li>
            <li><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9" target="blank" className="hover:underline">Our Story</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100089981983705" target="blank" className="hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        <div className="pt-4 md:mt-7">
          <h3 className="text-black text-2xl font-bold">Contact</h3>
          <ul className="font-semibold mt-4">
            <li><Link href="contact" className="hover:underline">Gating Started</Link></li>
            <li><Link href="about" target="blank" className="hover:underline">Policies</Link></li>
            <li><Link href="contact" target="blank" className="hover:underline">Resources</Link></li>
            <li><Link href="contact" target="blank" className="hover:underline">Manage Your Content</Link></li>
          </ul>
        </div>
      </div>

      <div className="px-10 py-6 text-center font-bold text-xl">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Terms of use ShopSphere.</p>
      </div>
    </footer>
  );
}
