import MainLayout from "@/components/layout/MainLayout";
import Accordion from "@/components/shared/accordian/Accordion";
import Header from "@/components/shared/header/Header";
import { accordionData } from "@/data";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header title="FAQ" subtitle="Your travel questions, answered." />
      <Accordion data={accordionData} />
    </MainLayout>
  );
};

export default page;
