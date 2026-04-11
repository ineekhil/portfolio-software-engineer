"use client";

import { Code, Heart, List, ReadCvLogoIcon, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { HeaderSearch } from "@/components/layout/header-search";
import { HeaderSocial } from "@/components/layout/header-social";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { IconTooltip } from "@/components/ui/icon-tooltip";
import { Container } from "@/components/ui/container";
import {
  NAV_ITEMS,
  RESUME_DOWNLOAD_FILENAME,
  RESUME_DOWNLOAD_HREF,
  SITE_NAME,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Current main nav tab (route matches): dark pill + light text. */
const NAV_ACTIVE_TAB = "bg-[#2C2C2C] text-white";

/** Slight tilt on tab “pills” — hover and current route (not the site logo row). */
const NAV_TAB_TRANSFORM =
  "origin-center transition-[color,background-color,transform] duration-200 ease-out";
const navTabRotation = (active: boolean) =>
  active ? "-rotate-2" : "rotate-0 hover:-rotate-2";

function HeaderDecorIcons({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === "/donate";

  return (
    <IconTooltip label="#spread-happiness 😍" side="bottom" preserveCase>
      <Link
        href="/donate"
        onClick={onNavigate}
        className={cn(
          "inline-flex shrink-0 text-red-500 transition-opacity hover:opacity-80",
          className,
          active &&
            "rounded-full outline-dotted outline-2 outline-offset-2 outline-accent",
        )}
        aria-label="Spread happiness — open donate page"
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
    <header className="border-border bg-background/80 sticky top-0 z-50 w-full max-w-full overflow-x-hidden border-b backdrop-blur-md">
      <Container className="flex h-14 min-[375px]:h-16 items-center justify-between gap-2 min-[375px]:gap-3">
        <Link
          href="/"
          className="text-foreground flex min-w-0 shrink items-center gap-1.5 min-[375px]:gap-2 text-base font-semibold tracking-tight transition-opacity hover:opacity-80 min-[375px]:text-lg"
        >
          <Code
            className="text-accent size-[1.125rem] shrink-0 min-[375px]:size-5 sm:size-[1.35rem]"
            weight="duotone"
            aria-hidden
          />
          <span className="truncate uppercase">{SITE_NAME}</span>
        </Link>

        <nav
          className="text-muted hidden items-center gap-0.5 md:flex"
          aria-label="Main"
        >
          {NAV_ITEMS.map(({ href, label }) => {
            const isResumeDownload = href === RESUME_DOWNLOAD_HREF;
            const active = isResumeDownload
              ? pathname === "/resume" || pathname.startsWith("/resume/")
              : href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);

            if (isResumeDownload) {
              return (
                <IconTooltip
                  key={href}
                  label="download cv"
                  side="bottom"
                  preserveCase
                >
                  <Link
                    href={href}
                    download={RESUME_DOWNLOAD_FILENAME}
                    aria-label="Download CV"
                    className={cn(
                      "inline-flex items-center justify-center rounded-lg px-2.5 py-2 text-sm font-medium",
                      NAV_TAB_TRANSFORM,
                      navTabRotation(active),
                      active
                        ? NAV_ACTIVE_TAB
                        : "text-muted",
                      "hover:bg-[#73A5CA] hover:text-white",
                    )}
                  >
                    <ReadCvLogoIcon
                      className="size-5 shrink-0"
                      weight="duotone"
                      aria-hidden
                    />
                  </Link>
                </IconTooltip>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium",
                  NAV_TAB_TRANSFORM,
                  navTabRotation(active),
                  active
                    ? NAV_ACTIVE_TAB
                    : "text-muted",
                  "hover:bg-[#73A5CA] hover:text-white",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 min-[375px]:gap-2 md:max-w-none md:flex-none md:gap-3">
          <div className="hidden max-w-md min-w-0 flex-1 items-center gap-3 md:flex">
            <ThemeToggle className="shrink-0 rounded-full" />
            <HeaderSearch className="max-w-[min(100%,40rem)]" />
            <HeaderSocial />
            <HeaderDecorIcons />
          </div>

          <div className="flex items-center gap-1.5 min-[375px]:gap-2 md:hidden">
            <HeaderDecorIcons onNavigate={() => setOpen(false)} />
            <IconTooltip label="download cv" side="bottom" preserveCase>
              <Link
                href={RESUME_DOWNLOAD_HREF}
                download={RESUME_DOWNLOAD_FILENAME}
                onClick={() => setOpen(false)}
                aria-label="Download CV"
                className={cn(
                  "inline-flex items-center justify-center rounded-lg p-2",
                  NAV_TAB_TRANSFORM,
                  navTabRotation(
                    pathname === "/resume" || pathname.startsWith("/resume/"),
                  ),
                  pathname === "/resume" || pathname.startsWith("/resume/")
                    ? NAV_ACTIVE_TAB
                    : "text-muted",
                  "hover:bg-[#73A5CA] hover:text-white",
                )}
              >
                <ReadCvLogoIcon
                  className="size-6 shrink-0"
                  weight="duotone"
                  aria-hidden
                />
              </Link>
            </IconTooltip>
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
          className="border-border bg-background max-h-[min(85vh,calc(100dvh-3.5rem))] min-[375px]:max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto border-t md:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile main">
              {NAV_ITEMS.filter(({ href }) => href !== RESUME_DOWNLOAD_HREF).map(
                ({ href, label }) => {
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
                        "inline-flex w-full items-center rounded-lg px-3 py-3 text-base font-medium",
                        NAV_TAB_TRANSFORM,
                        navTabRotation(active),
                        active
                          ? NAV_ACTIVE_TAB
                          : "text-muted",
                        "hover:bg-[#73A5CA] hover:text-white",
                      )}
                    >
                      {label}
                    </Link>
                  );
                },
              )}
            </nav>
            <HeaderSearch className="max-w-none" />
            <div className="flex justify-center pt-1">
              <HeaderSocial />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
