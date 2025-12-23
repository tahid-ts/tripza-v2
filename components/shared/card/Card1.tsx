"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card1Props } from "@/types/card";
import { GoArrowUpRight } from "react-icons/go";

export const Card1: React.FC<Card1Props> = ({
  image,
  title,
  description,
  href,
  classNameH,
  classNameV,
  variant = "horizontal",
}) => {
  const ReadMore = (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium transition-colors group "
    >
      <span className="text-sm">Read More</span>
      <span className="flex items-center justify-center w-10 h-10 lg:h-16 lg:w-16 bg-black text-white rounded-full transition-transform group-hover:rotate-45 border-stroke">
        {" "}
        <GoArrowUpRight className="text-white h-7 w-7" />
      </span>
    </Link>
  );

  if (variant === "horizontal") {
    return (
      <div
        className={`relative flex flex-col md:flex-row gap-4 md:gap-6 items-start border-b border-gray-200 pb-4 md:pb-2 h-full ${classNameH}`}
      >
        {/* Image */}
        <div className="rounded-2xl border-gray-200 border-b border-r p-2 w-full md:w-[50%] shrink-0 h-full">
          <div className="w-full h-60 md:h-[295px] rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={295}
              height={295}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col pt-2 md:pt-4 h-full md:h-[295px]  justify-between ">
          <div className="flex flex-col">
            <Link
              href={href}
              className="text-xl sm:text-2xl font-serif text-gray-900 mb-3 "
            >
              {title}
            </Link>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6">
              {description}
            </p>
          </div>

          <div className="flex w-full items-end justify-end ">{ReadMore}</div>
        </div>
      </div>
    );
  }

  // Vertical variant
  return (
    <div
      className={`relative border-b border-gray-200 pb-4 h-full  ${classNameV}`}
    >
      {/* Image */}
      <div className="rounded-2xl border-gray-200 border-b border-r p-2 mb-4">
        <div className="w-full h-60 sm:h-72 md:h-[295px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <Link
        href={href}
        className="text-xl sm:text-2xl font-serif text-gray-900 mb-3"
      >
        {title}
      </Link>
      <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex w-full items-end justify-end ">{ReadMore}</div>
    </div>
  );
};
