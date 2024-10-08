import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTranslation } from "../../utils/translations";
import LoginModal from "../modal/LoginModal";
import SignUpModal from "../modal/SignUpModal";

const Header = (props) => {
  const language = useSelector((state) => state.lang.language);
  const navigate = useNavigate();

  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  return (
    <header className="flex w-full h-16 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div
            onClick={props.callback}
            className="md:hidden bg-[url('/public/assets/icons/menu.png')] bg-cover bg-center w-12 h-12 p-2"
          />
          <div
            onClick={() => navigate("/")}
            className="bg-[url('/public/assets/logo-mobile.png')] md:bg-[url('/public/assets/logo.png')] bg-cover bg-center w-[150px] h-8 md:mx-6"
          />
        </div>

        <div className="flex items-center px-4 md:px-6">
          <button onClick={() => setLoginVisible(true)} className="mr-2 font-semibold btn text-blue hover:underline">
            <div className="flex text-nowrap">{getTranslation(language, "login")}</div>
          </button>
          <button
            onClick={() => setSignupVisible(true)}
            className="btn btn-default text-nowrap font-bold py-1.5 px-2 md:px-4"
          >
            <div className="flex text-nowrap">{getTranslation(language, "sign_up")}</div>
          </button>
        </div>
      </div>

      <LoginModal visible={loginVisible} setVisible={setLoginVisible} />
      <SignUpModal visible={signupVisible} setVisible={setSignupVisible} />
    </header>
  );
};

export default Header;
