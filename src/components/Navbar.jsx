import React, { useState } from "react";
import NavItem from "./NavItem";
import { IconArrowDown, IconLogo, IconMenu, IconSun } from "./icons";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="bg-c-text">
        <div className="container mx-auto 2xl:px-20 xl:px-10 lg:block hidden">
          <NavItem />
        </div>
      </div>
      <div className="bg-white container flex items-center justify-between mx-auto py-6 2xl:px-20 xl:px-10 px-4">
        <Link href="/" className="flex items-center gap-3">
          {IconLogo}
          <h3 className="text-base text-3xl font-bold">Toza Makon</h3>
        </Link>
        <div className="lg:flex hidden flex-1 justify-center gap-6 text-c-text text-lg font-semibold">
          <Link className="flex items-center gap-2" href="#">
            Xizmatlar{IconArrowDown}
          </Link>
          <Link href="#blog">Blog</Link>
          <Link href="/about-us">Biz haqimizda</Link>
        </div>
        <div className="lg:flex hidden items-center gap-5">
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
        <Link className="flex items-center gap-2" href="#">
          Xizmatlar{IconArrowDown}
        </Link>
        <Link href="#blog">Blog</Link>
        <Link href="#about">Biz haqimizda</Link>
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
