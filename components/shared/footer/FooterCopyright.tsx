"use client";

import Link from "next/link";
import React from "react";

const FooterCopyright = () => {
  return (
    <div className="w-full border-t border-gray-300 py-4 px-4 mt-6 flex justify-between items-center ">
      <div>
        <h1 className="text-center text-white text-sm  font-medium">
          ©{" "}
          <Link href={"/"} className="text-white">
            Trilogysoft
          </Link>{" "}
          | {new Date().getFullYear()} All rights reserved.
        </h1>
      </div>
      <div className="flex gap-3">
        <Link
          href="/privacy-policy"
          className="text-center text-white text-sm  font-medium block mt-1"
        >
          Privacy
        </Link>
        <Link
          href="/privacy-policy"
          className="text-center text-white text-sm  font-medium block mt-1"
        >
          Terms
        </Link>
        <Link
          href="/privacy-policy"
          className="text-center text-white text-sm  font-medium block mt-1"
        >
          Help
        </Link>
      </div>
    </div>
  );
};

export default FooterCopyright;
