import React from "react";
import { BaseText, Card, Header } from "../../../components";
const Cleaning = () => {
  const data = [
    {
      id: 1,
      image: "/card1.png",
      heading: "Uylarni tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 2,
      image: "/card2.png",
      heading: "Ofislarni tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 3,
      image: "/card2.png",
      heading: "Bog’larni tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 4,
      image: "/card3.png",
      heading: "Yashil maydonlarni tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 5,
      image: "/card1.png",
      heading: "Qurilish joylarini tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 6,
      image: "/card2.png",
      heading: "Umumiy tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 7,
      image: "/card2.png",
      heading: "Mebellarni tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
    {
      id: 8,
      image: "/card2.png",
      heading: "Mebellarni tozalash",
      title:
        "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
    },
  ];

  return (
    <main>
      <Header
        mainText="Biz siz uchun"
        heading="Toza va sog’lom muhit yaratamiz"
        title="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
        video={false}
        statistics={[]}
        service={true}
        breadCrumb="/service/cleaning"
      />
      <BaseText
        usedFooter={false}
        base="Siz uchun"
        heading="Qanday tozalash xizmatlar taklif qilamiz"
        description="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni taklif qilamiz"
      />
      <Card data={data} />
    </main>
  );
};

export default Cleaning;
