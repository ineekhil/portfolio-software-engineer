"use client";

import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { RESUME_DOWNLOAD_FILENAME, RESUME_DOWNLOAD_HREF } from "@/lib/constants";
import { messages } from "@/lib/messages";
import { COMPANY_NAME, COMPANY_URL } from "@/lib/services";

/** Home closing CTA — recruiter-focused; client interest is routed to the studio. */
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
          <p className="text-muted mt-5 max-w-xl text-base leading-relaxed">
            I&apos;m open to Software Engineer roles — full-stack, React /
            React Native, and Node. Tell me what you&apos;re building.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="primary">
              Get in touch
              <ArrowRight className="size-4" weight="bold" aria-hidden />
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
          <p className="text-muted mt-8 text-sm">
            Have a project instead? I run{" "}
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {COMPANY_NAME}
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
