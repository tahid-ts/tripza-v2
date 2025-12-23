"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import { ReviewSliderType } from "@/types/slider";

interface TravellersReviewSliderProps {
  reviews: ReviewSliderType[];
}

// --- Memoized ReviewCard with display name ---
const ReviewCardComponent = ({ review }: { review: ReviewSliderType }) => (
  <div className="shrink-0 w-full px-4">
    <div className="bg-white rounded-xl shadow p-6 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Google Review
        </h3>
        <p className="text-gray-600 text-[16px] leading-6 mb-4">
          “{review.text}”
        </p>
      </div>
      <div>
        <h4 className="text-gray-900 text-[16px] font-medium">
          {review.author}
        </h4>
        <div className="flex gap-1 mt-2">
          {[...Array(review.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-yellow-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const ReviewCard = memo(ReviewCardComponent);
ReviewCard.displayName = "ReviewCard";

// --- Main Slider Component ---
const TravellersReviewSlider: React.FC<TravellersReviewSliderProps> = ({
  reviews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const translateX = useRef(0);

  const total = reviews.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  // Animate slider position
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);

  // --- Touch / Drag Events ---
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !sliderRef.current) return;
    const diff = e.clientX - startX.current;
    translateX.current = -currentIndex * sliderRef.current.clientWidth + diff;
    sliderRef.current.style.transform = `translateX(${translateX.current}px)`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !sliderRef.current) return;
    const diff = e.clientX - startX.current;
    isDragging.current = false;

    if (diff > 50) {
      prevSlide();
    } else if (diff < -50) {
      nextSlide();
    } else {
      // Return to current slide
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={sliderRef}
        className="flex cursor-grab"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-start gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TravellersReviewSlider;
