"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

/** Flat, editorial project card — bordered, no shadow; hover darkens the rule. */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, tags, href, sourceHref } = project;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border-border text-muted rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        {href ? (
          <ArrowUpRight
            className="text-muted group-hover:text-foreground size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            weight="bold"
            aria-hidden
          />
        ) : null}
      </div>
      <h3 className="text-foreground mt-6 text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>
      {sourceHref ? (
        <span className="text-muted mt-6 inline-flex items-center gap-1.5 font-mono text-xs">
          <GithubLogo className="size-4" aria-hidden />
          Source
        </span>
      ) : null}
    </>
  );

  const cardClassName = cn(
    "group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/40",
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
