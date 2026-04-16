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
  typescript: "typescript",
  "tailwind css": "tailwindcss",
  "node.js": "nodejs",
  "express.js": "express",
  "rest apis": "openapi",
  mongodb: "mongodb",
  git: "git",
  "ci/cd": "githubactions",
  "cloud deployments": "googlecloud",

  // HOME_HERO_RECENT_TECH
  "react native": "reactnative",
  devops: "docker",

  // HOME_HERO_SKILLS (pillar titles)
  frontend: "react",
  backend: "nodejs",
  database: "mongodb",

  // Project / generic tags
  tailwind: "tailwindcss",
  react: "react",
  node: "nodejs",
  openapi: "openapi",
  "data viz": "chartjs",
};

function normalizeLabel(label: string): string {
  return label.trim().toLowerCase();
}

export function techIconSlugForLabel(label: string): string | null {
  const slug = LABEL_SLUG[normalizeLabel(label)];
  return slug ?? null;
}
