import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-accent text-sm font-medium tracking-wider uppercase">
            Projects
          </p>
          <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected work
          </h1>
        </div>
      </Container>
    </Section>
  );
}
