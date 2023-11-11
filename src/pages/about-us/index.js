import {
  BaseText,
  Clients,
  Companies,
  Header,
  PhoneBanner,
  ReasonBoxes,
} from "../../components";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Header
        t={t}
        mainText={t("p1_text53")}
        heading={t("p1_text5")}
        title={t("p1_text9")}
        video={true}
        service={false}
        videoSource="https://www.youtube.com/embed/pTcQTifb6lI?si=yJFiMA6qwaA_jUJH"
        statistics={[
          {
            title: t("p1_text43"),
            value: 2000,
          },
          {
            title: t("p1_text44"),
            value: 10,
          },
        ]}
        breadCrumb="/about-us"
      />
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text12")}
        heading={t("p1_text13")}
        description={t("p1_text14")}
      />
      <ReasonBoxes t={t} />
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
};

export default AboutUs;
