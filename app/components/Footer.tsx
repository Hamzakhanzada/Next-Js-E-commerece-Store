import React from "react";
import Image from "next/image";
import logo from "../../public/images/coral-logo.png";
import icons from "../../public/images/icons_payment.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container mt-[140px] mx-auto p-6 flex justify-between flex-wrap">
          <div>
          <div className="text-teal-600">
                <Image src={logo} alt="Logo" />
              </div>
              <p className="mt-4 font-sans max-w-xs text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
              <ul className="mt-8 flex gap-6">
                <li>
                  <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookF className="h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <FaTwitter className="h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <FaLinkedinIn className="h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <FaInstagram className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
          </div>
          <div className="catalog">
                <p className="font-medium text-gray-900">CATALOG</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Necklaces
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Hoodies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Jewelry Box
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      T-Shirt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      jacket
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="catalog">
                <p className="font-medium text-gray-900">ABOUT US</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link

                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Our Producers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="catalog">
                <p className="font-medium text-gray-900">CUSTOMER SERVICES</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Track Your Order
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Product Care & Repair
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Book an Appointment
                    </Link>
                  </li>
                  <li>
                    <Link

                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Shipping & Returns
                    </Link>
                  </li>
                </ul>
              </div>
        </div>
        <div className="bg-black ">
        <div className="container justify-around flex-wrap flex mx-auto h-[auto]">
          <h5 className="text-white mt-[15px] mb-[15px]">© 2022 Coral , Inc.</h5>
          <Image className="h-[24px] mt-[15px] mb-[15px]" src={icons} alt="Logo" />
          <h6  className="text-white mt-[15px] mb-[15px] flex">Scroll to top <MdArrowUpward className="mt-1"/></h6>
        </div>
        </div>
      </footer>
     
    </>
  );
};

export default Footer;
