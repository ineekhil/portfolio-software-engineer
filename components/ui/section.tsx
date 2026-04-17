import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
};

export function Section({
  as: Component = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28",
        className,
      )}
      {...props}
    />
  );
}
