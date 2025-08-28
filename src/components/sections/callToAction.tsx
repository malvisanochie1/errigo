import React from "react";
import Image from "next/image";
import Link from "next/link";
const callToAction = () => {
  return (
    <div className="w-full p-3 sm:p-8">
      <div
        className="relative w-full rounded-xl overflow-hidden min-h-[417px]- flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, #F7C16B 0%, #F7C16B 100%)",
        }}
      >
        {/* Background image */}
        <Image
          src="/Noise.png"
          alt="Call to Action background"
          fill
          style={{ objectFit: "cover", opacity: 0.7 }}
          className="absolute inset-0 h-full w-40"
          priority
        />
        {/* Overlay content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-w-full h-full  bg-[#F59E0B] from-[#FDD28A] via-[#FCBB4D] to-[#F59E0B]">
          <Image
            loading="lazy"
            src="/healthy-cuisine.png"
            className="absolute left-0 -bottom-[64px] sm:-bottom-10 md:bottom-0 max-w-2xl md:max-w-xl lg:max-w-3xl object-cover"
            width={1000}
            height={100}
            alt=""
          />

          <Image
            priority
            src="/background.png"
            className="absolute  w-full object-cover"
            fill
            alt=""
          />

          <div className="absolute h-full w-full bg-gradient-to-t from-[#fdd38ad3] via-[#fcbc4d83] to-[#F59E0B]">
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
                  <Link href="#">
                    <Image
                      src="/Appstorecall.png"
                      loading="lazy"
                      width={200}
                      height={100}
                      className="max-w-40"
                      alt=""
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/Applestore.png"
                      loading="lazy"
                      width={200}
                      height={100}
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
    </div>
  );
};

export default callToAction;
