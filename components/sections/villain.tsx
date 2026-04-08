"use client";

import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  CONTACT_EMAIL,
  SITE_BIO,
  SITE_NAME,
  SITE_TAGLINE,
  VILLAIN_PROFILE_IMAGE_URL,
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
      className="border-border relative overflow-visible border-b bg-gradient-to-b from-surface-muted/35 via-background/55 to-background/80 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="bg-villain-glow-primary absolute top-0 -left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-villain-glow-secondary absolute -right-1/4 bottom-0 h-96 w-96 rounded-full blur-3xl" />
      </div>
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex flex-col items-center overflow-visible pt-1">
            <Link
              href="/contact"
              className="group focus-visible:ring-ring focus-visible:ring-offset-background inline-flex shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Go to contact"
              onPointerEnter={() => setIsProfileHovering(true)}
              onPointerLeave={() => setIsProfileHovering(false)}
            >
              <div className="relative shrink-0">
                <div className="group-hover:outline-accent rounded-full outline outline-2 outline-offset-[6px] outline-transparent transition-[transform,outline-color,outline-style] duration-300 ease-out group-hover:scale-[1.03] group-hover:outline-dashed">
                  <div className="border-border bg-surface-muted relative size-28 shrink-0 overflow-hidden rounded-full border-2 shadow-md ring-2 ring-black/5 sm:size-32 dark:ring-white/10">
                    <Image
                      src={VILLAIN_PROFILE_IMAGE_URL}
                      alt={`${SITE_NAME} profile photo`}
                      width={400}
                      height={400}
                      sizes="(max-width: 640px) 7rem, 8rem"
                      className="size-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "border-border bg-background/95 text-foreground pointer-events-none absolute top-0 left-full z-10 ml-1 -translate-y-2 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-md backdrop-blur-sm transition-opacity duration-200 ease-out sm:ml-1.5 sm:-translate-y-2.5",
                    "max-md:-translate-x-6 max-md:ml-0.5 md:-translate-x-2.5 md:ml-1",
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
            className="relative mb-4 inline-flex max-w-full items-center justify-center"
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
                "pointer-events-none absolute top-1/2 left-full z-10 ml-1.5 flex w-max max-w-[min(calc(100vw-2rem),16rem)] -translate-y-1/2 flex-col gap-1 transition-opacity duration-200 ease-out",
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
            <h1 className="text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {SITE_TAGLINE}
            </h1>
            <p
              className="text-muted mx-auto mt-5 w-full max-w-4xl text-lg leading-relaxed sm:text-xl md:line-clamp-3 md:leading-snug"
              title={SITE_BIO}
            >
              {SITE_BIO}
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink
              href="/projects"
              variant="primary"
              className="min-w-[160px]"
            >
              View projects
              <ArrowRight className="size-4" weight="bold" aria-hidden />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="min-w-[160px]"
            >
              Get in touch
            </ButtonLink>
          </div>
          <p className="text-muted mt-8 text-sm">
            Prefer email?{" "}
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent font-medium underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
