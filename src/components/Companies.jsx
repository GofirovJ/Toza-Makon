import React from "react";

const Companies = ({ t }) => {
  return (
    <div className="container mx-auto lg:px-28 px-4 sm:py-4 xl:my-10">
      <div className="flex items-center flex-wrap justify-between">
        {[1, 2, 3, 4, 5, 6]?.map((item) => (
          <div
            key={item}
            className="bg-primary sm:w-48 w-[45%] rounded-2xl flex py-5 px-10 justify-center items-center my-4"
          >
            <p className="uppercase text-stone-300 lg:text-[40px] font-mediu">
              Logo
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
