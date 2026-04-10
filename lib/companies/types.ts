/** How you worked at that company (shown in the detail panel). */
export type WorkArrangement = "WFH" | "Hybrid" | "On-site";

export type WorkedCompanyDetail = {
  /** Short company blurb — three lines in “What the company does”. */
  aboutLines: readonly [string, string, string];
  /** Human-readable location (shown next to the map pin). */
  location: string;
  /** Optional Google Maps (or other) link for the office / place. */
  locationMapUrl?: string;
  /** Optional company mobile app (e.g. Vi-Fi) — Google Play & App Store. */
  mobileApp?: {
    readonly name: string;
    readonly playStoreUrl: string;
    readonly appStoreUrl: string;
  };
  /** Optional public sites / products (label + URL). */
  webLinks?: readonly { readonly label: string; readonly href: string }[];
  workArrangement: WorkArrangement;
  /** Role history, most recent first. */
  rolesTimeline: readonly { title: string; period: string }[];
  /** Bullets grouped by role title; optional `technologies` under each role heading. */
  workDetails: readonly {
    roleTitle: string;
    bullets: readonly string[];
    technologies?: readonly string[];
  }[];
  /** Team or office moments — local paths or allowed remote images. */
  memories: readonly { src: string; alt: string }[];
};
