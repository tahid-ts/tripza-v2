"use client";

import React, { ReactNode } from "react";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
type Props = {
  children: ReactNode;
  toggleDeskNavCls?: boolean;
  homeFooterUI?: boolean;
};
const MainLayout = ({ children, toggleDeskNavCls, homeFooterUI }: Props) => {
  return (
    <>
      <Navbar toggleDeskNavCls={toggleDeskNavCls} />
      <main className="relative">{children}</main>
      <Footer homeFooterUI={homeFooterUI} />
    </>
  );
};

export default MainLayout;
