import React from "react";
import useIsMobile from "../utils/useIsMobile";

const EditProfile = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="flex flex-col w-full mx-4">
        <div className="mt-6">
          <h1 className="font-bold text-xl">Edit Profile</h1>
          <div className="flex flex-col w-full justify-center items-center my-12">
            <div className="bg-[url('/public/assets/avatar/default.png')] bg-cover bg-center w-16 h-16 mr-2.5"></div>
            <div className="mt-4 text-[#4971BD]">Upload Profile Photo</div>
          </div>
          <form className="mt-6 px-4">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="firstName" className="font-semibold mb-1.5">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
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
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[480px] mx-4 p-12 shadow-xl rounded-3xl">
          <h1 className="font-bold text-xl">Edit Profile</h1>
          <div className="flex flex-row w-full items-center my-12">
            <div className="bg-[url('/public/assets/avatar/default.png')] bg-cover bg-center w-16 h-16 mr-2.5"></div>
            <div className="text-[#4971BD]">Upload Profile Photo</div>
          </div>
          <form className="mt-6">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="firstName" className="font-semibold mb-1.5">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
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
      </div>
    );
  }
};

export default EditProfile;
