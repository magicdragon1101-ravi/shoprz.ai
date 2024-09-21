import React from "react";
import Modal from "../../components/modal/Modal";

const DeleteAccountModal = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="mb-4 text-2xl font-semibold">Delete Account</h1>
        <p className="mb-6 text-sm text-gray-700">
          Your display name <strong>@maria</strong> and public profile will no longer be viewable on the Peex platform.
          Your data will be permanently deleted and cannot be recovered.
        </p>
        <hr className="flex w-full mb-6 border-t border-gray-300" />
        <p className="mb-6 text-sm text-gray-700">Are you sure you want to delete your account?</p>
        <div className="flex justify-around w-full space-x-5">
          <button
            className="btn flex bg-white text-blue font-semibold border border-blue rounded-full py-2.5 px-6 justify-center items-center hover:bg-blue hover:text-white transition-colors duration-300"
            onClick={() => setVisible(false)}
          >
            Cancel
          </button>
          <button
            className="btn flex bg-white text-red font-semibold border border-red rounded-full py-2.5 px-6 justify-center items-center hover:bg-red hover:text-white transition-colors duration-300"
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
