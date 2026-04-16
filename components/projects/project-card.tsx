"use client";

import {
  ArrowSquareOut,
  Code,
  GithubLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

import type { Project } from "@/types";
import { TechIcon } from "@/components/ui/tech-icon";
import { techIconSlugForLabel } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, tags, href, sourceHref } = project;

  const content = (
    <>
      <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
        {tags.map((tag) => {
          const iconSlug = techIconSlugForLabel(tag);
          return (
            <span
              key={tag}
              className="bg-surface-muted flex w-[4.5rem] flex-col items-center gap-1.5 rounded-lg px-2 py-2"
            >
              <span className="inline-flex size-11 items-center justify-center">
                {iconSlug ? (
                  <TechIcon slug={iconSlug} size={36} />
                ) : (
                  <Code
                    className="text-muted size-8 shrink-0 opacity-90"
                    weight="duotone"
                    aria-hidden
                  />
                )}
              </span>
              <span className="text-muted text-center text-[10px] leading-tight font-medium text-balance">
                {tag}
              </span>
            </span>
          );
        })}
      </div>
      <h3 className="text-foreground mt-4 text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {href ? (
          <span className="text-accent inline-flex items-center gap-1 text-sm font-medium">
            View
            <ArrowSquareOut className="size-4" aria-hidden />
          </span>
        ) : null}
        {sourceHref ? (
          <span className="text-muted inline-flex items-center gap-1 text-sm">
            <GithubLogo className="size-4" weight="duotone" aria-hidden />
            Source
          </span>
        ) : null}
      </div>
    </>
  );

  const cardClassName = cn(
    "group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md",
    href && "cursor-pointer",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
