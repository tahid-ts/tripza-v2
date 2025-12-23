"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterSocials = () => {
  return (
    <div className="flex flex-col items-start  mb-20 w-full px-4">
      <h1 className="mb-4 text-lg font-semibold text-white text-start">
        Instagram Posts
      </h1>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        <Link href={"#"} className="relative w-[93px] h-16">
          <Image
            src="/image/instagram post/image.png"
            alt="Traveller review preview"
            width={93}
            height={64}
            className="object-cover rounded-xl sm:rounded-2xl"
            sizes="(max-width: 768px) 93px, 93px"
          />
        </Link>
        <Link href={"#"} className="relative w-[93px] h-16">
          <Image
            src="/image/instagram post/image1.png"
            alt="Traveller review preview"
            width={93}
            height={64}
            className="object-cover rounded-xl sm:rounded-2xl"
            sizes="(max-width: 768px) 93px, 93px"
          />
        </Link>
        <Link href={"#"} className="relative w-[93px] h-16">
          <Image
            src="/image/instagram post/image2.png"
            alt="Traveller review preview"
            width={93}
            height={64}
            className="object-cover rounded-xl sm:rounded-2xl"
            sizes="(max-width: 768px) 93px, 93px"
          />
        </Link>
        <Link href={"#"} className="relative w-[93px] h-16">
          <Image
            src="/image/instagram post/image3.png"
            alt="Traveller review preview"
            width={93}
            height={64}
            className="object-cover rounded-xl sm:rounded-2xl"
            sizes="(max-width: 768px) 93px, 93px"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocials;
