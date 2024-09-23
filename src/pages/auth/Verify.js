import React from "react";
import { useSelector } from "react-redux";
import useIsMobile from "../../utils/useIsMobile";
import { getTranslation } from "../../utils/translations";

const Verify = () => {
  const language = useSelector((state) => state.lang.language);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col items-center justify-center m-12 text-center">
          <h1 className="mb-8 text-xl font-bold">{getTranslation(language, "verify")}</h1>
          <div className="mb-4 text-2xl font-bold text-green">{getTranslation(language, "almost_there")}</div>
          <p className="mb-4">{getTranslation(language, "email_confirm")}xyz@anydomain.com</p>
          <p className="mb-8">{getTranslation(language, "check_email")}</p>
          <hr className="w-full" />
          <p className="my-6">{getTranslation(language, "not_receive")}</p>
          <button className="btn btn-default w-fit py-2.5 px-6 font-semibold">
            {getTranslation(language, "resend_email")}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-[480px] shadow-xl rounded-3xl m-4 p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-8 text-xl font-bold">{getTranslation(language, "verify")}</h1>
            <div className="mb-4 text-2xl font-bold text-green">{getTranslation(language, "almost_there")}</div>
            <p className="mb-4">{getTranslation(language, "email_confirm")}xyz@anydomain.com</p>
            <p className="mb-8">{getTranslation(language, "check_email")}</p>
            <hr className="w-full" />
            <p className="my-6">{getTranslation(language, "not_receive")}</p>
            <button className="btn btn-default w-fit py-2.5 px-6 font-semibold">
              {" "}
              {getTranslation(language, "resend_email")}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Verify;
