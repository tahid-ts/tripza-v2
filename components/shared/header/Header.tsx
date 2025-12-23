"use client";
import Image from "next/image";
import React from "react";
import Container from "../container/Container";
import ScrollAnimator from "../animation/ScrollAnimator";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="relative w-full pt-[100px] md:pt-[115px] xl:pt-[126px] ">
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <Container
          controlPy={false}
          className="border-b border-gray-100/80 pb-6 sm:pb-8 md:pb-10 2xl:mt-[120px] "
        >
          <div className="flex flex-row items-center justify-center w-full  px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6 md:gap-8 lg:gap-12 ">
            {/* Left Image */}
            <div className="relative shrink-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-[130px] 2xl:h-[166px] ">
              <Image
                src="/image/header/tree1.svg"
                alt="Left decorative header image"
                fill
                sizes="(max-width: 480px) 64px, (max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
                className="object-cover overflow-visible"
                priority
              />
            </div>

            {/* Center Title Section */}
            <div className="flex flex-col items-center justify-center text-center  min-w-0 px-2 sm:px-4 ">
              {title && (
                <h1 className="w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px] font-cormorant text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-none tracking-tight wrap-break-word 2xl:mt-16 xl:mt-10 lg:mt-5 mt-0">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="w-full text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600/90 mt-1 xs:mt-1.5 sm:mt-2 md:mt-2.5 leading-relaxed sm:leading-relaxed max-w-2xl mx-auto wrap-break-word">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Right Image */}
            <div className="relative shrink-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-[146px] 2xl:h-[184px] ">
              <Image
                src="/image/header/tree2.svg"
                alt="Right decorative header image"
                fill
                sizes="(max-width: 480px) 64px, (max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 146px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </ScrollAnimator>
    </header>
  );
};

export default Header;
