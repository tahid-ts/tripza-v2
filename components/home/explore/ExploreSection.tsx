import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Container from "@/components/shared/container/Container";
import { ExploreScheduledSlider } from "@/components/slider/ExploreScheduledSlider";
import { exploreScheduledData } from "@/data";
const ExploreSection = () => {
  return (
    <div className="bg-[url('/image/background/bg3.png')]  bg-cover bg-no-repeat bg-center bg-white">
      <Container>
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <ExploreScheduledSlider data={exploreScheduledData} />
        </ScrollAnimator>
      </Container>
    </div>
  );
};

export default ExploreSection;
