"use client";

import { DownloadSimple, WhatsappLogo } from "@phosphor-icons/react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  HEADER_SOCIAL_LINKS,
  RESUME_DOWNLOAD_FILENAME,
  RESUME_DOWNLOAD_HREF,
} from "@/lib/constants";
import { messages } from "@/lib/messages";
import { COMPANY_NAME } from "@/lib/services";

const whatsAppHref =
  HEADER_SOCIAL_LINKS.find((link) => link.label === "WhatsApp")?.href ??
  "/contact";

/** Home closing CTA — one path for recruiters, one for prospective clients. */
export function CallToAction() {
  return (
    <Section>
      <Container>
        <div className="border-foreground/15 border-t pt-12 sm:pt-16">
          <p className="text-muted font-mono text-xs tracking-[0.2em] uppercase">
            Get in touch
          </p>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-semibold tracking-tight text-balance">
            {messages.contact.letsBuildSomethingAmazing}
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-0">
            <div className="sm:pr-10">
              <h3 className="text-foreground text-lg font-semibold tracking-tight">
                Hiring?
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                I&apos;m open to Software Engineer roles — full-stack, React /
                React Native, and Node.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Get in touch
                  <span aria-hidden>&rarr;</span>
                </ButtonLink>
                <ButtonLink
                  href={RESUME_DOWNLOAD_HREF}
                  download={RESUME_DOWNLOAD_FILENAME}
                  variant="secondary"
                >
                  <DownloadSimple className="size-4" weight="bold" aria-hidden />
                  Résumé
                </ButtonLink>
              </div>
            </div>
            <div className="border-border border-t pt-10 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10">
              <h3 className="text-foreground text-lg font-semibold tracking-tight">
                Have a project?
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Let&apos;s build your web, mobile, QA, or AI product at{" "}
                {COMPANY_NAME}.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Start a project
                  <span aria-hidden>&rarr;</span>
                </ButtonLink>
                <ButtonLink
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <WhatsappLogo className="size-4" weight="fill" aria-hidden />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
