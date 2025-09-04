import React from "react";
import Image from "next/image";
import Link from "next/link";
import { errigo } from "../texts/constants";
const callToAction = () => {
  return (
    <div className="w-full p-3 sm:p-8">
      <div
        className="hidden relative w-full rounded-xl overflow-hidden min-h-[417px]- sm:flex items-center justify-center"
        style={{
          backgroundImage: "url('/Container-call-to.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-w-full h-full  bg-[#F59E0B]- from-[#FDD28A]- via-[#FCBB4D]- to-[#F59E0B]-">
          <div className="absolute h-full w-full bg-gradient-to-t- from-[#fdd38ad3]- via-[#fcbc4d83]- to-[#F59E0B]-">
            {" "}
          </div>
          {/* content */}
          <div className="bg-green-500- min-w-full  p-4 relative">
            <div className="md:flex md:flex-col  md:items-end md:justify-end md:text-end text-[#141A14] text-3xl sm:text-4xl font-semibold p-8  md:py-20">
              <h2>
                <span className="text-[#141A1499] hidden md:inline">
                  {" "}
                  Skip the wait,{" "}
                </span>{" "}
                download now! <br />{" "}
                <span className="text-xl sm:text-2xl">
                  {" "}
                  Get your first meal in 10 minutes{" "}
                </span>
              </h2>

              <div className="h-full flex items-center justify-between  gap-4 mt-4">
                <div className="relative flex flex-col md:flex-row gap-4 mt-4 mb-16 sm:mb-20 md:mb-0">
                  <Image
                    loading="lazy"
                    src="/Key-Icons.png"
                    className="hidden md:flex md:absolute z-50 -left-30 bottom-0 max-w-2xl md:max-w-xl lg:max-w-4xl object-cover rounded-xl bg-[#FAFFFA33]"
                    width={50}
                    height={10}
                    alt=""
                  />
                  <Link href={errigo.android}>
                    <Image
                      src="/Appstorecall.png"
                      loading="lazy"
                      width={400}
                      height={200}
                      className="max-w-40"
                      alt=""
                    />
                  </Link>
                  <Link href={errigo.ios}>
                    <Image
                      src="/Applestore.png"
                      loading="lazy"
                      width={400}
                      height={200}
                      className="max-w-40"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="h-full flex items-center relative mb-8">
                  <Image
                    loading="lazy"
                    src="/Key-Icons.png"
                    className="md:hidden max-h-20  max-w-20 md:max-w-40 object-fit rounded-xl bg-[#FAFFFA33]"
                    width={50}
                    height={10}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* content */}
        </div>
      </div>

      <div className="sm:hidden">
        <div className="relative w-full">
          {/* Background Image */}
          <Image
            src="/Call_to_action_bg.png"
            alt="background image"
            fill
            className="object-cover object-center- object-bottom z-10 rounded-2xl"
          />

          {/* Content */}
          <div className="relative w-full py-10 px-4 z-20 min-h-[335px] flex flex-col justify-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#292929]">
                Download the app
              </h2>
              <p className="text-base font-medium text-[#333333] my-5">
                Get your first meal in 10 minutes
              </p>
            </div>

            <div className="h-full flex items-center justify-between  gap-4 mt-4">
              <div className="relative flex flex-col md:flex-row gap-4 mt-4 mb-16 sm:mb-20 md:mb-0">
                <Link href={errigo.android}>
                  <Image
                    src="/Appstorecall.png"
                    loading="lazy"
                    width={300}
                    height={150}
                    className="max-w-40"
                    alt=""
                  />
                </Link>
                <Link href={errigo.ios}>
                  <Image
                    src="/Applestore.png"
                    loading="lazy"
                    width={300}
                    height={150}
                    className="max-w-40"
                    alt=""
                  />
                </Link>
              </div>
              <div className="h-full flex items-center relative mb-8">
                <Image
                  loading="lazy"
                  src="/Key-Icons.png"
                  className="md:hidden max-h-20  max-w-20 md:max-w-40 object-fit rounded-xl bg-[#FAFFFA33]"
                  width={50}
                  height={10}
                  alt=""
                />
              </div>
            </div>
            <div className="h-[135px] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default callToAction;
