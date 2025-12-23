"use client";
import { allGalleryItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import Container from "../shared/container/Container";
import DualNotchCard from "../shared/card/DualNotchCard";
import ScrollAnimator from "../shared/animation/ScrollAnimator";
import Pagination from "../shared/pagination/Pagination";

export interface BlogCardData {
  id: number;
  image: string;
  title: string;
}
const Attraction = () => {
  const [currentPage, setCurrentPage] = useState<number>(2);
  const totalPages = 5;
  const itemsPerPage = 6;

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allGalleryItems.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <Container>
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <DualNotchCard
          width="100%"
          height="600px"
          responsiveConfig={{
            sm: {
              width: "100%",
              height: "300px",
              notchWidth: 0,
              notchHeight: 0,
              borderRadius: 8,
            },
            md: {
              width: "100%",
              height: "350px",
              notchWidth: 50,
              notchHeight: 30,
            },
          }}
          notchWidth={368}
          notchHeight={248}
          notchRadius={16}
          borderRadius={16}
          topLeftContent={
            <ScrollAnimator repeatOnScroll effect="slideInDown">
              <Image
                src="/image/blog/image4.jpg"
                alt="Mont Saint-Michel"
                width={358}
                height={238}
                className="lg:w-[358px] w-[300px] h-[200px] lg:h-[238px] rounded-xl hidden md:block"
                priority
              />
            </ScrollAnimator>
          }
          bottomRightContent={
            <ScrollAnimator repeatOnScroll effect="slideInUp">
              <Image
                src="/image/blog/image5.jpg"
                alt="Mont Saint-Michel"
                width={358}
                height={238}
                className="lg:w-[358px] w-[300px] h-[200px] lg:h-[238px]  rounded-xl hidden md:block"
                priority
              />
            </ScrollAnimator>
          }
        >
          <Image
            src="/image/blog/image2.jpg"
            alt="Mont Saint-Michel"
            fill
            sizes="100vw"
            className="object-cover object-center rounded-xl"
            style={{ objectPosition: "center 100%" }}
            priority
            quality={100}
          />
        </DualNotchCard>
      </ScrollAnimator>
      <div className="xl:pt-[120px] ">
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[30px]">
            {currentItems.map((item) => (
              <Link
                key={item.id}
                href="#"
                className="group relative h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-serif leading-snug group-hover:bg-white group-hover:text-primary p-5 rounded-xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </ScrollAnimator>

        {totalPages > 1 && (
          <div className="mt-8 w-full flex justify-end items-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Attraction;
