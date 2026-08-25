import type { Metadata } from "next";

import { AboutSkills } from "@/components/about/about-skills";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SITE_BIO, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${SITE_NAME} — background, focus areas, and how we can work together.`,
};

export default function AboutPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="max-w-3xl">
          <PageHeader
            eyebrow="About"
            title={`Hi, I'm ${SITE_NAME}`}
            description={SITE_BIO}
            className="max-w-none"
          />
          <AboutSkills />
        </div>
      </Container>
    </Section>
  );
}
