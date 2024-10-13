import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-800 via-slate-700 to-cyan-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center">
        <div className="ml-10 mb-8 md:mb-0">
          <h3 className="font-bold text-2xl mb-4">ShopeSphere</h3>
          <p className="text-xs mb-5">We help you find <br /> your dream products</p>
          <ul className="flex gap-3 text-3xl">
            <li><a href="https://www.facebook.com/profile.php?id=100089981983705" className="block flex"><FaFacebook /></a></li>
            <li><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9" className="block flex"><FaLinkedin /></a></li>
            <li><a href="https://github.com/MoizQureshi1" className="block flex"><FaGithub /></a></li>
          </ul>
        </div>
        
        <div className="pl-10 md:ml-72 mb-8 md:mb-0">
          <h3 className="font-bold mb-2">About Us</h3>
          <ul>
            <li><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer" className="hover:underline">Our Story</a></li>
            <li><a href="https://www.amazon.jobs/en/" className="hover:underline">Careers</a></li>
            <li><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ&ref_=footer_privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="mb-20 pr-20 ml-10 md:ml-10 md:mt-10">
          <h3 className="font-bold mb-2">Information</h3>
          <ul>
            <li><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer" className="hover:underline">Shipping Information</a></li>
            <li><a href="https://www.amazon.com/gp/browse.html?node=16218619011&ref_=footer_swp" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 ml-8">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Terms of use ShopSphere.</p>
      </div>
    </footer>
  );
}