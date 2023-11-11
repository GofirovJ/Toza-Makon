import React from "react";
import { IconQuote, IconStar } from "./icons";

const Clients = ({ t }) => {
  return (
    <div className="container mx-auto xl:px-28  px-4 lg:py-10">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col justify-between items-center gap-4">
            {IconQuote}
            <p className="text-center text-gray-800 dark:text-white lg:text-2xl font-medium ">
              {t("p1_text9")}
            </p>
            <div className="flex flex-col  gap-4 justify-between items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/client1.png" alt="client1" />
              <p className="text-zinc-500  dark:text-white font-semibold">
                Jhon Doe
              </p>
              <div className="flex gap-2 justify-center items-center">
                {[1, 2, 3, 4, 5]?.map((item) => (
                  <span key={item}>{IconStar}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex flex-col justify-between items-center gap-4">
            {IconQuote}
            <p className="text-center text-gray-800 dark:text-white lg:text-2xl font-medium ">
              {t("p1_text9")}
            </p>
            <div className="flex flex-col gap-4 justify-between items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/client2.png" alt="client2" />
              <p className="text-zinc-500 dark:text-white font-semibold">
                Jhon Doe
              </p>
              <div className="flex gap-2 justify-center items-center">
                {[1, 2, 3, 4, 5]?.map((item) => (
                  <span key={item}>{IconStar}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
