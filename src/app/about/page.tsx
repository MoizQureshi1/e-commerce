import { GiMoneyStack } from "react-icons/gi";
import { CiBoxes } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import Footer from "@/components/footer";

export default function Aboutpage() {
    return(
        <section>
            <title>About Us</title>
        <div className="bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400 py-12 pb-60 max-w-screen-2xl mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mr-10 ml-10 pt-6 pb-6 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
                <h2 className="text-3xl font-extrabold text-gray-900">About us</h2>
                <p className="mt-2 text-lg text-gray-600">We are dedicated to providing exceptional service, fast shipping.</p>

                <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 p-2"><GiMoneyStack className="text-2xl text-blue-400"/></div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Affordability</h3>
                        <p className="mt-2 text-gray-600 text-center">We offer great prices so you can enjoy premium products without breaking the bank.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 p-2"><CiBoxes className="text-2xl text-blue-400"/></div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Customer Satisfaction</h3>
                        <p className="mt-2 text-gray-600 text-center">Your happiness is our priority. Our customer service team is here to help you with any questions or concerns..</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <div className="rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 p-2"><LuPhoneCall  className="text-2xl text-blue-400"/></div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">24/7 Support</h3>
                        <p className="mt-2 text-gray-600 text-center">Answers to any business-related inquiry 24/7 and in real-time.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </section>
    )
}