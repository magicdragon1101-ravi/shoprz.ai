import React, { useState } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../utils/useIsMobile";

const Login = () => {
  const isMobile = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col w-full px-4 mx-4">
        <div className="mt-20">
          <p className="flex text-gray-600 mb-2">Welcome back</p>
          <h1 className="font-bold text-xl">Sign In</h1>
        </div>
        <form className="mt-6">
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
          <div className="flex flex-col w-full mb-4 relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-full py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3a7 7 0 00-6.32 10.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 01-4.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 004.5-2.5A5 5 0 0110 15z" />
                  <path d="M14.32 12.9A5 5 0 0015 10h-1a4 4 0 01-6.32 4.9l1.32 1.32a6.978 6.978 0 004.32-1.32zM5 5.34A10.01 10.01 0 00.14 10c-.04.18-.14.35-.14.5a1 1 0 001.18 1.18c.04-.18.14-.35.14-.5a8.01 8.01 0 014.6-7.16l1.32 1.32A9.968 9.968 0 005 5.34zM10 1a9 9 0 00-6.32 15.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A9 9 0 1010 1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-end mb-4">
            <Link to="#" className="text-[#4971BD] hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="mb-8">
            <button
              type="submit"
              className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD70] transition-colors duration-300"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center mb-3">
            <span>Are you a new member?&nbsp;</span>
            <Link to="/signup" className="text-[#4971BD] hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center mb-3">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-8 text-gray-600">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex mb-16">
            <button className="flex w-full border border-[#4971BD] bg-white text-[#4971BD] font-semibold rounded-full py-3 justify-center items-center hover:bg-[#4971BD] hover:text-white transition-colors duration-300">
              <div className="bg-[url('/public/assets/icons/google.png')] bg-cover bg-center w-5 h-5 mr-2.5"></div>
              <span>Sign In with Google</span>
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
            <div className="flex items-center mb-6">
              <div
                className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mr-2.5 cursor-pointer"
                aria-label="Go back"
              ></div>
              <div className="bg-[url('/public/assets/logo.png')] bg-cover bg-center w-[150px] h-8"></div>
            </div>
            <p className="flex text-gray-600 mb-2">Welcome back</p>
            <h1 className="font-bold text-xl">Sign In</h1>
          </div>
          <form className="mt-6">
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
            <div className="flex flex-col w-full mb-4 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-full py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 3a7 7 0 00-6.32 10.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 01-4.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 004.5-2.5A5 5 0 0110 15z" />
                    <path d="M14.32 12.9A5 5 0 0015 10h-1a4 4 0 01-6.32 4.9l1.32 1.32a6.978 6.978 0 004.32-1.32zM5 5.34A10.01 10.01 0 00.14 10c-.04.18-.14.35-.14.5a1 1 0 001.18 1.18c.04-.18.14-.35.14-.5a8.01 8.01 0 014.6-7.16l1.32 1.32A9.968 9.968 0 005 5.34zM10 1a9 9 0 00-6.32 15.49l-1.75 1.75a1 1 0 001.42 1.42l1.75-1.75A9 9 0 1010 1z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex justify-end mb-4">
              <Link to="#" className="text-[#4971BD] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD70] transition-colors duration-300"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center mb-3">
              <span>Are you a new member?&nbsp;</span>
              <Link to="/signup" className="text-[#4971BD] hover:underline">
                Sign Up
              </Link>
            </div>
            <div className="flex items-center mb-3">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-8 text-gray-600">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex mb-16">
              <button className="flex w-full border border-[#4971BD] bg-white text-[#4971BD] font-semibold rounded-full py-3 justify-center items-center hover:bg-[#4971BD] hover:text-white transition-colors duration-300">
                <div className="bg-[url('/public/assets/icons/google.png')] bg-cover bg-center w-5 h-5 mr-2.5"></div>
                <span>Sign In with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Login;
