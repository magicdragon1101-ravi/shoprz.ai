import React from "react";
import { useSelector } from "react-redux";
import { getTranslation } from "../../utils/translations";
import Modal from "../../components/modal/Modal";

const DeleteAccountModal = ({ visible, setVisible }) => {
  const language = useSelector((state) => state.lang.language);

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="mb-4 text-2xl font-semibold">{getTranslation(language, "delete_account")}</h1>
        <p className="mb-6 text-sm text-gray-700">{getTranslation(language, "delete_account_desc")}</p>
        <hr className="flex w-full mb-6 border-t border-gray-300" />
        <p className="mb-6 text-sm text-gray-700">{getTranslation(language, "sure_delete")}</p>
        <div className="flex justify-around w-full space-x-5">
          <button
            className="btn flex bg-white text-blue font-semibold border border-blue rounded-full py-2.5 px-6 justify-center items-center hover:bg-blue hover:text-white transition-colors duration-300"
            onClick={() => setVisible(false)}
          >
            {getTranslation(language, "cancel")}
          </button>
          <button
            className="btn flex bg-white text-red font-semibold border border-red rounded-full py-2.5 px-6 justify-center items-center hover:bg-red hover:text-white transition-colors duration-300"
            onClick={() => setVisible(false)}
          >
            {getTranslation(language, "yes_delete")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
