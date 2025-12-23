"use client";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const ProductContent = () => {
  const [quantity, setQuantity] = useState(3);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-5 xl:max-w-xl max-w-full xl:px-24 px-2 bg-white">
      <div>
        <h1 className="text-2xl font-normal mb-2">Adventure Rain Tent</h1>
        <div className="flex gap-0.5 mb-3">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-yellow-400 text-lg">★</span>
        </div>
        <p className="text-2xl font-normal">$74</p>
      </div>

      <div>
        <button className="px-4 py-1.5 border border-gray-300 rounded text-sm">
          Specifications
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5">
          <span className="text-black text-sm">◆</span>
          <span className="text-sm">Spacious</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-black text-sm">◆</span>
          <span className="text-sm">Ventilated</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-black text-sm">◆</span>
          <span className="text-sm">Waterproof</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-black text-sm">◆</span>
          <span className="text-sm">Lightweight</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <label className="text-sm">Select Quantity</label>
        <div className="flex items-center gap-2.5">
          <button
            onClick={decreaseQuantity}
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 cursor-pointer"
          >
            <BiMinus size={14} strokeWidth={2} />
          </button>
          <span className="w-8 h-7 flex items-center justify-center bg-black text-white rounded text-sm font-medium">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 cursor-pointer"
          >
            <BiPlus size={14} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="flex gap-2.5">
        <button className="flex-1 bg-black text-white py-2.5 rounded text-sm font-medium cursor-pointer">
          Add To Cart
        </button>
        <button className="flex-1 bg-white text-black py-2.5 rounded text-sm font-medium border border-gray-300 cursor-pointer">
          Buy Now
        </button>
      </div>

      <div className="text-xs text-gray-600 leading-relaxed">
        <p>
          <span className="font-medium">Estimate delivery:</span> In City 1 day/
          Outside of city 3-4 days.
        </p>
        <p>Free shipping on purchase over $500.</p>
      </div>
    </div>
  );
};

export default ProductContent;
