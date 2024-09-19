import { useState } from "react";

const ChangePassword = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex flex-col w-full mt-8 md:mt-0">
      <form className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="oldPassword" className="font-semibold mb-1.5">
            Old Password
          </label>
          <div className="relative">
            <input
              id="oldPassword"
              type={oldPasswordVisible ? "text" : "password"}
              placeholder="Old Password"
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
            className="btn-primary"
          >
            <span className="font-semibold">Change Password</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
