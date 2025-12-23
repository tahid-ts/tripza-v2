import Contact from "@/components/contact/Contact";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Contact Us"
        subtitle="Plan your adventure with detailed tour insights."
      />
      <Contact />
    </MainLayout>
  );
};

export default page;
