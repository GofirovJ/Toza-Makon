import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  Header,
  ReasonBoxes,
  BaseText,
  Card,
  PhoneBanner,
  Clients,
  Companies,
} from "../components";
import { useTranslation } from "next-i18next";

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
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <Header
        t={t}
        mainText={t("p1_text7")}
        heading={t("p1_text8")}
        title={t("p1_text9")}
        video={false}
        statistics={[]}
        service={false}
        breadCrumb=""
      />
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text12")}
        heading={t("p1_text13")}
        description={t("p1_text14")}
      />
      <ReasonBoxes t={t} />
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text7")}
        heading={t("p1_text18")}
        description={t("p1_text9")}
      />
      <Card t={t} data={data} />
      <PhoneBanner t={t} />
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text5")}
        heading={t("p1_text22")}
        description=""
      />
      <Clients t={t} />
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text23")}
        heading={t("p1_text24")}
        description=""
      />
      <Companies t={t} />
    </main>
  );
}
