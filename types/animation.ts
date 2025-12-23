 /* eslint-disable @typescript-eslint/no-explicit-any */
export type DOMKeyframesDefinitionAny = any; 

export type ScrollEffectName =
  | "fadeIn"
  | "fadeOut"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"
  | "slideInDown"
  | "zoomIn"
  | "zoomOut"
  | "rotate"
  | "bounce"
  | "flip"
  | "pulse"
  | "rollIn"
  | "rollOut"
  | "scaleUp"
  | "scaleDown"
  | "skew"
  | "colorChange"
  | "morph"
  | "float"
  | "glow"
  | "wave"
  | "swing"
  | "wobble"
  | "blurIn"
  | "blurOut"
  | "staggerSlideUp"
  | "typewriter"
  | "gradientShift"
  | "neonPulse"
  | "magneticPull"
  | "liquidFill"
  | "parallaxTilt";

export interface MorphTargets {
  from: string;
  to: string;
}

export interface ScrollAnimationConfig {
  element: HTMLElement;
  effect?: ScrollEffectName | string;
  duration?: number | string;
  delay?: number | string;
  stagger?: boolean;
  parallax?: boolean;
  repeatOnScroll?: boolean;
  sticky?: boolean;
  progressive?: boolean;
  textReveal?: boolean;
  useCssClass?: boolean;
  morphTargets?: MorphTargets;
  repeat?: number | boolean | typeof Infinity;
  easing?: string;
  threshold?: number;
}

export interface AdvancedScrollAnimationConfig extends ScrollAnimationConfig {
  customKeyframes?: DOMKeyframesDefinitionAny;
}

export interface SequenceAnimationConfig {
  element: HTMLElement;
  sequence: { effect: ScrollEffectName; delay?: number | string; duration?: number | string }[];
  threshold?: number;
}
