import MainLayout from "@/components/layout/MainLayout";
import Products from "@/components/products/Products";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Travel Essentials"
        subtitle="Everything you need to know about this product."
      />
      <Products />
    </MainLayout>
  );
};

export default page;
