import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import useIsMobile from "../../utils/useIsMobile";
import { getTranslation } from "../../utils/translations";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const Account = () => {
  const language = useSelector((state) => state.lang.language);
  const isMobile = useIsMobile();
  const [tab, setTab] = useState("my_profile");

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
      case "my_profile":
        return <Profile />;
      case "edit_profile":
        return <EditProfile />;
      case "change_password":
        return <ChangePassword />;
      case "delete_account":
        return <DeleteAccount />;
      default:
        return null;
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4">
        <h1 className="mb-4 text-2xl font-bold">{getTranslation(language, "my_account")}</h1>
        <hr className="w-full my-4" />

        <div className="flex flex-row items-center justify-between w-full gap-3 text-xs font-semibold">
          {["my_profile", "edit_profile", "change_password", "delete_account"].map((tabName) => (
            <TabButton
              key={tabName}
              label={getTranslation(language, tabName)}
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
          <h1 className="text-2xl font-bold mb-2.5">{getTranslation(language, "my_account")}</h1>
          <hr className="my-4" />

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-[30%] items-start text-left text-md font-semibold gap-3">
              {["my_profile", "edit_profile", "change_password", "delete_account"].map((tabName) => (
                <TabButton
                  key={tabName}
                  label={getTranslation(language, tabName)}
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
