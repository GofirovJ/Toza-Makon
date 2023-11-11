import React from "react";
import { BaseText, Card, Header, PhoneBanner } from "../../../components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const Cleaning = () => {
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
        service={true}
        breadCrumb="/service/cleaning"
      />
      <BaseText
        t={t}
        usedFooter={false}
        base={t("p1_text37")}
        heading={t("p1_text38")}
        description={t("p1_text9")}
      />
      <Card t={t} />
      <PhoneBanner t={t} />
    </main>
  );
};

export default Cleaning;
