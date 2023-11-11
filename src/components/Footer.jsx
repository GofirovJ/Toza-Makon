import React from "react";
import NavItem from "./NavItem";
import BaseText from "./BaseText";
import { IconLogo } from "./icons";
import OpenModalButton from "./OpenModalButton";

const Footer = () => {
  return (
    <footer>
      <section className="bg-primary py-14">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between items-center lg:w-4/5 w-[90%] mx-auto bg-white rounded-[32px] pb-14">
            <BaseText
              usedFooter={true}
              base="Biz uchun"
              heading="Yana savollaringiz bormi?"
              description="Sizni qiynayotgan savollaringiz bo’lsa biz bilan bog’laning! Mutaxassislarimiz sizning savollaringizga javob berishadi!"
            />
            <OpenModalButton text="Buyurtma qilish" />
          </div>
          <div className="flex flex-col justify-center items-center mt-10 gap-4">
            {IconLogo}
            <h3 className="text-base lg:!text-[32px] font-bold">Toza Makon</h3>
            <p className="text-center text-zinc-500 font-medium">
              Tozalik biz bilan boshlanadi
            </p>
          </div>
        </div>
      </section>
      <div className="bg-c-text">
        <div className="container mx-auto 2xl:px-20 xl:px-10">
          <NavItem />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
