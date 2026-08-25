import type { NavItem, Project, SocialLink } from "@/types";

export const SITE_NAME = "Neekhil";
export const COPYRIGHT_HOLDER = "Neekhil Sharma";

/** Short headline for the home hero (h1). */
export const SITE_TAGLINE = "Software Engineer";

/** Value-proposition headline — the big line in the home hero (h1). */
export const SITE_HEADLINE = "I build scalable, user-first web & mobile apps";

/** Full bio — home hero, about, and SEO where used. */
export const SITE_BIO =
  "Software Engineer with 3.5+ years of experience building scalable web and mobile applications using React, React Native, Node.js, and Express.js. Passionate about clean code, performance, and user-centric solutions. AI enthusiast who enjoys exploring emerging technologies and continuously learning new tools and frameworks.";

export const CONTACT_EMAIL = "i.neekhil@gmail.com";

/** Default meta description (layout, etc.). */
export const SITE_DESCRIPTION =
  "Software Engineer (3+ years): React Native cross-platform apps, performance and load-time optimization, Node.js and REST APIs, system design and modular architecture—production apps for thousands of users.";

/** Villain section profile photo — `public/profile.png`. */
export const VILLAIN_PROFILE_IMAGE = "/profile.png" as const;

/** Shown when the header search is focused — click runs a search with `query`. */
export const SEARCH_HINTS: { label: string; query: string }[] = [
  { label: "recently company…", query: "recently company" },
  { label: "recently project…", query: "recently project" },
  { label: "skills…", query: "skills" },
];

/** The résumé file actually served from `public/` — left unchanged on disk. */
export const RESUME_DOWNLOAD_HREF = "/Avinash_Sharma_CV.pdf" as const;

/**
 * Filename the browser saves the résumé as. The same-origin `download`
 * attribute renames the download to your name without touching the file
 * on disk (so the visitor gets "Neekhil_Sharma_CV.pdf").
 */
export const RESUME_DOWNLOAD_FILENAME = "Neekhil_Sharma_CV.pdf" as const;

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

/** Icon strip in the site header (labels map to icons in `HeaderSocial`). */
export const HEADER_SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ineekhil" },
  { label: "GitHub", href: "https://github.com/ineekhil" },
  { label: "WhatsApp", href: "https://wa.me/917666420421" },
  { label: "Email", href: "mailto:i.neekhil@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/neekhil.sharmaa/" },
];

/**
 * Home "Featured projects" + `/projects`. PLACEHOLDER content — replace with
 * real projects (title, one-line description, tags, and live/source links).
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Design system starter",
    description:
      "Reusable UI primitives and tokens for shipping consistent interfaces faster.",
    tags: ["React Native", "TypeScript", "Redux"],
  },
  {
    id: "2",
    title: "Analytics dashboard",
    description:
      "Real-time charts and filters with a focus on clarity and performance.",
    tags: ["React Native", "Data viz"],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: "3",
    title: "API toolkit",
    description:
      "Typed client SDK and OpenAPI-driven docs for internal microservices.",
    tags: ["Node", "OpenAPI"],
  },
];

/**
 * Home "Impact" strip — quick credibility signals for recruiters and clients.
 * CONFIRM these against your real numbers before launch.
 */
export type ImpactStat = { value: string; label: string };

export const IMPACT_STATS: ImpactStat[] = [
  { value: "3.5+", label: "Years of experience" },
  { value: "1000s", label: "Users reached in production" },
  { value: "10+", label: "Web & mobile apps shipped" },
];

/** Home hero (below bio): recent stack, project names, skills — edit to match you. */
export const HOME_HERO_RECENT_TECH = [
  "React Native",
  "Node.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Git",
  "CI/CD",
  "Jest",
] as const;

export const HOME_HERO_RECENT_PROJECTS = [
  "Design system starter",
  "Analytics dashboard",
  "API toolkit",
] as const;

/** Skills page and home hero — categories in this order. */
export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Kotlin"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Redux", "React Navigation"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Architecture",
    items: ["System design", "Modular architecture", "Performance"],
  },
  {
    title: "Database",
    items: ["MongoDB"],
  },
  {
    title: "Test & Tools",
    items: ["Jest", "Git", "CI/CD", "Firebase"],
  },
] as const;

export const HOME_HERO_SKILLS = SKILL_CATEGORIES.map(
  (c) => c.title,
) as readonly string[];
