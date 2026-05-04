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
  swift: "swift",
  dart: "dart",
  flutter: "flutter",
  expo: "expo",
  "jetpack compose": "jetpackcompose",
  firebase: "firebase",
  "node.js": "nodejs",
  "express.js": "express",
  "rest apis": "openapi",
  mongodb: "mongodb",
  axios: "axios",
  redux: "redux",
  git: "git",
  "ci/cd": "githubactions",
  jest: "jest",
  "react navigation": "reactnative",
  "system design": "kubernetes",
  "modular architecture": "redux",
  performance: "nginx",

  // HOME_HERO_RECENT_TECH
  "react native": "reactnative",
  devops: "docker",

  // HOME_HERO_SKILLS (pillar titles)
  languages: "javascript",
  mobile: "reactnative",
  backend: "nodejs",
  architecture: "kubernetes",
  database: "mongodb",
  "test & tools": "jest",

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

/**
 * CSS classes for devicons that are dark-on-transparent (invisible on dark UI).
 * Same assets as https://techicons.dev/ (devicon CDN).
 */
const LABEL_ICON_CLASS: Record<string, string> = {
  "express.js": "dark:invert",
};

function normalizeLabel(label: string): string {
  return label.trim().toLowerCase();
}

export type TechIconAsset = {
  slug: string;
  variant: string;
  className?: string;
};

export function techIconAssetForLabel(label: string): TechIconAsset | null {
  const key = normalizeLabel(label);
  const slug = LABEL_SLUG[key];
  if (!slug) return null;
  return {
    slug,
    variant: LABEL_VARIANT[key] ?? "original",
    className: LABEL_ICON_CLASS[key],
  };
}

export function techIconSlugForLabel(label: string): string | null {
  return techIconAssetForLabel(label)?.slug ?? null;
}
