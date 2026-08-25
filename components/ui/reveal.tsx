"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds, applied as a CSS transition-delay. */
  delay?: number;
};

/**
 * Fades + rises children the first time they scroll into view.
 *
 * Motion is gated entirely behind `motion-safe:` — when the user prefers
 * reduced motion the hidden classes never apply, so content is shown
 * immediately and never animates. Mirrors the IntersectionObserver approach
 * already used in `components/sections/villain.tsx`.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
        shown
          ? "translate-y-0 opacity-100"
          : "motion-safe:translate-y-3 motion-safe:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
