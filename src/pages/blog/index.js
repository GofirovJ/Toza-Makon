import { useTranslation } from "next-i18next";
import { BaseText, Card, PhoneBanner, Tab } from "../../components";
import { IconArrowDown, IconArrowRight } from "../../components/icons";
import Link from "next/link";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Blog = () => {
  const { t } = useTranslation();

  // const data = [
  //   {
  //     id: 1,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 2,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 3,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 4,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 5,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 6,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 7,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  //   {
  //     id: 8,
  //     image: "/card1.png",
  //     heading: "Uylarni to'g'ri tozalash",
  //     title:
  //       "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  //   },
  // ];

  return (
    <main>
      <div className="container mx-auto 2xl:px-20 xl:px-10 pt-10 px-4">
        <div className="flex gap-2">
          <Link
            href="/"
            className="opacity-50 text-black dark:text-white dark:opacity-80 font-semibold "
          >
            {t("p1_text41")}
          </Link>
          <span className={`dark -rotate-90 dark:block hidden`}>
            {IconArrowDown}
          </span>
          <span className={`dark:hidden`}>{IconArrowRight}</span>
          <p className="text-gray-800 font-semibold dark:text-white">
            {t("p1_text42")}
          </p>
        </div>
      </div>
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text7")}
        heading={t("p1_text8")}
        description={t("p1_text9")}
      />
      <Tab t={t} />
      <Card t={t} />
      <PhoneBanner t={t} />
    </main>
  );
};

export default Blog;
