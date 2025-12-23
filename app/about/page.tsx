import React from "react";
import AboutContentSection from "@/components/about/aboutContentSection/AboutContentSection";
import TravellersReviewSection from "@/components/home/travellersReview/TravellersReviewSection";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import MoreTravelStoriesSection from "@/components/about/moreTravelStoriesSection/MoreTravelStoriesSection";

const page = () => {
  return (
    <MainLayout>
      <Header title="About Us" subtitle="Get to know who we are." />
      <AboutContentSection />
      <TravellersReviewSection />
      <MoreTravelStoriesSection />
    </MainLayout>
  );
};

export default page;
