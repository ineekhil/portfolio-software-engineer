"use client";

import { CheckCircle } from "@phosphor-icons/react";

import { SKILL_CATEGORIES } from "@/lib/constants";

export function AboutSkills() {
  return (
    <div className="mt-14">
      <h2 className="border-foreground/15 border-t pt-5 text-2xl font-semibold tracking-tight">
        Focus areas
      </h2>
      <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="text-muted font-mono text-xs tracking-wide uppercase">
              {category.title}
            </h3>
            <ul className="mt-3 space-y-2.5">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="text-foreground/90 flex items-start gap-2.5"
                >
                  <CheckCircle
                    className="text-accent mt-0.5 size-4 shrink-0"
                    weight="fill"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
