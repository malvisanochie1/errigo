"use client";

import { AutoChangeCard } from "../ui/autoCardChange";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import { errigo } from "../texts/constants";

// 1. Text cards data
const meals = [
  { id: 1, src: "/meals_mobile1.png", alt: "Happy seller" },
  { id: 2, src: "/meals_mobile2.png", alt: "Healthy meals" },
  { id: 3, src: "/meals_mobile3.png", alt: "Happy healthy family" },
];

// 2. Image cards data
const vendor = [
  {
    id: 1,
    header: "Expand Your Reach",
    description:
      "Get instant access to 10,000+ active foodies searching for meals like yours daily.",
    src: "/vendor-mobile1.png",
  },
  {
    id: 2,
    header: "Over 2000+ businesses trust us",
    description: "",
    src: "/vendor-mobile2.png",
  },
  {
    id: 3,
    header: "Data-Driven Growth",
    description:
      "Real-time dashboard shows your top-selling items, peak hours, and customer feedback.",
    src: "/vendor-mobile3.png",
  },
];

// 3. Mixed cards data
const rider = [
  { id: 1, src: "/rider_mobile1.png", alt: "A rider on bike" },
  { id: 2, src: "/rider_mobile2.png", alt: "A delivery agent " },
];

export default function MobileMeals() {
  return (
    <div className="">
      <div className=" bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-3 md:px-8">
        <section className="w-full pt-16 pb-5 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-2 md:p-12  flex flex-col items-center">
          <div className="text-[#5C7937] text-center text-base font-semibold mb-2">
            Become Our{" "}
            <span className="ms-1 px-1.5 py-0.5 rounded-lg bg-[#FEEAC7] font-bold">
              Customer{" "}
            </span>{" "}
          </div>
          <div className="mb-8 text-center ">
            <h2 className="text-2xl font-semibold mb-4 text-[#141A14] bg-amber-">
              Get meals that taste like home!{" "}
            </h2>
            <p className="text-base text-[#262F25] max-w-xl mx-auto mb-6">
              we deliver wholesome, chef-prepared meals that satisfy every taste
              to your doorstep—because feeding should be joyful, not a chore
            </p>
            <div className="flex flex-col gap-4 mb-8-">
              <button className="bg-[#3D4E3C] text-[#FAFFFA] px-7 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm w-[200px] mx-auto ">
                Download for IOS
              </button>
              <button className="bg-[#FAFFFA] text-[#3D4E3C] py-3 rounded-xl font-bold shadow transition text-sm w-[200px] mx-auto">
                Download for Android
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full">
            {/* 1. Text Cards */}
            <AutoChangeCard
              items={meals}
              interval={3000}
              renderItem={(item) => (
                <>
                  <div>
                    <div className="flex justify-center w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={1000}
                        height={700}
                        className="rounded-2xl object-cover min-w-full h-[250px]-"
                      />
                    </div>
                  </div>
                </>
              )}
            />
          </div>
        </section>
      </div>

      {/* 2. vendor section */}

      <div className=" bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-3 md:px-8">
        <section className="w-full pt-16 pb-2 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-2 md:p-12  flex flex-col items-center">
          <div className="text-[#5C7937] text-center text-base font-semibold mb-2">
            Become Our{" "}
            <span className="ms-1 px-1.5 py-0.5 rounded-lg font-bold bg-[#FEEAC7]">
              Vendor{" "}
            </span>{" "}
          </div>
          <div className="mb-8 text-center ">
            <h2 className="text-2xl font-semibold mb-4 text-[#141A14] bg-amber-">
              Eriggo Partners earn 40% more.{" "}
            </h2>
            <p className="text-base text-[#262F25] max-w-xl mx-auto mb-6">
              Grow Your Business with Eriggo. Join the fastest-growing food
              network today! No upfront costs.
            </p>
            <Link
              href={errigo.partner}
              className="text-[#3D4E3C] underline text-lg` flex justify-center text-center items-baseline font-semibold mb-3 "
            >
              Partner with us{" "}
              <FaArrowUpLong className="rotate-45 ps-2 text-lg" />
            </Link>
          </div>
          <AutoChangeCard
            items={vendor}
            interval={3000}
            renderItem={(item) => (
              <>
                <div className="flex justify-center w-full">
                  <Image
                    src={item.src}
                    alt="Grocery delivery"
                    width={1000}
                    height={700}
                    className="rounded-2xl object-cover min-w-full h-[250px]-"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-[#292929] mt-4">
                    {item.header}
                  </h2>
                  <p className="text-base text-[#292929] max-w-xl mx-auto mb-6">
                    {item.description}
                  </p>{" "}
                </div>
              </>
            )}
          />
        </section>
      </div>

      {/* 3. rider section */}

      <div className=" bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-3 md:px-8">
        <section className="w-full pt-16 pb-5 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-2 md:p-12  flex flex-col items-center">
          <div className="text-[#5C7937] text-center text-base font-semibold mb-2">
            Become Our{" "}
            <span className="ms-1 px-1.5 py-0.5 rounded-lg bg-[#FEEAC7] font-bold">
              Rider{" "}
            </span>{" "}
          </div>
          <div className="mb-8 text-center ">
            <h2 className="text-2xl font-semibold mb-4 text-[#141A14] bg-amber-">
              Deliver with Eriggo{" "}
            </h2>
            <p className="text-sm text-[#262F25] max-w-xl mx-auto mb-6">
              Register to get paid and earn bonuses, work at your own time..
            </p>
            <Link
              href={errigo.partner}
              className="text-[#3D4E3C] underline text-lg` flex justify-center text-center items-baseline font-semibold mb-3 "
            >
              Partner with us{" "}
              <FaArrowUpLong className="rotate-45 ps-2 text-lg" />
            </Link>
          </div>
          <AutoChangeCard
            items={rider}
            interval={3000}
            renderItem={(item) => (
              <>
                <div className="flex justify-center w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={700}
                    className="rounded-2xl object-cover min-w-full h-[250px]-"
                  />
                </div>
              </>
            )}
          />
        </section>
      </div>
    </div>
  );
}
