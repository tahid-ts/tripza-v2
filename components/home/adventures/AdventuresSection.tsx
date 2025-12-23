"use client";

import dynamic from "next/dynamic";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Container from "@/components/shared/container/Container";
import Decoration from "@/components/shared/decoration/Decoration";
import Title from "@/components/shared/title/Title";
import { DesertAdventureSlider } from "@/components/slider/DesertAdventureSlider";
import {
  DesertAdventureTypeData,
  DesertAdventureTypeTrekkingData,
} from "@/data";

// Import TabItem from TabbedView
import { TabItem } from "@/components/shared/tabs/TabbedView";

// Disable SSR for TabbedView
const DynamicTabbedView = dynamic(
  () => import("@/components/shared/tabs/TabbedView"),
  { ssr: false }
);

const tabsCommponent: TabItem[] = [
  {
    id: 1,
    title: "Desert Expeditions",
    component: (
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <DesertAdventureSlider items={DesertAdventureTypeData} />
      </ScrollAnimator>
    ),
  },
  {
    id: 2,
    title: "Trekking Adventure",
    component: (
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <DesertAdventureSlider items={DesertAdventureTypeTrekkingData} />
      </ScrollAnimator>
    ),
  },
  {
    id: 3,
    title: "Historical City Tours",
    component: (
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <DesertAdventureSlider items={DesertAdventureTypeData} />
      </ScrollAnimator>
    ),
  },
];

const AdventuresSection = () => {
  return (
    <Container maxWidth="full" className="relative">
      <Title
        align="center"
        className="lg:pb-5 pb-2.5"
        title={"Adventures Worth Remembering"}
      />
      <DynamicTabbedView
        showId={false}
        variant="card"
        tabs={tabsCommponent}
        className="mb-8"
        tabPosition="center"
      />
      <Decoration
        src="/image/vector/vector8.png"
        preset={"topLeft"}
        style="-z-10"
      />
    </Container>
  );
};

export default AdventuresSection;
