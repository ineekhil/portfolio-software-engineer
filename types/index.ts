export type NavItem = {
  href: string;
  label: string;
  /** Open in a new tab (e.g. external resume link). */
  external?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  sourceHref?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
