import React from "react";
import { IconItem1, IconItem2, IconItem3 } from "./icons";

const ReasonBoxes = () => {
  const reasons = [
    {
      id: 1,
      svg: IconItem1,
      title: "Tozalikdan rohatlanish",
      description:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 2,
      svg: IconItem2,
      title: "Professionallik",
      description:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 3,
      svg: IconItem3,
      title: "Mutaxassislar xizmati",
      description:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
  ];
  return (
    <div className="container mx-auto xl:px-28  px-4 py-10">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-10 mt-10">
        {reasons?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col items-center justify-between gap-3"
          >
            {item?.svg}
            <h4 className="text-center text-gray-800 text-lg font-bold">
              {item.title}
            </h4>
            <p className="text-center text-zinc-500 text-sm font-medium">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonBoxes;
