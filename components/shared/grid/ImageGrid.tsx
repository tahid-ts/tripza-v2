import React from "react";
import Image from "next/image";
import { ImageGridProps } from "@/types/imageGrid";
import ScrollAnimator from "../animation/ScrollAnimator";

// Different animation effects to cycle through
const animationEffects = [
  "zoomIn",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
  "fadeIn",
  "rotateIn",
  "flipY",
  "scaleUp",
] as const;

const ImageGrid: React.FC<ImageGridProps> = ({ items }) => {
  return (
    <div className="grid md:grid-cols-6 grid-rows-5 gap-4">
      {items.map((item, index) => {
        const effect = animationEffects[index % animationEffects.length];
        const duration = 0.8 + (index % 3) * 0.2;
        const delay = (index % 4) * 0.1;

        return (
          <ScrollAnimator
            key={item.id}
            effect={effect}
            duration={duration}
            delay={delay}
            easing="spring"
            threshold={0.1}
            className="relative h-32 hidden md:block"
            style={{
              gridColumn: item.colStart
                ? `${item.colStart} / span ${item.colSpan || 1}`
                : `span ${item.colSpan || 1}`,
              gridRow: item.rowStart
                ? `${item.rowStart} / span ${item.rowSpan || 1}`
                : `span ${item.rowSpan || 1}`,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt || `Image ${item.id}`}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ScrollAnimator>
        );
      })}
      {items.map((item, index) => {
        const effect = animationEffects[index % animationEffects.length];
        const duration = 0.8 + (index % 3) * 0.2;
        const delay = (index % 4) * 0.1;

        return (
          <ScrollAnimator
            key={item.id}
            effect={effect}
            duration={duration}
            delay={delay}
            easing="spring"
            threshold={0.1}
            className="relative h-64 md:hidden block"
          >
            <Image
              src={item.src}
              alt={item.alt || `Image ${item.id}`}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ScrollAnimator>
        );
      })}
    </div>
  );
};

export default ImageGrid;
