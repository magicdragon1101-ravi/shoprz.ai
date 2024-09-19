import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import useIsMobile from "../../utils/useIsMobile";

const MenuItem = React.memo(({ src, alt, label, onClick, className }) => (
  <div
    onClick={onClick}
    className={classNames(
      "flex flex-row md:flex-col w-full md:justify-center items-center cursor-pointer py-2 px-3",
      className
    )}
    role="button"
    tabIndex={0}
  >
    <img src={src} width="24" height="24" alt={alt} className="mr-2 md:mr-0" />
    <span className="text-sm text-nowrap">{label}</span>
  </div>
));

const Sider = ({ visible, setVisible }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [chatCollapse, setChatCollapse] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setVisible(false);
  };

  return (
    <div className="flex">
      {isMobile ? (
        <div
          className={classNames(
            "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div onClick={() => setVisible(false)} className="w-full h-full" aria-hidden="true" />
          <div
            className={classNames(
              "fixed inset-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300",
              visible ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="mt-3">
                <div
                  onClick={() => handleNavigation("/")}
                  className="bg-[url('/public/assets/logo-mobile.png')] bg-cover bg-center w-[150px] h-8 my-4 mx-3 cursor-pointer"
                  aria-hidden="true"
                />
                <div className="flex flex-col w-full mt-3">
                  <MenuItem
                    src="/assets/icons/family_home.png"
                    alt="Home"
                    label="Home"
                    onClick={() => handleNavigation("/")}
                    className="mb-3"
                  />
                  <div className="flex flex-col w-full">
                    <div
                      onClick={() => setChatCollapse(!chatCollapse)}
                      className="flex justify-between items-center mb-3"
                    >
                      <MenuItem src="/assets/icons/archive-l.png" alt="Chats" label="Chats" />
                      <div
                        className={classNames(
                          "bg-[url('/public/assets/icons/arrow_drop_up.png')] bg-cover bg-center w-6 h-6 cursor-pointer",
                          chatCollapse ? "rotate-0" : "rotate-180"
                        )}
                      />
                    </div>
                    {chatCollapse && (
                      <div className="flex flex-col w-full pl-11">
                        {[...Array(3)].map((_, index) => (
                          <div key={index} className="flex justify-between items-start mb-3">
                            <div className="flex flex-col">
                              <div className="text-md">Placeholder text here...</div>
                              <div className="text-sm text-gray-400">Sun Sep 01-24</div>
                            </div>
                            <div
                              onClick={() => alert("delete")}
                              className="bg-[url('/public/assets/icons/delete.png')] bg-cover bg-center w-4 h-4 mt-1 mr-1.5 cursor-pointer"
                              aria-hidden="true"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <hr className="my-3" />
                  <MenuItem
                    src="/assets/icons/answer.png"
                    alt="New Chat"
                    label="New Chat"
                    onClick={() => handleNavigation("/chat")}
                    className="mb-3"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full pl-1">
                <div className="mb-4 mx-3">Privacy Policy</div>
                <div className="mb-4 mx-3">Terms & Conditions</div>
                <hr className="mb-4 ml-3" />
                <Link to="/profile" onClick={() => setVisible(false)}>
                  <div className="flex items-center mb-4 mx-3">
                    <div className="bg-[url('/public/assets/icons/account.png')] bg-cover bg-center w-6 h-6 mr-1.5"></div>
                    <div>My Account</div>
                  </div>
                </Link>
                <Link to="/settings" onClick={() => setVisible(false)}>
                  <div className="flex items-center mb-4 mx-3">
                    <div className="bg-[url('/public/assets/icons/settings.png')] bg-cover bg-center w-6 h-6 mr-1.5"></div>
                    <div>Settings</div>
                  </div>
                </Link>
                <Link to="/signout" onClick={() => setVisible(false)}>
                  <div className="flex items-center mb-6 mx-3">
                    <div className="bg-[url('/public/assets/icons/signout.png')] bg-cover bg-center w-6 h-6 mr-1.5"></div>
                    <div>Sign Out</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sticky top-0 h-full w-20 border-r shadow-sm">
          <div className="flex flex-col h-full justify-between items-center py-5">
            <div className="flex flex-col w-full gap-3 mt-2">
              <MenuItem
                src="/assets/icons/family_home.png"
                alt="Home"
                label="Home"
                onClick={() => handleNavigation("/")}
              />
              <MenuItem
                src="/assets/icons/archive-l.png"
                alt="Chats"
                label="Chats"
                onClick={() => handleNavigation("/chat")}
              />

              <div className="border border-solid w-full" />

              <MenuItem
                src="/assets/icons/add_circle-l.png"
                alt="New Chat"
                label="New Chat"
                onClick={() => handleNavigation("/chat")}
              />
            </div>

            <div className="flex flex-col items-center py-6 px-0.5">
              <MenuItem
                src="/assets/icons/settings.png"
                alt="Settings"
                label="Settings"
                onClick={() => handleNavigation("/settings")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sider;
