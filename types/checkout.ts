// ProductImage Component Types
export interface ProductImageProps {
  imageSrc: string;
  altText: string;
}

// PriceCard Component Types
export interface PriceCardProps {
  quantity: number;
  itemPrice: number;
  subtotal: number;
  voucherApplied: boolean;
  voucherDiscount: number;
  tax: number;
  total: number;
  promoCode: string;
  onQuantityChange: (delta: number) => void;
  onUsePromo: () => void;
  onPromoCodeChange: (value: string) => void;
}

// PaymentForm Component Types
export interface CardType {
  id: string;
  content: React.ReactNode;
}

export interface Card {
  name: string;
  numberRaw: string;
  numberMasked: string;
  exp: string;
  cvv: string;
}

export interface PaymentFormProps {
  total: number;
  itemPrice: number;
  quantity: number;
  cardTypes: CardType[];
  selectedCard: string;
  card: Card;
  errors: Record<string, string>;
  onCardTypeSelect: (id: string) => void;
  onCardFieldChange: (field: keyof Card, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

// CheckoutPage Component Types
export interface CheckoutPageState {
  quantity: number;
  promoCode: string;
  voucherApplied: boolean;
  selectedCard: string;
  card: Card;
  errors: Record<string, string>;
}
