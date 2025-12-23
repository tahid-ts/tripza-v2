/* eslint-disable react-hooks/preserve-manual-memoization */

"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Card from "../shared/card/Card";
import Title from "../shared/title/Title";
import { GoArrowUpRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { CardDataType, CardPositionConfig } from "@/types/card";

const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  desktopLarge: 1280,
} as const;

const createConfig = (
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
  growOnHover: false,
  translateY: 0,
  width: "100%",
  ...overrides,
});

const MOBILE_CONFIGS: CardPositionConfig[] = [
  createConfig({
    isActive: true,
    height: 480,
    notchWidth: 76,
    notchHeight: 76,
    showGradient: true,
    gradientIntensity: "strong",
  }),
];

/* TABLET (2 CARDS) */
const TABLET_CONFIGS: CardPositionConfig[] = [
  createConfig({
    isActive: true,
    height: 520,
    notchWidth: 76,
    notchHeight: 76,
    zIndex: 20,
    showGradient: true,
    gradientIntensity: "strong",
  }),
  createConfig({
    height: 520,
    notchWidth: 76,
    notchHeight: 76,
    zIndex: 10,
    showGradient: true,
  }),
];

/* DESKTOP (2 CARDS – LAYERED) */
const DESKTOP_CONFIGS: CardPositionConfig[] = [
  createConfig({
    isActive: true,
    height: 540,
    notchWidth: 76,
    notchHeight: 76,
    zIndex: 30,
    showGradient: true,
    gradientIntensity: "strong",
  }),
  createConfig({
    isActive: true,
    height: 540,
    notchWidth: 76,
    notchHeight: 76,
    zIndex: 20,
    showGradient: true,
  }),
];

/* DESKTOP LARGE (3 CARDS – HERO STYLE) */
const DESKTOP_LARGE_CONFIGS: CardPositionConfig[] = [
  createConfig({
    isActive: true,
    height: 560,
    zIndex: 30,
    notchWidth: 76,
    notchHeight: 76,
    showGradient: true,
    gradientIntensity: "strong",
  }),
  createConfig({
    height: 440,
    translateY: 60,
    zIndex: 20,
    notchWidth: 76,
    notchHeight: 76,
    showGradient: true,
  }),
  createConfig({
    height: 440,
    translateY: 80,
    zIndex: 10,
    notchWidth: 76,
    notchHeight: 76,
    showGradient: true,
  }),
];

interface ExpertlyCraftedSliderProps {
  data?: CardDataType[];
}

export const ExpertlyCraftedSlider: React.FC<ExpertlyCraftedSliderProps> = ({
  data = [],
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const getConfigsBySPV = useCallback(() => {
    if (slidesPerView === 1) return MOBILE_CONFIGS;
    if (slidesPerView === 2 && window.innerWidth < BREAKPOINTS.desktop)
      return TABLET_CONFIGS;
    if (slidesPerView === 2) return DESKTOP_CONFIGS;
    return DESKTOP_LARGE_CONFIGS;
  }, [slidesPerView]);

  const positionConfigs = getConfigsBySPV();

  const cardPositions = useMemo(() => {
    return data.map((_, index) => {
      const relative = (index - activeIndex + data.length) % data.length;
      return relative % slidesPerView;
    });
  }, [data, activeIndex, slidesPerView]);

  const slides = useMemo(
    () =>
      data.map((item, index) => {
        const position = cardPositions[index] ?? 0;
        const config = positionConfigs[position] ?? createConfig();
        const isHovered = hoveredIndex === index;
        // scale(${isHovered ? 1.03 : 1})
        return (
          <SwiperSlide key={`${item.id}-${index}`}>
            <div
              className="transition-all duration-500"
              style={{
                transform: ` translateY(${config.translateY}px)`,
                zIndex: isHovered ? 100 : config.zIndex,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              <Card
                cardBG={item.image}
                title={item.title}
                price={item.price}
                infoPills={item.infoPills}
                isActive={config.isActive}
                isHovered={isHovered}
                showGradient={config.showGradient}
                gradientIntensity={config.gradientIntensity}
                shapeEffect={config.shapeEffect}
                link="/tour-details"
                titleClassName="text-white text-2xl lg:text-[28px]"
                priceClassName="text-white"
                shapeProps={{
                  height: config.height,
                  width: config.width,
                  notchWidth: config.notchWidth,
                  notchHeight: config.notchHeight,
                }}
                cornerContent={
                  config.showCornerContent && (
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center border-stroke">
                      <GoArrowUpRight className="text-white h-7 w-7" />
                    </div>
                  )
                }
              />
            </div>
          </SwiperSlide>
        );
      }),
    [data, cardPositions, hoveredIndex, positionConfigs]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <Title title="Choose our range of expertly crafted packages " />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          [BREAKPOINTS.mobile]: { slidesPerView: 1, spaceBetween: 10 },
          [BREAKPOINTS.tablet]: { slidesPerView: 2, spaceBetween: 15 },
          [BREAKPOINTS.desktop]: { slidesPerView: 2, spaceBetween: 15 },
          [BREAKPOINTS.desktopLarge]: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSlidesPerView(swiper.params.slidesPerView as number);
        }}
        onBreakpoint={(swiper) =>
          setSlidesPerView(swiper.params.slidesPerView as number)
        }
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides}
      </Swiper>
    </div>
  );
};
