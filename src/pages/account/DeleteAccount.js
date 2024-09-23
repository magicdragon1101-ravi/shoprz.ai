import { useState } from "react";
import { useSelector } from "react-redux";
import { getTranslation } from "../../utils/translations";
import DeleteAccountModal from "./DeleteAccountModal";

const DeleteAccount = () => {
  const language = useSelector((state) => state.lang.language);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="flex flex-col w-full mt-8 md:mt-0">
      <h1 className="mb-4 text-2xl font-semibold">{getTranslation(language, "delete_my_account")}</h1>
      <p className="mb-4">{getTranslation(language, "delete_my_account_desc")}</p>
      <button
        onClick={() => setModalVisible(true)}
        className="btn flex w-fit bg-white text-red font-semibold border border-red rounded-full py-2.5 px-6 justify-center items-center hover:bg-red hover:text-white transition duration-300"
      >
        {getTranslation(language, "delete_account_button")}
      </button>

      <DeleteAccountModal visible={modalVisible} setVisible={setModalVisible} />
    </div>
  );
};

export default DeleteAccount;
