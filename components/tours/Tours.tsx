"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "../shared/card/Card";
import { GoArrowUpRight } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import Container from "../shared/container/Container";
import Pagination from "../shared/pagination/Pagination";
import { BiSearch } from "react-icons/bi";
import { toursData, toursDataCategories } from "@/data";
import Title from "../shared/title/Title";
import ScrollAnimator from "../shared/animation/ScrollAnimator";

/* ---------------- Hero Section ---------------- */

const cardProps = {
  link: "/product-details",
  isActive: true,
  shapeEffect: "always",
  shapePosition: "bottomRight",
  shapeProps: {
    height: 380,
    width: "100%",
    notchWidth: 76,
    notchHeight: 76,
    notchRadius: 12,
  },
  showGradient: true,
  gradientIntensity: "medium",
  infoPillsPosition: "top",
  titleClassName: "text-white text-xl font-bold",
  priceClassName: "text-white",
  showContent: true,
  cornerContent: (
    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
      <GoArrowUpRight className="text-white h-7 w-7" />
    </div>
  ),
} as const;
/* ---------------- Main Page ---------------- */
const Tours = () => {
  const [activeTab, setActiveTab] = useState("outdoor");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [filterOpen, setFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");

  /* ---------------- Filtering ---------------- */
  const filteredTours = toursData
    .filter((p) => (activeTab === "all" ? true : p.category === activeTab))
    .filter((p) =>
      searchText
        ? p.name.toLowerCase().includes(searchText.toLowerCase())
        : true
    )
    .filter((p) => (minPrice !== null ? p.price.amount >= minPrice : true))
    .filter((p) => (maxPrice !== null ? p.price.amount <= maxPrice : true))
    .filter((p) => (minRating !== null ? p.rating >= minRating : true));

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTours = filteredTours.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const resetFilters = () => {
    setMinPrice(null);
    setMaxPrice(null);
    setMinRating(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Container>
        {/* ---------------- Tabs + Search ---------------- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#F2F2F2] rounded-full p-1 px-4">
            {toursDataCategories.map((category) => (
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

                <h3 className="text-sm font-semibold mb-2">Minimum Rating</h3>
                <select
                  className="w-full border rounded-md px-2 py-1 text-sm mb-4"
                  value={minRating ?? ""}
                  onChange={(e) =>
                    setMinRating(e.target.value ? Number(e.target.value) : null)
                  }
                >
                  <option value="">Any</option>
                  <option value="1">1 ★ & up</option>
                  <option value="2">2 ★ & up</option>
                  <option value="3">3 ★ & up</option>
                  <option value="4">4 ★ & up</option>
                </select>

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
          <div className="block lg:hidden">
            {/* Hero */}
            <div className="bg-background rounded-3xl p-8 md:p-12 mb-6">
              <Title
                title="Travel\n Packeges"
                subtitle="Find everything you need for your next adventure, from Packeges to must-have accessories."
              />
              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium shadow-sm"
                >
                  See More
                </Link>
              </div>
            </div>
            {/* ================= SM ================= */}
            <div className="block md:hidden mb-6">
              <div className="grid grid-cols-1 gap-6 ">
                {displayedTours.map((product) => (
                  <ScrollAnimator
                    key={product.id}
                    repeatOnScroll
                    effect="staggerSlideUp"
                  >
                    <Card
                      cardBG={product.bg}
                      {...product}
                      {...cardProps}
                      shapeProps={{ ...cardProps.shapeProps, height: 490 }}
                    />
                  </ScrollAnimator>
                ))}
              </div>
            </div>

            {/* 3 rows × 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedTours.map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    cardBG={product.bg}
                    {...product}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 490 }}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>

          {/* ================= LG ================= */}
          <div className="hidden lg:block xl:hidden">
            {/* Hero */}
            <div className="bg-background rounded-3xl p-12 mb-6">
              <Title
                title="Travel\n Essentials"
                subtitle="Find everything you need for your next adventure, from essentials to must-have accessories."
              />
              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium shadow-sm"
                >
                  See More
                </Link>
              </div>
            </div>

            {/* 2 rows × 3 cards */}
            <div className="grid grid-cols-3 gap-6">
              {displayedTours.map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card cardBG={product.bg} {...product} {...cardProps} />
                </ScrollAnimator>
              ))}
            </div>
          </div>

          {/* ================= XL ================= */}
          <div className="hidden xl:block">
            {/* Row 1: Hero + 2 cards */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-2 bg-background rounded-3xl p-12 flex flex-col justify-between">
                <Title
                  title="Travel\n Essentials"
                  subtitle="Find everything you need for your next adventure, from essentials to must-have accessories."
                />
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-flex bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium shadow-sm"
                  >
                    See More
                  </Link>
                </div>
              </div>

              {displayedTours.slice(0, 2).map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card cardBG={product.bg} {...product} {...cardProps} />
                </ScrollAnimator>
              ))}
            </div>

            {/* Row 2: 4 cards */}
            <div className="grid grid-cols-4 gap-6">
              {displayedTours.slice(2, 6).map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card cardBG={product.bg} {...product} {...cardProps} />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>

        {totalPages > 1 && (
          <div className=" w-full flex justify-end items-end">
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

export default Tours;
