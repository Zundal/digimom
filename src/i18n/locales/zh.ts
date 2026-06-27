import type { Dict } from "./ko";

const zh: Dict = {
  nav: {
    about: "关于",
    experience: "经历",
    projects: "项目",
    writing: "随笔",
    connect: "联系",
  },
  hero: {
    eyebrow: "AX 工程师 · 后端",
    name: "安正植",
    role: "连接业务与 AI",
    tagline:
      "从学习走向落地。从大规模基础设施的底层，到最新的 AI 应用层，把业务需求做成真正能跑起来的系统。",
    ctaProjects: "阅读博客",
    ctaContact: "联系我",
    scroll: "向下滚动",
  },
  about: {
    eyebrow: "关于",
    title: "从基础设施底层到 AI 层",
    p1: "你好，我是安正植，网上叫 Zundal。我是一名后端与 AX 工程师，目前在 KB 资产管理的 AI 技术团队，把业务需求落地为真正的 AI 功能。",
    p2: "我从处理高并发流量、运维大规模云基础设施起步；如今用多个 LLM 与基于 MCP、事件驱动的架构来设计公司内部的 AI 智能体生态。我纵观从系统底层到 AI 应用层的整体架构，专注于用可维护的代码证明业务价值。",
    facts: [
      { k: "现在", v: "KB 资产管理 · AI 技术 负责人" },
      { k: "角色", v: "后端 · AX 工程师" },
      { k: "领域", v: "金融 · 云 · AI" },
      { k: "主力", v: "Spring · Python · LLM · MCP" },
      { k: "语言", v: "韩语 · 日语 (JLPT N1) · English" },
    ],
  },
  experience: {
    eyebrow: "经历",
    title: "走过的地方",
    subtitle: "横跨多个领域，从基础设施到 AI。",
    present: "至今",
    items: {
      kbam: {
        company: "KB 资产管理",
        role: "AI 技术团队 · 负责人",
        period: "2025.02 — 至今",
        summary:
          "主导公司的 AX（AI Transformation）。通过 MCP 将多个 LLM（Upstage、Gemini、Claude）与内部系统打通，用 n8n、Airflow 自动化数据管道，并基于 Python、Celery 构建大规模金融时序数据的写入与监控系统。",
      },
      okestro: {
        company: "Okestro",
        role: "云平台研发",
        period: "2023.07 — 2025.02",
        summary:
          "主导金融与公共领域大规模云平台的实时数据处理后端。基于 Kafka、Spring Reactive 构建非阻塞通知系统，为韩亚银行、新韩银行做云资源计量，并用 Vault、Keycloak 搭建统一认证。",
      },
      retail: {
        company: "Retail&Insight · Monthly Kitchen",
        role: "后端 · O2O / 电商",
        period: "2021.11 — 2023.07",
        summary:
          "将 O2O 与电商平台迁移到 MSA 并解决瓶颈。强化支付与广告逻辑，提前引入 TypeScript 保障类型安全，引入 RabbitMQ、Redis 做分布式处理，并落地基于 Jest 的 TDD。",
      },
      wayne: {
        company: "Wayne Technology",
        role: "全栈 · 数据",
        period: "2019.12 — 2021.10",
        summary:
          "用多线程并行处理，把原本超过 8 小时的大规模账本与图像迁移压缩到 1 小时以内。基于 Spring、WebSocket 推出实时征信信息传输 API 与贷款审核平台。",
      },
    },
  },
  projects: {
    eyebrow: "项目",
    title: "亲手做的东西",
    subtitle: "与本职工作无关、我自己构思并上线运营的副业项目。",
    visit: "访问网站",
    items: {
      tabemono: {
        name: "Tabemono",
        desc: "以一顿饭连接人与人的社交餐饮平台。从构思到开发、上线都由我独立完成的全周期项目。",
      },
      novelNote: {
        name: "Novel Note",
        desc: "为读与写的人准备的网页记录与笔记服务。一个安静地收集思绪与文字的空间。",
      },
      mafia: {
        name: "Mafia",
        desc: "和朋友实时游玩的网页狼人杀。人齐了就能开局。",
      },
    },
  },
  writing: {
    eyebrow: "随笔",
    title: "思考的记录",
    subtitle: "做东西时学到的，以及一路上的笔记。",
    readMore: "继续阅读",
    min: "分钟",
    tags: { intro: "introduction", craft: "制作", process: "过程" },
  },
  posts: {
    hello: {
      title: "从这个空间开始",
      excerpt: "为什么又做一个博客？因为记录，终究是送给未来自己的礼物。",
      body: [
        "我又开了一个博客。博客已经够多了，但能用自己的方式存放自己想法的地方，终究还得自己来建。",
        "我会在这里留下做东西时学到的东西、卡住又解开的瞬间，以及还没整理好的思绪碎片。比起完整的结论，我更喜欢过程。",
        "谢谢你的阅读。慢慢地，但持续地，我会把它填满。",
      ],
    },
    buildingWithThree: {
      title: "做一个能被感受的网页",
      excerpt: "3D 与动效不是装饰，它们可以成为讯息。如何在克制中留下一次印象。",
      body: [
        "屏幕是平的，但体验可以是立体的。在这个网站里，我让极光球吸住目光，其余都保持安静。",
        "如果一切都在动，就什么都记不住。印象来自专注。所以我没有选择热闹，而是选了一个清晰的瞬间。",
        "技术只是工具。重要的是人感受到什么、记住什么。",
      ],
    },
    shippingFast: {
      title: "快速发布，快速学习",
      excerpt: "没有完美的第一版。关于小步发布、与用户一起打磨的节奏。",
      body: [
        "一个发布到世界上的小版本，比你打磨很久的第一版教给你更多。用户总会看你没料到的地方。",
        "所以我从小处开始。核心能跑通就发布，看反应再决定下一步。方向来自使用，而不是代码。",
        "快不等于潦草——它意味着把学习的周期变短。",
      ],
    },
  },
  playground: {
    eyebrow: "对待数据的态度",
    title: "让数据可见、可感",
    subtitle:
      "正如成千上万的点汇聚成形，我追求把数据处理得能被看见、被感知，而不只是被存储。",
    hint: "点击：切换形态 · 光标：打散",
  },
  resonance: {
    eyebrow: "声音 × 交互",
    title: "用光，演奏音乐",
    subtitle:
      "选择一首歌，音符会随节拍落下。用键盘 D·F·J·K，或在手机上点击屏幕，踩准时机敲击吧。",
    idle: "请选择一首歌",
    analyzing: "分析中…",
    fullscreen: "全屏",
    exit: "关闭",
    restart: "重玩",
    best: "最佳",
    combo: "连击",
    howto: "D · F · J · K 或点击",
    rotate: "请将设备旋转为横屏",
    speed: "速度",
    judge: { perfect: "完美", good: "不错", miss: "失误" },
    tracks: {
      cloudAbove: { title: "구름 위로" },
      ridingCurrent: { title: "전류를 타고" },
      architect: { title: "Architect of the Invisible" },
    },
  },
  connect: {
    eyebrow: "联系",
    title: "一起做点东西，或只是打个招呼",
    subtitle: "合作、反馈，或者随意问候——都欢迎。",
    copy: "复制邮箱",
    copied: "已复制！",
  },
  footer: {
    built: "用 React · Three.js 构建",
    rights: "版权所有",
  },
  post: {
    back: "返回列表",
    published: "发布于",
    min: "分钟阅读",
    notFound: "未找到文章。",
  },
};

export default zh;
