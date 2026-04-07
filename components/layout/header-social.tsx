"use client";

import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

import { HEADER_SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconTooltip } from "@/components/ui/icon-tooltip";

const ICONS: Record<string, typeof EnvelopeSimple> = {
  Email: EnvelopeSimple,
  GitHub: GithubLogo,
  LinkedIn: LinkedinLogo,
  Instagram: InstagramLogo,
  WhatsApp: WhatsappLogo,
};

/** Light mode: background + text on hover (see `styles/colors.css`). */
const LIGHT_SOCIAL_HOVER: Record<string, string> = {
  Email: "hover:bg-[color:var(--social-light-hover-bg-email)] hover:text-white",
  WhatsApp:
    "hover:bg-[color:var(--social-light-hover-bg-whatsapp)] hover:text-white",
  Instagram:
    "hover:bg-[color:var(--social-light-hover-bg-instagram)] hover:text-white",
  LinkedIn:
    "hover:bg-[color:var(--social-light-hover-bg-linkedin)] hover:text-white",
  GitHub:
    "hover:bg-[color:var(--social-light-hover-bg-github)] hover:text-white",
  "Product Hunt":
    "hover:bg-[color:var(--social-light-hover-bg-product-hunt)] hover:text-foreground",
};

/** Dark mode: border color on hover (see `styles/colors.css`). */
const DARK_SOCIAL_HOVER_BORDER: Record<string, string> = {
  Email: "dark:hover:border-[color:var(--social-hover-border-email)]",
  WhatsApp: "dark:hover:border-[color:var(--social-hover-border-whatsapp)]",
  Instagram: "dark:hover:border-[color:var(--social-hover-border-instagram)]",
  LinkedIn: "dark:hover:border-[color:var(--social-hover-border-linkedin)]",
  GitHub: "dark:hover:border-[color:var(--social-hover-border-github)]",
};

type HeaderSocialProps = {
  className?: string;
};

export function HeaderSocial({ className }: HeaderSocialProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface-muted/90 flex shrink-0 items-center gap-0.5 rounded-full border p-1",
        className,
      )}
      role="list"
      aria-label="Social links"
    >
      {HEADER_SOCIAL_LINKS.map(({ label, href }) => {
        const Icon = ICONS[label] ?? EnvelopeSimple;
        const isHttp = href.startsWith("http");
        return (
          <IconTooltip key={label} label={label}>
            <Link
              href={href}
              className={cn(
                "text-muted rounded-full border border-transparent p-2 transition-colors",
                LIGHT_SOCIAL_HOVER[label] ??
                  "hover:bg-icon-hover hover:text-foreground",
                "dark:hover:text-foreground dark:hover:bg-transparent",
                DARK_SOCIAL_HOVER_BORDER[label] ??
                  "dark:hover:border-[color:var(--icon-hover-border)]",
              )}
              aria-label={label}
              role="listitem"
              {...(isHttp
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {})}
            >
              <Icon className="size-4" weight="regular" aria-hidden />
            </Link>
          </IconTooltip>
        );
      })}
    </div>
  );
}
