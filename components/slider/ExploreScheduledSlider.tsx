/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Card from "../shared/card/Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { CardDataType, CardPositionConfig } from "@/types/card";
import Title from "../shared/title/Title";

const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  desktopLarge: 1280,
} as const;

const SWIPER_CONFIG = {
  speed: 1000,
  autoplayDelay: 4500,
};

const createDefaultConfig = (
  overrides?: Partial<CardPositionConfig>
): CardPositionConfig => ({
  opacity: 1,
  scale: 1,
  zIndex: 10,
  isActive: false,
  showGradient: false,
  gradientIntensity: "medium",
  shapeEffect: "hover",
  notchWidth: 100,
  notchHeight: 100,
  showCornerContent: true,
  margin: "0",
  ...overrides,
});

const DESKTOP_POSITION_CONFIGS: CardPositionConfig[] = [
  createDefaultConfig({
    zIndex: 15,
    notchWidth: 120,
    notchHeight: 120,
    showGradient: true,
    isActive: true,
    shapeEffect: "always",
    gradientIntensity: "strong",
    margin: "0 0 80px 0",
  }),
  createDefaultConfig({
    zIndex: 25,
    showGradient: true,
    gradientIntensity: "strong",
    shapeEffect: "always",
    notchWidth: 120,
    notchHeight: 120,
    margin: "0 0 40px 0",
  }),
  createDefaultConfig({
    zIndex: 20,
    showGradient: true,
    notchWidth: 120,
    notchHeight: 120,
    shapeEffect: "always",
    gradientIntensity: "strong",
  }),
];

const MOBILE_TABLET_CONFIG = createDefaultConfig({
  zIndex: 30,
  isActive: true,
  showGradient: true,
  gradientIntensity: "strong",
  shapeEffect: "always",
  notchWidth: 110,
  notchHeight: 110,
});

const NavigationButtons: React.FC<{
  onPrev: () => void;
  onNext: () => void;
}> = React.memo(({ onPrev, onNext }) => (
  <div className="flex items-center gap-3">
    <button
      className="swiper-button-prev-custom z-30 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
      onClick={onPrev}
      aria-label="Previous slide"
    >
      <svg
        className="w-5 h-5 text-gray-900"
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

    <button
      className="swiper-button-next-custom z-30 w-12 h-12 rounded-full bg-primary text-white shadow-sm flex items-center justify-center hover:bg-gray-900 transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white"
      onClick={onNext}
      aria-label="Next slide"
    >
      <svg
        className="w-5 h-5"
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
));
NavigationButtons.displayName = "NavigationButtons";

export const ExploreScheduledSlider: React.FC<{
  data: CardDataType[];
  positionConfigs?: Partial<CardPositionConfig>[];
  getPositionConfig?: (
    position: number,
    slidesPerView: number
  ) => Partial<CardPositionConfig>;
}> = ({ data, positionConfigs = [], getPositionConfig }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  const handleMouseEnter = useCallback((i: number) => setHoveredIndex(i), []);
  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  const handleSlideClick = useCallback(
    (i: number) => swiperRef.current?.slideToLoop(i),
    []
  );

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.realIndex);
    setSlidesPerView(swiper.params.slidesPerView as number);
  }, []);

  const handleBreakpoint = useCallback((swiper: SwiperType) => {
    setSlidesPerView(swiper.params.slidesPerView as number);
  }, []);

  const getConfigForPosition = useCallback(
    (pos: number): CardPositionConfig => {
      if (getPositionConfig) {
        return createDefaultConfig(getPositionConfig(pos, slidesPerView));
      }
      if (positionConfigs[pos]) {
        return createDefaultConfig(positionConfigs[pos]);
      }

      if (slidesPerView === 3) {
        return DESKTOP_POSITION_CONFIGS[pos] ?? createDefaultConfig();
      }

      return MOBILE_TABLET_CONFIG;
    },
    [getPositionConfig, positionConfigs, slidesPerView]
  );

  const cardPositions = useMemo(() => {
    return data.map((_, i) => {
      const rel = (i - activeIndex + data.length) % data.length;
      return rel % slidesPerView;
    });
  }, [activeIndex, data.length, slidesPerView]);

  const slides = useMemo(
    () =>
      data.map((adv, idx) => {
        const pos = cardPositions[idx];
        const cfg = getConfigForPosition(pos);
        const isHovered = hoveredIndex === idx;

        return (
          <SwiperSlide key={`${adv.id}-${idx}`}>
            <div
              className="h-[480px] lg:w-[420px] w-auto transition-all duration-500 ease-in-out cursor-pointer overflow-visible"
              style={{
                opacity: cfg.opacity,
                transform: `scale(${isHovered ? cfg.scale * 1.04 : cfg.scale})`,
                zIndex: cfg.zIndex,
                margin: cfg.margin,
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleSlideClick(idx)}
            >
              <Card
                cardBG={adv.image}
                title={adv.title}
                price={adv.price}
                priceClassName="text-white"
                infoPills={adv.infoPills}
                link="/event-details"
                infoPillsPosition="top"
                titleClassName="text-white text-2xl lg:text-[28px]"
                descriptionClassName="text-white"
                gradientIntensity={cfg.gradientIntensity}
                shapePosition="topRight"
                aspectRatio="3/4"
                isActive={cfg.isActive}
                shapeEffect={cfg.shapeEffect}
                shapeProps={{
                  height: 480,
                  width: "100%",
                  notchWidth: cfg.notchWidth,
                  notchHeight: cfg.notchHeight,
                }}
                showGradient={cfg.showGradient}
                className="w-full h-full"
                cornerContent={
                  cfg.showCornerContent ? (
                    <div className="h-[100px] w-[100px] z-20 rounded-xl bg-primary flex flex-col items-center justify-center text-white">
                      <span className="text-3xl font-semibold leading-none">
                        {adv.date?.split(" ")[0]}
                      </span>
                      <span className="text-sm font-medium leading-none">
                        {adv.date?.split(" ")[1]}
                      </span>
                    </div>
                  ) : undefined
                }
              />
            </div>
          </SwiperSlide>
        );
      }),
    [
      data,
      cardPositions,
      getConfigForPosition,
      hoveredIndex,
      handleMouseEnter,
      handleMouseLeave,
      handleSlideClick,
    ]
  );

  return (
    <div className="relative w-full ">
      {/* Header */}
      <div className="mb-6 md:mb-[30px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Title title={"Explore Scheduled Events"} />
        <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
      </div>

      {/* Swiper */}
      <div className="overflow-hidden ">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          speed={SWIPER_CONFIG.speed}
          slideToClickedSlide
          autoplay={{
            delay: SWIPER_CONFIG.autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className="overflow-visible"
          onSwiper={handleSwiperInit}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          onBreakpoint={handleBreakpoint}
          breakpoints={{
            [BREAKPOINTS.mobile]: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            [BREAKPOINTS.tablet]: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            [BREAKPOINTS.desktop]: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            [BREAKPOINTS.desktopLarge]: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};
