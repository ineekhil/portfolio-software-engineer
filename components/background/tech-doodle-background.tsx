"use client";

import {
  AmazonLogo,
  AndroidLogo,
  AngularLogo,
  AppleLogo,
  BehanceLogo,
  Bluetooth,
  Buildings,
  Cloud,
  Code,
  CodepenLogo,
  Cpu,
  Cube,
  Database,
  DevToLogo,
  DeviceMobile,
  DiscordLogo,
  DribbbleLogo,
  DropboxLogo,
  FigmaLogo,
  FramerLogo,
  GithubLogo,
  GitBranch,
  GitlabLogo,
  GoogleChromeLogo,
  GoogleLogo,
  HardDrive,
  InstagramLogo,
  Lightning,
  LinkedinLogo,
  MetaLogo,
  MicrosoftTeamsLogo,
  Monitor,
  NotionLogo,
  OpenAiLogo,
  Package,
  PinterestLogo,
  RedditLogo,
  Rocket,
  SketchLogo,
  SlackLogo,
  SpotifyLogo,
  StackOverflowLogo,
  TelegramLogo,
  Terminal,
  WhatsappLogo,
  WifiHigh,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

/** Home has layered hero/sections; inner pages feel busier at the same opacity — soften doodles off-home. */
const DOODLE_OPACITY = {
  home: "opacity-[0.11] dark:opacity-[0.16]",
  inner: "opacity-[0.052] dark:opacity-[0.085]",
} as const;

type Placement = {
  Icon: Icon;
  top: string;
  left: string;
  rotate: number;
  sizeClass: string;
};

/**
 * Scattered brand & tech icons — WhatsApp-style doodle wallpaper (low contrast).
 * Buildings ≈ travel / Airbnb vibe; Pinterest / Figma / etc. are official Phosphor logos.
 */
const PLACEMENTS: Placement[] = [
  { Icon: PinterestLogo, top: "6%", left: "3%", rotate: -14, sizeClass: "size-9" },
  { Icon: GithubLogo, top: "10%", left: "92%", rotate: 11, sizeClass: "size-8" },
  { Icon: FigmaLogo, top: "18%", left: "8%", rotate: 8, sizeClass: "size-7" },
  { Icon: Buildings, top: "14%", left: "78%", rotate: -9, sizeClass: "size-10" },
  { Icon: AndroidLogo, top: "28%", left: "2%", rotate: -6, sizeClass: "size-9" },
  { Icon: SlackLogo, top: "32%", left: "94%", rotate: 15, sizeClass: "size-8" },
  { Icon: NotionLogo, top: "42%", left: "5%", rotate: 12, sizeClass: "size-8" },
  { Icon: WhatsappLogo, top: "38%", left: "88%", rotate: -11, sizeClass: "size-9" },
  { Icon: GoogleChromeLogo, top: "48%", left: "12%", rotate: -4, sizeClass: "size-7" },
  { Icon: AppleLogo, top: "52%", left: "90%", rotate: 7, sizeClass: "size-8" },
  { Icon: MicrosoftTeamsLogo, top: "58%", left: "4%", rotate: -13, sizeClass: "size-8" },
  { Icon: LinkedinLogo, top: "62%", left: "84%", rotate: 9, sizeClass: "size-7" },
  { Icon: InstagramLogo, top: "68%", left: "10%", rotate: 14, sizeClass: "size-8" },
  { Icon: CodepenLogo, top: "72%", left: "92%", rotate: -8, sizeClass: "size-7" },
  { Icon: FramerLogo, top: "78%", left: "6%", rotate: 6, sizeClass: "size-8" },
  { Icon: AngularLogo, top: "82%", left: "72%", rotate: -12, sizeClass: "size-9" },
  { Icon: OpenAiLogo, top: "88%", left: "18%", rotate: 10, sizeClass: "size-8" },
  { Icon: SpotifyLogo, top: "92%", left: "55%", rotate: -5, sizeClass: "size-8" },
  { Icon: DiscordLogo, top: "8%", left: "48%", rotate: 18, sizeClass: "size-7" },
  { Icon: DribbbleLogo, top: "22%", left: "42%", rotate: -16, sizeClass: "size-8" },
  { Icon: DropboxLogo, top: "36%", left: "52%", rotate: 5, sizeClass: "size-7" },
  { Icon: XLogo, top: "50%", left: "68%", rotate: -7, sizeClass: "size-7" },
  { Icon: YoutubeLogo, top: "64%", left: "38%", rotate: 13, sizeClass: "size-8" },
  { Icon: Cpu, top: "76%", left: "48%", rotate: -10, sizeClass: "size-9" },
  { Icon: Cloud, top: "18%", left: "62%", rotate: 4, sizeClass: "size-8" },
  { Icon: Terminal, top: "44%", left: "96%", rotate: 16, sizeClass: "size-7" },
  { Icon: GitBranch, top: "56%", left: "22%", rotate: -3, sizeClass: "size-8" },
  { Icon: AmazonLogo, top: "30%", left: "28%", rotate: 9, sizeClass: "size-7" },
  { Icon: GitlabLogo, top: "4%", left: "72%", rotate: -8, sizeClass: "size-7" },
  { Icon: GoogleLogo, top: "26%", left: "55%", rotate: 6, sizeClass: "size-8" },
  { Icon: MetaLogo, top: "12%", left: "25%", rotate: -11, sizeClass: "size-8" },
  { Icon: StackOverflowLogo, top: "46%", left: "28%", rotate: 14, sizeClass: "size-7" },
  { Icon: RedditLogo, top: "54%", left: "58%", rotate: -14, sizeClass: "size-8" },
  { Icon: TelegramLogo, top: "70%", left: "44%", rotate: 11, sizeClass: "size-7" },
  { Icon: BehanceLogo, top: "96%", left: "12%", rotate: 5, sizeClass: "size-7" },
  { Icon: SketchLogo, top: "20%", left: "32%", rotate: -7, sizeClass: "size-8" },
  { Icon: Database, top: "16%", left: "35%", rotate: -5, sizeClass: "size-8" },
  { Icon: Code, top: "34%", left: "18%", rotate: 8, sizeClass: "size-9" },
  { Icon: Package, top: "60%", left: "35%", rotate: -12, sizeClass: "size-8" },
  { Icon: Rocket, top: "8%", left: "18%", rotate: 19, sizeClass: "size-7" },
  { Icon: Lightning, top: "78%", left: "58%", rotate: -6, sizeClass: "size-8" },
  { Icon: WifiHigh, top: "24%", left: "75%", rotate: 11, sizeClass: "size-7" },
  { Icon: Monitor, top: "40%", left: "40%", rotate: -9, sizeClass: "size-8" },
  { Icon: DeviceMobile, top: "66%", left: "28%", rotate: 7, sizeClass: "size-8" },
  { Icon: Cube, top: "52%", left: "12%", rotate: -4, sizeClass: "size-7" },
  { Icon: HardDrive, top: "14%", left: "45%", rotate: 13, sizeClass: "size-8" },
  { Icon: Bluetooth, top: "86%", left: "38%", rotate: -17, sizeClass: "size-7" },
  { Icon: DevToLogo, top: "32%", left: "98%", rotate: -8, sizeClass: "size-7" },
];

export function TechDoodleBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const opacityClass = isHome ? DOODLE_OPACITY.home : DOODLE_OPACITY.inner;

  return (
    <div
      className="pointer-events-none absolute inset-0 min-h-full overflow-hidden select-none"
      aria-hidden
    >
      {PLACEMENTS.map(({ Icon, top, left, rotate, sizeClass }, i) => (
        <Icon
          key={i}
          className={cn(
            "text-foreground absolute transition-opacity duration-300",
            opacityClass,
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
    </div>
  );
}
