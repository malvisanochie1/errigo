import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Azeez Ademola",
    location: "Nigeria",
    text: "I totally enjoyed using this app, the delivery was so fast and the food tasted great",
    avatar: "/memoji-testi.png",
  },
  // Duplicate for demo, you can replace with real data
  {
    name: "Azeez Ademola",
    location: "Nigeria",
    text: "I totally enjoyed using this app, the delivery was so fast and the food tasted great",
    avatar: "/memoji-testi.png",
  },
  {
    name: "Azeez Ademola",
    location: "Nigeria",
    text: "I totally enjoyed using this app, the delivery was so fast and the food tasted great",
    avatar: "/memoji-testi.png",
  },
  {
    name: "Azeez Ademola",
    location: "Nigeria",
    text: "I totally enjoyed using this app, the delivery was so fast and the food tasted great",
    avatar: "/memoji-testi.png",
  },
  {
    name: "Azeez Ademola",
    location: "Nigeria",
    text: "I totally enjoyed using this app, the delivery was so fast and the food tasted great",
    avatar: "/memoji-testi.png",
  },
  {
    name: "Azeez Ademola",
    location: "Nigeria",
    text: "I totally enjoyed using this app, the delivery was so fast and the food tasted great",
    avatar: "/memoji-testi.png",
  },
];

const Star = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    className="inline-block text-yellow-400 mr-1 w-3 sm:w-auto"
  >
    <path
      d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z"
      fill="currentColor"
    />
  </svg>
);

const Testimonial = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3.5,
      spacing: 15,
    },
  });
  return (
    <section id="reviews" className="px-4 sm:px-8 py-16">
      <div className="sm:text-center mb-6">
        <p className="text-[#5C7937] font-medium mb-2 text-sm sm:text-base">
          Over 2000 deliveries completed.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">
          <span className="hidden sm:inline">Here’s</span> what our customers
          have to say
        </h2>
      </div>
      <div className=" keen-slider-">
        <Marquee gradient={false} speed={50} direction="right">
          <div className="flex space-x-3 md:space-x-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`relative bg-[#F0F5E8] rounded-xl shadow-md p-6 flex flex-col justify-between sm:min-h-[220px] max-w-[330px] keen-slider__slide ${
                  idx === testimonials.length - 1 ? "me-3 md:me-6" : ""
                }`}
              >
                <div className=" sm:mb-3">
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base font-medium">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center sm:mt-4 relative">
                    <Image
                      width={48}
                      height={48}
                      src={t.avatar}
                      alt="avatar"
                      className="w-12 h-12 rounded-full border-2 bg-[#FFF2C6] border-white shadow mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-base">
                        {t.name}
                      </div>
                      <div className="text-gray-500 text-sm">{t.location}</div>
                    </div>
                  </div>

                  <Image
                    width={100}
                    height={100}
                    src="/quote.png"
                    className="object-cover- "
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee gradient={false} speed={70} direction="left" className="mt-6">
          <div className="flex space-x-3 md:space-x-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`relative bg-[#F0F5E8] rounded-xl shadow-md p-6 flex flex-col justify-between sm:min-h-[220px] max-w-[330px] keen-slider__slide ${
                  idx === testimonials.length - 1 ? "me-3 md:me-6" : ""
                }`}
              >
                <div className="sm:mb-3">
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="text-gray-800  text-sm sm:text-base font-medium">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center mt-4 relative">
                    <Image
                      width={48}
                      height={48}
                      src={t.avatar}
                      alt="avatar"
                      className="w-12 h-12 rounded-full border-2 bg-[#FFF2C6] border-white shadow mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-base">
                        {t.name}
                      </div>
                      <div className="text-gray-500 text-sm">{t.location}</div>
                    </div>
                  </div>

                  <Image
                    width={100}
                    height={100}
                    src="/quote.png"
                    className="object-cover- "
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;
