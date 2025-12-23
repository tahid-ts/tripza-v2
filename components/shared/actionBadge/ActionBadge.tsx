"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

export interface ActionBadgeProps {
  children?: React.ReactNode;
  icon?: React.ElementType;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost" | "gradient";
  bgColor?: string;
  iconColor?: string;
  shape?: "circle" | "rounded" | "square";
  size?: "sm" | "md" | "lg" | "xl";
  hoverEffect?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

const ActionBadge: React.FC<ActionBadgeProps> = ({
  children,
  icon: Icon,
  href,
  onClick,
  variant = "solid",
  bgColor = "bg-primary",
  iconColor = "text-white",
  shape = "circle",
  size = "md",
  hoverEffect = true,
  disabled = false,
  ariaLabel,
  className,
}) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-2.5",
    xl: "text-lg px-5 py-3",
  }[size];

  const shapeClasses =
    shape === "circle"
      ? "rounded-full"
      : shape === "rounded"
      ? "rounded-xl"
      : "rounded-none";

  const variantClasses = clsx(
    {
      solid: clsx(bgColor, iconColor),
      outline: clsx("border border-current", iconColor, "bg-transparent"),
      ghost: clsx("bg-transparent", iconColor, "hover:bg-gray-100/10"),
      gradient:
        "bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:opacity-90",
    }[variant]
  );

  const baseClasses = clsx(
    "inline-flex items-center justify-center gap-2 font-medium z-20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    shapeClasses,
    sizeClasses,
    variantClasses,
    hoverEffect && !disabled && "hover:scale-105 hover:shadow-md",
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {Icon && (
        <Icon className={clsx("w-5 h-5 shrink-0 rounded-full", iconColor)} />
      )}
      {children && <span>{children}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};

export default ActionBadge;
