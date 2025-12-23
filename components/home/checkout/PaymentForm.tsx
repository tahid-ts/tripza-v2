import Title from "@/components/shared/title/Title";
import { PaymentFormProps } from "@/types/checkout";
import React from "react";

export const PaymentForm: React.FC<PaymentFormProps> = ({
  total,
  itemPrice,
  quantity,
  cardTypes,
  selectedCard,
  card,
  errors,
  onCardTypeSelect,
  onCardFieldChange,
  onSubmit,
}) => {
  return (
    <div className="border border-primary rounded-lg p-6 w-full bg-input-fill max-w-md">
      <Title variant="h2" title="Payment" />
      <div className="flex justify-between items-center lg:mb-6 mb-3 lg:mt-8 mt-4">
        <span className="text-gray-600">Total</span>
        <div className="text-right">
          <span className="text-gray-400 mr-2">
            ${itemPrice} × {quantity}
          </span>
          <span className="text-2xl font-bold">${total}</span>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        {/* Card Type */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Card Type</label>
          <div className="flex gap-3">
            {cardTypes.map((cardType) => (
              <div
                key={cardType.id}
                onClick={() => onCardTypeSelect(cardType.id)}
                className={`cursor-pointer border-2 rounded p-3 transition-all ${
                  selectedCard === cardType.id
                    ? "border-primary shadow-md scale-105"
                    : "border-gray-200"
                }`}
              >
                {cardType.content}
              </div>
            ))}
          </div>
        </div>
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name on card</label>
          <input
            type="text"
            value={card.name}
            onChange={(e) => onCardFieldChange("name", e.target.value)}
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        {/* Card Number */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Card Number</label>
          <input
            type="text"
            value={card.numberMasked}
            onChange={(e) =>
              onCardFieldChange(
                "numberRaw",
                e.target.value.replace(/\D/g, "").slice(0, 16)
              )
            }
            placeholder="1111222233334444"
            maxLength={16}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
          />
          {errors.number && (
            <span className="text-red-500 text-sm">{errors.number}</span>
          )}
        </div>
        {/* Exp + CVV */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium">Expiration date</label>
            <input
              type="text"
              value={card.exp}
              onChange={(e) => onCardFieldChange("exp", e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
            />
            {errors.exp && (
              <span className="text-red-500 text-sm">{errors.exp}</span>
            )}
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium">CVV</label>
            <input
              type="text"
              value={card.cvv}
              onChange={(e) =>
                onCardFieldChange(
                  "cvv",
                  e.target.value.replace(/\D/g, "").slice(0, 4)
                )
              }
              placeholder="123"
              maxLength={4}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
            />
            {errors.cvv && (
              <span className="text-red-500 text-sm">{errors.cvv}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-primary py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium cursor-pointer"
        >
          Make Payment
        </button>
      </form>
    </div>
  );
};
