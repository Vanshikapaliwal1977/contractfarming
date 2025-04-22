
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type AnimationVariant = 
  | "fade-in" 
  | "slide-up" 
  | "slide-down" 
  | "slide-left" 
  | "slide-right" 
  | "zoom-in" 
  | "zoom-out";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimateInView({
  children,
  className,
  variant = "fade-in",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: AnimateInViewProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  const variants: Record<AnimationVariant, string> = {
    "fade-in": "opacity-0 transition-opacity",
    "slide-up": "opacity-0 translate-y-8 transition-all",
    "slide-down": "opacity-0 -translate-y-8 transition-all",
    "slide-left": "opacity-0 translate-x-8 transition-all",
    "slide-right": "opacity-0 -translate-x-8 transition-all",
    "zoom-in": "opacity-0 scale-95 transition-all",
    "zoom-out": "opacity-0 scale-105 transition-all",
  };

  return (
    <div
      ref={ref}
      className={cn(
        variants[variant],
        inView && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
