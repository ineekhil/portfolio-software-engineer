import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconTooltipProps = {
  /** Text shown on hover / focus-visible */
  label: string;
  children: ReactNode;
  /** Tooltip position relative to the trigger */
  side?: "top" | "bottom";
  className?: string;
  preserveCase?: boolean;
};

/**
 * Wraps an icon button (or link) with a small hover/focus tooltip.
 * Keep `aria-label` on the child for screen readers; this is a visual hint.
 */
export function IconTooltip({
  label,
  children,
  side = "bottom",
  className,
  preserveCase = false,
}: IconTooltipProps) {
  return (
    <div
      className={cn("group/tooltip relative inline-flex shrink-0", className)}
    >
      {children}
      <span
        role="tooltip"
        className={cn(
          "border-border/50 bg-background/35 text-foreground dark:bg-background/30 pointer-events-none absolute left-1/2 z-[70] max-w-[min(18rem,calc(100dvw-1rem))] -translate-x-1/2 rounded-md border px-2 py-1 text-center text-xs font-medium whitespace-normal opacity-0 shadow-sm ring-1 ring-black/5 backdrop-blur-xl transition-opacity duration-200 md:whitespace-nowrap dark:ring-white/10",
          !preserveCase && "lowercase",
          "group-hover/tooltip:opacity-100 group-focus-visible/tooltip:opacity-100",
          side === "bottom" && "top-full mt-1.5",
          side === "top" && "bottom-full mb-1.5",
        )}
      >
        {label}
      </span>
    </div>
  );
}
