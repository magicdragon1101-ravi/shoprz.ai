import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useIsMobile from "../utils/useIsMobile";

const Sider = ({ visible, setVisible }) => {
  const navigate = useNavigate();

  const isMobile = useIsMobile();

  const MenuItem = ({ src, alt, label, onClick, classNames }) => (
    <div
      onClick={onClick}
      className={`flex flex-row md:flex-col md:justify-center items-center cursor-pointer py-1.5 px-0.5 ${classNames}`}
    >
      <img src={src} width="24" height="24" alt={alt} className="mr-1.5 md:mr-0" />
      <span className="text-sm md:mt-1.5">{label}</span>
    </div>
  );

  return (
    <div className="flex">
      {isMobile ? (
        <div
          className={`flex flex-1 fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity z-50 ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div onClick={() => setVisible(false)} className="bg-black bg-opacity-50 w-full h-full"></div>
          <div
            className={`flex flex-1 fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform ${
              visible ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col flex-1 w-full justify-between">
              <div className="mt-3">
                <div
                  onClick={() => {
                    navigate("/");
                    setVisible(false);
                  }}
                  className="bg-[url('/public/assets/logo-mobile.png')] bg-cover bg-center w-[150px] h-8 my-4 mx-3"
                ></div>
                <div className="flex flex-col w-full mt-3">
                  <MenuItem
                    src="/assets/icons/family_home.png"
                    alt="Home"
                    label="Home"
                    onClick={() => {
                      navigate("/");
                      setVisible(false);
                    }}
                    classNames="mb-3 px-3"
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full justify-between items-center mb-3">
                      <MenuItem
                        src="/assets/icons/archive-l.png"
                        alt="Chats"
                        label="Chats"
                        onClick={() => {
                          navigate("/chat");
                          setVisible(false);
                        }}
                        classNames="px-3"
                      />
                      <div
                        onClick={() => {
                          navigate("/chat");
                          setVisible(false);
                        }}
                        className="bg-[url('/public/assets/icons/arrow_drop_up.png')] bg-cover bg-center w-6 h-6"
                      ></div>
                    </div>
                    <div className="flex flex-col w-full pl-10">
                      <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col">
                          <div className="text-md">I'm looking smart TV.</div>
                          <div className="text-sm text-gray-400">Sun Sep 01-24</div>
                        </div>
                        <div
                          onClick={() => alert("delete")}
                          className="bg-[url('/public/assets/icons/delete.png')] bg-cover bg-center w-4 h-4 mt-1 mr-1.5"
                        ></div>
                      </div>
                      <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col">
                          <div className="text-md">Sed ut perspiciatis...</div>
                          <div className="text-sm text-gray-400">Sun Sep 01-24</div>
                        </div>
                        <div
                          onClick={() => alert("delete")}
                          className="bg-[url('/public/assets/icons/delete.png')] bg-cover bg-center w-4 h-4 mt-1 mr-1.5"
                        ></div>
                      </div>
                      <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col">
                          <div className="text-md">Lorem ipsum dolor...</div>
                          <div className="text-sm text-gray-400">Sun Sep 01-24</div>
                        </div>
                        <div
                          onClick={() => alert("delete")}
                          className="bg-[url('/public/assets/icons/delete.png')] bg-cover bg-center w-4 h-4 mt-1 mr-1.5"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <MenuItem
                    src="/assets/icons/answer.png"
                    alt="New Chat"
                    label="New Chat"
                    onClick={() => {
                      navigate("/chat");
                      setVisible(false);
                    }}
                    classNames="mb-3 px-3"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mb-4 mx-3">Privacy Policy</div>
                <div className="mb-4 mx-3">Terms & Conditions</div>
                <hr className="mb-4 ml-3" />
                <Link to={"/profile"} onClick={() => setVisible(false)}>
                  <div className="flex flex-row items-center mb-4 mx-3">
                    <div className="bg-[url('/public/assets/icons/account.png')] bg-cover bg-center w-6 h-6 mr-1.5"></div>
                    <div>My Account</div>
                  </div>
                </Link>
                <Link to={"/settings"} onClick={() => setVisible(false)}>
                  <div className="flex flex-row items-center mb-4 mx-3">
                    <div className="bg-[url('/public/assets/icons/settings.png')] bg-cover bg-center w-6 h-6 mr-1.5"></div>
                    <div>Settings</div>
                  </div>
                </Link>
                <Link to={"/signout"} onClick={() => setVisible(false)}>
                  <div className="flex flex-row items-center mb-6 mx-3">
                    <div className="bg-[url('/public/assets/icons/signout.png')] bg-cover bg-center w-6 h-6 mr-1.5"></div>
                    <div>Sign Out</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sticky top-0 bottom-0 w-20 border-r shadow-sm">
          <div className="flex flex-col h-full justify-between items-center py-5">
            <div className="flex flex-col w-full gap-3 mt-2">
              <MenuItem src="/assets/icons/family_home.png" alt="Home" label="Home" onClick={() => navigate("/")} />
              <MenuItem src="/assets/icons/archive-l.png" alt="Chats" label="Chats" onClick={() => navigate("/chat")} />

              <div className="border border-solid w-full" />

              <MenuItem
                src="/assets/icons/add_circle-l.png"
                alt="New Chat"
                label="New Chat"
                onClick={() => navigate("/chat")}
              />
            </div>

            <div className="flex flex-col items-center py-6 px-0.5">
              <MenuItem
                src="/assets/icons/settings.png"
                alt="Settings"
                label="Settings"
                onClick={() => navigate("/settings")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sider;
