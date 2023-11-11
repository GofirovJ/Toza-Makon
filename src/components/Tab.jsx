import React, { useState } from "react";
import { IconSearch } from "./icons";

const Tab = () => {
  const [active, setActive] = useState("all");
  const tabs = [
    {
      id: 1,
      title: "Tozalash",
      total: 12,
    },
    {
      id: 2,
      title: "Dizinfeksiya",
      total: 5,
    },
    {
      id: 3,
      title: "Yuvish",
      total: 11,
    },
    {
      id: 4,
      title: "Oshxona",
      total: 23,
    },
    {
      id: 5,
      title: "Uy va ofis",
      total: 12,
    },
    {
      id: 6,
      title: "Bog’ va yashil maydonlar",
      total: 3,
    },
    {
      id: 7,
      title: "Boshqa",
      total: 0,
    },
  ];
  const sumOfTotals = tabs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );
  return (
    <div className="container mx-auto lg:px-28 py-4 xl:my-10">
      <div className="bg-primary rounded-3xl px-4 md:py-1 py-2 mx-10 flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
        <div className="w-full items-center flex gap-4 overflow-x-scroll pb-1">
          <div
            onClick={() => setActive("all")}
            className={`${
              active === "all" ? `bg-base` : `text-zinc-500`
            } cursor-pointer rounded-2xl text-white flex gap-2 items-center justify-center py-3 min-w-[140px] font-medium`}
          >
            <p>Barchasi</p>
            {active === "all" && (
              <span className="w-8 h-8 flex items-center justify-center text-sm rounded-full bg-white text-zinc-500">
                {sumOfTotals}
              </span>
            )}
          </div>
          {tabs?.map((item) => (
            <div
              onClick={() => setActive(item?.title)}
              key={item?.id}
              className={`${
                active === item?.title ? `text-white bg-base` : `text-zinc-500`
              }  px-4 font-medium cursor-pointer  rounded-2xl flex gap-2 items-center justify-center py-3`}
            >
              <p className="min-w-max">{item?.title}</p>
              {active === item?.title && (
                <span className="w-8 h-8 flex items-center justify-center text-sm rounded-full bg-white text-zinc-500">
                  {item?.total}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="w-14 h-[1px] bg-[#786868] rotate-90 md:block hidden" />
          <label
            htmlFor="name"
            className="w-full rounded-2xl bg-white border  border-neutral-200 px-3 h-10 flex items-center gap-3"
          >
            <span>{IconSearch}</span>
            <input
              id="name"
              className="flex-1 outline-none h-full bg-transparent"
              type="search"
              placeholder="Qidirish"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tab;
