import React from "react";
import OpenModalButton from "./OpenModalButton";

const Header = ({
  mainText,
  heading,
  title,
  video,
  videoSource,
  statistics,
}) => {
  return (
    <div className="bg-primary ">
      {!video ? (
        <div
          className={`container mx-auto 2xl:px-20 xl:px-10 lg:py-28 py-8 px-4  bg-[url('/head.png')] bg-no-repeat lg:bg-right bg-center bg-contain`}
        >
          <RenderComponent heading={heading} title={title} />
        </div>
      ) : (
        <div
          className={`container mx-auto 2xl:px-20 xl:px-10 lg:py-28 py-8 px-4 flex justify-between items-center`}
        >
          <RenderComponent
            mainText={mainText}
            heading={heading}
            title={title}
            statistics={statistics}
            video={video}
          />
          <div>
            <iframe
              className="rounded-[32px]"
              width="560"
              height="315"
              src={videoSource}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

const RenderComponent = ({
  mainText,
  heading,
  title,
  source,
  video,
  statistics,
}) => (
  <div>
    <p class="text-base lg:!text-2xl font-semibold">{mainText}</p>
    <h1
      class={`${
        video ? `lg:w-4/5` : `lg:w-1/2`
      } text-c-text xl:text-[56px] lg:text-5xl text-xl font-bold !leading-[72px] my-4`}
    >
      {heading}
    </h1>
    <p
      class={`${
        video ? `lg:w-3/5` : `lg:w-1/3`
      } text-c2-text text-base font-medium my-6`}
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
            {statistics?.[1].value} yil
          </p>
        </div>
      </div>
    ) : (
      <div className="flex gap-6 mt-10">
        <OpenModalButton text="Bog’lanish" />
        <button
          type="button"
          className="flex items-center justify-center rounded-xl border border-base  text-sm bg-primary lg:px-5 px-4 lg:py-3 py-2.5   font-semibold transition-all duration-200"
        >
          Bizning xizmatlar
        </button>
      </div>
    )}
  </div>
);