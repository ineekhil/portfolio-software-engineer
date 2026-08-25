import type { Metadata } from "next";

import { ExperienceCompaniesSection } from "@/components/experience/experience-companies-section";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
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
        <PageHeader
          eyebrow="Experience"
          title="Where I've worked"
          description="Companies I've shipped production software with. Pick a logo to see the roles, what the team does, and a few highlights."
        />
        <ExperienceCompaniesSection />
      </Container>
    </Section>
  );
}
