import type { WorkedCompanyDetail } from "@/lib/companies/types";

/** Quros Tech — edit copy and images in this file only. */
export const qurosTechDetail: WorkedCompanyDetail = {
  aboutLines: [
    "Quros Tech delivers software products and internal tools for clients.",
    "I rotated through engineering and QA before focusing on full-stack delivery; the team uses modern JS and Kotlin.",
    "Update this blurb with your real mission, stack, and culture.",
  ],
  location: "Pune, India",
  workArrangement: "Hybrid",
  technologies: ["React", "Next.js", "Node.js", "Kotlin"],
  rolesTimeline: [
    { title: "Software Engineer", period: "Jan 2025 – Present" },
    { title: "QA Engineer", period: "Jul 2024 – Dec 2024" },
    { title: "Android Intern", period: "Jan 2024 – Jun 2024" },
  ],
  workDetails: [
    {
      roleTitle: "Software Engineer",
      bullets: [
        "Built web apps using React/Next.js.",
        "Developed APIs with Node.js.",
        "Improved performance.",
      ],
    },
    {
      roleTitle: "QA Engineer",
      bullets: [
        "Tested APIs using Postman.",
        "Reported bugs using JIRA.",
      ],
    },
    {
      roleTitle: "Android Intern",
      bullets: [
        "Built basic Android apps using Kotlin.",
        "Integrated APIs.",
      ],
    },
  ],
  memories: [
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      alt: "Office memory",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      alt: "Team lunch",
    },
    {
      src: "https://images.unsplash.com/photo-1497215842964-222b388dc9e6?w=800&q=80",
      alt: "Workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      alt: "Colleagues",
    },
  ],
};
