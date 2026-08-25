"use client";

import { ArrowRight, ArrowUpRight, DownloadSimple, Sparkle } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  RESUME_DOWNLOAD_FILENAME,
  RESUME_DOWNLOAD_HREF,
  SITE_HEADLINE,
  SITE_NAME,
  SITE_TAGLINE,
  VILLAIN_PROFILE_IMAGE,
} from "@/lib/constants";
import { COMPANY_NAME, COMPANY_URL } from "@/lib/services";
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
      className="relative overflow-visible pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-28"
    >
      <Container>
        <div className="max-w-4xl">
          {/* Availability — prominent status pill (primary recruiter signal) */}
          <div
            className="relative inline-flex"
            onPointerEnter={() => setIsOpenToOpportunitiesHovering(true)}
            onPointerLeave={() => setIsOpenToOpportunitiesHovering(false)}
          >
            <span className="border-border bg-background text-foreground inline-flex cursor-default items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs tracking-wide uppercase">
              {heroBadgeIsOpen ? (
                <span className="relative flex size-2 shrink-0" aria-hidden>
                  <span className="bg-accent absolute inline-flex size-full rounded-full opacity-60 motion-safe:animate-ping" />
                  <span className="bg-accent relative inline-flex size-2 rounded-full" />
                </span>
              ) : (
                <Sparkle
                  className="text-accent size-3.5 shrink-0"
                  weight="fill"
                  aria-hidden
                />
              )}
              <span>{heroBadgeLabel}</span>
            </span>
            <div
              className={cn(
                "pointer-events-none absolute top-1/2 left-full z-10 ml-3 flex w-max max-w-[min(calc(100dvw-2rem),16rem)] -translate-y-1/2 flex-col gap-1 transition-opacity duration-200 ease-out",
                "opacity-0",
                isOpenToOpportunitiesHovering && "opacity-100",
              )}
              role="tooltip"
              aria-live={isOpenToOpportunitiesHovering ? "polite" : undefined}
              aria-hidden={!isOpenToOpportunitiesHovering}
            >
              {heroBadgeHoverItems.map((label) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <span
                    className="bg-accent h-px w-3.5 shrink-0 rounded-full"
                    aria-hidden
                  />
                  <span className="border-border bg-background text-foreground rounded-full border px-2 py-0.5 text-[10px] leading-tight font-medium whitespace-nowrap shadow-sm sm:text-[11px]">
                    {label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Byline: profile photo (hover Easter egg) */}
          <div className="mt-6 flex items-center">
            <Link
              href="/contact"
              className="group focus-visible:ring-ring focus-visible:ring-offset-background inline-flex shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Go to contact"
              onPointerEnter={() => setIsProfileHovering(true)}
              onPointerLeave={() => setIsProfileHovering(false)}
            >
              <div className="relative shrink-0">
                <div className="group-hover:outline-accent rounded-full outline-2 outline-offset-4 outline-transparent transition-[transform,outline-color,outline-style] duration-300 ease-out group-hover:scale-[1.03] group-hover:outline-dashed">
                  <div className="border-border bg-surface-muted relative size-16 shrink-0 overflow-hidden rounded-full border sm:size-20">
                    <Image
                      src={VILLAIN_PROFILE_IMAGE}
                      alt={`${SITE_NAME} profile photo`}
                      width={200}
                      height={200}
                      sizes="(max-width: 640px) 4rem, 5rem"
                      className="size-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "border-border bg-background text-foreground pointer-events-none absolute top-1/2 left-full z-10 ml-3 -translate-y-1/2 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-sm transition-opacity duration-200 ease-out",
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

          <p className="text-muted mt-6 font-mono text-xs tracking-[0.2em] uppercase sm:mt-8">
            {SITE_NAME} &mdash; {SITE_TAGLINE}
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] font-semibold tracking-[-0.02em] text-balance">
            {SITE_HEADLINE}
          </h1>
          <p className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            Full-stack engineer with 3.5+ years shipping production apps used by
            thousands — across web, mobile, QA, and AI.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink
              href="/projects"
              variant="primary"
              className="w-full sm:w-auto"
            >
              View my work
              <ArrowRight className="size-4" weight="bold" aria-hidden />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Get in touch
            </ButtonLink>
            <ButtonLink
              href={RESUME_DOWNLOAD_HREF}
              download={RESUME_DOWNLOAD_FILENAME}
              variant="ghost"
              className="w-full sm:w-auto"
            >
              <DownloadSimple className="size-4" weight="bold" aria-hidden />
              Résumé
            </ButtonLink>
          </div>

          <div className="border-border mt-10 border-t pt-6">
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted hover:text-foreground inline-flex items-center gap-2.5 text-sm transition-colors"
            >
              <span className="bg-accent size-1.5 rounded-full" aria-hidden />
              <span className="font-mono text-xs tracking-wide uppercase">
                Founder
              </span>
              <span className="text-foreground font-medium">{COMPANY_NAME}</span>
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                weight="bold"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
