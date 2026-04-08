import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skills",
  description: `Skills and technologies — ${SITE_NAME}.`,
};

export default function SkillsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase">
            Skills
          </p>
          <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            What I work with
          </h1>
          <p className="text-muted mt-6 text-lg leading-relaxed">
            Add your skills here — languages, frameworks, tools, and anything else
            you want visitors to know.
          </p>
        </div>
      </Container>
    </Section>
  );
}
