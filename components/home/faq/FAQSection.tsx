"use client";
import React from "react";
import Accordion from "@/components/shared/accordian/Accordion";
import Container from "@/components/shared/container/Container";
import ImageGrid from "@/components/shared/grid/ImageGrid";
import Title from "@/components/shared/title/Title";
import { accordionData, imagesGridData } from "@/data";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";

const FAQSection = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:h-[580px] h-full ">
          <div className="flex flex-col justify-between gap-5 lg:mr-36  h-full">
            <div>
              <Title
                title="Frequently\n Asked Questions"
                subtitle="Have questions about your journey?\n Find clear answers right here."
              />
            </div>
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <ImageGrid items={imagesGridData} />
            </ScrollAnimator>
          </div>
          <div>
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <Accordion data={accordionData} className="lg:max-w-3xl lg:p-6" />
            </ScrollAnimator>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
