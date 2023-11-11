import React from "react";
import OpenModalButton from "./OpenModalButton";
import Link from "next/link";
import { IconArrowRight } from "./icons";

const Header = ({
  t,
  mainText,
  heading,
  title,
  video,
  videoSource,
  statistics,
  service,
  breadCrumb,
}) => {
  return (
    <div className="bg-primary ">
      {breadCrumb && (
        <div className="lg:block hidden container mx-auto 2xl:px-20 xl:px-10 pt-10 px-4">
          <div className="flex gap-2">
            <Link href="/" className="opacity-50 text-black font-semibold ">
              {t("p1_text41")}
            </Link>
            {IconArrowRight}
            <p className="text-gray-800 font-semibold">
              {breadCrumb === "/service/cleaning"
                ? t("p1_text3")
                : breadCrumb === "/blog"
                ? t("p1_text49")
                : t("p1_text4")}
            </p>
          </div>
        </div>
      )}
      {!video ? (
        <div
          className={`container mx-auto 2xl:px-20 xl:px-10 lg:py-28 py-8 px-4  bg-[url('/head.png')] bg-no-repeat lg:bg-right bg-center bg-contain`}
        >
          <RenderComponent
            t={t}
            mainText={mainText}
            heading={heading}
            title={title}
            service={service}
            video={video}
            statistics={statistics}
          />
        </div>
      ) : (
        <div
          className={`container mx-auto 2xl:px-20 xl:px-10 lg:py-28 py-8 px-4 lg:flex justify-between items-center`}
        >
          <RenderComponent
            t={t}
            mainText={mainText}
            heading={heading}
            title={title}
            statistics={statistics}
            video={video}
            service={service}
          />
          <div className="lg:m-0 my-4">
            <iframe
              className="lg:w-[560px] w-full lg:h-[315px] sm:h-[350px] h-[250px] rounded-[32px]"
              src={videoSource}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

const RenderComponent = ({
  t,
  mainText,
  heading,
  title,
  video,
  statistics,
  service,
}) => (
  <div>
    <p className="text-base lg:!text-2xl font-semibold">{mainText}</p>
    <h1
      className={`${
        video ? `lg:w-4/5` : `lg:w-1/2`
      } text-c-text xl:text-[56px] lg:text-5xl text-xl font-bold !leading-[72px] lg:my-4`}
    >
      {heading}
    </h1>
    <p
      className={`${
        video ? `lg:w-3/5` : `lg:w-1/3`
      } text-c2-text text-base font-medium lg:my-6`}
    >
      {title}
    </p>
    {statistics?.length > 0 ? (
      <div className="flex items-center gap-6 mt-4">
        <div>
          <p className="opacity-50 text-black text-base font-medium">
            {statistics?.[0].title}
          </p>
          <p className="text-base lg:!text-[32px] font-bold mt-4">
            {statistics?.[0].value} +
          </p>
        </div>
        <div>
          <p className="opacity-50 text-black text-base font-medium">
            {statistics?.[1].title}
          </p>
          <p className="text-base lg:!text-[32px] font-bold mt-4">
            {statistics?.[1].value} {t("p1_text50")}
          </p>
        </div>
      </div>
    ) : service ? (
      <div className="flex gap-6 mt-10">
        <OpenModalButton t={t} text={t("p1_text27")} />
        <OpenModalButton t={t} text={t("p1_text36")} color="none" />
      </div>
    ) : (
      <div className="flex gap-6 mt-10">
        <OpenModalButton t={t} text={t("p1_text10")} />
        <Link
          href={"/services/cleaning"}
          type="button"
          className="dark:text-darkb cursor-pointer flex items-center justify-center rounded-xl border border-base text-sm bg-primary lg:px-5 px-4 lg:py-3 py-2.5   font-semibold transition-all duration-200"
        >
          {t("p1_text11")}
        </Link>
      </div>
    )}
  </div>
);
