"use client";
import { accordionDataType } from "@/types/accordian";
import { useState, useRef, useEffect } from "react";
import ScrollAnimator from "../animation/ScrollAnimator";

export default function Accordion({ data ,className }: accordionDataType) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Measure all content heights after mount
    const newHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(newHeights);
  }, [data]);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
// lg:max-w-3xl lg:p-6 p-0
  return (
    <div className={`mx-auto w-full  max-w-full  ${className}`}>
      {data.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        const height = heights[idx] ?? 0;

        return (
          <div
            key={idx}
            className="mb-4 overflow-hidden rounded-xl border border-gray-200  transition-all duration-300"
          >
            {/* Header */}
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <button
                onClick={() => toggle(idx)}
                className="flex w-full items-center gap-4 p-6 text-left outline-none cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <span className="flex-1 text-[20px] font-semibold text-gray-900">
                  {item.title}
                </span>

                {/* Animated Icon */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-primary text-white" : "rotate-0"
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    {isOpen ? (
                      <path d="M5 12h14" />
                    ) : (
                      <>
                        <path d="M12 5v14M5 12h14" />
                      </>
                    )}
                  </svg>
                </div>
              </button>
            </ScrollAnimator>
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              {/* Smooth transition content */}
              <div
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? `${height}px` : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="px-6 pb-6 pl-[88px] text-gray-600 text-[16px] leading-relaxed">
                  {item.description}
                </div>
              </div>
            </ScrollAnimator>
          </div>
        );
      })}
    </div>
  );
}
