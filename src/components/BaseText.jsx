import React from "react";

const BaseText = ({ base, heading, description, usedFooter }) => {
  return (
    <div
      className={`container mx-auto ${
        usedFooter ? `pt-14` : `xl:pt-28`
      } px-4 py-10`}
    >
      <div className="flex flex-col items-center justify-between gap-6">
        <p className="text-center text-base lg:!text-2xl font-semibold">
          {base}
        </p>
        <h3
          className={`text-center text-gray-800 ${
            usedFooter ? `` : `dark:text-white`
          } lg:text-[40px] sm:text-2xl text-lg font-bold`}
        >
          {heading}
        </h3>
        <p
          className={`${
            usedFooter ? `xl:w-1/2` : `xl:w-1/3 dark:text-white`
          } text-center text-zinc-500  font-medium `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default BaseText;
