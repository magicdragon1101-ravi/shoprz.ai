import React from "react";

const Modal = ({ visible, setVisible, children }) => {
  const onClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center w-full bg-black bg-opacity-50">
      <div onClick={onClose} className="w-full h-full bg-black bg-opacity-50"></div>
      <div className="absolute w-full md:w-[80%] lg:w-[1020px] p-4">
        <div className="w-full bg-white shadow-lg rounded-3xl">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
