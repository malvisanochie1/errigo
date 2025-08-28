import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CancelIcon from "../ui/CancelIcon";

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "faqs", label: "FAQs" },
  { id: "reviews", label: "Reviews" },
  { id: "countries", label: "Countries" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const [showDesktopNav, setShowDesktopNav] = useState(true);

  // Navigation links
  const navLinks = (
    <ul className="font-semibold text-[#292929] hover-[#96b569] flex flex-col lg:flex-row justify-center items-center space-y-10  h-full lg:space-y-0 lg:space-x-6  bg-gradient-to-t md:bg-gradient-to-b from-[#fafffa49] to-[#FAFFFA] rounded-2xl px-10 py-3 md:border-t border-[#FAFFFA] sticky">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? "border-b-2 rounded-4xl border-[#96b569] px-2 pb-1.5 text-[#96b569]"
                : "transition-colors duration-300 ease-in-out hover:text-[#96b569]"
            }
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  // Detect section in view
  useEffect(() => {
    const handleScroll = () => {
      let current = "services";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Show/hide desktop nav based on scroll direction
  useEffect(() => {
    let lastY = window.scrollY;
    const controlNav = () => {
      const currentY = window.scrollY;
      if (currentY < lastY - 5) {
        setShowDesktopNav(true);
      } else if (currentY > lastY + 5) {
        setShowDesktopNav(false);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", controlNav);
    return () => window.removeEventListener("scroll", controlNav);
  }, []);

  return (
    <div>
      <nav>
        <div className="flex items-center justify-between bg-gradient-to-r from-[#d0dfb7a4] via-[#B1CA8C] to-[#97b569a8] px-6 md:px-16 py-6 lg:pt-6 ">
          {/* logo */}
          <div className="text-[25px] leading-0 font-bold font-Montserrat flex items-center gap-2 text-[#3D4E3C]">
            <Image
              src="/favi.png"
              width={27}
              height={33}
              alt="eriggo favi icon"
            />
            <span className="hidden md:flex">eriggo</span>
          </div>

          {/* Desktop Nav with Slide Animation */}
          <AnimatePresence>
            {showDesktopNav && (
              <motion.div
                initial={{ y: -70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -70, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:flex items-center sticky top-4"
              >
                {navLinks}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-end items-center gap-x-4">
            <div className="w-10 h-10">
              <Link
                href="apple.com"
                className="bg-[#FCBB4D] rounded-full grid place-content-center w-10 h-10"
              >
                <Image src="/apple.png" width={15} height={15} alt="" />
              </Link>
            </div>
            <div className="w-10 h-10">
              <Link
                href="apple.com"
                className="bg-[#FFA971] rounded-full grid place-content-center w-10 h-10"
              >
                <Image src="/GooglePlay.png" width={15} height={15} alt="" />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <Image
                width={40}
                height={40}
                src="/amborger.png"
                alt="toggle Icon"
                className="max-w-7"
              />
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-[#97b569] bg-red-900- bg-gradient-to-r- from-[#d0dfb7a4] via-[#B1CA8C] to-[#97b569fd]  shadow-lg z-50 flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-[25px] font-bold font-Montserrat flex items-center gap-2 text-[#3D4E3C]">
                  <Image
                    src="/favi.png"
                    width={27}
                    height={33}
                    alt="eriggo favi icon"
                  />
                  <span>eriggo</span>
                </div>
                <CancelIcon onClick={() => setMobileOpen(false)} />
              </div>
              {navLinks}
              <div className="flex gap-4 mt-8">
                <Link
                  href="apple.com"
                  className="bg-[#FCBB4D] rounded-full grid place-content-center w-10 h-10"
                >
                  <Image src="/apple.png" width={15} height={15} alt="" />
                </Link>
                <Link
                  href="apple.com"
                  className="bg-[#FCBB4D] rounded-full grid place-content-center w-10 h-10"
                >
                  <Image src="/GooglePlay.png" width={15} height={15} alt="" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
