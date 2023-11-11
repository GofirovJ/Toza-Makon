import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Header,
  ReasonBoxes,
  BaseText,
  Card,
  PhoneBanner,
  Clients,
  Companies,
} from "../components";

const inter = Inter({ subsets: ["latin"] });
const data = [
  {
    id: 1,
    image: "/card1.png",
    heading: "Tozalash xizmatlari",
    title:
      "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  },
  {
    id: 2,
    image: "/card2.png",
    heading: "Dizinfeksiya xizmatlari",
    title:
      "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  },
  {
    id: 3,
    image: "/card3.png",
    heading: "Yuvish xizmatlari",
    title:
      "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz.",
  },
];

export default function Home() {
  return (
    <main>
      <Header
        mainText="Biz siz uchun"
        heading="Toza va sog’lom muhit yaratamiz"
        title="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
        video={false}
        statistics={[]}
        service={false}
        breadCrumb=""
      />
      <BaseText
        usedFooter={false}
        base="Nima uchun"
        heading="Bizni tanlashingiz shart"
        description="Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va imkoniyatlarga
        ega bo’lasiz"
      />
      <ReasonBoxes />
      <BaseText
        usedFooter={false}
        base="Biz siz uchun"
        heading="Nimalarni taklif qilamiz"
        description="Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni taklif qilamiz"
      />
      <Card data={data} />
      <PhoneBanner />
      <BaseText
        usedFooter={false}
        base="Biz haqimizda"
        heading="Mijozlar nima deydi"
        description=""
      />
      <Clients />
      <BaseText
        usedFooter={false}
        base="Biz bilan ishlovchi"
        heading="Hamkor kompaniyalar"
        description=""
      />
      <Companies />
    </main>
  );
}
