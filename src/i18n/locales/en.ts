import type { Dict } from "./ko";

const en: Dict = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    writing: "Writing",
    connect: "Connect",
  },
  hero: {
    eyebrow: "AX Engineer · Backend",
    name: "Jeongsik An",
    role: "I connect business and AI",
    tagline:
      "From learning to shipping. From the foundations of large-scale infrastructure up to the modern AI application layer, I turn business needs into systems that actually run.",
    ctaProjects: "Read the blog",
    ctaContact: "Get in touch",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "About",
    title: "From the infra layer to the AI layer",
    p1: "Hi, I'm Jeongsik An — Zundal online. I'm a backend & AX engineer, currently turning business requirements into real AI features on the AI Tech team at KB Asset Management.",
    p2: "I started out handling high-traffic workloads and operating large-scale cloud infrastructure; today I design in-house AI agent ecosystems with multiple LLMs and MCP-driven, event-based architectures. I work across the whole stack — from the system's foundation to the AI application layer — and focus on proving business value through maintainable code.",
    facts: [
      { k: "Now", v: "KB Asset Mgmt · AI Tech, Lead" },
      { k: "Role", v: "Backend · AX Engineer" },
      { k: "Domains", v: "Finance · Cloud · AI" },
      { k: "Core", v: "Spring · Python · LLM · MCP" },
      { k: "Languages", v: "Korean · Japanese (JLPT N1) · English" },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've been",
    subtitle: "Spanning domains, from infrastructure to AI.",
    present: "Present",
    items: {
      kbam: {
        company: "KB Asset Management",
        role: "AI Tech Team · Lead",
        period: "Feb 2025 — Present",
        summary:
          "Leading the company's AX (AI Transformation). Connecting multiple LLMs (Upstage, Gemini, Claude) to internal systems via MCP, automating data pipelines with n8n and Airflow, and building large-scale financial time-series ingestion and monitoring on Python and Celery.",
      },
      okestro: {
        company: "Okestro",
        role: "Cloud Platform Engineering",
        period: "Jul 2023 — Feb 2025",
        summary:
          "Led the real-time data backend for large-scale finance and public-sector cloud platforms. Built a non-blocking notification system on Kafka and Spring Reactive, cloud resource metering for Hana and Shinhan Bank, and unified auth with Vault and Keycloak.",
      },
      retail: {
        company: "Retail&Insight · Monthly Kitchen",
        role: "Backend · O2O / Commerce",
        period: "Nov 2021 — Jul 2023",
        summary:
          "Migrated O2O and commerce platforms to MSA and resolved bottlenecks. Hardened payment and ad logic, adopted TypeScript early for type safety, introduced RabbitMQ/Redis for distributed processing, and established Jest-based TDD.",
      },
      wayne: {
        company: "Wayne Technology",
        role: "Full-stack · Data",
        period: "Dec 2019 — Oct 2021",
        summary:
          "Cut large ledger and image migrations from over 8 hours to under 1 hour with multi-threaded parallel processing. Launched a real-time credit-info transfer API on Spring and WebSocket, plus a loan-screening platform.",
      },
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    subtitle: "Side projects I designed, shipped, and run — separate from my day job.",
    visit: "Visit site",
    items: {
      tabemono: {
        name: "Tabemono",
        desc: "A social dining platform that connects people over a meal. A full-cycle project I designed, built, and deployed myself.",
      },
      novelNote: {
        name: "Novel Note",
        desc: "A web note service for people who read and write — a quiet place to gather thoughts and sentences.",
      },
      mafia: {
        name: "Mafia",
        desc: "A real-time web Mafia game to play with friends. Gather everyone and start right away.",
      },
    },
  },
  writing: {
    eyebrow: "Writing",
    title: "Notes & thinking",
    subtitle: "What I learn while building, and the notes along the way.",
    readMore: "Keep reading",
    min: "min",
    tags: { intro: "Intro", craft: "Craft", process: "Process" },
  },
  posts: {
    hello: {
      title: "Starting this space",
      excerpt:
        "Why build yet another blog? Because writing is, in the end, a gift to your future self.",
      body: [
        "I'm starting another blog. There are plenty already, but a place to hold my own thoughts in my own way is something you ultimately have to build yourself.",
        "Here I'll leave what I learn while making things, the moments where I get stuck and then unstuck, and fragments of thinking that aren't tidy yet. I like the process more than the polished conclusion.",
        "Thanks for reading. Slowly, but steadily, I'll fill this in.",
      ],
    },
    buildingWithThree: {
      title: "Making a web you can feel",
      excerpt:
        "3D and motion aren't decoration — they can be the message. How to leave one impression through restraint.",
      body: [
        "A screen is flat, but the experience doesn't have to be. On this site I let the aurora orb hold your attention and kept everything else quiet.",
        "If everything moves, nothing is remembered. Impression comes from focus. So instead of a busy board, I chose a single clear moment.",
        "Technology is just a tool. What matters is what a person feels and remembers.",
      ],
    },
    shippingFast: {
      title: "Ship fast, learn fast",
      excerpt:
        "There's no perfect first version. On the rhythm of shipping small and refining with your users.",
      body: [
        "A small version out in the world teaches you more than a first version you polished for ages. Users look exactly where you didn't expect.",
        "So I start small. Once one core thing works, I ship it, watch the response, and decide what's next. Direction comes from use, not from code.",
        "Fast doesn't mean careless — it means making the learning loop short.",
      ],
    },
  },
  playground: {
    eyebrow: "How I work with data",
    title: "Making data visible and tangible",
    subtitle:
      "Just as thousands of points converge into a shape, I aim to handle data so it can be seen and felt — not merely stored.",
    hint: "Click: change shape · Cursor: scatter",
  },
  resonance: {
    eyebrow: "Sound × Interaction",
    title: "Play the music as light",
    subtitle:
      "Pick a track and notes fall in time with the music. Hit them on the beat with the D·F·J·K keys — or tap the screen on mobile.",
    idle: "Choose a track",
    analyzing: "Analyzing…",
    fullscreen: "Fullscreen",
    exit: "Close",
    restart: "Restart",
    best: "Best",
    combo: "Combo",
    howto: "D · F · J · K or tap",
    rotate: "Rotate your device to landscape",
    judge: { perfect: "Perfect", good: "Good", miss: "Miss" },
    tracks: {
      cloudAbove: { title: "구름 위로" },
      ridingCurrent: { title: "전류를 타고" },
      architect: { title: "Architect of the Invisible" },
    },
  },
  connect: {
    eyebrow: "Connect",
    title: "Build together, or just say hi",
    subtitle: "Collaboration, feedback, or a casual hello — all welcome.",
    copy: "Copy email",
    copied: "Copied!",
  },
  footer: {
    built: "Built with React · Three.js",
    rights: "All rights reserved",
  },
  post: {
    back: "Back to list",
    published: "Published",
    min: "min read",
    notFound: "Post not found.",
  },
};

export default en;
