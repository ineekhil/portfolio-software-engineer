import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ALL_PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects showcasing product work, technical depth, and craft.",
};

type ProjectsPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { q } = await searchParams;
  const needle = q?.trim().toLowerCase() ?? "";

  const projects = needle
    ? ALL_PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(needle) ||
          p.description.toLowerCase().includes(needle) ||
          p.tags.some((t) => t.toLowerCase().includes(needle)),
      )
    : ALL_PROJECTS;

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
          <p className="text-muted mt-4 text-lg">
            Replace these placeholders with real case studies, metrics, and
            links to demos or repositories.
          </p>
          {needle ? (
            <p className="text-muted mt-4 text-sm">
              {projects.length} result
              {projects.length === 1 ? "" : "s"} for &quot;{q?.trim()}&quot;
            </p>
          ) : null}
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} className="h-full" />
            </li>
          ))}
        </ul>
        {needle && projects.length === 0 ? (
          <p className="text-muted mt-12 text-center text-sm">
            No projects match your search. Try different keywords.
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
