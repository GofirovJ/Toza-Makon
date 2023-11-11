import React from "react";
import { IconCall } from "./icons";
import Link from "next/link";

const NavItem = () => {
  const parag = "text-sm text-white font-medium";
  return (
    <div className="xl:h-14 p-4 xl:p-0 relative flex xl:flex-row flex-col items-center xl:justify-between">
      <div className="2xl:w-3/5 xl:w-4/5">
        <div className="xl:flex items-center gap-3">
          <span className="xl:block hidden">{IconCall}</span>
          <p className={`${parag} xl:block hidden`}>
            <Link href="tel:7757">77 57</Link>
          </p>
          <div className="w-5 h-[1px] bg-white xl:block hidden" />
          <p
            className={`${parag} leading-6 xl:leading-none inline xl:block text-center xl:text-left`}
          >
            Xizmatlarimiz haqida bepul ma’lumot olish uchun{" "}
            <span className="xl:hidden inline mr-2">77 57 ga</span>{" "}
            qo&apos;ng&apos;iroq qiling!
          </p>
          <div className="w-5 h-[1px] bg-white xl:block hidden" />
          <p
            className={`${parag} leading-7 xl:leading-none inline xl:block ml-3 xl:m-0`}
          >
            Ish vaqti: 09:00 - 18:00
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 flex items-center justify-end gap-6 mt-3 xl:mt-0">
        {[
          {
            name: "YouTube",
            path: "https://www.youtube.com/",
          },
          {
            name: "Telegram",
            path: "https://telegram.org/",
          },
          {
            name: "Instagram",
            path: "https://www.instagram.com/",
          },
        ].map((item) => (
          <Link className={`${parag}`} key={item?.name} href={`${item?.path}`}>
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
