import Attraction from "@/components/attraction/Attraction";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Attraction"
        subtitle="Explore what makes this place unforgettable."
      />
      <Attraction />
    </MainLayout>
  );
};

export default page;
