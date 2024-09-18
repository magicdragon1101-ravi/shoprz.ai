import React, { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";
import useIsMobile from "../utils/useIsMobile";

const Profile = () => {
  const isMobile = useIsMobile();
  const [tab, setTab] = useState("profile");

  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col w-full max-w-lg mx-auto p-4">
        <h1 className="font-bold text-2xl mb-4">My Account</h1>
        <hr className="my-4" />

        <div className="flex flex-row w-full items-center justify-between mb-8 text-xs font-semibold">
          <button
            onClick={() => setTab("profile")}
            className={`text-semibold ${tab === "profile" && "text-[#4971BD]"}`}
          >
            My Profile
          </button>
          <button
            onClick={() => setTab("editProfile")}
            className={`text-semibold ${tab === "editProfile" && "text-[#4971BD]"}`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setTab("changePassword")}
            className={`text-semibold ${tab === "changePassword" && "text-[#4971BD]"}`}
          >
            Change Password
          </button>
          <button
            onClick={() => setTab("deleteAccount")}
            className={`text-semibold ${tab === "deleteAccount" && "text-[#4971BD]"}`}
          >
            Delete Account
          </button>
        </div>

        {tab === "profile" && (
          <div>
            <div className="flex flex-col w-full justify-center items-center my-12">
              <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-16 h-16 rounded-full mb-4"></div>
              <div className="font-semibold text-xl">Maria Dosoza</div>
            </div>

            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="font-semibold mb-1.5">
                Email
              </label>
              <div className="pb-1">xyz@anydomain.com</div>
            </div>

            <div className="flex flex-col w-full mb-4">
              <label htmlFor="location" className="font-semibold mb-1.5">
                Location
              </label>
              <div className="pb-1">Miami, USA</div>
            </div>
          </div>
        )}

        {tab === "editProfile" && (
          <div>
            <div className="flex flex-row w-full justify-start items-center my-8 space-x-4">
              <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-16 h-16 rounded-full"></div>
              <div className="flex items-center font-semibold text-[#4971BD] text-lg">Upload Profile Photo</div>
            </div>
            <form>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="firstName" className="font-semibold mb-1.5">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  defaultValue={"Maria"}
                  placeholder="First Name"
                  className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="lastName" className="font-semibold mb-1.5">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  defaultValue={"Desoza"}
                  placeholder="Last Name"
                  className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="location" className="font-semibold mb-1.5">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  defaultValue={"Miami, USA"}
                  placeholder="Find your location"
                  className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-8">
                <button
                  type="submit"
                  className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD70] transition-colors duration-300"
                >
                  <span className="font-semibold">Save Profile</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {tab === "changePassword" && (
          <div>
            <div className="mt=8">
              <form>
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="oldPassword" className="font-semibold mb-1.5">
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      id="oldPassword"
                      type={oldPasswordVisible ? "text" : "password"}
                      placeholder="Old Password"
                      className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      {oldPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          onClick={toggleOldPasswordVisibility}
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
                          onClick={toggleOldPasswordVisibility}
                        >
                          <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="newPassword" className="font-semibold mb-1.5">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="newPassword"
                      type={newPasswordVisible ? "text" : "password"}
                      placeholder="New Password"
                      className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      {newPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          onClick={toggleNewPasswordVisibility}
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
                          onClick={toggleNewPasswordVisibility}
                        >
                          <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="confirmPassword" className="font-semibold mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      {confirmPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          onClick={toggleConfirmPasswordVisibility}
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
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <button
                    type="submit"
                    className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD70] transition-colors duration-300"
                  >
                    <span className="font-semibold">Change Password</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {tab === "deleteAccount" && (
          <div>
            <div className="mt-8 text-xl font-semibold mb-4">Delete Account</div>
            <p className="mb-4">Permanently delete the account and remove access to my data.</p>
            <button
              onClick={() => setModalVisible(true)}
              className="flex border border-[#FF7477] bg-white text-[#FF7477] font-semibold rounded-full py-3 px-6 justify-center items-center hover:bg-[#FF7477] hover:text-white transition-colors duration-300"
            >
              Delete Account
            </button>
          </div>
        )}

        <DeleteAccountModal visible={modalVisible} setVisible={setModalVisible} />
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[698px] mx-4 p-6 shadow-xl rounded-3xl">
          <h1 className="font-bold text-2xl mb-4">My Account</h1>
          <hr className="my-4" />

          <div className="flex w-full">
            <div className="w-[30%] flex flex-col items-start text-sm font-semibold gap-3 columns-3">
              <button
                onClick={() => setTab("profile")}
                className={`text-semibold py-1.5 ${tab === "profile" && "text-[#4971BD]"}`}
              >
                My Profile
              </button>
              <button
                onClick={() => setTab("editProfile")}
                className={`text-semibold py-1.5 ${tab === "editProfile" && "text-[#4971BD]"}`}
              >
                Edit Profile
              </button>
              <button
                onClick={() => setTab("changePassword")}
                className={`text-semibold py-1.5 ${tab === "changePassword" && "text-[#4971BD]"}`}
              >
                Change Password
              </button>
              <button
                onClick={() => setTab("deleteAccount")}
                className={`text-semibold py-1.5 ${tab === "deleteAccount" && "text-[#4971BD]"}`}
              >
                Delete Account
              </button>
            </div>

            <div className="flex px-6 pt-1.5 w-full">
              {tab === "profile" && (
                <div className="w-full">
                  <div className="flex flex-row w-full items-center mb-4">
                    <div className=" w-16 h-16 mr-4">
                      <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-full h-full aspect-square rounded-full mb-4"></div>
                    </div>
                    <div className="font-semibold text-xl">Maria Dosoza</div>
                  </div>

                  <div className="flex flex-col w-full mb-4">
                    <label htmlFor="email" className="font-semibold mb-1.5">
                      Email
                    </label>
                    <div className="pb-1">xyz@anydomain.com</div>
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="location" className="font-semibold mb-1.5">
                      Location
                    </label>
                    <div>Miami, USA</div>
                  </div>
                </div>
              )}

              {tab === "editProfile" && (
                <div className="w-full">
                  <div className="flex flex-row w-full justify-start items-center">
                    <div className="flex flex-row w-full items-center mb-4">
                      <div className=" w-16 h-16 mr-4">
                        <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-full h-full aspect-square rounded-full mb-4"></div>
                      </div>
                      <div className="flex items-center font-semibold text-[#4971BD] text-lg">Upload Profile Photo</div>
                    </div>
                  </div>
                  <form>
                    <div className="flex flex-col w-full mb-4">
                      <label htmlFor="firstName" className="font-semibold mb-1.5">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        defaultValue={"Maria"}
                        placeholder="First Name"
                        className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full mb-4">
                      <label htmlFor="lastName" className="font-semibold mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        defaultValue={"Desoza"}
                        placeholder="Last Name"
                        className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full mb-4">
                      <label htmlFor="location" className="font-semibold mb-1.5">
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        defaultValue={"Miami, USA"}
                        placeholder="Find your location"
                        className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD70] transition-colors duration-300"
                    >
                      <span className="font-semibold">Save Profile</span>
                    </button>
                  </form>
                </div>
              )}

              {tab === "changePassword" && (
                <div className="w-full">
                  <div className="mt=8">
                    <form>
                      <div className="flex flex-col w-full mb-4">
                        <label htmlFor="oldPassword" className="font-semibold mb-1.5">
                          Old Password
                        </label>
                        <div className="relative">
                          <input
                            id="oldPassword"
                            type={oldPasswordVisible ? "text" : "password"}
                            placeholder="Old Password"
                            className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {oldPasswordVisible ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                onClick={toggleOldPasswordVisibility}
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
                                onClick={toggleOldPasswordVisibility}
                              >
                                <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full mb-4">
                        <label htmlFor="newPassword" className="font-semibold mb-1.5">
                          New Password
                        </label>
                        <div className="relative">
                          <input
                            id="newPassword"
                            type={newPasswordVisible ? "text" : "password"}
                            placeholder="New Password"
                            className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {newPasswordVisible ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                onClick={toggleNewPasswordVisibility}
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
                                onClick={toggleNewPasswordVisibility}
                              >
                                <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full mb-4">
                        <label htmlFor="confirmPassword" className="font-semibold mb-1.5">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <input
                            id="confirmPassword"
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {confirmPasswordVisible ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                onClick={toggleConfirmPasswordVisibility}
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
                                onClick={toggleConfirmPasswordVisibility}
                              >
                                <path d="M10 3a7 7 0 016.32 10.49l1.75 1.75a1 1 0 01-1.42 1.42l-1.75-1.75A7 7 0 1010 3zm0 12a5 5 0 004.5-7.5A8.993 8.993 0 0010 17a8.993 8.993 0 01-4.5-2.5A5 5 0 0010 15z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#4971BD] text-white rounded-full py-3 hover:bg-[#4971BD70] transition-colors duration-300"
                      >
                        <span className="font-semibold">Change Password</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {tab === "deleteAccount" && (
                <div className="w-full">
                  <div className="text-xl font-semibold mb-4">Delete Account</div>
                  <p className="mb-4">Permanently delete the account and remove access to my data.</p>
                  <button
                    onClick={() => setModalVisible(true)}
                    className="flex border border-[#FF7477] bg-white text-[#FF7477] font-semibold rounded-full py-3 px-6 justify-center items-center hover:bg-[#FF7477] hover:text-white transition-colors duration-300"
                  >
                    Delete Account
                  </button>
                </div>
              )}
            </div>
          </div>
          <DeleteAccountModal visible={modalVisible} setVisible={setModalVisible} />
        </div>
      </div>
    );
  }
};

export default Profile;
