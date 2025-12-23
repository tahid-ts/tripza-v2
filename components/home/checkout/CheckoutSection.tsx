"use client";

import Container from "@/components/shared/container/Container";
import Decoration from "@/components/shared/decoration/Decoration";
import Title from "@/components/shared/title/Title";
import { detectCardType } from "@/utils/cardDetect";
import { maskCardNumber } from "@/utils/cardMask";
import { luhnCheck } from "@/utils/luhnValidator";
import { BillingInfo, loadBillingInfo, saveBillingInfo } from "@/utils/storage";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { ProductImage } from "./ProductImage";
import { PriceCard } from "./PriceCard";
import { PaymentForm } from "./PaymentForm";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";

export default function CheckoutSection() {
  const [quantity, setQuantity] = useState(3);
  const [promoCode, setPromoCode] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(true);
  const [selectedCard, setSelectedCard] = useState("gpay");

  const [card, setCard] = useState<BillingInfo>({
    name: "",
    numberRaw: "",
    numberMasked: "",
    exp: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    exp: "",
    cvv: "",
    luhn: "",
  });

  const ITEM_PRICE = 74;
  const VOUCHER_DISCOUNT = 11;
  const TAX = 5;

  const subtotal = useMemo(() => ITEM_PRICE * quantity, [quantity]);
  const total = useMemo(
    () => subtotal - (voucherApplied ? VOUCHER_DISCOUNT : 0) + TAX,
    [subtotal, voucherApplied]
  );

  useEffect(() => {
    const saved = loadBillingInfo();
    if (saved) {
      setTimeout(() => {
        setCard({
          name: saved.name || "",
          numberRaw: saved.numberRaw || "",
          numberMasked: maskCardNumber(saved.numberRaw || ""),
          exp: saved.exp || "",
          cvv: saved.cvv || "",
        });
        const detected = detectCardType(saved.numberRaw || "");
        if (detected) setSelectedCard(detected);
      }, 0);
    }
  }, []);

  // Save billing info whenever fields change
  useEffect(() => {
    saveBillingInfo(card);
  }, [card]);

  const handleQuantityChange = useCallback((delta: number) => {
    setQuantity((q) => Math.max(1, q + delta));
  }, []);

  const handleUsePromo = useCallback(() => {
    if (!promoCode.trim() || voucherApplied) return;
    setVoucherApplied(true);
    alert("Promo applied!");
  }, [promoCode, voucherApplied]);

  const validate = useCallback(() => {
    const err = { name: "", number: "", exp: "", cvv: "", luhn: "" };

    if (!card.name.trim()) err.name = "Name is required";
    if (!/^\d{16}$/.test(card.numberRaw))
      err.number = "Card number must be 16 digits";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.exp)) err.exp = "Format: MM/YY";
    if (!/^\d{3,4}$/.test(card.cvv)) err.cvv = "CVV must be 3-4 digits";
    if (/^\d{16}$/.test(card.numberRaw) && !luhnCheck(card.numberRaw))
      err.luhn = "Card number failed validation";

    setErrors(err);
    return !Object.values(err).some((v) => v !== "");
  }, [card]);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setCard((prev) => ({
        ...prev,
        numberRaw: "",
        numberMasked: "",
        exp: "",
        cvv: "",
      }));
      setErrors({ name: "", number: "", exp: "", cvv: "", luhn: "" });
      alert("Payment info validated and (mock) submitted.");
    },
    [validate]
  );

  const updateCardField = useCallback(
    (field: keyof BillingInfo, value: string) => {
      if (field === "numberRaw") {
        const digits = value.replace(/\D/g, "").slice(0, 16);
        setCard((prev) => ({
          ...prev,
          numberRaw: digits,
          numberMasked: maskCardNumber(digits),
        }));
        const detected = detectCardType(digits);
        if (detected) setSelectedCard(detected);
      } else {
        setCard((prev) => ({ ...prev, [field]: value }));
      }
    },
    []
  );

  const cardTypes = useMemo(
    () => [
      {
        id: "gpay",
        content: <div className="text-primary font-bold">GPay</div>,
      },
      {
        id: "mastercard",
        content: (
          <div className="flex items-center justify-center w-12 h-6">
            <div className="w-6 h-6 rounded-full bg-red-500 -mr-2"></div>
            <div className="w-6 h-6 rounded-full bg-orange-400"></div>
          </div>
        ),
      },
      {
        id: "visa",
        content: (
          <div className="text-blue-700 font-bold italic text-xl">VISA</div>
        ),
      },
    ],
    []
  );

  return (
    <Container>
      <div className="w-full lg:h-[120vh] h-auto relative">
        <Title title={"Checkout"} className="pb-10" />

        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <div className="flex flex-col md:flex-row lg:h-screen gap-5 lg:gap-0 ">
            <div className="w-full lg:w-1/2 space-y-6 lg:relative static">
              <ProductImage
                imageSrc="/image/product/product-thumb1.png"
                altText="Blue camping tent"
              />
              <PriceCard
                quantity={quantity}
                itemPrice={ITEM_PRICE}
                subtotal={subtotal}
                voucherApplied={voucherApplied}
                voucherDiscount={VOUCHER_DISCOUNT}
                tax={TAX}
                total={total}
                promoCode={promoCode}
                onQuantityChange={handleQuantityChange}
                onUsePromo={handleUsePromo}
                onPromoCodeChange={setPromoCode}
              />
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:items-end lg:justify-end self-end lg:mt-0 bg-[rgba(242, 242, 242, 1)]  rounded-lg">
              <PaymentForm
                total={total}
                itemPrice={ITEM_PRICE}
                quantity={quantity}
                cardTypes={cardTypes}
                selectedCard={selectedCard}
                card={card}
                errors={errors}
                onCardTypeSelect={setSelectedCard}
                onCardFieldChange={updateCardField}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </ScrollAnimator>

        {/* Decorations */}
        <Decoration
          src="/image/vector/vector1.png"
          preset={"topRight"}
          className="-z-10"
          responsive="hidden-on-mobile"
        />
        <Decoration
          src="/image/vector/vector10.png"
          className="mt-18 ml-30 -z-10"
          preset={"leftCenter"}
          responsive="hidden-on-mobile"
        />
        <Decoration
          src="/image/vector/vector11.png"
          className="mt-40 ml-40 -z-10"
          preset={"center"}
          responsive="hidden-on-large"
        />
      </div>
    </Container>
  );
}
