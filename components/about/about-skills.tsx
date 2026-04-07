"use client";

import { CheckCircle } from "@phosphor-icons/react";

const skills = [
  "TypeScript & React",
  "Next.js App Router",
  "Design systems & Tailwind CSS",
  "API design & integration",
  "Testing & CI basics",
];

export function AboutSkills() {
  return (
    <>
      <h2 className="text-foreground mt-14 text-2xl font-semibold tracking-tight">
        Focus areas
      </h2>
      <ul className="mt-6 space-y-3">
        {skills.map((skill) => (
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
    </>
  );
}
