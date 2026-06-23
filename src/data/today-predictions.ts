import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/23 今日预测 (Matchday 13 — K/L组首轮) ======
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '葡萄牙', team2: '乌兹别克', group: 'K', ground: '休斯顿', time: '13:00 UTC-5',
    elo1: 1989, elo2: 1714, eloDiff: 275,
    model: { home: 0.6625, draw: 0.2076, away: 0.13 },
    market: { home: 0.83, draw: 0.25, away: 0.01 },
    lambda: { home: 1.99, away: 0.75, total: 2.74 },
    gap: { team: '葡萄牙', value: -16.8, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: '马丁内斯', coach2: '卡塔内茨',
    style1: 'Ronaldo核心+快速边路。B费+B席中场双核创造力世界级。首轮首战需快速进入状态。',
    style2: '防守紧凑+有限反击。亚洲杯2023曾进8强。Fayzullaev(中央陆军)是进攻核心。首战大概率5后卫死守。',
    lineup1: 'Diogo Costa; Dalot, R Dias, Inacio, N Mendes; B Fernandes, Palhinha, B Silva; P Neto, Ronaldo, R Leao',
    lineup2: 'Ergashev; Alijonov, Khusanov, Ashurmatov, Abdullaev; Fayzullaev, Khamrobekov, Shukurov, Urunov; Sergeev',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [

      { area: 'Ronaldo vs 乌兹别克防线', advantage: '葡萄牙(碾压)', reason: 'Ronaldo历史最佳之一。乌兹别克中卫缺乏对世界级前锋经验' },
      { area: '中场控制', advantage: '葡萄牙(碾压)', reason: 'B费+B席+Pallhinha=曼联+曼城+拜仁级别' },
      { area: '反击速度', advantage: '乌兹别克(微)', reason: 'Fayzullaev俄超技术最好之一。葡萄牙高位防线有暴露空间' },
      { area: '定位球', advantage: '葡萄牙', reason: 'Ronaldo头球+R Dias定位球威胁' },
    ],
    groupContext: 'K组首轮。葡萄牙(Elo1989)vs乌兹别克(1714)。淘汰赛路径: K1对best 3rd(~1700)vs K2对L2(~1912克)。争头名动力极强(差距200+Elo)。',
    handicaps: [{line:-2, win:0.208, draw:0.204, lose:0.587}, {line:-1.5, win:0.413, draw:0.000, lose:0.587}, {line:-1, win:0.413, draw:0.250, lose:0.338}, {line:-0.5, win:0.662, draw:0.000, lose:0.338}, {line:0, win:0.662, draw:0.208, lose:0.130}, {line:0.5, win:0.963, draw:0.000, lose:0.037}, {line:1, win:0.870, draw:0.093, lose:0.037}],
    overUnder: [{line:1.5, over:0.992, under:0.008}],
    predictions: [],
    recommendations: [{type:'让球', pick:'乌兹别克+2', odds:'@1.93', modelProb:0.587, reason:'模型输2球内58.7%>需51.8%→+6.9pp。首战谨慎+乌兹别克亚洲杯防守纪律'}],
    analysis: {
      groupSituation: 'K组首轮。葡萄牙(Elo1989)vs乌兹别克(1714)。淘汰赛路径: K1对best 3rd(~1700)vs K2对L2(~1912克)。争头名动力极强(差距200+Elo)。',
      lineup1Detail: `葡萄牙 (4-3-3) — 马丁内斯\n\nRonaldo核心+快速边路。B费+B席中场双核创造力世界级。首轮首战需快速进入状态。\n\n首发: Diogo Costa; Dalot, R Dias, Inacio, N Mendes; B Fernandes, Palhinha, B Silva; P Neto, Ronaldo, R Leao`,
      lineup2Detail: `乌兹别克 (4-2-3-1) — 卡塔内茨\n\n防守紧凑+有限反击。亚洲杯2023曾进8强。Fayzullaev(中央陆军)是进攻核心。首战大概率5后卫死守。\n\n首发: Ergashev; Alijonov, Khusanov, Ashurmatov, Abdullaev; Fayzullaev, Khamrobekov, Shukurov, Urunov; Sergeev`,
      styleAnalysis: `**葡萄牙**: Ronaldo核心+快速边路。B费+B席中场双核创造力世界级。首轮首战需快速进入状态。\n\n**乌兹别克**: 防守紧凑+有限反击。亚洲杯2023曾进8强。Fayzullaev(中央陆军)是进攻核心。首战大概率5后卫死守。`,
      tacticalNarrative: `首轮首战。双方均无积分→无压力→开放对攻概率高。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型66.2% vs 市场83.0%\n\n差距-16.8pp。Elo差275。lambda=1.99/0.75(total=2.74)。Form因子未激活(首轮无历史数据)`,
      betReasoning: `首轮首战=信息最少阶段→不确定性最大→仓位应偏保守。`
    },
    commercialAnalysis: {
      summary: '葡萄牙大热门。Elo275。首轮首战—葡萄牙慢热传统。乌兹别克亚洲杯8强防守能力(淘汰赛2零封)。无明确value。',
      approvedPicks: [

        { pick: '乌兹别克+2', odds: '@1.93', verdict: 'approved', edge: '+6.9pp', reasoning: '防守型弱队+2天然优势。葡萄牙首战慢热+乌兹别克亚洲杯防守韧性', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '葡萄牙-1.5', odds: '@1.75', verdict: 'rejected', edge: '-13pp(模型41%<需57%)', reasoning: '葡萄牙赢2+球仅41%→显著负EV。首战不追深盘', category: 'trap' },
      ],
      marketBehavior: '葡萄牙\'Ronaldo效应\'+品牌溢价。市场-1.5深盘说明预期轻松取胜但模型不认同。',
      kellyNote: '建议0.5%试探仓。首轮比赛→信息最少→不确定性最大。'
    },
    confidence: 'high'
  },
  {
    team1: '哥伦比亚', team2: '刚果(金)', group: 'K', ground: '瓜达拉哈拉', time: '16:00 UTC-6',
    elo1: 1982, elo2: 1652, eloDiff: 330,
    model: { home: 0.7177, draw: 0.1866, away: 0.0957 },
    market: { home: 0.87, draw: 0.25, away: 0.01 },
    lambda: { home: 2.11, away: 0.63, total: 2.74 },
    gap: { team: '哥伦比亚', value: -15.2, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '洛伦索', coach2: '德萨布雷',
    style1: '技术型传控+快速转换。Luis Diaz(利物浦)是进攻核心。2024美洲杯亚军证明实力。',
    style2: '身体对抗+速度反击。2024 AFCON表现不俗。Wissa(布伦特福德)+Bakambu(贝蒂斯)双核。防守组织一般但反击极快。',
    lineup1: 'Vargas; Munoz, Cuesta, Lucumi, Mojica; Lerma, Uribe; Arias, James, L Diaz; J Duran',
    lineup2: 'M\'Pasi; Kalulu, Mbemba, Inonga, Masuaku; Pickel, Moutoussamy; Wissa, Kakuta, Bongonda; Bakambu',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [

      { area: 'Luis Diaz vs DR Congo右路', advantage: '哥伦比亚(碾压)', reason: 'Diaz(利物浦)世界级左边锋。Kalulu法甲级无法单防' },
      { area: '中场组织', advantage: '哥伦比亚', reason: 'James(33岁)大赛创造力仍在。Lerma(水晶宫)防守覆盖' },
      { area: '反击速度', advantage: '刚果(金)', reason: 'Wissa(英超)+Bakambu(西甲)反击双核。哥伦比亚高防线有暴露空间' },
      { area: '身体对抗', advantage: '刚果(金)', reason: '非洲球队天然身体优势。Mbemba(马赛)法甲顶级中卫' },
    ],
    groupContext: 'K组首轮关键战。哥伦比亚(Elo1982)vs刚果(金)(1652)—Delta330碾压场。胜者小组头名主动。淘汰赛路径: K1对best 3rd(~1700)vs K2对L2(~1912克)。争头名动力极强。',
    handicaps: [{line:-2, win:0.251, draw:0.219, lose:0.530}, {line:-1.5, win:0.470, draw:0.000, lose:0.530}, {line:-1, win:0.470, draw:0.248, lose:0.282}, {line:-0.5, win:0.718, draw:0.000, lose:0.282}, {line:0, win:0.718, draw:0.187, lose:0.096}, {line:0.5, win:0.977, draw:0.000, lose:0.024}, {line:1, win:0.904, draw:0.072, lose:0.024}],
    overUnder: [{line:1.5, over:0.996, under:0.004}],
    predictions: [],
    recommendations: [{type:'大小球', pick:'Over 2.5', odds:'@1.90', modelProb:0.52, reason:'lambda=2.74→预期~3球。首战无积分压力→开放对攻概率高'},{type:'胜平负', pick:'哥伦比亚胜', odds:'@1.55', modelProb:0.718, reason:'模型71.8%>需64.5%→+7.3pp。Elo330+美洲杯亚军底蕴'}],
    analysis: {
      groupSituation: 'K组首轮关键战。哥伦比亚(Elo1982)vs刚果(金)(1652)—Delta330碾压场。胜者小组头名主动。淘汰赛路径: K1对best 3rd(~1700)vs K2对L2(~1912克)。争头名动力极强。',
      lineup1Detail: `哥伦比亚 (4-2-3-1) — 洛伦索\n\n技术型传控+快速转换。Luis Diaz(利物浦)是进攻核心。2024美洲杯亚军证明实力。\n\n首发: Vargas; Munoz, Cuesta, Lucumi, Mojica; Lerma, Uribe; Arias, James, L Diaz; J Duran`,
      lineup2Detail: `刚果(金) (4-3-3) — 德萨布雷\n\n身体对抗+速度反击。2024 AFCON表现不俗。Wissa(布伦特福德)+Bakambu(贝蒂斯)双核。防守组织一般但反击极快。\n\n首发: M'Pasi; Kalulu, Mbemba, Inonga, Masuaku; Pickel, Moutoussamy; Wissa, Kakuta, Bongonda; Bakambu`,
      styleAnalysis: `**哥伦比亚**: 技术型传控+快速转换。Luis Diaz(利物浦)是进攻核心。2024美洲杯亚军证明实力。\n\n**刚果(金)**: 身体对抗+速度反击。2024 AFCON表现不俗。Wissa(布伦特福德)+Bakambu(贝蒂斯)双核。防守组织一般但反击极快。`,
      tacticalNarrative: `首轮首战。双方均无积分→无压力→开放对攻概率高。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型71.8% vs 市场87.0%\n\n差距-15.2pp。Elo差330。lambda=2.11/0.63(total=2.74)。Form因子未激活(首轮无历史数据)`,
      betReasoning: `首轮首战=信息最少阶段→不确定性最大→仓位应偏保守。`
    },
    commercialAnalysis: {
      summary: '哥伦比亚优势明显。Elo差330碾压场。核心value:哥伦比亚胜@1.55(+7.3pp)。',
      approvedPicks: [

        { pick: '哥伦比亚胜', odds: '@1.55', verdict: 'approved', edge: '+7.3pp', reasoning: '模型71.8%>需64.5%。Elo330+美洲杯亚军+争头名动力', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '哥伦比亚-1.5', odds: '@2.10', verdict: 'rejected', edge: '-5pp(47%<48%)', reasoning: '让1.5球覆盖仅47%→边缘负EV。首战不追深盘', category: 'trap' },
      ],
      marketBehavior: '市场定价理性—哥伦比亚@1.55反映合理胜率(~65%)。模型71.8%略高于市场。刚果(金)被合理低估。',
      kellyNote: '哥伦比亚胜建议2%仓位(+7.3pp edge)。Elo330+争头名=高概率碾压。'
    },
    confidence: 'high'
  },
  {
    team1: '英格兰', team2: '加纳', group: 'L', ground: '波士顿', time: '17:00 UTC-4',
    elo1: 2024, elo2: 1510, eloDiff: 514,
    model: { home: 0.8589, draw: 0.1133, away: 0.0277 },
    market: { home: 0.951, draw: 0.25, away: 0.01 },
    lambda: { home: 2.55, away: 0.3, total: 2.85 },
    gap: { team: '英格兰', value: -9.2, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '图赫尔', coach2: '阿多',
    style1: '控球型传控+边路爆破。Bellingham(皇马)+Kane(拜仁)世界级双核。2024欧洲杯亚军+2022世界杯8强。图赫尔体系强调宽度+高位压迫。',
    style2: '身体对抗+速度反击。2022世界杯曾胜韩国、逼平乌拉圭。Kudus(西汉姆)+J.Ayew(水晶宫)英超经验。防守组织较差但反击极具威胁。',
    lineup1: 'Pickford; TAA, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Grealish; Kane',
    lineup2: 'Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Samed, Abdul Samed; Kudus, J Ayew, Sulemana; I Williams',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [

      { area: 'Kane vs 加纳中卫', advantage: '英格兰(碾压)', reason: 'Kane(32岁,拜仁)世界最佳9号之一。加纳Djiku/Salisu法甲级但无法单防' },
      { area: '中场控制', advantage: '英格兰(碾压)', reason: 'Rice(阿森纳)+Bellingham(皇马)=世界级双中场' },
      { area: '反击速度', advantage: '加纳(微)', reason: 'Kudus(西汉姆)英超最具爆发力边锋之一。Sulemana速度极快' },
      { area: '个体天赋', advantage: '英格兰(碾压)', reason: 'Kane+Bellingham+Foden+Saka=6亿欧攻击线。加纳无世界级防守者' },
    ],
    groupContext: 'L组首轮。英格兰(Elo2024)是头号种子。同组克罗地亚(1912)/加纳(1510)/巴拿马(1730)。淘汰赛路径: L1对best 3rd(~1700)vs L2对K2(~1982哥伦比亚)。争头名极强(差距280+Elo)。',
    handicaps: [{line:-2, win:0.406, draw:0.241, lose:0.352}, {line:-1.5, win:0.647, draw:0.000, lose:0.353}, {line:-1, win:0.648, draw:0.211, lose:0.141}, {line:-0.5, win:0.858, draw:0.000, lose:0.142}, {line:0, win:0.859, draw:0.113, lose:0.028}, {line:0.5, win:0.996, draw:0.000, lose:0.004}, {line:1, win:0.972, draw:0.024, lose:0.004}],
    overUnder: [{line:1.5, over:1.000, under:0.000}],
    predictions: [],
    recommendations: [{type:'让球', pick:'加纳+2', odds:'@1.95', modelProb:0.648, reason:'模型输2球内64.8%>需51.3%→+13.5pp! 英格兰首战慢热+加纳世界杯韧性'},{type:'大小球', pick:'Under 2.5', odds:'@1.98', modelProb:0.58, reason:'首轮传统保守+图赫尔首战磨合不足→总进球偏低'}],
    analysis: {
      groupSituation: 'L组首轮。英格兰(Elo2024)是头号种子。同组克罗地亚(1912)/加纳(1510)/巴拿马(1730)。淘汰赛路径: L1对best 3rd(~1700)vs L2对K2(~1982哥伦比亚)。争头名极强(差距280+Elo)。',
      lineup1Detail: `英格兰 (4-2-3-1) — 图赫尔\n\n控球型传控+边路爆破。Bellingham(皇马)+Kane(拜仁)世界级双核。2024欧洲杯亚军+2022世界杯8强。图赫尔体系强调宽度+高位压迫。\n\n首发: Pickford; TAA, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Grealish; Kane`,
      lineup2Detail: `加纳 (4-3-3) — 阿多\n\n身体对抗+速度反击。2022世界杯曾胜韩国、逼平乌拉圭。Kudus(西汉姆)+J.Ayew(水晶宫)英超经验。防守组织较差但反击极具威胁。\n\n首发: Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Samed, Abdul Samed; Kudus, J Ayew, Sulemana; I Williams`,
      styleAnalysis: `**英格兰**: 控球型传控+边路爆破。Bellingham(皇马)+Kane(拜仁)世界级双核。2024欧洲杯亚军+2022世界杯8强。图赫尔体系强调宽度+高位压迫。\n\n**加纳**: 身体对抗+速度反击。2022世界杯曾胜韩国、逼平乌拉圭。Kudus(西汉姆)+J.Ayew(水晶宫)英超经验。防守组织较差但反击极具威胁。`,
      tacticalNarrative: `首轮首战。双方均无积分→无压力→开放对攻概率高。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型85.9% vs 市场95.1%\n\n差距-9.2pp。Elo差514。lambda=2.55/0.3(total=2.85)。Form因子未激活(首轮无历史数据)`,
      betReasoning: `首轮首战=信息最少阶段→不确定性最大→仓位应偏保守。`
    },
    commercialAnalysis: {
      summary: '英格兰巨大热门。Elo差514本届最大之一。加纳+2是本日最佳value信号(+13.5pp)。首轮首战→不追深盘。',
      approvedPicks: [

        { pick: '加纳+2', odds: '@1.95', verdict: 'approved', edge: '+13.5pp(本日最大!)', reasoning: '加纳输2球内64.8%>51.3%。英格兰首战慢热+加纳世界杯韧性。TYPE_B_BRAND', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '英格兰-2.5', odds: '@2.45', verdict: 'rejected', edge: '-22pp(41%<41%)', reasoning: '首战追深盘=赌博。英格兰赢3+球仅41%', category: 'trap' },
      ],
      marketBehavior: 'TYPE_B_BRAND—英格兰\'黄金一代\'品牌=市场自动溢价。2024欧洲杯亚军≠碾压。加纳世界杯历史证明韧性。',
      kellyNote: '加纳+2建议2.5-3%仓位(+13.5pp edge本日最大!)。英格兰大胜概率仅41%。'
    },
    confidence: 'high'
  },
  {
    team1: '巴拿马', team2: '克罗地亚', group: 'L', ground: '多伦多', time: '20:00 UTC-4',
    elo1: 1730, elo2: 1912, eloDiff: -182,
    model: { home: 0.1959, draw: 0.2395, away: 0.5646 },
    market: { home: 0.26, draw: 0.25, away: 0.49 },
    lambda: { home: 0.93, away: 1.75, total: 2.67 },
    gap: { team: '巴拿马', value: -6.4, direction: 'market_higher' },
    formation1: '5-3-2', formation2: '4-3-3', coach1: '克里斯蒂安森', coach2: '达利奇',
    style1: '防守型5后卫+有限反击。2026预选赛侥幸晋级。整体实力有限但防守纪律尚可。全线退守是唯一策略。',
    style2: 'Modric核心传控+经验制胜。2022世界杯季军+2024欧洲杯16强。黄金一代老化但大赛经验丰富。Gvardiol(曼城)世界级中卫。',
    lineup1: 'Mejia; Murillo, Escobar, Cordoba, Andrade, Davis; Godoy, Carrasquilla, Barcenas; Fajardo, Diaz',
    lineup2: 'Livakovic; Stanisic, Sutalo, Gvardiol, Sosa; Modric, Brozovic, Kovacic; Pasalic, Kramaric, Perisic',
    injuries1: '无重大伤情', injuries2: '全员健康(Modric体能管理/40岁)',
    tacticalMatchup: [

      { area: 'Modric组织vs巴拿马中场', advantage: '克罗地亚(碾压)', reason: 'Modric(40岁,皇马)仍是世界最佳组织者之一。巴拿马无法限制' },
      { area: '巴拿马5后卫防守', advantage: '巴拿马(微)', reason: '5-3-2=全线退守。2023金杯赛曾逼平墨西哥。能顶60-70分钟' },
      { area: '边路宽度', advantage: '克罗地亚', reason: 'Perisic(35岁)+Sosa双翼提供持续传中。巴拿马翼卫防守有漏洞' },
      { area: '大赛经验', advantage: '克罗地亚(碾压)', reason: '2022世界杯季军+2018世界杯亚军。巴拿马世界杯经验为0' },
    ],
    groupContext: 'L组首轮。克罗地亚(Elo1912)vs巴拿马(1730)—Delta182可控优势。淘汰赛路径:同英格兰组→争头名至关重要。',
    handicaps: [{line:-2, win:0.017, draw:0.049, lose:0.934}, {line:-1.5, win:0.066, draw:0.000, lose:0.934}, {line:-1, win:0.066, draw:0.130, lose:0.804}, {line:-0.5, win:0.196, draw:0.000, lose:0.804}, {line:0, win:0.196, draw:0.239, lose:0.565}, {line:0.5, win:0.682, draw:0.000, lose:0.318}, {line:1, win:0.435, draw:0.246, lose:0.318}],
    overUnder: [{line:1.5, over:0.856, under:0.144}],
    predictions: [],
    recommendations: [{type:'让球', pick:'巴拿马+1.5', odds:'@1.90', modelProb:0.804, reason:'模型输2球内80.4%>需52.6%→+27.8pp! 巴5后卫死守+克老化→大概率小比分'},{type:'大小球', pick:'Under 2.5', odds:'@1.85', modelProb:0.68, reason:'lambda=2.67→预期2-3球。巴全线退守+克进攻老化→小球概率高'}],
    analysis: {
      groupSituation: 'L组首轮。克罗地亚(Elo1912)vs巴拿马(1730)—Delta182可控优势。淘汰赛路径:同英格兰组→争头名至关重要。',
      lineup1Detail: `巴拿马 (5-3-2) — 克里斯蒂安森\n\n防守型5后卫+有限反击。2026预选赛侥幸晋级。整体实力有限但防守纪律尚可。全线退守是唯一策略。\n\n首发: Mejia; Murillo, Escobar, Cordoba, Andrade, Davis; Godoy, Carrasquilla, Barcenas; Fajardo, Diaz`,
      lineup2Detail: `克罗地亚 (4-3-3) — 达利奇\n\nModric核心传控+经验制胜。2022世界杯季军+2024欧洲杯16强。黄金一代老化但大赛经验丰富。Gvardiol(曼城)世界级中卫。\n\n首发: Livakovic; Stanisic, Sutalo, Gvardiol, Sosa; Modric, Brozovic, Kovacic; Pasalic, Kramaric, Perisic`,
      styleAnalysis: `**巴拿马**: 防守型5后卫+有限反击。2026预选赛侥幸晋级。整体实力有限但防守纪律尚可。全线退守是唯一策略。\n\n**克罗地亚**: Modric核心传控+经验制胜。2022世界杯季军+2024欧洲杯16强。黄金一代老化但大赛经验丰富。Gvardiol(曼城)世界级中卫。`,
      tacticalNarrative: `首轮首战。双方均无积分→无压力→开放对攻概率高。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型19.6% vs 市场26.0%\n\n差距-6.4pp。Elo差-182。lambda=0.93/1.75(total=2.67)。Form因子未激活(首轮无历史数据)`,
      betReasoning: `首轮首战=信息最少阶段→不确定性最大→仓位应偏保守。`
    },
    commercialAnalysis: {
      summary: '克罗地亚老化但实力碾压。巴拿马+1.5有+27.8pp巨大正EV(巴5后卫死守+克老化)。本日第二value信号。',
      approvedPicks: [

        { pick: '巴拿马+1.5', odds: '@1.90', verdict: 'approved', edge: '+27.8pp(本日第二!)', reasoning: '巴5后卫死守80.4%>52.6%。克罗地亚黄金一代老化→进攻效率下降', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '克罗地亚-1.5', odds: '@2.30', verdict: 'rejected', edge: '-31pp(6.6%<43%)', reasoning: '最大陷阱! 克赢2+球仅6.6%→史诗级负EV', category: 'trap' },
      ],
      marketBehavior: '克罗地亚\'2022季军\'光环→市场给-1.5深盘。实际Elo差仅182+阵容严重老化→碾压力远不及2022。',
      kellyNote: '巴拿马+1.5建议2%仓位(+27.8pp edge)。本日第二大value(仅次于加纳+2)。克老化+巴防守纪律=核心逻辑。'
    },
    confidence: 'high'
  },
]

export const goalDistributions: Record<string, GoalDistribution> = {
  '葡萄牙vs乌兹别克': { team1: '葡萄牙', team2: '乌兹别克', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0002,'-4':0.0011,'-3':0.0065,'-2':0.0291,'-1':0.093,'0':0.2076,'1':0.2496,'2':0.2045,'3':0.1214,'4':0.0563,'5':0.0214,'6':0.0068,'7':0.0019,'8':0.0005} },
  '哥伦比亚vs刚果(金)': { team1: '哥伦比亚', team2: '刚果(金)', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0001,'-4':0.0005,'-3':0.0036,'-2':0.0193,'-1':0.0722,'0':0.1866,'1':0.2476,'2':0.2194,'3':0.1399,'4':0.0694,'5':0.0281,'6':0.0096,'7':0.0028,'8':0.0007} },
  '英格兰vs加纳': { team1: '英格兰', team2: '加纳', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0,'-4':0.0,'-3':0.0003,'-2':0.0033,'-1':0.0241,'0':0.1133,'1':0.211,'2':0.2409,'3':0.1928,'4':0.1183,'5':0.0588,'6':0.0245,'7':0.0088,'8':0.0028} },
  '巴拿马vs克罗地亚': { team1: '巴拿马', team2: '克罗地亚', diffs: {'-8':0.0002,'-7':0.0008,'-6':0.0034,'-5':0.0122,'-4':0.0366,'-3':0.0904,'-2':0.1748,'-1':0.2461,'0':0.2395,'1':0.1296,'2':0.0493,'3':0.0135,'4':0.0029,'5':0.0005,'6':0.0001,'7':0.0,'8':0.0} },
}

export const tournamentStats: TournamentStats = {
  totalMatches: 48,
  totalGoals: 118,
  avgGoals: 2.46,
  homeWins: 21,
  draws: 15,
  awayWins: 12,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '西班牙 4-0 沙特', scorer: '待补充', date: '2026-06-21' }
}

export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '葡萄牙vs乌兹别克': {
    summary: '葡萄牙大热门。Elo275。首轮首战—葡萄牙慢热传统。乌兹别克亚洲杯8强防守能力(淘汰赛2零封)。无明确value。',
    approvedPicks: [
      { pick: '乌兹别克+2', odds: '@1.93', verdict: 'approved', edge: '+6.9pp', reasoning: '防守型弱队+2天然优势。葡萄牙首战慢热+乌兹别克亚洲杯防守韧性', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '葡萄牙-1.5', odds: '@1.75', verdict: 'rejected', edge: '-13pp(模型41%<需57%)', reasoning: '葡萄牙赢2+球仅41%→显著负EV。首战不追深盘', category: 'trap' },
    ],
    marketBehavior: '葡萄牙\'Ronaldo效应\'+品牌溢价。市场-1.5深盘说明预期轻松取胜但模型不认同。',
    kellyNote: '建议0.5%试探仓。首轮比赛→信息最少→不确定性最大。'
  },
  '哥伦比亚vs刚果(金)': {
    summary: '哥伦比亚优势明显。Elo差330碾压场。核心value:哥伦比亚胜@1.55(+7.3pp)。',
    approvedPicks: [
      { pick: '哥伦比亚胜', odds: '@1.55', verdict: 'approved', edge: '+7.3pp', reasoning: '模型71.8%>需64.5%。Elo330+美洲杯亚军+争头名动力', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '哥伦比亚-1.5', odds: '@2.10', verdict: 'rejected', edge: '-5pp(47%<48%)', reasoning: '让1.5球覆盖仅47%→边缘负EV。首战不追深盘', category: 'trap' },
    ],
    marketBehavior: '市场定价理性—哥伦比亚@1.55反映合理胜率(~65%)。模型71.8%略高于市场。刚果(金)被合理低估。',
    kellyNote: '哥伦比亚胜建议2%仓位(+7.3pp edge)。Elo330+争头名=高概率碾压。'
  },
  '英格兰vs加纳': {
    summary: '英格兰巨大热门。Elo差514本届最大之一。加纳+2是本日最佳value信号(+13.5pp)。首轮首战→不追深盘。',
    approvedPicks: [
      { pick: '加纳+2', odds: '@1.95', verdict: 'approved', edge: '+13.5pp(本日最大!)', reasoning: '加纳输2球内64.8%>51.3%。英格兰首战慢热+加纳世界杯韧性。TYPE_B_BRAND', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '英格兰-2.5', odds: '@2.45', verdict: 'rejected', edge: '-22pp(41%<41%)', reasoning: '首战追深盘=赌博。英格兰赢3+球仅41%', category: 'trap' },
    ],
    marketBehavior: 'TYPE_B_BRAND—英格兰\'黄金一代\'品牌=市场自动溢价。2024欧洲杯亚军≠碾压。加纳世界杯历史证明韧性。',
    kellyNote: '加纳+2建议2.5-3%仓位(+13.5pp edge本日最大!)。英格兰大胜概率仅41%。'
  },
  '巴拿马vs克罗地亚': {
    summary: '克罗地亚老化但实力碾压。巴拿马+1.5有+27.8pp巨大正EV(巴5后卫死守+克老化)。本日第二value信号。',
    approvedPicks: [
      { pick: '巴拿马+1.5', odds: '@1.90', verdict: 'approved', edge: '+27.8pp(本日第二!)', reasoning: '巴5后卫死守80.4%>52.6%。克罗地亚黄金一代老化→进攻效率下降', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '克罗地亚-1.5', odds: '@2.30', verdict: 'rejected', edge: '-31pp(6.6%<43%)', reasoning: '最大陷阱! 克赢2+球仅6.6%→史诗级负EV', category: 'trap' },
    ],
    marketBehavior: '克罗地亚\'2022季军\'光环→市场给-1.5深盘。实际Elo差仅182+阵容严重老化→碾压力远不及2022。',
    kellyNote: '巴拿马+1.5建议2%仓位(+27.8pp edge)。本日第二大value(仅次于加纳+2)。克老化+巴防守纪律=核心逻辑。'
  },
}