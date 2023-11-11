import React, { useEffect, useState } from "react";
import { IconSearch } from "./icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, tabId } from "../store/storeSlice";
import { useRouter } from "next/router";

const Tab = ({ t }) => {
  const { locale } = useRouter();
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);
  const categories = useSelector((state) => state.data.categories);
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_BASE_URL}/services-categories?page[limit]=500&page[offset]=0`
      )
      .then((res) => {
        dispatch(getCategories(res?.data));
      })
      .catch((err) => alert(err?.message));
  }, []);

  const handleClickTab = (id) => {
    setActive(id);
    dispatch(tabId(id));
  };
  return (
    <div className="container mx-auto lg:px-28 py-4 xl:my-10">
      <div className="bg-primary rounded-3xl px-4 md:py-1 py-2 mx-10 flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
        <div className="w-full items-center flex gap-4 overflow-x-scroll pb-1">
          <div
            onClick={() => handleClickTab(null)}
            className={`${
              active === null ? `bg-base` : `text-zinc-500`
            } cursor-pointer rounded-2xl text-white flex gap-2 items-center justify-center py-3 min-w-[140px] font-medium`}
          >
            <p>{t("p1_text46")}</p>
            {active === null && (
              <span className="w-8 h-8  flex items-center justify-center text-xs rounded-full bg-white text-zinc-500">
                {categories?.pageInfo?.totalCount}
              </span>
            )}
          </div>
          {categories?.entities?.map((item) => (
            <div
              onClick={() => handleClickTab(item?.id)}
              key={item?.id}
              className={`${
                active === item?.id ? `text-white bg-base` : `text-zinc-500`
              }  px-4 font-medium cursor-pointer  rounded-2xl flex gap-2 items-center justify-center py-3`}
            >
              <p className="min-w-max">
                {locale === "en"
                  ? item?.name_en
                  : locale === "ru"
                  ? item?.name_ru
                  : item?.name_uz}
              </p>
              {active === item?.id && (
                <span className="w-8 h-8 flex items-center justify-center text-sm rounded-full bg-white text-zinc-500">
                  {item?.servicescount ? item?.servicescount : `0`}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="w-14 h-[1px] bg-[#786868] rotate-90 md:block hidden" />
          <label
            htmlFor="name"
            className="w-full rounded-2xl bg-white border  border-neutral-200 px-3 h-10 flex items-center gap-3"
          >
            <span>{IconSearch}</span>
            <input
              id="name"
              className="flex-1 outline-none h-full bg-transparent text-gray-800"
              type="search"
              placeholder={t("p1_text45")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tab;
