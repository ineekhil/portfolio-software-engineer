import type { WorkedCompanyDetail } from "@/lib/companies/types";

/** Office / place on Google Maps: https://maps.app.goo.gl/DusrrHmxwXfPMGyZ9 */
const VIRAL_FISSION_MAP_URL = "https://maps.app.goo.gl/DusrrHmxwXfPMGyZ9";

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
  workArrangement: "Hybrid",
  technologies: [
    "React",
    "Java",
    "Kotlin",
    "MongoDB",
    "Jetpack Compose",
  ],
  rolesTimeline: [
    { title: "Software Engineer", period: "Present" },
    { title: "QA Engineer", period: "—" },
    { title: "Android Developer Intern", period: "—" },
  ],
  workDetails: [
    {
      roleTitle: "Software Engineer",
      bullets: [
        "Built and maintained web experiences with React and integrated APIs backed by Java services.",
        "Worked with MongoDB for data-heavy campaign and analytics features.",
        "Collaborated on performance, reliability, and code quality across the stack.",
      ],
    },
    {
      roleTitle: "QA Engineer",
      bullets: [
        "Validated APIs and end-to-end flows; documented issues and regressions clearly for engineering.",
        "Partnered with developers to reproduce bugs and improve release confidence.",
      ],
    },
    {
      roleTitle: "Android Developer Intern",
      bullets: [
        "Built Android UI with Kotlin and Jetpack Compose under mentorship.",
        "Integrated APIs and learned production practices in a fast-moving product team.",
      ],
    },
  ],
  memories: [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      alt: "Team collaboration at the office",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      alt: "Team meeting",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      alt: "Working together",
    },
  ],
};
