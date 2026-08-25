import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

/** Editorial page header — mono eyebrow + big headline, left-aligned. */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("max-w-4xl", className)}>
      <p className="text-muted font-mono text-xs tracking-[0.2em] uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.02] font-semibold tracking-tight text-balance">
        {title}
      </h1>
      {description ? (
        <p className="text-muted mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
