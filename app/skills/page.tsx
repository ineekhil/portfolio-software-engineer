import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { TechIcon } from "@/components/ui/tech-icon";
import { SITE_NAME, SKILL_CATEGORIES } from "@/lib/constants";
import { techIconAssetForLabel } from "@/lib/tech-icons";

function skillsSectionId(title: string) {
  return `skills-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export const metadata: Metadata = {
  title: "Skills",
  description: `Skills and technologies — ${SITE_NAME}.`,
};

export default function SkillsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <PageHeader
          eyebrow="Skills"
          title="What I work with"
          description="My day-to-day stack, grouped by pillar — languages, mobile, backend, architecture, database, and test & tools."
        />
        <div className="mt-14 space-y-12">
          {SKILL_CATEGORIES.map((category) => (
            <section
              key={category.title}
              aria-labelledby={skillsSectionId(category.title)}
            >
              <h2
                id={skillsSectionId(category.title)}
                className="text-muted border-foreground/15 border-t pt-5 font-mono text-xs tracking-wide uppercase"
              >
                {category.title}
              </h2>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-6">
                {category.items.map((item) => {
                  const icon = techIconAssetForLabel(item);
                  return (
                    <li
                      key={item}
                      className="flex w-[5.75rem] flex-col items-center gap-2 sm:w-24"
                    >
                      <span className="border-border bg-background inline-flex size-16 items-center justify-center rounded-xl border sm:size-[4.5rem]">
                        {icon ? (
                          <TechIcon
                            slug={icon.slug}
                            variant={icon.variant}
                            size={48}
                            className={icon.className}
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
      </Container>
    </Section>
  );
}
