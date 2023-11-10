import React from "react";
import { IconCloseDark, IconProfile, IconCallDark } from "./icons";

const Modal = ({ setIsOpenModal }) => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-[55px]">
      <div className="container h-full mx-auto flex justify-center items-center">
        <div className="w-[30%] bg-white rounded-[32px] p-8 relative">
          <button
            onClick={() => setIsOpenModal(false)}
            className="absolute top-6 right-6"
          >
            {IconCloseDark}
          </button>
          <h3 className="text-gray-800 text-2xl font-semibold ">
            Aloqa malumotlari
          </h3>
          <p className=" text-zinc-500 font-normal my-4 ">
            Aloqaga chiqishimiz uchun quyida so’ralgan ma’lumotlarni bizga
            jo’nating
          </p>
          <label
            htmlFor="name"
            className="w-full rounded-2xl border  border-neutral-200 px-3 h-14 flex mt-8 mb-4 items-center gap-3"
          >
            <span>{IconProfile}</span>
            <input
              id="name"
              className="flex-1 outline-none h-full"
              type="text"
              placeholder="Ismingiz"
            />
          </label>
          <label
            htmlFor="phone"
            className="w-full rounded-2xl border  border-neutral-200 px-3 h-14 flex my-4 items-center gap-3"
          >
            <span>{IconCallDark}</span>
            <input
              id="phone"
              className="flex-1 outline-none h-full"
              type="text"
              placeholder="Telefon raqamingiz"
            />
          </label>
          <button
            onClick={() => setIsOpenModal(true)}
            type="button"
            className="w-full flex items-center justify-center rounded-xl text-white bg-base text-sm lg:px-5 px-4 lg:py-3 py-2.5 shadow-[0_5px_15px_rgb(0,0,0)] active:scale-90 shadow-[rgba(15,195,109,0.5)] active:shadow-base  font-semibold transition-all duration-200"
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
