import React from "react";
import Container from "@/components/shared/container/Container";
import { MoreDataSlider } from "@/components/slider/MoreDataSlider";
import { MoreTravelStoriesData } from "@/data";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";

const MoreTravelStoriesSection = () => {
  return (
    <Container mainClassName="bg-background" controlPy={false}>
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <MoreDataSlider
          title="More Travel Stories"
          data={MoreTravelStoriesData}
        />
      </ScrollAnimator>
    </Container>
  );
};

export default MoreTravelStoriesSection;
