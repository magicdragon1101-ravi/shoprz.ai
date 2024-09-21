import React from "react";
import useIsMobile from "../../utils/useIsMobile";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="flex flex-col w-full p-4 mx-4">
        <div className="mt-6">
          <h1 className="text-xl font-bold">Edit Profile</h1>
          <div className="flex flex-col items-center justify-center w-full my-12">
            <div className="bg-[url('/public/assets/avatar/default.png')] bg-cover bg-center w-16 h-16 mr-2.5" />
            <Link to={"#"} className="font-semibold text-blue hover:underline">
              Upload Profile Photo
            </Link>
          </div>
          <form>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="firstName" className="font-semibold mb-1.5">
                First Name
              </label>
              <input id="firstName" type="text" placeholder="First Name" required />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="lastName" className="font-semibold mb-1.5">
                Last Name
              </label>
              <input id="lastName" type="text" placeholder="Last Name" required />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="location" className="font-semibold mb-1.5">
                Location
              </label>
              <input id="location" type="text" placeholder="Find your location" required />
            </div>
            <button type="submit" className="font-semibold btn btn-primary">
              Save Profile
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-[480px] shadow-xl rounded-3xl m-4 p-12">
          <h1 className="text-xl font-bold">Edit Profile</h1>
          <div className="flex flex-row items-center w-full my-12">
            <div className="bg-[url('/public/assets/avatar/default.png')] bg-cover bg-center w-16 h-16 mr-2.5" />
            <Link to={"#"} className="font-semibold text-blue hover:underline">
              Upload Profile Photo
            </Link>
          </div>
          <form>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="firstName" className="font-semibold mb-1.5">
                First Name
              </label>
              <input id="firstName" type="text" placeholder="First Name" required />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="lastName" className="font-semibold mb-1.5">
                Last Name
              </label>
              <input id="lastName" type="text" placeholder="Last Name" required />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="location" className="font-semibold mb-1.5">
                Location
              </label>
              <input id="location" type="text" placeholder="Find your location" required />
            </div>
            <button type="submit" className="font-semibold btn btn-primary">
              Save Profile
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default CreateProfile;
