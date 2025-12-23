import CheckoutSection from "@/components/home/checkout/CheckoutSection";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header title="Checkout" subtitle="Safe and simple payment process." />
      <CheckoutSection />
    </MainLayout>
  );
};

export default page;
