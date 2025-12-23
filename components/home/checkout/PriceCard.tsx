import React from "react";
import { Minus, Plus } from "lucide-react";
import { PriceCardProps } from "@/types/checkout";

export const PriceCard: React.FC<PriceCardProps> = ({
  quantity,
  itemPrice,
  subtotal,
  voucherApplied,
  voucherDiscount,
  tax,
  total,
  promoCode,
  onQuantityChange,
  onUsePromo,
  onPromoCodeChange,
}) => {
  return (
    <div className="bg-primary text-white p-6 rounded-lg lg:w-[420px] w-full lg:absolute static lg:h-[600px] h-auto lg:top-80 lg:-right-20">
      <h2 className="text-2xl font-serif mb-4">Adventure Rain Tent</h2>
      {/* Quantity */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-300">{quantity} items</span>
        <div className="flex items-center gap-2 bg-white rounded px-2 py-1">
          <button
            onClick={() => onQuantityChange(-1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-base rounded text-primary cursor-pointer"
          >
            <Minus />
          </button>
          <span className="w-8 h-8 text-center flex items-center justify-center bg-primary rounded-lg">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange(1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded text-primary cursor-pointer"
          >
            <Plus />
          </button>
        </div>
      </div>
      {/* Item Price */}
      <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
        <span className="text-gray-300">Item Price</span>
        <span className="text-xl">${itemPrice}</span>
      </div>
      {/* Subtotal */}
      <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
        <span className="text-gray-300">Subtotal</span>
        <div className="text-right">
          <span className="text-gray-500 mr-2">
            ${itemPrice} × {quantity}
          </span>
          <span className="text-xl">${subtotal}</span>
        </div>
      </div>
      {/* Promo code */}
      <div className="mb-4 pb-4 border-b border-gray-700 w-full">
        <label className="text-gray-300 block mb-2">
          Use voucher / Promo code
        </label>
        <div className="flex gap-2 border border-white p-0.5 rounded-md">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => onPromoCodeChange(e.target.value)}
            placeholder="****"
            className="flex-1 px-3 py-2.5 ring-0 focus:outline-none text-white placeholder-gray-500"
          />
          <button
            onClick={onUsePromo}
            className="bg-white text-black md:px-6 px-7 py-2.5 rounded-md hover:bg-gray-100"
          >
            Use
          </button>
        </div>
      </div>
      {/* Voucher */}
      {voucherApplied && (
        <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
          <div>
            <div className="text-gray-300">Voucher used:</div>
            <div className="text-sm text-gray-500">#eid2025</div>
          </div>
          <span className="text-xl">-${voucherDiscount}</span>
        </div>
      )}
      {/* Tax */}
      <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
        <span className="text-gray-300">Tax</span>
        <span className="text-xl">${tax}</span>
      </div>
      {/* Total */}
      <div className="flex justify-between text-2xl font-bold">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
};
