import React, { useState } from "react";
import { IconChat, IconClose, IconSend } from "./icons";

const StickyChat = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sticky flex flex-col items-end justify-end px-20 bottom-20 right-0">
      {toggle && (
        <div className="w-1/3 bg-white rounded-[32px] p-8 mb-5 shadow-[0px_30px_30px] shadow-[rgba(0,0,0,0.2)] transition-all duration-200">
          <p className="text-gray-800 text-2xl font-semibold">Chat</p>
          <p className="text-c2-text font-medium my-2">
            Bizga qandaydir savolingiz bormi?
          </p>
          <div className="w-full h-[1px] bg-zinc-300 my-4" />
          <div className="flex gap-3 items-center justify-around">
            <input
              className="flex-1 rounded-2xl border border-neutral-200 px-3 h-14"
              type="text"
              placeholder="Yozishni boshlash"
            />
            <button className="w-14 h-14 bg-base rounded-xl flex items-center justify-center transition-all duration-100 active:scale-90">
              {IconSend}
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setToggle(!toggle)}
        type="button"
        className={`w-12 h-12 ${
          toggle
            ? `bg-white  border border-neutral-200`
            : `bg-base shadow-[10px_14px_45px] shadow-base`
        } flex justify-center items-center rounded-full  active:scale-90 transition-all duration-100`}
      >
        {toggle ? IconClose : IconChat}
      </button>
    </div>
  );
};

export default StickyChat;
