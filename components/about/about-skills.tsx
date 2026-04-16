"use client";

import { Code } from "@phosphor-icons/react";

import { TechIcon } from "@/components/ui/tech-icon";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { techIconAssetForLabel } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

const iconChip = cn(
  "border-border bg-background/80 text-foreground inline-flex size-16 items-center justify-center rounded-2xl border shadow-sm sm:size-[4.5rem]",
);

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
            <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-5 sm:justify-start">
              {category.items.map((skill) => {
                const icon = techIconAssetForLabel(skill);
                return (
                  <li
                    key={skill}
                    className="flex w-[5.75rem] flex-col items-center gap-2 sm:w-24"
                  >
                    {icon ? (
                      <span className={iconChip}>
                        <TechIcon
                          slug={icon.slug}
                          variant={icon.variant}
                          size={48}
                        />
                      </span>
                    ) : (
                      <span className={iconChip}>
                        <Code
                          className="text-muted size-9 shrink-0 sm:size-10"
                          weight="duotone"
                          aria-hidden
                        />
                      </span>
                    )}
                    <span className="text-muted text-center text-xs leading-snug text-balance">
                      {skill}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
