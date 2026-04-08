"use client";

import {
  Heart,
  Smiley,
  SmileyAngry,
  SmileyBlank,
  SmileyMelting,
  SmileyMeh,
  SmileyNervous,
  SmileySad,
  SmileySticker,
  SmileyWink,
  SmileyXEyes,
  Sparkle,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

/** Same idea as `TechDoodleBackground` — low-contrast wallpaper, pointer-events none. */
const DOODLE_OPACITY =
  "opacity-[0.07] dark:opacity-[0.11]";

type IconPlacement = {
  Icon: Icon;
  top: string;
  left: string;
  rotate: number;
  sizeClass: string;
};

const ICON_PLACEMENTS: IconPlacement[] = [
  { Icon: Smiley, top: "5%", left: "4%", rotate: -12, sizeClass: "size-9" },
  { Icon: SmileyWink, top: "8%", left: "88%", rotate: 14, sizeClass: "size-8" },
  { Icon: Heart, top: "14%", left: "12%", rotate: 8, sizeClass: "size-7" },
  { Icon: SmileySticker, top: "18%", left: "72%", rotate: -9, sizeClass: "size-10" },
  { Icon: Sparkle, top: "22%", left: "48%", rotate: 22, sizeClass: "size-8" },
  { Icon: SmileyMelting, top: "28%", left: "6%", rotate: -6, sizeClass: "size-8" },
  { Icon: SmileyXEyes, top: "32%", left: "92%", rotate: 11, sizeClass: "size-7" },
  { Icon: SmileyNervous, top: "38%", left: "22%", rotate: -14, sizeClass: "size-8" },
  { Icon: SmileyMeh, top: "44%", left: "78%", rotate: 6, sizeClass: "size-7" },
  { Icon: SmileySad, top: "48%", left: "52%", rotate: -8, sizeClass: "size-8" },
  { Icon: SmileyBlank, top: "54%", left: "10%", rotate: 16, sizeClass: "size-7" },
  { Icon: SmileyAngry, top: "58%", left: "64%", rotate: -18, sizeClass: "size-8" },
  { Icon: Heart, top: "62%", left: "36%", rotate: -4, sizeClass: "size-6" },
  { Icon: SmileyWink, top: "68%", left: "84%", rotate: 9, sizeClass: "size-9" },
  { Icon: Sparkle, top: "72%", left: "18%", rotate: -11, sizeClass: "size-7" },
  { Icon: Smiley, top: "76%", left: "56%", rotate: 5, sizeClass: "size-8" },
  { Icon: SmileySticker, top: "82%", left: "8%", rotate: -7, sizeClass: "size-7" },
  { Icon: SmileyMelting, top: "86%", left: "42%", rotate: 13, sizeClass: "size-8" },
  { Icon: Heart, top: "90%", left: "76%", rotate: -10, sizeClass: "size-7" },
  { Icon: SmileyXEyes, top: "12%", left: "38%", rotate: 4, sizeClass: "size-7" },
  { Icon: Sparkle, top: "66%", left: "94%", rotate: 19, sizeClass: "size-6" },
];

type EmojiPlacement = {
  emoji: string;
  top: string;
  left: string;
  rotate: number;
  sizeClass: string;
};

/** Unicode emoji accents — same scatter pattern as icon doodles. */
const EMOJI_PLACEMENTS: EmojiPlacement[] = [
  { emoji: "😊", top: "10%", left: "58%", rotate: -6, sizeClass: "text-2xl" },
  { emoji: "🌸", top: "24%", left: "34%", rotate: 10, sizeClass: "text-xl" },
  { emoji: "✨", top: "36%", left: "96%", rotate: -12, sizeClass: "text-xl" },
  { emoji: "🙂", top: "50%", left: "2%", rotate: 8, sizeClass: "text-2xl" },
  { emoji: "💚", top: "60%", left: "50%", rotate: -4, sizeClass: "text-xl" },
  { emoji: "😄", top: "78%", left: "28%", rotate: 14, sizeClass: "text-2xl" },
  { emoji: "🌿", top: "8%", left: "24%", rotate: -9, sizeClass: "text-lg" },
  { emoji: "🤍", top: "92%", left: "58%", rotate: 7, sizeClass: "text-xl" },
];

export function SmileyDoodleBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 min-h-full overflow-hidden select-none"
      aria-hidden
    >
      {ICON_PLACEMENTS.map(({ Icon, top, left, rotate, sizeClass }, i) => (
        <Icon
          key={`icon-${i}`}
          className={cn(
            "text-foreground absolute transition-opacity duration-300",
            DOODLE_OPACITY,
            sizeClass,
          )}
          style={{
            top,
            left,
            transform: `rotate(${rotate}deg)`,
          }}
          weight="regular"
        />
      ))}
      {EMOJI_PLACEMENTS.map(({ emoji, top, left, rotate, sizeClass }, i) => (
        <span
          key={`emoji-${i}`}
          className={cn(
            "absolute leading-none",
            DOODLE_OPACITY,
            sizeClass,
          )}
          style={{
            top,
            left,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
