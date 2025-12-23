"use client";

import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import CardMask from "@/components/shared/card/CardMask";
import Decoration from "@/components/shared/decoration/Decoration";
import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import { FaPlay } from "react-icons/fa";
import { PiX } from "react-icons/pi";

interface AboutVideoSectionProps {
  videoId: string;
}

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-md bg-white/10 backdrop-blur-lg border border-gray-100 p-4 text-center">
    <h1 className="text-2xl font-bold text-white">{value}</h1>
    <p className="text-white text-sm">{label}</p>
  </div>
);

const AboutVideoSection = ({ videoId }: AboutVideoSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const maxResUrl = `/image/about/image1.png`;
  const hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div className="hidden md:block w-[645px] h-[600px] relative ">
        <CardMask
          position="topRight"
          effect="always"
          notchHeight={234}
          notchWidth={532}
          width={645}
          height={600}
          className="w-[645px] h-[600px] relative group hidden md:block"
          cornerContent={
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <div className="relative w-[532px] h-[264px] ">
                <Image
                  src={maxResUrl}
                  alt="Video thumbnail"
                  // fill
                  width={532}
                  height={264}
                  className="object-cover  overflow-visible absolute -top-11 -right-3"
                  priority
                  unoptimized
                  onError={(e) => {
                    e.currentTarget.src = hqUrl;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center mb-20">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full h-20 w-20 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center cursor-pointer"
                  >
                    <FaPlay className="w-8 h-8 text-white ml-1" fill="white" />{" "}
                  </button>
                </div>
              </div>
            </ScrollAnimator>
          }
        >
          <Image
            src="/image/about/image.png"
            alt="Card background"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </CardMask>

        <Decoration
          preset={"leftCenter"}
          opacity="full"
          height={147}
          width={182}
          className="h-[147px] w-[182px] mt-20 ml-6"
        >
          <div className="rounded-xl bg-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 relative">
            <div className="p-5 py-8">
              <CountUp start={80} end={127} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span className="text-5xl text-white" ref={countUpRef} />{" "}
                    <span className="text-5xl text-white">+</span>
                  </div>
                )}
              </CountUp>
              <h1 className="text-white">Tours arranged</h1>
            </div>
            <Decoration
              src="/image/about/conter.png"
              alt="counter"
              opacity="custom"
              className="opacity-10"
              preset={"bottomRight"}
            />
          </div>
        </Decoration>
        <Decoration
          preset={"bottomCenter"}
          opacity="full"
          height={147}
          width={182}
          className="h-[147px] w-[182px] mb-5"
        >
          <div className="rounded-xl bg-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 relative">
            <div className="p-5 py-8">
              <CountUp start={80} end={127} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span className="text-5xl text-white" ref={countUpRef} />{" "}
                    <span className="text-5xl text-white">+</span>
                  </div>
                )}
              </CountUp>
              <h1 className="text-white">Travelers</h1>
            </div>
            <Decoration
              src="/image/about/conter1.png"
              alt="counter"
              opacity="custom"
              className="opacity-10"
              preset={"bottomRight"}
            />
          </div>
        </Decoration>
        <Decoration
          preset={"rightCenter"}
          opacity="full"
          height={147}
          width={182}
          className="h-[147px] w-[182px] mt-32 mr-5"
        >
          <div className="rounded-xl bg-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 relative">
            <div className="p-5 py-8">
              <CountUp start={1} end={17} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span className="text-5xl text-white" ref={countUpRef} />{" "}
                    <span className="text-5xl text-white">+</span>
                  </div>
                )}
              </CountUp>
              <h1 className="text-white">Trust award</h1>
            </div>
            <Decoration
              src="/image/about/conter2.png"
              alt="counter"
              opacity="custom"
              className="opacity-10"
              preset={"bottomRight"}
            />
          </div>
        </Decoration>
      </div>

      <div className="md:hidden relative w-full min-h-[600px] overflow-hidden rounded-lg flex items-center justify-center">
        <Image
          src="/image/about/image.png"
          alt="Card background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute top-4  w-[95%]  mx-auto max-w-[340px] h-[180px] rounded-lg shadow-2xl overflow-hidden z-10">
          <Image
            src={maxResUrl}
            alt="Video thumbnail"
            fill
            className="object-cover"
            priority
            unoptimized
            onError={(e) => (e.currentTarget.src = hqUrl)}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-red-600 hover:bg-red-700 rounded-full h-12 w-12 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center transition">
              <FaPlay className="w-5 h-5 text-white ml-0.5" />
            </div>
          </button>
        </div>

        {/* Stat cards - bottom, centered, responsive */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-md flex flex-col gap-4 z-10 px-4">
          <StatCard value="127+" label="Tours arranged" />
          <StatCard value="127+" label="Tours arranged" />
          <StatCard value="127+" label="Tours arranged" />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition"
              aria-label="Close"
            >
              <PiX className="w-6 h-6 text-red-600" />
            </button>

            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="About Us Video"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutVideoSection;
