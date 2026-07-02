/**
 * Recovered from gh-pages deploy bundle (/tmp/deploy.js).
 * Posts: invest1–5, homeRule1–3 (housing & finance series).
 * Writing: non-standard keys (series, search, filter tags, etc.).
 *
 * Merge into locale files:
 *   posts: { ...RECOVERED_POSTS.ko }
 *   writing: { ...existing, ...RECOVERED_WRITING.ko }
 */

export type RecoveredPost = {
  title: string;
  excerpt: string;
  body: string[];
};

export type RecoveredWriting = {
  all: string;
  searchPlaceholder: string;
  empty: string;
  seriesCount: string;
  series: {
    homeRule: { title: string; desc: string };
    invest: { title: string; desc: string };
  };
  tags: {
    housing: string;
    finance: string;
  };
};

export const RECOVERED_POSTS: Record<"ko" | "en" | "ja" | "zh", Record<string, RecoveredPost>> = {
  ko: {
    invest1: {
      title: "현금 투자 전략 1부. 시장 국면 읽기",
      excerpt: "매달 조금씩 남는 돈이 통장에 쌓이기만 한다면. 종목보다 '시장 국면'부터 읽는 법.",
      body: [
        "매달 월급 받아서 생활비 쓰고 나면 조금씩은 남죠. 그런데 그 돈이 통장에 그냥 쌓이기만 하고, '이걸 뭘 어떻게 해야 하나' 싶어 선뜻 손대지 못하는 분들이 많습니다. 주식을 사자니 지금이 고점 같고, 가만히 두자니 물가에 조금씩 녹는 것 같고요.",
        "이럴 때 가장 먼저 필요한 건 종목 고르는 눈이 아니라 '지금이 어떤 시기인지' 읽는 감각입니다. 경기가 사계절처럼 돈다는 걸 알면, 조급함이 한결 줄어들거든요.",
        "경기 사이클은 크게 네 계절로 나뉩니다. 바닥을 찍고 서서히 올라오는 회복기, 기업 실적과 소비가 살아나는 확장기, 성장 속도가 꺾이는 둔화기, 그리고 전반적으로 위축되는 침체기. 완벽히 규칙적이진 않아도 이 흐름은 순서대로 반복됩니다.",
        "::figure:invest1Figure::",
        "그리고 계절마다 빛나는 자산이 다릅니다. 회복기엔 주식이 가장 먼저 반등하고, 확장기엔 원자재나 부동산이 힘을 냅니다. 둔화기엔 현금 비중을 늘려 다음 기회를 준비하고, 침체기엔 안전한 채권이 방패가 되죠. '무조건 주식', '무조건 예금'이 아니라 계절에 맞게 무게를 옮기는 겁니다.",
        "여기서 자연스럽게 드는 의문. '그래서 지금이 어느 계절인지 어떻게 아나요?' 사실 이게 제일 어렵습니다. 하지만 몇 가지 신호를 보면 대략의 감은 잡을 수 있어요.",
        "대표적인 게 금리 방향, 실업률, 그리고 PMI(구매관리자지수)입니다. 중앙은행이 금리를 내리기 시작하면 경기를 살리려는 신호라 회복의 초입일 가능성이 크고, 실업률이 바닥에서 슬슬 오르기 시작하면 둔화의 신호일 수 있습니다. PMI가 50을 넘으면 경기 확장, 밑돌면 위축으로 읽고요. 뉴스에 자주 나오는 이 지표들만 흘려듣지 않아도 계절 감각이 생깁니다.",
        "다만 한 가지. 이 신호들은 '예언'이 아니라 '참고'입니다. 시장은 종종 경기보다 먼저 움직이고, 전문가도 국면을 자주 틀려요. 그러니 신호를 맹신해 전 재산을 한쪽에 거는 건 금물입니다.",
        "국면을 읽는 진짜 이유는 '지금 뭘 살까'를 콕 집기 위해서가 아니라, '지금은 어떤 전략을 쓸 때인가'를 판단하기 위해서예요. 공격적으로 갈 때인지, 지킬 때인지 말이죠. 다음 편에서는 이 판단에 가장 강력한 힌트를 주는 두 가지, 금리와 환율이 자산에 어떤 영향을 주는지 하나씩 뜯어보겠습니다.",
      ],
    },
    invest2: {
      title: "현금 투자 전략 2부. 금리와 환율의 영향",
      excerpt: "금리 올랐다는 뉴스, 나랑 무슨 상관인가 싶었다면. 내 수익률에 직결되는 두 신호 읽는 법.",
      body: [
        "'한국은행이 기준금리를 인상했습니다.' 뉴스에서 이런 말이 나올 때, '그래서 나랑 무슨 상관이지?' 하고 넘긴 적 있으실 거예요. 그런데 이 한 문장이 사실은 내 예금, 내 대출, 그리고 내 투자 수익률 전부에 영향을 줍니다.",
        "금리와 환율은 시장이라는 큰 배를 움직이는 방향키 같은 거예요. 방향만 읽을 줄 알아도 '지금 어디에 돈을 두는 게 나은가'에 대한 감이 확 잡힙니다.",
        "먼저 금리. 금리가 오르면 이미 발행돼 있던 채권의 가격은 떨어집니다. 새로 나오는 채권이 이자를 더 주니, 이자가 적은 옛 채권은 인기가 없어지는 거죠. 동시에 빚으로 사업하는 기업은 이자 부담이 커져 주가도 눌립니다. 반대로 금리를 내리면 채권 가격도 오르고 주식도 숨통이 트입니다.",
        "환율도 두 방향으로 움직여요. 달러가 강세(원화 약세)일 땐 해외 주식이나 달러 예금이 유리합니다. 같은 자산이라도 원화로 환산하면 환차익이 얹어지니까요. 반대로 달러가 약세면 국내 자산이 상대적으로 낫습니다. 해외 투자에서 환율 출렁임이 부담되면 '환헤지'로 그 영향을 줄이는 방법도 있어요.",
        "::figure:invest2Figure::",
        "핵심은 이 둘을 '따로'가 아니라 '함께' 보는 겁니다. 금리와 환율을 가로세로 두 축으로 놓으면 네 개의 칸이 생겨요. 예를 들어 금리는 내리는데 달러가 강세라면, 해외 주식이나 금이 유리한 국면일 수 있습니다. 금리가 오르고 달러도 강세라면 달러 예금이나 단기 상품으로 지키는 게 나을 수 있고요.",
        "이렇게 두 축을 겹쳐 보면 '지금 같은 상황엔 어디가 유리하지?'라는 질문에 대략적인 지도가 그려집니다. 물론 현실은 이 네 칸처럼 딱 떨어지지 않고 다른 변수도 많아요. 그래서 이건 정답표가 아니라 방향을 잡는 나침반으로 쓰는 게 맞습니다.",
        "이 감각이 생기면 남이 '지금 채권 사라'고 할 때 무작정 따르는 대신, '지금 금리 방향이 이러니 채권 살 타이밍이 맞겠구나'를 스스로 판단할 수 있게 됩니다. 다음 편에서는 그렇게 지킬 돈을 담는 구체적인 그릇들 — RP, 발행어음, MMF, 채권 같은 안전자산을 하나씩 비교해 보겠습니다.",
      ],
    },
    invest3: {
      title: "현금 투자 전략 3부. 안전자산 비교",
      excerpt: "리스크는 지기 싫은데 예금 금리는 너무 낮다면. 안전자산을 '기간' 기준으로 고르는 법.",
      body: [
        "'투자는 하고 싶은데 원금을 잃는 건 정말 싫어요. 그런데 은행 예금 금리는 너무 낮고요.' 이 마음, 정말 많은 분들이 공감하실 거예요. 다행히 예금과 위험한 투자 사이에는 생각보다 다양한 선택지가 있습니다.",
        "이걸 '안전자산'이라고 부르는데, 종류가 여럿이라 처음엔 헷갈립니다. 이름부터 낯선 RP, 발행어음, MMF, 채권… 하나씩 풀어볼게요.",
        "RP(환매조건부채권)는 증권사가 채권을 담보로 맡기고 이자를 주는 상품이에요. 국공채 같은 안전한 담보가 뒤에 있어 안정적이고, 하루만 맡겨도 이자가 붙습니다. 발행어음은 자기자본이 튼튼한 대형 증권사가 자기 신용으로 발행하는 상품이라, RP보다 금리가 조금 더 높은 편입니다.",
        "MMF는 여러 단기 상품에 돈을 나눠 굴리는 펀드예요. 넣고 빼기가 자유로워 파킹 통장처럼 쓸 수 있습니다. 채권은 국채·회사채로 나뉘는데, 국가나 기업에 돈을 빌려주고 정해진 이자를 받는 구조라 만기까지 들고 가면 약속된 수익을 받습니다.",
        "::figure:invest3Figure::",
        "그럼 이 중에 뭘 골라야 할까요? 기준은 딱 하나, '이 돈을 언제 쓸 거냐'입니다. 상품 스펙보다 이 질문이 먼저예요.",
        "한 달 안에 쓸 돈이라면 언제든 뺄 수 있는 MMF나 하루짜리 RP가 맞습니다. 3~6개월쯤 묶어둘 수 있다면 발행어음이나 약정형 RP로 이자를 조금 더 챙길 수 있고요. 1년 이상 안 쓸 돈이라면 만기가 있는 채권으로 더 높은 이자를 노려볼 수 있습니다. 반대로 곧 쓸 돈을 만기 긴 채권에 넣으면, 급할 때 손해 보고 팔아야 하는 상황이 생겨요.",
        "그래서 안전자산은 '어느 게 제일 좋냐'가 아니라 '내 돈의 사용 시점에 맞느냐'로 골라야 합니다. 같은 안전자산도 기간이라는 기준으로 보면 역할이 완전히 달라지죠. 다음 편에서는 반대로, 원금을 걸고서라도 더 크게 불리고 싶을 때 보는 성장자산 — 주식, ETF, ELS를 비교해 보겠습니다.",
      ],
    },
    invest4: {
      title: "현금 투자 전략 4부. 성장자산 비교",
      excerpt: "이제 좀 공격적으로 가보고 싶다면. 주식·ETF·ELS의 차이와, ELS에 숨은 함정.",
      body: [
        "안전하게 굴리는 것도 익숙해지고 여유 자금도 좀 생겼다면, 이런 마음이 들죠. '이제 좀 공격적으로 가서 제대로 불려볼까?' 그런데 막상 찾아보면 주식, ETF, ELS… 이름은 들어봤는데 뭐가 어떻게 다른지 헷갈립니다.",
        "성장자산은 수익의 크기만큼 위험도 함께 커지는 세계예요. 그래서 상품을 알기 전에, 각각이 '어떤 위험을 지는 대가로 어떤 수익을 노리는지'를 이해하는 게 중요합니다.",
        "주식 직접투자는 한 기업의 주인이 되는 일입니다. 잘 고르면 수익이 크지만, 한 종목에 몰리면 그 회사와 운명을 같이하게 돼요. 공부와 관심이 꾸준히 필요한 방식입니다.",
        "ETF는 수십, 수백 개 종목을 한 바구니에 담은 상품이에요. 지수·섹터·테마별로 골라 담을 수 있어 자동으로 분산이 됩니다. 종목 하나하나 파기 어려운 사람에게 특히 잘 맞죠. ELS는 특정 조건을 만족하면 정해진 수익을 주는, 조금 독특한 구조의 상품입니다.",
        "::figure:invest4Figure::",
        "여기서 꼭 짚어야 할 게 ELS예요. '조건을 만족하면 원금과 수익을 준다'는 설명 때문에 원금보장 상품처럼 들리지만, 사실은 전혀 아닙니다. 핵심은 '낙인(Knock-In)'이라는 장치예요.",
        "ELS는 보통 기초자산(주가지수 등)이 일정 수준 아래로만 떨어지지 않으면 약속된 수익을 줍니다. 그런데 만약 그 밑선, 즉 낙인 구간을 건드리면 상황이 급변해요. 그때부턴 지수 하락폭만큼 원금 손실이 그대로 반영될 수 있습니다. 평소엔 얌전히 이자를 주다가 큰 폭락 한 번에 원금이 크게 깎일 수 있는 구조인 거죠. '조건부'라는 단어의 진짜 무게가 여기 있습니다.",
        "그래서 성장자산은 '수익이 얼마나 나느냐'보다 '최악의 경우 얼마를 잃어도 내가 버틸 수 있느냐'로 골라야 합니다. 위험과 기대수익을 두 축에 놓고 내 자리를 찾는 거죠. 다음 편에서는 지금까지 본 안전자산과 성장자산을 실제로 '어떻게 섞을지', 금액까지 넣은 구체적인 포트폴리오로 마무리하겠습니다.",
      ],
    },
    invest5: {
      title: "현금 투자 전략 5부. 상황별 포트폴리오",
      excerpt: "자 이제 실전. 현금 1,000만 원이 있다면 어떻게 나눌까. 성향별 배분과 리밸런싱 루틴.",
      body: [
        "1부부터 4부까지 국면 읽는 법, 금리와 환율, 안전자산, 성장자산을 차례로 봤습니다. 이제 진짜 실전이에요. 지금 통장에 현금 1,000만 원이 있다고 해봅시다. 이걸 어떻게 나누면 좋을까요?",
        "정답은 없지만 기준은 있습니다. 바로 '내 성향과 상황'이에요. 똑같은 1,000만 원도 위험을 얼마나 견딜 수 있느냐에 따라 배분이 완전히 달라집니다.",
        "보수적인 편이라면 현금 400만 원, 안전자산 450만 원, 성장자산 150만 원처럼 지키는 쪽에 무게를 둡니다. 잃지 않는 게 최우선인 배분이죠. 중립형이라면 200·400·400으로 안전과 성장을 고르게 가져갑니다. 공격적이라면 100·200·700으로 성장자산에 크게 싣되, 급할 때 쓸 현금 방석은 남겨둡니다.",
        "::figure:invest5Figure::",
        "여기서 안전자산은 3부에서 본 RP·채권 같은 것들, 성장자산은 4부의 주식·ETF 같은 것들이라고 생각하면 됩니다. 비율은 예시일 뿐이니, 자기 상황에 맞게 조금씩 조정하면 돼요.",
        "그런데 여기서 끝이 아닙니다. 포트폴리오에서 진짜 중요한 건 '한 번 나눈 뒤'예요. 시간이 지나면 많이 오른 자산의 비중이 저절로 커집니다. 예를 들어 성장자산이 크게 오르면, 처음엔 40%였던 게 어느새 55%가 돼 있죠. 나도 모르게 점점 공격적인 포트폴리오로 변해 있는 겁니다.",
        "그래서 필요한 게 '리밸런싱'입니다. 1년에 한 번 정도, 원래 정한 비율로 되돌리는 작업이에요. 많이 오른 걸 조금 팔고 덜 오른 걸 채우면 자동으로 '비싸게 팔고 싸게 사는' 효과가 납니다. 감정이 아니라 규칙으로 사고파는 장치인 셈이죠.",
        "결국 투자는 한 번의 결정이 아니라, 주기적으로 점검하는 루틴에 가깝습니다. 완벽한 포트폴리오를 처음부터 만들려 애쓰기보다, 내가 밤에 편히 잘 수 있는 배분으로 시작해 1년에 한 번 손보는 것. 그거면 충분합니다. 다섯 편에 걸친 이 여정이 여러분의 첫 배분을 정하는 데 작은 지도가 되었기를 바랍니다.",
      ],
    },
    homeRule1: {
      title: "내 집 마련 전에 꼭 알아야 할 규제 3가지 (DSR·LTV·토허제)",
      excerpt: "집을 사기 전에 이 세 글자만 알아도 절반은 성공. DSR·LTV·토허제를 가장 쉬운 말로 풀었습니다.",
      body: [
        "내 집 마련을 결심하면 가장 먼저 마주치는 게 낯선 약자들입니다. DSR, LTV, 토허제… 부동산 기사에 늘 나오지만 정작 무슨 뜻인지 친절히 설명해 주는 곳은 드물죠. 이 세 가지만 제대로 알아도 '얼마짜리 집을, 얼마나 대출받아 살 수 있는지'가 보입니다.",
        "첫 번째, DSR(총부채원리금상환비율)은 한마디로 '갚을 능력' 기준입니다. 1년에 갚아야 하는 모든 빚의 원금과 이자를 합쳤을 때, 그 금액이 연봉의 40%를 넘으면 안 된다는 규칙이죠. 예를 들어 연봉이 5,000만 원이면, 1년에 갚는 돈이 2,000만 원을 넘는 대출은 받기 어렵습니다. 주택담보대출뿐 아니라 신용대출·자동차 할부까지 전부 합산된다는 점이 핵심입니다.",
        "두 번째, LTV(주택담보인정비율)는 '집값 대비 얼마까지 빌려주는가'입니다. 보통 집값의 70%까지가 한도예요. 5억짜리 집이라면 최대 3억 5천만 원까지 대출이 나오고, 나머지 1억 5천만 원은 내 돈(자기자본)으로 채워야 한다는 뜻입니다. 지역과 규제 여부에 따라 이 비율은 더 낮아지기도 합니다.",
        "세 번째, 토허제(토지거래허가제)는 조금 성격이 다릅니다. 특정 지역에서 집을 사려면 '실제로 내가 들어가 살겠다'는 약속을 하고 허가를 받아야 하는 제도입니다. 세를 끼고 사는 이른바 '갭투자'를 막기 위한 장치라, 투자 목적으로는 접근이 어렵습니다. 내가 사려는 동네가 토허제 구역인지 미리 확인하는 게 좋습니다.",
        "::figure:homeRule1Figure::",
        "정리하면 DSR은 내 소득, LTV는 집값, 토허제는 실거주 여부를 본다고 기억하면 됩니다. 이 세 개의 문을 모두 통과해야 비로소 계약서에 도장을 찍을 수 있습니다. 다음 글에서는 그래서 '나는 실제로 얼마까지 빌릴 수 있는지' 직접 계산해 보겠습니다.",
      ],
    },
    homeRule2: {
      title: "대출 한도 얼마나 받을 수 있을까? 내 예산 계산법",
      excerpt: "DSR로 내 대출 한도를 직접 계산해 봅니다. 연봉 5천만 원이면 얼마나 받을 수 있을까요?",
      body: [
        "앞 글에서 DSR이 '연봉의 40%' 기준이라고 했죠. 이번엔 실제 숫자로 계산해 보겠습니다. 연봉 5,000만 원인 사람을 예로 들어볼게요. 1년에 갚을 수 있는 돈의 한도는 5,000만 원의 40%, 즉 2,000만 원입니다. 이 안에서 모든 대출의 원리금이 해결돼야 합니다.",
        "::figure:homeRule2Figure::",
        "그런데 함정이 있습니다. 이미 신용대출 1,000만 원이 있다고 해봅시다. 이 신용대출의 원리금이 1년에 약 300만 원 나간다면, 주택담보대출에 쓸 수 있는 여유는 2,000만 원이 아니라 1,700만 원으로 줄어듭니다. 기존 빚이 곧바로 내 집 대출 한도를 깎아먹는 셈이죠.",
        "그래서 집을 알아보기 전에 정리할 빚은 미리 정리하는 게 유리합니다. 특히 마이너스 통장(마통)과 카드 할부가 조용한 복병입니다. 당장 쓰지 않더라도 마통은 '한도 전체'를 빚으로 보는 경우가 많고, 무이자라고 안심했던 할부도 DSR 계산엔 그대로 들어갑니다.",
        "대출 종류도 한도에 영향을 줍니다. 디딤돌·보금자리론 같은 정책대출은 금리가 낮고 조건이 좋지만 소득·집값 기준이 정해져 있어 아무나 받을 수 없습니다. 반면 시중은행 대출은 문턱은 낮지만 금리가 높죠. 내 조건이 정책대출 기준에 맞는지부터 확인하고, 안 되면 시중은행을 비교하는 순서가 좋습니다.",
        "계산이 복잡하게 느껴진다면, 은행 앱이나 주택금융공사 사이트의 'DSR 계산기'를 쓰면 한 번에 나옵니다. 다만 직접 한 번 손으로 따져보면 '왜 이 금액이 나오는지'가 보여서, 부동산이나 은행에서 휘둘리지 않게 됩니다. 한도를 알았다면, 이제 실제 계약으로 넘어갈 차례입니다.",
      ],
    },
    homeRule3: {
      title: "실전! 계약부터 입주까지 안전한 순서 5단계",
      excerpt: "예산 확인부터 입주까지, 순서만 지켜도 사고를 막습니다. 가장 중요한 단계는 따로 있어요.",
      body: [
        "한도까지 파악했다면 이제 실전입니다. 집을 사는 과정은 순서가 정말 중요합니다. 단계를 건너뛰면 계약금을 날리거나, 대출이 안 나와서 곤란해지는 일이 생기거든요. 안전한 5단계를 소개합니다.",
        "::figure:homeRule3Figure::",
        "1단계, 예산 확인. 내가 가진 현금(자기자본)과 받을 수 있는 대출 한도를 더해 '진짜 살 수 있는 금액'을 정합니다. 여기에 취득세·중개수수료·이사비 같은 부대비용까지 미리 잡아두세요. 보통 집값의 몇 퍼센트는 추가로 든다고 생각하면 안전합니다.",
        "2단계, 매물 탐색. 예산이 정해지면 그 범위 안에서만 봅니다. 예산을 넘는 집을 보기 시작하면 눈만 높아지고 마음만 흔들립니다. 발품과 손품(부동산 앱)을 함께 쓰되, 등기부등본으로 집주인과 근저당(빚) 상태를 꼭 확인하세요.",
        "3단계, 가심사(★가장 중요). 마음에 드는 집을 찾았다면 계약 전에 은행에 '나 이 집 사는데 대출 얼마 나오나요?'를 미리 물어보는 단계입니다. 이걸 건너뛰고 계약부터 했다가 대출이 생각보다 적게 나오면, 잔금을 못 치러 계약금을 통째로 날릴 수 있습니다. 반드시 계약 전에 받으세요.",
        "4단계, 계약. 가심사로 대출이 확인됐다면 계약서를 씁니다. 이때 특약 한 줄이 나를 지켜줍니다. '잔금일까지 매도인은 근저당을 모두 말소한다', 그리고 '대출이 승인되지 않으면 계약금을 반환하고 계약을 해제한다' 같은 문구를 꼭 넣어두세요. 말로 한 약속은 증거가 되지 않습니다.",
        "5단계, 대출 실행과 입주. 잔금일에 맞춰 대출을 실행하고, 잔금을 치르면서 동시에 소유권 이전과 전입신고를 합니다. 이사 당일 전입신고와 확정일자까지 마치면 내 권리가 비로소 단단해집니다. 순서대로만 밟으면, 내 집 마련은 생각보다 안전한 여정입니다.",
      ],
    },
  },
  en: {
    invest1: {
      title: "Cash strategy, Part 1. Reading the market phase",
      excerpt: "If the money left over each month just piles up in your account. How to read the market phase before the pick.",
      body: [
        "Every month, once the paycheck covers the bills, a little is left over. But that money just sits in the account, and many of us hesitate — 'what am I even supposed to do with this?' Buying stocks feels like buying at the top; leaving it feels like it's quietly melting away to inflation.",
        "What you need first here isn't an eye for picking stocks, but a feel for 'what time it is' in the market. Once you know the economy turns like four seasons, the anxiety eases a lot.",
        "The business cycle splits into four seasons: recovery climbing off the bottom, expansion as earnings and spending revive, slowdown as growth loses steam, and recession as things contract overall. It's not perfectly regular, but this sequence repeats.",
        "::figure:invest1Figure::",
        "And each season has a different asset that shines. Stocks rebound first in recovery; commodities and real estate lead in expansion. In a slowdown you raise cash to prepare for the next chance; in recession, safe bonds act as a shield. It's not 'always stocks' or 'always deposits' — you shift the weight to fit the season.",
        "A natural question follows: 'so how do I know which season it is right now?' Honestly, that's the hardest part. But a few signals give you a rough read.",
        "The classic ones are the direction of interest rates, unemployment, and the PMI (Purchasing Managers' Index). When the central bank starts cutting rates, it's a move to revive the economy — likely the start of recovery. When unemployment begins ticking up off its lows, it can signal a slowdown. A PMI above 50 reads as expansion, below 50 as contraction. Just not tuning these out when they appear in the news builds your sense of the season.",
        "One caveat, though: these signals are a 'reference,' not a 'prophecy.' Markets often move ahead of the economy, and even experts misjudge the phase often. So never trust a signal so blindly that you bet everything on one side.",
        "The real reason to read the phase isn't to pinpoint 'what to buy now,' but to judge 'what kind of strategy this is a time for' — whether to go on offense or play defense. Next up, we'll take apart the two forces that hint at that judgment most powerfully: how interest rates and currency affect your assets.",
      ],
    },
    invest2: {
      title: "Cash strategy, Part 2. Rates and currency",
      excerpt: "If a 'rates went up' headline ever left you thinking 'so what?' How to read two signals that hit your returns.",
      body: [
        "'The Bank of Korea has raised the base rate.' When a line like that shows up in the news, you've probably shrugged — 'so what's that got to do with me?' But that one sentence actually touches your deposits, your loans, and your investment returns, all of it.",
        "Rates and currency are like the rudder steering the big ship that is the market. Just being able to read their direction gives you a strong feel for 'where is it better to put money right now.'",
        "First, rates. When rates rise, the price of bonds already issued falls. Newer bonds pay more interest, so the older, lower-interest ones lose their appeal. At the same time, firms that run on debt face heavier interest costs, which pressures their stocks. Cut rates, and bond prices rise while stocks get room to breathe.",
        "Currency moves two ways too. When the dollar is strong (won weak), overseas stocks and dollar deposits are favorable — convert the same asset back to won and you pick up a currency gain. When the dollar is weak, domestic assets are relatively better. If FX swings worry you when investing abroad, a currency hedge is one way to soften the effect.",
        "::figure:invest2Figure::",
        "The key is to read the two 'together,' not separately. Put rates and currency on two axes and you get four cells. For example, if rates are falling but the dollar is strong, it may be a phase that favors overseas stocks or gold. If rates rise and the dollar is also strong, defending with dollar deposits or short-term products may be better.",
        "Overlaying the two axes draws a rough map for 'in a situation like this, what's favorable?' Of course reality isn't as clean as four neat cells, and there are many other variables. So use it as a compass for direction, not an answer key.",
        "Once you have this feel, instead of blindly following when someone says 'buy bonds now,' you can judge for yourself: 'given the direction of rates, this really is a good time for bonds.' Next up, we'll compare the concrete vessels for money you want to protect — safe assets like RP, discount notes, MMF and bonds, one by one.",
      ],
    },
    invest3: {
      title: "Cash strategy, Part 3. Comparing safe assets",
      excerpt: "Don't want risk, but deposit rates are too low? How to pick safe assets by 'time horizon.'",
      body: [
        "'I want to invest, but I really hate losing my principal — and the bank deposit rate is just too low.' So many people relate to this. Happily, between deposits and risky investing there are more options than you'd think.",
        "These are called 'safe assets,' and there are several kinds, so it's confusing at first. RP, discount notes, MMF, bonds — even the names feel unfamiliar. Let's unpack them one by one.",
        "An RP (repurchase agreement) is a product where a brokerage puts up bonds as collateral and pays you interest. With safe collateral like government bonds behind it, it's stable, and it earns interest from just a single day. A discount note is issued on the credit of a big, well-capitalized brokerage, so it usually pays a touch more than an RP.",
        "An MMF is a fund that spreads your money across several short-term instruments. It's easy to move in and out, so you can use it like a parking account. Bonds split into government and corporate: you lend to a country or a company and receive set interest, so hold to maturity and you get the promised return.",
        "::figure:invest3Figure::",
        "So which do you pick? There's just one criterion: 'when will you spend this money?' That question comes before any product spec.",
        "Money you'll spend within a month suits an MMF or a one-day RP you can pull anytime. Money you can lock up for three to six months can earn a bit more in a discount note or a term RP. Money you won't touch for over a year can aim for higher interest in a bond with a maturity. Put money you'll need soon into a long-maturity bond, though, and you may have to sell at a loss when you're in a hurry.",
        "So safe assets aren't chosen by 'which is best' but by 'which fits when I'll use the money.' View the same safe asset through the lens of time and its role changes completely. Next up, the opposite side — growth assets you turn to when you'll stake principal to grow bigger: stocks, ETFs and ELS.",
      ],
    },
    invest4: {
      title: "Cash strategy, Part 4. Comparing growth assets",
      excerpt: "Ready to get aggressive? The difference between stocks, ETFs and ELS — and the trap hidden in ELS.",
      body: [
        "Once you're comfortable growing money safely and have some spare cash, a thought arrives: 'shall I get aggressive and really grow this?' But when you look into it — stocks, ETFs, ELS… you've heard the names, but how they differ is a blur.",
        "Growth assets are a world where risk grows right along with the size of the reward. So before learning the products, it matters to understand what risk each takes on in exchange for what kind of return.",
        "Buying stocks directly makes you an owner of a company. Pick well and returns are large, but concentrate in one name and you tie your fate to that firm. It's a style that needs steady study and attention.",
        "An ETF packs dozens or hundreds of names into one basket. You can pick by index, sector or theme, so diversification happens automatically — it suits people who can't dig into each stock. An ELS is a slightly unusual product that pays a set return if certain conditions are met.",
        "::figure:invest4Figure::",
        "Here's what you must pin down about ELS. Because the pitch is 'meet the conditions and you get principal plus a return,' it sounds like a principal-protected product — but it's not at all. The key is a device called 'knock-in.'",
        "An ELS usually pays the promised return as long as the underlying (a stock index, say) doesn't fall below a certain level. But if it touches that floor — the knock-in level — things change fast. From then on, losses can track the index's drop straight into your principal. It quietly pays interest most of the time, then one big crash can carve a large chunk out of your principal. That's the true weight of the word 'conditional.'",
        "So growth assets should be chosen less by 'how much can I earn' and more by 'in the worst case, how much can I lose and still hold on.' You find your spot by plotting risk against expected return. Next up, we'll close the series by actually mixing the safe and growth assets we've covered — into a concrete portfolio, right down to the amounts.",
      ],
    },
    invest5: {
      title: "Cash strategy, Part 5. Portfolios by situation",
      excerpt: "Now the real thing: if you had 10 million won, how would you split it? Allocations by temperament, plus a rebalancing routine.",
      body: [
        "From Part 1 to Part 4 we covered reading the phase, rates and currency, safe assets and growth assets, in turn. Now for the real thing. Say you have 10 million won in cash in your account right now. How would you split it?",
        "There's no single right answer, but there is a criterion: 'your temperament and situation.' The same 10 million won gets divided completely differently depending on how much risk you can bear.",
        "If you lean conservative, weight the defensive side — something like cash 4M, safe assets 4.5M, growth 1.5M. It's an allocation where not losing comes first. Balanced? 2M · 4M · 4M, evenly across safe and growth. Aggressive? 1M · 2M · 7M, loading growth heavily while keeping a cash cushion for emergencies.",
        "::figure:invest5Figure::",
        "Here, think of 'safe assets' as the RP and bonds from Part 3, and 'growth assets' as the stocks and ETFs from Part 4. The ratios are just examples — adjust them little by little to fit your own situation.",
        "But this isn't the end. The truly important part of a portfolio is 'after you've split it once.' Over time the share of your big winners grows on its own. If growth assets surge, what started at 40% is suddenly 55% — and without noticing, your portfolio has drifted more aggressive.",
        "That's what 'rebalancing' is for. About once a year, you return to your original ratios. Trim what rose a lot and top up what didn't, and you automatically 'sell high and buy low.' It's a mechanism for buying and selling by rule, not by emotion.",
        "In the end, investing is less a one-time decision and more a routine you check on periodically. Rather than straining to build the perfect portfolio from day one, start with an allocation that lets you sleep at night and tune it once a year. That's enough. I hope this five-part journey serves as a small map for setting your first allocation.",
      ],
    },
    homeRule1: {
      title: "3 rules to know before buying your first home (DSR · LTV · land permit)",
      excerpt: "Three acronyms decide how much house you can afford. Here are DSR, LTV, and the land-use permit in plain words.",
      body: [
        "When you decide to buy a home, the first wall you hit is the jargon: DSR, LTV, land-transaction permits. Learn just these three and you'll see how expensive a home you can realistically buy, and how much you can borrow.",
        "First, DSR (Debt Service Ratio) measures your ability to repay. The total principal and interest you pay each year on all your debt can't exceed 40% of your annual income. If you earn 50 million won, loans that cost you more than 20 million won a year are hard to get — and this counts not just your mortgage but credit loans and car installments too.",
        "Second, LTV (Loan-to-Value) is how much they'll lend against the home's price — typically up to 70%. For a 500-million-won home, you can borrow up to 350 million, and must cover the remaining 150 million with your own money. The ratio can be lower in regulated areas.",
        "Third, the land-transaction permit is different in nature. In certain zones you must promise to actually live in the home and get approval before buying. It's designed to block 'gap investing' (buying with a tenant's deposit), so it's hard to use for investment. Check whether your target neighborhood is a permit zone.",
        "::figure:homeRule1Figure::",
        "In short: DSR looks at your income, LTV at the home's price, the permit at whether you'll really live there. You have to pass all three doors before you sign. Next time, we'll actually calculate how much you can borrow.",
      ],
    },
    homeRule2: {
      title: "How much can you actually borrow? Calculating your budget",
      excerpt: "Let's compute your loan limit with DSR. If you earn 50 million won a year, how much can you get?",
      body: [
        "Last time we said DSR caps you at 40% of income. Let's run real numbers. Take someone earning 50 million won. Their yearly repayment ceiling is 40% of that — 20 million won. Every loan's principal and interest must fit inside that.",
        "::figure:homeRule2Figure::",
        "But there's a trap. Say you already have a 10-million-won credit loan costing about 3 million a year to repay. Then the room left for your mortgage isn't 20 million but 17 million. Existing debt directly eats into your home-loan limit.",
        "So it pays to clear debts before you go house-hunting. Negative-balance accounts (overdrafts) and card installments are the quiet culprits — an overdraft is often counted at its full limit even when unused, and 'interest-free' installments still count toward DSR.",
        "The loan type matters too. Policy loans (like Didimdol or Bogeumjari) have low rates and good terms but strict income and price limits. Commercial bank loans are easier to qualify for but cost more. Check first whether you fit a policy loan; if not, compare bank options.",
        "If the math feels heavy, the 'DSR calculator' in your bank app or on the housing-finance agency site gives an instant answer. Still, working it once by hand shows you why the number comes out that way — so no agent or banker can push you around. Once you know your limit, it's time for the actual contract.",
      ],
    },
    homeRule3: {
      title: "The safe 5-step order: from contract to move-in",
      excerpt: "From budget to move-in, following the order prevents disasters. One step matters more than the rest.",
      body: [
        "Now that you know your limit, it's go time. The order you do things in really matters — skip a step and you can lose your deposit or get stuck when the loan falls short. Here are the safe five steps.",
        "::figure:homeRule3Figure::",
        "Step 1, confirm your budget. Add your cash to your loan limit to set the real amount you can spend, and budget extra costs — acquisition tax, agent fees, moving — up front. Assume a few percent of the price on top.",
        "Step 2, find a property. Look only within budget; the moment you view pricier homes, your standards rise and your resolve wavers. Use both legwork and apps, and always check the property register for the owner and any liens (debt).",
        "Step 3, pre-screening (★the most important). Once you find a home you like, ask the bank before signing: 'How much will you lend me for this place?' Skip this and sign first, and if the loan comes up short you may fail to pay the balance and lose your entire deposit. Always do it before the contract.",
        "Step 4, the contract. With the loan confirmed, sign — and let a special clause protect you. Add lines like 'the seller clears all liens by the balance date' and 'if the loan isn't approved, the deposit is returned and the contract is canceled.' Verbal promises aren't evidence.",
        "Step 5, loan and move-in. On the balance date, draw the loan, pay the balance, and transfer ownership and register your residence at the same time. Finish your move-in registration and fixed-date stamp on moving day, and your rights are finally solid. Follow the order and buying a home is a safer journey than it seems.",
      ],
    },
  },
  ja: {
    invest1: {
      title: "現金投資戦略 1部. 市場の局面を読む",
      excerpt: "毎月少しずつ残るお金が口座に貯まるだけなら。銘柄より「市場の局面」を先に読む方法。",
      body: [
        "毎月お給料をもらって生活費を使うと、少しずつは残りますよね。でもそのお金が口座に貯まるだけで、「これをどうすればいいんだろう」と手を出せずにいる方が多いんです。株を買おうにも今が高値な気がするし、置いておくと物価に少しずつ溶けていく気もするし。",
        "こんな時にまず必要なのは、銘柄を選ぶ目ではなく「今がどんな時期か」を読む感覚です。景気が四季のように巡ると知るだけで、焦りがぐっと減ります。",
        "景気サイクルは大きく四つの季節に分かれます。底を打って徐々に上がる回復期、企業業績と消費が生き返る拡張期、成長が鈍る減速期、そして全体的に縮む後退期。完全に規則的ではなくても、この流れは順に繰り返されます。",
        "::figure:invest1Figure::",
        "そして季節ごとに輝く資産が違います。回復期は株が最初に反発し、拡張期は原資材や不動産が力を出す。減速期は現金比率を増やして次の機会に備え、後退期は安全な債券が盾になります。「とにかく株」「とにかく預金」ではなく、季節に合わせて重心を移すのです。",
        "ここで自然に浮かぶ疑問。「じゃあ今がどの季節か、どう分かるの？」実はこれが一番難しい。でもいくつかの信号を見れば大まかな感覚はつかめます。",
        "代表的なのが金利の方向、失業率、そしてPMI（購買担当者景気指数）です。中央銀行が金利を下げ始めたら景気を立て直す信号なので回復の入り口の可能性が高く、失業率が底からじわじわ上がり始めたら減速の信号かもしれません。PMIが50を超えれば拡張、下回れば縮小と読みます。ニュースによく出るこれらの指標を聞き流さないだけで季節感が育ちます。",
        "ただ一つ。これらの信号は「予言」ではなく「参考」です。市場はしばしば景気より先に動き、専門家も局面をよく外します。だから信号を盲信して全財産を一方に賭けるのは禁物です。",
        "局面を読む本当の理由は「今何を買うか」をピンポイントで当てるためではなく、「今はどんな戦略を使う時か」を判断するためです。攻める時か、守る時か。次回はこの判断に最も強いヒントをくれる二つ、金利と為替が資産にどう影響するかを一つずつ解いていきます。",
      ],
    },
    invest2: {
      title: "現金投資戦略 2部. 金利と為替の影響",
      excerpt: "金利が上がったニュース、自分に関係ある？と思ったら。利回りに直結する二つの信号の読み方。",
      body: [
        "「韓国銀行が基準金利を引き上げました。」ニュースでこう聞いても、「で、自分に何の関係が？」と流したことがあるでしょう。でもこの一文は実は、自分の預金、ローン、そして投資の利回り全部に影響します。",
        "金利と為替は、市場という大きな船を動かす舵のようなもの。方向を読めるだけで「今どこにお金を置くのがいいか」の感覚がぐっとつかめます。",
        "まず金利。金利が上がると既に発行された債券の価格は下がります。新しく出る債券の利子が多いので、利子の少ない古い債券は人気がなくなるわけです。同時に借金で事業する企業は利子負担が増え株価も押されます。逆に金利を下げると債券価格も上がり株も一息つけます。",
        "為替も二方向に動きます。ドル高（ウォン安）の時は海外株やドル預金が有利。同じ資産でもウォン換算で為替差益が乗るからです。逆にドル安なら国内資産が相対的に良い。海外投資で為替の揺れが負担なら「為替ヘッジ」でその影響を減らす方法もあります。",
        "::figure:invest2Figure::",
        "肝心なのはこの二つを「別々」ではなく「一緒に」見ること。金利と為替を縦横二軸に置くと四つのマスができます。例えば金利は下がるのにドル高なら、海外株や金が有利な局面かもしれません。金利が上がりドルも高なら、ドル預金や短期商品で守る方が良いことも。",
        "こうして二軸を重ねると「今のような状況ではどこが有利？」の大まかな地図が描けます。もちろん現実はこの四マスほどきれいに割り切れず、他の変数も多い。だからこれは答え表ではなく、方向をつかむ羅針盤として使うのが正解です。",
        "この感覚ができると、誰かが「今債券を買え」と言った時に鵜呑みにする代わりに、「今の金利の方向なら債券の買い時だな」と自分で判断できるようになります。次回はそうして守るお金を入れる具体的な器 —— RP、発行手形、MMF、債券といった安全資産を一つずつ比べます。",
      ],
    },
    invest3: {
      title: "現金投資戦略 3部. 安全資産の比較",
      excerpt: "リスクは負いたくないのに預金金利は低すぎる時。安全資産を「期間」を基準に選ぶ方法。",
      body: [
        "「投資はしたいけど元本を失うのは本当に嫌。でも銀行の預金金利は低すぎる。」この気持ち、本当に多くの方が共感するはず。幸い、預金と危険な投資の間には思ったより多様な選択肢があります。",
        "これを「安全資産」と呼びますが、種類が複数あって最初は戸惑います。名前から馴染みのないRP、発行手形、MMF、債券… 一つずつ解きほぐしましょう。",
        "RP（買戻条件付債券）は証券会社が債券を担保に預け、利子をくれる商品です。国公債のような安全な担保が後ろにあって安定的で、1日預けても利子がつきます。発行手形は自己資本の厚い大手証券が自己信用で発行する商品なので、RPより金利が少し高めです。",
        "MMFは複数の短期商品にお金を分けて回すファンドです。出し入れが自由で、パーキング口座のように使えます。債券は国債・社債に分かれ、国や企業にお金を貸して定められた利子を受け取る仕組みなので、満期まで持てば約束の収益を受け取れます。",
        "::figure:invest3Figure::",
        "では、この中から何を選ぶ？ 基準はたった一つ、「このお金をいつ使うか」です。商品スペックより先にこの質問です。",
        "一ヶ月以内に使うお金ならいつでも引き出せるMMFや1日物のRPが合います。3〜6ヶ月ほど寝かせられるなら発行手形や約定型RPで利子を少し多く取れます。1年以上使わないお金なら満期のある債券でより高い利子を狙えます。逆にすぐ使うお金を満期の長い債券に入れると、急な時に損をして売る羽目になります。",
        "だから安全資産は「どれが一番いいか」ではなく「自分のお金の使う時点に合うか」で選ぶべきです。同じ安全資産も期間という基準で見ると役割がまるで変わります。次回は逆に、元本を賭けてでも大きく増やしたい時に見る成長資産 —— 株式、ETF、ELSを比べます。",
      ],
    },
    invest4: {
      title: "現金投資戦略 4部. 成長資産の比較",
      excerpt: "そろそろ攻めてみたいなら。株式・ETF・ELSの違いと、ELSに潜む落とし穴。",
      body: [
        "安全に回すのにも慣れて余裕資金も少し出てきたら、こんな気持ちが湧きます。「そろそろ攻めてしっかり増やそうか？」でもいざ調べると、株式、ETF、ELS… 名前は聞いたことあるけど何がどう違うのか曖昧です。",
        "成長資産は収益の大きさぶんだけ危険も一緒に大きくなる世界です。だから商品を知る前に、それぞれが「どんな危険を負う代わりにどんな収益を狙うか」を理解するのが大事です。",
        "株式の直接投資は一企業のオーナーになること。うまく選べば収益は大きいが、一銘柄に集中するとその会社と運命を共にすることになります。勉強と関心が続けて必要な方式です。",
        "ETFは数十、数百の銘柄を一つのカゴに入れた商品。指数・セクター・テーマ別に選べて自動的に分散されます。銘柄を一つ一つ掘るのが難しい人に特に合います。ELSは特定の条件を満たせば定められた収益をくれる、少し独特な構造の商品です。",
        "::figure:invest4Figure::",
        "ここで必ず押さえたいのがELSです。「条件を満たせば元本と収益をくれる」という説明のせいで元本保証商品のように聞こえますが、実は全く違います。核心は「ノックイン（Knock-In）」という仕掛けです。",
        "ELSは普通、基礎資産（株価指数など）が一定水準を下回らなければ約束の収益をくれます。ところがその下限、つまりノックイン水準に触れると状況が一変します。そこからは指数の下落幅ぶん元本損失がそのまま反映されうる。普段はおとなしく利子をくれるのに、大きな暴落一回で元本が大きく削られうる構造なのです。「条件付き」という言葉の本当の重みがここにあります。",
        "だから成長資産は「収益がどれだけ出るか」より「最悪の場合いくら失っても自分が耐えられるか」で選ぶべきです。危険と期待収益を二軸に置いて自分の位置を探すのです。次回はこれまで見た安全資産と成長資産を実際に「どう混ぜるか」、金額まで入れた具体的なポートフォリオで締めくくります。",
      ],
    },
    invest5: {
      title: "現金投資戦略 5部. 状況別ポートフォリオ",
      excerpt: "さあ実戦。現金1,000万ウォンがあればどう分ける？ 性向別の配分とリバランスのルーティン。",
      body: [
        "1部から4部まで局面の読み方、金利と為替、安全資産、成長資産を順に見ました。いよいよ実戦です。今、口座に現金1,000万ウォンがあるとしましょう。これをどう分ければいいでしょうか。",
        "正解はありませんが基準はあります。それが「自分の性向と状況」です。同じ1,000万ウォンも、危険をどれだけ耐えられるかで配分がまるで変わります。",
        "保守的な方なら現金400万・安全資産450万・成長資産150万ウォンのように守る側に重心を置きます。失わないことが最優先の配分です。中立型なら200・400・400で安全と成長を均等に。攻撃的なら100・200・700で成長資産に大きく載せつつ、急な時に使う現金の座布団は残します。",
        "::figure:invest5Figure::",
        "ここで安全資産は3部で見たRP・債券のようなもの、成長資産は4部の株式・ETFのようなものと考えればいい。比率は例に過ぎないので、自分の状況に合わせて少しずつ調整すればOKです。",
        "でもここで終わりではありません。ポートフォリオで本当に大事なのは「一度分けた後」です。時間が経つと大きく上がった資産の比率が自然に大きくなる。例えば成長資産が大きく上がると、最初40%だったのがいつの間にか55%に。知らぬ間にだんだん攻撃的なポートフォリオに変わっているのです。",
        "だから必要なのが「リバランス」です。1年に一度くらい、元々決めた比率に戻す作業です。大きく上がった分を少し売り、上がっていない分を足すと、自動で「高く売って安く買う」効果が出ます。感情ではなくルールで売買する仕掛けです。",
        "結局、投資は一度の決定ではなく、周期的に点検するルーティンに近いのです。完璧なポートフォリオを最初から作ろうと力むより、夜に安心して眠れる配分で始めて1年に一度手直しする。それで十分です。五編にわたるこの旅が、みなさんの最初の配分を決める小さな地図になれば幸いです。",
      ],
    },
    homeRule1: {
      title: "マイホーム購入前に知るべき3つの規制（DSR・LTV・土地取引許可制）",
      excerpt: "家を買う前にこの3つを知れば半分は成功。DSR・LTV・土地取引許可制をいちばんやさしい言葉で。",
      body: [
        "マイホームを決意してまず出会うのは、聞き慣れない略語です。DSR、LTV、土地取引許可制…。不動産の記事には必ず出てきますが、意味を丁寧に説明してくれる場所は少ない。この3つさえ押さえれば、「いくらの家を、いくら借りて買えるのか」が見えてきます。",
        "1つ目、DSR（総負債元利金返済比率）は一言でいえば「返せる力」の基準です。1年間に返すすべての借金の元金と利息の合計が、年収の40%を超えてはいけません。年収5,000万ウォンなら、年に2,000万ウォンを超える返済の融資は難しい。住宅ローンだけでなく信用ローンや自動車の分割払いまで合算されるのがポイントです。",
        "2つ目、LTV（住宅担保認定比率）は「家の値段に対していくらまで貸すか」。一般的に家の値段の70%までです。5億ウォンの家なら最大3億5千万ウォンまで、残り1億5千万ウォンは自己資金で埋める必要があります。地域や規制の有無によってこの比率は下がることもあります。",
        "3つ目、土地取引許可制は少し性格が違います。特定の地域で家を買うには「実際に自分が住む」と約束して許可を得る制度です。賃貸を付けて買ういわゆる「ギャップ投資」を防ぐ仕組みなので、投資目的では使いにくい。狙う街が許可区域かどうか事前に確認しましょう。",
        "::figure:homeRule1Figure::",
        "まとめると、DSRは所得、LTVは家の値段、許可制は実居住を見ると覚えればOK。この3つの扉をすべて通って、ようやく契約書に印を押せます。次回は「実際にいくら借りられるか」を自分で計算してみます。",
      ],
    },
    homeRule2: {
      title: "ローンはいくら借りられる？ 自分の予算の計算法",
      excerpt: "DSRで自分の融資限度を計算します。年収5,000万ウォンならいくら借りられる？",
      body: [
        "前回、DSRは「年収の40%」基準だと言いました。今回は実際の数字で計算します。年収5,000万ウォンの人を例にすると、1年に返せる上限はその40%、つまり2,000万ウォン。この中ですべての融資の元利金を収める必要があります。",
        "::figure:homeRule2Figure::",
        "ただし落とし穴があります。すでに信用ローン1,000万ウォンがあるとします。その元利金が年に約300万ウォンなら、住宅ローンに使える余裕は2,000万ではなく1,700万ウォンに減ります。既存の借金がそのまま住宅ローンの限度を削るのです。",
        "だから家を探す前に、整理できる借金は先に整理するのが得策です。特にマイナス通帳（当座貸越）とカードの分割払いが静かな伏兵。使っていなくても当座貸越は「限度額全体」を借金と見ることが多く、無利子だと安心していた分割払いもDSR計算にそのまま入ります。",
        "ローンの種類も限度に影響します。ディディムドル・ボグムジャリのような政策ローンは金利が低く条件も良いですが、所得・価格の基準が決まっていて誰でも受けられません。一方、市中銀行のローンは敷居が低い分、金利は高い。まず自分が政策ローンの基準に合うか確認し、ダメなら市中銀行を比較する順番が良いです。",
        "計算が複雑に感じたら、銀行アプリや住宅金融公社サイトの「DSR計算機」で一発で出ます。ただ一度手で計算すると「なぜこの金額になるか」が分かり、不動産や銀行に振り回されなくなります。限度が分かったら、いよいよ実際の契約です。",
      ],
    },
    homeRule3: {
      title: "実践！ 契約から入居まで安全な5ステップ",
      excerpt: "予算確認から入居まで、順番を守るだけで事故を防げます。いちばん大事なステップは別にあります。",
      body: [
        "限度まで把握したら実践です。家を買う過程は順番がとても大事。ステップを飛ばすと手付金を失ったり、ローンが下りずに困ったりします。安全な5ステップを紹介します。",
        "::figure:homeRule3Figure::",
        "ステップ1、予算確認。手持ちの現金（自己資金）と借りられる限度を足して「本当に買える金額」を決めます。取得税・仲介手数料・引越し費用などの諸費用も先に見込んでおきましょう。家の値段の数%は追加でかかると考えると安全です。",
        "ステップ2、物件探し。予算が決まったらその範囲内だけ見ます。予算を超える家を見始めると目だけ高くなり、気持ちも揺れます。足とアプリの両方を使いつつ、登記簿謄本で所有者と根抵当（借金）の状態を必ず確認しましょう。",
        "ステップ3、事前審査（★いちばん重要）。気に入った家を見つけたら契約前に銀行へ「この家を買うのにいくら借りられますか？」と先に聞く段階です。これを飛ばして契約し、ローンが思ったより少ないと、残金を払えず手付金を丸ごと失うことも。必ず契約前に受けてください。",
        "ステップ4、契約。事前審査でローンが確認できたら契約書を書きます。このとき特約の一文が自分を守ります。「残金日までに売主は根抵当をすべて抹消する」、そして「ローンが承認されなければ手付金を返還し契約を解除する」といった文言を必ず入れましょう。口約束は証拠になりません。",
        "ステップ5、ローン実行と入居。残金日に合わせてローンを実行し、残金を払うと同時に所有権移転と転入届を行います。引越し当日に転入届と確定日付まで済ませれば、自分の権利がようやく固まります。順番どおりに踏めば、マイホームは思ったより安全な旅です。",
      ],
    },
  },
  zh: {
    invest1: {
      title: "现金投资策略 第1部. 读懂市场阶段",
      excerpt: "如果每月剩下的钱只是在账户里越攒越多。先读市场阶段，再谈选股。",
      body: [
        "每个月发了工资、付完生活费，多少会剩下一点。可这笔钱只是在账户里越攒越多，很多人却拿不定主意——「这到底该拿它怎么办？」买股票吧，感觉现在是高点；放着不动吧，又像在被通胀一点点融化。",
        "这时最先需要的，不是选股的眼光，而是读懂「现在是什么时期」的感觉。一旦知道经济像四季一样轮回，焦虑就会缓解不少。",
        "经济周期大致分四个季节：触底缓升的复苏、企业业绩和消费复活的扩张、增速放缓的放缓，以及整体收缩的衰退。虽不完全规律，但这个流程会依次重复。",
        "::figure:invest1Figure::",
        "而且每个季节发光的资产不同。复苏期股票最先反弹，扩张期原材料和房地产发力；放缓期提高现金比重、为下一次机会做准备，衰退期安全的债券当盾牌。不是「永远买股票」或「永远存款」，而是随季节移动重心。",
        "这里自然会冒出疑问：「那现在到底是哪个季节，怎么知道？」说实话，这最难。但看几个信号，就能有个大致判断。",
        "代表性的有利率方向、失业率，以及 PMI（采购经理指数）。央行开始降息，是想提振经济的信号，很可能是复苏的开端；失业率从低位慢慢往上爬，可能是放缓的信号。PMI 高于50读作扩张，低于50读作收缩。光是别把新闻里常出现的这些指标当耳旁风，季节感就会慢慢养成。",
        "不过有一点：这些信号是「参考」，不是「预言」。市场常常先于经济而动，专家也经常看错阶段。所以千万别盲信某个信号，把全部身家押在一边。",
        "读阶段的真正意义，不是精确锁定「现在买什么」，而是判断「现在该用什么策略」——是该进攻，还是该防守。下一篇，我们逐一拆解给这个判断最强提示的两样东西：利率和汇率如何影响你的资产。",
      ],
    },
    invest2: {
      title: "现金投资策略 第2部. 利率与汇率的影响",
      excerpt: "看到「利率上调」的新闻只觉得「跟我有啥关系」？读懂直接影响收益的两个信号。",
      body: [
        "「韩国银行上调了基准利率。」新闻里听到这句，你多半会想「这跟我有啥关系？」就翻过去了。但这一句其实牵动着你的存款、你的贷款，以及你的投资收益，全都有关。",
        "利率和汇率，就像掌控市场这艘大船的舵。光是能读懂它们的方向，就能对「现在把钱放哪儿更好」有很强的感觉。",
        "先说利率。利率上升时，已经发行的债券价格下跌。新发的债券利息更高，利息低的旧债券就没人要了。同时靠借贷做生意的企业利息负担加重，股价也被压。反之降息，债券价格上涨，股票也能喘口气。",
        "汇率也有两个方向。美元走强（韩元走弱）时，海外股票或美元存款更有利——同样的资产换回韩元还能赚汇差。反之美元走弱，国内资产相对更好。若海外投资时担心汇率波动，也可以用「汇率对冲」减小影响。",
        "::figure:invest2Figure::",
        "关键是把这两者「一起」看，而不是分开看。把利率和汇率放成纵横两轴，就有了四个格子。比如利率在降但美元走强，可能是海外股票或黄金占优的阶段；利率上升且美元也强，用美元存款或短期产品防守也许更好。",
        "把两轴叠起来，就能画出「在这样的情形下哪里有利？」的大致地图。当然现实没有这四格这么干净，变量也多。所以它不是标准答案表，而该当作把握方向的指南针。",
        "有了这种感觉，别人说「现在买债券」时，你就不会盲从，而能自己判断：「照现在的利率方向，确实是买债券的好时机。」下一篇，我们来逐一比较装「要守的钱」的具体容器——RP、发行票据、MMF、债券这些安全资产。",
      ],
    },
    invest3: {
      title: "现金投资策略 第3部. 安全资产比较",
      excerpt: "不想担风险，可存款利率又太低？按「用钱时点」来挑安全资产的方法。",
      body: [
        "「想投资，但真的很怕亏本金。可银行存款利率又太低。」这份心情，真的很多人有共鸣。好在，存款和高风险投资之间，其实有比你想象中更多的选择。",
        "这些叫「安全资产」，种类不少，一开始容易懵。名字都陌生的 RP、发行票据、MMF、债券……我们一个个拆开看。",
        "RP（回购协议）是券商拿债券作担保、付你利息的产品。背后有国债这类安全担保，很稳，存一天也有利息。发行票据由自有资本雄厚的大型券商以自身信用发行，所以利率通常比 RP 略高。",
        "MMF 是把钱分散投到多种短期产品的基金。进出自由，可以当停车账户用。债券分国债和公司债，是借钱给国家或企业、收取约定利息的结构，持有到期就能拿到约定的收益。",
        "::figure:invest3Figure::",
        "那到底该挑哪个？标准只有一个：「这笔钱什么时候用？」这个问题比产品参数更靠前。",
        "一个月内要用的钱，适合随时能取的 MMF 或隔夜 RP。能锁三到六个月，可以用发行票据或约定型 RP 多拿点利息。一年以上不用的钱，可以用有期限的债券去博更高利息。反过来，把很快要用的钱放进长期债券，急用时就得亏本卖出。",
        "所以安全资产不是按「哪个最好」来挑，而是按「合不合我用钱的时点」。同样的安全资产，用期限这个标准去看，角色完全不同。下一篇正相反，讲你愿意押上本金去博更大增值时看的成长资产——股票、ETF、ELS。",
      ],
    },
    invest4: {
      title: "现金投资策略 第4部. 成长资产比较",
      excerpt: "想开始进取一点？股票·ETF·ELS 的区别，以及 ELS 里藏着的陷阱。",
      body: [
        "安全理财也熟练了、手头也有了些余钱，就会冒出这样的念头：「要不要进攻一点、好好增值？」可真去查，股票、ETF、ELS……名字听过，但到底有什么不同却一片模糊。",
        "成长资产是收益多大、风险就跟着多大的世界。所以在了解产品之前，先理解各自「用承担什么风险，去博什么收益」很重要。",
        "直接买股票就是成为一家企业的主人。选得好收益大，但集中在单只上，就等于和那家公司同命运，需要持续的学习和关注。",
        "ETF 把几十、几百只股票装进一个篮子。可按指数·板块·主题挑选，自动分散，特别适合没法逐只研究的人。ELS 是满足特定条件就给约定收益的、结构有点特别的产品。",
        "::figure:invest4Figure::",
        "这里必须点明的是 ELS。因为「满足条件就给本金和收益」的说法，听着像保本产品，其实完全不是。核心是一个叫「敲入（Knock-In）」的机制。",
        "ELS 通常只要基础资产（如股指）不跌破某个水平，就给约定收益。可一旦碰到那条下线，也就是敲入水平，情况就急转。从那之后，指数跌多少，本金损失就可能照单反映。平时乖乖付息，一次大跌就可能把本金削掉一大块——这就是「有条件」这个词真正的分量。",
        "所以成长资产该按「最坏情况下亏多少我还扛得住」来挑，而不是「能赚多少」。把风险和预期收益放两个轴上，找到自己的位置。下一篇，我们把前面看过的安全资产和成长资产真正「怎么搭配」，用带具体金额的组合来收尾。",
      ],
    },
    invest5: {
      title: "现金投资策略 第5部. 分情形的组合",
      excerpt: "来实战：有1,000万韩元现金会怎么分？按性格的配置，以及再平衡的例行。",
      body: [
        "从第1部到第4部，我们依次看了读阶段、利率与汇率、安全资产、成长资产。现在是真正的实战。假设你账户里现在有1,000万韩元现金，该怎么分？",
        "没有标准答案，但有标准：就是「你的性格和情形」。同样的1,000万韩元，按你能承受多少风险，分法会完全不同。",
        "偏保守就把重心放在防守侧，比如现金400万·安全资产450万·成长资产150万韩元，是把不亏放第一的配置。中立就200·400·400，安全和成长均衡。激进就100·200·700，重仓成长，同时留一块应急现金坐垫。",
        "::figure:invest5Figure::",
        "这里的安全资产，就当作第3部里的 RP·债券之类；成长资产，就当作第4部里的股票·ETF 之类。比例只是示例，按自己情况稍作调整就行。",
        "但这还没完。组合里真正重要的是「分好之后」。时间一长，涨得多的资产占比会自己变大。比如成长资产大涨，最初的40%不知不觉变成55%，你的组合在不知不觉间越来越激进。",
        "所以需要「再平衡」。大约一年一次，把比例调回最初设定。把涨多的卖一点、补上没涨的，就自动实现「高卖低买」。这是靠规则、而不是靠情绪去买卖的机制。",
        "说到底，投资不是一次性的决定，而更像是定期检查的例行公事。与其一开始就苦苦追求完美组合，不如从能让你安心入睡的配置起步，一年调一次。这就够了。愿这五篇的旅程，成为你确定第一份配置的小地图。",
      ],
    },
    homeRule1: {
      title: "买房前必知的三大规制（DSR·LTV·土地交易许可制）",
      excerpt: "买房前搞懂这三个词，就成功了一半。用最简单的话讲清 DSR、LTV 和土地交易许可制。",
      body: [
        "下定决心买房后，最先撞上的是一堆陌生缩写：DSR、LTV、土地交易许可制。新闻里总出现，却很少有人好好解释。只要弄懂这三个，你就能看清「能买多贵的房、能贷多少款」。",
        "第一，DSR（总负债本息偿还比率）看的是「还款能力」。一年要还的所有债务本息加起来，不能超过年收入的40%。年收入5,000万韩元，一年还款超过2,000万的贷款就很难批。而且不只房贷，信用贷、车贷分期都要算进去。",
        "第二，LTV（房屋抵押认定比率）是「按房价能贷多少」。一般上限是房价的70%。5亿的房子最多贷3.5亿，剩下1.5亿要用自有资金补上。地区和管制不同，这个比例还可能更低。",
        "第三，土地交易许可制性质不太一样。在特定区域买房，必须承诺「自己实际入住」并取得许可。它是为了堵住带租约买入的所谓「差价投资」，所以很难用于投资。先确认你想买的小区是不是许可区域。",
        "::figure:homeRule1Figure::",
        "总结一句：DSR看收入，LTV看房价，许可制看是否自住。三道门全过了，才能在合同上盖章。下一篇，我们来实际算算「到底能贷多少」。",
      ],
    },
    homeRule2: {
      title: "到底能贷多少？ 我的预算计算法",
      excerpt: "用 DSR 算出你的贷款额度。年收入5,000万韩元，能贷多少？",
      body: [
        "上篇说过 DSR 卡在「年收入的40%」。这次用真实数字算。以年收入5,000万韩元的人为例，一年的还款上限就是它的40%，即2,000万。所有贷款的本息都要塞进这个数里。",
        "::figure:homeRule2Figure::",
        "但有个坑。假设你已经有1,000万的信用贷，一年本息约300万，那能留给房贷的空间就不是2,000万，而是1,700万。已有的债务会直接吃掉你的房贷额度。",
        "所以找房前，能清的债先清掉更划算。尤其是透支账户（마통）和信用卡分期是隐形杀手——透支账户即使没用，常按「整个额度」算成负债；以为免息而安心的分期，在 DSR 里照样算。",
        "贷款种类也影响额度。垫脚石、保金贷这类政策贷利率低、条件好，但有收入和房价门槛，并非人人可贷。市中银行贷款门槛低，但利率高。先看自己符不符合政策贷标准，不行再比较银行。",
        "如果觉得算起来复杂，银行 App 或住房金融公社网站的「DSR 计算器」一键就出。不过亲手算一遍，能看懂「为什么是这个数」，就不会被中介或银行牵着走。知道额度后，就该进入真正的签约了。",
      ],
    },
    homeRule3: {
      title: "实战！ 从签约到入住的安全五步",
      excerpt: "从确认预算到入住，按顺序走就能避免事故。最关键的一步另有其人。",
      body: [
        "摸清额度后就进入实战。买房的过程，顺序真的很重要。跳过一步，可能赔上定金，或因贷款不够而陷入困境。介绍安全的五个步骤。",
        "::figure:homeRule3Figure::",
        "第一步，确认预算。把手头现金（自有资金）和能贷的额度相加，定出「真正能花的金额」，并预先算上取得税、中介费、搬家费等杂费。按房价多算几个百分点比较稳妥。",
        "第二步，找房。预算定了就只看范围内的房。一旦开始看超预算的房，眼光只会变高、心也跟着动摇。脚力和 App 并用，并务必用登记簿誊本确认房主和抵押（债务）状况。",
        "第三步，预审（★最重要）。看中房子后，签约前先问银行「买这套房能贷多少？」。跳过这步先签约，万一贷款比预想的少，就可能付不出尾款、整笔定金打水漂。一定要在签约前做。",
        "第四步，签约。预审确认了贷款再写合同。这时一句特约能保护你。写上「尾款日前卖方注销全部抵押」，以及「贷款未获批则退还定金并解除合同」之类的条款。口头承诺不算证据。",
        "第五步，放款与入住。按尾款日放款，付尾款的同时办理产权过户和迁入登记。搬家当天把迁入登记和确定日期一并办好，你的权利才算稳固。只要按顺序走，买房会比想象中更安全。",
      ],
    },
  },
};

export const RECOVERED_WRITING: Record<"ko" | "en" | "ja" | "zh", RecoveredWriting> = {
  ko: {
    all: "전체",
    searchPlaceholder: "제목·요약 검색",
    empty: "조건에 맞는 글이 없어요.",
    seriesCount: "{{n}}편 시리즈",
    series: {
      homeRule: {
        title: "내 집 마련",
        desc: "규제부터 계약까지, 생애 첫 집 사기 가이드.",
      },
      invest: {
        title: "현금 투자 전략",
        desc: "시장 국면 읽기부터 포트폴리오까지.",
      },
    },
    tags: {
      housing: "부동산",
      finance: "재테크",
    },
  },
  en: {
    all: "All",
    searchPlaceholder: "Search title or summary",
    empty: "No posts match your filters.",
    seriesCount: "{{n}}-part series",
    series: {
      homeRule: {
        title: "Buying a home",
        desc: "From the rules to the contract — a first-home guide.",
      },
      invest: {
        title: "Cash investing strategy",
        desc: "From reading the market phase to your portfolio.",
      },
    },
    tags: {
      housing: "Housing",
      finance: "Finance",
    },
  },
  ja: {
    all: "すべて",
    searchPlaceholder: "タイトル・要約を検索",
    empty: "条件に合う記事がありません。",
    seriesCount: "{{n}}編シリーズ",
    series: {
      homeRule: {
        title: "マイホーム購入",
        desc: "規制から契約まで、初めての住宅購入ガイド。",
      },
      invest: {
        title: "現金投資戦略",
        desc: "市場の局面の読み方からポートフォリオまで。",
      },
    },
    tags: {
      housing: "不動産",
      finance: "資産運用",
    },
  },
  zh: {
    all: "全部",
    searchPlaceholder: "搜索标题或摘要",
    empty: "没有符合条件的文章。",
    seriesCount: "{{n}}篇系列",
    series: {
      homeRule: {
        title: "买房",
        desc: "从规制到签约，人生第一套房指南。",
      },
      invest: {
        title: "现金投资策略",
        desc: "从读懂市场阶段到资产组合。",
      },
    },
    tags: {
      housing: "房产",
      finance: "理财",
    },
  },
};
