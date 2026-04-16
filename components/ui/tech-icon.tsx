import Image from "next/image";

import { deviconSvgUrl } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type TechIconProps = {
  slug: string;
  /** Devicon file suffix, e.g. `original`, `plain`. */
  variant?: string;
  size?: number;
  className?: string;
  /** Shown as tooltip and exposed to assistive tech when the icon has no visible caption. */
  label?: string;
};

/** Colored devicon SVG (TechIcons / devicon set). */
export function TechIcon({
  slug,
  variant = "original",
  size = 20,
  className,
  label,
}: TechIconProps) {
  const image = (
    <Image
      src={deviconSvgUrl(slug, variant)}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      unoptimized
    />
  );
  if (!label) return image;
  return (
    <span title={label} aria-label={label} className="inline-flex shrink-0">
      {image}
    </span>
  );
}
