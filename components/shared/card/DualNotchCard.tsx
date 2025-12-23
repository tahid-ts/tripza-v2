/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import React, { useMemo, useState, useLayoutEffect } from "react";

// // Define the responsive config type
// interface ResponsiveConfig {
//   width?: number | string;
//   height?: number | string;
//   notchWidth?: number | string;
//   notchHeight?: number | string;
//   borderRadius?: number | string;
//   notchRadius?: number | string;
// }

// interface DualNotchCardProps {
//   width?: number | string;
//   height?: number | string;
//   notchWidth?: number | string;
//   notchHeight?: number | string;
//   notchRadius?: number | string;
//   borderRadius?: number | string;
//   className?: string;
//   children?: React.ReactNode;
//   borderColor?: string;
//   borderWidth?: number | string;
//   background?: string;
//   backgroundColor?: string;
//   backgroundImage?: string;
//   backgroundSize?: string;
//   backgroundPosition?: string;
//   backgroundOverlay?: string;
//   topLeftContent?: React.ReactNode;
//   bottomRightContent?: React.ReactNode;
//   // Responsive breakpoints
//   breakpoints?: {
//     sm?: number;
//     md?: number;
//     lg?: number;
//     xl?: number;
//   };
//   // Responsive configurations for different screen sizes
//   responsiveConfig?: {
//     sm?: ResponsiveConfig;
//     md?: ResponsiveConfig;
//     lg?: ResponsiveConfig;
//     xl?: ResponsiveConfig;
//   };
// }

// const DualNotchCard: React.FC<DualNotchCardProps> = ({
//   width = "100%",
//   height = "auto",
//   notchWidth = 64,
//   notchHeight = 40,
//   notchRadius = 12,
//   borderRadius = 12,
//   className = "",
//   children,
//   borderColor = "",
//   borderWidth = 1.5,
//   background = "",
//   backgroundColor = "",
//   backgroundImage = "",
//   backgroundSize = "cover",
//   backgroundPosition = "center",
//   backgroundOverlay = "",
//   topLeftContent,
//   bottomRightContent,
//   breakpoints = {
//     sm: 640,
//     md: 768,
//     lg: 1024,
//     xl: 1280,
//   },
//   responsiveConfig = {},
// }) => {
//   const [clipId] = useState(
//     () => `clip-${Math.random().toString(36).slice(2, 9)}`
//   );

//   const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg" | "xl">("lg");
//   const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
//   const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

//   const getResponsiveValue = <K extends keyof ResponsiveConfig>(
//     prop: K,
//     defaultValue: number | string
//   ): number | string => {
//     const config = responsiveConfig[screenSize];
//     if (config && config[prop] !== undefined) {
//       return config[prop]!;
//     }
//     return defaultValue;
//   };

//   // Get current responsive values with proper type assertions
//   const currentWidth = getResponsiveValue("width", width);
//   const currentHeight = getResponsiveValue("height", height);
//   const currentNotchWidth = getResponsiveValue("notchWidth", notchWidth);
//   const currentNotchHeight = getResponsiveValue("notchHeight", notchHeight);
//   const currentBorderRadius = getResponsiveValue("borderRadius", borderRadius);
//   const currentNotchRadius = getResponsiveValue("notchRadius", notchRadius);

//   // Convert values to numbers for SVG calculations
//   const getNumericValue = (
//     value: number | string,
//     reference: number,
//     maxReference: number = reference
//   ): number => {
//     if (typeof value === "number") return value;
//     if (typeof value === "string") {
//       if (value.endsWith("%")) {
//         const percentage = parseFloat(value) / 100;
//         return reference * percentage;
//       }
//       if (value.endsWith("vw")) {
//         const vwValue = parseFloat(value);
//         return (window.innerWidth * vwValue) / 100;
//       }
//       if (value.endsWith("vh")) {
//         const vhValue = parseFloat(value);
//         return (window.innerHeight * vhValue) / 100;
//       }
//       if (value.endsWith("px")) {
//         return parseFloat(value);
//       }
//       return parseFloat(value) || 0;
//     }
//     return 0;
//   };

//   // Calculate actual dimensions for SVG with fallbacks
//   const actualWidth =
//     containerSize.width > 0
//       ? containerSize.width
//       : getNumericValue(currentWidth, 308, window.innerWidth);
//   const actualHeight =
//     containerSize.height > 0
//       ? containerSize.height
//       : getNumericValue(currentHeight, 320, window.innerHeight);
//   const actualNotchWidth = getNumericValue(currentNotchWidth, actualWidth);
//   const actualNotchHeight = getNumericValue(currentNotchHeight, actualHeight);
//   const actualBorderRadius = getNumericValue(
//     currentBorderRadius,
//     Math.min(actualWidth, actualHeight)
//   );
//   const actualNotchRadius = getNumericValue(
//     currentNotchRadius,
//     Math.min(actualNotchWidth, actualNotchHeight)
//   );

//   // Detect screen size
//   useLayoutEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width >= (breakpoints.xl || 1280)) {
//         setScreenSize("xl");
//       } else if (width >= (breakpoints.lg || 1024)) {
//         setScreenSize("lg");
//       } else if (width >= (breakpoints.md || 768)) {
//         setScreenSize("md");
//       } else {
//         setScreenSize("sm");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [breakpoints]);

//   // Measure container size for responsive calculations
//   useLayoutEffect(() => {
//     if (!containerRef) return;

//     const updateSize = () => {
//       const rect = containerRef.getBoundingClientRect();
//       setContainerSize({
//         width: rect.width,
//         height: rect.height,
//       });
//     };

//     updateSize();

//     const resizeObserver = new ResizeObserver(updateSize);
//     resizeObserver.observe(containerRef);

//     return () => {
//       if (containerRef) {
//         resizeObserver.unobserve(containerRef);
//       }
//     };
//   }, [containerRef]);

//   const path = useMemo(() => {
//     const r = Math.max(0, actualBorderRadius);
//     const nr = Math.max(0, actualNotchRadius);
//     const w = Math.max(1, actualWidth);
//     const h = Math.max(1, actualHeight);
//     const notchW = Math.min(actualNotchWidth, w - 2 * r);
//     const notchH = Math.min(actualNotchHeight, h - 2 * r);

//     // Top-left notch coordinates
//     const tlX = notchW;
//     const tlY = notchH;

//     // Bottom-right notch coordinates
//     const brX = w - notchW;
//     const brY = h - notchH;

//     return [
//       // Start from top-left notch bottom-right corner
//       `M ${tlX + nr} 0`,
//       // Top edge to top-right corner
//       `H ${w - r}`,
//       `Q ${w} 0 ${w} ${r}`,
//       // Right edge to bottom-right notch
//       `V ${brY - r}`,
//       `Q ${w} ${brY} ${w - r} ${brY}`,
//       // Bottom-right notch top edge
//       `H ${brX + nr}`,
//       `Q ${brX} ${brY} ${brX} ${brY + nr}`,
//       // Bottom-right notch right edge
//       `V ${h - r}`,
//       `Q ${brX} ${h} ${brX - r} ${h}`,
//       // Bottom edge to bottom-left corner
//       `H ${r}`,
//       `Q 0 ${h} 0 ${h - r}`,
//       // Left edge to top-left notch
//       `V ${tlY + r}`,
//       `Q 0 ${tlY} ${r} ${tlY}`,
//       // Top-left notch bottom edge
//       `H ${tlX - nr}`,
//       `Q ${tlX} ${tlY} ${tlX} ${tlY - nr}`,
//       // Top-left notch left edge
//       `V ${r}`,
//       `Q ${tlX} 0 ${tlX + nr} 0`,
//       "Z",
//     ].join(" ");
//   }, [
//     actualWidth,
//     actualHeight,
//     actualNotchWidth,
//     actualNotchHeight,
//     actualNotchRadius,
//     actualBorderRadius,
//   ]);

//   const numericBorderWidth =
//     typeof borderWidth === "string"
//       ? parseFloat(borderWidth)
//       : borderWidth || 0;

//   return (
//     <div
//       ref={setContainerRef}
//       className={`relative select-none ${className}`}
//       style={{
//         width: currentWidth,
//         height: currentHeight,
//         minWidth: "100px", // Ensure minimum usable size
//         minHeight: "100px",
//       }}
//     >
//       <div
//         className="absolute inset-0 overflow-hidden"
//         style={{
//           clipPath: `url(#${clipId})`,
//           WebkitClipPath: `url(#${clipId})`,
//           background: background || backgroundColor || "transparent",
//           backgroundImage: backgroundImage
//             ? `url(${backgroundImage})`
//             : undefined,
//           backgroundSize,
//           backgroundPosition,
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {backgroundOverlay && (
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{ background: backgroundOverlay }}
//           />
//         )}

//         <svg
//           width={actualWidth}
//           height={actualHeight}
//           viewBox={`0 0 ${actualWidth} ${actualHeight}`}
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <clipPath id={clipId}>
//               <path d={path} />
//             </clipPath>
//           </defs>
//         </svg>

//         <div className="w-full h-full relative overflow-hidden z-10">
//           {children}
//         </div>
//       </div>

//       {numericBorderWidth > 0 && (
//         <svg
//           width={actualWidth}
//           height={actualHeight}
//           viewBox={`0 0 ${actualWidth} ${actualHeight}`}
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           preserveAspectRatio="none"
//         >
//           <path
//             d={path}
//             fill="none"
//             stroke={borderColor}
//             strokeWidth={numericBorderWidth}
//           />
//         </svg>
//       )}

//       {topLeftContent && (
//         <div className="absolute top-0 left-0 z-20">{topLeftContent}</div>
//       )}

//       {bottomRightContent && (
//         <div className="absolute bottom-0 right-0 z-20">
//           {bottomRightContent}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DualNotchCard;

"use client";

import React, { useMemo, useState, useLayoutEffect, useEffect } from "react";

interface ResponsiveConfig {
  width?: number | string;
  height?: number | string;
  notchWidth?: number | string;
  notchHeight?: number | string;
  borderRadius?: number | string;
  notchRadius?: number | string;
}

interface DualNotchCardProps {
  width?: number | string;
  height?: number | string;
  notchWidth?: number | string;
  notchHeight?: number | string;
  notchRadius?: number | string;
  borderRadius?: number | string;
  className?: string;
  children?: React.ReactNode;
  borderColor?: string;
  borderWidth?: number | string;
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundOverlay?: string;
  topLeftContent?: React.ReactNode;
  bottomRightContent?: React.ReactNode;
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  responsiveConfig?: {
    sm?: ResponsiveConfig;
    md?: ResponsiveConfig;
    lg?: ResponsiveConfig;
    xl?: ResponsiveConfig;
  };
}

const DualNotchCard: React.FC<DualNotchCardProps> = ({
  width = "100%",
  height = "auto",
  notchWidth = 64,
  notchHeight = 40,
  notchRadius = 12,
  borderRadius = 12,
  className = "",
  children,
  borderColor = "",
  borderWidth = 1.5,
  background = "",
  backgroundColor = "",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundOverlay = "",
  topLeftContent,
  bottomRightContent,
  breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  responsiveConfig = {},
}) => {
  const [clipId] = useState(
    () => `clip-${Math.random().toString(36).slice(2, 9)}`
  );
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg" | "xl">("lg");
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Update window size on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Detect screen size
  useEffect(() => {
    if (windowSize.width === 0) return;
    const handleResize = () => {
      const width = windowSize.width;
      if (width >= (breakpoints.xl || 1280)) {
        setScreenSize("xl");
      } else if (width >= (breakpoints.lg || 1024)) {
        setScreenSize("lg");
      } else if (width >= (breakpoints.md || 768)) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };
    handleResize();
  }, [windowSize, breakpoints]);

  const getResponsiveValue = <K extends keyof ResponsiveConfig>(
    prop: K,
    defaultValue: number | string
  ): number | string => {
    const config = responsiveConfig[screenSize];
    if (config && config[prop] !== undefined) {
      return config[prop]!;
    }
    return defaultValue;
  };

  const currentWidth = getResponsiveValue("width", width);
  const currentHeight = getResponsiveValue("height", height);
  const currentNotchWidth = getResponsiveValue("notchWidth", notchWidth);
  const currentNotchHeight = getResponsiveValue("notchHeight", notchHeight);
  const currentBorderRadius = getResponsiveValue("borderRadius", borderRadius);
  const currentNotchRadius = getResponsiveValue("notchRadius", notchRadius);

  const getNumericValue = (
    value: number | string,
    reference: number,
    maxReference: number = reference
  ): number => {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      if (value.endsWith("%")) {
        const percentage = parseFloat(value) / 100;
        return reference * percentage;
      }
      if (value.endsWith("vw")) {
        const vwValue = parseFloat(value);
        return (windowSize.width * vwValue) / 100;
      }
      if (value.endsWith("vh")) {
        const vhValue = parseFloat(value);
        return (windowSize.height * vhValue) / 100;
      }
      if (value.endsWith("px")) {
        return parseFloat(value);
      }
      return parseFloat(value) || 0;
    }
    return 0;
  };

  const actualWidth =
    containerSize.width > 0
      ? containerSize.width
      : getNumericValue(currentWidth, 308, windowSize.width || 308);
  const actualHeight =
    containerSize.height > 0
      ? containerSize.height
      : getNumericValue(currentHeight, 320, windowSize.height || 320);
  const actualNotchWidth = getNumericValue(currentNotchWidth, actualWidth);
  const actualNotchHeight = getNumericValue(currentNotchHeight, actualHeight);
  const actualBorderRadius = getNumericValue(
    currentBorderRadius,
    Math.min(actualWidth, actualHeight)
  );
  const actualNotchRadius = getNumericValue(
    currentNotchRadius,
    Math.min(actualNotchWidth, actualNotchHeight)
  );

  useLayoutEffect(() => {
    if (!containerRef) return;
    const updateSize = () => {
      const rect = containerRef.getBoundingClientRect();
      setContainerSize({
        width: rect.width,
        height: rect.height,
      });
    };
    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef);
    return () => {
      if (containerRef) {
        resizeObserver.unobserve(containerRef);
      }
    };
  }, [containerRef]);

  const path = useMemo(() => {
    const r = Math.max(0, actualBorderRadius);
    const nr = Math.max(0, actualNotchRadius);
    const w = Math.max(1, actualWidth);
    const h = Math.max(1, actualHeight);
    const notchW = Math.min(actualNotchWidth, w - 2 * r);
    const notchH = Math.min(actualNotchHeight, h - 2 * r);

    const tlX = notchW;
    const tlY = notchH;
    const brX = w - notchW;
    const brY = h - notchH;

    return [
      `M ${tlX + nr} 0`,
      `H ${w - r}`,
      `Q ${w} 0 ${w} ${r}`,
      `V ${brY - r}`,
      `Q ${w} ${brY} ${w - r} ${brY}`,
      `H ${brX + nr}`,
      `Q ${brX} ${brY} ${brX} ${brY + nr}`,
      `V ${h - r}`,
      `Q ${brX} ${h} ${brX - r} ${h}`,
      `H ${r}`,
      `Q 0 ${h} 0 ${h - r}`,
      `V ${tlY + r}`,
      `Q 0 ${tlY} ${r} ${tlY}`,
      `H ${tlX - nr}`,
      `Q ${tlX} ${tlY} ${tlX} ${tlY - nr}`,
      `V ${r}`,
      `Q ${tlX} 0 ${tlX + nr} 0`,
      "Z",
    ].join(" ");
  }, [
    actualWidth,
    actualHeight,
    actualNotchWidth,
    actualNotchHeight,
    actualNotchRadius,
    actualBorderRadius,
  ]);

  const numericBorderWidth =
    typeof borderWidth === "string"
      ? parseFloat(borderWidth)
      : borderWidth || 0;

  return (
    <div
      ref={setContainerRef}
      className={`relative select-none ${className}`}
      style={{
        width: currentWidth,
        height: currentHeight,
        minWidth: "100px",
        minHeight: "100px",
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
          background: background || backgroundColor || "transparent",
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize,
          backgroundPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        {backgroundOverlay && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: backgroundOverlay }}
          />
        )}
        <svg
          width={actualWidth}
          height={actualHeight}
          viewBox={`0 0 ${actualWidth} ${actualHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={clipId}>
              <path d={path} />
            </clipPath>
          </defs>
        </svg>
        <div className="w-full h-full relative overflow-hidden z-10">
          {children}
        </div>
      </div>
      {numericBorderWidth > 0 && (
        <svg
          width={actualWidth}
          height={actualHeight}
          viewBox={`0 0 ${actualWidth} ${actualHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d={path}
            fill="none"
            stroke={borderColor}
            strokeWidth={numericBorderWidth}
          />
        </svg>
      )}
      {topLeftContent && (
        <div className="absolute top-0 left-0 z-20">{topLeftContent}</div>
      )}
      {bottomRightContent && (
        <div className="absolute bottom-0 right-0 z-20">
          {bottomRightContent}
        </div>
      )}
    </div>
  );
};

export default DualNotchCard;
