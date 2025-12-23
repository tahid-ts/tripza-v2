"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardProps, GradientIntensity, InfoPillShape } from "@/types/card";
import CardMask from "./CardMask";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Define gradient styles
const GRADIENT_STYLES: Record<GradientIntensity, string> = {
  light:
    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
  medium:
    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
  strong:
    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
};

// Define info pill shapes
const INFO_PILL_SHAPES: Record<InfoPillShape, string> = {
  rounded: "rounded-xl",
  pill: "rounded-full",
  square: "rounded-none",
};
// Helper function to render stars for rating
const renderStars = (rating: number, ratingClassName: string) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar
        key={`full-${i}`}
        className={ratingClassName ? ratingClassName : "text-yellow-500"}
      />
    );
  }

  if (hasHalf) {
    stars.push(
      <FaStarHalfAlt
        key="half"
        className={ratingClassName ? ratingClassName : "text-yellow-500"}
      />
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400" />);
  }

  return stars;
};

const DEFAULT_ASPECT_RATIO = "4/5";

// Card component
const Card: React.FC<CardProps> = ({
  image,
  cardBG,
  imageAlt,
  title,
  rating,
  description,
  price,
  isActive = false,
  onClick,
  infoPills = [],
  showGradient = true,
  gradientIntensity = "strong",
  showContent = true,
  cornerContent,
  aspectRatio = DEFAULT_ASPECT_RATIO,
  infoPillsPosition = "bottom",
  className = "",
  titleClassName = "",
  priceClassName = "",
  ratingClassName = "",
  descriptionClassName = "",
  imagePriority = false,
  topWithInfoPills = false,
  isHovered = false,
  growHeightOnHover = false,
  shapePosition = "topRight",
  shapeEffect = "hover",
  shapeProps = {},
  link,
}) => {
  const shouldShrink = growHeightOnHover && !isActive;

  // Function to get gradient mask style
  const getGradientMaskStyle = (): React.CSSProperties => {
    const notchWidth = shapeProps.notchWidth ?? 60;
    const notchHeight = shapeProps.notchHeight ?? 60;
    const pos = shapePosition.toLowerCase();
    const maskImage = `${GRADIENT_STYLES[gradientIntensity]}, linear-gradient(#fff, #fff)`;
    const maskSize = `100% 100%, ${notchWidth}px ${notchHeight}px`;
    const maskPosition = `0 0, ${
      pos.includes("right") ? "calc(100% - 12px)" : "12px"
    } ${pos.includes("bottom") ? "calc(100% - 12px)" : "12px"}`;

    return {
      maskImage,
      maskSize,
      maskPosition,
      maskComposite: "exclude",
      WebkitMaskImage: maskImage,
      WebkitMaskSize: maskSize,
      WebkitMaskPosition: maskPosition,
      WebkitMaskComposite: "xor",
    };
  };

  // Function to render info pills
  const renderInfoPills = () =>
    infoPills.length > 0 && (
      <div className="flex gap-2 flex-wrap">
        {infoPills.map((pill, i) => (
          <div
            key={i}
            className={`bg-white/95 backdrop-blur-sm flex items-center gap-2 px-4 py-2 ${
              INFO_PILL_SHAPES[pill.shape ?? "pill"]
            } ${pill.className ?? ""}`}
          >
            {pill.icon && (
              <span className="text-gray-700 text-base"> {pill.icon}</span>
            )}
            <span className="text-gray-800 text-sm font-medium">
              {pill.text}
            </span>
          </div>
        ))}
      </div>
    );
  const renderPrice = () => {
    if (!price) return null;

    return (
      <div
        className={`text-lg md:text-xl font-semibold text-black ${priceClassName}`}
      >
        {price.currency ?? "$"}
        {price.amount}
        {price.suffix && (
          <span className="text-white text-base font-normal ml-1">
            {price.suffix}
          </span>
        )}
      </div>
    );
  };

  // Function to render card content image
  const cardContentImage = () => {
    if (!showContent || !image) return null;
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={image}
          alt={imageAlt ?? title ?? "Card content image"}
          width={247}
          height={147}
          priority={imagePriority}
          className="object-contain transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 23vw"
        />
      </div>
    );
  };

  // Function to render text content
  const renderTextContent = () => {
    if (!showContent) return null;
    return (
      <div className="px-4 space-y-1 md:space-y-2 ">
        <div className="flex gap-2 items-center">
          {infoPillsPosition === "top" && renderInfoPills()}{" "}
          {topWithInfoPills && renderPrice()}
        </div>
        {title && (
          <h3
            className={`font-cormorant text-xl leading-tight text-black ${titleClassName}`}
          >
            {title}
          </h3>
        )}
        {rating && (
          <p
            className={`flex gap-0.5 text-xs md:text-sm leading-relaxed ${ratingClassName}`}
          >
            {renderStars(Number(rating), ratingClassName)}
          </p>
        )}
        {description && (
          <p
            className={`text-black/90 text-xs md:text-sm leading-relaxed ${descriptionClassName}`}
          >
            {description}
          </p>
        )}
        {!topWithInfoPills && renderPrice()}
        {infoPillsPosition === "bottom" && renderInfoPills()}
      </div>
    );
  };

  return (
    <div
      className="relative group cursor-pointer w-full rounded-xl
        transition-all duration-500 ease-out"
    >
      {link ? (
        <Link href={link} className="block">
          <article
            className={`${className}`.trim()}
            style={{ aspectRatio }}
            role={onClick ? "button" : "article"}
            tabIndex={onClick ? 0 : undefined}
          >
            <div
              className="absolute inset-0 w-full transition-transform duration-500 ease-out origin-bottom"
              style={{
                transform: shouldShrink
                  ? isHovered
                    ? "scaleY(1)"
                    : "scaleY(0.8)"
                  : "scaleY(1)",
                transformOrigin: "top",
              }}
            >
              {/* className="hidden lg:block" */}
              <div>
                <CardMask
                  position={shapePosition}
                  effect={shapeEffect}
                  isActive={isActive}
                  isHovered={isHovered}
                  growOnHover={growHeightOnHover}
                  cornerContent={cornerContent}
                  height={shapeProps.height ?? 0}
                  width={shapeProps.width}
                  notchHeight={shapeProps.notchHeight ?? 60}
                  notchWidth={shapeProps.notchWidth ?? 60}
                  notchRadius={shapeProps.notchRadius ?? 12}
                  borderRadius={shapeProps.borderRadius ?? 12}
                  className="w-full h-full"
                >
                  <Image
                    src={cardBG}
                    alt={imageAlt ?? title ?? "Card background"}
                    fill
                    priority={imagePriority}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </CardMask>
              </div>
            </div>
            {showGradient && (
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={getGradientMaskStyle()}
              />
            )}
            <div
              className={`
              relative z-20 flex flex-col justify-between
              transition-padding duration-300
              ${
                shouldShrink
                  ? isHovered
                    ? "pb-16 md:pb-8"
                    : "pb-6 md:pb-32"
                  : "pb-5 md:pb-[22px]"
              }
            `}
              style={{
                height: shapeProps.height ?? "auto",
                width: shapeProps.width ?? "100%",
              }}
            >
              <div className="pt-4 md:pt-6" />
              {cardContentImage()}
              <div className=" ">{renderTextContent()}</div>
            </div>
          </article>
        </Link>
      ) : (
        <article
          className={`${className}`.trim()}
          style={{ aspectRatio }}
          onClick={onClick}
          role={onClick ? "button" : "article"}
          tabIndex={onClick ? 0 : undefined}
          onKeyDown={(e) => {
            if (onClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onClick();
            }
          }}
        >
          <div
            className="absolute inset-0 w-full transition-transform duration-500 ease-out origin-bottom"
            style={{
              transform: shouldShrink
                ? isHovered
                  ? "scaleY(1)"
                  : "scaleY(0.8)"
                : "scaleY(1)",
              transformOrigin: "top",
            }}
          >
            <div className="">
              <CardMask
                position={shapePosition}
                effect={shapeEffect}
                isActive={isActive}
                isHovered={isHovered}
                growOnHover={growHeightOnHover}
                cornerContent={cornerContent}
                height={shapeProps.height ?? 0}
                width={shapeProps.width ?? 0}
                notchHeight={shapeProps.notchHeight ?? 60}
                notchWidth={shapeProps.notchWidth ?? 60}
                notchRadius={shapeProps.notchRadius ?? 12}
                borderRadius={shapeProps.borderRadius ?? 12}
                className="w-full h-full"
              >
                <Image
                  src={cardBG}
                  alt={imageAlt ?? title ?? "Card background"}
                  fill
                  priority={imagePriority}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </CardMask>
            </div>
          </div>
          {showGradient && (
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={getGradientMaskStyle()}
            />
          )}
          <div
            className={`
            relative z-20 flex flex-col justify-between
            transition-padding duration-300
            ${
              shouldShrink
                ? isHovered
                  ? "pb-16 md:pb-8"
                  : "pb-6 md:pb-32"
                : "pb-6 md:pb-[22px]"
            }
          `}
            style={{
              height: shapeProps.height ?? "auto",
              width: shapeProps.width ?? "100%",
            }}
          >
            <div className="pt-4 md:pt-6" />
            {cardContentImage()}
            <div className="mt-auto">{renderTextContent()}</div>
          </div>
        </article>
      )}
    </div>
  );
};

export default Card;
