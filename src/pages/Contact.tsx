import Header from "../components/Header";
import Footer from "../components/Footer";

import { ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-20 bg-gradient-to-br from-[#E4D6F1] to-[#F3EAFD]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* Form Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7DA7]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7DA7]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7DA7]"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Write Us"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7DA7]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#8B7DA7] text-white px-6 py-3 rounded-full hover:bg-[#6A5B7B] transition flex items-center justify-center gap-2"
              >
                Send <ChevronRight size={16} />
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className=" p-8 rounded-lg w-full max-w-lg">
            <h2 className="text-3xl font-bold text-[#6A5B7B] mb-4">
              We Would Be Happy To Meet You
            </h2>
            <p className="text-gray-700 mb-6">
              We’re ready to help to book you in or with any questions you may
              have about seeing our dental team.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
