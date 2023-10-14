// SidebarLink.js
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { RiHome5Fill } from "react-icons/ri";
import { TbSettings2 } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsGrid, BsDot } from "react-icons/bs";
import { BiPieChartAlt } from "react-icons/bi";
import { LiaChevronCircleRightSolid } from "react-icons/lia";

const iconMapping = {
  Dashboard: <RiHome5Fill />,
  "Explore City": <BsGrid />,
  Ticket: <BiPieChartAlt />,
  Favorites: <AiOutlineHeart />,
  Settings: <TbSettings2 />,
  Logout: <LiaChevronCircleRightSolid />,
};

const pathMapping = {
  Dashboard: "/",
  "Explore City": "/explore",
  Ticket: "/ticket",
  Favorites: "/favorites",
  Settings: "/settings",
  Logout: "/logout",
};

const SidebarLink = ({ label }) => {
  const pathname = usePathname();
  const icon = iconMapping[label];
  const href = pathMapping[label];
  const isActive = pathname === href;

  return (
    <div
      href={href}
      className={`flex   cursor-pointer w-full  px-2 my-1 items-center space-x-2 py-3 text-xl  ${
        isActive ? "text-black" : "text-gray-400"
      }`}
    >
      <div className="flex items-center">
        <BsDot className={isActive ? "text-black" : "text-white"} />
        {icon}
      </div>

      <span>{label}</span>
    </div>
  );
};

export default SidebarLink;
