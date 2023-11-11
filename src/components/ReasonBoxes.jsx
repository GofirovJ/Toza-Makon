import React from "react";
import { IconItem1, IconItem2, IconItem3 } from "./icons";

const ReasonBoxes = ({ t }) => {
  const reasons = [
    {
      id: 1,
      svg: IconItem1,
      title: t("p1_text15"),
      description: t("p1_text9"),
    },
    {
      id: 2,
      svg: IconItem2,
      title: t("p1_text16"),
      description: t("p1_text9"),
    },
    {
      id: 3,
      svg: IconItem3,
      title: t("p1_text17"),
      description: t("p1_text9"),
    },
  ];
  return (
    <div className="container mx-auto xl:px-28  px-4 py-10">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-10 lg:mt-10">
        {reasons?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col items-center justify-between gap-3"
          >
            {item?.svg}
            <h4 className="text-center text-gray-800 dark:text-white text-lg font-bold">
              {item.title}
            </h4>
            <p className="text-center text-zinc-500 dark:text-white text-sm font-medium">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonBoxes;
