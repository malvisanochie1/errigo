"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";

const page = () => {
  return (
    <div className="bg-white text-gray-600">
      <Navbar />
      <div className="py-5 sm:py-10 md:py-20 px-3">
        <div className="max-w-lg w-full border min-h-screen mx-auto p-3 md:p-5 rounded-2xl">
          <div className="p-10 rounded-full grid place-content-center bg-amber-300 w-fit mx-auto">
            <Image
              width={100}
              height={100}
              src="/favi.png"
              className="max-w-6"
              alt=""
            />
          </div>
          <h1 className="text-center text-[#5C7937] text-xl md:text-2xl font-bold py-2 sm:py-3 md:py-4">
            EriggoApp
          </h1>
          <p className="text-lg md:text-xl text-center">
            Welcome to Eriggo😊 Nigeria&#39;s on-demand app delivering food,
            groceries, services & more in 30-40 minutes
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href={"#"}
              className="p-2 rounded-full border border-[#5C7937] w-9 h-9 grid place-content-center hover:bg-[#5C7937]/15 ease-in-out duration-300 transition"
            >
              <FaInstagram size={20} color="#5C7937" />
            </Link>
            <Link
              href={"#"}
              className="p-2 rounded-full border border-[#5C7937] w-9 h-9 grid place-content-center hover:bg-[#5C7937]/15 ease-in-out duration-300 transition"
            >
              <FaPhoneAlt size={15} color="#5C7937" />
            </Link>
            <Link
              href={"#"}
              className="p-2 rounded-full border border-[#5C7937] w-9 h-9 grid place-content-center hover:bg-[#5C7937]/15 ease-in-out duration-300 transition"
            >
              <RiFacebookFill size={20} color="#5C7937" />
            </Link>
          </div>

          <div className="w-full mt-5 space-y-3 flex flex-col">
            <Link
              className=" text-gray-200 w-full rounded-2xl font-semibold"
              href={"#"}
            >
              <div className="w-full py-2.5 sm:py-3 md:py-4 rounded-2xl px-4 sm:px-6 hover:bg-[#5C7937]/70 bg-[#5C7937]/80 flex justify-between items-center ease-in-out duration-300 transition text-lg">
                <span>Eriggo Whatsapp AI</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </Link>
            <Link
              className=" text-gray-200 w-full rounded-2xl font-semibold"
              href={"#"}
            >
              <div className="w-full py-2.5 sm:py-3 md:py-4 rounded-2xl px-4 sm:px-6 hover:bg-[#5C7937]/80 flex justify-between items-center ease-in-out duration-300 transition bg-[#5C7937]/10 text-[#5C7937] hover:text-gray-200 text-lg">
                <span>Vendor Signup</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </Link>
            <Link
              className=" text-gray-200 w-full rounded-2xl font-semibold"
              href={"#"}
            >
              <div className="w-full py-2.5 sm:py-3 md:py-4 rounded-2xl px-4 sm:px-6 hover:bg-[#5C7937]/80 flex justify-between items-center ease-in-out duration-300 transition bg-[#5C7937]/10 text-[#5C7937] hover:text-gray-200 text-lg">
                <span>Play Store</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </Link>
            <Link
              className=" text-gray-200 w-full rounded-2xl font-semibold"
              href={"#"}
            >
              <div className="w-full py-2.5 sm:py-3 md:py-4 rounded-2xl px-4 sm:px-6 hover:bg-[#5C7937]/80 flex justify-between items-center ease-in-out duration-300 transition bg-[#5C7937]/10 text-[#5C7937] hover:text-gray-200 text-lg">
                <span>Website</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
