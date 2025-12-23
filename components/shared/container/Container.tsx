// "use client";

// import React, { ReactNode } from "react";

// interface ContainerProps {
//   children: ReactNode;
//   maxWidth?:
//     | "sm"
//     | "md"
//     | "lg"
//     | "xl"
//     | "2xl"
//     | "3xl"
//     | "4xl"
//     | "5xl"
//     | "6xl"
//     | "7xl"
//     | "primary"
//     | "full";
//   className?: string;
//   mainClassName?: string;
// }

// const maxWidthMap: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
//   sm: "max-w-sm",
//   md: "max-w-md",
//   lg: "max-w-lg",
//   xl: "max-w-xl",
//   "2xl": "max-w-2xl",
//   "3xl": "max-w-3xl",
//   "4xl": "max-w-4xl",
//   "5xl": "max-w-5xl",
//   "6xl": "max-w-6xl",
//   "7xl": "max-w-7xl",

//   // Your custom primary container width
//   primary: "xl:max-w-[1320px] lg:max-w-[90%] max-w-full ",

//   // Full width
//   full: "max-w-full",
// };

// const Container: React.FC<ContainerProps> = ({
//   children,
//   maxWidth = "primary",
//   className = "",
//   mainClassName = "",
// }) => {
//   const resolvedMaxWidth = maxWidthMap[maxWidth];

//   return (
//     <div className={`w-full h-auto ${mainClassName}`}>
//       <div
//         className={`
//           mx-auto w-full h-full
//           bg-blue-500
//           /* Horizontal padding */
//           px-4
//           sm:px-6
//           md:px-8
//           lg:px-10
//           xl:px-0

//           /* Vertical spacing */
//           py-12
//           sm:py-16
//           md:py-20
//           lg:py-24
//           xl:py-[120px]

//           ${resolvedMaxWidth}
//           ${className}
//         `}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Container;

"use client";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "primary"
    | "full";
  className?: string;
  mainClassName?: string;
  controlPy?: boolean; // New prop to control vertical padding
}

const maxWidthMap: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  primary: "xl:max-w-[1320px] lg:max-w-[90%] max-w-full ",
  full: "max-w-full",
};

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "primary",
  className = "",
  mainClassName = "",
  controlPy = true,
}) => {
  const resolvedMaxWidth = maxWidthMap[maxWidth];

  // Apply vertical padding only if controlPy is true
  const pyClasses = controlPy
    ? "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]"
    : "";

  return (
    <div className={`w-full h-auto ${mainClassName}`}>
      <div
        className={`
          mx-auto w-full h-full
          /* Horizontal padding */
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-0
          /* Vertical spacing */
          ${pyClasses}
          ${resolvedMaxWidth}
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
