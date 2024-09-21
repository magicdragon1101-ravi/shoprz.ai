import React from "react";
import useIsMobile from "../../utils/useIsMobile";

const Verify = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col items-center justify-center m-12 text-center">
          <h1 className="mb-8 text-xl font-bold">Verify Your Email</h1>
          <div className="mb-4 text-2xl font-bold text-green">You’re almost there!</div>
          <p className="mb-4">We have sent an email confirmation link to: xyz@anydomain.com</p>
          <p className="mb-8">Check your email and click on verify my address.</p>
          <hr className="w-full" />
          <p className="my-6">Didn't receiver the email? Click below to resend</p>
          <button className="btn btn-default w-fit py-2.5 px-6 font-semibold">Resend Email</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-[480px] shadow-xl rounded-3xl m-4 p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-8 text-xl font-bold">Verify Your Email</h1>
            <div className="mb-4 text-2xl font-bold text-green">You’re almost there!</div>
            <p className="mb-4">We have sent an email confirmation link to: xyz@anydomain.com</p>
            <p className="mb-8">Check your email and click on verify my address.</p>
            <hr className="w-full" />
            <p className="my-6">Didn't receiver the email? Click below to resend</p>
            <button className="btn btn-default w-fit py-2.5 px-6 font-semibold">Resend Email</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Verify;
