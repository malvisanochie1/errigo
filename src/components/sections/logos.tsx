import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LogoCarousel() {
  return (
    <div className="bg-white px-4 md:px-10 py-4 border-t border-blue-200">
      {/* Heading */}
      <p className="text-center text-[#292929] font-semibold text-sm mb-4">
        Trusted by 2000+ businesses to scale outbound sales and drive new
        revenue
      </p>
      {/* Carousel */}
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex animate-scroll">
          <Marquee gradient={false} speed={100}>
            <div className="flex items-center gap-5 md:gap-10 px-4">
              <div className="w-full max-w-28 md:max-w-[205px] ">
                <Image
                  width={470}
                  height={200}
                  src="/logo1.png"
                  alt="Melody's cuisine"
                  className="md:h-10 object-fit"
                />
              </div>
              <div className="w-full max-w-28 md:max-w-[205px] ">
                <Image
                  width={470}
                  height={200}
                  src="/logo2.png"
                  alt="Cold Stone"
                  className="h-4 md:h-10 object-fit"
                />
              </div>
              <div className="w-full max-w-28 md:max-w-[205px] ">
                <Image
                  width={470}
                  height={200}
                  src="/logo3.png"
                  alt="Melody's cuisine"
                  className="h-4 md:h-10 object-fit"
                />
              </div>
              <div className="w-full max-w-28 md:max-w-[205px] ">
                <Image
                  width={470}
                  height={200}
                  src="/logo4.png"
                  alt="Happy Shop"
                  className="h-4 md:h-10 object-fit"
                />
              </div>

              <div className="w-full max-w-28 md:max-w-[205px] ">
                <Image
                  width={470}
                  height={200}
                  src="/logo5.png"
                  alt="Melody's cuisine"
                  className="h-4 md:h-10 object-fit"
                />
              </div>

              {/* <Image width={70} height={15} src="/logo1.png" alt="Happy Shop" className="h-6 object-contain" />
              <Image width={70} height={15} src="/logo2.png" alt="Cold Stone" className="h-6 object-contain" /> */}
            </div>
          </Marquee>{" "}
        </div>
      </div>

      {/* Animation style */}
    </div>
  );
}
