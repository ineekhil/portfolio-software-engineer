"use client";

import { Code, FolderOpen, Plus, Sparkle, Stack } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  HOME_HERO_RECENT_PROJECTS,
  HOME_HERO_RECENT_TECH,
  HOME_HERO_SKILLS,
  SITE_BIO,
  SITE_NAME,
  SITE_TAGLINE,
  VILLAIN_PROFILE_IMAGE,
} from "@/lib/constants";
import {
  companiesHoverOrder,
  HERO_BADGE_VARIANT,
  HERO_EMPLOYED_COMPANY_KEY,
  messages,
  openToOpportunitiesHoverRoles,
} from "@/lib/messages";

/** Delay after the hero section is in view before showing the profile tooltip. */
const PROFILE_TOOLTIP_DELAY_MS = 2000;

export function Villain() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isProfileHovering, setIsProfileHovering] = useState(false);
  const [isOpenToOpportunitiesHovering, setIsOpenToOpportunitiesHovering] =
    useState(false);
  const [showTimedProfileHint, setShowTimedProfileHint] = useState(false);
  const profileHintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wasSectionInViewRef = useRef(false);

  const profileTooltipText = isProfileHovering
    ? messages.profileHover.yesImTheOne
    : messages.profileHover.heyHowAreYou;

  const showProfileTooltip = showTimedProfileHint || isProfileHovering;

  const heroBadgeIsOpen = HERO_BADGE_VARIANT === "open";
  const heroBadgeLabel = heroBadgeIsOpen
    ? messages.openToOpportunities
    : `${messages.heroEmployment.currentlyWorkingReactDeveloperAtPrefix} ${messages.companies[HERO_EMPLOYED_COMPANY_KEY]}`;
  const heroBadgeHoverItems = heroBadgeIsOpen
    ? openToOpportunitiesHoverRoles
    : companiesHoverOrder;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const clearHintTimer = () => {
      if (profileHintTimerRef.current) {
        clearTimeout(profileHintTimerRef.current);
        profileHintTimerRef.current = null;
      }
    };

    const scheduleHint = () => {
      clearHintTimer();
      setShowTimedProfileHint(false);
      profileHintTimerRef.current = setTimeout(() => {
        setShowTimedProfileHint(true);
        profileHintTimerRef.current = null;
      }, PROFILE_TOOLTIP_DELAY_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;

        const inView =
          e.isIntersecting &&
          e.intersectionRect.height > 0 &&
          e.intersectionRatio >= 0.2;

        if (inView) {
          if (!wasSectionInViewRef.current) {
            wasSectionInViewRef.current = true;
            scheduleHint();
          }
        } else {
          wasSectionInViewRef.current = false;
          clearHintTimer();
          setShowTimedProfileHint(false);
        }
      },
      { threshold: [0, 0.2, 0.35, 0.5] },
    );

    observer.observe(el);

    return () => {
      clearHintTimer();
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-border relative overflow-x-clip overflow-y-visible border-b bg-gradient-to-b from-surface-muted/35 via-background/55 to-background/80 pt-12 pb-16 min-[375px]:pt-16 min-[375px]:pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="bg-villain-glow-primary absolute top-0 -left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-villain-glow-secondary absolute -right-1/4 bottom-0 h-96 w-96 rounded-full blur-3xl" />
      </div>
      <Container>
        <div className="mx-auto min-w-0 max-w-5xl text-center">
          <div className="mb-5 flex w-full max-w-full flex-col items-center overflow-visible pt-1">
            <Link
              href="/contact"
              className="group focus-visible:ring-ring focus-visible:ring-offset-background inline-flex shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Go to contact"
              onPointerEnter={() => setIsProfileHovering(true)}
              onPointerLeave={() => setIsProfileHovering(false)}
            >
              <div className="relative shrink-0">
                <div className="group-hover:outline-accent rounded-full outline outline-2 outline-offset-[6px] outline-transparent transition-[transform,outline-color,outline-style] duration-300 ease-out group-hover:scale-[1.03] group-hover:outline-dashed">
                  <div className="border-border bg-surface-muted relative size-24 shrink-0 overflow-hidden rounded-full border-2 shadow-md ring-2 ring-black/5 min-[375px]:size-28 sm:size-32 dark:ring-white/10">
                    <Image
                      src={VILLAIN_PROFILE_IMAGE}
                      alt={`${SITE_NAME} profile photo`}
                      width={400}
                      height={400}
                      sizes="(max-width: 374px) 6rem, (max-width: 640px) 7rem, 8rem"
                      className="size-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "border-border bg-background/95 text-foreground pointer-events-none absolute z-10 rounded-full border px-3 py-1.5 text-xs font-medium shadow-md backdrop-blur-sm transition-[opacity,transform] duration-200 ease-out",
                    "top-0 w-max max-w-[calc(100dvw-7.5rem)] -translate-y-0.5 whitespace-nowrap text-left",
                    "left-[calc(100%-2.125rem)] max-[360px]:left-[calc(100%-1.75rem)] max-[360px]:-translate-y-2 min-[375px]:left-[calc(100%-2.25rem)] sm:left-[calc(100%-2.5rem)]",
                    "overflow-x-auto [scrollbar-width:thin]",
                    isProfileHovering ? "translate-x-0.5" : "-translate-x-0.5",
                    "opacity-0",
                    showProfileTooltip && "opacity-100",
                  )}
                  role="tooltip"
                  aria-live={showProfileTooltip ? "polite" : undefined}
                >
                  {profileTooltipText}
                </span>
              </div>
            </Link>
          </div>
          <div
            className="relative mb-4 flex w-full max-w-full flex-col items-center overflow-x-clip"
            onPointerEnter={() => setIsOpenToOpportunitiesHovering(true)}
            onPointerLeave={() => setIsOpenToOpportunitiesHovering(false)}
          >
            <p
              className={cn(
                "border-border bg-background/80 text-muted inline-flex max-w-[min(100%,22rem)] cursor-default items-center gap-2 rounded-full border px-3 py-1.5 text-xs leading-snug font-medium shadow-sm backdrop-blur sm:max-w-[28rem]",
                !heroBadgeIsOpen && "text-balance",
              )}
            >
              <Sparkle className="text-accent size-3.5 shrink-0" weight="fill" />
              <span className="min-w-0 text-left">{heroBadgeLabel}</span>
            </p>
            <div
              className={cn(
                "pointer-events-none absolute z-10 flex flex-col gap-1 transition-opacity duration-200 ease-out",
                "max-md:left-1/2 max-md:top-full max-md:mt-2 max-md:ml-0 max-md:w-full max-md:max-w-[min(18rem,calc(100dvw-1.5rem))] max-md:-translate-x-1/2 max-md:translate-y-0 max-md:items-center",
                "md:top-1/2 md:left-full md:ml-1.5 md:w-max md:-translate-y-1/2 md:translate-x-0 md:items-stretch md:max-w-[min(16rem,calc(100dvw-2rem))]",
                "opacity-0",
                isOpenToOpportunitiesHovering && "opacity-100",
              )}
              role="tooltip"
              aria-live={isOpenToOpportunitiesHovering ? "polite" : undefined}
              aria-hidden={!isOpenToOpportunitiesHovering}
            >
              {heroBadgeHoverItems.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5"
                >
                  <span
                    className="bg-accent h-px w-3.5 shrink-0 rounded-full"
                    aria-hidden
                  />
                  <span className="border-border bg-background/95 text-foreground rounded-full border px-2 py-0.5 text-[10px] leading-tight font-medium whitespace-nowrap shadow-sm backdrop-blur-sm sm:text-[11px]">
                    {label}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-foreground text-3xl font-semibold tracking-tight text-balance min-[375px]:text-4xl sm:text-5xl lg:text-6xl">
              {SITE_TAGLINE}
            </h1>
            <p
              className="text-muted mx-auto mt-4 w-full max-w-4xl text-base leading-relaxed min-[375px]:mt-5 min-[375px]:text-lg sm:mt-5 sm:text-xl md:line-clamp-3 md:leading-snug"
            >
              {SITE_BIO}
            </p>
          </div>
          <div className="text-foreground mx-auto mt-8 w-full max-w-4xl text-left min-[375px]:mt-10 min-[425px]:mt-12 sm:mt-12">
            <div className="grid gap-8 min-[375px]:gap-9 min-[425px]:gap-10 sm:grid-cols-3 sm:gap-8">
              <div className="text-center">
                <div className="flex flex-col items-center gap-2">
                  <Stack
                    className="text-accent size-8 shrink-0"
                    weight="duotone"
                    aria-hidden
                  />
                  <h2 className="text-accent text-xs font-semibold tracking-wide">
                    Skills
                  </h2>
                </div>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {HOME_HERO_SKILLS.map((item) => (
                    <li key={item}>
                      <span className="border-border bg-background/80 text-foreground inline-block rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/skills"
                      className="border-border text-muted hover:border-accent/50 hover:text-accent bg-background/80 inline-flex size-4 items-center justify-center rounded-full border border-dashed transition-colors"
                      aria-label="More skills"
                    >
                      <Plus className="size-2.5" weight="bold" aria-hidden />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="flex flex-col items-center gap-2">
                  <Code
                    className="text-accent size-8 shrink-0"
                    weight="duotone"
                    aria-hidden
                  />
                  <h2 className="text-accent text-xs font-semibold tracking-wide">
                    Recent Technology
                  </h2>
                </div>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {HOME_HERO_RECENT_TECH.map((item) => (
                    <li key={item}>
                      <span className="border-border bg-background/80 text-foreground inline-block rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/skills"
                      className="border-border text-muted hover:border-accent/50 hover:text-accent bg-background/80 inline-flex size-4 items-center justify-center rounded-full border border-dashed transition-colors"
                      aria-label="More technologies"
                    >
                      <Plus className="size-2.5" weight="bold" aria-hidden />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="flex flex-col items-center gap-2">
                  <FolderOpen
                    className="text-accent size-8 shrink-0"
                    weight="duotone"
                    aria-hidden
                  />
                  <h2 className="text-accent text-xs font-semibold tracking-wide">
                    Projects
                  </h2>
                </div>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {HOME_HERO_RECENT_PROJECTS.map((title) => (
                    <li key={title}>
                      <span className="border-border bg-background/80 text-foreground inline-block rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm">
                        {title}
                      </span>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/projects"
                      className="border-border text-muted hover:border-accent/50 hover:text-accent bg-background/80 inline-flex size-4 items-center justify-center rounded-full border border-dashed transition-colors"
                      aria-label="More projects"
                    >
                      <Plus className="size-2.5" weight="bold" aria-hidden />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
