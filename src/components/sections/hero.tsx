import React from "react";
import Image from "next/image";
import Link from "next/link";
const hero = () => {
  return (
    <div className="rounded-b-2xl lg:rounded-b-4xl">
      <section className=" relative flex flex-col items-center justify-center bg-[url('/pattern.png')] bg-cover bg-center rounded-b-2xl lg:rounded-b-4xl">
        <div className="rounded-b-2xl lg:rounded-b-4xl absolute inset-0 bg-gradient-to-r from-[#d0dfb7a4] via-[#B1CA8C] to-[#97b569a8] opacity-100 pointer-events-none"></div>
        <section className="relative z-10 px-4 md:px-20  w-full h-full flex flex-col items-center justify-center pt-4 md:pt-10 overflow-y-hidden rounded-b-2xl lg:rounded-b-4xl">
          <div className="w-full grid grid-cols-12 items-center justify-center text-center gap-8 ">
            <div className="col-span-12 lg:col-span-7  h-full  w-full">
              <div className="flex flex-col space-y-6">
                <h4 className="w-fit mx-auto lg:mx-0 flex items-center gap-2 pe-3 text-[10px] md:text-xs rounded-4xl text-[#1A2211] bg-[#F6FBF1] border border-[#FAFFFA]">
                  <span className="rounded-4xl py-1 px-4 text-[#FAFFFA] bg-[#3D4E3C] border border-[#5C7059]">
                    Achievement
                  </span>
                  Fastest growing app in 2025 🎉
                </h4>

                <div>
                  <div className="lg:text-start text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#141A14] flex- ">
                    <h1 className="flex items-center justify-center lg:justify-start text-center lg:text-start mb-2">
                      {" "}
                      Craving something{" "}
                      <span className="hidden xl:flex items-center w-fit ps-3">
                        {" "}
                        <Image
                          width={50}
                          height={50}
                          src="/smiling _emoji.png"
                          alt=""
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/cup_emoji.png"
                          alt=""
                        />{" "}
                      </span>
                    </h1>{" "}
                    delicious? <br className="lg:hidden" />
                    <span className="text-[#262F2566]">It’s on the way!</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl- text-[#262F25] lg:text-start font-semibold">
                    Download for hot meals, farm-fresh fruits,{" "}
                    <br className="lg:hidden" /> and pantry{" "}
                    <br className="hidden lg:inline" /> staples—delivered with
                    care.
                  </h3>
                </div>
                <div className="mx-auto">
                  <span className="md:hidden flex space-x-2 items-center w-fit ps-3">
                    {" "}
                    <Image
                      width={50}
                      height={50}
                      src="/smiling _emoji.png"
                      alt=""
                    />
                    <Image width={50} height={50} src="/cup_emoji.png" alt="" />{" "}
                  </span>
                </div>
                {/* Downloads */}
                <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex gap-4 items-center order-2 lg:order-1 col-span-2 mx-auto lg:mx-0">
                    <Link href="#" className="shadow-lg shadow-[#A6A6A6]">
                      <Image
                        width={150}
                        height={50}
                        src="/Appstore.png"
                        alt=""
                        className="w-28 sm:w-40"
                      />
                    </Link>
                    <Link href="#" className="shadow-lg shadow-[#A6A6A6]">
                      <Image
                        width={150}
                        height={50}
                        src="/playstore.png"
                        alt=""
                        className="w-28 sm:w-40"
                      />
                    </Link>
                  </div>
                  <div className="order-1 lg:order-2 col-span-2 mx-auto lg:mx-0">
                    {/* Happy Customers Section */}
                    <div className="flex items-center gap-3 rounded-full  py-2 w-fit">
                      {/* Avatars */}
                      <div className="flex -space-x-3">
                        <div className="rounded-full border border-[#F3F6F3] bg-[#D6D6E1]">
                          <Image
                            src="/avatar1.png"
                            alt="Customer 1"
                            width={40}
                            height={40}
                            className="w-6 sm:w-10"
                          />
                        </div>
                        <div className="rounded-full border border-[#F3F6F3] bg-[#FFE388]">
                          <Image
                            src="/avatar2.png"
                            alt="Customer 1"
                            width={40}
                            height={40}
                            className="w-6 sm:w-10"
                          />
                        </div>
                        <div className="rounded-full border border-[#F3F6F3] bg-[#FFCCD4]">
                          <Image
                            src="/avatar3.png"
                            alt="Customer 1"
                            width={40}
                            height={40}
                            className="w-6 sm:w-10"
                          />
                        </div>
                        <div className="rounded-full border border-[#F3F6F3] bg-[#B8E2C4]">
                          <Image
                            src="/avatar4.png"
                            alt="Customer 1"
                            width={40}
                            height={40}
                            className="w-6 sm:w-10"
                          />
                        </div>
                      </div>
                      {/* Text and Rating */}
                      <div className="flex flex-col justify-center font-semibold text-[10px] sm:text-sm">
                        <span className="text-[#333333] text-[10px] sm:text-sm">
                          Our Happy Customers
                        </span>
                        <span className="flex items-center  text-[10px] sm:text-sm text-bold text-[#6A6969] mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#F59E0B"
                            viewBox="0 0 20 20"
                            width="16"
                            height="16"
                            className="inline-block mr-1"
                          >
                            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                          </svg>
                          4.85{" "}
                          <span className="text-[#6A6969] ml-1 font-medium">
                            (12.8k reviews)
                          </span>
                        </span>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="hidden, flex lg:justify-end justify-center col-span-12 lg:col-span-5 w-full mx-auto py-4 sm:pb-8 md:pb-10">
              <div className="bg-gray-50 rounded-3xl  w-fit mx-auto -mb-40 md:-mb-0 ">
                <Image
                  width={150}
                  height={600}
                  src="/mobile.png"
                  className="h-full w-full hidden md:block"
                  alt=""
                />
                <Image
                  width={150}
                  height={600}
                  src="/mobilee.png"
                  className="h-full w-full md:hidden"
                  alt=""
                />
              </div>{" "}
            </div>
          </div>{" "}
        </section>
      </section>
    </div>
  );
};

export default hero;
