import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { IMPACT_STATS } from "@/lib/constants";

/** Editorial proof band — big numerals, mono labels, hairline rules. */
export function ImpactStats() {
  return (
    <section className="py-2 sm:py-4">
      <Container>
        <Reveal>
          <dl className="border-foreground/15 grid grid-cols-1 gap-y-8 border-y py-8 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-border">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="sm:px-8 sm:first:pl-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-semibold tracking-tight sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-muted mt-2 block font-mono text-xs tracking-wide uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
