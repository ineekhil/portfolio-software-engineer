import Image from "next/image";
import Link from "next/link";

import { ViralFissionLogo } from "@/components/logos/viral-fission-logo";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WORKED_COMPANY_DETAILS } from "@/lib/companies";
import { messages, WORKED_COMPANY_LOGOS } from "@/lib/messages";

const logoBox =
  "border-border inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white p-1.5 dark:bg-neutral-950";

/** Home "Experience" preview — company rows linking to `/experience`. */
export function ExperiencePreview() {
  return (
    <Section className="bg-surface-muted/40">
      <Container>
        <SectionHeading
          index="03"
          title="Experience"
          description="Shipping production software alongside product, design, and data teams."
          actionHref="/experience"
          actionLabel="Full timeline"
        />
        <div className="mt-10">
          {WORKED_COMPANY_LOGOS.map((logo, i) => {
            const detail = WORKED_COMPANY_DETAILS[logo.companyKey];
            const name = messages.companies[logo.companyKey];
            const role = detail.rolesTimeline[0];
            return (
              <Reveal key={logo.companyKey} delay={i * 70}>
                <Link
                  href="/experience"
                  className="group border-border hover:bg-background flex items-center gap-4 border-b py-5 transition-colors sm:gap-6"
                >
                  {logo.kind === "svg" ? (
                    <ViralFissionLogo size="sm" />
                  ) : (
                    <span className={logoBox}>
                      <Image
                        src={logo.logoSrc}
                        alt=""
                        width={40}
                        height={40}
                        className="size-full object-contain"
                      />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-foreground font-semibold tracking-tight">
                      {name}
                    </h3>
                    {role ? (
                      <p className="text-muted mt-0.5 text-sm">{role.title}</p>
                    ) : null}
                  </div>
                  {role ? (
                    <span className="text-muted hidden font-mono text-xs sm:block">
                      {role.period}
                    </span>
                  ) : null}
                  <span
                    aria-hidden
                    className="text-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5"
                  >
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
