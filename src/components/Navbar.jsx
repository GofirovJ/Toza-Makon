import React, { useState } from "react";
import NavItem from "./NavItem";
import {
  IconArrowDown,
  IconLogo,
  IconLogoDark,
  IconMenu,
  IconMoon,
  IconSun,
} from "./icons";
import Link from "next/link";
import { useTheme } from "next-themes";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClose = () => {
    setIsOpen(false);
    setDrop(false);
  };
  return (
    <nav>
      <div className="bg-c-text">
        <div className="container mx-auto 2xl:px-20 xl:px-10 lg:block hidden">
          <NavItem />
        </div>
      </div>
      <div className="bg-white dark:bg-darkb container flex items-center justify-between mx-auto py-6 2xl:px-20 xl:px-10 px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="dark:hidden">{IconLogo}</span>
          <span className="dark:block hidden">{IconLogoDark}</span>
          <h3 className="text-base text-3xl font-bold">Toza Makon</h3>
        </Link>
        <div className="lg:flex hidden flex-1 justify-center gap-6 text-c-text text-lg font-semibold dark:text-white">
          <div
            onClick={() => setDrop(!drop)}
            className="cursor-pointer flex items-center gap-2 relative"
          >
            Xizmatlar
            <span className={`${drop && `rotate-180 `} dark:text-white`}>
              {IconArrowDown}
            </span>
            {drop && (
              <div className="w-44 px-4 absolute right-0 top-[130%] flex flex-col gap-2 bg-white dark:bg-darkb dark:text-white border border-gray-200 rounded-2xl py-2">
                <Link onClick={() => setDrop(false)} href="/services/cleaning">
                  Tozalash
                </Link>
                <Link onClick={() => setDrop(false)} href="/services/other">
                  Boshqa xizmatlar
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog">Blog</Link>
          <Link href="/about-us">Biz haqimizda</Link>
        </div>
        <div className="lg:flex hidden items-center gap-5">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
            className="bg-primary flex items-center justify-center w-12 h-12 rounded-xl active:shadow-[0_0_15px_rgb(0,0,0)] shadow-primary active:shadow-primary transition-all duration-200"
          >
            {/* {theme === "light" ? "Dark" : "Light"} */}
            <span className="dark:hidden">{IconSun}</span>
            <span className="dark:block hidden">{IconMoon}</span>
          </button>
          <button
            type="button"
            className="bg-primary flex items-center justify-center w-12 h-12 rounded-xl text-base font-semibold active:shadow-[0_0_15px_rgb(0,0,0)] shadow-primary active:shadow-primary transition-all duration-200"
          >
            Uz
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-xl text-white bg-base px-5 py-3 shadow-[0_5px_15px_rgb(0,0,0)] active:shadow-[0_5px_20px_rgb(0,0,0)] shadow-[rgba(15,195,109,0.5)] active:shadow-base  font-semibold transition-all duration-200"
          >
            Ilovamizni sinab ko’ring
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="lg:hidden bg-primary flex items-center justify-center w-12 h-12 rounded-xl active:shadow-[0_0_15px_rgb(0,0,0)] shadow-primary active:shadow-primary transition-all duration-200"
        >
          {isOpen ? (
            <span>{IconMenu}</span>
          ) : (
            <span className="rotate-180">{IconMenu}</span>
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? `min-h-[240px] block` : `h-0 hidden`
        } bg-primary transition-all duration-200 p-6 text-c-text text-lg font-semibold flex flex-col gap-4`}
      >
        <div
          onClick={() => setDrop(!drop)}
          className="flex items-center gap-2 relative"
        >
          Xizmatlar{" "}
          <span className={`${drop && `rotate-180`}`}>{IconArrowDown}</span>
        </div>
        {drop && (
          <div className=" flex flex-col gap-2">
            <Link onClick={handleClose} href="/services/cleaning">
              Tozalash
            </Link>
            <Link onClick={handleClose} href="/services/other">
              Boshqa
            </Link>
          </div>
        )}
        <Link href="/blog" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
        <Link href="/about-us" onClick={() => setIsOpen(false)}>
          Biz haqimizda
        </Link>
        <div className="flex items-center justify-between mt-2 gap-5">
          <button
            type="button"
            className="bg-primary flex items-center justify-center w-12 h-12 rounded-xl active:shadow-[0_0_15px_rgb(0,0,0)] shadow-primary active:shadow-primary transition-all duration-200"
          >
            {IconSun}
          </button>
          <button
            type="button"
            className="bg-primary flex items-center justify-center w-12 h-12 rounded-xl text-base font-semibold active:shadow-[0_0_15px_rgb(0,0,0)] shadow-primary active:shadow-primary transition-all duration-200"
          >
            Uz
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-xl text-sm text-white bg-base px-4 py-3 shadow-[0_5px_15px_rgb(0,0,0)] active:shadow-[0_5px_20px_rgb(0,0,0)] shadow-base active:shadow-base  font-semibold transition-all duration-200"
          >
            Ilovamizni sinab ko’ring
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
