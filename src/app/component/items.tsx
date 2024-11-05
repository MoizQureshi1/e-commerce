import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import watch from "../../../Public/watch.png";
import sound from "../../../Public/sound.png";
import tshirt from "../../../Public/tshirt.png";
import link from "../../../Public/link.png";
import laptop from "../../../Public/laptop.png";
import stwatch from "../../../Public/stwatch.png";
import pantshirt from "../../../Public/pantshirt.png";
import Footer from "./footer";

export default function Items() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400 px-4 py-8 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between mx-auto max-w-7xl">
        <div className="text-left lg:w-1/3 mb-8 lg:mb-0 pl-8 pt-6">
          <h2 className="text-white text-3xl font-bold">Best Selling <br /> Products</h2>
          <p className="text-white pt-6 font-semibold">Easiest way to healthy life <br /> by buying your <br /> favorite Products</p>
          <a href="https://a.co/d/cbiXeuQ" target="blank" className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-md bg-slate-400 text-white hover:bg-slate-500 transition-colors">See more
            <FaLongArrowAltRight className="text-xl" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:w-2/3 mr-8">
          <a href="https://a.co/d/4SInRMv" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
            <Image src={watch} alt="Amazfit Bip 5 Smart Watch" width={200} height={100} className="rounded-2xl mx-auto"/>
            <p className="text-xs mt-4">Amazfit Bip 5 Smart Watch 46mm,<br /> GPS, Alexa Built-in, Bluetooth Calling,<br /> 10-Day Battery, Heart-Rate & VO2 Max,<br /> Sleep Health Monitoring, AI Fitness App</p>
            <p className="font-bold mt-2">$74<sup>98</sup></p>
          </a>
          <a href="https://a.co/d/8PYv5tH" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
            <Image src={sound} alt="Audio-Technica" width={200} height={50} className="rounded-2xl mx-auto" />
            <p className="text-xs mt-4"> Audio-Technica ATH-M20X<br /> Professional Studio Monitor Headphones,<br /> Black Beats Studio Pro Wireless Bluetooth<br /> Noise Cancelling</p>
            <p className="font-bold mt-2">$49<sup>00</sup></p>
          </a>

          <a href="https://a.co/d/ihnQyvJ" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105" >
            <Image src={tshirt} alt="Men's Crew T-Shirts" width={200} height={100} className="rounded-2xl mx-auto" />
            <p className="text-xs mt-4"> Gildan Men Crew T-Shirts,<br /> Multipack, Style G1100 Under Armour Men<br /> Tech 2.0 Short-Sleeve T-Shirt</p>
            <p className="font-bold mt-2">$19<sup>99</sup></p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl m-8 ml-8 mr-8">
        <a href="https://a.co/d/6tx1aje" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={link} alt="TP-Link Tapo 1080P" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">TP-Link Tapo 1080P Indoor Security Camera<br /> for Baby Monitor, Dog Camera w/Motion</p>
          <p className="font-bold mt-2">$14<sup>55</sup></p>
        </a>

        <a href="https://a.co/d/2ZklO3r" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={laptop} alt="LAPGEAR Home Office Pro Lap" width={230} height={500} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4"> LAPGEAR Home Office Pro Lap Desk<br /> with Wrist Rest, Mouse Pad, and Phone Holder<br /> - Pink - Fits up to 15.6 Inch Laptops - Style No. 91604 </p>
          <p className="font-bold mt-2">$39<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/gstGZ7u" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={stwatch} alt="Casio Men's Quartz" width={200} height={100} className="rounded-2xl mx-auto" />
          <p className="text-xs mt-4">Casio Men Quartz Day-Date Indicator<br /> Black Resin Dive Watch Model: MRW200H-1BV</p>
          <p className="font-bold mt-2">$21<sup>92</sup></p>
        </a>

        <a href="https://a.co/d/gjl0V1q" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={pantshirt} alt="Men's Compression Sets" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">MEETYOO Men 5pcs Men Compression<br /> Sets Pants Long Sleeve Shirt Athletic Shorts</p>
          <p className="font-bold mt-2">$36<sup>99</sup></p>
        </a>
      </div>
      <Footer />
    </section>
  );
}