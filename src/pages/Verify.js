import React from "react";
import useIsMobile from "../utils/useIsMobile";

const Verify = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full mx-4 py-7 px-12">
        <div className="flex flex-col mt-6 items-center justify-center text-center">
          <h1 className="font-bold text-xl mb-8">Verify Your Email</h1>
          <div className="font-bold text-2xl text-[#599A83] mb-4">You’re almost there!</div>
          <p className="mb-4">We have sent an email confirmation link to: xyz@anydomain.com</p>
          <p className="mb-8">Check your email and click on verify my address.</p>
          <hr className="w-full" />
          <p className="my-6">Didn't receiver the email? Click below to resend</p>
          <button className="border border-[#4971BD] bg-white text-[#4971BD] font-semibold rounded-full py-3 px-6 justify-center items-center hover:bg-blue-100 transition-colors duration-300">
            Resend Emmail
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[480px] mx-4 p-12 shadow-xl rounded-3xl">
          <div className="flex flex-col mt-6 items-center justify-center text-center">
            <h1 className="font-bold text-xl mb-8">Verify Your Email</h1>
            <div className="font-bold text-2xl text-[#599A83] mb-4">You’re almost there!</div>
            <p className="mb-4">We have sent an email confirmation link to: xyz@anydomain.com</p>
            <p className="mb-8">Check your email and click on verify my address.</p>
            <hr className="w-full" />
            <p className="my-6">Didn't receiver the email? Click below to resend</p>
            <button className="border border-[#4971BD] bg-white text-[#4971BD] font-semibold rounded-full py-3 px-6 justify-center items-center hover:bg-blue-100 transition-colors duration-300">
              Resend Emmail
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Verify;
