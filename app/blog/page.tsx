import Blog from "@/components/blog/Blog";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Travel Stories"
        subtitle="Inspiring journeys and unforgettable travel experiences."
      />
      <Blog />
    </MainLayout>
  );
};

export default page;
