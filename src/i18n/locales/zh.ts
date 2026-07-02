import type { Dict } from "./ko";
import { CHEONGYAK_POSTS, CHEONGYAK_FIGURES } from "../posts/cheongyak";

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
    tags: {
      intro: "introduction",
      craft: "制作",
      process: "过程",
      mind: "心智",
      life: "生活",
    },
  },
  posts: {
    ...CHEONGYAK_POSTS.zh,
    sensation: {
      title: "世界如何抵达我 — 第一部·感觉",
      excerpt:
        "我们从未直接看见世界，只看见眼睛和耳朵翻译过的信号。关于第一道关口——感觉的故事。",
      body: [
        "就在你读着这些字的此刻，光正撞在你眼球深处的视网膜上碎裂开来。其实我们从未『直接』与世界相遇。我们所经验的一切，都是经过感觉器官这位翻译之后的风景。",
        "感觉(sensation)是这场翻译的第一步——外部世界的物理事件(光的波长、空气的颤动、皮肤上的压力)抵达身体受体的那一刻。耐人寻味的是，每个感官能接收的刺激种类都被严格限定。眼睛听不见声音，耳朵看不见光。",
        "::figure:sensesGateway::",
        "五道关口各说一种语言。眼睛读电磁波，耳朵读振动，鼻子和舌头读化学物质。然而当这些不同的输入抵达大脑时，它们都已变成同一种东西：电信号。",
        "这个翻译过程叫作换能(transduction)——物理刺激被转换成神经能理解的电语言的瞬间。光、声音、温暖，一旦被译成神经细胞的语言，就不再是光或声音，只是信号而已。",
        "::figure:transduction::",
        "这里有一条冷酷的规则。刺激若不能越过某个『阈值』，便什么也不会发生。神经不会半推半就地反应。够强，它就发放；否则，沉默——要么全有，要么全无。",
        "所以我们以为自己『看见』的，并非光本身，而是光留下的电痕迹。世界总是隔了一层才抵达我们。那么，这束信号又如何成为『意义』？那是第二部·知觉的故事。",
      ],
    },
    perception: {
      title: "世界如何抵达我 — 第二部·知觉",
      excerpt:
        "大脑不只是接收信号，而是在『解释』它。为何看着同一束光，两个人会看见不同的东西。",
      body: [
        "第一部里，我们看见世界被翻译成电信号送进大脑。可一束信号本身还没有任何意义。『意义』诞生的地方，就是知觉(perception)。",
        "知觉同时从两个方向发生。一股从感觉数据出发向上流动，另一股从我们的期待与经验出发向下流动。",
        "::figure:bottomUpTopDown::",
        "若只有自下而上的加工，我们每次都得像第一次看见世界那样吃力地去解释。多亏自上而下的加工，我们能凭语境读出模糊的字迹，也能认出被遮去一半的脸。大脑是一台勤勉的猜测机器。",
        "这种猜测在某个瞬间显得最为鲜明——当大脑看着零散的碎片，自顾自地拼出一个『整体』时。二十世纪初的格式塔心理学家把这种倾向归纳成了几条原理。",
        "::figure:gestalt::",
        "几个点连成一群，断开的线连成一个图形。我们看见的比实际存在的更多，因为大脑会填补空白。错觉之所以神奇也是同样的道理——那不是眼睛的失误，而是大脑过于尽职的解释。",
        "所以『看见』不是被动地接收，而是不断提出假设、再加以验证的主动工作。同一束信号，因接收的人和情境不同，会成为不同的风景。那么，这样被解释过的世界又会留在哪里？故事在第三部·记忆中继续。",
      ],
    },
    cognition: {
      title: "世界如何抵达我 — 第三部·记忆与认知",
      excerpt:
        "被解释过的世界留在何处。作为门卫的注意，以及记忆的三个房间。",
      body: [
        "我们用感觉接纳世界(第一部)，用知觉解释它(第二部)。现在是最后一问：这一切经验被存放在哪里，又如何被重新取出？",
        "并非一切都会留下。每一刻都有无数刺激倾泻而下，但其中大半不到一秒便消失了。在这里起决定作用的是注意(attention)。注意是那位门卫，决定什么能被放进记忆的下一个房间。",
        "::figure:memoryFlow::",
        "心理学家阿特金森与希夫林把记忆画成三个房间：几乎所有输入都短暂停留的感觉记忆，此刻被我们有意识地握住的工作记忆，以及近乎无限保存的长期记忆。",
        "最窄的房间位于中间。工作记忆一次只能放上约七个——更确切地说，是7±2个项目。就在你读这句话的此刻，你的工作记忆也正飞快地填满又清空。",
        "::figure:workingMemory::",
        "把这张窄桌子拓宽的诀窍是『打包』。零散时七个就是上限，可一旦组成有意义的块，能装下的就多得多。把电话号码分成三截来记，棋手一眼记住整个棋盘，靠的都是同一个原理。",
        "只有在工作记忆里被充分咀嚼(复述)过的信息，才会迁入长期记忆并长久留存。需要时再被取回工作记忆。记忆与其说是一座静止的仓库，不如说更像一张不断书写、不断改写的工作台。",
        "光成为信号(第一部)，信号成为意义(第二部)，意义成为记忆(第三部)——在这趟漫长旅程的尽头，我们才终于能说『世界抵达了我』。我们与其说在看世界，不如说在每一刻重新把它建造出来。",
      ],
    },
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
  figures: {
    ...CHEONGYAK_FIGURES.zh,
    sensesGateway: {
      title: "感觉的五道关口",
      caption: "每个器官只接收属于自己的刺激。挑一个看看。",
      cols: { organ: "器官", receptor: "受体", stimulus: "刺激" },
      items: [
        {
          key: "sight",
          label: "视觉",
          organ: "眼 · 视网膜",
          receptor: "光感受器(视杆 · 视锥细胞)",
          stimulus: "光 — 电磁波",
        },
        {
          key: "hearing",
          label: "听觉",
          organ: "耳 · 耳蜗",
          receptor: "毛细胞",
          stimulus: "空气的振动",
        },
        {
          key: "touch",
          label: "触觉",
          organ: "皮肤",
          receptor: "机械 · 温度感受器",
          stimulus: "压力 · 温度",
        },
        {
          key: "smell",
          label: "嗅觉",
          organ: "鼻 · 嗅上皮",
          receptor: "嗅觉受体",
          stimulus: "空气中的分子",
        },
        {
          key: "taste",
          label: "味觉",
          organ: "舌 · 味蕾",
          receptor: "味觉细胞",
          stimulus: "溶解的化学物质",
        },
      ],
    },
    transduction: {
      title: "换能 — 刺激成为信号的瞬间",
      caption: "物理事件被译成神经的电语言。",
      note: "未越过阈值的刺激不会成为信号——要么全有，要么全无(all-or-none)。",
      steps: [
        { label: "物理刺激", sub: "光 · 声 · 压力" },
        { label: "受体", sub: "感觉细胞接收" },
        { label: "阈值", sub: "够强则发放" },
        { label: "动作电位", sub: "生成电信号" },
        { label: "大脑", sub: "信号抵达" },
      ],
    },
    bottomUpTopDown: {
      title: "在两个方向相遇的知觉",
      caption: "感觉数据与期待在中间相遇。",
      note: "二者不竞争而协作——数据不足时，期待来填补。",
      center: "知觉",
      bottomUp: {
        label: "自下而上",
        sub: "从感觉数据出发",
        ex: "点 · 线 · 色 → 形状",
      },
      topDown: {
        label: "自上而下",
        sub: "从期待与语境出发",
        ex: "语境 → 模糊的字也能读出",
      },
    },
    gestalt: {
      title: "格式塔 — 大脑看见整体",
      caption: "点按原理来比较。",
      principles: [
        { key: "proximity", label: "邻近", desc: "靠得近的会被归成一团。" },
        { key: "similarity", label: "相似", desc: "长得像的会被归成一群。" },
        { key: "continuity", label: "连续", desc: "比起断片，更愿连成顺滑的走向。" },
        { key: "closure", label: "闭合", desc: "填补空缺，看成完整的形状。" },
      ],
    },
    memoryFlow: {
      title: "记忆的三个房间",
      caption: "把指针停在某一阶段上。注意扮演门卫。",
      stages: [
        { key: "sensory", label: "感觉记忆", sub: "不到一秒 · 几乎全部输入" },
        { key: "working", label: "工作记忆", sub: "数十秒 · 7±2 个" },
        { key: "longterm", label: "长期记忆", sub: "长久 · 实际上无限" },
      ],
      arrows: { attention: "注意", rehearsal: "复述", retrieval: "提取", forget: "遗忘" },
    },
    workingMemory: {
      title: "工作记忆的窄桌",
      caption: "一次大约只放得下七个。打包之后能放更多。",
      raw: "零散",
      chunked: "打包成块",
      limit: "≈ 7±2",
      note: "组块(chunking)：11 位数字一旦分成三块，也能轻松记住。",
      groups: ["010", "2451", "8893"],
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
