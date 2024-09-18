import React from "react";

const Modal = ({ visible, setVisible, children }) => {
  if (!visible) return null;

  return (
    <div className="flex fixed w-full inset-0 justify-center items-center bg-black bg-opacity-50 z-50">
      <div onClick={() => setVisible(false)} className="bg-black bg-opacity-50 w-full h-full"></div>
      <div className="absolute p-4 md:w-[480px] w-full">
        <div className="w-full bg-white rounded-3xl shadow-lg my-2 py-12 px-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
