"use client";

import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showLeadingZeros?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  showLeadingZeros = true,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const formatPage = (n: number) =>
    showLeadingZeros ? n.toString().padStart(2, "0") : n.toString();

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div
      className={`flex items-baseline justify-center gap-6 lg:mt-10 mt-4 mb-4 ${className}`}
    >
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-500 hover:text-gray-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <BiChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`font-light transition-all cursor-pointer font-cormorant ${
            page === currentPage
              ? "text-gray-900 font-normal text-[42px]"
              : "text-gray-500 hover:text-gray-500 text-lg"
          }`}
        >
          {formatPage(page)}
        </button>
      ))}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-500 hover:text-gray-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <BiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
