import React from "react";
import ArrowRight from "./icons/ArrowRight";
import Avatar from "../assets/images/avatar.png";
import ArrowDown from "./icons/ArrowDown";
import Hamburger from "./icons/Hamburger";

const BreadCrum = () => {
  return (
    <div className="h-[50px] flex justify-between lg:mt-4">
      <div className="flex w-[65%] items-center breadcrumbIndex">
        Discover <ArrowRight />{" "}
        <span className="opacity-50">Recently Played</span>
      </div>
      <div className=" flex w-[20%] gap-2 lg:gap-4 justify-end items-center">
        <img
          src={Avatar}
          className="w-7 h-7 lg:h-[50px] lg:w-[50px] rounded-full lg:rounded-[14px]"
        />
        <div className="hidden md:flex flex-col">
          <span className="font-semibold text-xs lg:text-base text-[#2E3271] leading-5">
            Wade Warren
          </span>
          <span className="font-normal text-xs lg:text-base text-[#2E3271] opacity-50 leading-4">
            Premium
          </span>
        </div>
        <ArrowDown className="" />
      </div>
      <div className="flex lg:hidden w-[15%] justify-end items-center">
        <Hamburger />
      </div>
    </div>
  );
};

export default BreadCrum;
