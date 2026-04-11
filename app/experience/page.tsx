import type { Metadata } from "next";

import { ExperienceCompaniesSection } from "@/components/experience/experience-companies-section";
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
        <div className="mx-auto min-w-0 max-w-5xl">
          <h1 className="text-foreground text-center text-4xl font-semibold tracking-tight sm:text-left sm:text-5xl">
            Where I&apos;ve worked
          </h1>

          <ExperienceCompaniesSection />
        </div>
      </Container>
    </Section>
  );
}
