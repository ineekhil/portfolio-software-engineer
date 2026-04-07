"use client";

import {
  Briefcase,
  Code,
  EnvelopeSimple,
  Heart,
  House,
  List,
  User,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { HeaderSearch } from "@/components/layout/header-search";
import { HeaderSocial } from "@/components/layout/header-social";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { IconTooltip } from "@/components/ui/icon-tooltip";
import { Container } from "@/components/ui/container";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ICONS = {
  "/": House,
  "/about": User,
  "/projects": Briefcase,
  "/contact": EnvelopeSimple,
} as const;

function HeaderDecorIcons({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <IconTooltip label="#spread-happiness 😍" side="bottom" preserveCase>
      <Link
        href="/white-place"
        onClick={onNavigate}
        className={cn(
          "inline-flex shrink-0 text-red-500 transition-opacity hover:opacity-80",
          className,
        )}
        aria-label="Spread happiness — open white place"
      >
        <Heart className="size-6" weight="fill" aria-hidden />
      </Link>
    </IconTooltip>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="text-foreground flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          <Code
            className="text-accent size-5 shrink-0 sm:size-[1.35rem]"
            weight="duotone"
            aria-hidden
          />
          <span className="uppercase">{SITE_NAME}</span>
        </Link>

        <nav
          className="text-muted hidden items-center gap-1 md:flex"
          aria-label="Main"
        >
          {NAV_ITEMS.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-surface-muted text-foreground"
                    : "hover:bg-surface-muted hover:text-foreground",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:max-w-none md:flex-none md:gap-3">
          <div className="hidden max-w-md min-w-0 flex-1 items-center gap-3 md:flex">
            <ThemeToggle className="shrink-0 rounded-full" />
            <HeaderSearch className="max-w-[min(100%,40rem)]" />
            <HeaderSocial />
            <HeaderDecorIcons />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className="shrink-0 rounded-full" />
            <IconTooltip
              label={open ? "Close menu" : "Open menu"}
              side="bottom"
            >
              <button
                type="button"
                className="border-border bg-surface-muted text-foreground hover:bg-icon-hover dark:hover:border-icon-hover-border inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors dark:hover:bg-transparent"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <X className="size-5" weight="bold" aria-hidden />
                ) : (
                  <List className="size-5" weight="bold" aria-hidden />
                )}
              </button>
            </IconTooltip>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-border bg-background max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto border-t md:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile main">
              {NAV_ITEMS.map(({ href, label }) => {
                const Icon = NAV_ICONS[href as keyof typeof NAV_ICONS];
                const active =
                  href === "/"
                    ? pathname === "/"
                    : pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium",
                      active
                        ? "bg-surface-muted text-foreground"
                        : "text-muted hover:bg-surface-muted hover:text-foreground",
                    )}
                  >
                    <Icon className="size-5 shrink-0" weight="duotone" />
                    {label}
                  </Link>
                );
              })}
            </nav>
            <HeaderSearch className="max-w-none" />
            <div className="flex flex-wrap items-center gap-2">
              <HeaderSocial className="self-start" />
              <HeaderDecorIcons onNavigate={() => setOpen(false)} />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
