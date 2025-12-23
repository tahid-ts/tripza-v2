"use client";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { sections } from "@/data";

interface NavbarProps {
  toggleDeskNavCls?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDeskNavCls }) => {
  const [activeItemId, setActiveItemId] = useState("dashboard");
  const handleItemClick = (id: string) => {
    setActiveItemId(id);
  };

  return (
    <div className="relative z-50 pointer-events-auto">
      <Sidebar
        sections={sections}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
        position="right"
        variant="default-overlay"
        hideOnDesk
        toggleDesk={true}
        toggleDeskNavBar
        toggleDeskNavCls={toggleDeskNavCls}
        toggleDeskBtnPosition="top-right"
      />
    </div>
  );
};

export default Navbar;
