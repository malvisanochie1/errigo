import Image from "next/image";
import React from "react";

const countryStates = {
  Nigeria: [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ],
  Ghana: [
    "Ashanti",
    "Greater Accra",
    "Northern",
    "Volta",
    "Western",
    "Eastern",
    "Central",
    "Upper East",
    "Upper West",
    "Bono",
    "Bono East",
    "Ahafo",
    "Savannah",
    "North East",
    "Oti",
    "Western North",
  ],
  UK: ["England", "Scotland", "Wales", "Northern Ireland"],
  Canada: [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon",
  ],
};

type CountryKey = keyof typeof countryStates;

const Location = () => {
  const [selectedCountry, setSelectedCountry] =
    React.useState<CountryKey>("Nigeria");
  const contentRef = React.useRef<HTMLDivElement>(null);
  const scrollbarRef = React.useRef<HTMLDivElement>(null);
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const [scrollInfo, setScrollInfo] = React.useState({
    scrollTop: 0,
    scrollHeight: 1,
    clientHeight: 1,
  });

  // Sync thumb position with content scroll
  React.useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const onScroll = () => {
      setScrollInfo({
        scrollTop: content.scrollTop,
        scrollHeight: content.scrollHeight,
        clientHeight: content.clientHeight,
      });
    };
    content.addEventListener("scroll", onScroll);
    // Initial
    onScroll();
    return () => content.removeEventListener("scroll", onScroll);
  }, [selectedCountry]);

  // Handle dragging the thumb
  React.useEffect(() => {
    const thumb = thumbRef.current;
    const scrollbar = scrollbarRef.current;
    const content = contentRef.current;
    if (!thumb || !scrollbar || !content) return;
    let startY = 0;
    let startScroll = 0;
    let dragging = false;

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      startY = e.clientY;
      startScroll = content.scrollTop;
      document.body.style.userSelect = "none";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const deltaY = e.clientY - startY;
      const ratio =
        (content.scrollHeight - content.clientHeight) /
        (scrollbar.clientHeight - thumb.clientHeight);
      content.scrollTop = startScroll + deltaY * ratio;
    };
    const onMouseUp = () => {
      dragging = false;
      document.body.style.userSelect = "";
    };
    thumb.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      thumb.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Handle clicking on the scrollbar track
  React.useEffect(() => {
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;
    const content = contentRef.current;
    if (!scrollbar || !thumb || !content) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === thumb) return;
      const rect = scrollbar.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const thumbHeight = thumb.clientHeight;
      const maxThumbTop = scrollbar.clientHeight - thumbHeight;
      let thumbTop = clickY - thumbHeight / 2;
      thumbTop = Math.max(0, Math.min(maxThumbTop, thumbTop));
      const ratio = thumbTop / maxThumbTop;
      content.scrollTop = ratio * (content.scrollHeight - content.clientHeight);
    };
    scrollbar.addEventListener("mousedown", onClick);
    return () => scrollbar.removeEventListener("mousedown", onClick);
  }, []);

  // Calculate thumb height and position
  const { scrollTop, scrollHeight, clientHeight } = scrollInfo;
  const thumbHeight = Math.max(
    (clientHeight / scrollHeight) * clientHeight,
    40
  );
  const maxThumbTop = clientHeight - thumbHeight;
  const thumbTop =
    (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop || 0;

  return (
    <section
      id="countries"
      className="w-full py-16 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-8">
        <span className="text-[#5C7937] font-semibold text-sm mb-2 block">
          Our location
        </span>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mdtext-3xl lg:text-4xl font-semibold text-[#222] mb-3">
            Eriggo Is Closer Than You Think
          </h2>
          <p className="text-lg text-[#374a3d] max-w-2xl mx-auto">
            Now serving countries worldwide-no matter where you are, a taste of
            home is near
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-12 md:gap-x-8 gap-y-6">
          <div className="md:col-span-7 lg:col-span-8 col-span-12 w-full">
            <div
              className="relative bg-[#F0F5E8] rounded-3xl p-6 flex items-center justify-center h-full w-full"
              style={{ minHeight: 400 }}
            >
              <Image
                src="/location.png"
                alt="World map"
                width={700}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
              {/* Country buttons as map markers */}
              {countryList.map((country) => (
                <button
                  key={country.name}
                  className={`absolute ${country.left} ${country.top} flex items-center focus:outline-none`}
                  onClick={() => setSelectedCountry(country.name as CountryKey)}
                  type="button"
                  aria-label={country.name}
                  style={{ zIndex: 2 }}
                >
                  <span
                    className={`w-7 h-7 ${country.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg `}
                  >
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  </span>
                  <span
                    className={`ml-2 px-4 py-2 ${
                      country.labelBg
                    } text-white rounded-xl border ${country.border} font-medium text-lg shadow ${
                      selectedCountry === country.name
                        ? "ring-2 ring-[#8ecf4c]"
                        : ""
                    }`}
                  >
                    {country.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Layer 2: Outer container with separated scrollbar */}
          <div className="md:col-span-5 lg:col-span-4 col-span-12 flex justify-center ">
            <div className="relative flex w-full" style={{ height: 428 }}>
              {/* Layer 1: Scrollable content area */}
              <div className="bg-[#F6FBF1] p-2 md:p-4 rounded-3xl w-full">
                <div
                  className="bg-[#F0F5E8] rounded-3xl shadow flex flex-col h-full w-full relative "
                  style={{
                    boxShadow: "0 2px 16px 0 #e6e6e6-",
                    overflow: "hidden",
                  }}
                >
                  {/* Header (fixed) */}
                  <div
                    className="p-6 pb-2 bg-[#F0F5E8] rounded-t-3xl z-10 w-full"
                    style={{ position: "sticky", top: 0 }}
                  >
                    <h3 className="text-xl font-semibold text-[#222]">
                      States in {selectedCountry}
                    </h3>
                  </div>
                  {/* Scrollable list */}
                  <div
                    ref={contentRef}
                    className="flex-1 px-6 pb-6 pt-2"
                    style={{
                      overflowY: "scroll",
                      height: "calc(100% - 0px)",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                    // Hide native scrollbar
                    onWheel={(e) => {
                      // Prevent horizontal scroll
                      if (e.deltaX !== 0) e.preventDefault();
                    }}
                  >
                    <ul className="space-y-3 text-lg text-[#374a3d]">
                      {countryStates[selectedCountry].map((state) => (
                        <li key={state}>{state}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scrollbar  */}
              <div
                ref={scrollbarRef}
                className="ml-3 rounded-full bg-[#F0F5E8] hidden md:flex"
                style={{
                  width: 6,
                  height: 428,
                  position: "relative",
                  boxShadow: "0 0 0 2px #f8f8d0",

                  alignItems: "flex-start",
                  cursor: "pointer",
                  zIndex: 20,
                }}
              >
                <div
                  ref={thumbRef}
                  className="rounded-full bg-[#D0DFB7]"
                  style={{
                    width: 6,
                    height: thumbHeight,
                    position: "absolute",
                    top: thumbTop,
                    left: 0,
                    transition: "background 0.2s",
                    cursor: "grab",
                    boxShadow: "0 1px 4px 0 #e6e6e6",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

const countryList = [
  {
    name: "Nigeria",
    color: "bg-[#047852]",
    border: "border-[#047852]",
    labelBg: "bg-[#047852]",
    left: "md:left-[22%] left-[10%]",
    top: "md:top-[15%] top-[10%]",
  },
  {
    name: "Ghana",
    color: "bg-[#B47409]",
    border: "border-[#B47409]",
    labelBg: "bg-[#452C03]",
    left: "left-[48%] lg:left-[60%]",
    top: "md:top-[40%] top-[40%] lg:top-[30%]",
  },
  {
    name: "UK",
    color: "bg-[#EF3B07]",
    border: "border-[#C62808]",
    labelBg: "bg-[#440C06]",
    left: "md:left-[25%] left-[10%] lg:left-[37%]",
    top: "top-[56%] md:top-[56%] lg:top-[70%]",
  },
  {
    name: "Canada",
    color: "bg-[#B91C1C]",
    border: "border-[#B91C1C]",
    labelBg: "bg-[#450A0A]",
    left: "md:left-[48%] left-[44%] lg:left-[68%]",
    top: "top-[80%] md:top-[80%] lg:top-[65%]",
  },
];
