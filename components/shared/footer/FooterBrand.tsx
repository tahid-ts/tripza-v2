"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const FooterBrand = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-2 mb-5">
        <Image
          src="/image/logo/logo.png"
          width={48}
          height={48}
          alt="Tritip logo"
          style={{ width: "auto", height: "auto" }}
          className="object-contain w-12 h-12"
        />
        <p className="text-5xl font-bold text-white ">TriTip</p>
      </div>
      <p className="text-sm text-gray-50 mb-5 leading-4 max-w-[331px]">
        Connecting you to the world’s most amazing destinations.
      </p>
      <div className="flex gap-2">
        <Link
          href={"#"}
          className="flex items-center justify-center bg-gray-500 hover:bg-white rounded-full h-10 w-10 text-white hover:text-primary"
        >
          <FaFacebook />
        </Link>
        <Link
          href={"#"}
          className="flex items-center justify-center bg-gray-500 hover:bg-white rounded-full h-10 w-10 text-white hover:text-primary"
        >
          <FaInstagram />
        </Link>
        <Link
          href={"#"}
          className="flex items-center justify-center bg-gray-500 hover:bg-white rounded-full h-10 w-10 text-white hover:text-primary"
        >
          <FaLinkedin />
        </Link>
        <Link
          href={"#"}
          className="flex items-center justify-center bg-gray-500 hover:bg-white rounded-full h-10 w-10 text-white hover:text-primary"
        >
          <BsTwitterX />
        </Link>
      </div>
    </div>
  );
};

export default FooterBrand;
