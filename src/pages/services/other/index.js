import { useTranslation } from "next-i18next";
import {
  BaseText,
  Card,
  Header,
  PhoneBanner,
  ReasonBoxes,
} from "../../../components";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const OtherServices = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Header
        t={t}
        mainText={t("p1_text37")}
        heading={t("p1_text39")}
        title={t("p1_text9")}
        video={true}
        service={true}
        videoSource="https://www.youtube.com/embed/IY69EZXjZ0c?si=etgipTJgPuB9mFQ4"
        statistics={[]}
        breadCrumb="/service/cleaning"
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
        base={t("p1_text37")}
        heading={t("p1_text40")}
        description={t("p1_text9")}
      />
      <Card t={t} />
      <PhoneBanner t={t} />
    </main>
  );
};

export default OtherServices;
