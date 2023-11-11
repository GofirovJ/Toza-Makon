import { BaseText, Card, Tab } from "../../components";
import { IconArrowDown, IconArrowRight } from "../../components/icons";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const data = [
    {
      id: 1,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 2,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 3,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 4,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 5,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 6,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 7,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 8,
      image: "/card1.png",
      heading: "Uylarni to'g'ri tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
  ];
  return (
    <main>
      <div className="container mx-auto 2xl:px-20 xl:px-10 pt-10 px-4">
        <div className="flex gap-2">
          <Link
            href="/"
            className="opacity-50 text-black dark:text-white dark:opacity-80 font-semibold "
          >
            Bosh Sahifa
          </Link>
          <span className={`dark -rotate-90 dark:block hidden`}>
            {IconArrowDown}
          </span>
          <span className={`dark:hidden`}>{IconArrowRight}</span>
          <p className="text-gray-800 font-semibold dark:text-white">
            Biz haqimizda
          </p>
        </div>
      </div>
      <BaseText
        usedFooter={false}
        base="Biz siz uchun"
        heading="Toza va sog’lom muhit yaratamiz"
        description="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
      />
      <Tab />
      <Card data={data} />
    </main>
  );
};

export default Blog;
