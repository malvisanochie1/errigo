import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3.5,
          spacing: 15,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div id="services" className="py-10 px-3 md:px-8">
      <section className="bg-gradient-to-br from-[#F6FBF1]  to-[#D0DFB7] p-2 rounded-2xl md:rounded-2xl">
        <div className="text-center my-8">
          <span className="text-[#5C7937] font-semibold text-sm mb-2 block">
            What we bring you{" "}
          </span>
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222] mb-3">
              Healthy Eating, Delivered Swiftly{" "}
            </h2>
            <p className="hidden md:inline text-lg text-[#374a3d] max-w-2xl mx-auto">
              Chef-made meals, organic groceries, and specialty diet foods—all
              fresh to your door
            </p>
          </div>
        </div>
        <>
          <div ref={sliderRef} className="keen-slider pb-4">
            <div className="keen-slider__slide rounded-2xl bg-[#FAFFFA]">
              <div className="p-1.5 sm:p-2 md:p-3 pb-4">
                <div className="">
                  <Image
                    src="/food1.png"
                    width={500}
                    height={500}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-base text-[#374a3d] max-w-2xl mx-auto p-2">
                    Chef-Prepared Meals
                  </p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide rounded-2xl bg-[#FAFFFA]">
              <div className="p-1.5 sm:p-2 md:p-3 pb-4">
                <div className="">
                  <Image
                    src="/food2.png"
                    width={500}
                    height={500}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-base text-[#374a3d] max-w-2xl mx-auto p-2">
                    Organic Fruits & Veggies
                  </p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide rounded-2xl bg-[#FAFFFA]">
              <div className="p-1.5 sm:p-2 md:p-3 pb-4">
                <div className="">
                  <Image
                    src="/food3.png"
                    width={500}
                    height={500}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-base text-[#374a3d] max-w-2xl mx-auto p-2">
                    Fruits from stores close to you
                  </p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide rounded-2xl bg-[#FAFFFA]">
              <div className="p-1.5 sm:p-2 md:p-3 pb-4">
                <div className="">
                  <Image
                    src="/service3.png"
                    width={500}
                    height={500}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-base text-[#374a3d] max-w-2xl mx-auto p-2">
                    Ingredients from all round
                  </p>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div
              className="dots md:hidden pb-4"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "dot md:hidden" + (currentSlide === idx ? " active" : "")
                    }
                    style={{
                      width: currentSlide === idx ? 14 : 8,
                      height: 10,
                      borderRadius: "50%",
                      border: "none",
                      margin: "0 4px",
                      background: currentSlide === idx ? "#5C7937" : "#c7d5af",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  ></button>
                );
              })}
            </div>
          )}
        </>
      </section>
    </div>
  );
}
