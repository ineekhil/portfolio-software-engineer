export type NavItem = {
  href: string;
  label: string;
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
