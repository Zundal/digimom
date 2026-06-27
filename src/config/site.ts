// Single source of truth for personal info & links.
// Edit this file to update your identity across every language.

export type Locale = "ko" | "en" | "ja" | "zh";

export const SITE = {
  handle: "Zundal",
  email: "ajs15010120@gmail.com",
  links: {
    github: "https://github.com/Zundal",
    linkedin: "https://www.linkedin.com/in/jeongsik-an-1559b21b1/",
    email: "mailto:ajs15010120@gmail.com",
  },
} as const;

export type Social = {
  key: keyof typeof SITE.links;
  label: string;
  href: string;
};

export const SOCIALS: Social[] = [
  { key: "github", label: "GitHub", href: SITE.links.github },
  { key: "linkedin", label: "LinkedIn", href: SITE.links.linkedin },
  { key: "email", label: "Email", href: SITE.links.email },
];

// Projects / sites you've built. Copy is localized via i18n keys (projects.<id>.*).
export type Project = {
  id: string;
  href: string;
  year: string;
  stack: string[];
  accent: "violet" | "aqua" | "pink";
};

export const PROJECTS: Project[] = [
  {
    id: "tabemono",
    href: "https://tabemono.vercel.app/",
    year: "2025",
    stack: ["React", "TypeScript", "Vercel"],
    accent: "aqua",
  },
  {
    id: "novelNote",
    href: "https://novel-note.vercel.app/",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Vercel"],
    accent: "violet",
  },
  {
    id: "mafia",
    href: "https://mafia-xi-one.vercel.app",
    year: "2024",
    stack: ["React", "Realtime", "Vercel"],
    accent: "pink",
  },
];

// Blog posts. Body + title localized via i18n (posts.<id>.*).
export type Post = {
  id: string;
  date: string;
  readingMin: number;
  tag: string;
};

export const POSTS: Post[] = [
  { id: "hello", date: "2026-06-27", readingMin: 3, tag: "intro" },
  { id: "buildingWithThree", date: "2026-06-20", readingMin: 6, tag: "craft" },
  { id: "shippingFast", date: "2026-05-30", readingMin: 4, tag: "process" },
];

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "ko", label: "한국어", short: "KO" },
  { code: "en", label: "English", short: "EN" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "zh", label: "中文", short: "ZH" },
];
