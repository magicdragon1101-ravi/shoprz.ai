import { useSelector } from "react-redux";
import { getTranslation } from "../../utils/translations";

const EditProfile = () => {
  const language = useSelector((state) => state.lang.language);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-start w-full my-8 md:mt-0">
        <div className="bg-[url('/public/assets/avatar/xyz@anydomain.com.png')] bg-cover bg-center w-16 h-16 rounded-full mr-4"></div>
        <div className="flex items-center text-lg font-semibold text-blue">
          {getTranslation(language, "upload_profile_photo")}
        </div>
      </div>
      <form className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="firstName" className="font-semibold mb-1.5">
            {getTranslation(language, "first_name")}
          </label>
          <input
            id="firstName"
            type="text"
            defaultValue={"Maria"}
            placeholder={getTranslation(language, "first_name")}
            required
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor={getTranslation(language, "last_name")} className="font-semibold mb-1.5">
            {getTranslation(language, "last_name")}
          </label>
          <input
            id="lastName"
            type="text"
            defaultValue={"Desoza"}
            placeholder={getTranslation(language, "last_name")}
            required
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="location" className="font-semibold mb-1.5">
            {getTranslation(language, "location")}
          </label>
          <input
            id="location"
            type="text"
            defaultValue={"Miami, USA"}
            placeholder={getTranslation(language, "location")}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="font-semibold">{getTranslation(language, "save_profile")}</span>
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
