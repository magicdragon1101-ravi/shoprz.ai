import { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";

const DeleteAccount = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="flex flex-col w-full mt-8 md:mt-0">
      <h1 className="mb-4 text-2xl font-semibold">Delete Account</h1>
      <p className="mb-4">Permanently delete the account and remove access to my data.</p>
      <button
        onClick={() => setModalVisible(true)}
        className="btn flex w-fit bg-white text-red font-semibold border border-red rounded-full py-2.5 px-6 justify-center items-center hover:bg-red hover:text-white transition duration-300"
      >
        Delete Account
      </button>

      <DeleteAccountModal visible={modalVisible} setVisible={setModalVisible} />
    </div>
  );
};

export default DeleteAccount;
