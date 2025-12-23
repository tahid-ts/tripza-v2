"use client";

import React from "react";
import { TravelEssentialsData } from "@/data";
import Container from "@/components/shared/container/Container";
import Card from "@/components/shared/card/Card";
import { GoArrowUpRight } from "react-icons/go";
import Title from "@/components/shared/title/Title";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Link from "next/link";

const baseCardProps = {
  cardBG: "/image/travel essentials/BG1.png",
  link: "/product-details",
  isActive: true,
  shapeEffect: "always",
  shapePosition: "bottomRight",
  shapeProps: {
    width: "100%",
    notchWidth: 76,
    notchHeight: 76,
    notchRadius: 12,
  },
  showGradient: true,
  gradientIntensity: "medium",
  titleClassName: "text-black text-xl font-bold",
  priceClassName: "text-black",
  showContent: true,
  cornerContent: (
    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center border-stroke">
      <GoArrowUpRight className="text-white h-7 w-7" />
    </div>
  ),
} as const;

const TravelEssentials = () => {
  return (
    <section className="relative">
      <Container>
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          {/* ================= MD ================= */}
          <div className="block lg:hidden">
            {/* Hero */}
            <div className="bg-background rounded-3xl p-8 md:p-12 mb-6">
              <Title
                title="Travel\n Essentials"
                subtitle="Find everything you need for your next adventure, from essentials to must-have accessories."
              />
              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium shadow-sm"
                >
                  See More
                </Link>
              </div>
            </div>
            {/* ================= SM ================= */}
            <div className="block md:hidden ">
              <div className="grid grid-cols-1 gap-6">
                {TravelEssentialsData.map((product) => (
                  <Card
                    key={product.id}
                    {...product}
                    {...baseCardProps}
                    shapeProps={{ ...baseCardProps.shapeProps, height: 490 }}
                  />
                ))}
              </div>
            </div>

            {/* 3 rows × 2 cards */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {TravelEssentialsData.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  {...baseCardProps}
                  shapeProps={{ ...baseCardProps.shapeProps, height: 490 }}
                />
              ))}
            </div>
          </div>

          {/* ================= LG ================= */}
          <div className="hidden lg:block xl:hidden">
            {/* Hero */}
            <div className="bg-background rounded-3xl p-12 mb-6">
              <Title
                title="Travel\n Essentials"
                subtitle="Find everything you need for your next adventure, from essentials to must-have accessories."
              />
              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium shadow-sm"
                >
                  See More
                </Link>
              </div>
            </div>

            {/* 2 rows × 3 cards */}
            <div className="grid grid-cols-3 gap-6">
              {TravelEssentialsData.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  {...baseCardProps}
                  shapeProps={{ ...baseCardProps.shapeProps, height: 380 }}
                />
              ))}
            </div>
          </div>

          {/* ================= XL ================= */}
          <div className="hidden xl:block">
            {/* Row 1: Hero + 2 cards */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-2 bg-background rounded-3xl p-12 flex flex-col justify-between">
                <Title
                  title="Travel\n Essentials"
                  subtitle="Find everything you need for your next adventure, from essentials to must-have accessories."
                />
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-flex bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium shadow-sm"
                  >
                    See More
                  </Link>
                </div>
              </div>

              {TravelEssentialsData.slice(0, 2).map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  {...baseCardProps}
                  shapeProps={{ ...baseCardProps.shapeProps, height: 380 }}
                />
              ))}
            </div>

            {/* Row 2: 4 cards */}
            <div className="grid grid-cols-4 gap-6">
              {TravelEssentialsData.slice(2, 6).map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  {...baseCardProps}
                  shapeProps={{ ...baseCardProps.shapeProps, height: 380 }}
                />
              ))}
            </div>
          </div>
        </ScrollAnimator>
      </Container>
    </section>
  );
};

export default TravelEssentials;
