"use client";

import { Cpu, Lightning, ShieldCheck } from "@phosphor-icons/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const highlights = [
  {
    title: "Performance-first",
    description:
      "Lean bundles, image optimization, and patterns that keep Core Web Vitals green.",
    icon: Lightning,
  },
  {
    title: "Accessible UI",
    description:
      "Semantic markup, keyboard paths, and contrast-aware themes by default.",
    icon: ShieldCheck,
  },
  {
    title: "Maintainable stack",
    description:
      "TypeScript, modular components, and a clear folder layout for long-term velocity.",
    icon: Cpu,
  },
];

export function HomeHighlights() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
            How I work
          </h2>
          <p className="text-muted mt-4 text-lg">
            Pragmatic engineering with an eye for product and polish.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="border-border bg-surface-muted/40 hover:bg-surface-muted/70 rounded-2xl border p-6 transition-colors"
            >
              <Icon
                className="text-accent size-9"
                weight="duotone"
                aria-hidden
              />
              <h3 className="text-foreground mt-4 text-lg font-semibold">
                {title}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
