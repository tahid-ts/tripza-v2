"use client";
import { RefObject, useRef, useState } from "react";
import Link from "next/link";
import Card from "../shared/card/Card";
import { GoArrowUpRight } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import Container from "../shared/container/Container";
import Pagination from "../shared/pagination/Pagination";
import { BiSearch } from "react-icons/bi";
import { productsData, productsDataCategories } from "@/data";
import Title from "../shared/title/Title";
import ScrollAnimator from "../shared/animation/ScrollAnimator";
import useClickOutside from "@/hooks/useClickOutside";

const HeroSection = () => (
  <div className="bg-[#F2F2F2] rounded-3xl p-6 md:p-10 flex flex-col justify-between h-full min-h-[300px] md:min-h-[420px]">
    <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
      <div>
        <Title title={"Travel\n Essentials"} />
        <p className="text-gray-600 text-sm md:text-[15px] mb-6 md:mb-10 max-w-[250px] sm:max-w-[300px] leading-relaxed">
          Find everything you need for your next adventure, from essentials to
          must-have accessories.
        </p>
        <Link href="/products">
          <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-[15px] font-medium transition-colors duration-200">
            See More
          </button>
        </Link>
      </div>
    </ScrollAnimator>
  </div>
);

const cardProps = {
  cardBG: "/image/travel essentials/BG1.png",
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
  showGradient: true,
  link: "/product-details",
  gradientIntensity: "medium",
  titleClassName: "text-black text-xl font-bold",
  priceClassName: "text-black",

  showContent: true,
  cornerContent: (
    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
      <GoArrowUpRight className="text-white h-7 w-7" />
    </div>
  ),
} as const;
const Products = () => {
  const [activeTab, setActiveTab] = useState("outdoor");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [filterOpen, setFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const filterRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(
    [filterRef, buttonRef] as RefObject<HTMLElement | null>[],
    () => setFilterOpen(false)
  );

  const filteredProducts = productsData
    .filter((p) => (activeTab === "all" ? true : p.category === activeTab))
    .filter((p) =>
      searchText
        ? p.title.toLowerCase().includes(searchText.toLowerCase())
        : true
    )
    .filter((p) => (minPrice !== null ? p.price.amount >= minPrice : true))
    .filter((p) => (maxPrice !== null ? p.price.amount <= maxPrice : true))
    .filter((p) => (minRating !== null ? p.rating >= minRating : true));

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
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
        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex flex-wrap gap-2 bg-[#F2F2F2] rounded-full p-1 px-4">
            {productsDataCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setActiveTab(category.value);
                  setCurrentPage(1);
                }}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-[14px] font-normal transition-all cursor-pointer ${
                  activeTab === category.value
                    ? "bg-black text-white"
                    : "text-gray-950"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex gap-3 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm min-w-[200px] focus:outline-none"
              />
              <BiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <button
              ref={buttonRef}
              onClick={() => setFilterOpen(!filterOpen)}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm flex items-center gap-2"
            >
              <LuSlidersHorizontal className="w-4 h-4" />
              Filter
            </button>

            {filterOpen && (
              <div
                ref={filterRef}
                className="absolute right-0 top-full mt-3 bg-white shadow-xl border border-gray-200 rounded-xl w-64 p-5 z-50"
              >
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
                    className="text-sm text-gray-600 hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="bg-black text-white text-sm px-4 py-1.5 rounded-md cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* ================= SM ================= */}
          <div className="block md:hidden mb-6">
            <div className="grid grid-cols-1 gap-6">
              {displayedProducts.map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    key={product.id}
                    {...product}
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
              {displayedProducts.map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    key={product.id}
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
            <div className="grid grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    key={product.id}
                    {...product}
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
              {displayedProducts.slice(0, 2).map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    key={product.id}
                    {...product}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 380 }}
                  />
                </ScrollAnimator>
              ))}
            </div>

            {/* Row 2: 4 cards */}
            <div className="grid grid-cols-4 gap-6">
              {displayedProducts.slice(2, 6).map((product) => (
                <ScrollAnimator
                  key={product.id}
                  repeatOnScroll
                  effect="staggerSlideUp"
                >
                  <Card
                    key={product.id}
                    {...product}
                    {...cardProps}
                    shapeProps={{ ...cardProps.shapeProps, height: 380 }}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 w-full flex items-end justify-end">
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

export default Products;
