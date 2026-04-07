"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { IconTooltip } from "@/components/ui/icon-tooltip";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <span
        className={cn(
          "border-border bg-surface-muted inline-flex size-10 items-center justify-center rounded-full border",
          className,
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const tooltipLabel = isDark ? "Light mode" : "Dark mode";

  return (
    <IconTooltip label={tooltipLabel} side="bottom">
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "border-border bg-surface-muted text-foreground hover:bg-icon-hover dark:hover:border-icon-hover-border focus-visible:outline-ring inline-flex size-10 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-transparent",
          className,
        )}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDark ? (
          <Sun className="size-5" weight="duotone" aria-hidden />
        ) : (
          <Moon className="size-5" weight="duotone" aria-hidden />
        )}
      </button>
    </IconTooltip>
  );
}
