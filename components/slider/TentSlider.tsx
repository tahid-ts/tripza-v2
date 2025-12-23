/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface SlideItem {
  id: number;
  image: string;
  alt: string;
}

interface PositionConfig {
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
  zIndex?: number;
  opacity: number;
  containerClass?: string;
  wrapperClass?: string;
}

// LARGE SCREEN POSITIONS
const positionsLarge: PositionConfig[] = [
  {
    x: 90,
    y: 65,
    width: 200,
    height: 150,
    scale: 1.4,
    zIndex: 10,
    opacity: 1,
    containerClass: "bg-white p-5 rounded-lg",
  },
  {
    x: 50,
    y: 50,
    width: 380,
    height: 220,
    scale: 1.6,
    zIndex: 2,
    opacity: 1,
  },
  {
    x: 35,
    y: 80,
    width: 250,
    height: 160,
    scale: 0.5,
    zIndex: 3,
    opacity: 1,
    containerClass: "overflow-visible mt-20 bg-white p-2 rounded-lg",
    wrapperClass: "overflow-visible",
  },
  {
    x: 60,
    y: 80,
    width: 250,
    height: 160,
    scale: 0.5,
    zIndex: 3,
    opacity: 1,
    containerClass: "overflow-visible mt-20 bg-white p-2 rounded-lg",
    wrapperClass: "overflow-visible",
  },
  {
    x: 60,
    y: 60,
    width: 300,
    height: 280,
    scale: 1.1,
    zIndex: 4,
    opacity: 1,
  },
];

// MOBILE POSITIONS
const positionsMobile: PositionConfig[] = [
  {
    x: 50,
    y: 40,
    width: 320,
    height: 220,
    scale: 1.0,
    zIndex: 10,
    opacity: 1,
    containerClass: "bg-white p-4 rounded-xl ",
  },
  {
    x: 20,
    y: 75,
    width: 100,
    height: 70,
    scale: 1,
    zIndex: 8,
    opacity: 1,
  },
  {
    x: 50,
    y: 75,
    width: 100,
    height: 70,
    scale: 1,
    zIndex: 6,
    opacity: 1,
  },
  {
    x: 80,
    y: 75,
    width: 100,
    height: 70,
    scale: 1,
    zIndex: 4,
    opacity: 1,
  },
  {
    x: 80,
    y: 75,
    width: 100,
    height: 70,
    scale: 1,
    zIndex: 2,
    opacity: 1,
  },
];

// MEDIUM SCREEN POSITIONS
const positionsMedium: PositionConfig[] = [
  {
    x: 50,
    y: 35,
    width: 460,
    height: 280,
    scale: 1.3,
    zIndex: 10,
    opacity: 1,
    containerClass: "bg-white p-4 rounded-lg ",
  },
  {
    x: 20,
    y: 85,
    width: 150,
    height: 100,
    scale: 1,
    zIndex: 5,
    opacity: 1,
  },
  {
    x: 50,
    y: 85,
    width: 150,
    height: 100,
    scale: 1,
    zIndex: 4,
    opacity: 1,
  },
  {
    x: 80,
    y: 85,
    width: 150,
    height: 100,
    scale: 1,
    zIndex: 2,
    opacity: 1,
  },
  {
    x: 90,
    y: 85,
    width: 150,
    height: 100,
    scale: 1,
    zIndex: 2,
    opacity: 1,
  },
];

// EXTRA-LARGE SCREEN POSITIONS
const positionsXL: PositionConfig[] = [
  {
    x: 100,
    y: 65,
    width: 200,
    height: 150,
    scale: 1.4,
    zIndex: 10,
    opacity: 1,
    containerClass: "bg-white p-5 rounded-lg",
  },
  {
    x: 50,
    y: 50,
    width: 380,
    height: 220,
    scale: 1.6,
    zIndex: 2,
    opacity: 1,
  },
  {
    x: 35,
    y: 80,
    width: 250,
    height: 160,
    scale: 0.5,
    zIndex: 3,
    opacity: 1,
    containerClass: "overflow-visible mt-20 bg-white p-2 rounded-lg",
    wrapperClass: "overflow-visible",
  },
  {
    x: 60,
    y: 80,
    width: 250,
    height: 160,
    scale: 0.5,
    zIndex: 3,
    opacity: 1,
    containerClass: "overflow-visible mt-20 bg-white p-2 rounded-lg",
    wrapperClass: "overflow-visible",
  },
  {
    x: 60,
    y: 60,
    width: 300,
    height: 280,
    scale: 1.1,
    zIndex: 4,
    opacity: 1,
  },
];

const slides: SlideItem[] = [
  {
    id: 1,
    image: "/image/product/product-thumb1.png",
    alt: "Blue dome tent",
  },
  {
    id: 2,
    image: "/image/product/product-thumb2.png",
    alt: "Yellow expedition tent",
  },
  {
    id: 3,
    image: "/image/product/product-thumb3.png",
    alt: "Beige bell tent",
  },
  {
    id: 4,
    image: "/image/product/product-thumb4.png",
    alt: "Green camping tent",
  },
];

const TentSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsMedium(width >= 640 && width < 1024);
      setIsXL(width >= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const positions = isMobile
    ? positionsMobile
    : isMedium
    ? positionsMedium
    : isXL
    ? positionsXL
    : positionsLarge;

  const getPosition = (slideIndex: number): PositionConfig => {
    const offset = (slideIndex - currentIndex + slides.length) % slides.length;
    return positions[offset];
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative w-full min-h-[450px] md:min-h-[620px] overflow-visible bg-gray-50 rounded-lg">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={slide.id}
              className={`absolute transition-all duration-1000 ease-in-out ${
                pos.containerClass || ""
              }`}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${pos.width}px`,
                height: `${pos.height}px`,
                transform: `translate(-50%, -50%) scale(${pos.scale})`,
                zIndex: pos.zIndex,
                opacity: pos.opacity,
              }}
              onClick={() => !isMobile && index !== currentIndex && nextSlide()}
            >
              <div
                className={`relative w-full h-full rounded-lg overflow-hidden ${
                  pos.wrapperClass || ""
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === currentIndex}
                  className="object-cover select-none"
                  sizes="(max-width: 768px) 280px, 520px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div
        className={`
          absolute z-20 xl:flex gap-44 hidden
          bottom-6 md:-bottom-5 left-1/2 -translate-x-1/2 lg:right-5
          lg:bottom-36 xl:-right-32 lg:left-auto lg:translate-x-0
        `}
      >
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="p-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 hover:bg-white disabled:opacity-50"
          aria-label="Previous"
        >
          <FaAngleLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="p-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 hover:bg-white disabled:opacity-50"
          aria-label="Next"
        >
          <FaAngleRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </div>
    </div>
  );
};

export default TentSlider;
