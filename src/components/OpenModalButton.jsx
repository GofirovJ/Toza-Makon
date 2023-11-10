import React, { useState } from "react";
import Modal from "./Modal";

const OpenModalButton = ({ text }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenModal(true)}
        type="button"
        className="flex items-center justify-center rounded-xl text-white bg-base text-sm lg:px-5 px-4 lg:py-3 py-2.5 shadow-[0_5px_15px_rgb(0,0,0)] active:scale-90 shadow-[rgba(15,195,109,0.5)] active:shadow-base  font-semibold transition-all duration-200"
      >
        {text}
      </button>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
    </>
  );
};

export default OpenModalButton;
