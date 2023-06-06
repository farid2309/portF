"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Navbar() {
  // State to control the visibility of the mobile menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle the click event on the mobile menu button
  const handleClick = () => {
    setShowMenu(!showMenu); // Toggle the visibility of the mobile menu
  };

  // Function to handle the click event on a menu item
  const handleMenuItemClick = () => {
    setShowMenu(false); // Hide the mobile menu when a menu item is clicked
  };

  return (
    <section className="bg-transparent backdrop-blur-sm p-4 absolute w-screen z-50">
      {/* Logo and Title */}
      <div className="flex justify-between px-5 items-center ">
        <div className="drop-shadow-xl">
          {/* Logo */}
          <h1 className="uppercase text-xs md:text-xl xl:text-3xl font-bold tracking-widest text-[#28282B]">
            farid rahimli
          </h1>
          {/* Title */}
          <h1 className="uppercase text-xs md:text-md xl:text-2xl font-normal tracking-widest text-[#28282B]">
            project portfolio
          </h1>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center gap-5">
            <Link
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              href="#"
            >
              CV
            </Link>
            <Link
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              href="#"
            >
              Contact
            </Link>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <div className="text-2xl md:hidden xl:hidden text-[#28282B]">
          <button onClick={handleClick} className="m-0 p-0">
            {/* Display "close" icon when the mobile menu is open, and "bars" icon otherwise */}
            {showMenu ? <AiOutlineCloseSquare /> : <HiBars4 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute z-50 h-[600px]	 w-screen bg-transparent backdrop-blur-md top-10 left-0 flex justify-center items-center mt-5 text-[#28282B] drop-shadow-lg">
          <ul className="flex justify-start items-center flex-col mt-5">
            {/* Menu Items */}
            <Link
              href="#"
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              onClick={handleMenuItemClick}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              onClick={handleMenuItemClick}
            >
              CV
            </Link>
            <Link
              href="#"
              className="text-sm py-4 uppercase font-bold tracking-widest underline decoration-[#DFD8C5] hover:decoration-4 hover:px-5 transition-all duration-700"
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Navbar;
