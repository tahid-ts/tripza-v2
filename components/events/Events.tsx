"use client";

import { useState } from "react";
import Card from "../shared/card/Card";
import { GoArrowUpRight } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import Container from "../shared/container/Container";
import Pagination from "../shared/pagination/Pagination";
import { BiSearch } from "react-icons/bi";
import { eventsData, eventsDataCategories } from "@/data";
import ScrollAnimator from "../shared/animation/ScrollAnimator";

/* ---------------- Hero Section ---------------- */
const HeroSection = () => (
  <div className="bg-[url(/image/events/largeimage.jpg)] bg-cover rounded-3xl p-6 md:p-10 flex flex-col justify-end h-full min-h-[260px] md:min-h-[420px]">
    <div className="bg-primary/20 backdrop-blur-sm bg-opacity-50 border border-gray-200/40 p-4 md:p-5 rounded-lg max-w-[85%] md:max-w-[70%]">
      <p className="text-white text-xl md:text-2xl mb-0 leading-relaxed">
        Fixed plans, <br /> Endless memories
      </p>
    </div>
  </div>
);

const cardProps = {
  isActive: true,
  shapeEffect: "always",
  shapePosition: "bottomRight",
  shapeProps: {
    // height: 380,
    width: "100%",
    notchWidth: 76,
    notchHeight: 76,
    notchRadius: 12,
  },
  link: "/event-details",
  showGradient: true,
  gradientIntensity: "medium",
  infoPillsPosition: "top",
  titleClassName: "text-white text-xl font-bold",
  showContent: true,
  cornerContent: (
    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
      <GoArrowUpRight className="text-white h-7 w-7" />
    </div>
  ),
} as const;

/* ---------------- Main Page ---------------- */
const Events = () => {
  const [activeTab, setActiveTab] = useState("outdoor");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  /* Filter States */
  const [filterOpen, setFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");

  /* Apply Filters */
  const filteredEvents = eventsData
    .filter((p) => (activeTab === "all" ? true : p.category === activeTab))
    .filter((p) =>
      searchText
        ? p.name.toLowerCase().includes(searchText.toLowerCase())
        : true
    )
    .filter((p) => (minPrice !== null ? p.price >= minPrice : true))
    .filter((p) => (maxPrice !== null ? p.price <= maxPrice : true));

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const resetFilters = () => {
    setMinPrice(null);
    setMaxPrice(null);
  };

  return (
    <div className="min-h-screen bg-white py-6">
      <Container>
        {/* HEADER: Tabs + Search + Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#F2F2F2] rounded-full p-1 px-4">
            {eventsDataCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setActiveTab(category.value);
                  setCurrentPage(1);
                }}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm cursor-pointer transition-all ${
                  activeTab === category.value
                    ? "bg-black text-white"
                    : "text-gray-900"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search + Filter (RELATIVE WRAPPER) */}
          <div className="relative flex gap-2.5">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search items"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm w-full focus:outline-none"
              />
              <BiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm flex items-center gap-2"
            >
              <LuSlidersHorizontal className="w-4 h-4" />
              Filter
            </button>

            {/* Dropdown */}
            {filterOpen && (
              <div className="absolute right-0 top-full mt-3 bg-white shadow-xl border border-gray-200 rounded-xl w-full md:w-64 p-5 z-50">
                <h3 className="text-sm font-semibold mb-2">Price Range</h3>
                <div className="flex gap-2 mb-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border rounded-md px-2 py-1 text-sm"
                    value={minPrice ?? ""}
                    onChange={(e) =>
                      setMinPrice(
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border rounded-md px-2 py-1 text-sm"
                    value={maxPrice ?? ""}
                    onChange={(e) =>
                      setMaxPrice(
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="bg-black text-white text-sm px-4 py-1.5 rounded-md"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ---------------- Grid ---------------- */}
        <div>
          {/* ================= SM ================= */}
          <div className="block md:hidden mb-6">
            <div className="grid grid-cols-1 gap-6">
              {displayedEvents.map((event) => (
                <ScrollAnimator
                  key={event.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    cardBG={event.bg}
                    title={event.name}
                    infoPills={event.infoPills}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 520 }}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>

          {/* ================= MD ================= */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {displayedEvents.map((event) => (
                <ScrollAnimator
                  key={event.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    cardBG={event.bg}
                    title={event.name}
                    infoPills={event.infoPills}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 490 }}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>

          {/* ================= LG ================= */}
          <div className="hidden lg:block xl:hidden">
            <div className="grid grid-cols-3 gap-6">
              {displayedEvents.map((event) => (
                <ScrollAnimator
                  key={event.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    cardBG={event.bg}
                    title={event.name}
                    infoPills={event.infoPills}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 380 }}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>

          {/* ================= XL ================= */}
          <div className="hidden xl:block">
            {/* Row 1: Hero + 2 cards */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-2">
                <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                  <HeroSection />
                </ScrollAnimator>
              </div>
              {displayedEvents.slice(0, 2).map((event) => (
                <ScrollAnimator
                  key={event.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    cardBG={event.bg}
                    title={event.name}
                    infoPills={event.infoPills}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 380 }}
                  />
                </ScrollAnimator>
              ))}
            </div>

            {/* Row 2: 4 cards */}
            <div className="grid grid-cols-4 gap-6">
              {displayedEvents.slice(2, 6).map((event) => (
                <ScrollAnimator
                  key={event.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    cardBG={event.bg}
                    title={event.name}
                    infoPills={event.infoPills}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 380 }}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="w-full flex justify-end items-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Events;
