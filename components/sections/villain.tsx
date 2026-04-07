"use client";

import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  CONTACT_EMAIL,
  SITE_BIO,
  SITE_NAME,
  SITE_TAGLINE,
  VILLAIN_PROFILE_HOVER_MESSAGE,
  VILLAIN_PROFILE_IMAGE_URL,
} from "@/lib/constants";

export function Villain() {
  return (
    <section className="border-border relative overflow-visible border-b bg-gradient-to-b from-surface-muted/35 via-background/55 to-background/80 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32">
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
                  className="border-border bg-background/95 text-foreground pointer-events-none absolute top-0 left-full z-10 ml-1 -translate-x-2 -translate-y-2 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 ease-out group-hover:opacity-100 sm:ml-1.5 sm:-translate-x-2.5 sm:-translate-y-2.5"
                  role="tooltip"
                >
                  {VILLAIN_PROFILE_HOVER_MESSAGE}
                </span>
              </div>
            </Link>
          </div>
          <p className="border-border bg-background/80 text-muted mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
            <Sparkle className="text-accent size-3.5" weight="fill" />
            Open to opportunities
          </p>
          <h1 className="text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {SITE_TAGLINE}
          </h1>
          <p
            className="text-muted mx-auto mt-5 w-full max-w-4xl text-lg leading-snug sm:text-xl line-clamp-3"
            title={SITE_BIO}
          >
            {SITE_BIO}
          </p>
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
