import { getServices, serviceId } from "@/store/storeSlice";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "./OpenModalButton";
import Modal from "./Modal";
import { useRouter } from "next/router";

const Card = ({ t }) => {
  const { locale } = useRouter();

  const dispatch = useDispatch();
  const services = useSelector((state) => state.data.services);
  const tabId = useSelector((state) => state.data.tabId);
  const [tabServices, setTabServices] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_BASE_URL}/services?page[limit]=500&page[offset]=0`
      )
      .then((res) => {
        dispatch(getServices(res?.data));
      })
      .catch((err) => alert(err?.message));
  }, []);
  useEffect(() => {
    if (tabId === null) {
      setTabServices(services?.entities);
    } else {
      setTabServices(
        services?.entities?.filter((el) => el?.category_id === tabId)
      );
    }
  }, [services?.entities, tabId]);

  const handleClick = (id) => {
    setIsOpenModal(true);
    dispatch(serviceId(id));
  };
  return (
    <div className="continer mx-auto lg:px-28 px-4 py-4">
      <div className={`flex flex-wrap justify-center gap-5`}>
        {tabServices?.length > 0 ? (
          tabServices.map((item) => (
            <div
              key={item?.id}
              className="sm:w-72 w-full bg-primary rounded-2xl p-6 flex flex-col items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full"
                src={`${process.env.NEXT_BASE}/${item?.image}`}
                alt={item.unit_uz}
              />
              <div className="my-4 w-full">
                <h4 className="text-gray-800 text-lg font-bold my-3">
                  {locale === "en"
                    ? item?.name_en
                    : locale === "ru"
                    ? item?.name_ru
                    : item?.name_uz}
                </h4>
                <p className="text-zinc-500 text-sm">
                  {locale === "en"
                    ? item?.description_en
                    : locale === "ru"
                    ? item?.description_ru
                    : item?.description_uz}
                </p>
              </div>
              <button
                onClick={() => handleClick(item?.id)}
                className="cursor-pointer w-full py-3 rounded-xl font-semibold text-base hover:text-white hover:bg-base border border-base hover:shadow-[0_5px_15px_rgb(0,0,0)] hover:shadow-[rgba(15,195,109,0.5)] justify-center items-center transition-all duration-200"
              >
                {" "}
                {t("p1_text19")}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-800 font-medium">{t("p1_text51")}</p>
        )}
      </div>
      {isOpenModal && <Modal t={t} setIsOpenModal={setIsOpenModal} />}
    </div>
  );
};

export default Card;
