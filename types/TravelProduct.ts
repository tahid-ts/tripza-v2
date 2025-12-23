export interface Product {
  id: number;
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price: ProductPrice;
  rating: number;
  category?: string;
}

export interface ProductPrice {
  amount: number;
  currency: string;
}

export interface TravelProductItem {
  products?: Product[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onProductClick?: (product: Product) => void;
  onCtaClick?: () => void;
}

export interface ProductCardOverlayProps {
  product: Product;
  onViewClick?: (product: Product) => void;
}

export interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
}