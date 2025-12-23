/* eslint-disable @next/next/no-img-element */
"use client";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import Container from "@/components/shared/container/Container";
import Title from "@/components/shared/title/Title";
import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

interface Review {
  name: string;
  date: string;
  likes: number;
  dislikes: number;
  rating: number;
  text: string;
  avatar: number;
}

interface FormData {
  name: string;
  email: string;
  review: string;
}

interface Ratings {
  [key: number]: number;
}

export default function ProductReviewSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    review: "",
  });

  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "John Snow",
      date: "July 8, 2025 - 05:30 PM",
      likes: 71,
      dislikes: 0,
      rating: 5,
      text: '"I was a bit unsure about ordering a tailored shirt online, but this exceeded my expectations. The attention to detail is incredible, from the fabric choice to the finishing touches !"',
      avatar: 1,
    },
    {
      name: "Rara Smith",
      date: "July 5, 2025 - 07:45 PM",
      likes: 71,
      dislikes: 0,
      rating: 5,
      text: '"I was a bit unsure about ordering a tailored shirt online, but this exceeded my expectations. The attention to detail is incredible, from the fabric choice to the finishing touches !"',
      avatar: 2,
    },
  ]);

  const [ratings, setRatings] = useState<Ratings>({
    5: 8888,
    4: 5103,
    3: 87,
    2: 21,
    1: 0,
  });

  const totalReviews: number = Object.values(ratings).reduce(
    (a: number, b: number) => a + b,
    0
  );
  const averageRating: string = (
    (5 * ratings[5] +
      4 * ratings[4] +
      3 * ratings[3] +
      2 * ratings[2] +
      1 * ratings[1]) /
    totalReviews
  ).toFixed(1);

  const handleLike = (index: number): void => {
    const newReviews: Review[] = [...reviews];
    newReviews[index].likes += 1;
    setReviews(newReviews);
  };

  const handleDislike = (index: number): void => {
    const newReviews: Review[] = [...reviews];
    newReviews[index].dislikes += 1;
    setReviews(newReviews);
  };

  const handleSubmit = (): void => {
    if (formData.name && formData.email && formData.review) {
      const newReview: Review = {
        name: formData.name,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        likes: 0,
        dislikes: 0,
        rating: 5,
        text: `"${formData.review}"`,
        avatar: reviews.length + 1,
      };

      setReviews([newReview, ...reviews]);
      setFormData({ name: "", email: "", review: "" });

      // Update ratings
      setRatings((prev) => ({
        ...prev,
        5: prev[5] + 1,
      }));
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit();
    }
  };

  const getBarWidth = (count: number): number => {
    return (count / Math.max(...Object.values(ratings))) * 100;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container controlPy={false}>
      <Title title="Rating & Review" className="pb-[30px]" />
      {/* Overall Rating Section */}
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <div className="mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-start gap-12">
            {/* Left side - Overall rating */}
            <div className="flex flex-col items-start min-w-[200px]">
              <p className="text-sm text-gray-600 mb-3">
                Overall rating of this product
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-light">{averageRating}</span>
                <span className="text-2xl text-gray-400 font-light">/5</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((star: number) => (
                  <span key={star} className="text-black text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">({totalReviews} Reviews)</p>
            </div>

            {/* Right side - Rating bars */}
            <div className="flex-1 max-w-2xl">
              {[5, 4, 3, 2, 1].map((stars: number) => (
                <div key={stars} className="flex items-center gap-4 mb-3">
                  <span className="text-sm w-2 text-gray-700">{stars}</span>
                  <span className="text-black text-lg">★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black transition-all duration-300"
                      style={{ width: `${getBarWidth(ratings[stars])}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-16 text-right">
                    {ratings[stars].toString().padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="md:text-3xl text-xl font-serif italic">
            {reviews.length} reviews for adventure rain tent
          </h2>
        </div>
      </ScrollAnimator>

      {/* Reviews */}
      <div className="space-y-8 mb-12">
        {reviews.map((review: Review, idx: number) => (
          <div
            key={idx}
            className="flex  gap-5 pb-8 border-b border-gray-100 last:border-b-0"
          >
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              {/* Review Content */}
              <div className="flex lg:flex-row flex-col ">
                <div className="md:w-[30%] w-full flex">
                  {/* Avatar */}
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gray-300 shrink-0 overflow-hidden">
                      <img
                        src={`https://i.pravatar.cc/150?img=${review.avatar}`}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex gap-0.5 mb-2">
                        {[1, 2, 3, 4, 5].map((star: number) => (
                          <span
                            key={star}
                            className={
                              star <= review.rating
                                ? "text-black text-base"
                                : "text-gray-300 text-base"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="font-medium text-base mb-1">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[70%] w-full border-l border-gray-400 pl-5 ">
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {review.text}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleLike(idx)}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-black transition-colors border border-gray-400 py-2 px-2.5 rounded-xl cursor-pointer w-16 h-8 justify-between "
                      aria-label="Like review"
                    >
                      <FaThumbsUp size={16} />
                      <span>{review.likes}</span>
                    </button>
                    <button
                      onClick={() => handleDislike(idx)}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-black transition-colors border border-gray-400 py-2 px-2.5 rounded-xl cursor-pointer w-16 h-8 justify-between "
                      aria-label="Dislike review"
                    >
                      <FaThumbsDown size={16} />
                      {review.dislikes > 0 && <span>{review.dislikes}</span>}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <div className="mt-16">
          <h3 className="text-3xl font-serif italic mb-8">Add a review</h3>
          <div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your name*"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-sm transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter your email*"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-sm transition-colors"
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="review"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Review
              </label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                placeholder="Write your review*"
                rows={7}
                className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 resize-none text-sm transition-colors"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="px-10 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.name || !formData.email || !formData.review}
            >
              Submit
            </button>
          </div>
        </div>
      </ScrollAnimator>
    </Container>
  );
}
