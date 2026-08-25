import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { techIconAssetForLabel } from "@/lib/tech-icons";

/** Home "Skills" preview — a spec-sheet of grouped tech, linking to `/skills`. */
export function SkillsPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          index="02"
          title="Skills & stack"
          description="A snapshot of my day-to-day tools across mobile, web, and backend."
          actionHref="/skills"
          actionLabel="All skills"
        />
        <dl className="mt-10">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={i * 50}>
              <div className="border-border grid grid-cols-1 gap-3 border-b py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-muted font-mono text-xs tracking-wide uppercase sm:pt-1.5">
                  {category.title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {category.items.map((item) => {
                    const asset = techIconAssetForLabel(item);
                    return (
                      <span
                        key={item}
                        className="border-border text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm"
                      >
                        {asset ? (
                          <TechIcon
                            slug={asset.slug}
                            variant={asset.variant}
                            size={16}
                            className={asset.className}
                          />
                        ) : null}
                        {item}
                      </span>
                    );
                  })}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
