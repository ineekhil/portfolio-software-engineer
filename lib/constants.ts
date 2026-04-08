import type { NavItem, Project, SocialLink } from "@/types";

export const SITE_NAME = "Neekhil";
export const COPYRIGHT_HOLDER = "Neekhil Sharma";

/** Short headline for the home hero (h1). */
export const SITE_TAGLINE = "Software Engineer";

/** Full bio — home hero, about, and SEO where used. */
export const SITE_BIO =
  "Software Engineer with 3 years of experience in React, Android, and QA Automation. Skilled in building scalable solutions, optimizing performance, and delivering high-quality code. Experienced with CI/CD, cloud deployments, and automated testing, with a strong focus on user-centric applications.";

export const CONTACT_EMAIL = "i.neekhil@gmail.com";

/** Default meta description (layout, etc.). */
export const SITE_DESCRIPTION =
  "Software Engineer with 3 years in React, Android, and QA Automation. Scalable solutions, CI/CD, testing, and user-centric applications.";

/** Villain section profile photo (LinkedIn CDN — allow `media.licdn.com` in `next.config.ts`). */
export const VILLAIN_PROFILE_IMAGE_URL =
  "https://media.licdn.com/dms/image/v2/D4D03AQG3LcaATal0gg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718894767709?e=1776902400&v=beta&t=RXbI8FusAUU71Y-9lMrAvdYq6BonY--y93-F8n7zamE";

/** Shown when the header search is focused — click runs a search with `query`. */
export const SEARCH_HINTS: { label: string; query: string }[] = [
  { label: "recently company…", query: "recently company" },
  { label: "recently project…", query: "recently project" },
  { label: "skills…", query: "skills" },
];

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

/** Icon strip in the site header (labels map to icons in `HeaderSocial`). */
export const HEADER_SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ineekhil" },
  { label: "GitHub", href: "https://github.com/ineekhil" },
  { label: "WhatsApp", href: "https://wa.me/917666420421" },
  { label: "Email", href: "mailto:i.neekhil@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/neekhil.sharmaa/" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Design system starter",
    description:
      "Reusable UI primitives and tokens for shipping consistent interfaces faster.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    href: "#",
    sourceHref: "#",
  },
  {
    id: "2",
    title: "Analytics dashboard",
    description:
      "Real-time charts and filters with a focus on clarity and performance.",
    tags: ["React", "Data viz"],
    href: "#",
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
    sourceHref: "#",
  },
];
