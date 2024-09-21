import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIsMobile from "../../utils/useIsMobile";

const SignUp = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmVisibility = () => {
    setShowConfirm(!showConfirm);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4 mx-4">
        <div className="mt-20">
          <h1 className="mb-2 text-xl">
            Hey you’ve hit your <span className="font-bold">free chat</span> limit
          </h1>
          <h1>
            <span className="text-xl font-bold">Sign Up</span> to unlock all the option
          </h1>
        </div>
        <form className="mt-8">
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="relative flex flex-col w-full mb-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={togglePasswordVisibility}
                >
                  <path d="M10 3a7 7 0 00-6.32 10.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 01-4.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 004.5-2.5A5 5 0 0110 15z" />
                  <path d="M14.32 12.9A5 5 0 0015 10h-1a4 4 0 01-6.32 4.9l1.32 1.32a6.978 6.978 0 004.32-1.32zM5 5.34A10.01 10.01 0 00.14 10c-.04.18-.14.35-.14.5a1 1 0 001.18 1.18c.04-.18.14-.35.14-.5a8.01 8.01 0 014.6-7.16l1.32 1.32A9.968 9.968 0 005 5.34zM10 1a9 9 0 00-6.32 15.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A9 9 0 1010 1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={togglePasswordVisibility}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A6.978 6.978 0 0012 19.5a6.978 6.978 0 00-1.875-.675M6.75 12c-.42 0-.83.036-1.225.105M4.5 12C3.635 9.325 6.273 6.75 12 6.75s8.365 2.575 7.5 5.25c-.625 2.625-3.273 5.25-7.5 5.25M12 4.5c-3.25 0-5.743 1.425-7.5 3.675M12 19.5c3.25 0 5.743-1.425 7.5-3.675M15.75 12c.42 0 .83-.036 1.225-.105M19.5 12c.865 2.675-1.773 5.25-7.5 5.25s-8.365-2.575-7.5-5.25c.625-2.625 3.273-5.25 7.5-5.25"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className="relative flex flex-col w-full mb-4">
            <label htmlFor="confirm" className="sr-only">
              Confirm Password
            </label>
            <input id="confirm" type={showConfirm ? "text" : "password"} placeholder="Confirm Password" required />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {showConfirm ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={toggleConfirmVisibility}
                >
                  <path d="M10 3a7 7 0 00-6.32 10.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 01-4.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 004.5-2.5A5 5 0 0110 15z" />
                  <path d="M14.32 12.9A5 5 0 0015 10h-1a4 4 0 01-6.32 4.9l1.32 1.32a6.978 6.978 0 004.32-1.32zM5 5.34A10.01 10.01 0 00.14 10c-.04.18-.14.35-.14.5a1 1 0 001.18 1.18c.04-.18.14-.35.14-.5a8.01 8.01 0 014.6-7.16l1.32 1.32A9.968 9.968 0 005 5.34zM10 1a9 9 0 00-6.32 15.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A9 9 0 1010 1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={togglePasswordVisibility}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A6.978 6.978 0 0012 19.5a6.978 6.978 0 00-1.875-.675M6.75 12c-.42 0-.83.036-1.225.105M4.5 12C3.635 9.325 6.273 6.75 12 6.75s8.365 2.575 7.5 5.25c-.625 2.625-3.273 5.25-7.5 5.25M12 4.5c-3.25 0-5.743 1.425-7.5 3.675M12 19.5c3.25 0 5.743-1.425 7.5-3.675M15.75 12c.42 0 .83-.036 1.225-.105M19.5 12c.865 2.675-1.773 5.25-7.5 5.25s-8.365-2.575-7.5-5.25c.625-2.625 3.273-5.25 7.5-5.25"
                  />
                </svg>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="btn w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD90] transition-colors duration-300"
          >
            Continue
          </button>
        </form>
        <div className="flex flex-col w-full mt-8">
          <div className="flex justify-center w-full mb-3">
            <span>Already have an account?&nbsp;</span>
            <Link to="/login" className="text-blue hover:underline">
              Sign In
            </Link>
          </div>
          <div className="flex items-center w-full mb-3">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-8 text-gray-600">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button className="font-semibold btn btn-default">
            <div className="flex flex-row items-center justify-center w-full">
              <div className="bg-[url('/public/assets/icons/google.png')] bg-cover bg-center w-5 h-5 mr-2.5"></div>
              <span>Sign Up with Google</span>
            </div>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-[480px] shadow-xl rounded-3xl m-4 p-12">
          <div className="flex items-center mt-4 mb-8">
            <div
              onClick={() => navigate("/")}
              className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mr-2.5 cursor-pointer"
            />
            <div className="bg-[url('/public/assets/logo.png')] bg-cover bg-center w-[150px] h-8" />
          </div>
          <div className="flex flex-col w-full mb-8">
            <h1 className="text-2xl">
              Hey you’ve hit your <span className="font-bold">free chat limit</span>
            </h1>
            <h1 className="text-2xl font-bold">Sign Up to unlock all the option</h1>
          </div>
          <form className="flex-col w-full mb-8 felx">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input id="email" type="email" placeholder="Email" required />
            </div>
            <div className="relative flex flex-col w-full mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={togglePasswordVisibility}
                  >
                    <path d="M10 3a7 7 0 00-6.32 10.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 01-4.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 004.5-2.5A5 5 0 0110 15z" />
                    <path d="M14.32 12.9A5 5 0 0015 10h-1a4 4 0 01-6.32 4.9l1.32 1.32a6.978 6.978 0 004.32-1.32zM5 5.34A10.01 10.01 0 00.14 10c-.04.18-.14.35-.14.5a1 1 0 001.18 1.18c.04-.18.14-.35.14-.5a8.01 8.01 0 014.6-7.16l1.32 1.32A9.968 9.968 0 005 5.34zM10 1a9 9 0 00-6.32 15.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A9 9 0 1010 1z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={togglePasswordVisibility}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A6.978 6.978 0 0012 19.5a6.978 6.978 0 00-1.875-.675M6.75 12c-.42 0-.83.036-1.225.105M4.5 12C3.635 9.325 6.273 6.75 12 6.75s8.365 2.575 7.5 5.25c-.625 2.625-3.273 5.25-7.5 5.25M12 4.5c-3.25 0-5.743 1.425-7.5 3.675M12 19.5c3.25 0 5.743-1.425 7.5-3.675M15.75 12c.42 0 .83-.036 1.225-.105M19.5 12c.865 2.675-1.773 5.25-7.5 5.25s-8.365-2.575-7.5-5.25c.625-2.625 3.273-5.25 7.5-5.25"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="relative flex flex-col w-full mb-4">
              <label htmlFor="confirm" className="sr-only">
                Confirm Password
              </label>
              <input id="confirm" type={showConfirm ? "text" : "password"} placeholder="Confirm Password" required />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showConfirm ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={toggleConfirmVisibility}
                  >
                    <path d="M10 3a7 7 0 00-6.32 10.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 01-4.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 004.5-2.5A5 5 0 0110 15z" />
                    <path d="M14.32 12.9A5 5 0 0015 10h-1a4 4 0 01-6.32 4.9l1.32 1.32a6.978 6.978 0 004.32-1.32zM5 5.34A10.01 10.01 0 00.14 10c-.04.18-.14.35-.14.5a1 1 0 001.18 1.18c.04-.18.14-.35.14-.5a8.01 8.01 0 014.6-7.16l1.32 1.32A9.968 9.968 0 005 5.34zM10 1a9 9 0 00-6.32 15.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A9 9 0 1010 1z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={togglePasswordVisibility}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A6.978 6.978 0 0012 19.5a6.978 6.978 0 00-1.875-.675M6.75 12c-.42 0-.83.036-1.225.105M4.5 12C3.635 9.325 6.273 6.75 12 6.75s8.365 2.575 7.5 5.25c-.625 2.625-3.273 5.25-7.5 5.25M12 4.5c-3.25 0-5.743 1.425-7.5 3.675M12 19.5c3.25 0 5.743-1.425 7.5-3.675M15.75 12c.42 0 .83-.036 1.225-.105M19.5 12c.865 2.675-1.773 5.25-7.5 5.25s-8.365-2.575-7.5-5.25c.625-2.625 3.273-5.25 7.5-5.25"
                    />
                  </svg>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
          </form>
          <div className="flex flex-col w-full mb-4">
            <div className="flex justify-center w-full mb-3">
              <span>Already have an account?&nbsp;</span>
              <Link to="/login" className="text-blue hover:underline">
                Sign In
              </Link>
            </div>
            <div className="flex items-center w-full mb-3">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-8 text-gray-600">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <button className="font-semibold btn btn-default">
              <div className="flex flex-row items-center justify-center w-full">
                <div className="bg-[url('/public/assets/icons/google.png')] bg-cover bg-center w-5 h-5 mr-2.5"></div>
                <span>Sign Up with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
