/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export interface TabItem {
  id: number;
  title: string;
  component: React.ReactNode;
}

interface TabbedViewProps {
  tabs: TabItem[];
  variant?: "page" | "card";
  className?: string;
  tabPanelClass?: string;
  showId?: boolean;
  rightElement?: ReactNode;
  tabPosition?: "left" | "center" | "right";
}

const TabbedView: React.FC<TabbedViewProps> = ({
  tabs,
  variant = "page",
  className = "",
  tabPanelClass = "",
  rightElement,
  showId = variant === "card",
  tabPosition = "left",
}) => {
  const isCard = variant === "card";
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 250);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const tabClasses = (selected: boolean) =>
    isCard
      ? ` rounded-full! cursor-pointer font-medium transition-all duration-200 ${
          selected
            ? "bg-primary! cursor-pointer text-white! border-none border-primary!"
            : "text-gray-700 bg-gray-200"
        }`
      : `px-4 pb-5 cursor-pointer pt-3 transition-colors duration-200 relative text-2xl font-bold font-title ${
          selected
            ? "font-bold cursor-pointer bg-transparent! focus:ring-0! focus:border-t-none! text-dark outline-none hover:text-primary!"
            : "text-gray-500 cursor-pointer hover:text-primary!"
        }`;
  const getTabsContainerJustifyClass = () => {
    switch (tabPosition) {
      case "center":
        return "md:justify-center justify-start";
      case "right":
        return "md:justify-end justify-center";
      default:
        return "md:justify-start justify-center";
    }
  };

  return (
    <Tabs
      selectedIndex={activeIndex}
      onSelect={(index) => setActiveIndex(index)}
      className={`${className} ${isCard ? "" : "pr-0"}`}
    >
      {/* border-b outline-none */}
      <TabList
        className={`flex lg:flex-row flex-col md:gap-6 gap-4 justify-between  ring-0 mb-8  ${
          isCard ? "pb-5 border-primary/35 z-10" : "border-gray-200"
        }`}
      >
        <div
          className={`flex flex-wrap md:gap-3 gap-2 ${getTabsContainerJustifyClass()} grow`}
        >
          {tabs.map(({ id, title }, index) => (
            <Tab
              key={id}
              className={tabClasses(index === activeIndex)}
              style={
                index === activeIndex
                  ? {
                      // borderBottom: "2px solid #FF6B35",
                      marginBottom: "-2px",
                      position: "relative",
                    }
                  : {}
              }
            >
              <div className="flex items-center cursor-pointer md:text-[16px] text-xs  w-full md:h-14 h-12 px-6">
                {showId && isCard && <span className="mr-1">{id}.</span>}
                <span>{title}</span>
              </div>
            </Tab>
          ))}
        </div>

        {rightElement && (
          <div className="flex items-center md:text-base text-sm">
            {rightElement}
          </div>
        )}
      </TabList>
      {/* === Tab Panels === */}
      <div className={` ${tabPanelClass}`} style={{ minHeight: "100px" }}>
        {tabs.map(({ id, component }, index) => (
          <TabPanel
            key={id}
            className={`w-full transition-all duration-250 transform
              ${
                index === activeIndex
                  ? `opacity-100 translate-y-0 z-10`
                  : `opacity-0 translate-y-3 z-0 pointer-events-none`
              }`}
          >
            {component}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default TabbedView;
