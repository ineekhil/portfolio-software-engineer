"use client";

import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, tags, href, sourceHref } = project;

  const content = (
    <>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-surface-muted text-muted rounded-md px-2 py-0.5 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
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
    "group flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md min-[375px]:p-6",
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
