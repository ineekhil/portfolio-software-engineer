import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { Villain } from "@/components/sections/villain";
import { HomeHighlights } from "@/components/sections/home-highlights";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FEATURED_PROJECTS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Villain />
      <HomeHighlights />

      <Section className="border-border bg-surface-muted/30 border-t">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 min-[375px]:gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <h2 className="text-foreground text-2xl font-semibold tracking-tight min-[375px]:text-3xl sm:text-4xl">
                Featured work
              </h2>
              <p className="text-muted mt-2 text-base min-[375px]:mt-3 min-[375px]:text-lg">
                A few representative projects. Replace with your own case
                studies.
              </p>
            </div>
            <ButtonLink href="/projects" variant="secondary">
              All projects
            </ButtonLink>
          </div>
          <ul className="mt-8 grid gap-5 min-[375px]:mt-10 min-[375px]:gap-6 min-[425px]:mt-12 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border-border from-accent/10 mx-auto max-w-2xl rounded-3xl border bg-gradient-to-br to-transparent p-6 text-center min-[375px]:p-8 sm:p-12">
            <h2 className="text-foreground text-xl font-semibold tracking-tight min-[375px]:text-2xl sm:text-3xl">
              Let&apos;s build something great
            </h2>
            <p className="text-muted mt-2 text-sm min-[375px]:mt-3 min-[375px]:text-base">
              Tell me about your team, timeline, and what success looks like.
            </p>
            <ButtonLink href="/contact" variant="primary" className="mt-8">
              Start a conversation
            </ButtonLink>
            <p className="text-muted mt-4 text-sm">
              Or browse the{" "}
              <Link
                href="/about"
                className="text-accent font-medium underline-offset-4 hover:underline"
              >
                about
              </Link>{" "}
              page first.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
