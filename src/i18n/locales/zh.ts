import type { Dict } from "./ko";

const zh: Dict = {
  nav: {
    about: "关于",
    projects: "项目",
    writing: "随笔",
    connect: "联系",
  },
  hero: {
    eyebrow: "开发者 · 创造者 · 记录者",
    name: "安正植",
    role: "在动手中思考",
    tagline:
      "我喜欢把想法变成屏幕上能真正触碰的东西——从小工具到有趣的体验，都亲手做、亲手学。",
    ctaProjects: "查看作品",
    ctaContact: "联系我",
    scroll: "向下滚动",
  },
  about: {
    eyebrow: "关于",
    title: "在代码与好奇之间",
    p1: "你好，我是安正植，网上叫 Zundal。我享受快速做出东西、再把它打磨成人们真正爱用的产品的过程。",
    p2: "我主要做 Web，用 React 和 TypeScript，并相信交互与细节会改变体验。遇到新工具，我会先做点小东西试试。",
    facts: [
      { k: "根基", v: "React · TypeScript" },
      { k: "兴趣", v: "交互 · 3D · 工具" },
      { k: "方式", v: "先发布，再打磨" },
      { k: "位置", v: "在线任何地方" },
    ],
  },
  projects: {
    eyebrow: "项目",
    title: "做过的东西",
    subtitle: "我从构思到实现、独立完成的网站与实验。",
    visit: "访问网站",
    items: {
      tabemono: {
        name: "Tabemono",
        desc: "记录并回顾饮食的美食日记。轻盈而愉快的日常记录工具。",
      },
      novelNote: {
        name: "Novel Note",
        desc: "为读与写的人准备的笔记。一个安静地收集思绪与文字的空间。",
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
