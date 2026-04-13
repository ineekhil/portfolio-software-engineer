import { cn } from "@/lib/utils";

const box =
  "border-border inline-flex shrink-0 items-center justify-center border bg-white p-1.5 shadow-sm dark:bg-neutral-950";

const sizeClass = {
  xs: "size-12 rounded-lg p-1",
  sm: "size-14 rounded-xl",
  md: "size-16 rounded-2xl sm:size-20",
} as const;

type ViralFissionLogoProps = {
  size?: keyof typeof sizeClass;
  className?: string;
};

/** Viral Fission mark — asset lives at `public/logos/viral-fission.svg`. `dark:invert` keeps the monochrome glyph readable on the dark tile (theme uses `class` / `next-themes`, not `prefers-color-scheme`). */
export function ViralFissionLogo({
  size = "sm",
  className,
}: ViralFissionLogoProps) {
  return (
    <div className={cn(box, sizeClass[size], className)}>
      <img
        src="/logos/viral-fission.svg"
        alt=""
        width={40}
        height={40}
        className="size-full object-contain dark:invert"
        role="presentation"
      />
    </div>
  );
}
