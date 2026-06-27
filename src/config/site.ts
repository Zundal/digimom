// Single source of truth for personal info & links.
// Edit this file to update your identity across every language.

export type Locale = "ko" | "en" | "ja" | "zh";

// The three brand accents and their themed CSS colours. Shared by every
// section that tints UI by accent (Experience, Projects, Resonance).
export type Accent = "violet" | "aqua" | "pink";

export const ACCENT_COLOR: Record<Accent, string> = {
  violet: "var(--color-violet)",
  aqua: "var(--color-aqua)",
  pink: "var(--color-pink)",
};

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
// Career timeline. Localized copy (company / role / period / summary) lives in
// i18n under experience.items.<id>.
export type Experience = {
  id: string;
  accent: Accent;
  stack: string[];
  current?: boolean;
};

export const EXPERIENCE: Experience[] = [
  {
    id: "kbam",
    accent: "violet",
    stack: ["LLM", "MCP", "Airflow", "Python", "Celery"],
    current: true,
  },
  {
    id: "okestro",
    accent: "aqua",
    stack: ["Kafka", "Spring Reactive", "AWS", "Keycloak"],
  },
  {
    id: "retail",
    accent: "pink",
    stack: ["MSA", "TypeScript", "RabbitMQ", "Redis"],
  },
  {
    id: "wayne",
    accent: "violet",
    stack: ["Spring", "PHP", "PostgreSQL", "WebSocket"],
  },
];

export type Project = {
  id: string;
  href: string;
  year: string;
  stack: string[];
  accent: Accent;
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
  { id: "sensation", date: "2026-06-28", readingMin: 7, tag: "mind" },
  { id: "perception", date: "2026-06-28", readingMin: 7, tag: "mind" },
  { id: "cognition", date: "2026-06-28", readingMin: 7, tag: "mind" },
  { id: "hello", date: "2026-06-27", readingMin: 3, tag: "intro" },
  { id: "buildingWithThree", date: "2026-06-20", readingMin: 6, tag: "craft" },
  { id: "shippingFast", date: "2026-05-30", readingMin: 4, tag: "process" },
];

// Songs for the audio-reactive 3D keyboard ("Resonance" section).
// Files live in public/audio and are served from the deploy base.
// Display title / mood are localized via i18n (resonance.tracks.<id>.*).
export type Track = {
  id: string;
  file: string;
  accent: Accent;
};

export const TRACKS: Track[] = [
  { id: "cloudAbove", file: "audio/cloud-above.mp3", accent: "aqua" },
  { id: "ridingCurrent", file: "audio/riding-the-current.mp3", accent: "violet" },
  { id: "architect", file: "audio/architect-of-the-invisible.mp3", accent: "pink" },
];

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "ko", label: "한국어", short: "KO" },
  { code: "en", label: "English", short: "EN" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "zh", label: "中文", short: "ZH" },
];
