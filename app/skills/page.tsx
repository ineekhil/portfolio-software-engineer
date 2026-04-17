import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TechIcon } from "@/components/ui/tech-icon";
import { SITE_NAME, SKILL_CATEGORIES } from "@/lib/constants";
import { techIconAssetForLabel } from "@/lib/tech-icons";

export const metadata: Metadata = {
  title: "Skills",
  description: `Skills and technologies — ${SITE_NAME}.`,
};

export default function SkillsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-accent text-center text-sm font-medium tracking-wider uppercase sm:text-left">
            Skills
          </p>
          <h1 className="text-foreground mt-2 text-center text-[clamp(1.875rem,4vw+1rem,3rem)] font-semibold tracking-tight sm:text-left sm:text-5xl">
            What I work with
          </h1>
          <p className="text-muted mt-6 text-center text-base leading-relaxed sm:text-left sm:text-lg">
            Stack grouped by the same pillars as on the home page — from UI to
            infrastructure and quality.
          </p>
          <div className="mt-14 space-y-12">
            {SKILL_CATEGORIES.map((category) => (
              <section key={category.title} aria-labelledby={`skills-${category.title}`}>
                <h2
                  id={`skills-${category.title}`}
                  className="text-foreground text-center text-xl font-semibold tracking-tight sm:text-left"
                >
                  {category.title}
                </h2>
                <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-5 sm:justify-start">
                  {category.items.map((item) => {
                    const icon = techIconAssetForLabel(item);
                    return (
                      <li
                        key={item}
                        className="flex w-[5.75rem] flex-col items-center gap-2 sm:w-24"
                      >
                        <span className="border-border bg-background/80 inline-flex size-16 items-center justify-center rounded-2xl border shadow-sm sm:size-[4.5rem]">
                          {icon ? (
                            <TechIcon
                              slug={icon.slug}
                              variant={icon.variant}
                              size={48}
                            />
                          ) : (
                            <span
                              className="text-muted text-sm font-semibold tracking-tight"
                              aria-hidden
                            >
                              ?
                            </span>
                          )}
                        </span>
                        <span className="text-muted text-center text-xs leading-snug text-balance">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
