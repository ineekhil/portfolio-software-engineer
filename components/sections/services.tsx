import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_URL,
  SERVICES,
} from "@/lib/services";

/** Home "Services" band for the user's studio, Code Behind the Scenes. */
export function Services() {
  return (
    <Section className="bg-surface-muted/40">
      <Container>
        <SectionHeading
          index="02"
          title="Services"
          description={COMPANY_TAGLINE}
          actionHref={COMPANY_URL}
          actionLabel="The studio"
          actionExternal
        />
        <Reveal className="mt-10">
          <div className="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="bg-background flex h-full flex-col p-6"
              >
                <span className="text-muted font-mono text-xs tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-foreground mt-4 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <ButtonLink href="/contact" variant="primary">
            Start a project
            <span aria-hidden>&rarr;</span>
          </ButtonLink>
          <ButtonLink
            href={COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Visit {COMPANY_NAME}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
