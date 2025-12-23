/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
  useEffect,
  useRef,
  ReactNode,
  CSSProperties,
  useMemo,
  useCallback,
  memo,
} from "react";

export type AnimationType =
  | "fadeIn"
  | "fadeOut"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"
  | "slideInDown"
  | "slideInUpBounce"
  | "slideInDownBounce"
  | "zoomIn"
  | "zoomOut"
  | "zoomInRotate"
  | "zoomOutRotate"
  | "rotate"
  | "rotateIn"
  | "rotateOut"
  | "bounce"
  | "flip"
  | "flipX"
  | "flipY"
  | "pulse"
  | "rollIn"
  | "rollOut"
  | "scaleUp"
  | "scaleDown"
  | "skew"
  | "skewLeft"
  | "skewRight"
  | "colorChange"
  | "morph"
  | "float"
  | "glow"
  | "wave"
  | "swing"
  | "wobble"
  | "shake"
  | "jello"
  | "heartbeat"
  | "rubberBand"
  | "blurIn"
  | "blurOut"
  | "staggerSlideUp"
  | "staggerSlideDown"
  | "staggerFadeIn"
  | "staggerZoomIn"
  | "typewriter"
  | "gradientShift"
  | "neonPulse"
  | "magneticPull"
  | "liquidFill"
  | "parallaxTilt"
  | "parallaxFloat"
  | "smoothScroll"
  | "smoothScrollAdvanced"
  | "smoothScrollParallax"
  | "smoothScrollFade"
  | "smoothScrollScale"
  | "smoothScroll3D"
  | "smoothScrollStagger"
  | "reveal"
  | "revealLeft"
  | "revealRight"
  | "curtain"
  | "glitch"
  | "perspective"
  | "rotateScale"
  | "bounceIn"
  | "bounceOut"
  | "spiral"
  | "unfold"
  | "matrix"
  | "kaleidoscope";

export type EasingType =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "spring"
  | "bounce"
  | "elastic"
  | "cubic-bezier(0.16, 1, 0.3, 1)"
  | "cubic-bezier(0.87, 0, 0.13, 1)"
  | "cubic-bezier(0.76, 0, 0.24, 1)";

interface ScrollAnimatorProps {
  children: ReactNode;
  effect: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  stagger?: number;
  repeat?: boolean;
  repeatOnScroll?: boolean;
  easing?: EasingType;
  style?: CSSProperties;
  triggerOnce?: boolean;
  rootMargin?: string;
  disabled?: boolean;
  smoothScrollOptions?: {
    translateY?: number;
    translateX?: number;
    scaleStart?: number;
    scaleEnd?: number;
    rotateStart?: number;
    rotateEnd?: number;
    blurStart?: number;
    blurEnd?: number;
    perspective?: number;
    skewX?: number;
    skewY?: number;
    useParallax?: boolean;
    parallaxIntensity?: number;
    useStagger?: boolean;
    staggerDelay?: number;
    useTransformOrigin?: string;
    useWillChange?: boolean;
  };
}

const easingMap: Record<EasingType, string> = {
  linear: "linear",
  ease: "ease",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
  spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  "cubic-bezier(0.16, 1, 0.3, 1)": "cubic-bezier(0.16, 1, 0.3, 1)",
  "cubic-bezier(0.87, 0, 0.13, 1)": "cubic-bezier(0.87, 0, 0.13, 1)",
  "cubic-bezier(0.76, 0, 0.24, 1)": "cubic-bezier(0.76, 0, 0.24, 1)",
};

const KEYFRAMES_CACHE: Record<AnimationType, Keyframe[]> = {
  fadeIn: [{ opacity: 0 }, { opacity: 1 }],
  fadeOut: [{ opacity: 1 }, { opacity: 0 }],
  slideInLeft: [
    { transform: "translateX(-100px)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
  ],
  slideInRight: [
    { transform: "translateX(100px)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
  ],
  slideInUp: [
    { transform: "translateY(100px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 },
  ],
  slideInDown: [
    { transform: "translateY(-100px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 },
  ],
  slideInUpBounce: [
    { transform: "translateY(100px)", opacity: 0, offset: 0 },
    { transform: "translateY(-30px)", opacity: 1, offset: 0.6 },
    { transform: "translateY(10px)", offset: 0.8 },
    { transform: "translateY(0)", offset: 1 },
  ],
  slideInDownBounce: [
    { transform: "translateY(-100px)", opacity: 0, offset: 0 },
    { transform: "translateY(30px)", opacity: 1, offset: 0.6 },
    { transform: "translateY(-10px)", offset: 0.8 },
    { transform: "translateY(0)", offset: 1 },
  ],
  zoomIn: [
    { transform: "scale(0.5)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
  ],
  zoomOut: [
    { transform: "scale(1.5)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
  ],
  zoomInRotate: [
    { transform: "scale(0.5) rotate(-45deg)", opacity: 0 },
    { transform: "scale(1) rotate(0deg)", opacity: 1 },
  ],
  zoomOutRotate: [
    { transform: "scale(1.5) rotate(45deg)", opacity: 0 },
    { transform: "scale(1) rotate(0deg)", opacity: 1 },
  ],
  rotate: [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
  rotateIn: [
    { transform: "rotate(-200deg) scale(0)", opacity: 0 },
    { transform: "rotate(0deg) scale(1)", opacity: 1 },
  ],
  rotateOut: [
    { transform: "rotate(0deg) scale(1)", opacity: 1 },
    { transform: "rotate(200deg) scale(0)", opacity: 0 },
  ],
  bounce: [
    { transform: "translateY(0)", offset: 0 },
    { transform: "translateY(-50px)", offset: 0.4 },
    { transform: "translateY(0)", offset: 0.6 },
    { transform: "translateY(-20px)", offset: 0.8 },
    { transform: "translateY(0)", offset: 1 },
  ],
  bounceIn: [
    { transform: "scale(0.3)", opacity: 0, offset: 0 },
    { transform: "scale(1.1)", offset: 0.5 },
    { transform: "scale(0.9)", offset: 0.7 },
    { transform: "scale(1)", opacity: 1, offset: 1 },
  ],
  bounceOut: [
    { transform: "scale(1)", opacity: 1, offset: 0 },
    { transform: "scale(1.1)", offset: 0.3 },
    { transform: "scale(0.3)", opacity: 0, offset: 1 },
  ],
  flip: [
    { transform: "perspective(400px) rotateY(0deg)" },
    { transform: "perspective(400px) rotateY(180deg)" },
  ],
  flipX: [
    { transform: "perspective(400px) rotateX(0deg)", opacity: 0 },
    { transform: "perspective(400px) rotateX(180deg)", opacity: 1 },
  ],
  flipY: [
    { transform: "perspective(400px) rotateY(0deg)", opacity: 0 },
    { transform: "perspective(400px) rotateY(180deg)", opacity: 1 },
  ],
  pulse: [
    { transform: "scale(1)" },
    { transform: "scale(1.05)" },
    { transform: "scale(1)" },
  ],
  heartbeat: [
    { transform: "scale(1)" },
    { transform: "scale(1.3)" },
    { transform: "scale(1)" },
    { transform: "scale(1.3)" },
    { transform: "scale(1)" },
  ],
  rubberBand: [
    { transform: "scale(1, 1)" },
    { transform: "scale(1.25, 0.75)" },
    { transform: "scale(0.75, 1.25)" },
    { transform: "scale(1.15, 0.85)" },
    { transform: "scale(0.95, 1.05)" },
    { transform: "scale(1, 1)" },
  ],
  jello: [
    { transform: "skewX(0deg) skewY(0deg)" },
    { transform: "skewX(-12.5deg) skewY(-12.5deg)" },
    { transform: "skewX(6.25deg) skewY(6.25deg)" },
    { transform: "skewX(-3.125deg) skewY(-3.125deg)" },
    { transform: "skewX(1.5625deg) skewY(1.5625deg)" },
    { transform: "skewX(0deg) skewY(0deg)" },
  ],
  rollIn: [
    { transform: "translateX(-100%) rotate(-360deg)", opacity: 0 },
    { transform: "translateX(0) rotate(0deg)", opacity: 1 },
  ],
  rollOut: [
    { transform: "translateX(0) rotate(0deg)", opacity: 1 },
    { transform: "translateX(100%) rotate(360deg)", opacity: 0 },
  ],
  scaleUp: [
    { transform: "scale(0)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
  ],
  scaleDown: [
    { transform: "scale(2)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
  ],
  skew: [
    { transform: "skew(20deg, 10deg)", opacity: 0 },
    { transform: "skew(0deg, 0deg)", opacity: 1 },
  ],
  skewLeft: [
    { transform: "skewX(-30deg) translateX(-100px)", opacity: 0 },
    { transform: "skewX(0deg) translateX(0)", opacity: 1 },
  ],
  skewRight: [
    { transform: "skewX(30deg) translateX(100px)", opacity: 0 },
    { transform: "skewX(0deg) translateX(0)", opacity: 1 },
  ],
  colorChange: [
    { backgroundColor: "#ff0000" },
    { backgroundColor: "transparent" },
  ],
  morph: [{ borderRadius: "0%" }, { borderRadius: "50%" }],
  float: [
    { transform: "translateY(0px)" },
    { transform: "translateY(-20px)" },
    { transform: "translateY(0px)" },
  ],
  wave: [
    { transform: "translateX(0px) rotate(0deg)" },
    { transform: "translateX(25px) rotate(5deg)" },
    { transform: "translateX(0px) rotate(0deg)" },
    { transform: "translateX(-25px) rotate(-5deg)" },
    { transform: "translateX(0px) rotate(0deg)" },
  ],
  swing: [
    { transform: "rotate(0deg)", transformOrigin: "top center" },
    { transform: "rotate(15deg)", transformOrigin: "top center" },
    { transform: "rotate(-10deg)", transformOrigin: "top center" },
    { transform: "rotate(5deg)", transformOrigin: "top center" },
    { transform: "rotate(-5deg)", transformOrigin: "top center" },
    { transform: "rotate(0deg)", transformOrigin: "top center" },
  ],
  wobble: [
    { transform: "translateX(0) rotate(0deg)" },
    { transform: "translateX(-25px) rotate(-5deg)" },
    { transform: "translateX(20px) rotate(3deg)" },
    { transform: "translateX(-15px) rotate(-3deg)" },
    { transform: "translateX(10px) rotate(2deg)" },
    { transform: "translateX(-5px) rotate(-1deg)" },
    { transform: "translateX(0) rotate(0deg)" },
  ],
  shake: [
    { transform: "translateX(0)" },
    { transform: "translateX(-10px)" },
    { transform: "translateX(10px)" },
    { transform: "translateX(-10px)" },
    { transform: "translateX(10px)" },
    { transform: "translateX(-10px)" },
    { transform: "translateX(10px)" },
    { transform: "translateX(0)" },
  ],
  glow: [
    { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
    {
      boxShadow:
        "0 0 20px rgba(59, 130, 246, 1), 0 0 30px rgba(59, 130, 246, 0.8)",
    },
    { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
  ],
  neonPulse: [
    { textShadow: "0 0 5px #fff, 0 0 10px #fff" },
    {
      textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff",
    },
    { textShadow: "0 0 5px #fff, 0 0 10px #fff" },
  ],
  blurIn: [
    { filter: "blur(20px)", opacity: 0 },
    { filter: "blur(0px)", opacity: 1 },
  ],
  blurOut: [
    { filter: "blur(0px)", opacity: 1 },
    { filter: "blur(20px)", opacity: 0 },
  ],
  staggerSlideUp: [
    { transform: "translateY(50px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 },
  ],
  staggerSlideDown: [
    { transform: "translateY(-50px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 },
  ],
  staggerFadeIn: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  staggerZoomIn: [
    { transform: "scale(0)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
  ],
  typewriter: [{ width: "0%" }, { width: "100%" }],
  gradientShift: [
    { backgroundPosition: "0% center" },
    { backgroundPosition: "200% center" },
  ],
  magneticPull: [
    { transform: "scale(1)" },
    { transform: "scale(1.15)" },
    { transform: "scale(1)" },
  ],
  liquidFill: [
    { clipPath: "inset(100% 0 0 0)" },
    { clipPath: "inset(0 0 0 0)" },
  ],
  parallaxTilt: [
    { transform: "translateY(0px) rotateX(0deg)" },
    { transform: "translateY(-50px) rotateX(5deg)" },
  ],
  parallaxFloat: [
    { transform: "translateY(0px) translateX(0px)" },
    { transform: "translateY(-30px) translateX(10px)" },
  ],

  // Enhanced smooth scroll effects
  smoothScroll: [
    {
      transform: "translateY(50px)",
      opacity: 0,
      filter: "blur(5px)",
      offset: 0,
    },
    {
      transform: "translateY(20px)",
      opacity: 0.3,
      filter: "blur(3px)",
      offset: 0.3,
    },
    {
      transform: "translateY(-5px)",
      opacity: 0.7,
      filter: "blur(1px)",
      offset: 0.7,
    },
    {
      transform: "translateY(0)",
      opacity: 1,
      filter: "blur(0px)",
      offset: 1,
    },
  ],

  smoothScrollAdvanced: [
    {
      transform: "translateY(100px) scale(0.8) rotateX(10deg)",
      opacity: 0,
      filter: "blur(10px)",
      offset: 0,
    },
    {
      transform: "translateY(50px) scale(0.9) rotateX(5deg)",
      opacity: 0.2,
      filter: "blur(5px)",
      offset: 0.3,
    },
    {
      transform: "translateY(-10px) scale(0.95) rotateX(2deg)",
      opacity: 0.8,
      filter: "blur(2px)",
      offset: 0.7,
    },
    {
      transform: "translateY(5px) scale(1.02) rotateX(-1deg)",
      opacity: 0.9,
      filter: "blur(1px)",
      offset: 0.85,
    },
    {
      transform: "translateY(0) scale(1) rotateX(0deg)",
      opacity: 1,
      filter: "blur(0px)",
      offset: 1,
    },
  ],

  smoothScrollParallax: [
    {
      transform: "translateY(100px) translateZ(-100px) scale(0.8)",
      opacity: 0,
      transformStyle: "preserve-3d",
      offset: 0,
    },
    {
      transform: "translateY(30px) translateZ(-30px) scale(0.9)",
      opacity: 0.4,
      transformStyle: "preserve-3d",
      offset: 0.5,
    },
    {
      transform: "translateY(-5px) translateZ(5px) scale(0.98)",
      opacity: 0.8,
      transformStyle: "preserve-3d",
      offset: 0.8,
    },
    {
      transform: "translateY(0) translateZ(0) scale(1)",
      opacity: 1,
      transformStyle: "preserve-3d",
      offset: 1,
    },
  ],

  smoothScrollFade: [
    {
      transform: "translateY(30px)",
      opacity: 0,
      clipPath: "inset(10% 0 10% 0)",
      offset: 0,
    },
    {
      transform: "translateY(10px)",
      opacity: 0.3,
      clipPath: "inset(5% 0 5% 0)",
      offset: 0.4,
    },
    {
      transform: "translateY(0)",
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      offset: 1,
    },
  ],

  smoothScrollScale: [
    {
      transform: "translateY(60px) scale(0.7)",
      opacity: 0,
      offset: 0,
    },
    {
      transform: "translateY(20px) scale(0.85)",
      opacity: 0.4,
      offset: 0.4,
    },
    {
      transform: "translateY(-5px) scale(1.05)",
      opacity: 0.8,
      offset: 0.8,
    },
    {
      transform: "translateY(0) scale(1)",
      opacity: 1,
      offset: 1,
    },
  ],

  smoothScroll3D: [
    {
      transform:
        "perspective(1000px) translateY(100px) rotateX(30deg) scale(0.8)",
      opacity: 0,
      transformStyle: "preserve-3d",
      offset: 0,
    },
    {
      transform:
        "perspective(1000px) translateY(20px) rotateX(10deg) scale(0.95)",
      opacity: 0.6,
      transformStyle: "preserve-3d",
      offset: 0.6,
    },
    {
      transform:
        "perspective(1000px) translateY(-5px) rotateX(-2deg) scale(1.02)",
      opacity: 0.9,
      transformStyle: "preserve-3d",
      offset: 0.9,
    },
    {
      transform: "perspective(1000px) translateY(0) rotateX(0deg) scale(1)",
      opacity: 1,
      transformStyle: "preserve-3d",
      offset: 1,
    },
  ],

  smoothScrollStagger: [
    {
      transform: "translateY(50px) scale(0.9)",
      opacity: 0,
      offset: 0,
    },
    {
      transform: "translateY(0) scale(1)",
      opacity: 1,
      offset: 1,
    },
  ],

  reveal: [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
  revealLeft: [
    { clipPath: "inset(0 0 0 100%)" },
    { clipPath: "inset(0 0 0 0)" },
  ],
  revealRight: [
    { clipPath: "inset(0 100% 0 0)" },
    { clipPath: "inset(0 0 0 0)" },
  ],
  curtain: [{ clipPath: "inset(0 50% 0 50%)" }, { clipPath: "inset(0 0 0 0)" }],
  glitch: [
    { transform: "translate(0)", opacity: 1 },
    { transform: "translate(-5px, 5px)", opacity: 0.8 },
    { transform: "translate(5px, -5px)", opacity: 0.8 },
    { transform: "translate(-5px, -5px)", opacity: 0.8 },
    { transform: "translate(5px, 5px)", opacity: 0.8 },
    { transform: "translate(0)", opacity: 1 },
  ],
  perspective: [
    { transform: "perspective(1000px) rotateX(45deg)", opacity: 0 },
    { transform: "perspective(1000px) rotateX(0deg)", opacity: 1 },
  ],
  rotateScale: [
    { transform: "rotate(-180deg) scale(0)", opacity: 0 },
    { transform: "rotate(0deg) scale(1)", opacity: 1 },
  ],

  spiral: [
    { transform: "rotate(0deg) scale(0) translateX(0)", opacity: 0 },
    { transform: "rotate(720deg) scale(1) translateX(0)", opacity: 1 },
  ],
  unfold: [
    {
      transform: "scaleY(0) rotateX(-90deg)",
      transformOrigin: "top",
      opacity: 0,
    },
    {
      transform: "scaleY(1) rotateX(0deg)",
      transformOrigin: "top",
      opacity: 1,
    },
  ],
  matrix: [
    { transform: "matrix(0.5, 0.5, -0.5, 0.5, 0, 0)", opacity: 0 },
    { transform: "matrix(1, 0, 0, 1, 0, 0)", opacity: 1 },
  ],
  kaleidoscope: [
    {
      transform: "rotate(0deg) scale(0.5)",
      filter: "hue-rotate(0deg)",
      opacity: 0,
    },
    {
      transform: "rotate(180deg) scale(1)",
      filter: "hue-rotate(180deg)",
      opacity: 1,
    },
    {
      transform: "rotate(360deg) scale(1)",
      filter: "hue-rotate(360deg)",
      opacity: 1,
    },
  ],
};

const createSmoothScrollKeyframes = (
  options?: ScrollAnimatorProps["smoothScrollOptions"]
): Keyframe[] => {
  const defaults = {
    translateY: 50,
    translateX: 0,
    scaleStart: 0.9,
    scaleEnd: 1,
    rotateStart: 0,
    rotateEnd: 0,
    blurStart: 5,
    blurEnd: 0,
    perspective: 1000,
    skewX: 0,
    skewY: 0,
  };

  const config = { ...defaults, ...options };

  return [
    {
      transform: `
        translateY(${config.translateY}px)
        translateX(${config.translateX}px)
        scale(${config.scaleStart})
        rotate(${config.rotateStart}deg)
        skew(${config.skewX}deg, ${config.skewY}deg)
      `,
      opacity: 0,
      filter: `blur(${config.blurStart}px)`,
      transformStyle: config.perspective > 0 ? "preserve-3d" : "flat",
      perspective:
        config.perspective > 0 ? `${config.perspective}px` : undefined,
      offset: 0,
    },
    {
      transform: `
        translateY(${config.translateY * 0.4}px)
        translateX(${config.translateX * 0.4}px)
        scale(${(config.scaleStart + config.scaleEnd) / 2})
        rotate(${(config.rotateStart + config.rotateEnd) / 2}deg)
        skew(${config.skewX * 0.5}deg, ${config.skewY * 0.5}deg)
      `,
      opacity: 0.4,
      filter: `blur(${config.blurStart * 0.5}px)`,
      offset: 0.5,
    },
    {
      transform: `
        translateY(-${config.translateY * 0.1}px)
        translateX(-${config.translateX * 0.1}px)
        scale(${config.scaleEnd * 1.05})
        rotate(${config.rotateEnd - 2}deg)
        skew(${-config.skewX * 0.1}deg, ${-config.skewY * 0.1}deg)
      `,
      opacity: 0.9,
      filter: `blur(${config.blurEnd}px)`,
      offset: 0.85,
    },
    {
      transform: `
        translateY(0)
        translateX(0)
        scale(${config.scaleEnd})
        rotate(${config.rotateEnd}deg)
        skew(0deg, 0deg)
      `,
      opacity: 1,
      filter: `blur(${config.blurEnd}px)`,
      offset: 1,
    },
  ];
};

// Enhanced observer cache with better state management
interface ObserverConfig {
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
  repeatOnScroll: boolean;
}

interface ObservedElement {
  animate: () => void;
  reset: () => void;
  config: ObserverConfig;
  isAnimating: boolean;
}

const observerCache = new Map<string, IntersectionObserver>();
const observedElements = new Map<Element, ObservedElement>();

const getObserverKey = (config: ObserverConfig): string => {
  return `${config.threshold}-${config.rootMargin}-${config.triggerOnce}-${config.repeatOnScroll}`;
};

const createObserver = (config: ObserverConfig): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const data = observedElements.get(entry.target);
        if (!data) return;

        if (entry.isIntersecting) {
          // Element is entering viewport
          if (!data.isAnimating) {
            data.animate();
            data.isAnimating = true;
          }

          // If triggerOnce is true, we stop observing after animation
          if (config.triggerOnce) {
            observer.unobserve(entry.target);
            observedElements.delete(entry.target);
          }
        } else {
          // Element is leaving viewport
          if (config.repeatOnScroll) {
            // Reset animation state so it can animate again when re-entering
            data.reset();
            data.isAnimating = false;
          }
        }
      });
    },
    {
      threshold: config.threshold,
      rootMargin: config.rootMargin,
    }
  );

  return observer;
};

const getSharedObserver = (config: ObserverConfig): IntersectionObserver => {
  const key = getObserverKey(config);

  if (!observerCache.has(key)) {
    const observer = createObserver(config);
    observerCache.set(key, observer);
  }

  return observerCache.get(key)!;
};

// Performance optimized stagger animation using requestAnimationFrame
const createStaggerAnimation = (
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
  stagger: number
): Animation[] => {
  const children = Array.from(element.children) as HTMLElement[];
  const animations: Animation[] = [];
  const startTime = performance.now();

  const animateFrame = (currentTime: number) => {
    const elapsed = currentTime - startTime;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (!child) continue;

      const shouldStart = elapsed >= i * stagger;
      const hasStarted = child.hasAttribute("data-animation-started");

      if (shouldStart && !hasStarted) {
        child.setAttribute("data-animation-started", "true");
        const anim = child.animate(keyframes, options);
        animations.push(anim);

        // Clean up attribute when animation finishes
        anim.onfinish = () => {
          child.removeAttribute("data-animation-started");
        };
      }
    }

    // Continue until all animations started
    if (elapsed < children.length * stagger) {
      requestAnimationFrame(animateFrame);
    }
  };

  requestAnimationFrame(animateFrame);
  return animations;
};

// Optimized parallax with requestAnimationFrame throttling
const useParallaxEffect = (
  elementRef: React.RefObject<HTMLElement | null>,
  options: ScrollAnimatorProps["smoothScrollOptions"],
  effect: AnimationType
) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !options?.useParallax || !effect.startsWith("smoothScroll"))
      return;

    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const updateParallax = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      const intensity = options.parallaxIntensity || 0.1;

      const parallaxOffset =
        (distanceFromCenter / windowHeight) * 100 * intensity;

      element.style.transform = `translateY(${parallaxOffset}px)`;
      element.style.transition = "transform 0.1s ease-out";
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only update if scrolled at least 1px to reduce calculations
      if (Math.abs(currentScrollY - lastScrollY) >= 1) {
        lastScrollY = currentScrollY;

        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }

        rafId = requestAnimationFrame(updateParallax);
      }
    };

    // Passive event listener for better scrolling performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax(); // Initial update

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      if (element) {
        element.style.transform = "";
        element.style.transition = "";
      }
    };
  }, [elementRef, options?.useParallax, options?.parallaxIntensity, effect]);
};

// Performance optimized memo comparison
const arePropsEqual = (
  prevProps: ScrollAnimatorProps,
  nextProps: ScrollAnimatorProps
): boolean => {
  // Quick reference equality check first
  if (prevProps === nextProps) return true;

  // Compare primitive props
  if (
    prevProps.effect !== nextProps.effect ||
    prevProps.duration !== nextProps.duration ||
    prevProps.delay !== nextProps.delay ||
    prevProps.threshold !== nextProps.threshold ||
    prevProps.stagger !== nextProps.stagger ||
    prevProps.repeat !== nextProps.repeat ||
    prevProps.repeatOnScroll !== nextProps.repeatOnScroll ||
    prevProps.easing !== nextProps.easing ||
    prevProps.triggerOnce !== nextProps.triggerOnce ||
    prevProps.rootMargin !== nextProps.rootMargin ||
    prevProps.disabled !== nextProps.disabled ||
    prevProps.className !== nextProps.className ||
    prevProps.children !== nextProps.children
  ) {
    return false;
  }

  // Shallow compare style objects
  if (prevProps.style !== nextProps.style) {
    const prevKeys = Object.keys(prevProps.style || {});
    const nextKeys = Object.keys(nextProps.style || {});
    if (prevKeys.length !== nextKeys.length) return false;
    for (const key of prevKeys) {
      if ((prevProps.style as any)[key] !== (nextProps.style as any)[key])
        return false;
    }
  }

  // Shallow compare smoothScrollOptions
  const prevOpts = prevProps.smoothScrollOptions;
  const nextOpts = nextProps.smoothScrollOptions;

  if (prevOpts === nextOpts) return true;
  if (!prevOpts || !nextOpts) return false;

  const prevOptKeys = Object.keys(prevOpts);
  const nextOptKeys = Object.keys(nextOpts);
  if (prevOptKeys.length !== nextOptKeys.length) return false;

  for (const key of prevOptKeys) {
    if ((prevOpts as any)[key] !== (nextOpts as any)[key]) return false;
  }

  return true;
};

const ScrollAnimator = memo(
  ({
    children,
    effect,
    duration = 1,
    delay = 0,
    threshold = 0.1,
    className = "",
    stagger = 100,
    repeat = false,
    repeatOnScroll = true,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    style = {},
    triggerOnce = false,
    rootMargin = "0px",
    disabled = false,
    smoothScrollOptions,
  }: ScrollAnimatorProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);
    const animationRef = useRef<Animation | null>(null);
    const staggerAnimationsRef = useRef<Animation[]>([]);
    const isInViewport = useRef(false);

    // Memoize animation options
    const animationOptions = useMemo<KeyframeAnimationOptions>(
      () => ({
        duration: duration * 1000,
        delay: delay * 1000,
        fill: "both",
        easing: easingMap[easing] || easing,
        iterations: repeat ? Infinity : 1,
      }),
      [duration, delay, easing, repeat]
    );

    // Clean up all animations
    const cleanupAnimations = useCallback(() => {
      if (animationRef.current) {
        animationRef.current.cancel();
        animationRef.current = null;
      }

      if (staggerAnimationsRef.current.length > 0) {
        staggerAnimationsRef.current.forEach((anim) => anim.cancel());
        staggerAnimationsRef.current = [];
      }
    }, []);

    // Reset animation state
    const resetAnimationState = useCallback(() => {
      hasAnimated.current = false;
      isInViewport.current = false;
      cleanupAnimations();

      const element = elementRef.current;
      if (element) {
        // Reset inline styles that might have been set by animations
        element.style.animation = "";
        element.style.transform = "";
        element.style.opacity = "";
        element.style.filter = "";

        // Reset will-change if it was set
        if (smoothScrollOptions?.useWillChange) {
          element.style.willChange = "auto";
        }
      }
    }, [cleanupAnimations, smoothScrollOptions?.useWillChange]);

    // Optimized animation function
    const animateElement = useCallback(() => {
      const element = elementRef.current;
      if (!element) return;

      // Check if we should animate based on current state
      if (triggerOnce && hasAnimated.current) return;
      if (!repeatOnScroll && hasAnimated.current && isInViewport.current)
        return;

      hasAnimated.current = true;
      isInViewport.current = true;

      const isStagger =
        effect.startsWith("stagger") || effect === "smoothScrollStagger";
      let keyframes = KEYFRAMES_CACHE[effect];

      // Create custom keyframes for smoothScroll if options are provided
      if (
        effect.startsWith("smoothScroll") &&
        smoothScrollOptions &&
        effect === "smoothScroll"
      ) {
        keyframes = createSmoothScrollKeyframes(smoothScrollOptions);
      }

      // Clean up previous animations
      cleanupAnimations();

      // Apply will-change optimization if enabled
      if (smoothScrollOptions?.useWillChange) {
        element.style.willChange = "transform, opacity, filter";
      }

      // Apply transform origin if specified
      if (smoothScrollOptions?.useTransformOrigin) {
        element.style.transformOrigin = smoothScrollOptions.useTransformOrigin;
      }

      if (isStagger) {
        // Use optimized stagger animation
        const animations = createStaggerAnimation(
          element,
          keyframes,
          animationOptions,
          smoothScrollOptions?.staggerDelay || stagger
        );
        staggerAnimationsRef.current = animations;

        // Clean up will-change after all animations
        if (smoothScrollOptions?.useWillChange) {
          const totalDuration =
            (smoothScrollOptions?.staggerDelay || stagger) *
            element.children.length;
          setTimeout(() => {
            if (element) {
              element.style.willChange = "auto";
            }
          }, totalDuration + (duration + delay) * 1000);
        }
      } else {
        // Use requestAnimationFrame for smooth animation start
        requestAnimationFrame(() => {
          animationRef.current = element.animate(keyframes, animationOptions);

          if (animationRef.current) {
            animationRef.current.onfinish = () => {
              if (smoothScrollOptions?.useWillChange && element) {
                element.style.willChange = "auto";
              }
            };

            animationRef.current.oncancel = () => {
              if (smoothScrollOptions?.useWillChange && element) {
                element.style.willChange = "auto";
              }
            };
          }
        });
      }
    }, [
      effect,
      animationOptions,
      stagger,
      triggerOnce,
      repeatOnScroll,
      smoothScrollOptions,
      duration,
      delay,
      cleanupAnimations,
    ]);

    // Setup parallax effect if enabled
    useParallaxEffect(elementRef, smoothScrollOptions, effect);

    // Setup IntersectionObserver
    useEffect(() => {
      if (disabled) return;

      const element = elementRef.current;
      if (!element) return;

      const observerConfig: ObserverConfig = {
        threshold,
        rootMargin,
        triggerOnce,
        repeatOnScroll,
      };

      const observer = getSharedObserver(observerConfig);

      observedElements.set(element, {
        animate: animateElement,
        reset: resetAnimationState,
        config: observerConfig,
        isAnimating: hasAnimated.current,
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
        observedElements.delete(element);
        resetAnimationState();
      };
    }, [
      threshold,
      rootMargin,
      triggerOnce,
      repeatOnScroll,
      animateElement,
      resetAnimationState,
      disabled,
    ]);

    // Clean up on unmount
    useEffect(() => {
      return () => {
        resetAnimationState();
      };
    }, [resetAnimationState]);

    if (disabled) {
      return (
        <div className={className} style={style}>
          {children}
        </div>
      );
    }

    // Apply initial styles for smooth scroll effects
    const initialStyles: CSSProperties = {
      ...style,
      ...(effect.startsWith("smoothScroll")
        ? {
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            willChange: smoothScrollOptions?.useWillChange
              ? "transform, opacity, filter"
              : undefined,
          }
        : {}),
      transformOrigin: smoothScrollOptions?.useTransformOrigin,
    };

    return (
      <div ref={elementRef} className={className} style={initialStyles}>
        {children}
      </div>
    );
  },
  arePropsEqual
);

ScrollAnimator.displayName = "ScrollAnimator";

export default ScrollAnimator;
