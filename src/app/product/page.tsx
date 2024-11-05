import Image from "next/image";
import ffproduct from "../../../Public/ffproduct.png"
import fsproduct from "../../../Public/fsproduct.png"
import ftproduct from "../../../Public/ftproduct.png"
import flproduct from "../../../Public/flproduct.png"
import sfproduct from "../../../Public/sfproduct.png"
import ssproduct from "../../../Public/ssproduct.png"
import stproduct from "../../../Public/stproduct.png"
import slproduct from "../../../Public/slproduct.png"
import tfproduct from "../../../Public/tfproduct.png"
import tsproduct from "../../../Public/tsproduct.png"
import ttproduct from "../../../Public/ttproduct.png"
import tlproduct from "../../../Public/tlproduct.png"
import Footer from "../component/footer";

export default function Product(){
    return(
        <main className="min-h-screen bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400 pt-10 max-w-screen-2xl mx-auto">
          <div>
            <h2 className="ml-8 font-bold text-3xl mr-8 py-1 pl-2 bg-slate-400">Gaming accessories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl mt-2 ml-8 mr-8">
        <a href="https://a.co/d/eiYHOQY" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={ffproduct} alt="2Pcs Spider" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">2Pcs Spider Web Shooters String Shooters and Dart Launcher Toy Spider Silk Launcher Wrist Toy for Kids Spider Gloves with Web-Shooters Superhero Role-Play</p>
          <p className="font-bold mt-2">$32<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/9mOxAn1" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={fsproduct} alt="Head Strap Compatible" width={230} height={500} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Head Strap Compatible with Oculus Quest 2,Meta Quest 2 Accessories Adjustable Elite Strap Replacement for Enhanced Comfort Support and Gaming Immersion in VR (Comfort Head Strap only)</p>
          <p className="font-bold mt-2">$19<sup>15</sup></p>
        </a>

        <a href="https://a.co/d/5lfSvKF" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={ftproduct} alt="Office Chair Mat for Hardwood Floors" width={200} height={100} className="rounded-2xl mx-auto" />
          <p className="text-xs mt-4">Office Chair Mat for Hardwood Floors & Tile Floor, 47 x 35 Office Gaming Rolling Floor Mat Desk Computer Chair Mats Anti-Slip Floor Protector Rug for Home/Office</p>
          <p className="font-bold mt-2">$19<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/1ENxlhM" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={flproduct} alt="Headset for PS5 Games" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Headset for PS5 Games,PS4,Xbox,PC, Kids Headphones with Mic for School Supplies,Gaming Headphones Wired,Headphones with Microphones,Gaming Headphones for Girls Headset with Mic</p>
          <p className="font-bold mt-2">$18<sup>99</sup></p>
        </a>
      </div>
      <h2 className="ml-8 font-bold text-3xl mt-20 mr-8 py-1 pl-2 bg-slate-400">Shop for your home essentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl mt-2 ml-8 mr-8">
        <a href="https://a.co/d/5ylkY4B" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={sfproduct} alt="Candle Warmer Lamp" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Candle Warmer Lamp, Adjustable Height Candle Warmer, Timer, Dimmable, Home Decor, Wax Melts Warmer for Jar Candles with 2 Bulbs, Black</p>
          <p className="font-bold mt-2">$24<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/7mVEN41" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={ssproduct} alt="Key Holder for Wall" width={230} height={500} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Key Holder for Wall, Decorative Key and Mail Holder with Shelf Has Large Hooks for Bags, Coats, Umbrella Paulownia Wood Key Hanger with Mounting Hardware (9.8”W x 6.7”H x 4.2”D)</p>
          <p className="font-bold mt-2">$12<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/2iJ93ud" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={stproduct} alt="4 Pack Qtip Holder" width={200} height={100} className="rounded-2xl mx-auto" />
          <p className="text-xs mt-4">4 Pack Qtip Holder Dispenser with Bamboo Lids - 10 oz Clear Plastic Apothecary Jar Containers for Vanity Makeup Organizer Storage - Bathroom Accessories Set for Cotton Swab, Ball, Pads, Floss</p>
          <p className="font-bold mt-2">$9<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/dSxwAkh" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={slproduct} alt="Moforoco Shower Caddy Shelf" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Moforoco Shower Caddy Shelf Organizer Rack, Self Adhesive Black Bathroom Shelves Basket, Home Farmhouse Wall Inside Organization and Storage Decor Rv Accessories, First Camper Apartment Essentials</p>
          <p className="font-bold mt-2">$9<sup>99</sup></p>
        </a>
      </div>
      <h2 className="ml-8 font-bold text-3xl mt-20 mr-8 py-1 pl-2 bg-slate-400">Toys for all ages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl mt-2 ml-8 mr-8 pb-12">
        <a href="https://a.co/d/cLFieyp" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={tfproduct} alt="LCD Writing Tablet for Kids" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">LCD Writing Tablet for Kids, Colorful Toddlers Toys Drawing Board, Educational Kid Toys, Doodle Pad Dinosaur Toys for 2 3 4 5 6 7 8 Year Old Boys Girls Birthday Party Christmas Gifts,8.5inch</p>
          <p className="font-bold mt-2">$16<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/eKUniLP" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={tsproduct} alt="Dinosaur Toys" width={230} height={500} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Dinosaur Toys, 252 PCS Create A Dinosaur World Road Race Tracks, Flexible Track Playset, 2pcs Dinosaur Car for 3 4 5 6 Year Old Boys Girls Birthday Party Favor Gift</p>
          <p className="font-bold mt-2">$18<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/4TkV5ye" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={ttproduct} alt=">FDJ Remote Control Car" width={200} height={100} className="rounded-2xl mx-auto" />
          <p className="text-xs mt-4">FDJ Remote Control Car - Transform Toys Car Robot, One Button Deformation to Robot with Flashing Light, 2.4Ghz 1:18 Scale Transforming Police Car Kids Toys with 360 Degree Rotating, Girls Boys Toys</p>
          <p className="font-bold mt-2">$19<sup>99</sup></p>
        </a>

        <a href="https://a.co/d/g62wE97" target="blank" className="bg-slate-400 p-4 rounded-lg transition-transform transform hover:scale-105">
          <Image src={tlproduct} alt=">Pbooo Dancing Talking Cactus Mimicking Toy" width={200} height={100} className="rounded-2xl mx-auto"/>
          <p className="text-xs mt-4">Pbooo Dancing Talking Cactus Mimicking Toy,Talking Repeat Singing Sunny Cactus Toy 120 Pcs Songs for Baby 15S Record Your Sound Sing+Dancing+Recording+LED</p>
          <p className="font-bold mt-2">$19<sup>97</sup></p>
        </a>
      </div>
      </div>
      <Footer/>
        </main>
    )
}