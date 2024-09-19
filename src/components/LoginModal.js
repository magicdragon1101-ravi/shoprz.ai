import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import useIsMobile from "../utils/useIsMobile";

const LoginModal = ({ visible, setVisible }) => {
  const isMobile = useIsMobile();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onClose = () => {
    setVisible(false);
  };

  if (isMobile) {
    return (
      <Modal visible={visible} setVisible={setVisible}>
        <div className="flex flex-col w-full py-12 px-6">
          <div className="flex items-center mb-8">
            <div
              onClick={onClose}
              className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mr-2.5 cursor-pointer"
            />
            <div className="bg-[url('/public/assets/logo.png')] bg-cover bg-center w-[150px] h-8" />
          </div>
          <div className="flex flex-col w-full mb-8">
            <p className="mb-2">Welcome back</p>
            <h1 className="text-xl font-bold">Sign In</h1>
          </div>
          <form className="felx flex-col w-full mb-8">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input id="email" type="email" placeholder="Email" required />
            </div>
            <div className="flex flex-col w-full mb-4 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
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
                    className="h-5 w-5 text-gray-600"
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
            <div className="flex w-full justify-end items-center mb-4">
              <Link to="#" className="text-blue hover:underline">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
          <div className="flex flex-col w-full mb-4">
            <div className="flex w-full justify-center mb-3">
              <span>Are you a new member?&nbsp;</span>
              <Link to="#" className="text-blue hover:underline">
                Sign Up
              </Link>
            </div>
            <div className="flex w-full items-center mb-3">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-8 text-gray-600">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <button className="btn-default font-semibold">
              <div className="flex flex-row w-full justify-center items-center">
                <div className="bg-[url('/public/assets/icons/google.png')] bg-cover bg-center w-5 h-5 mr-2.5"></div>
                <span>Sign In with Google</span>
              </div>
            </button>
          </div>
        </div>
      </Modal>
    );
  } else {
    return (
      <Modal visible={visible} setVisible={setVisible}>
        <div className="flex flex-row flex-1">
          <div className="bg-[url('/public/assets/bg/modal_bg.png')] bg-cover bg-center w-1/2 rounded-l-3xl" />
          <div className="flex flex-col p-12 w-1/2">
            <div className="flex flex-col w-full">
              <div
                onClick={onClose}
                className="absolute top-6 right-6 bg-[url('/public/assets/icons/close.png')] bg-cover bg-center cursor-pointer w-6 h-6"
              />
              <div className="flex items-center mb-8">
                <div className="bg-[url('/public/assets/logo.png')] bg-cover bg-center w-[150px] h-8" />
              </div>
              <div className="flex flex-col w-full mb-8">
                <p className="mb-2">Welcome back</p>
                <h1 className="text-xl font-bold">Sign In</h1>
              </div>
              <form className="felx flex-col w-full mb-8">
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="Email" required />
                </div>
                <div className="flex flex-col w-full mb-4 relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
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
                        className="h-5 w-5 text-gray-600"
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
                <div className="flex w-full justify-end items-center mb-4">
                  <Link to="#" className="text-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <button type="submit" className="btn-primary">
                  Login
                </button>
              </form>
              <div className="flex flex-col w-full mb-4">
                <div className="flex w-full justify-center mb-3 text-nowrap">
                  <span>Are you a new member?&nbsp;</span>
                  <Link to="#" className="text-nowrap text-blue hover:underline">
                    Sign Up
                  </Link>
                </div>
                <div className="flex w-full items-center mb-3">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="mx-8 text-gray-600">or</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>
                <button className="btn-default font-semibold">
                  <div className="flex flex-row w-full justify-center items-center">
                    <div className="bg-[url('/public/assets/icons/google.png')] bg-cover bg-center w-6 h-6 mr-2.5"></div>
                    <span>Sign In with Google</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
};

export default LoginModal;
