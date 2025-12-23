import Events from "@/components/events/Events";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Events"
        subtitle="Everything you need to know about this product."
      />
      <Events />
    </MainLayout>
  );
};

export default page;
