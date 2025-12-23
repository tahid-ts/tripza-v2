import MoreTravelStoriesSection from "@/components/about/moreTravelStoriesSection/MoreTravelStoriesSection";
import EventDetails from "@/components/home/eventDetails/EventDetails";
import ProductReviewSection from "@/components/home/productDetails/productReview/ProductReview";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Event Details"
        subtitle="Explore events that make every trip memorable."
      />
      <EventDetails />
      <ProductReviewSection />
      <MoreTravelStoriesSection />
    </MainLayout>
  );
};

export default page;
