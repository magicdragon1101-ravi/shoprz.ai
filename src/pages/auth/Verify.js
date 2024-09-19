import React from "react";
import useIsMobile from "../../utils/useIsMobile";

const Verify = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col justify-center items-center text-center m-12">
          <h1 className="text-xl font-bold mb-8">Verify Your Email</h1>
          <div className="text-2xl font-bold text-green mb-4">You’re almost there!</div>
          <p className="mb-4">We have sent an email confirmation link to: xyz@anydomain.com</p>
          <p className="mb-8">Check your email and click on verify my address.</p>
          <hr className="w-full" />
          <p className="my-6">Didn't receiver the email? Click below to resend</p>
          <button className="btn-default w-fit py-2.5 px-6 font-semibold">Resend Email</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[480px] shadow-xl rounded-3xl m-4 p-12">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-xl font-bold mb-8">Verify Your Email</h1>
            <div className="text-2xl font-bold text-green mb-4">You’re almost there!</div>
            <p className="mb-4">We have sent an email confirmation link to: xyz@anydomain.com</p>
            <p className="mb-8">Check your email and click on verify my address.</p>
            <hr className="w-full" />
            <p className="my-6">Didn't receiver the email? Click below to resend</p>
            <button className="btn-default w-fit py-2.5 px-6 font-semibold">Resend Email</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Verify;
