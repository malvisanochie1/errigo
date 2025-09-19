"use client";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import LogoCarousel from "@/components/sections/logos";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import Location from "@/components/sections/location";
import Faqs from "@/components/sections/faqs";
import Testimonial from "@/components/sections/testimonial";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";
const page = () => {
  return (
    <div
      className="bg-[#FAFFFA] sm:bg-[#ffffff]"
      style={{ fontFamily: "Sharp Sans, sans-serif" }}
    >
      <section className="bg-gradient-to-r from-[#d0dfb7a4] via-[#B1CA8C] to-[#97b56979] rounded-b-4xl ">
        <Navbar />
        <Hero />
      </section>
      <LogoCarousel />
      <Services />
      <Products />
      <div className="px-3">
        <Location />
      </div>
      <div className="mx-auto container">
        <Faqs />
      </div>
      <Testimonial /> 
      <CallToAction /> 
      <Footer />{" "}
    </div>
  );
};

export default page;
