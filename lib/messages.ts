/**
 * All user-facing strings you want to manage in one place.
 * Import: `import { messages } from "@/lib/messages"`
 */
export const messages = {
  /** Tooltip next to hero profile photo — each line is its own key. */
  profileHover: {
    /** Shown automatically ~2s after the hero section is in view. */
    heyHowAreYou: "hey! how are you? 😅",
    /** Shown when the visitor hovers the profile photo. */
    yesImTheOne: "yes! i'm the one you're looking for 😅",
  },
  /** Places you’ve worked / work (each key is one company name). */
  companies: {
    viralFission: "Viral Fission",
    qurosTech: "Quros Tech",
    neekhilItSolution: "Neekhil IT Solution",
    cred: "CRED",
    google: "Google",
    jpMorgan: "J.P Morgan",
  },
  /** Line before the current company when the hero badge is in “employed” mode. */
  heroEmployment: {
    currentlyWorkingReactDeveloperAtPrefix:
      "Currently working as a React Developer at",
  },
  /** Badge under hero avatar (sparkle row) when looking for roles. */
  openToOpportunities: "Open to opportunities",
  /** For later use. */
  pushKroKhushRho: "push kro khush rho!",
  /** For use in contact sections. */
  contact: {
    letsConnect: "Let’s connect.",
    haveAProject: "Have a project in mind? Let’s talk.",
    feelFreeToReachOut: "Feel free to reach out.",
    letsBuildSomethingAmazing: "Let’s build something amazing.",
    dropMeAMessage: "Drop me a message anytime.",
  },
  /** Common job roles. */
  roles: {
    frontendDevelopment: "Frontend Development",
    backendDeveloper: "Backend Developer",
    qaEngineer: "QA Engineer",
    fullStackDeveloper: "Full Stack Developer",
    devOpsEngineer: "DevOps Engineer",
    androidDeveloper: "Android Developer",
    reactNativeDeveloper: "React Native Developer",
    flutterDeveloper: "Flutter Developer",
    softwareEngineer: "Software Engineer",
    socialMediaManager: "Social Media Manager",
  },
} as const;

/**
 * Hero badge under the avatar:
 * - `"open"` → shows `openToOpportunities`; hover lists roles from `openToOpportunitiesHoverRoles`.
 * - `"employed"` → shows React Developer line + `employedCompanyKey`; hover lists `companiesHoverOrder`.
 */
export const HERO_BADGE_VARIANT = "open" as "open" | "employed";

/** When `HERO_BADGE_VARIANT` is `"employed"`, which `messages.companies` key appears in the badge. */
export const HERO_EMPLOYED_COMPANY_KEY: keyof typeof messages.companies = "cred";

/** Roles shown when hovering the badge in `"open"` mode (order preserved). */
export const openToOpportunitiesHoverRoles = [
  messages.roles.fullStackDeveloper,
] as const;

/** Companies shown when hovering the badge in `"employed"` mode (chronological / your order). */
export const companiesHoverOrder = [
  messages.companies.viralFission,
  messages.companies.qurosTech,
  messages.companies.neekhilItSolution,
  messages.companies.cred,
  messages.companies.google,
  messages.companies.jpMorgan,
] as const;

export type Messages = typeof messages;
