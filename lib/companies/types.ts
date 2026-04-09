/** How you worked at that company (shown in the detail panel). */
export type WorkArrangement = "WFH" | "Hybrid" | "On-site";

export type WorkedCompanyDetail = {
  /** Short company blurb — three lines in “What the company does”. */
  aboutLines: readonly [string, string, string];
  /** Human-readable location (shown next to the map pin). */
  location: string;
  /** Optional Google Maps (or other) link for the office / place. */
  locationMapUrl?: string;
  workArrangement: WorkArrangement;
  /** Tools & stack you used at this company (optional). */
  technologies?: readonly string[];
  /** Role history, most recent first. */
  rolesTimeline: readonly { title: string; period: string }[];
  /** Bullets grouped by role title. */
  workDetails: readonly { roleTitle: string; bullets: readonly string[] }[];
  /** Team or office moments — local paths or allowed remote images. */
  memories: readonly { src: string; alt: string }[];
};
