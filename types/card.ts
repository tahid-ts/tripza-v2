import React from "react";
export type GradientIntensity = "light" | "medium" | "strong";
export type ShapeEffect = "always" | "active" | "hover";
export interface CardDataType {
  id: number;
  image: string;
  cardBG?: string;
  title: string;
  description?: string;
  date?: string;
  price?: {
    amount: number;
    currency?: string;
    suffix?: string;
  };
  infoPills?: Array<{
    icon?: React.ReactNode;
    text?: string;
  }>;

}
export interface CardPositionConfig {
  // height: number;
  // width: number;
  opacity: number;
  scale: number;
  zIndex: number;
  isActive: boolean;
  showGradient: boolean;
  gradientIntensity: GradientIntensity;
  shapeEffect: ShapeEffect;
  notchWidth: number;
  notchHeight: number;
  showCornerContent: boolean;
  growOnHover?: boolean;
  margin?: string;
  translateY?: number;
  height?: number;
  width?: number | string;
  topWithInfoPills?:boolean

}
// src/types/card.types.ts


// ============================================================
// BASIC TYPE DEFINITIONS
// ============================================================

export type InfoPillShape = "rounded" | "pill" | "square";
export type InfoPillsPosition = "top" | "bottom";

export interface PriceInfo {
  amount: number;
  currency?: string;
  suffix?: string;
}

export interface InfoPill {
  icon?: React.ReactNode;
  text?: string;
  shape?: InfoPillShape;
  className?: string;
}

// ============================================================
// CARD COMPONENT PROPS
// ============================================================

export interface CardProps {
  image?: string;
  cardBG: string;
  isActive: boolean;
  imageAlt?: string;
  title?: string;
  rating?: number;
  description?: string;
  price?: PriceInfo;
  onClick?: () => void;
  link?: string;
  infoPills?: InfoPill[];
  showGradient?: boolean;
  gradientIntensity?: GradientIntensity;
  showContent?: boolean;
  topWithInfoPills?: boolean;
  cornerContent?: React.ReactNode;

  aspectRatio?: string;
  infoPillsPosition?: InfoPillsPosition;

  className?: string;
  titleClassName?: string;
  priceClassName?: string;
  ratingClassName?: string;
  descriptionClassName?: string;
  imagePriority?: boolean;
  isHovered?: boolean;
  growHeightOnHover?: boolean;
  width?: number;
  height?: number;

  shapePosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  shapeEffect?: "hover" | "active" | "always";
  shapeProps?: Partial<{
    // width: number;
    // height: number;
    height?: number | string;
  width?: number | string;
    notchWidth: number;
    notchHeight: number;
    notchRadius: number;
    borderRadius: number;
  }>;
}

export interface Card1 {
  id: string;
  image: string;
  title: string;
  href: string;
  description: string;
}

export type Card1Variant = 'horizontal' | 'vertical';

export interface Card1Props {
  image: string;
  title: string;
  description: string;
  href: string;
  variant?: Card1Variant;
  classNameH?: string;
  classNameV?:string;
}

export interface CardGrowMaskProps {
  width?: number;
  height?: number;
  notchWidth?: number;
  notchHeight?: number;
  notchRadius?: number;
  borderRadius?: number;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  effect?: "hover" | "active" | "always" | boolean;
  animationDuration?: number;
  cornerContent?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;

  /** ✅ Background options */
  background?: string; // legacy support
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundOverlay?: string; // overlay tint like rgba(0,0,0,0.3)

  isActive?: boolean;
  isHovered?: boolean;
  growHeightOnHover?: boolean;
}