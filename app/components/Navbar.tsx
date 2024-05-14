"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import logoImg from "../.././public/images/coral-logo.png";
import { BsPersonFill } from "react-icons/bs";
import { BiSolidShoppingBag } from "react-icons/bi";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";

const Navbar = () => {
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between flex-wrap  p-6 font-sans">
        <div className="w-full flex-grow flex lg:items-center lg:w-auto">
          <button className="hidden lg:flex items-center py-2 lg:w-[181.55px]  hover:text-gray-500 transition-colors duration-300 ease-in-out">
            <FiSearch className="text-xl" />
          </button>

          <div className="flex items-center flex-shrink-0 text-white lg:mx-auto">
            <Image src={logoImg} alt="Logo" />
          </div>
          <div className="ml-auto lg:hidden">
            <button
              id="dropdownMenuIconButton"
               className="inline-flex items-center p-2 text-sm font-medium text-center rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
              type="button"
              onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}
            >
              <HiBars3 className="text-xl"/>
            </button>
          </div>
          <div className="text-sm text-right lg:flex hidden font-roboto text-[16px] ">
            <Link
              href="#account"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 mr-4 transition-colors duration-300 ease-in-out"
            >
              <span className="flex  items-center  text-[16px]">
                
                <BsPersonFill  className="text-xl mr-1 h-[25px] w-[25px] " /> Account
              </span>
            </Link>
            <Link
              href="#shopping"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 transition-colors duration-300 ease-in-out"
            >
              <span className="flex items-center text-[16px]">
                 <BiSolidShoppingBag className="text-xl mr-1 h-[25px] w-[25px] " /> Shopping
              </span>
            </Link>
          </div>
        </div>
        <div
          id="dropdownDots"
          className={`${
            isTopMenuOpen ? "block" : "hidden"
          }  z-10 bg-white lg:hidden divide-y divide-gray-100 rounded-lg ml-auto mt-4 shadow w-44`}
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <Link
                href="#account"
                className="block mt-4 lg:inline-block ml-5 lg:mt-0  hover:text-gray-500 mr-4 transition-colors duration-300 ease-in-out"
              >
                <span className="flex">
                  <BsPersonFill className="text-xl mr-1" /> Account
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#shopping"
                className="block mt-4 lg:inline-block ml-5 mb-3 lg:mt-0 primary hover:text-gray-500 transition-colors duration-300 ease-in-out"
              >
                <span className="flex">
                  <BiSolidShoppingBag className="text-xl mr-1" /> Shopping
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="border-t-2 border-gray-200" />
      <nav className="flex justify-center  font-sans p-6">
        <div className="flex justify-between w-full  mx-auto">
          <Link
            href="#shopping"
            className="hover: transition-colors lg:block hidden duration-300 ease-in-out"
          >
            Jewelry & Accessories
          </Link>
          <Link
            href="#shopping"
            className="hover: transition-colors lg:block hidden duration-300 ease-in-out"
          >
            Clothing & Shoes
          </Link>
          <Link
            href="#shopping"
            className="hover: transition-colors lg:block hidden duration-300 ease-in-out"
          >
            Home & Living
          </Link>
          <Link
            href="#shopping"
            className="hover: transition-colors lg:block hidden duration-300 ease-in-out"
          >
            Wedding & Party
          </Link>
          <Link
            href="#shopping"
            className="hover: transition-colors lg:block hidden duration-300 ease-in-out"
          >
            Toys & Entertainment
          </Link>
          <Link
            href="#shopping"
            className="hover: transition-colors lg:block hidden duration-300 ease-in-out"
          >
            Art & Collectibles
          </Link>
        </div>
      </nav>
    </div> 
  );
};

export default Navbar;
