import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects showcasing product work, technical depth, and craft.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <PageHeader
          eyebrow="Projects"
          title="Selected work"
          description="A closer look at things I've designed and shipped — detailed case studies are on the way."
        />
      </Container>
    </Section>
  );
}
