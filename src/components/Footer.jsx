import React from "react";
import NavItem from "./NavItem";
import BaseText from "./BaseText";
import { IconLogo } from "./icons";
import OpenModalButton from "./OpenModalButton";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section className="bg-primary py-14">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between items-center lg:w-4/5 w-[90%] mx-auto bg-white rounded-[32px] pb-14">
            <BaseText
              t={t}
              usedFooter={true}
              base={t("p1_text7")}
              heading={t("p1_text25")}
              description={t("p1_text26")}
            />
            <OpenModalButton t={t} text={t("p1_text27")} />
          </div>
          <div className="flex flex-col justify-center items-center mt-10 gap-4">
            {IconLogo}
            <h3 className="text-base lg:!text-[32px] font-bold">
              {t("p1_text53")}
            </h3>
            <p className="text-center text-zinc-500 font-medium">
              {t("p1_text28")}
            </p>
          </div>
        </div>
      </section>
      <div className="bg-c-text">
        <div className="container mx-auto 2xl:px-20 xl:px-10">
          <NavItem t={t} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
