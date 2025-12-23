"use client";
import { useState } from "react";
import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";

import { BiSearch } from "react-icons/bi";
import Card from "../card/Card";
import Container from "../container/Container";
import Pagination from "../pagination/Pagination";

// Reusable Component Props
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  bg?: string;
}

export interface Category {
  label: string;
  value: string;
}

interface ProductListingProps {
  products: Product[];
  categories: Category[];
  title?: string;
  itemsPerPage?: number;
  defaultTab?: string;
  hero?: React.ReactNode;
}

// Hero Section Default
const DefaultHero = () => (
  <div className="bg-[#F2F2F2] rounded-3xl p-10 flex flex-col justify-between h-full min-h-[420px]">
    <div>
      <h1 className="text-[52px] leading-[1.1] font-serif mb-6 text-gray-900">
        Travel
        <br />
        Essentials →
      </h1>
      <p className="text-gray-600 text-[15px] mb-10 max-w-[300px] leading-relaxed">
        Find everything you need for your next adventure, from essentials to
        must-have accessories.
      </p>
      <Link href="/products">
        <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-full text-[15px] font-medium transition-colors duration-200">
          See More
        </button>
      </Link>
    </div>
  </div>
);

// Reusable Product Card
const ProductCard = ({ product }: { product: Product }) => (
  <Card
    key={product.id}
    cardBG={product.bg ? product.bg : "/image/travel essentials/BG1.png"}
    image={product.image}
    title={product.name}
    shapeEffect="always"
    shapePosition="bottomRight"
    shapeProps={{
      height: 380,
      width: 308,
      notchWidth: 76,
      notchHeight: 76,
      notchRadius: 12,
    }}
    isActive
    showGradient
    gradientIntensity="medium"
    titleClassName="text-black text-xl font-bold"
    priceClassName="text-black"
    showContent
    cornerContent={
      <Link href={`/product/${product.id}`}>
        <div className="p-2 text-sm font-medium z-20 rounded-full bg-primary m-2">
          <GoArrowUpRight className="h-10 w-10 text-white" />
        </div>
      </Link>
    }
    aspectRatio="4/5"
    className="text-primary overflow-hidden"
    imagePriority={false}
  />
);

// REUSABLE MAIN COMPONENT
const ProductListing = ({
  products,
  categories,
  title = "Products",
  itemsPerPage = 6,
  defaultTab = "all",
  hero = <DefaultHero />,
}: ProductListingProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayed = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      <Container>
        {title && (
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">{title}</h2>
        )}

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-8">
          {/* Tabs */}
          <div className="flex gap-2.5 bg-[#F2F2F2] rounded-full">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setActiveTab(category.value);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2.5 rounded-full text-[14px] transition-all ${
                  activeTab === category.value
                    ? "bg-black text-white m-2"
                    : "text-gray-950 hover:border-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search / Filter */}
          <div className="flex gap-2.5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items"
                className="pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-[14px] focus:outline-none focus:ring-2 focus:ring-gray-200 w-44"
              />
              <BiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-[14px] hover:border-gray-300 flex items-center gap-2">
              <LuSlidersHorizontal className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">{hero}</div>
            {displayed.slice(0, 2).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {displayed.length > 2 && (
            <div className="grid grid-cols-4 gap-6">
              {displayed.slice(2).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </div>
  );
};

export default ProductListing;
