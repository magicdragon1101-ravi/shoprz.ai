import React from "react";
import Modal from "../components/Modal";

const DeleteAccountModal = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div className="flex flex-col justify-center items-center text-center p-6">
        <h1 className="font-semibold text-2xl mb-4">Delete Account</h1>
        <p className="text-sm text-gray-700 mb-6">
          Your display name <strong>@maria</strong> and public profile will no longer be viewable on the Peex platform.
          Your data will be permanently deleted and cannot be recovered.
        </p>
        <hr className="flex w-full border-t border-gray-300 mb-6" />
        <p className="text-sm text-gray-700 mb-6">Are you sure you want to delete your account?</p>
        <div className="flex justify-around w-full">
          <button
            className="flex border border-[#4971BD] bg-white text-[#4971BD] font-semibold rounded-full py-3 px-6 justify-center items-center hover:bg-[#4971BD] hover:text-white transition-colors duration-300"
            onClick={() => setVisible(false)}
          >
            Cancel
          </button>
          <button
            className="flex border border-[#FF7477] bg-white text-[#FF7477] font-semibold rounded-full py-3 px-6 justify-center items-center hover:bg-[#FF7477] hover:text-white transition-colors duration-300"
            onClick={() => setVisible(false)}
          >
            Yes Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
