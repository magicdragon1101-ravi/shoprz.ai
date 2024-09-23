import React from "react";
import { useSelector } from "react-redux";
import useIsMobile from "../../utils/useIsMobile";
import { getTranslation } from "../../utils/translations";

const ContactUs = () => {
  const language = useSelector((state) => state.lang.language);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4 mx-4">
        <div className="mt-6">
          <h1 className="mb-2 text-2xl font-bold">{getTranslation(language, "contact_title")}</h1>
          <p>{getTranslation(language, "contact_desc")}</p>
        </div>
        <form className="mt-8">
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="name" className="sr-only">
              {getTranslation(language, "name")}
            </label>
            <input id="name" type="text" placeholder={getTranslation(language, "name")} required />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="message" className="sr-only">
              {getTranslation(language, "message")}
            </label>
            <textarea
              id="message"
              placeholder={getTranslation(language, "message")}
              className="w-full rounded-xl py-2.5 px-4 border transition duration-300 ease-in-out transform focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue"
              rows="4"
              required
            />
          </div>
          <div className="mb-8">
            <button
              type="submit"
              className="btn w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD90] transition-colors duration-300"
            >
              {getTranslation(language, "contact_button")}
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-[480px] shadow-xl rounded-3xl m-4 p-12">
          <div className="mb-8">
            <h1 className="mb-2 text-2xl font-bold">{getTranslation(language, "contact_title")}</h1>
            <p>{getTranslation(language, "contact_desc")}</p>
          </div>
          <form className="flex flex-col w-full">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="name" className="sr-only">
                {getTranslation(language, "name")}
              </label>
              <input id="name" type="text" placeholder={getTranslation(language, "name")} required />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input id="email" type="email" placeholder="Email" required />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="message" className="sr-only">
                {getTranslation(language, "message")}
              </label>
              <textarea
                id="message"
                placeholder={getTranslation(language, "message")}
                className="w-full rounded-xl py-2.5 px-4 border transition duration-300 ease-in-out transform focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue"
                rows="8"
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD90] transition-colors duration-300"
            >
              {getTranslation(language, "contact_button")}
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default ContactUs;
