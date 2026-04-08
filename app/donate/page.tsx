import type { Metadata } from "next";

import { SmileyDoodleBackground } from "@/components/donate/smiley-doodle-background";
import { PinterestGallery } from "@/components/donate/pinterest-gallery";

export const metadata: Metadata = {
  title: "White place",
  robots: { index: false, follow: false },
};

export default function WhitePlacePage() {
  return (
    <div
      className="bg-background relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden"
      aria-label="White place"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <SmileyDoodleBackground />
      </div>
      <div className="relative z-[1]">
        <PinterestGallery />
      </div>
    </div>
  );
}
