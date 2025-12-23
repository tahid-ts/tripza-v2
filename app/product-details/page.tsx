import ProductDetails from "@/components/home/productDetails/ProductDetails";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Product Details"
        subtitle="Everything you need to know about this product."
      />
      <ProductDetails />
    </MainLayout>
  );
};

export default page;
