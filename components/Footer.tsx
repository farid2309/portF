"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <section className="bg-[#FAF9F6] p-2 absolute w-full ">
      {/* Logo and Title */}
      <div className="flex justify-between px-2 items-center ">
        <div className="flex justify-evenly items-center">
          <SocialIcon
            className="hover:opacity-60"
            style={{ fontSize: 10 }}
            url="instagram.com"
            bgColor="#FAF9F6"
            fgColor="#DFD8C5"
          ></SocialIcon>
          <SocialIcon
            className="hover:opacity-60"
            url="twitter.com"
            bgColor="#FAF9F6"
            fgColor="#DFD8C5"
          ></SocialIcon>
        </div>
        <div className="drop-shadow-xl">
          {/* Logo */}
          <h1 className="uppercase text-[6px] md:text-sm xl:text-md font-bold tracking-widest text-[#28282B]">
            "Success is not final, failure is not fatal"
          </h1>
          {/* Title */}
          <h1 className="uppercase text-[6px] md:text-sm xl:text-md font-normal tracking-widest text-[#28282B] text-right">
            © anonymus
          </h1>
        </div>
        <div className="flex justify-evenly items-center">
          <SocialIcon
            className="hover:opacity-60"
            url="behance.com"
            bgColor="#FAF9F6"
            fgColor="#DFD8C5"
          ></SocialIcon>
          <SocialIcon
            className="hover:opacity-60"
            url="email"
            network="email"
            bgColor="#FAF9F6"
            fgColor="#DFD8C5"
          ></SocialIcon>
        </div>
      </div>
    </section>
  );
}

export default Footer;
