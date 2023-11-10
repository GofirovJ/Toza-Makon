import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="continer mx-auto lg:px-28 px-4 py-4">
      <div className={`flex flex-wrap justify-center gap-5`}>
        {data?.map((item) => (
          <Link
            href={`#${item.id}`}
            key={item?.id}
            className="w-72 bg-primary rounded-2xl p-6 flex flex-col items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full"
              src={item.image}
              alt={item.heading}
            />
            <div className="my-4">
              <h4 className="text-gray-800 text-lg font-bold my-3">
                {item?.heading}
              </h4>
              <p className="text-zinc-500 text-sm">{item?.title}</p>
            </div>
            <button className="w-full py-3 rounded-xl font-semibold text-base hover:text-white hover:bg-base border border-base hover:shadow-[0_5px_15px_rgb(0,0,0)] hover:shadow-[rgba(15,195,109,0.5)] justify-center items-center transition-all duration-200">
              Batafsil
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
