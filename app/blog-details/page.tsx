import MoreTravelStoriesSection from "@/components/about/moreTravelStoriesSection/MoreTravelStoriesSection";
import BlogDetails from "@/components/blogDetails/BlogDetails";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import { blogData } from "@/data";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Blog Details"
        subtitle="Everything you need to know about this product."
      />
      <BlogDetails data={blogData} />
      <MoreTravelStoriesSection />
    </MainLayout>
  );
};

export default page;
