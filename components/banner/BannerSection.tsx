/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { avatars, bannerData } from "@/data";
// import { GoArrowUpRight } from "react-icons/go";
import ScrollAnimator from "../shared/animation/ScrollAnimator";
import Link from "next/link";

const BannerSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const thumbSwiperRef = useRef<SwiperType | null>(null);
  const isRtl = false;
  const autoplayConfig = {
    delay: 5000,
    disableOnInteraction: false,
    reverseDirection: false,
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);

    if (thumbSwiperRef.current) {
      thumbSwiperRef.current.slideToLoop(realIndex, 800);
    }
  };
  // const handleSlideChange = (swiper: SwiperType) => {
  //   const realIndex = swiper.realIndex;
  //   setActiveIndex(realIndex);

  //   const thumbs = thumbSwiperRef.current;
  //   if (thumbs) {
  //     // Find the real slide index inside looped slides
  //     const targetIndex = thumbs.slides.findIndex(
  //       (slide: any) => slide.dataset.swiperSlideIndex == String(realIndex)
  //     );

  //     if (targetIndex >= 0) {
  //       thumbs.slideTo(targetIndex, 800);
  //     }
  //   }
  // };

  const goToSlide = (index: number) => {
    const swiper = mainSwiperRef.current;
    if (!swiper) return;

    const slideIndex = swiper.slides
      .filter((slide: any) => slide.dataset.swiperSlideIndex == index)
      .map((slide: any) => swiper.slides.indexOf(slide))[0];

    swiper.slideTo(slideIndex, 800);
  };

  useEffect(() => {
    if (thumbSwiperRef.current) {
      thumbSwiperRef.current.slideToLoop(0);
    }
  }, []);

  return (
    <div className="relative w-full h-[110vh] md:h-[115vh]  2xl:h-screen  ">
      {/* Background Slides */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        speed={800}
        autoplay={autoplayConfig}
        loop
        className="absolute inset-0 w-full h-full -z-50"
        onSwiper={(s) => (mainSwiperRef.current = s)}
        onSlideChange={handleSlideChange}
        allowTouchMove={false}
      >
        {bannerData.map((slide, i) => (
          <SwiperSlide key={`bg-${slide.id}`}>
            <div className="relative h-[110vh] md:h-[115vh] 2xl:h-screen -z-50">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 h-full ">
        <div className="flex flex-col h-full justify-between px-5 lg:px-0">
          {/* Main Title */}
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <h1 className=" lg:text-5xl xl:text-8xl text-4xl text-center pt-44 font-cormorant text-white p-5 lg:w-[60%] w-[90%] mx-auto whitespace-pre-line font-bold slideUp">
              {bannerData[activeIndex].description}
            </h1>
          </ScrollAnimator>
          {/* Bottom Content */}

          <div className="w-full flex h-full items-end flex-col lg:flex-row justify-between ">
            {/* Left Content */}
            <ScrollAnimator
              className=" w-full lg:w-[50%]"
              repeatOnScroll
              effect="staggerSlideUp"
            >
              <div className="flex flex-col items-start lg:items-center justify-center w-full h-full ">
                <div className="flex flex-col h-full justify-center">
                  <h1 className="text-white md:text-4xl text-xl leading-tight mb-5 font-cormorant text-start">
                    Lake Tahoe Tour <br className="hidden md:block" /> 16 June
                    2025
                  </h1>

                  <div className="flex items-center mb-6">
                    <div className="border-white border rounded-full px-1.5 py-1.5 flex items-center ">
                      <div className="flex -space-x-4">
                        {avatars.map((avatar, i) => (
                          <Image
                            key={i}
                            src={avatar}
                            alt={`Person ${i + 1}`}
                            width={40}
                            height={40}
                            className="md:w-[52px] md:h-[52px] w-10 h-10 rounded-full object-cover "
                          />
                        ))}
                        <div className=" bg-gray-200 rounded-full md:w-[52px] md:h-[52px] w-10 h-10 cursor-pointer flex items-center justify-center">
                          <span className="text-gray-700 text-lg font-medium">
                            +7K
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-300 ml-4 text-sm">
                      People joined
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Immerse yourself in the stunning
                    <br />
                    beauty of Lake Tahoe with our Tour
                  </p>

                  <div className="flex z-40">
                    <Link
                      href="/event-package"
                      className="font-semibold flex cursor-pointer"
                    >
                      <h1 className="bg-white text-gray-800 px-8 rounded-full hover:bg-gray-100 transition-colors py-3 lg:h-14 flex items-center">
                        Explore Tours
                      </h1>
                      {/* <div className="bg-white text-gray-800 rounded-full w-12 flex items-center justify-center font-bold text-xl">
                        <GoArrowUpRight />
                      </div> */}
                    </Link>
                  </div>

                  <div className="shrink-0 mr-6 mt-2 sm:mr-8 md:mr-12 lg:mr-16 mb-4 sm:mb-6 md:mb-8">
                    <div className="text-white">
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin leading-none">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl text-white/50 font-light">
                        /{String(bannerData.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
            <ScrollAnimator
              className="overflow-hidden w-full lg:w-[50%] h-auto"
              repeatOnScroll
              effect="staggerSlideUp"
            >
              <div className="h-auto shrink-0 z-40">
                <Swiper
                  modules={[FreeMode, Autoplay, Pagination]}
                  slidesPerView="auto"
                  key={isRtl ? "rtl" : "ltr"}
                  dir={isRtl ? "rtl" : "ltr"}
                  spaceBetween={16}
                  speed={800}
                  loop
                  freeMode={false}
                  pagination={false}
                  grabCursor={true}
                  centeredSlides={false}
                  watchSlidesProgress
                  autoplay={autoplayConfig}
                  className="overflow-visible! "
                  breakpoints={{
                    0: { slidesPerView: 2, spaceBetween: 0 },
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 4, spaceBetween: 10 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                    1280: { slidesPerView: 3, spaceBetween: 20 },
                    1420: { slidesPerView: 4, spaceBetween: 20 },
                    1820: { slidesPerView: 4, spaceBetween: 20 },
                  }}
                  onSwiper={(s) => (thumbSwiperRef.current = s)}
                  allowTouchMove={false}
                >
                  {bannerData.map((slide, i) => {
                    const isActive = i === activeIndex;

                    return (
                      <SwiperSlide
                        key={slide.id}
                        className="w-auto! h-auto! shrink-0 cursor-pointer z-50 sm:w-auto!"
                      >
                        <button
                          onClick={() => goToSlide(i)}
                          className={`
                          block transition-all duration-500 ease-out
                          w-32 h-40
                          // sm:w-[clamp(140px,14vw,180px)] sm:h-[clamp(200px,20vh,280px)]
                          ${
                            isActive
                              ? "lg:w-[clamp(200px,20vw,300px)] lg:h-[clamp(280px,50vh,300px)]"
                              : ""
                          }
                          `}
                        >
                          <div
                            className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              fill
                              className="object-cover w-full cursor-pointer"
                            />
                            <div
                              className={`absolute inset-0  transition-opacity duration-500 ${
                                isActive
                                  ? "bg-linear-to-t from-black/90 via-black/30 to-transparent"
                                  : "bg-black/20"
                              }`}
                            />
                          </div>
                        </button>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="flex items-center w-full overflow-hidden">
                  <div className=" text-white w-[50%] h-32 -mt-6 md:mt-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-1 sm:mb-2 leading-tight">
                      {bannerData[activeIndex].title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                      {bannerData[activeIndex].description}
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-8 md:mt-10 w-[50%] px-5">
                    <div className="h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: `${
                            ((activeIndex + 1) / bannerData.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { avatars, bannerData } from "@/data";
// // import { GoArrowUpRight } from "react-icons/go";
// import ScrollAnimator from "../shared/animation/ScrollAnimator";
// import Link from "next/link";

// const BannerSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % bannerData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (containerRef.current && thumbRefs.current[activeIndex]) {
//       const offset = thumbRefs.current[activeIndex]?.offsetLeft || 0;
//       containerRef.current.style.transform = `translateX(-${offset}px)`;
//     }
//   }, [activeIndex]);

//   const handleGoTo = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="relative w-full h-[110vh] md:h-[115vh]  2xl:h-screen  ">
//       {/* Background Slides */}
//       <div className="absolute inset-0 w-full h-full -z-50">
//         {bannerData.map((slide, i) => (
//           <div
//             key={`bg-${slide.id}`}
//             className={`absolute inset-0 transition-opacity duration-800 ease-out ${
//               i === activeIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="relative h-[110vh] md:h-[115vh] 2xl:h-screen -z-50">
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 sizes="100vw"
//                 className="object-cover"
//                 priority={i === 0}
//               />
//               <div className="absolute inset-0 bg-black opacity-60"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Content Overlay */}
//       <div className="absolute inset-0 z-10 h-full ">
//         <div className="flex flex-col h-full justify-between px-5 lg:px-0">
//           {/* Main Title */}
//           <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
//             <h1 className=" lg:text-5xl xl:text-8xl text-4xl text-center pt-44 font-cormorant text-white p-5 lg:w-[60%] w-[90%] mx-auto whitespace-pre-line font-bold slideUp">
//               {bannerData[activeIndex].description}
//             </h1>
//           </ScrollAnimator>
//           {/* Bottom Content */}

//           <div className="w-full flex h-full items-end flex-col lg:flex-row justify-between ">
//             {/* Left Content */}
//             <ScrollAnimator
//               className=" w-full lg:w-[50%]"
//               repeatOnScroll
//               effect="staggerSlideUp"
//             >
//               <div className="flex flex-col items-start lg:items-center justify-center w-full h-full ">
//                 <div className="flex flex-col h-full justify-center">
//                   <h1 className="text-white md:text-3xl text-xl font-bold leading-tight mb-1 font-cormorant text-start">
//                     Lake Tahoe Tour <br className="hidden md:block" /> 16 June
//                     2025
//                   </h1>

//                   <div className="flex items-center mb-6">
//                     <div className="border-white border rounded-full px-2 py-2 flex items-center ">
//                       <div className="flex -space-x-3">
//                         {avatars.map((avatar, i) => (
//                           <Image
//                             key={i}
//                             src={avatar}
//                             alt={`Person ${i + 1}`}
//                             width={40}
//                             height={40}
//                             className="md:w-10 md:h-10 w-8 h-8 rounded-full border md:border-2 border-white object-cover "
//                           />
//                         ))}
//                       </div>
//                       <div className="ml-2 bg-gray-200 rounded-full px-3 py-3 cursor-pointer">
//                         <span className="text-gray-700 text-sm font-medium">
//                           +7K
//                         </span>
//                       </div>
//                     </div>
//                     <span className="text-gray-300 ml-4 text-sm">
//                       People joined
//                     </span>
//                   </div>

//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     Immerse yourself in the stunning
//                     <br />
//                     beauty of Lake Tahoe with our Tour
//                   </p>

//                   <div className="flex z-40">
//                     <Link
//                       href="/event-package"
//                       className="font-semibold flex cursor-pointer"
//                     >
//                       <h1 className="bg-white text-gray-800 px-8 rounded-full hover:bg-gray-100 transition-colors py-3 lg:h-14 flex items-center">
//                         Explore Tours
//                       </h1>
//                       {/* <div className="bg-white text-gray-800 rounded-full w-12 flex items-center justify-center font-bold text-xl">
//                         <GoArrowUpRight />
//                       </div> */}
//                     </Link>
//                   </div>

//                   <div className="shrink-0 mr-6 mt-2 sm:mr-8 md:mr-12 lg:mr-16 mb-4 sm:mb-6 md:mb-8">
//                     <div className="text-white">
//                       <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin leading-none">
//                         {String(activeIndex + 1).padStart(2, "0")}
//                       </span>
//                       <span className="text-lg sm:text-xl md:text-2xl text-white/50 font-light">
//                         /{String(bannerData.length).padStart(2, "0")}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </ScrollAnimator>
//             <ScrollAnimator
//               className="overflow-hidden w-full lg:w-[50%] h-auto"
//               repeatOnScroll
//               effect="staggerSlideUp"
//             >
//               <div className="h-auto shrink-0 z-40">
//                 <div
//                   ref={containerRef}
//                   className="flex flex-nowrap gap-0 min-[320px]:gap-2.5 min-[640px]:gap-2.5 min-[768px]:gap-2.5 min-[1024px]:gap-5 min-[1280px]:gap-5 min-[1420px]:gap-5 min-[1820px]:gap-5 transition-transform duration-800 ease-out will-change-transform"
//                 >
//                   {bannerData.map((slide, i) => {
//                     const isActive = i === activeIndex;

//                     return (
//                       <div
//                         key={slide.id}
//                         className="w-auto h-auto shrink-0 cursor-pointer z-50 sm:w-auto"
//                       >
//                         <button
//                           ref={(el) => {
//                             thumbRefs.current[i] = el;
//                           }}
//                           onClick={() => handleGoTo(i)}
//                           className={`
//                           block transition-all duration-500 ease-out
//                           w-32 h-40
//                           // sm:w-[clamp(140px,14vw,180px)] sm:h-[clamp(200px,20vh,280px)]
//                           ${
//                             isActive
//                               ? "lg:w-[clamp(200px,20vw,300px)] lg:h-[clamp(280px,50vh,300px)]"
//                               : ""
//                           }
//                           `}
//                         >
//                           <div
//                             className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer"
//                             style={{ width: "100%", height: "100%" }}
//                           >
//                             <Image
//                               src={slide.image}
//                               alt={slide.title}
//                               fill
//                               className="object-cover w-full cursor-pointer"
//                             />
//                             <div
//                               className={`absolute inset-0 transition-opacity duration-500 ${
//                                 isActive
//                                   ? "bg-linear-to-t from-black/90 via-black/30 to-transparent"
//                                   : "bg-black/20"
//                               }`}
//                             />
//                           </div>
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="flex items-center w-full overflow-hidden">
//                   <div className=" text-white w-[50%] h-32 -mt-7 md:mt-0">
//                     <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-1 sm:mb-2 leading-tight">
//                       {bannerData[activeIndex].title}
//                     </h3>
//                     <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
//                       {bannerData[activeIndex].description}
//                     </p>
//                   </div>
//                   <div className="mt-6 sm:mt-8 md:mt-10 w-[50%] px-5">
//                     <div className="h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-white rounded-full transition-all duration-500 ease-out"
//                         style={{
//                           width: `${
//                             ((activeIndex + 1) / bannerData.length) * 100
//                           }%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </ScrollAnimator>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;
