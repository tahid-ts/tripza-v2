import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/shared/header/Header";
import SignUp from "@/components/signup/SignUp";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Sign Up"
        subtitle="Please SignUp us if you have any questions"
      />
      <SignUp />
    </MainLayout>
  );
};

export default page;
