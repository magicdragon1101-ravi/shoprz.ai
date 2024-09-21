const Profile = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center justify-center w-full mb-4 md:flex-row md:justify-start md:items-start mt-11 md:mt-0">
        <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-16 h-16 rounded-full md:mr-4" />
        <h1 className="mt-4 text-xl font-semibold">Maria Dosoza</h1>
      </div>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="email" className="font-semibold mb-1.5">
          Email
        </label>
        <h1>xyz@anydomain.com</h1>
      </div>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="location" className="font-semibold mb-1.5">
          Location
        </label>
        <h1>Miami, USA</h1>
      </div>
    </div>
  );
};

export default Profile;
