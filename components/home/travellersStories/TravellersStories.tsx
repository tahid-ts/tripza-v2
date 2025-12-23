import React from "react";
import Card from "@/components/shared/card/Card";
import Title from "@/components/shared/title/Title";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Container from "@/components/shared/container/Container";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Link from "next/link";

const TravellersStories = () => {
  const title = "Breathtaking Escapes: Discover the Finest Mountain Views";

  return (
    <Container className="relative" mainClassName="bg-background">
      {/* Main Grid Container */}
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 xl:grid-rows-9 gap-4">
          <div className="md:col-span-2 xl:col-span-2 xl:row-span-2 w-full">
            <Title
              title="Traveler Stories"
              subtitle="Have questions about your journey? Find clear answers right here."
            />
          </div>

          <div className="md:col-span-2 xl:col-span-2 xl:row-span-6 xl:col-start-1 xl:row-start-4 w-full">
            <Card
              cardBG="/image/travel story/image.jpg"
              imageAlt="Main travel story image"
              title={title}
              isActive
              isHovered
              shapeEffect="always"
              shapeProps={{
                height: 536,
                width: "100%",
                notchWidth: 80,
                notchHeight: 80,
                notchRadius: 12,
              }}
              showGradient
              link="/blog-details"
              gradientIntensity="medium"
              className="group w-full h-auto"
              titleClassName="group-hover:text-black text-white bg-transparent p-2 rounded-lg font-bold z-20 text-sm md:text-[28px] font-bold md:group-hover:bg-white ml-1"
              showContent
              cornerContent={
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center border-stroke">
                  <GoArrowUpRight className="text-white h-7 w-7" />
                </div>
              }
              aspectRatio="4/5"
              imagePriority={false}
            />
            {/* <div className="relative">
              <div className="absolute bottom-0 inset-x-0 bg-white text-primary rounded-lg p-2 m-2">
                <h1 className="text-sm md:text-[28px] font-bold font-cormorant leading-[1.3]">
                  Breathtaking Escapes: Discover the Finest Mountain Views
                </h1>
              </div>
            </div> */}
          </div>

          <Link
            href="/blog-details"
            className="relative group w-full h-48 md:h-auto
               md:col-span-1
               xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-3"
          >
            <Image
              src="/image/travel story/image1.png"
              fill
              alt="Travel story image 1"
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 inset-x-0 text-white group-hover:bg-white group-hover:text-primary rounded-lg p-2 m-2">
              <h1 className="text-sm md:text-[28px] font-bold font-cormorant leading-[1.3]">
                Conquering the Heights: A Journey to Mount Everest
              </h1>
            </div>
          </Link>

          <Link
            href="/blog-details"
            className="relative group w-full h-64 md:h-auto
               md:col-span-1
               xl:col-span-2 xl:row-span-4 xl:col-start-3 xl:row-start-5"
          >
            <Image
              src="/image/travel story/image2.png"
              fill
              alt="Travel story image 2"
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 inset-x-0 text-white group-hover:bg-white group-hover:text-primary rounded-lg p-2 m-2">
              <h1 className="text-sm md:text-[28px] font-bold font-cormorant leading-[1.3]">
                Into the Wild: Exploring the Wonders of Animal Planet Tours
              </h1>
            </div>
          </Link>

          <Link
            href="/blog-details"
            className="relative group w-full h-64 md:h-auto
               md:col-span-1
               xl:col-span-2 xl:row-span-4 xl:col-start-5 xl:row-start-1"
          >
            <Image
              src="/image/travel story/image3.png"
              fill
              alt="Travel story image 3"
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 inset-x-0 text-white group-hover:bg-white group-hover:text-primary rounded-lg p-2 m-2">
              <h1 className="text-sm md:text-[28px] font-bold font-cormorant leading-[1.3]">
                Thrill on the Slopes: Experience the Best of Snow Skiing
              </h1>
            </div>
          </Link>

          <Link
            href="/blog-details"
            className="relative group w-full h-48 md:h-auto
               md:col-span-1
               xl:col-span-2 xl:row-span-2 xl:col-start-5 xl:row-start-5"
          >
            <Image
              src="/image/travel story/image4.png"
              fill
              alt="Travel story image 4"
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 inset-x-0 text-white group-hover:bg-white group-hover:text-primary rounded-lg p-2 m-2">
              <h1 className="text-sm md:text-[28px] font-bold font-cormorant leading-[1.3]">
                Timeless Elegance: Exploring the Magic of the Eiffel Tower
              </h1>
            </div>
          </Link>
        </div>
      </ScrollAnimator>
    </Container>
  );
};

export default TravellersStories;
