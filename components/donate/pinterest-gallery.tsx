"use client";

import Image from "next/image";
import Link from "next/link";

import { GROW_TREES_URL, DONATE_CARDS } from "@/lib/donate-cards";
import { cn } from "@/lib/utils";

export function PinterestGallery() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6">
      <p className="text-muted mx-auto mb-2 max-w-2xl text-center text-sm sm:text-base">
        Spread love by doing this; don&apos;t donate to me — I am earning good
        by God&apos;s grace.
      </p>
      <p className="text-muted mb-10 text-center text-xs sm:text-sm">
        #spread-love-&-happiness
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
        {DONATE_CARDS.map((card, index) => (
          <Link
            key={card.id}
            href={GROW_TREES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group block",
              "bg-surface-muted border-border relative overflow-hidden rounded-2xl border shadow-sm",
              "origin-center will-change-transform",
              "transition-[transform,box-shadow] duration-300 ease-out",
              "hover:z-20 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:border-zinc-400/30 dark:hover:border-zinc-500/40",
              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
            )}
            aria-label={`${card.title} — open Grow-Trees.com in a new tab`}
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={card.imageSrc}
                alt=""
                width={card.width}
                height={card.height}
                sizes="(max-width: 640px) 100vw, 33vw"
                className={cn(
                  "h-auto w-full object-cover transition-transform duration-500 ease-out",
                  "group-hover:scale-105",
                )}
                priority={index < 3}
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent",
                  "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
                )}
                aria-hidden
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3",
                  "translate-y-2 opacity-0 transition-all duration-300",
                  "group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
                )}
              >
                <span className="bg-background/95 text-foreground truncate rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">
                  {card.title}
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white shadow-md">
                  +
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
