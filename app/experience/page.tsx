import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience — ${SITE_NAME}.`,
};

export default function ExperiencePage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase">
            Experience
          </p>
          <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I&apos;ve worked
          </h1>
          <p className="text-muted mt-6 text-lg leading-relaxed">
            Add roles, companies, and timelines here — every place you&apos;ve
            contributed.
          </p>
        </div>
      </Container>
    </Section>
  );
}
