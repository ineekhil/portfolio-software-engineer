"use client";

import { CheckCircle } from "@phosphor-icons/react";

import { SKILL_CATEGORIES } from "@/lib/constants";

export function AboutSkills() {
  return (
    <>
      <h2 className="text-foreground mt-14 text-center text-2xl font-semibold tracking-tight sm:text-left">
        Focus areas
      </h2>
      <div className="mt-6 space-y-10">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="text-foreground text-center text-base font-semibold tracking-tight sm:text-left">
              {category.title}
            </h3>
            <ul className="mt-3 space-y-3">
              {category.items.map((skill) => (
                <li key={skill} className="text-muted flex items-start gap-3">
                  <CheckCircle
                    className="text-accent mt-0.5 size-5 shrink-0"
                    weight="fill"
                    aria-hidden
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
