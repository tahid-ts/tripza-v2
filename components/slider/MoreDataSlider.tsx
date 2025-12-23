"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Card from "../shared/card/Card";
import { GoArrowUpRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { CardDataType, CardPositionConfig } from "@/types/card";
import Title from "../shared/title/Title";

interface MoreDataSliderProps {
  data?: CardDataType[];
  positionConfigs?: Partial<CardPositionConfig>[];
  title: string;
  getPositionConfig?: (
    position: number,
    slidesPerView: number
  ) => Partial<CardPositionConfig>;
}

const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  desktopLarge: 1280,
} as const;

const SWIPER_CONFIG = {
  speed: 1000,
  autoplayDelay: 4500,
  spaceBetween: {
    mobile: 10,
    tablet: 15,
    desktop: 30,
  },
} as const;

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
  growOnHover: false,
  translateY: 0,
  ...overrides,
});

// default card positions
const POSITION_CONFIGS: CardPositionConfig[] = [
  createDefaultConfig({
    opacity: 1,
    scale: 1,
    zIndex: 15,
    notchWidth: 120,
    notchHeight: 120,
    showGradient: true,
    isActive: true,
    shapeEffect: "active",
    gradientIntensity: "strong",
    translateY: -50,
  }),
  createDefaultConfig({
    opacity: 1,
    scale: 1,
    zIndex: 25,
    showGradient: true,
    gradientIntensity: "strong",
    shapeEffect: "hover",
    notchWidth: 120,
    notchHeight: 120,
    growOnHover: true,
  }),
  createDefaultConfig({
    opacity: 1,
    scale: 1,
    zIndex: 20,
    showGradient: true,
    notchWidth: 120,
    notchHeight: 120,
    shapeEffect: "hover",
    growOnHover: true,
    gradientIntensity: "strong",
    translateY: -30,
  }),
];

// Navigation Buttons
const NavigationButtons: React.FC<{
  onPrev: () => void;
  onNext: () => void;
}> = React.memo(({ onPrev, onNext }) => (
  <div className="flex items-center gap-3">
    <button
      className="swiper-button-prev-custom z-30 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
      onClick={onPrev}
      aria-label="Previous Slide"
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
      aria-label="Next Slide"
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

// Slider Component
export const MoreDataSlider: React.FC<MoreDataSliderProps> = ({
  data = [],
  positionConfigs = [],
  getPositionConfig,
  title,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(3);

  // Handlers
  const handleSlidePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleSlideNext = useCallback(() => swiperRef.current?.slideNext(), []);
  const handleMouseEnter = useCallback((i: number) => setHoveredIndex(i), []);
  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);
  const handleSlideClick = useCallback(
    (i: number) => swiperRef.current?.slideToLoop(i),
    []
  );

  const handleBreakpoint = useCallback((swiper: SwiperType) => {
    const bp = Number(swiper.currentBreakpoint);

    if (bp >= BREAKPOINTS.desktopLarge) {
      setCurrentSlidesPerView(3);
    } else if (bp >= BREAKPOINTS.desktop) {
      setCurrentSlidesPerView(2);
    } else if (bp >= BREAKPOINTS.tablet) {
      setCurrentSlidesPerView(2);
    } else {
      setCurrentSlidesPerView(1);
    }
  }, []);

  const handleSwiperInit = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;
      setActiveIndex(swiper.realIndex);
      handleBreakpoint(swiper);
    },
    [handleBreakpoint]
  );

  // Position Config
  const getPositionConfigForIndex = useCallback(
    (pos: number): CardPositionConfig => {
      if (getPositionConfig) {
        const custom = getPositionConfig(pos, currentSlidesPerView);
        return createDefaultConfig(custom);
      }
      if (positionConfigs[pos]) {
        return createDefaultConfig(positionConfigs[pos]);
      }
      return POSITION_CONFIGS[pos] || createDefaultConfig();
    },
    [getPositionConfig, positionConfigs, currentSlidesPerView]
  );

  // Position Mapping
  const cardPositions = useMemo(() => {
    if (!data || data.length === 0) return [];

    return data.map((_, index) => {
      const relativePosition =
        (index - activeIndex + data.length) % data.length;
      return relativePosition % currentSlidesPerView;
    });
  }, [activeIndex, currentSlidesPerView, data]);

  // Slides
  const slides = useMemo(() => {
    if (!data || data.length === 0) return [];

    return data.map((adventure, index) => {
      const position = cardPositions[index] ?? 0;
      const config = getPositionConfigForIndex(position);
      const isHovered = hoveredIndex === index;

      const scaleValue = isHovered ? config.scale * 1.0 : config.scale;
      const translateY = config.translateY || 0;
      const transformString = `scale(${scaleValue}) translateY(${translateY}px)`;

      return (
        <SwiperSlide key={`${adventure.id}-${index}`}>
          <div
            className="w-full h-full transition-all duration-500 ease-in-out transform flex items-start flex-col cursor-pointer overflow-hidden relative group"
            style={{
              opacity: config.opacity,
              transform: transformString,
              zIndex: config.zIndex,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleSlideClick(index)}
          >
            <Card
              cardBG={adventure.image}
              title={config.isActive ? adventure.title : ""}
              titleClassName="text-black text-xl lg:text-[28px] bg-white p-2 rounded-md mx-auto whitespace-wrap font-semibold"
              price={adventure.price}
              infoPills={adventure.infoPills}
              infoPillsPosition="top"
              gradientIntensity={config.gradientIntensity}
              shapePosition="topRight"
              // aspectRatio="3/4"
              link="/blog-details"
              isActive={config.isActive}
              isHovered={isHovered}
              growHeightOnHover={config.growOnHover}
              shapeEffect={config.shapeEffect}
              shapeProps={{
                height: 560,
                width: "100%",
                notchWidth: config.notchWidth,
                notchHeight: config.notchHeight,
              }}
              showGradient={config.showGradient}
              cornerContent={
                config.showCornerContent ? (
                  <div className="h-[100px] w-[100px] text-sm font-medium z-20 rounded-full bg-primary flex items-center justify-center">
                    <GoArrowUpRight className="h-8 w-8 text-white" />
                  </div>
                ) : undefined
              }
            />
            {config.isActive ? (
              ""
            ) : (
              <>
                <div className="absolute bottom-2 group-hover:bottom-4 hover:bg-white px-4 md:px-6">
                  <h1 className="text-black text-2xl lg:text-[28px] group-hover:bg-white lg:p-2 p-0 rounded-md font-cormorant font-bold">
                    {adventure.title}
                  </h1>
                </div>
              </>
            )}
          </div>
        </SwiperSlide>
      );
    });
  }, [
    data,
    cardPositions,
    getPositionConfigForIndex,
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
    handleSlideClick,
  ]);

  // Render
  return (
    <div className="relative w-full pb-16" style={{ overflow: "hidden" }}>
      <div className="mb-8 py-10">
        <div className="flex justify-between items-center">
          <Title title={title} />
          <NavigationButtons
            onPrev={handleSlidePrev}
            onNext={handleSlideNext}
          />
        </div>
      </div>

      <div style={{ overflow: "visible" }}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={SWIPER_CONFIG.spaceBetween.desktop}
          slidesPerView={3}
          centeredSlides={false}
          loop={true}
          speed={SWIPER_CONFIG.speed}
          slideToClickedSlide={true}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className="relative"
          style={{ overflow: "visible" }}
          wrapperClass="!overflow-visible"
          autoplay={{
            delay: SWIPER_CONFIG.autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            [BREAKPOINTS.mobile]: {
              slidesPerView: 1,
              spaceBetween: SWIPER_CONFIG.spaceBetween.mobile,
            },
            [BREAKPOINTS.tablet]: {
              slidesPerView: 2,
              spaceBetween: SWIPER_CONFIG.spaceBetween.tablet,
            },
            [BREAKPOINTS.desktop]: {
              slidesPerView: 2,
              spaceBetween: SWIPER_CONFIG.spaceBetween.desktop,
            },
            [BREAKPOINTS.desktopLarge]: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSwiper={handleSwiperInit}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onBreakpoint={handleBreakpoint}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};
