import React from "react";
import useIsMobile from "../utils/useIsMobile";

const ContactUs = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full mx-4 px-4">
        <div className="mt-6">
          <h1 className="font-bold text-2xl mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-4">Submit your message, and we'll be in touch with you soon.</p>
        </div>
        <form className="mt-6">
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message..."
              className="w-full border rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows="4"
              required
            />
          </div>
          <div className="mb-8">
            <button
              type="submit"
              className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD90] transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[480px] mx-4 px-12 shadow-xl rounded-3xl">
          <div className="mt-12">
            <h1 className="font-bold text-2xl mb-2">Contact Us</h1>
            <p className="text-gray-600 mb-4">Submit your message, and we'll be in touch with you soon.</p>
          </div>
          <form className="mt-6">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                className="w-full border rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                rows="8"
                required
              />
            </div>
            <div className="mb-12">
              <button
                type="submit"
                className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD90] transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default ContactUs;
