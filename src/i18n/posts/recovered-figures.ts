/** Invest 5-part + Home Rule 3-part series — recovered from deploy bundle 17ae391 */

const recoveredKo = {
  invest1: {
    title: "경기 사이클 시계",
    caption: "시계 방향으로 도는 네 국면과 유리한 자산.",
    note: "지금이 어느 국면인지 감을 잡으면 자산 배분이 쉬워진다.",
    center: "경기 사이클",
    stages: [
      {
        key: "recovery",
        phase: "회복",
        asset: "주식이 앞서 반등"
      },
      {
        key: "expansion",
        phase: "확장",
        asset: "원자재·부동산 강세"
      },
      {
        key: "slowdown",
        phase: "둔화",
        asset: "현금 비중 확대"
      },
      {
        key: "recession",
        phase: "침체",
        asset: "안전한 채권 선호"
      }
    ]
  },
  invest2: {
    title: "금리 × 환율 매트릭스",
    caption: "두 변수의 방향에 따라 유리한 자산이 갈린다.",
    note: "완벽한 예측이 아니라 방향을 읽는 지도로 쓰세요.",
    rateUp: "금리 상승",
    rateDown: "금리 하락",
    fxStrong: "달러 강세",
    fxWeak: "달러 약세",
    cells: [
      {
        key: "up-strong",
        asset: "달러예금·MMF"
      },
      {
        key: "up-weak",
        asset: "단기채·예금"
      },
      {
        key: "down-strong",
        asset: "해외주식·금"
      },
      {
        key: "down-weak",
        asset: "국내주식·장기채"
      }
    ]
  },
  invest3: {
    title: "안전자산 비교표",
    caption: "안전도·수익률·유동성을 5점 만점으로.",
    note: "당장 쓸 돈일수록 유동성이 높은 쪽을 고르세요.",
    cols: {
      safety: "안전도",
      yield: "수익률",
      liquidity: "유동성"
    },
    items: [
      {
        key: "rp",
        name: "RP",
        desc: "환매조건부채권",
        safety: 4,
        yield: 2,
        liquidity: 5
      },
      {
        key: "note",
        name: "발행어음",
        desc: "대형 증권사 발행",
        safety: 3,
        yield: 3,
        liquidity: 3
      },
      {
        key: "bond",
        name: "채권",
        desc: "국채·회사채",
        safety: 4,
        yield: 3,
        liquidity: 3
      },
      {
        key: "mmf",
        name: "MMF",
        desc: "단기 상품 펀드",
        safety: 4,
        yield: 2,
        liquidity: 4
      }
    ]
  },
  invest4: {
    title: "리스크-수익 지도",
    caption: "오른쪽·위로 갈수록 위험도, 기대수익도 커진다.",
    note: "내가 감당할 위험의 크기가 곧 내 자산의 위치입니다.",
    xLabel: "리스크",
    yLabel: "기대수익",
    points: [
      {
        key: "stock",
        name: "주식",
        x: 85,
        y: 82,
        risk: "고위험",
        ret: "연 10~20% 기대"
      },
      {
        key: "etf",
        name: "ETF",
        x: 52,
        y: 58,
        risk: "중위험",
        ret: "연 6~12% 기대"
      },
      {
        key: "els",
        name: "ELS",
        x: 58,
        y: 48,
        risk: "중위험(낙인 주의)",
        ret: "연 4~8% 기대"
      }
    ]
  },
  invest5: {
    title: "성향별 포트폴리오",
    caption: "같은 돈도 성향에 따라 이렇게 나뉜다 (%).",
    note: "밤에 편히 잘 수 있는 배분이 나에게 가장 좋은 배분.",
    legend: {
      cash: "현금성",
      safe: "안전자산",
      growth: "성장자산"
    },
    scenarios: [
      {
        key: "conservative",
        name: "보수적",
        cash: 40,
        safe: 45,
        growth: 15
      },
      {
        key: "balanced",
        name: "중립형",
        cash: 20,
        safe: 40,
        growth: 40
      },
      {
        key: "aggressive",
        name: "공격적",
        cash: 10,
        safe: 20,
        growth: 70
      }
    ]
  },
  homeRule1: {
    title: "한눈에 보는 3대 규제",
    caption: "DSR·LTV·토허제는 각각 다른 것을 본다.",
    note: "세 개의 문을 모두 통과해야 계약이 가능하다.",
    items: [
      {
        key: "dsr",
        name: "DSR",
        full: "총부채원리금상환비율",
        metric: "연봉의 40%",
        gist: "내 소득을 본다",
        detail: "1년 빚 상환액이 연봉의 40%를 넘으면 안 됨 (모든 대출 합산)"
      },
      {
        key: "ltv",
        name: "LTV",
        full: "주택담보인정비율",
        metric: "집값의 70%",
        gist: "집값을 본다",
        detail: "집값의 최대 70%까지 대출, 나머지는 자기자본"
      },
      {
        key: "toheo",
        name: "토허제",
        full: "토지거래허가제",
        metric: "실거주 필수",
        gist: "실거주를 본다",
        detail: "허가 구역은 실거주 약속 필요, 갭투자 차단"
      }
    ]
  },
  homeRule2: {
    title: "대출 한도 계산 흐름",
    caption: "연소득 5,000만 원 예시로 따라가 보세요.",
    note: "DSR 한도와 LTV 한도 중 더 낮은 쪽이 내 최종 대출 한도입니다.",
    steps: [
      {
        label: "연소득 확인",
        sub: "예) 5,000만 원"
      },
      {
        label: "DSR 한도",
        sub: "소득의 40% → 연 2,000만 원"
      },
      {
        label: "기존 빚 차감",
        sub: "신용대출·할부 빼기"
      },
      {
        label: "LTV 비교",
        sub: "집값의 70%와 견주기"
      },
      {
        label: "한도 확정",
        sub: "둘 중 낮은 금액",
        final: true
      }
    ]
  },
  homeRule3: {
    title: "안전한 매수 5단계",
    caption: "순서대로 밟는 게 핵심.",
    note: "순서를 지키는 것만으로도 대부분의 사고를 막을 수 있습니다.",
    mostImportant: "가장 중요",
    steps: [
      {
        key: "budget",
        label: "예산 확인",
        sub: "내 현금 + 대출 한도 = 진짜 살 수 있는 금액. 취득세·중개료·이사비도 미리."
      },
      {
        key: "search",
        label: "매물 탐색",
        sub: "예산 안에서만. 등기부등본으로 집주인·근저당 확인."
      },
      {
        key: "prescreen",
        label: "가심사",
        sub: "계약 전 은행에 대출 가능액 확인. 건너뛰면 계약금을 날릴 수 있어요.",
        star: true
      },
      {
        key: "contract",
        label: "계약",
        sub: "특약으로 안전장치: 근저당 말소·대출 미승인 시 계약금 반환."
      },
      {
        key: "movein",
        label: "대출 실행·입주",
        sub: "잔금일에 대출 실행, 소유권 이전 + 전입신고 + 확정일자."
      }
    ]
  }
};

const recoveredEn = {
  invest1: {
    title: "The business-cycle clock",
    caption: "Four phases turning clockwise, and the asset each favors.",
    note: "Sense the phase and asset allocation gets much easier.",
    center: "Business cycle",
    stages: [
      {
        key: "recovery",
        phase: "Recovery",
        asset: "Stocks rebound first"
      },
      {
        key: "expansion",
        phase: "Expansion",
        asset: "Commodities & real estate"
      },
      {
        key: "slowdown",
        phase: "Slowdown",
        asset: "Raise cash"
      },
      {
        key: "recession",
        phase: "Recession",
        asset: "Safe bonds favored"
      }
    ]
  },
  invest2: {
    title: "Rates × currency matrix",
    caption: "The favored asset shifts with the direction of each.",
    note: "Use it as a map to read direction, not to predict exactly.",
    rateUp: "Rates up",
    rateDown: "Rates down",
    fxStrong: "Strong dollar",
    fxWeak: "Weak dollar",
    cells: [
      {
        key: "up-strong",
        asset: "Dollar deposits · MMF"
      },
      {
        key: "up-weak",
        asset: "Short-term bonds · deposits"
      },
      {
        key: "down-strong",
        asset: "Overseas stocks · gold"
      },
      {
        key: "down-weak",
        asset: "Domestic stocks · long bonds"
      }
    ]
  },
  invest3: {
    title: "Safe-asset scorecard",
    caption: "Safety, yield and liquidity, out of 5.",
    note: "The sooner you'll spend it, the higher liquidity you want.",
    cols: {
      safety: "Safety",
      yield: "Yield",
      liquidity: "Liquidity"
    },
    items: [
      {
        key: "rp",
        name: "RP",
        desc: "Repurchase agreement",
        safety: 4,
        yield: 2,
        liquidity: 5
      },
      {
        key: "note",
        name: "Discount note",
        desc: "Big-brokerage issued",
        safety: 3,
        yield: 3,
        liquidity: 3
      },
      {
        key: "bond",
        name: "Bonds",
        desc: "Government · corporate",
        safety: 4,
        yield: 3,
        liquidity: 3
      },
      {
        key: "mmf",
        name: "MMF",
        desc: "Short-term fund",
        safety: 4,
        yield: 2,
        liquidity: 4
      }
    ]
  },
  invest4: {
    title: "Risk–return map",
    caption: "Further right and up means more risk and more expected return.",
    note: "The risk you can stomach is where your money belongs.",
    xLabel: "Risk",
    yLabel: "Expected return",
    points: [
      {
        key: "stock",
        name: "Stocks",
        x: 85,
        y: 82,
        risk: "High risk",
        ret: "~10–20% / yr"
      },
      {
        key: "etf",
        name: "ETF",
        x: 52,
        y: 58,
        risk: "Medium risk",
        ret: "~6–12% / yr"
      },
      {
        key: "els",
        name: "ELS",
        x: 58,
        y: 48,
        risk: "Medium (knock-in)",
        ret: "~4–8% / yr"
      }
    ]
  },
  invest5: {
    title: "Portfolios by temperament",
    caption: "The same money splits differently by temperament (%).",
    note: "The allocation that lets you sleep is the best one for you.",
    legend: {
      cash: "Cash",
      safe: "Safe assets",
      growth: "Growth assets"
    },
    scenarios: [
      {
        key: "conservative",
        name: "Conservative",
        cash: 40,
        safe: 45,
        growth: 15
      },
      {
        key: "balanced",
        name: "Balanced",
        cash: 20,
        safe: 40,
        growth: 40
      },
      {
        key: "aggressive",
        name: "Aggressive",
        cash: 10,
        safe: 20,
        growth: 70
      }
    ]
  },
  homeRule1: {
    title: "The three rules at a glance",
    caption: "DSR, LTV, and the permit each look at something different.",
    note: "You must pass all three doors before you can sign.",
    items: [
      {
        key: "dsr",
        name: "DSR",
        full: "Debt Service Ratio",
        metric: "40% of income",
        gist: "Looks at your income",
        detail: "Yearly debt repayment can't exceed 40% of income (all loans counted)"
      },
      {
        key: "ltv",
        name: "LTV",
        full: "Loan-to-Value",
        metric: "70% of price",
        gist: "Looks at the price",
        detail: "Borrow up to 70% of the price; cover the rest with your own money"
      },
      {
        key: "toheo",
        name: "Permit",
        full: "Land-transaction permit",
        metric: "Must live there",
        gist: "Looks at residence",
        detail: "Permit zones require a promise to live there; blocks gap investing"
      }
    ]
  },
  homeRule2: {
    title: "How a loan limit is found",
    caption: "Follow the worked example for a 50-million-won income.",
    note: "Your final limit is the lower of the DSR limit and the LTV limit.",
    steps: [
      {
        label: "Annual income",
        sub: "e.g. 50 million won"
      },
      {
        label: "DSR ceiling",
        sub: "40% → 20 million / year"
      },
      {
        label: "Subtract debt",
        sub: "credit loans, installments"
      },
      {
        label: "Compare LTV",
        sub: "vs 70% of the price"
      },
      {
        label: "Final limit",
        sub: "the lower figure",
        final: true
      }
    ]
  },
  homeRule3: {
    title: "The safe 5-step order",
    caption: "Doing it in order is the whole point.",
    note: "Just keeping the order prevents most disasters.",
    mostImportant: "Most important",
    steps: [
      {
        key: "budget",
        label: "Confirm budget",
        sub: "Cash + loan limit = what you can really spend. Budget tax, fees, moving too."
      },
      {
        key: "search",
        label: "Find a property",
        sub: "Stay within budget. Check the register for owner and liens."
      },
      {
        key: "prescreen",
        label: "Pre-screening",
        sub: "Confirm the loan with the bank before signing. Skip it and you may lose your deposit.",
        star: true
      },
      {
        key: "contract",
        label: "Contract",
        sub: "Protect yourself with clauses: clear liens, refund deposit if the loan falls through."
      },
      {
        key: "movein",
        label: "Loan & move-in",
        sub: "Draw the loan on the balance date; transfer ownership + register residence."
      }
    ]
  }
};

const recoveredJa = {
  invest1: {
    title: "景気サイクルの時計",
    caption: "時計回りに巡る4局面と、有利な資産。",
    note: "今どの局面かの感覚があれば、資産配分がぐっと楽になる。",
    center: "景気サイクル",
    stages: [
      {
        key: "recovery",
        phase: "回復",
        asset: "株が先に反発"
      },
      {
        key: "expansion",
        phase: "拡張",
        asset: "原資材・不動産が強い"
      },
      {
        key: "slowdown",
        phase: "減速",
        asset: "現金比率を拡大"
      },
      {
        key: "recession",
        phase: "後退",
        asset: "安全な債券を選好"
      }
    ]
  },
  invest2: {
    title: "金利 × 為替マトリクス",
    caption: "二つの変数の方向で有利な資産が分かれる。",
    note: "完璧な予測ではなく、方向を読む地図として使いましょう。",
    rateUp: "金利上昇",
    rateDown: "金利低下",
    fxStrong: "ドル高",
    fxWeak: "ドル安",
    cells: [
      {
        key: "up-strong",
        asset: "ドル預金・MMF"
      },
      {
        key: "up-weak",
        asset: "短期債・預金"
      },
      {
        key: "down-strong",
        asset: "海外株・金"
      },
      {
        key: "down-weak",
        asset: "国内株・長期債"
      }
    ]
  },
  invest3: {
    title: "安全資産の比較表",
    caption: "安全度・利回り・流動性を5点満点で。",
    note: "すぐ使うお金ほど流動性の高い方を選んで。",
    cols: {
      safety: "安全度",
      yield: "利回り",
      liquidity: "流動性"
    },
    items: [
      {
        key: "rp",
        name: "RP",
        desc: "買戻条件付債券",
        safety: 4,
        yield: 2,
        liquidity: 5
      },
      {
        key: "note",
        name: "発行手形",
        desc: "大手証券が発行",
        safety: 3,
        yield: 3,
        liquidity: 3
      },
      {
        key: "bond",
        name: "債券",
        desc: "国債・社債",
        safety: 4,
        yield: 3,
        liquidity: 3
      },
      {
        key: "mmf",
        name: "MMF",
        desc: "短期商品ファンド",
        safety: 4,
        yield: 2,
        liquidity: 4
      }
    ]
  },
  invest4: {
    title: "リスク-収益の地図",
    caption: "右・上へ行くほどリスクも期待収益も大きい。",
    note: "自分が耐えられるリスクの大きさが、自分の資産の位置。",
    xLabel: "リスク",
    yLabel: "期待収益",
    points: [
      {
        key: "stock",
        name: "株式",
        x: 85,
        y: 82,
        risk: "高リスク",
        ret: "年10~20%期待"
      },
      {
        key: "etf",
        name: "ETF",
        x: 52,
        y: 58,
        risk: "中リスク",
        ret: "年6~12%期待"
      },
      {
        key: "els",
        name: "ELS",
        x: 58,
        y: 48,
        risk: "中リスク(ノックイン注意)",
        ret: "年4~8%期待"
      }
    ]
  },
  invest5: {
    title: "性向別ポートフォリオ",
    caption: "同じお金も性向でこう分かれる（%）。",
    note: "夜に安心して眠れる配分が、自分に一番良い配分。",
    legend: {
      cash: "現金性",
      safe: "安全資産",
      growth: "成長資産"
    },
    scenarios: [
      {
        key: "conservative",
        name: "保守的",
        cash: 40,
        safe: 45,
        growth: 15
      },
      {
        key: "balanced",
        name: "中立型",
        cash: 20,
        safe: 40,
        growth: 40
      },
      {
        key: "aggressive",
        name: "攻撃的",
        cash: 10,
        safe: 20,
        growth: 70
      }
    ]
  },
  homeRule1: {
    title: "ひと目でわかる3大規制",
    caption: "DSR・LTV・許可制は、それぞれ別のものを見る。",
    note: "3つの扉をすべて通って初めて契約できる。",
    items: [
      {
        key: "dsr",
        name: "DSR",
        full: "総負債元利金返済比率",
        metric: "年収の40%",
        gist: "所得を見る",
        detail: "1年の返済額が年収の40%を超えてはいけない（全ローン合算）"
      },
      {
        key: "ltv",
        name: "LTV",
        full: "住宅担保認定比率",
        metric: "家の値段の70%",
        gist: "家の値段を見る",
        detail: "値段の最大70%まで融資、残りは自己資金"
      },
      {
        key: "toheo",
        name: "許可制",
        full: "土地取引許可制",
        metric: "実居住が必須",
        gist: "実居住を見る",
        detail: "許可区域は実居住の約束が必要、ギャップ投資を防ぐ"
      }
    ]
  },
  homeRule2: {
    title: "融資限度の計算の流れ",
    caption: "年収5,000万ウォンの例で追ってみましょう。",
    note: "DSR限度とLTV限度のうち低いほうが最終的な融資限度です。",
    steps: [
      {
        label: "年収を確認",
        sub: "例）5,000万ウォン"
      },
      {
        label: "DSR限度",
        sub: "所得の40% → 年2,000万"
      },
      {
        label: "既存の借金を差引",
        sub: "信用ローン・分割払い"
      },
      {
        label: "LTVと比較",
        sub: "家の値段の70%と"
      },
      {
        label: "限度を確定",
        sub: "低いほうの金額",
        final: true
      }
    ]
  },
  homeRule3: {
    title: "安全な購入5ステップ",
    caption: "順番どおりに踏むのが肝心。",
    note: "順番を守るだけで、ほとんどの事故を防げます。",
    mostImportant: "いちばん重要",
    steps: [
      {
        key: "budget",
        label: "予算確認",
        sub: "現金 + 融資限度 = 本当に買える金額。取得税・仲介料・引越し費も先に。"
      },
      {
        key: "search",
        label: "物件探し",
        sub: "予算の範囲内だけ。登記簿謄本で所有者・根抵当を確認。"
      },
      {
        key: "prescreen",
        label: "事前審査",
        sub: "契約前に銀行で融資可能額を確認。飛ばすと手付金を失うことも。",
        star: true
      },
      {
        key: "contract",
        label: "契約",
        sub: "特約で安全策：根抵当の抹消・ローン未承認なら手付金返還。"
      },
      {
        key: "movein",
        label: "ローン実行・入居",
        sub: "残金日にローン実行、所有権移転 + 転入届 + 確定日付。"
      }
    ]
  }
};

const recoveredZh = {
  invest1: {
    title: "经济周期时钟",
    caption: "顺时针轮转的四个阶段，以及各自有利的资产。",
    note: "对当前阶段有感觉，资产配置就轻松多了。",
    center: "经济周期",
    stages: [
      {
        key: "recovery",
        phase: "复苏",
        asset: "股票率先反弹"
      },
      {
        key: "expansion",
        phase: "扩张",
        asset: "原材料·房地产走强"
      },
      {
        key: "slowdown",
        phase: "放缓",
        asset: "提高现金比重"
      },
      {
        key: "recession",
        phase: "衰退",
        asset: "偏好安全债券"
      }
    ]
  },
  invest2: {
    title: "利率 × 汇率矩阵",
    caption: "随两个变量的方向，有利资产各不相同。",
    note: "把它当作读方向的地图，而非精确预测。",
    rateUp: "利率上升",
    rateDown: "利率下降",
    fxStrong: "美元走强",
    fxWeak: "美元走弱",
    cells: [
      {
        key: "up-strong",
        asset: "美元存款·MMF"
      },
      {
        key: "up-weak",
        asset: "短期债·存款"
      },
      {
        key: "down-strong",
        asset: "海外股·黄金"
      },
      {
        key: "down-weak",
        asset: "国内股·长期债"
      }
    ]
  },
  invest3: {
    title: "安全资产对比表",
    caption: "安全度·收益率·流动性，满分5分。",
    note: "越快要用的钱，越选流动性高的。",
    cols: {
      safety: "安全度",
      yield: "收益率",
      liquidity: "流动性"
    },
    items: [
      {
        key: "rp",
        name: "RP",
        desc: "回购协议",
        safety: 4,
        yield: 2,
        liquidity: 5
      },
      {
        key: "note",
        name: "发行票据",
        desc: "大型券商发行",
        safety: 3,
        yield: 3,
        liquidity: 3
      },
      {
        key: "bond",
        name: "债券",
        desc: "国债·公司债",
        safety: 4,
        yield: 3,
        liquidity: 3
      },
      {
        key: "mmf",
        name: "MMF",
        desc: "短期产品基金",
        safety: 4,
        yield: 2,
        liquidity: 4
      }
    ]
  },
  invest4: {
    title: "风险-收益地图",
    caption: "越往右、往上，风险和预期收益都越大。",
    note: "你能承受的风险大小，就是你资产的位置。",
    xLabel: "风险",
    yLabel: "预期收益",
    points: [
      {
        key: "stock",
        name: "股票",
        x: 85,
        y: 82,
        risk: "高风险",
        ret: "年化约10~20%"
      },
      {
        key: "etf",
        name: "ETF",
        x: 52,
        y: 58,
        risk: "中风险",
        ret: "年化约6~12%"
      },
      {
        key: "els",
        name: "ELS",
        x: 58,
        y: 48,
        risk: "中风险(注意敲入)",
        ret: "年化约4~8%"
      }
    ]
  },
  invest5: {
    title: "按性格分的组合",
    caption: "同样的钱，按性格这样分（%）。",
    note: "能让你安心入睡的配置，才是最适合你的。",
    legend: {
      cash: "现金类",
      safe: "安全资产",
      growth: "成长资产"
    },
    scenarios: [
      {
        key: "conservative",
        name: "保守",
        cash: 40,
        safe: 45,
        growth: 15
      },
      {
        key: "balanced",
        name: "中立",
        cash: 20,
        safe: 40,
        growth: 40
      },
      {
        key: "aggressive",
        name: "激进",
        cash: 10,
        safe: 20,
        growth: 70
      }
    ]
  },
  homeRule1: {
    title: "一图看懂三大规制",
    caption: "DSR、LTV、许可制各看不同的东西。",
    note: "三道门全过了，才能签约。",
    items: [
      {
        key: "dsr",
        name: "DSR",
        full: "总负债本息偿还比率",
        metric: "年收入的40%",
        gist: "看收入",
        detail: "一年还款额不能超过年收入的40%（所有贷款合算）"
      },
      {
        key: "ltv",
        name: "LTV",
        full: "房屋抵押认定比率",
        metric: "房价的70%",
        gist: "看房价",
        detail: "最多贷房价的70%，其余用自有资金"
      },
      {
        key: "toheo",
        name: "许可制",
        full: "土地交易许可制",
        metric: "必须自住",
        gist: "看是否自住",
        detail: "许可区域需承诺自住，堵住差价投资"
      }
    ]
  },
  homeRule2: {
    title: "贷款额度计算流程",
    caption: "以年收入5,000万韩元为例走一遍。",
    note: "DSR 额度与 LTV 额度中较低的一个，才是你的最终额度。",
    steps: [
      {
        label: "确认年收入",
        sub: "例）5,000万"
      },
      {
        label: "DSR 上限",
        sub: "收入的40% → 年2,000万"
      },
      {
        label: "扣除已有债务",
        sub: "信用贷·分期"
      },
      {
        label: "对比 LTV",
        sub: "与房价的70%相比"
      },
      {
        label: "确定额度",
        sub: "取较低者",
        final: true
      }
    ]
  },
  homeRule3: {
    title: "安全买房五步",
    caption: "按顺序走是关键。",
    note: "光是守住顺序，就能避免大多数事故。",
    mostImportant: "最重要",
    steps: [
      {
        key: "budget",
        label: "确认预算",
        sub: "现金 + 贷款额度 = 真正能花的钱。取得税、中介费、搬家费也先算上。"
      },
      {
        key: "search",
        label: "找房",
        sub: "只看预算内的房。用登记簿誊本确认房主和抵押。"
      },
      {
        key: "prescreen",
        label: "预审",
        sub: "签约前先向银行确认可贷额。跳过这步可能赔上定金。",
        star: true
      },
      {
        key: "contract",
        label: "签约",
        sub: "用特约上保险：注销抵押、贷款未批则退还定金。"
      },
      {
        key: "movein",
        label: "放款·入住",
        sub: "尾款日放款，办产权过户 + 迁入登记 + 确定日期。"
      }
    ]
  }
};

export const RECOVERED_FIGURES = {
  ko: recoveredKo,
  en: recoveredEn,
  ja: recoveredJa,
  zh: recoveredZh,
};
