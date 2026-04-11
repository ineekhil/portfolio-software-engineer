import type { Metadata } from "next";

import { AboutSkills } from "@/components/about/about-skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SITE_BIO, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${SITE_NAME} — background, focus areas, and how we can work together.`,
};

export default function AboutPage() {
  return (
    <Section className="pt-10 min-[375px]:pt-12 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-accent text-xs font-medium tracking-wider uppercase min-[375px]:text-sm">
            About
          </p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight min-[375px]:text-4xl sm:text-5xl">
            Hi, I&apos;m {SITE_NAME}
          </h1>
          <p className="text-muted mt-4 text-base leading-relaxed min-[375px]:mt-6 min-[375px]:text-lg">
            {SITE_BIO}
          </p>

          <AboutSkills />
        </div>
      </Container>
    </Section>
  );
}
