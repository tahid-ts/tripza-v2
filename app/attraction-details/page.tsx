import MoreTravelStoriesSection from "@/components/about/moreTravelStoriesSection/MoreTravelStoriesSection";
import AttractionDetails from "@/components/attractionDetails/AttractionDetails";
import PromiseSection from "@/components/home/promise/PromiseSection";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import { attractionPostData } from "@/data";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Attraction Details"
        subtitle="Explore what makes this place unforgettable."
      />
      <AttractionDetails data={attractionPostData} />
      <MoreTravelStoriesSection />
      <PromiseSection />
    </MainLayout>
  );
};

export default page;
