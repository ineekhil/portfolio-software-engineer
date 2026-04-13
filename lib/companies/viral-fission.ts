import type { WorkedCompanyDetail } from "@/lib/companies/types";

/** Office / place on Google Maps: https://maps.app.goo.gl/DusrrHmxwXfPMGyZ9 */
const VIRAL_FISSION_MAP_URL = "https://maps.app.goo.gl/DusrrHmxwXfPMGyZ9";

/** Public Drive file → embeddable thumbnail (files must be shared: “Anyone with the link”). */
function driveThumbnail(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
}

/**
 * Viral Fission — edit dates and memories in this file only.
 * @see https://maps.app.goo.gl/DusrrHmxwXfPMGyZ9
 */
export const viralFissionDetail: WorkedCompanyDetail = {
  aboutLines: [
    "Viral Fission is a tech-enabled digital marketing and youth engagement platform that helps brands connect with Gen Z audiences through content-driven campaigns, influencer networks, and data analytics.",
    "The company operates at the intersection of marketing and technology, building scalable systems to manage and optimize large-scale brand campaigns across digital and on-ground channels.",
    "I contribute across web and mobile, collaborating with product, design, and data teams in a hybrid setup.",
  ],
  location: "Mumbai, India",
  locationMapUrl: VIRAL_FISSION_MAP_URL,
  mobileApp: {
    name: "Vi-Fi",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.viralfission&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/in/app/vi-fi/id1541174634",
  },
  webLinks: [
    { label: "Website", href: "https://viralfission.com/" },
    {
      label: "Content Central",
      href: "https://contentcentral.viralfission.com/login",
    },
    { label: "Drip Central", href: "https://dripcentral.viralfission.com/" },
  ],
  workArrangement: "Hybrid",
  rolesTimeline: [
    { title: "Software Engineer", period: "Jan 2025 – Present" },
    { title: "QA Engineer", period: "Feb 2023 – Mar 2025" },
    { title: "Android Developer Intern", period: "Sept 2022 – Jan 2023" },
  ],
  workDetails: [
    {
      roleTitle: "Software Engineer",
      technologies: [
        "Jetpack Compose",
        "TypeScript",
        "AWS",
        "Jest",
        "React",
        "React Native",
        "Figma",
        "Firebase",
        "MongoDB",
        "Postman",
        "Git",
        "Jira",
      ],
      bullets: [
        "Built and maintained web experiences with React and integrated APIs backed by Java services.",
        "Worked with MongoDB for data-heavy campaign and analytics features.",
        "Collaborated on performance, reliability, and code quality across the stack.",
      ],
    },
    {
      roleTitle: "QA Engineer",
      technologies: [
        "TypeScript",
        "Jest",
        "Postman",
        "Jira",
        "Git",
      ],
      bullets: [
        "Validated APIs and end-to-end flows; documented issues and regressions clearly for engineering.",
        "Partnered with developers to reproduce bugs and improve release confidence.",
      ],
    },
    {
      roleTitle: "Android Developer Intern",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Git", "Figma"],
      bullets: [
        "Built Android UI with Kotlin and Jetpack Compose under mentorship.",
        "Integrated APIs and learned production practices in a fast-moving product team.",
      ],
    },
  ],
  memories: [
    {
      src: driveThumbnail("1pXyA9HwC5L6yCzI7yFReQf9ED-rP4M6_"),
      alt: "Viral Fission gallery photo 1",
    },
    {
      src: driveThumbnail("1YxrL4WPRtqq6co43YYOOL2YTfgJ0jZjJ"),
      alt: "Viral Fission gallery photo 2",
    },
    {
      src: driveThumbnail("1s-NjrPhs7yo2Io3DEvql3op2gsPAxu64"),
      alt: "Viral Fission gallery photo 3",
    },
  ],
};
