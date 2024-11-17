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
            <li className="border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-700"><a href="https://www.youtube.com/@solve-swift"><ImYoutube2 /></a></li>
          </ul>
        </div>
        
        <div className="pt-4 md:mt-7 md:ml-36">
          <h3 className="text-black text-2xl font-bold">Information</h3>
          <ul className="font-semibold mt-4">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/product" className="hover:underline">Product</Link></li>
            <li><a href="https://www.aboutamazon.com/" target="blank" className="hover:underline">Blog</a></li>
            <li><a href="https://ir.aboutamazon.com/overview/default.aspx" target="blank" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div>
        
        <div className="pt-4 md:mt-7">
          <h3 className="text-black text-2xl font-bold">Company</h3>
          <ul className="font-semibold mt-4">
            <li><a href="https://kdp.amazon.com/en_US/" target="blank" className="hover:underline">Community</a></li>
            <li><a href="https://www.amazon.jobs/en/" target="blank" className="hover:underline">Career</a></li>
            <li><a href="https://www.amazon.science/" target="blank" className="hover:underline">Our Story</a></li>
            <li><a href="https://www.amazon.science/" target="blank" className="hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        <div className="pt-4 md:mt-7">
          <h3 className="text-black text-2xl font-bold">Contact</h3>
          <ul className="font-semibold mt-4">
            <li><a href="https://www.amazon.com/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=en_US&pageId=amzn_retail_yourorders_us&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dfooter_yo&prevRID=8FKSD3ZG312Z599CWPD0&openid.assoc_handle=amzn_retail_yourorders_us&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" target="blank" className="hover:underline">Gating Started</a></li>
            <li><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates" target="blank" className="hover:underline">Policies</a></li>
            <li><a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dfooter_yo&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_retail_yourorders_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" target="blank" className="hover:underline">Resources</a></li>
            <li><a href="https://www.amazon.com/ap/signin?clientContext=135-6575674-7058946&openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fdigital%2Ffiona%2Fmanage&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&marketPlaceId=USAmazon&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" target="blank" className="hover:underline">Manage Your Content</a></li>
          </ul>
        </div>
      </div>

      <div className="px-10 py-6 text-center font-bold text-xl">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Terms of use ShopSphere.</p>
      </div>
    </footer>
  );
}