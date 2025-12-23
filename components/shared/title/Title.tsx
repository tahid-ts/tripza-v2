// "use client";
// import React from "react";
// import clsx from "clsx";
// import ScrollAnimator from "../animation/ScrollAnimator";

// interface TitleProps {
//   title: string | string[];
//   subtitle?: string | string[];
//   align?: "left" | "center" | "right";
//   className?: string;
//   subTitleClassName?: string;
//   lineColor?: string;
// }

// const Title: React.FC<TitleProps> = ({
//   title,
//   subtitle,
//   align = "left",
//   className = "",
//   subTitleClassName = "",
//   lineColor,
// }) => {
//   // Convert literal "\n" → real newline + support array input
//   const processText = (text: string | string[]) => {
//     const normalize = (t: string) => t.replace(/\\n/g, "\n");
//     const lines = Array.isArray(text) ? text : normalize(text).split("\n");
//     return lines;
//   };

//   const titleLines = processText(title);
//   const subtitleLines = subtitle ? processText(subtitle) : [];

//   return (
//     <ScrollAnimator effect="staggerSlideUp">
//       <div className={clsx("w-full", className)}>
//         {/* Title Container */}
//         <div
//           className={clsx("flex flex-col", {
//             "items-start": align === "left",
//             "items-center": align === "center",
//             "items-end": align === "right",
//           })}
//         >
//           {titleLines.map((line, i) => (
//             <div
//               key={i}
//               className={clsx("flex items-baseline gap-2", {
//                 "justify-start": align === "left",
//                 "justify-center": align === "center",
//                 "justify-end": align === "right",
//               })}
//             >
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-serif font-medium leading-[1.2]">
//                 {line}
//               </h1>
//               {/* Decorative underline for last line */}

//               {i === titleLines.length - 1 && (
//                 <div className="md:flex items-end hidden">
//                   <div
//                     className={`border-b-[1.5px]  w-6 sm:w-8 md:w-10 h-0.5 ${
//                       lineColor ? lineColor : "border-black"
//                     }`}
//                   />
//                   <span
//                     className={`w-1.5 h-1.5 rotate-45  inline-block -mb-0.5 ${
//                       lineColor ? "bg-white" : "bg-black"
//                     }`}
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         {/* Subtitle */}
//         {subtitleLines.length > 0 && (
//           <p
//             className={clsx(
//               "text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-inter",
//               subTitleClassName,
//               {
//                 "text-center": align === "center",
//                 "text-right": align === "right",
//               }
//             )}
//           >
//             {subtitleLines.map((line, i) => (
//               <React.Fragment key={i}>
//                 {line}
//                 {i < subtitleLines.length - 1 && <br />}
//               </React.Fragment>
//             ))}
//           </p>
//         )}
//       </div>
//     </ScrollAnimator>
//   );
// };

// export default Title;

"use client";
import React from "react";
import clsx from "clsx";
import ScrollAnimator from "../animation/ScrollAnimator";

interface TitleProps {
  title: string | string[];
  subtitle?: string | string[];
  align?: "left" | "center" | "right";
  className?: string;
  subTitleClassName?: string;
  lineColor?: string;
  variant?: "h1" | "h2" | "h3" | "h4"; // Add variant prop
}

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  align = "left",
  className = "",
  subTitleClassName = "",
  lineColor,
  variant = "h1", // Default variant
}) => {
  // Map variants to Tailwind text sizes
  const getTextSize = () => {
    switch (variant) {
      case "h1":
        return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";
      case "h2":
        return "text-xl sm:text-2xl md:text-3xl lg:text-4xl";
      case "h3":
        return "text-lg sm:text-xl md:text-2xl lg:text-3xl";
      case "h4":
        return "text-base sm:text-lg md:text-xl lg:text-2xl";
      default:
        return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";
    }
  };

  // Convert literal "\n" → real newline + support array input
  const processText = (text: string | string[]) => {
    const normalize = (t: string) => t.replace(/\\n/g, "\n");
    const lines = Array.isArray(text) ? text : normalize(text).split("\n");
    return lines;
  };

  const titleLines = processText(title);
  const subtitleLines = subtitle ? processText(subtitle) : [];

  return (
    <ScrollAnimator effect="staggerSlideUp">
      <div className={clsx("w-full", className)}>
        {/* Title Container */}
        <div
          className={clsx("flex flex-col", {
            "items-start": align === "left",
            "items-center": align === "center",
            "items-end": align === "right",
          })}
        >
          {titleLines.map((line, i) => (
            <div
              key={i}
              className={clsx("flex items-baseline gap-2", {
                "justify-start": align === "left",
                "justify-center": align === "center",
                "justify-end": align === "right",
              })}
            >
              <h1
                className={`${getTextSize()} font-serif font-medium leading-[1.2]`}
              >
                {line}
              </h1>
              {/* Decorative underline for last line */}
              {i === titleLines.length - 1 && (
                <div className="md:flex items-end hidden">
                  <div
                    className={`border-b-[1.5px] w-6 sm:w-8 md:w-10 h-0.5 ${
                      lineColor ? lineColor : "border-black"
                    }`}
                  />
                  <span
                    className={`w-1.5 h-1.5 rotate-45 inline-block -mb-0.5 ${
                      lineColor ? "bg-white" : "bg-black"
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Subtitle */}
        {subtitleLines.length > 0 && (
          <p
            className={clsx(
              "text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-inter",
              subTitleClassName,
              {
                "text-center": align === "center",
                "text-right": align === "right",
              }
            )}
          >
            {subtitleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < subtitleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
    </ScrollAnimator>
  );
};

export default Title;
