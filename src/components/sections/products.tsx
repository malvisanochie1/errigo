import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import { errigo } from "../texts/constants";
import { useState } from "react";

const Products = () => {
  const [activeTab, setActiveTab] = useState("download");

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
          <div className="bg-[#FAFFFA] rounded-2xl border-2 border-[#a4bf7b8f] shadow-lg px-4 py-2 flex items-center justify-center gap-8 shadow-[#96B56933] mb-8">
            {tabButton("Download", "download")}
            {tabButton("Vendors", "vendors")}
            {tabButton("Riders", "riders")}
          </div>
          {/* Tab Content */}
          {activeTab === "download" && (
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
                  <Link href={errigo.ios} className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm">
                    Download for IOS
                  </Link>
                  <Link href={errigo.android} className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm">
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
          {activeTab === "vendors" && (
            <>
              <div id="vender" className="mb-8 text-center">
                <h2 className="text-4xl font-semibold mb-4 text-[#222]">
                  Become a Vendor
                </h2>
                <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                  Grow your business with Errigo. Join our network and reach
                  thousands of customers daily. No upfront costs, easy
                  onboarding, and dedicated support.
                </p>
                <Link href={errigo.partner} className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm">
                  Partner with us
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl px-4">
                <div className="flex justify-center">
                  <Image
                    src="/vendor1.jpg"
                    alt="Grocery delivery"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[250px]"
                  />
                </div>
                <div className="flex justify-center items-end h-full">
                  <Image
                    src="/vendor3.jpg"
                    alt="Prepared meals"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[200px]"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/vendor2.jpg"
                    alt="Family enjoying meal"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[250px]"
                  />
                </div>
              </div>
            </>
          )}
          {activeTab === "riders" && (
            <>
              <div id="rider" className="mb-8 text-center">
                <h2 className="text-4xl font-semibold mb-4 text-[#222]">
                  Become a Rider
                </h2>
                <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                  Deliver with Errigo and earn more. Flexible hours, instant
                  payouts, and bonuses for top performers. Register now to get
                  started!
                </p>
                <Link href={errigo.rider} className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm">
                  Join as a Rider
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl px-4">
                <div className="flex justify-center">
                  <Image
                    src="/rider1.jpg"
                    alt="Grocery delivery"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[250px]"
                  />
                </div>
                <div className="flex justify-center items-end h-full">
                  <Image
                    src="/rider2.jpg"
                    alt="Prepared meals"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[200px]"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/rider3.png"
                    alt="Family enjoying meal"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[250px]"
                  />
                </div>
              </div>
            </>
          )}
        </section>
      </div>

      <div className="md:hidden">
        <div className=" bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-3 md:px-8">
          <section className="w-full pt-16 pb-5 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-2 md:p-12  flex flex-col items-center">
            <div className="text-[#5C7937] text-center text-base font-semibold mb-2">
              Become Our{" "}
              <span className="ms-1 px-1.5 py-0.5 rounded-lg bg-[#FEEAC7]">
                Customer{" "}
              </span>{" "}
            </div>
            <div className="mb-8 text-center ">
              <h2 className="text-2xl font-semibold mb-4 text-[#222] bg-amber-">
                Get meals that taste like home!{" "}
              </h2>
              <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                we deliver wholesome, chef-prepared meals that satisfy every
                taste to your doorstep—because feeding should be joyful, not a
                chore
              </p>
              <div className="flex flex-col gap-4 mb-8-">
                <button className="bg-[#374a3d] text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-[#2c3a2f] transition text-sm ">
                  Download for IOS
                </button>
                <button className="bg-[#FAFFFA] text-[#3D4E3C] px-6 py-3 rounded-xl font-bold shadow transition text-sm ">
                  Download for Android
                </button>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <Image
                src="/meals_mobile1.png"
                alt="Grocery delivery"
                width={350}
                height={350}
                className="rounded-2xl object-cover w-full h-[250px]-"
              />
            </div>
          </section>
        </div>

        <div className=" bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-3 md:px-8">
          <section className="w-full pt-16 pb-2 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-2 md:p-12  flex flex-col items-center">
            <div className="text-[#5C7937] text-center text-base font-semibold mb-2">
              Become Our{" "}
              <span className="ms-1 bpx-1.5 py-0.5 rounded-lg bg-[#FEEAC7]">
                Partner{" "}
              </span>{" "}
            </div>
            <div className="mb-8 text-center ">
              <h2 className="text-2xl font-semibold mb-4 text-[#222] bg-amber-">
                Eriggo Partners earn 40% more.{" "}
              </h2>
              <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
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

            <div className="flex justify-center w-full">
              <Image
                src="/meals_mobile2.png"
                alt="Grocery delivery"
                width={350}
                height={350}
                className="rounded-2xl object-cover w-full h-[250px]-"
              />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4 text-[#222] mt-4">
                Expand Your Reach{" "}
              </h2>
              <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
                Get instant access to 10,000+ active foodies searching for meals
                like yours daily.
              </p>{" "}
            </div>
          </section>
        </div>

        <div className=" bg-gradient-to-b from-[#FAFFFA] to-[#ffffff] pt-10 px-3 md:px-8">
          <section className="w-full pt-16 pb-5 bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] rounded-3xl p-2 md:p-12  flex flex-col items-center">
            <div className="text-[#5C7937] text-center text-base font-semibold mb-2">
              Become Our{" "}
              <span className="ms-1 px-1.5 py-0.5 rounded-lg bg-[#FEEAC7]">
                Rider{" "}
              </span>{" "}
            </div>
            <div className="mb-8 text-center ">
              <h2 className="text-2xl font-semibold mb-4 text-[#222] bg-amber-">
                Deliver with Eriggo{" "}
              </h2>
              <p className="text-lg text-[#444] max-w-xl mx-auto mb-6">
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

            <div className="flex justify-center w-full">
              <Image
                src="/meals_mobile3.png"
                alt="Grocery delivery"
                width={350}
                height={350}
                className="rounded-2xl object-cover w-full h-[250px]-"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
