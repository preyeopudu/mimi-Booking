import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="flex w-1/5 p-4 text-center flex-col justify-between h-full relative">
      {/* User Profile */}
      <div className="flex flex-col items-center space-x-2">
        <p className="font-bold text-3xl my-5 tracking-wider">
          Mima<span className="text-gray-500">Booking</span>
        </p>
        <div className="border my-4 border-black rounded-full p-2 relative flex justify-center items-center">
          <Image
            width={40}
            height={40}
            src="/images/profile.jpg"
            alt="User Profile"
            className=" w-28 h-28 rounded-full object-cover"
          />
          <div className="absolute -bottom-3 bg-slate-800 p-4 rounded-full flex items-center justify-center text-sm text-white">
            <FaRegEdit />
          </div>
        </div>
        <p className="text-xl mt-4 text-gray-500 font-medium">John Doe</p>
      </div>

      {/* Sidebar Links */}
      <div className=" justify-center  flex flex-col items-center">
        <SidebarLink label="Dashboard" />
        <SidebarLink label="Explore City" />
        <SidebarLink label="Ticket" />
        <SidebarLink label="Favorites" />
        <SidebarLink label="Settings" />
      </div>

      <div className="flex h-7 mb-5">
        <SidebarLink label="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
