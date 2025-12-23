import MainLayout from "@/components/layout/MainLayout";
import { PrivacyPolicy } from "@/components/privacyPolicy/PrivacyPolicy";
import Header from "@/components/shared/header/Header";
import { policyData } from "@/data";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Privacy and Policy"
        subtitle="Explore what makes this place unforgettable."
      />
      <PrivacyPolicy policyData={policyData} />
    </MainLayout>
  );
};

export default page;
