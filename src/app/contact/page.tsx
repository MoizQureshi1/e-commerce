import Footer from "@/components/footer";


export default function Contact() {
    return (
      <main>
        <title>Contact Us</title>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 max-w-screen-2xl mx-auto">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
          <p className="mt-4 text-center text-gray-600">We did love to hear from you! Whether you have a question, need assistance, or simply want to share feedback, we are here to help.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
  
            <div className="col-span-1 md:col-span-2 text-center ">
              <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he"><button type="submit" className="px-6 py-3 mt-4 text-white bg-gradient-to-r from-blue-400 via-sky-800 to-blue-400 rounded-md">
                Submit
              </button></a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">Or reach out to us directly at:</p>
            <p className="text-gray-800 font-semibold">moizqureshi782008@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer/>
      </main>
    );
  }