/**
 * Devicon slugs (same icon set as https://techicons.dev/, sourced from devicons/devicon).
 * SVGs: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{slug}/{slug}-original.svg
 */

export const DEVICON_CDN_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons" as const;

export function deviconSvgUrl(slug: string, variant = "original"): string {
  return `${DEVICON_CDN_BASE}/${slug}/${slug}-${variant}.svg`;
}

/** Display labels (skills, tags, hero) → devicon folder slug. Keys are normalized lowercase. */
const LABEL_SLUG: Record<string, string> = {
  // SKILL_CATEGORIES
  "react & react native": "react",
  "next.js": "nextjs",
  javascript: "javascript",
  typescript: "typescript",
  "tailwind css": "tailwindcss",
  kotlin: "kotlin",
  "jetpack compose": "jetpackcompose",
  firebase: "firebase",
  "node.js": "nodejs",
  "express.js": "express",
  "rest apis": "openapi",
  mongodb: "mongodb",
  git: "git",
  "ci/cd": "githubactions",
  "cloud deployments": "googlecloud",
  jest: "jest",
  cypress: "cypressio",
  selenium: "selenium",

  // HOME_HERO_RECENT_TECH
  "react native": "reactnative",
  devops: "docker",

  // HOME_HERO_SKILLS (pillar titles)
  frontend: "react",
  mobile: "kotlin",
  backend: "nodejs",
  database: "mongodb",
  testing: "jest",

  // Project / generic tags
  tailwind: "tailwindcss",
  react: "react",
  node: "nodejs",
  openapi: "openapi",
  "data viz": "chartjs",
};

/** Per-label SVG variant (default `original`). */
const LABEL_VARIANT: Record<string, string> = {
  jest: "plain",
};

function normalizeLabel(label: string): string {
  return label.trim().toLowerCase();
}

export type TechIconAsset = { slug: string; variant: string };

export function techIconAssetForLabel(label: string): TechIconAsset | null {
  const key = normalizeLabel(label);
  const slug = LABEL_SLUG[key];
  if (!slug) return null;
  return { slug, variant: LABEL_VARIANT[key] ?? "original" };
}

export function techIconSlugForLabel(label: string): string | null {
  return techIconAssetForLabel(label)?.slug ?? null;
}
