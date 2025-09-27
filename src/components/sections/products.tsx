import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import { errigo } from "../texts/constants";
import { useState } from "react";
import MobileMeals from "./mobileMeals";
const Products = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const tabButton = (label: string, tab: string) => (
    <button
      className={
        `px-3 py-3 rounded-lg font-bold transition text-sm border-b-2 ` +
        (activeTab === tab
          ? "bg-gradient-to-b from-[#e3e6df] to-[#B1CA8C] text-[#292929] border-[#a4bf7b] shadow"
          : "text-[#292929] border-transparent hover:bg-[#f6fbf1]")
      }
      onClick={() => setActiveTab(tab)}
    >
      {label}
    </button>
  );

  return (
    <div id="products" className="">
      <div className="hidden md:block bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-4- md:px-8">
        <section className="w-full py-16 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-8 md:p-12  flex flex-col items-center">
          <div className="bg-[#FAFFFA] rounded-2xl border-2 border-[#a4bf7b8f] shadow-lg- px-4 py-2 flex items-center justify-center gap-8 shadow-[hsl(84,34%,56%)] mb-8">
            {tabButton("Customer", "customer")}
            {tabButton("Partner", "partner")}
            {tabButton("Courier", "courier")}
          </div>
          {/* Tab Content */}
          {activeTab === "customer" && (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-semibold mb-4 text-[#222]">
                  Meals that taste like home!
                </h2>
                <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                  we deliver wholesome, chef-prepared meals that satisfy every
                  taste to your doorstep—because feeding should be joyful, not a
                  chore
                </p>
                <div className="flex justify-center gap-4 mb-8-">
                  <Link
                    href={errigo.ios}
                    className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm"
                  >
                    Download for IOS
                  </Link>
                  <Link
                    href={errigo.android}
                    className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm"
                  >
                    Download for Andriod
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl px-4">
                <div className="flex justify-center">
                  <Image
                    src="/Meals1.png"
                    alt="Grocery delivery"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[250px]"
                  />
                </div>
                <div className="flex justify-center items-end h-full">
                  <Image
                    src="/Meals2.png"
                    alt="Prepared meals"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[200px]"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/Meals3.png"
                    alt="Family enjoying meal"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[250px]"
                  />
                </div>
              </div>
            </>
          )}
          {activeTab === "partner" && (
            <>
              <div id="vender" className="mb-8 text-center">
                <h2 className="text-4xl font-semibold mb-4 text-[#222]">
                  Eriggo Partners earn 40% more.{" "}
                </h2>
                <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                  Grow Your Business with Eriggo. Join the fastest-growing food
                  network today! No upfront costs.
                </p>
                <Link
                  href={errigo.partner}
                  target="blank"
                  className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm flex items-baseline w-fit mx-auto"
                >
                  Partner with us{" "}
                  <FaArrowUpLong className="rotate-45 ps-2 text-lg" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl px-4">
                <div className="flex justify-center text-[#292929]">
                  <div>
                    <Image
                      src="/vendor1.jpg"
                      alt="Grocery delivery"
                      width={350}
                      height={350}
                      className="rounded-2xl object-cover w-full h-[250px]"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 mt-4">
                        Expand Your Reach{" "}
                      </h2>
                      <p className="">
                        Get instant access to 10,000+ active foodies searching
                        for meals like yours daily.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-end h-full text-[#292929]">
                  <div>
                    <Image
                      src="/vendor2.jpg"
                      alt="Prepared meals"
                      width={350}
                      height={350}
                      className="rounded-2xl object-cover w-full h-[230px]"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 mt-4">
                        Over 2000+ businesses trust us{" "}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center text-[#292929]">
                  <div>
                    <Image
                      src="/vendor3.jpg"
                      alt="Grocery delivery"
                      width={350}
                      height={350}
                      className="rounded-2xl object-cover w-full h-[250px]"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 mt-4">
                        Data-Driven Growth{" "}
                      </h2>
                      <p className="">
                        Real-time dashboard shows your top-selling items, peak
                        hours, and customer feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "courier" && (
            <>
              <div id="rider" className="mb-8 text-center">
                <h2 className="text-4xl font-semibold mb-4 text-[#222]">
                  Deliver with Eriggo{" "}
                </h2>
                <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                  Register to get paid and earn bonuses, work at your own time.
                </p>
                <Link
                  href={errigo.partner}
                  className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm flex items-baseline w-fit mx-auto"
                >
                  Become a rider{" "}
                  <FaArrowUpLong className="rotate-45 ps-2 text-lg" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl px-4">
                <div className="flex justify-center">
                  <Image
                    src="/rider1.jpg"
                    alt="Grocery delivery"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[280px] object-top"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/rider2.jpg"
                    alt="Family enjoying meal"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[280px] object-top"
                  />
                </div>
              </div>
            </>
          )}
        </section>
      </div>

      <div className="md:hidden">
        <MobileMeals />
      </div>
    </div>
  );
};

export default Products;
