import { footerMenuItems } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-11 mb-24">
      <hr className="my-5 h-0.5 bg-white" />
      {/* Company */}
      <div className="flex justify-between ">
        <div className="">
          <h2 className="text-4xl font-bold ">Technosys Inc.</h2>
          <p className="text-1xl ">
            a full cycle for all the digital marketing
          </p>
        </div>
        <div className="grid grid-cols-3">
          {footerMenuItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${"text-gray-300 hover:bg-indigo-700 hover:text-white"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <hr className="my-3 h-0.5 bg-white" />
      {/* copyright */}
      <div className="">
        <p className="text-[14px] text-gray-400">
          (C) 2024 Technosys Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
