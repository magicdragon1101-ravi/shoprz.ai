import React from "react";

const Modal = ({ visible, setVisible, children }) => {
  const onClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="flex fixed w-full inset-0 justify-center items-center bg-black bg-opacity-50 z-30">
      <div onClick={onClose} className="w-full h-full bg-black bg-opacity-50"></div>
      <div className="absolute w-full md:w-[680px] lg:w-[1020px] p-4">
        <div className="w-full bg-white rounded-3xl shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
