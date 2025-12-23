"use client";

import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Container from "@/components/shared/container/Container";
import Decoration from "@/components/shared/decoration/Decoration";
import Title from "@/components/shared/title/Title";
import TravellersReviewSlider from "@/components/slider/TravellersReviewSlider";
import { reviewsData } from "@/data";
import Image from "next/image";

const TravellersReviewSection = () => {
  return (
    <section className="relative bg-[#F7F7F7]">
      <Decoration src="/image/vector/Clients.png" preset={"topLeft"} />
      <Container>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-32 place-items-center ">
          {/* Left Image */}
          <ScrollAnimator
            className="lg:col-span-2 order-2 md:order-1"
            effect="flip"
          >
            <div className="w-[280px] h-[294px] sm:w-[320px] sm:h-[336px] md:w-[360px] md:h-[378px] lg:w-[380px] lg:h-[399px] xl:w-[420px] xl:h-[442px] relative shrink-0">
              <Image
                src="/image/review/image1.png"
                alt="Traveller review preview"
                fill
                className="object-cover rounded-xl sm:rounded-2xl"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, (max-width: 1280px) 380px, 420px"
                priority
              />
            </div>
          </ScrollAnimator>

          {/* Right Slider */}
          <div className="w-full lg:col-span-3 overflow-hidden order-1 md:order-2">
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <Title title={"Our Happy Travellers"} />
              <TravellersReviewSlider reviews={reviewsData} />
            </ScrollAnimator>
          </div>
        </div>
      </Container>
      <Decoration
        src="/image/vector/Testemonial.png"
        className="lg:hidden block"
        preset={"bottomRight"}
      />
      <Image
        alt="testimonial"
        src={"/image/vector/Testemonial.png"}
        width={500}
        height={200}
        className="absolute bottom-0 right-0 w-4xl h-auto lg:block hidden"
      />
    </section>
  );
};

export default TravellersReviewSection;
