import React, { useState } from "react";
import classNames from "classnames";
import useIsMobile from "../../utils/useIsMobile";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const Account = () => {
  const isMobile = useIsMobile();
  const [tab, setTab] = useState("Profile");

  const TabButton = ({ label, onClick, isActive }) =>
    isMobile ? (
      <div
        onClick={onClick}
        className={classNames(
          "text-semibold font-xs md:font-md text-nowrap py-1.5 hover:text-blue transition duration-300",
          isActive ? "text-blue" : "text-gray-700"
        )}
      >
        {label}
      </div>
    ) : (
      <button
        onClick={onClick}
        className={classNames(
          "btn w-full text-left text-semibold font-xs md:font-md text-nowrap py-1.5 hover:text-blue transition duration-300",
          isActive ? "text-blue" : "text-gray-700"
        )}
      >
        {label}
      </button>
    );

  const renderTabContent = () => {
    switch (tab) {
      case "Profile":
        return <Profile />;
      case "EditProfile":
        return <EditProfile />;
      case "ChangePassword":
        return <ChangePassword />;
      case "DeleteAccount":
        return <DeleteAccount />;
      default:
        return null;
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4">
        <h1 className="mb-4 text-2xl font-bold">My Account</h1>
        <hr className="w-full my-4" />

        <div className="flex flex-row items-center justify-between w-full gap-3 text-xs font-semibold">
          {["Profile", "EditProfile", "ChangePassword", "DeleteAccount"].map((tabName) => (
            <TabButton
              key={tabName}
              label={tabName.replace(/([A-Z])/g, " $1").trim()}
              onClick={() => setTab(tabName)}
              isActive={tab === tabName}
            />
          ))}
        </div>

        {renderTabContent()}
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-[698px] shadow-xl rounded-3xl m-4 p-6">
          <h1 className="text-2xl font-bold mb-2.5">My Account</h1>
          <hr className="my-4" />

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-[30%] items-start text-left text-md font-semibold gap-3">
              {["Profile", "EditProfile", "ChangePassword", "DeleteAccount"].map((tabName) => (
                <TabButton
                  key={tabName}
                  label={tabName.replace(/([A-Z])/g, " $1").trim()}
                  onClick={() => setTab(tabName)}
                  isActive={tab === tabName}
                />
              ))}
            </div>

            <div className="flex w-[70%] px-6 pt-1.5">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Account;
