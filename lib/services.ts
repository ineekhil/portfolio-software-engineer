/**
 * "Code Behind the Scenes" — the user's IT studio. Single source of truth for
 * the company brand + the services shown on the home Services section.
 * Icons are referenced by key and mapped to Phosphor icons in
 * `components/sections/services.tsx` (keeps this file free of client imports).
 */

export const COMPANY_NAME = "Code Behind the Scenes" as const;
export const COMPANY_URL = "https://codebehindthescenes.com" as const;
/** One-liner used under the Services heading. */
export const COMPANY_TAGLINE =
  "My software studio, building web, mobile, QA, and AI products end to end.";

export type ServiceIconKey = "web" | "app" | "qa" | "ai";

export type Service = {
  id: string;
  iconKey: ServiceIconKey;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: "web",
    iconKey: "web",
    title: "Web Development",
    description:
      "Fast, accessible websites and web apps built with React, Next.js, and modern tooling.",
  },
  {
    id: "app",
    iconKey: "app",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android apps with React Native — from idea to the app stores.",
  },
  {
    id: "qa",
    iconKey: "qa",
    title: "Quality Assurance",
    description:
      "Manual and automated testing that ships confident, reliable releases.",
  },
  {
    id: "ai",
    iconKey: "ai",
    title: "AI Solutions",
    description:
      "LLM-powered features, chatbots, and automation tailored to your product.",
  },
];
