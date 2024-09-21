const EditProfile = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-start w-full my-8 md:mt-0">
        <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-16 h-16 rounded-full mr-4"></div>
        <div className="flex items-center text-lg font-semibold text-blue">Upload Profile Photo</div>
      </div>
      <form className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="firstName" className="font-semibold mb-1.5">
            First Name
          </label>
          <input id="firstName" type="text" defaultValue={"Maria"} placeholder="First Name" required />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="lastName" className="font-semibold mb-1.5">
            Last Name
          </label>
          <input id="lastName" type="text" defaultValue={"Desoza"} placeholder="Last Name" required />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="location" className="font-semibold mb-1.5">
            Location
          </label>
          <input id="location" type="text" defaultValue={"Miami, USA"} placeholder="Find your location" required />
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="font-semibold">Save Profile</span>
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
