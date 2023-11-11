import React, { useState } from "react";
import Modal from "./Modal";

const OpenModalButton = ({ t, text, color }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenModal(true)}
        type="button"
        className={`cursor-pointer flex items-center justify-center rounded-xl ${
          color === `none`
            ? `bg-primary border border-base dark:text-darkb`
            : `bg-base shadow-[0_5px_15px_rgb(0,0,0)]    text-white active:scale-90 shadow-[rgba(15,195,109,0.5)] active:shadow-base`
        }  text-sm lg:px-5 px-4 lg:py-3 py-2.5 font-semibold transition-all duration-200`}
      >
        {text}
      </button>
      {isOpenModal && <Modal t={t} setIsOpenModal={setIsOpenModal} />}
    </>
  );
};

export default OpenModalButton;
