import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const Header = (props) => {
  const navigate = useNavigate();

  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  return (
    <header className="flex h-16 bg-white border-b shadow-sm">
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <div className="md:hidden flex items-center p-2">
            <div
              onClick={props.callback}
              className="bg-[url('/public/assets/icons/menu.png')] bg-cover bg-center w-12 h-12"
            ></div>
          </div>

          <div className="flex items-center md:px-6">
            <div
              onClick={() => navigate("/")}
              className="bg-[url('/public/assets/logo-mobile.png')] md:bg-[url('/public/assets/logo.png')] bg-cover bg-center w-[150px] h-8"
            ></div>
          </div>
        </div>

        <div className="flex items-center py-[13px] px-4 md:py-[13px] md:px-6 space-x-2">
          <button onClick={() => setLoginVisible(true)} className="text-blue-600 font-semibold hover:underline">
            Login
          </button>
          <button
            onClick={() => setSignupVisible(true)}
            className="text-blue-600 font-bold border border-blue-600 rounded-full py-1.5 px-2 md:py-1.5 md:px-4 transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </div>

      <LoginModal visible={loginVisible} setVisible={setLoginVisible} />
      <SignUpModal visible={signupVisible} setVisible={setSignupVisible} />
    </header>
  );
};

export default Header;
