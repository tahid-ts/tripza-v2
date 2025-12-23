import React from "react";
import Container from "@/components/shared/container/Container";
import { ExpertlyCraftedSlider } from "@/components/slider/ExpertlyCraftedSlider";
import { ExpertlyCraftedData } from "@/data";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Decoration from "@/components/shared/decoration/Decoration";

const ECPSection = () => {
  return (
    <div className="relative">
      <Container>
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <ExpertlyCraftedSlider data={ExpertlyCraftedData} />
        </ScrollAnimator>
      </Container>
      <Decoration src="/image/vector/vector1.png" preset={"topRight"} />
      <Decoration src="/image/vector/vector8.png" preset={"bottomLeft"} />
    </div>
  );
};

export default ECPSection;
