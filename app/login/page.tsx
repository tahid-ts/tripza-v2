import MainLayout from "@/components/layout/MainLayout";
import LogIn from "@/components/login/LogIn";
import Header from "@/components/shared/header/Header";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <Header
        title="Log In"
        subtitle="Log In for your new Destination, new Dream."
      />
      <LogIn />
    </MainLayout>
  );
};

export default page;
