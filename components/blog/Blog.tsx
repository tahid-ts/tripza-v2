"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { allGalleryItems } from "@/data";
import Container from "../shared/container/Container";
import Decoration from "../shared/decoration/Decoration";
import Pagination from "../shared/pagination/Pagination";

export interface BlogCardData {
  id: number;
  image: string;
  title: string;
}

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(2);
  const totalPages = 5;
  const itemsPerPage = 6;

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allGalleryItems.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  // Memoize page numbers array

  return (
    <Container>
      <div className="relative w-full">
        <div className="flex items-end justify-center xl:pb-[120px] pb-5">
          <div className="relative w-full h-[600px]">
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
            <Decoration
              preset={"topLeft"}
              opacity="full"
              className="p-5"
              responsive="always-visible"
            >
              <h1 className="text-white lg:text-5xl text-2xl  font-cormorant">
                Mont Saint-Michel
              </h1>
            </Decoration>
            <Decoration
              preset={"topRight"}
              opacity="full"
              className="p-5 mt-40 lg:mt-0"
              responsive="always-visible"
            >
              <div className="bg-white/20 p-5 rounded-xl">
                <p className="text-white text-xs leading-relaxed mb-3">
                  Mont Saint-Michel, a UNESCO World Heritage site in Normandy,{" "}
                  <br />
                  France, is a stunning medieval abbey perched on a rocky tidal{" "}
                  <br />
                  island, surrounded by...
                </p>
                <Link
                  href="#"
                  className="text-white font-semibold text-xs hover:underline inline-block"
                >
                  Read More &gt;&gt;
                </Link>
              </div>
            </Decoration>
            <Decoration
              preset={"bottomLeft"}
              opacity="full"
              className="p-5"
              responsive="always-visible"
            >
              <div className="flex gap-2">
                <span className="bg-white rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                  4.5/5
                </span>
                <span className="bg-white rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                  Normandy, France
                </span>
              </div>
            </Decoration>
            <Decoration
              preset={"bottomRight"}
              opacity="full"
              className="p-5"
              responsive="always-visible"
            >
              <Link
                href={"/"}
                className="bg-white rounded-full px-5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
              >
                Share
              </Link>
            </Decoration>
          </div>
        </div>
      </div>
      <div className="">
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

export default Blog;
