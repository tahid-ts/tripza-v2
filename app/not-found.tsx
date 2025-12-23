import MainLayout from "@/components/layout/MainLayout";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Header from "@/components/shared/header/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <MainLayout>
      <Header title="Error" subtitle="Not found." />
      <div className="h-screen">
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <div className="relative h-[350px] w-full max-w-[400px] mx-auto md:max-w-[400px] lg:max-w-[450px]">
            <Image
              src="/image/404/image.png"
              alt="not found image"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl">Page Not Found</h1>
            <p className="text-gray-500">
              This page may have been removed, had its name changed, or is
              temporarily unavailable.
            </p>
            <Link
              href={"/"}
              className=" border border-gray-300 rounded-lg p-2 px-4 hover:bg-gray-100"
            >
              Back to Home
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </MainLayout>
  );
};

export default Notfound;
