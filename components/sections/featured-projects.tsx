import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { FEATURED_PROJECTS } from "@/lib/constants";

/** Home "Selected work" — a small set of flat cards linking out to `/projects`. */
export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <SectionHeading
          index="01"
          title="Selected work"
          description="A few things I've designed and shipped — from product interfaces to the APIs behind them."
          actionHref="/projects"
          actionLabel="All projects"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
