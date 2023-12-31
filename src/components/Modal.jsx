import React, { useState } from "react";
import { IconCloseDark, IconProfile, IconCallDark } from "./icons";
import axios from "axios";
import { serviceId } from "@/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ t, setIsOpenModal }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState(false);
  const id = useSelector((state) => state.data.serviceId);
  const handleSubmit = () => {
    axios
      .post(`${process.env.NEXT_BASE_URL}/customer-orders`, {
        phone,
        name,
        service_id: id ? id : 0,
        address: adress,
      })
      .then((res) => {
        setName("");
        setPhone("");
        setMsg(true);
        setTimeout(() => {
          setMsg(false);
          setIsOpenModal(false);
          dispatch(serviceId(null));
        }, 3000);
      })
      .catch((err) => alert(err?.message));
  };
  const handleCloseModal = () => {
    dispatch(serviceId(null));
    setIsOpenModal(false);
  };
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-[55px]">
      <div className="container h-full mx-auto flex justify-center items-center">
        <div className="2xl:w-[30%] xl:w-[35%] bg-white rounded-[32px] p-8 relative sm:m-0 mx-4">
          <button onClick={handleCloseModal} className="absolute top-6 right-6">
            {IconCloseDark}
          </button>
          <h3 className="text-gray-800 text-2xl font-semibold ">
            {id ? t("p1_text19") : t("p1_text52")}
          </h3>
          <p className=" text-zinc-500 font-normal my-4 ">
            {id ? t("p1_text47") : t("p1_text30")}
          </p>
          <label
            htmlFor="name"
            className="w-full rounded-2xl border  border-neutral-200 px-3 h-14 flex mt-8 mb-4 items-center gap-3"
          >
            <span>{IconProfile}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="bg-transparent flex-1 outline-none h-full text-gray-800"
              type="text"
              placeholder={t("p1_text31")}
            />
          </label>
          <label
            htmlFor="phone"
            className="w-full rounded-2xl border  border-neutral-200 px-3 h-14 flex my-4 items-center gap-3"
          >
            <span>{IconCallDark}</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              className="bg-transparent flex-1 outline-none h-full text-gray-800"
              type="text"
              placeholder={t("p1_text32")}
            />
          </label>
          <label
            htmlFor="adress"
            className="w-full rounded-2xl border  border-neutral-200 px-3 h-14 flex my-4 items-center gap-3"
          >
            <span>{IconCallDark}</span>
            <input
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              id="adress"
              className="bg-transparent flex-1 outline-none h-full text-gray-800"
              type="text"
              placeholder={t("p1_text56")}
            />
          </label>
          {msg && (
            <p className="text-base font-medium text-center pb-4">
              {t("p1_text48")}
            </p>
          )}
          <button
            disabled={name && adress && phone?.length >= 9 ? false : true}
            onClick={handleSubmit}
            type="button"
            className={`${
              name && adress && phone?.length >= 9
                ? `cursor-pointer opacity-100 active:scale-90 active:shadow-base`
                : `cursor-not-allowed opacity-30`
            } w-full flex items-center justify-center rounded-xl text-white bg-base text-sm lg:px-5 px-4 lg:py-3 py-2.5 shadow-[0_5px_15px_rgb(0,0,0)]  shadow-[rgba(15,195,109,0.5)] font-semibold transition-all duration-200`}
          >
            {t("p1_text33")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
