"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { GoArrowUpRight } from "react-icons/go";
import Card from "../shared/card/Card";
import { CardDataType } from "@/types/card";
import Link from "next/link";

interface DesertAdventureSliderProps {
  items: CardDataType[];
}

export const DesertAdventureSlider: React.FC<DesertAdventureSliderProps> = ({
  items,
}) => {
  const swiperInstance = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full">
      <div className="overflow-x-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperInstance.current = swiper;
            setCurrentIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          loop={items.length > 1}
          speed={800}
          centeredSlides
          centerInsufficientSlides={true}
          loopAddBlankSlides={false}
          slideToClickedSlide
          initialSlide={0}
          watchSlidesProgress={true}
          freeMode={{ enabled: true, sticky: false }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".carousel-prev-btn",
            nextEl: ".carousel-next-btn",
          }}
          pagination={{
            el: ".carousel-pagination",
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} carousel-pagination-bullet"></span>`,
          }}
          className="overflow-hidden! relative lg:h-[630px] md:h-[560px] h-[620px] w-full flex justify-center items-center"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 10 },
            1024: { slidesPerView: 2.3, spaceBetween: 30 },
            1280: { slidesPerView: 3.3, spaceBetween: 30 },
            1420: { slidesPerView: 3.3, spaceBetween: 30 },
            1820: { slidesPerView: 4.3, spaceBetween: 30 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={`${item?.id}-${index}`}>
              {({ isActive }) => {
                const swiper = swiperInstance.current;
                let relativePosition = "edge";

                if (swiper) {
                  if (isActive) relativePosition = "center";
                  else if (
                    index === (swiper.realIndex + 1) % items.length ||
                    index ===
                      (swiper.realIndex - 1 + items.length) % items.length
                  )
                    relativePosition = "adjacent";
                }

                const isHover = hoveredIndex === index;

                let baseSlideClass = "";
                switch (relativePosition) {
                  case "center":
                    baseSlideClass = "z-20";
                    break;
                  case "adjacent":
                    baseSlideClass = "z-10 ";
                    break;
                  default:
                    baseSlideClass = "z-0 lg:mt-15 mt-0";
                }

                return (
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
                      transition-all duration-500 ease-out
                      ${baseSlideClass}
                      flex flex-col items-start overflow-visible
                     
                     ${
                       isActive || isHover
                         ? "scale-100 lg:h-[460px] h-full md:h-[520px] w-full"
                         : "scale-100 lg:h-[560px] md:h-[520px] h-full w-full"
                     }
                    `}
                  >
                    <Card
                      price={item.price}
                      cardBG={item.image}
                      infoPillsPosition="bottom"
                      gradientIntensity="strong"
                      aspectRatio="16/20"
                      isActive={isActive}
                      isHovered={isHover}
                      shapePosition="topRight"
                      showGradient={false}
                      link="/attraction-details"
                      shapeProps={{
                        height: isActive || isHover ? 460 : 560,
                        width: "100%",
                        notchWidth: 76,
                        notchHeight: 76,
                      }}
                      cornerContent={
                        <div className="p-2 text-sm font-medium z-20 rounded-full bg-primary m-2 border-stroke">
                          <GoArrowUpRight className="h-10 w-10 text-white" />
                        </div>
                      }
                    />

                    {(isActive || isHover) && (
                      <Link
                        href={`/attraction-details`}
                        className={`
                         xl:-mt-14 lg:-mt-8 md:mt-0 px-2 transition-all duration-800 ease-out cursor-pointer
                          ${
                            isActive || isHover
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4 pointer-events-none"
                          }
                        `}
                      >
                        <h2 className="xl:text-4xl md:text-3xl text-2xl  font-cormorant text-gray-900 py-1 whitespace-nowrap">
                          {item.title}
                        </h2>
                        {item.description && (
                          <p className="md:text-[18px] text-xs text-gray-600 py-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    )}
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute md:-bottom-14 -bottom-8 lg:bottom-0 left-0 right-0 lg:w-[23%] md:w-[40%]  w-[90%] mx-auto ">
          <div className="flex items-center w-full">
            <div>
              <button
                className="carousel-prev-btn z-30!important w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed border border-stroke cursor-pointer"
                onClick={() => swiperInstance.current?.slidePrev()}
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full mx-2">
              <div className="h-0.5 sm:h-1 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentIndex + 1) / items.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Next Button */}
            <div>
              <button
                className="carousel-next-btn z-30! w-12 h-12 rounded-full bg-black text-white shadow-2xl flex items-center justify-center hover:bg-gray-900 transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed border border-stroke cursor-pointer"
                onClick={() => swiperInstance.current?.slideNext()}
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-slide {
          transition: all 0.5s ease;
          opacity: 0.7;
        }
        .swiper-slide-active {
          opacity: 1;
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.85;
        }
        .carousel-pagination-bullet {
          width: 50px;
          height: 3px;
          border-radius: 2px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .carousel-pagination-bullet:hover {
          background: #9ca3af;
        }
        .swiper-pagination-bullet-active.carousel-pagination-bullet {
          background: #1f2937;
          width: 70px;
        }
        .carousel-prev-btn,
        .carousel-next-btn {
          position: relative;
          z-index: 30;
        }
        .swiper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};
