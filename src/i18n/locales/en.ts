import type { Dict } from "./ko";

const en: Dict = {
  nav: {
    about: "About",
    projects: "Projects",
    writing: "Writing",
    connect: "Connect",
  },
  hero: {
    eyebrow: "Developer · Maker · Writer",
    name: "Jeongsik An",
    role: "I think by building",
    tagline:
      "I like turning ideas into things you can actually touch on a screen — from small tools to playful experiences. I learn by making them myself.",
    ctaProjects: "See the work",
    ctaContact: "Get in touch",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "About",
    title: "Somewhere between code and curiosity",
    p1: "Hi, I'm Jeongsik An — Zundal online. I enjoy the loop of shipping something fast and then shaping it into a product people genuinely like to use.",
    p2: "I work mostly on the web with React and TypeScript, and I believe interaction and detail are what change an experience. When a new tool catches my eye, I build something small with it first.",
    facts: [
      { k: "Foundation", v: "React · TypeScript" },
      { k: "Drawn to", v: "Interaction · 3D · Tools" },
      { k: "Approach", v: "Ship fast, then refine" },
      { k: "Based", v: "Anywhere online" },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    subtitle: "Sites and experiments I designed and built end to end.",
    visit: "Visit site",
    items: {
      tabemono: {
        name: "Tabemono",
        desc: "A food diary to log what you eat and look back on it. A light, joyful way to keep a daily record.",
      },
      novelNote: {
        name: "Novel Note",
        desc: "A note space for people who read and write — a quiet place to gather thoughts and sentences.",
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
  connect: {
    eyebrow: "Connect",
    title: "Build together, or just say hi",
    subtitle:
      "Collaboration, feedback, or a casual hello — all welcome.",
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
