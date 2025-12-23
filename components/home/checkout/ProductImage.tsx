import { ProductImageProps } from "@/types/checkout";
import Image from "next/image";
import React from "react";

export const ProductImage: React.FC<ProductImageProps> = ({
  imageSrc,
  altText,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center w-full lg:w-[420px] lg:h-[390px] h-auto">
      <Image
        src={imageSrc}
        alt={altText}
        width={420}
        height={390}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
      />
    </div>
  );
};
