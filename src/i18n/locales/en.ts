import type { Dict } from "./ko";
import { cheongyakEn } from "../posts/cheongyak";

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
    tags: {
      intro: "Intro",
      craft: "Craft",
      process: "Process",
      mind: "Mind",
      life: "Life",
    },
  },
  posts: {
    cheongyak: cheongyakEn,
    sensation: {
      title: "How the World Reaches Me — Part 1: Sensation",
      excerpt:
        "We never see the world directly — only the signal our eyes and ears translate. A story about the first gateway: sensation.",
      body: [
        "Even as you read these words, light is shattering against the retina at the back of your eye. We never quite meet the world 'directly.' Everything we experience is the world as it looks after passing through a translator: the sense organs.",
        "Sensation is the first step of that translation — the moment a physical event out there (a wavelength of light, a tremor in the air, pressure on the skin) reaches a receptor in the body. What's striking is that each organ accepts only a strictly defined kind of stimulus. The eye cannot hear sound; the ear cannot see light.",
        "::figure:sensesGateway::",
        "The five gateways each speak a different language. Eyes read electromagnetic waves, ears read vibration, the nose and tongue read chemicals. Yet by the time these different inputs arrive at the brain, they have all become the same thing: electrical signals.",
        "This translation is called transduction — the instant a physical stimulus is converted into the electrical language neurons understand. Light, sound, warmth: once rendered into the language of nerve cells, they are no longer light or sound. They are just signals.",
        "::figure:transduction::",
        "There is one cold rule here. If a stimulus fails to cross a certain 'threshold,' nothing happens at all. A neuron does not respond halfway. Strong enough, and it fires; otherwise, silence — all or nothing.",
        "So what we believe we 'see' is not light itself but the electrical trace light leaves behind. The world always reaches us secondhand. How, then, does this bundle of signals become 'meaning'? That's the story of Part 2: perception.",
      ],
    },
    perception: {
      title: "How the World Reaches Me — Part 2: Perception",
      excerpt:
        "The brain doesn't just receive signals — it interprets them. Why two people can look at the same light and see different things.",
      body: [
        "In Part 1 we saw the world translated into electrical signals and delivered to the brain. But a bundle of signals means nothing on its own. The place where 'meaning' is made is perception.",
        "Perception happens in two directions at once. One flow starts from the sensory data and travels upward; the other starts from our expectations and experience and travels downward.",
        "::figure:bottomUpTopDown::",
        "With only bottom-up processing, we'd have to interpret the world laboriously, as if seeing it for the first time every time. Thanks to top-down processing, we read blurry handwriting from context and recognize a half-hidden face. The brain is a diligent guessing machine.",
        "This guessing shows itself most vividly when the brain looks at scattered fragments and conjures a 'whole' on its own. In the early twentieth century, the Gestalt psychologists distilled this tendency into a handful of principles.",
        "::figure:gestalt::",
        "A few dots become a cluster; a broken line becomes a shape. We see more than is actually there, because the brain fills in the blanks. Optical illusions feel uncanny for the same reason — they aren't an error of the eye but an over-earnest interpretation by the brain.",
        "So 'seeing' isn't passively receiving; it's the active work of constantly forming and testing hypotheses. The same signal becomes a different scene depending on who receives it and in what context. Where, then, does this interpreted world remain? That continues in Part 3: memory.",
      ],
    },
    cognition: {
      title: "How the World Reaches Me — Part 3: Memory & Cognition",
      excerpt:
        "Where does the interpreted world go? Attention, the gatekeeper — and the three rooms of memory.",
      body: [
        "We took in the world through sensation (Part 1) and interpreted it through perception (Part 2). Now the final question: where is all this experience stored, and how is it drawn back out?",
        "Not everything stays. Countless stimuli pour in every moment, but most of them vanish in under a second. The decisive role here belongs to attention. Attention is the gatekeeper that decides what gets admitted to the next room of memory.",
        "::figure:memoryFlow::",
        "The psychologists Atkinson and Shiffrin drew memory as three rooms: a sensory memory where almost every input lingers briefly, a working memory we consciously hold onto in this very moment, and a long-term memory that stores things almost without limit.",
        "The narrowest room sits in the middle. Working memory can hold only about seven items at once — more precisely, seven plus or minus two. Even as you read this sentence, your working memory is rapidly filling and emptying.",
        "::figure:workingMemory::",
        "The trick to widening that narrow desk is grouping. Seven is the limit for loose items, but bundled into meaningful chunks, far more can fit. Memorizing a phone number in three pieces, or a chess master taking in the whole board at a glance, work on the same principle.",
        "Only information rehearsed enough in working memory crosses into long-term memory and stays. And when needed, it is retrieved back into working memory. Memory is less a static warehouse than a workbench we write and rewrite on endlessly.",
        "Light becomes signal (Part 1), signal becomes meaning (Part 2), meaning becomes memory (Part 3) — only at the end of this long journey can we say 'the world has reached me.' We don't so much see the world as rebuild it, moment by moment.",
      ],
    },
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
  figures: {
    sensesGateway: {
      title: "The Five Gateways of Sensation",
      caption: "Each organ admits only its own stimulus. Pick one.",
      cols: { organ: "Organ", receptor: "Receptor", stimulus: "Stimulus" },
      items: [
        {
          key: "sight",
          label: "Sight",
          organ: "Eye · retina",
          receptor: "Photoreceptors (rods · cones)",
          stimulus: "Light — electromagnetic waves",
        },
        {
          key: "hearing",
          label: "Hearing",
          organ: "Ear · cochlea",
          receptor: "Hair cells",
          stimulus: "Vibration in air",
        },
        {
          key: "touch",
          label: "Touch",
          organ: "Skin",
          receptor: "Mechano- · thermoreceptors",
          stimulus: "Pressure · temperature",
        },
        {
          key: "smell",
          label: "Smell",
          organ: "Nose · olfactory epithelium",
          receptor: "Olfactory receptors",
          stimulus: "Airborne molecules",
        },
        {
          key: "taste",
          label: "Taste",
          organ: "Tongue · taste buds",
          receptor: "Taste cells",
          stimulus: "Dissolved chemicals",
        },
      ],
    },
    transduction: {
      title: "Transduction — when a stimulus becomes a signal",
      caption: "A physical event is rendered into the electrical language of nerves.",
      note: "A stimulus that never crosses the threshold never becomes a signal — all or nothing.",
      steps: [
        { label: "Physical stimulus", sub: "Light · sound · pressure" },
        { label: "Receptor", sub: "A sensory cell takes it in" },
        { label: "Threshold", sub: "Strong enough → it fires" },
        { label: "Action potential", sub: "An electrical signal forms" },
        { label: "Brain", sub: "The signal arrives" },
      ],
    },
    bottomUpTopDown: {
      title: "Perception, met from two directions",
      caption: "Sensory data and expectation meet in the middle.",
      note: "The two don't compete, they cooperate — when data runs short, expectation fills in.",
      center: "Perception",
      bottomUp: {
        label: "Bottom-up",
        sub: "Starts from sensory data",
        ex: "Dots · lines · color → form",
      },
      topDown: {
        label: "Top-down",
        sub: "Starts from expectation & context",
        ex: "Context → even blurry letters read",
      },
    },
    gestalt: {
      title: "Gestalt — the brain sees the whole",
      caption: "Tap a principle to compare.",
      principles: [
        { key: "proximity", label: "Proximity", desc: "Things close together group into one." },
        { key: "similarity", label: "Similarity", desc: "Things that look alike group together." },
        { key: "continuity", label: "Continuity", desc: "We connect smooth flows over broken bits." },
        { key: "closure", label: "Closure", desc: "We fill the gaps and see a finished form." },
      ],
    },
    memoryFlow: {
      title: "The three rooms of memory",
      caption: "Hover a stage. Attention plays the gatekeeper.",
      stages: [
        { key: "sensory", label: "Sensory memory", sub: "Under a second · nearly all input" },
        { key: "working", label: "Working memory", sub: "Tens of seconds · 7±2 items" },
        { key: "longterm", label: "Long-term memory", sub: "Long · effectively unlimited" },
      ],
      arrows: { attention: "Attention", rehearsal: "Rehearsal", retrieval: "Retrieval", forget: "Forgetting" },
    },
    workingMemory: {
      title: "The narrow desk of working memory",
      caption: "About seven fit at once. Bundle them, and more do.",
      raw: "Loose",
      chunked: "Chunk them",
      limit: "≈ 7±2",
      note: "Chunking: even 11 digits become easy once grouped into three chunks.",
      groups: ["010", "2451", "8893"],
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
    speed: "Speed",
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
