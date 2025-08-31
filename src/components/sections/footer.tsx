import React from "react";
import Image from "next/image";
import Link from "next/link";
import { errigo } from "../texts/constants";
const footer = () => {
  return (
    <section className="w-full bg-[#141A14] rounded-t-2xl">
      <div className="h-full w-full">
        <div className="h-5 sm:h-20 w-full"></div>
        <div className="h-full w-full relative ">
          <Image
            fill
            src="/pattern.png"
            className="h-full object-cover"
            alt=""
          />
          <div className=" absolute w-full h-full bg-[#141A14]/95"></div>
          {/* content */}

          <div className="container mx-auto">
            <div className="px- mx-auto p-4 h-full flex flex-col md:flex-row space-y-4 md:space-x-10 relative">
              <div className="md:w-4/12 relative">
                <Link href="/" className="text-2xl font-bold mb-4">Eriggo</Link>
                <p className="md:text-base text-gray-400">
                  {" "}
                  A digital platform that allows you satisfy all your cravings
                  from the comfort of yor home!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 font-medium justify-between w-full">
                <div className="">
                  <h4 className="font-bold text-[#FAFFFA] text-xs md:text-base mb-3">
                    Company
                  </h4>
                  <ul className="text-gray-400 text-xs md:text-sm space-y-4 ">
                    {/* <li className="font-semibold">
                      <Link href="/#customer">Customer</Link>{" "}
                    </li> */}
                    <li className="font-semibold">
                      <Link href="/#products">Vendor</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="/#products">Rider</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="/#faqs">FAQ</Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="font-bold text-[#FAFFFA] text-xs md:text-base mb-3">
                    Legal
                  </h4>
                  <ul className="text-gray-400 text-xs md:text-sm space-y-4 ">
                    <li className="font-semibold">
                      <Link href="/Privacy_policy">Privacy policy</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="/Term_of_use">Term of use</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="/Refund_policy">Refund policy</Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="font-bold text-[#FAFFFA] text-xs md:text-base mb-3">
                    Media
                  </h4>
                  <ul className="text-gray-400 text-xs md:text-sm space-y-4 ">
                    <li className="font-semibold">
                      <Link href="#">Instagram</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="#">Facebook</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="#">Tiktok</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="#">X</Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="font-bold text-[#FAFFFA] text-xs md:text-base mb-3">
                    Contact
                  </h4>
                  <ul className="text-gray-400 text-xs md:text-sm space-y-4 ">
                    <li className="font-semibold">
                      <Link href="#">{errigo.phone}</Link>{" "}
                    </li>
                    <li className="font-semibold">
                      <Link href="#">{errigo.email}</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="border-2- mb-5 sm:my-10 border-[#E3E2E2]"/>
            <div className="h-64- px-2">
              <Image width={1000} height={400} className="object-scale-down relative mx-auto" src="/footer_logo.png" alt="" />
            </div>
          </div>

          {/* End of content  */}
        </div>
      </div>
    </section>
  );
};

export default footer;
