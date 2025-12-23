import MoreTravelStoriesSection from "@/components/about/moreTravelStoriesSection/MoreTravelStoriesSection";
import ProductReviewSection from "@/components/home/productDetails/productReview/ProductReview";
import TourDetails from "@/components/home/tourDetails/TourDetails";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Tour Details"
        subtitle="Plan your adventure with detailed tour insights."
      />
      <TourDetails />
      <ProductReviewSection />

      <MoreTravelStoriesSection />
    </MainLayout>
  );
};

export default page;
