"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

function companyInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 4);
}

type CompanyLogoMarkProps = {
  src: string;
  label: string;
  className?: string;
  size?: "xs" | "sm" | "md";
};

export function CompanyLogoMark({
  src,
  label,
  className,
  size = "sm",
}: CompanyLogoMarkProps) {
  const [failed, setFailed] = useState(false);
  const box =
    size === "md"
      ? "size-16 sm:size-20 rounded-2xl text-sm sm:text-base"
      : size === "xs"
        ? "size-12 rounded-lg text-[0.65rem] leading-none"
        : "size-14 rounded-xl text-xs";

  if (failed) {
    return (
      <span
        className={cn(
          "border-border bg-surface-muted text-muted inline-flex shrink-0 items-center justify-center border font-semibold tracking-tight",
          box,
          className,
        )}
        title={label}
        aria-hidden
      >
        {companyInitials(label)}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      role="presentation"
      width={160}
      height={160}
      className={cn(
        "border-border shrink-0 border bg-white object-contain p-1 shadow-sm dark:bg-neutral-950",
        box,
        className,
      )}
      title={label}
      onError={() => setFailed(true)}
    />
  );
}
