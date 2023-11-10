import React from "react";
import { IconAppStore, IconPlayMarket } from "./icons";

const PhoneBanner = () => {
  return (
    <div className="container mx-auto lg:p-28 px-4 py-4 xl:my-10">
      <div className="bg-primary rounded-[32px] lg:py-14 py-6 lg:px-28 px-10 relative">
        <p className="text-base lg:!text-2xl font-semibold ">Biz siz uchun</p>
        <h2 className="text-gray-800 xl:text-[40px] lg:text-3xl text-lg font-bold my-2">
          Ilovamizdan foydalanib ko’ring!
        </h2>
        <p className="xl:w-[45%] text-zinc-500 font-medium lg:text-[16px] text-sm">
          Ilovamizni hoziroq yuklab oling va u orqali xizmatlarimizdan tez va
          oson foydalaning.{" "}
        </p>
        <div className="sm:flex flex-wrap gap-4 mt-10">
          <button
            className="sm:w-40 w-full sm:m-0 my-2 flex justify-center items-center sm:block p-2 bg-black rounded-md"
            type="button"
          >
            {IconPlayMarket}
          </button>
          <button
            className="sm:w-40 w-full sm:m-0 my-2 flex justify-center items-center sm:block p-2 bg-black rounded-md"
            type="button"
          >
            {IconAppStore}
          </button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/phone.png"
          className="absolute 2xl:right-40 xl:right-10 xl:block hidden bottom-full translate-y-[85%]"
          alt="phone"
        />
      </div>
    </div>
  );
};

export default PhoneBanner;
