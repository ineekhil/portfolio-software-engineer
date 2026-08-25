import Link from "next/link";

type SectionHeadingProps = {
  /** Editorial index, e.g. "01". */
  index: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  actionExternal?: boolean;
};

/**
 * Numbered, rule-topped section header — the editorial spine of the home page.
 * Mono index + big title on the left, optional text link on the right.
 */
export function SectionHeading({
  index,
  title,
  description,
  actionHref,
  actionLabel,
  actionExternal,
}: SectionHeadingProps) {
  return (
    <div className="border-foreground/15 border-t pt-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex items-baseline gap-3 sm:gap-4">
          <span className="text-muted font-mono text-xs tabular-nums">
            {index}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        {actionHref && actionLabel ? (
          <Link
            href={actionHref}
            {...(actionExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-muted hover:text-foreground group inline-flex items-center gap-1.5 font-mono text-xs tracking-wide uppercase transition-colors"
          >
            {actionLabel}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </Link>
        ) : null}
      </div>
      {description ? (
        <p className="text-muted mt-4 max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
