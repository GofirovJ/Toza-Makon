import {
  BaseText,
  Clients,
  Companies,
  Header,
  PhoneBanner,
  ReasonBoxes,
} from "../../components";
import React from "react";

const AboutUs = () => {
  return (
    <main>
      <Header
        mainText="Toza Makon"
        heading="Biz haqimizda"
        title="Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
        video={true}
        videoSource="https://www.youtube.com/embed/pTcQTifb6lI?si=yJFiMA6qwaA_jUJH"
        statistics={[
          {
            title: "Mijozlarimiz",
            value: 2000,
          },
          {
            title: "Ish tajribamiz",
            value: 10,
          },
        ]}
      />
      <BaseText
        usedFooter={false}
        base="Nima uchun"
        heading="Bizni tanlashingiz shart"
        description="Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va imkoniyatlarga
        ega bo’lasiz"
      />
      <ReasonBoxes />
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
};

export default AboutUs;
