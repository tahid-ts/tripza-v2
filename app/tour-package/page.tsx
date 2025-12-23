import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import Tours from "@/components/tours/Tours";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Tour Packeges"
        subtitle="Explore what makes this place unforgettable."
      />
      <Tours />
    </MainLayout>
  );
};

export default page;
