import React from "react";

const Companies = () => {
  return (
    <div className="container mx-auto lg:px-28 px-4 py-4 xl:my-10">
      <div className="flex sm:flex-row flex-col items-center flex-wrap justify-between">
        {[1, 2, 3, 4, 5, 6]?.map((item) => (
          <div
            key={item}
            className="bg-primary w-48 rounded-2xl flex py-5 px-10 justify-center items-center my-4"
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
