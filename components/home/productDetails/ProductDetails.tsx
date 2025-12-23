import Container from "@/components/shared/container/Container";
import React from "react";

import TabbedView, { TabItem } from "@/components/shared/tabs/TabbedView";
import ProductContent from "./productContent/ProductContent";
import ProductReviewSection from "./productReview/ProductReview";
import ProductDescription from "./productDescription/ProductDescription";
import { productData } from "@/data";
import TentSlider from "@/components/slider/TentSlider";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";

const tabsCommponent: TabItem[] = [
  {
    id: 1,
    title: "Description",
    component: (
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <ProductDescription
          mainDescription={productData.mainDescription}
          keyFeatures={productData.keyFeatures}
          perfectFor={productData.perfectFor}
        />
      </ScrollAnimator>
    ),
  },
  {
    id: 2,
    title: "Review",
    component: (
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <ProductReviewSection />
      </ScrollAnimator>
    ),
  },
];
const ProductDetails = () => {
  return (
    <Container>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 mb-12">
        <TentSlider />
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <ProductContent />
        </ScrollAnimator>
      </div>
      <TabbedView
        showId={false}
        variant="card"
        tabs={tabsCommponent}
        className="mb-8"
      />
    </Container>
  );
};

export default ProductDetails;
