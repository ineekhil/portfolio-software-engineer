import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-6xl px-3 min-[375px]:px-4 min-[425px]:px-5 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
