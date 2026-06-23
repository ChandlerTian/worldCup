import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/23 (K/L组R2 — Form因子激活) ======
// ✅ market数据来源: Pinnacle (The Odds API, 实时盘口) — 已修正6/23审计
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '葡萄牙', team2: '乌兹别克', group: 'K', ground: '休斯顿', time: '13:00 UTC-5',
    elo1: 1989, elo2: 1714, eloDiff: 275,
    model: { home: 0.6453, draw: 0.2152, away: 0.1395 },
    market: { home: 0.8445, draw: 0.1088, away: 0.0466, _note: 'Pinnacle (1.16/9.0/21.0, vig-removed)' },
    lambda: { home: 1.93, away: 0.77, total: 2.69 },
    gap: { team: '葡萄牙', value: 19.9, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: '马丁内斯', coach2: '卡塔内茨',
    style1: 'Ronaldo核心+快速边路。首轮1-1平刚果(金)表现低于预期。', style2: '首轮1-3负哥伦比亚但Fayzullaev进球。今天全力防守求1分。',
    lineup1: 'Diogo Costa; Dalot, R Dias, Inacio, N Mendes; B Fernandes, Palhinha, B Silva; P Neto, Ronaldo, R Leao', lineup2: 'Ergashev; Alijonov, Khusanov, Ashurmatov, Abdullaev; Fayzullaev, Khamrobekov, Shukurov, Urunov; Sergeev',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Ronaldo vs 乌兹别克防线', advantage: '葡萄牙(碾压)', reason: 'Ronaldo需证明首轮1-1非正常。葡萄牙反弹动力极强' },
      { area: '中场控制', advantage: '葡萄牙', reason: 'B费+B席需提升。首轮对DRC中场控制不足' },
      { area: '反击速度', advantage: '乌兹别克(微)', reason: 'Fayzullaev首轮进球状态火热。乌兹别克可能偷一个' },
    ],
    groupContext: 'K组R2。葡萄牙1分(1-1DRC)、哥伦比亚3分。葡必须赢否则落后→末轮压力巨大。淘汰赛路径争头名动力极强。',
    handicaps: [
      {line:-2.25, win:0.1938, draw:0, lose:0.7062, marketWin:'@1.98', marketLose:'@1.93', isMarketLine:true},
      {line:-2, win:0.1938, draw:0.1999, lose:0.6061},
      {line:-1.5, win:0.3937, draw:0, lose:0.6063},
      {line:-1, win:0.3937, draw:0.2514, lose:0.3547},
      {line:-0.5, win:0.6451, draw:0, lose:0.3549},
      {line:0, win:0.6451, draw:0.2152, lose:0.1395},
      {line:0.5, win:0.8603, draw:0, lose:0.1397},
      {line:1, win:0.8603, draw:0.0990, lose:0.0405},
    ],
    overUnder: [
      {line:1.5, over:0.7477, under:0.2523},
      {line:2.5, over:0.5007, under:0.4993},
      {line:3.0, over:0.2818, under:0.4961},
      {line:3.25, over:0.3919, under:0.6062, marketOver:'@2.05', marketUnder:'@1.85', isMarketLine:true},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'乌兹别克+2.25', odds:'@1.93', modelProb:0.7062, reason:'模型70.6%>需51.8%→+18.8pp。R1仅输哥伦比亚2球。葡萄牙首轮攻击力存疑'},
      {type:'大小球', pick:'Under 3.25', odds:'@1.85', modelProb:0.6062, reason:'模型60.6%>需54.1%→+6.5pp。葡萄牙λ=1.93→攻击乏力'},
    ],
    analysis: {
      groupSituation: 'K组R2。葡萄牙1分(1-1DRC)、哥伦比亚3分。葡必须赢否则落后→末轮压力巨大。淘汰赛路径争头名动力极强。',
      lineup1Detail: `葡萄牙 (4-3-3) — 马丁内斯\n\nRonaldo核心+快速边路。首轮1-1平刚果(金)表现低于预期。Form残差off=-1.13(对DRC预期2.1仅进1球→进攻乏力)。\n\n首发: Diogo Costa; Dalot, R Dias, Inacio, N Mendes; B Fernandes, Palhinha, B Silva; P Neto, Ronaldo, R Leao`,
      lineup2Detail: `乌兹别克 (4-2-3-1) — 卡塔内茨\n\n首轮1-3负哥伦比亚但Fayzullaev进球。今天全力防守求1分。Form残差off=+0.25。\n\n首发: Ergashev; Alijonov, Khusanov, Ashurmatov, Abdullaev; Fayzullaev, Khamrobekov, Shukurov, Urunov; Sergeev`,
      styleAnalysis: `**葡萄牙**: Ronaldo核心+快速边路。首轮1-1平刚果(金)表现低于预期。BUT: 强队首轮低迷→R2反弹概率系统性地高于模型预测(Type A反弹效应)。\n\n**乌兹别克**: 首轮1-3负哥伦比亚但Fayzullaev进球。今天必全力防守求1分。`,
      tacticalNarrative: `K/L组第2轮。各队有1场R1数据→form因子激活。葡萄牙R1 1-1=异常(Type A)→市场高估葡萄牙但方向正确。深盘-2.25穿盘仅19.4%→不建议追。`,
      modelInterpretation: `模型64.5% vs Pinnacle市场84.5%\n\nGap=+19.9pp(market higher)。λ=1.93/0.77(total=2.69)。Form(对手调整): 葡off=-1.13(进攻乏力) def=-0.25 乌off=+0.25 def=+1.75。CI95: 葡胜[49.0%-77.5%]`,
      betReasoning: `TYPE_A_INFO(强队首轮异常→市场有信息优势)→方向跟市场(葡胜)。但穿盘(-2.25)仅19.4%→乌兹别克+2.25有+18.8pp正EV。建议: 跟市场方向(葡胜)但不追深盘, 逆向押乌兹别克+2.25。大小球Under 3.25(+6.5pp)。`
    },
    commercialAnalysis: {
      summary: 'TYPE_A(反弹效应)→方向跟市场(葡胜)但深盘-2.25穿盘仅19.4%。乌兹别克+2.25(+18.8pp)、Under 3.25(+6.5pp)双value。',
      approvedPicks: [
        { pick: '乌兹别克+2.25', odds: '@1.93', verdict: 'approved', edge: '+18.8pp', reasoning: '模型70.6%>51.8%。葡萄牙-2.25穿盘仅19.4%→深盘无价值', category: 'core' },
        { pick: 'Under 3.25', odds: '@1.85', verdict: 'approved', edge: '+6.5pp', reasoning: '葡λ=1.93(攻击乏力)+乌兹别克全力防守→小球逻辑成立', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '葡萄牙-2.25', odds: '@1.98', verdict: 'rejected', edge: '-31pp(19.4%<50.5%)', reasoning: '葡萄牙穿3+球仅19.4%→史诗负EV', category: 'trap' },
        { pick: '葡萄牙-1.5', odds: '@1.55', verdict: 'rejected', edge: '-25pp(39.4%<64.5%)', reasoning: '赢2+球仅39.4%→深盘陷阱', category: 'trap' },
      ],
      marketBehavior: 'Pinnacle -2.25深盘反映市场预期葡萄牙反弹。方向对(葡大概率赢)但幅度错(穿盘概率远低于市场定价)。乌兹别克+2.25是今日最佳value。', kellyNote: '乌兹别克+2.25建议2%仓位(+18.8pp)。Under 3.25建议1%仓位(+6.5pp)。'
    },
    confidence: 'high'
  },
  {
    team1: '哥伦比亚', team2: '刚果(金)', group: 'K', ground: '瓜达拉哈拉', time: '16:00 UTC-6',
    elo1: 1982, elo2: 1652, eloDiff: 330,
    model: { home: 0.7276, draw: 0.1782, away: 0.0942 },
    market: { home: 0.6255, draw: 0.2351, away: 0.1394, _note: 'Pinnacle (1.56/4.15/7.0, vig-removed)' },
    lambda: { home: 2.21, away: 0.66, total: 2.86 },
    gap: { team: '哥伦比亚', value: 10.2, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '洛伦索', coach2: '德萨布雷',
    style1: '首轮3-1胜乌兹别克→Luis Diaz状态火热。赢则6分锁定出线。Form残差off=+1.05(超预期)。', style2: '首轮1-1逼平葡萄牙=最大冷门! Wissa进球证明攻击力。已证明防守韧性。',
    lineup1: 'Vargas; Munoz, Cuesta, Lucumi, Mojica; Lerma, Uribe; Arias, James, L Diaz; J Duran', lineup2: 'M\'Pasi; Kalulu, Mbemba, Inonga, Masuaku; Pickel, Moutoussamy; Wissa, Kakuta, Bongonda; Bakambu',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Luis Diaz vs DRC右路', advantage: '哥伦比亚(碾压)', reason: 'Diaz世界级。首轮对乌兹别克已证明' },
      { area: 'DRC反击vs哥伦比亚高线', advantage: '刚果(金)(微)', reason: 'Wissa首轮进球+1-1平葡萄牙证明能力' },
    ],
    groupContext: 'K组R2。哥伦比亚3分、DRC1分。哥胜则6分出线。淘汰赛路径争头名极强。DRC需至少1分保留出线希望。',
    handicaps: [
      {line:-2, win:0.2674, draw:0.2196, lose:0.5128},
      {line:-1.5, win:0.4870, draw:0, lose:0.5130},
      {line:-1, win:0.4870, draw:0.2404, lose:0.2724, marketWin:'@1.99', marketLose:'@1.93', isMarketLine:true},
      {line:-0.5, win:0.7274, draw:0, lose:0.2726},
      {line:0, win:0.7274, draw:0.1782, lose:0.0942},
      {line:0.5, win:0.9056, draw:0, lose:0.0944},
      {line:1, win:0.9056, draw:0.0703, lose:0.0239},
    ],
    overUnder: [
      {line:1.5, over:0.7761, under:0.2239},
      {line:2.0, over:0.5419, under:0.2211},
      {line:2.25, over:0.6590, under:0.3382, marketOver:'@1.95', marketUnder:'@1.95', isMarketLine:true},
      {line:2.5, over:0.5419, under:0.4581},
      {line:3.5, over:0.3186, under:0.6814},
    ],
    predictions: [],
    recommendations: [
      {type:'胜平负', pick:'哥伦比亚胜', odds:'@1.56', modelProb:0.7276, reason:'72.8%>64.1%→+8.7pp。TYPE_C结构性alpha。Elo330+首轮3-1'},
      {type:'大小球', pick:'Over 2.25', odds:'@1.95', modelProb:0.6590, reason:'65.9%>51.3%→+14.6pp! 两者R1都进球→开放对攻'},
    ],
    analysis: {
      groupSituation: 'K组R2。哥伦比亚3分、DRC1分。哥胜则6分出线。淘汰赛路径争头名极强。',
      lineup1Detail: `哥伦比亚 (4-2-3-1) — 洛伦索\n\n首轮3-1胜乌兹别克→Luis Diaz状态火热。赢则6分锁定出线。Form残差off=+1.05(对乌兹别克预期1.9进3球→超预期)。\n\n首发: Vargas; Munoz, Cuesta, Lucumi, Mojica; Lerma, Uribe; Arias, James, L Diaz; J Duran`,
      lineup2Detail: `刚果(金) (4-3-3) — 德萨布雷\n\n首轮1-1逼平葡萄牙=最大冷门! Wissa进球证明攻击力。已证明防守韧性。Form残差off=+0.38。\n\n首发: M'Pasi; Kalulu, Mbemba, Inonga, Masuaku; Pickel, Moutoussamy; Wissa, Kakuta, Bongonda; Bakambu`,
      styleAnalysis: `**哥伦比亚**: 首轮3-1胜乌兹别克→Luis Diaz状态火热。赢则6分锁定出线。Form正向(+1.05→进攻超预期)。\n\n**刚果(金)**: 首轮1-1逼平葡萄牙=最大冷门! 已证明防守韧性+反击能力。Wissa进球是真实威胁。`,
      tacticalNarrative: `TYPE_C(结构性alpha): 哥伦比亚model 72.8% > market 62.5%→+10.2pp。市场低估哥伦比亚真实实力。Elo330+Form正向→哥伦比亚胜是今日最确定pick。`,
      modelInterpretation: `模型72.8% vs Pinnacle市场62.5%\n\nGap=-10.2pp(model_higher=TYPE_C结构性alpha)。λ=2.21/0.66(total=2.86)。Form: 哥off=+1.05(超预期) def=-0.25 DRCoff=+0.38。CI95: 哥胜[57.4%-84.1%]`,
      betReasoning: `TYPE_C→核心alpha区。哥伦比亚胜@1.56有+8.7pp正EV。Over 2.25(+14.6pp)同样高价值。DRC已证明防守韧性→哥伦比亚-1深盘不宜追(仅48.7%)。胜平负+大小球双推。`
    },
    commercialAnalysis: {
      summary: 'TYPE_C结构性alpha(模型72.8%>市场62.5%=+10.2pp)。哥伦比亚胜@1.56+Over 2.25双value。市场为DRC1-1冷门过度调整。',
      approvedPicks: [
        { pick: '哥伦比亚胜', odds: '@1.56', verdict: 'approved', edge: '+8.7pp', reasoning: '72.8%>64.1%。TYPE_C核心alpha。Elo330+Form正向', category: 'core' },
        { pick: 'Over 2.25', odds: '@1.95', verdict: 'approved', edge: '+14.6pp', reasoning: '65.9%>51.3%。两队R1都进球→开放对攻+λ=2.86', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '哥伦比亚-1.5', odds: '@2.30', verdict: 'rejected', edge: '-6pp(48.7%<43.5%)', reasoning: 'DRC防守韧性不宜追深盘。穿2+球仅48.7%', category: 'trap' },
      ],
      marketBehavior: 'DRC首轮1-1冷门后市场对哥伦比亚谨慎→@1.56比纯Elo(330差)应有的更贵。这是机会:市场过度调整=价值回归窗口。', kellyNote: '哥伦比亚胜建议1.5%仓位(+8.7pp)。Over 2.25建议1.5%仓位(+14.6pp)。双core pick谨慎管理总敞口。'
    },
    confidence: 'high'
  },
  {
    team1: '英格兰', team2: '加纳', group: 'L', ground: '波士顿', time: '17:00 UTC-4',
    elo1: 2024, elo2: 1510, eloDiff: 514,
    model: { home: 0.8729, draw: 0.1003, away: 0.0268 },
    market: { home: 0.8114, draw: 0.1309, away: 0.0577, _note: 'Pinnacle (1.21/7.5/17.0, vig-removed)' },
    lambda: { home: 2.76, away: 0.34, total: 3.09 },
    gap: { team: '英格兰', value: 6.2, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '图赫尔', coach2: '阿多',
    style1: '首轮4-2胜克罗地亚→攻击力全开(4球!)。赢则6分锁定出线。Form残差off=+2.46(史诗级超预期)。', style2: '首轮1-0胜巴拿马→3分! Kudus是关键。防守需大幅提升vs英4球线。Form def=-1.25(对巴拿马零封→防守好)。',
    lineup1: 'Pickford; TAA, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Grealish; Kane', lineup2: 'Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Samed, Abdul Samed; Kudus, J Ayew, Sulemana; I Williams',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Kane vs 加纳中卫', advantage: '英格兰(碾压)', reason: 'Kane首轮进2球。加纳无法单防世界级9号' },
      { area: 'Kudus反击', advantage: '加纳(微)', reason: '加纳唯一威胁。英高防线有暴露可能' },
    ],
    groupContext: 'L组R2。英格兰3分(GD+2)、加纳3分(GD+1)。胜者6分出线+争头名。淘汰赛路径争头名极强。',
    handicaps: [
      {line:-2, win:0.4470, draw:0.2322, lose:0.3192, marketWin:'@1.98', marketLose:'@1.93', isMarketLine:true},
      {line:-1.5, win:0.6792, draw:0, lose:0.3208},
      {line:-1, win:0.6792, draw:0.1921, lose:0.1271},
      {line:-0.5, win:0.8713, draw:0, lose:0.1287},
      {line:0, win:0.8713, draw:0.1003, lose:0.0268},
      {line:0.5, win:0.9716, draw:0, lose:0.0284},
      {line:1, win:0.9716, draw:0.0229, lose:0.0039},
    ],
    overUnder: [
      {line:1.5, over:0.8093, under:0.1907},
      {line:2.5, over:0.5921, under:0.4079},
      {line:3.0, over:0.3683, under:0.4033, marketOver:'@1.99', marketUnder:'@1.89', isMarketLine:true},
      {line:3.5, over:0.3683, under:0.6317},
    ],
    predictions: [],
    recommendations: [
      {type:'胜平负', pick:'英格兰胜', odds:'@1.21', modelProb:0.8729, reason:'87.3%>82.6%→+4.7pp。TYPE_D→微正EV。确定性高但赔率低'},
      {type:'大小球', pick:'Under 3.0', odds:'@1.89', modelProb:0.6317, reason:'63.2%>52.9%→+10.3pp。加纳R1零封+英格兰可能控制节奏'},
    ],
    analysis: {
      groupSituation: 'L组R2。英格兰3分(GD+2)、加纳3分(GD+1)。胜者6分出线+争头名。淘汰赛路径争头名极强。',
      lineup1Detail: `英格兰 (4-2-3-1) — 图赫尔\n\n首轮4-2胜克罗地亚→攻击力全开(4球!)。赢则6分锁定出线。Form残差off=+2.46(对克预期2.1进4球→史诗超预期)。\n\n首发: Pickford; TAA, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Grealish; Kane`,
      lineup2Detail: `加纳 (4-3-3) — 阿多\n\n首轮1-0胜巴拿马→3分! Kudus是关键。防守需大幅提升vs英4球线。Form def=-1.25(对巴拿马零封→防守有纪律)。\n\n首发: Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Samed, Abdul Samed; Kudus, J Ayew, Sulemana; I Williams`,
      styleAnalysis: `**英格兰**: 首轮4-2胜克罗地亚→攻击力全开(4球!)。赢则6分锁定出线。Form off=+2.46→本届最佳单场进攻表现。\n\n**加纳**: 首轮1-0胜巴拿马→3分! Kudus是关键。Form def=-1.25(零封)→防守纪律可靠。`,
      tacticalNarrative: `TYPE_D_NOISE(gap仅6.2pp)→model与market基本一致。英格兰是更大更强的球队→胜率87.3%合理。加纳R1零封→穿盘能力存疑。推荐保守:英格兰胜(确定性)+Under 3.0(加纳防守纪律)。`,
      modelInterpretation: `模型87.3% vs Pinnacle市场81.1%\n\nGap=-6.2pp(model_higher=TYPE_D)。λ=2.76/0.34(total=3.09)。Form: 英off=+2.46(史诗进攻) def=+0.75 加off=+0.16 def=-1.25。CI95: 英胜[73.6%-94.4%]`,
      betReasoning: `TYPE_D→微正EV(英胜+4.7pp)。加纳R1零封→防守纪律有保障。3.09总λ偏高但加纳可能保守(已3分, 求1分即优)。Under 3.0(+10.3pp)比Over更合理。不推荐加纳+2(仅+6.8pp)。`
    },
    commercialAnalysis: {
      summary: 'TYPE_D_NOISE(gap=6.2pp)→模型市场基本一致。英胜确定性高但赔率低(@1.21)。Under 3.0(+10.3pp)是更优value pick。',
      approvedPicks: [
        { pick: '英格兰胜', odds: '@1.21', verdict: 'approved', edge: '+4.7pp', reasoning: '87.3%>82.6%。Elo514+Form off=+2.46→确定性极高', category: 'core' },
        { pick: 'Under 3.0', odds: '@1.89', verdict: 'approved', edge: '+10.3pp', reasoning: '加纳R1零封→防守纪律。英可能控制节奏节省体力', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '英格兰-2.5', odds: '@2.50', verdict: 'rejected', edge: '-19pp(31.9%<40%)', reasoning: '加纳防守纪律+英无需刷净胜球→深盘风险', category: 'trap' },
      ],
      marketBehavior: '市场定价基本理性。英格兰@1.21反映514 Elo差+首轮4球。加纳R1零封被合理定价→+2不具明显value。', kellyNote: '英胜建议1%仓位(+4.7pp,低赔率)。Under 3.0建议1.5%仓位(+10.3pp)。'
    },
    confidence: 'high'
  },
  {
    team1: '巴拿马', team2: '克罗地亚', group: 'L', ground: '多伦多', time: '20:00 UTC-4',
    elo1: 1730, elo2: 1912, eloDiff: -182,
    model: { home: 0.1621, draw: 0.2277, away: 0.6102 },
    market: { home: 0.1322, draw: 0.2199, away: 0.6479, _note: 'Pinnacle (7.4/4.45/1.51, vig-removed)' },
    lambda: { home: 0.83, away: 1.83, total: 2.66 },
    gap: { team: '克罗地亚', value: 3.8, direction: 'market_higher' },
    formation1: '5-3-2', formation2: '4-3-3', coach1: '克里斯蒂安森', coach2: '达利奇',
    style1: '首轮0-1负加纳→未进球但仅丢1球→防守纪律尚可(但加纳非进攻强队,不宜高估)。Form off=-1.83(对加纳预期0.8未进球→进攻乏力)。', style2: '首轮2-4负英格兰→进2球(off_residual=+0.96,对英预期仅0.9,实际翻倍→进攻在线!),丢4球但对手是英格兰(def_residual=+2.75,对手调整后非灾难)。必须赢否则0分垫底。',
    lineup1: 'Mejia; Murillo, Escobar, Cordoba, Andrade, Davis; Godoy, Carrasquilla, Barcenas; Fajardo, Diaz', lineup2: 'Livakovic; Stanisic, Sutalo, Gvardiol, Sosa; Modric, Brozovic, Kovacic; Pasalic, Kramaric, Perisic',
    injuries1: '无重大伤情', injuries2: '全员健康(Modric体能管理/40岁)',
    tacticalMatchup: [
      { area: 'Modric组织vs巴拿马中场', advantage: '克罗地亚(碾压)', reason: 'Modric世界级。首轮进2球证明攻击力仍在' },
      { area: '巴拿马5后卫防守', advantage: '巴拿马(微)', reason: '首轮仅丢1球→防守纪律可靠' },
      { area: '克罗地亚防守老化', advantage: '巴拿马(微)', reason: '克首轮对英丢4球(def_residual=+2.75,对手调整后非灾难→不宜过度放大)。但巴拿马5后卫可能制造麻烦' },
    ],
    groupContext: 'L组R2生死战。双方0分→输者基本出局。克必须赢否则黄金一代谢幕。淘汰赛路径: 小组第二大概率碰强敌→无暇考虑路径。',
    handicaps: [
      {line:-1.5, win:0.0501, draw:0, lose:0.9499},
      {line:-1, win:0.0501, draw:0.1120, lose:0.8379},
      {line:-0.5, win:0.1621, draw:0, lose:0.8379},
      {line:0, win:0.1621, draw:0.2277, lose:0.6102},
      {line:0.5, win:0.3898, draw:0, lose:0.6102},
      {line:1, win:0.3898, draw:0.2512, lose:0.3590, marketWin:'@2.10', marketLose:'@1.84', isMarketLine:true},
      {line:1.5, win:0.6410, draw:0, lose:0.3590},
    ],
    overUnder: [
      {line:1.5, over:0.7423, under:0.2577},
      {line:2.5, over:0.4948, under:0.5052},
      {line:2.75, over:0.3851, under:0.6149, marketOver:'@1.98', marketUnder:'@1.93', isMarketLine:true},
      {line:3.5, over:0.2754, under:0.7246},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'巴拿马+1', odds:'@2.10', modelProb:0.6410, reason:'64.1%>47.6%→+16.5pp。巴拿马R1仅丢1球(但对加纳非进攻强队);克丢4球但对手是英格兰(def_residual=+2.75→不宜简单对比)'},
      {type:'大小球', pick:'Under 2.75', odds:'@1.93', modelProb:0.6149, reason:'61.5%>51.8%→+9.7pp。生死战可能保守→小球。巴拿马5后卫+克老化'},
    ],
    analysis: {
      groupSituation: 'L组R2生死战。双方0分→输者基本出局。克必须赢否则黄金一代谢幕。巴拿马+1已有16.5pp正EV。',
      lineup1Detail: `巴拿马 (5-3-2) — 克里斯蒂安森\n\n首轮0-1负加纳(Elo 1510,非进攻强队)→未进球(off=-1.83,进攻乏力)但仅丢1球→防守纪律尚可(含金量有限)。\n\n首发: Mejia; Murillo, Escobar, Cordoba, Andrade, Davis; Godoy, Carrasquilla, Barcenas; Fajardo, Diaz`,
      lineup2Detail: `克罗地亚 (4-3-3) — 达利奇\n\n首轮2-4负英格兰→丢4球但对手是世界级攻击线(def_residual=+2.75,对手调整后非灾难),进2球证明进攻在线(off_residual=+0.96)。必须赢否则0分垫底。\n\n首发: Livakovic; Stanisic, Sutalo, Gvardiol, Sosa; Modric, Brozovic, Kovacic; Pasalic, Kramaric, Perisic`,
      styleAnalysis: `**巴拿马**: 首轮0-1负加纳→未进球但仅丢1球→防守纪律可靠。但加纳非进攻强队(Elo 1510)→防守含金量有限。5-3-2阵型最大化防守厚度。\n\n**克罗地亚**: 首轮2-4负英格兰→丢4球看似灾难但对手是世界级攻击线(def_residual=+2.75)。进2球(off_residual=+0.96)证明Modric领衔的进攻对巴拿马是致命威胁。必须赢否则0分垫底。`,
      tacticalNarrative: `TYPE_D(gap仅3.8pp)→模型与市场基本一致。克赢61.0% vs 市场64.8%。克穿盘能力需审慎:首轮对英丢4球但def_residual=+2.75(对手调整后非灾难)→克防守可能被过度看衰。巴拿马防守纪律可靠但对手加纳非进攻强队→同样不宜高估。综合:克小幅占优,巴拿马+1=64.1%。`,
      modelInterpretation: `模型克胜61.0% vs Pinnacle市场64.8%\n\nGap=+3.8pp(market_higher)。λ=0.83/1.83(total=2.66)。Form: 克off=+0.96(进攻在线) 克def=+2.75(丢4球但对手太强)。CI95: 克胜[45.6%-74.5%]。巴拿马off=-1.83(被加纳零封→进攻乏力)。`,
      betReasoning: `TYPE_D→边缘。克MUST-WIN但穿盘能力需审慎(对英丢4球但def_residual=+2.75→对手调整后非灾难)。巴拿马+1(64.1%>47.6%=+16.5pp)是首选。克进攻off_residual=+0.96(对英进2球!)→有能力破巴拿马防线。Under 2.75(+9.7pp):生死战保守+巴拿马off=-1.83(进攻乏力)。不推荐克胜(marginal 3.8pp edge)。`
    },
    commercialAnalysis: {
      summary: '克罗地亚MUST-WIN。首轮对英丢4球(def_residual=+2.75→对手调整后非灾难)。巴拿马+1(+16.5pp)和Under 2.75(+9.7pp)双value。克胜仅+3.8pp→边缘。',
      approvedPicks: [
        { pick: '巴拿马+1', odds: '@2.10', verdict: 'approved', edge: '+16.5pp', reasoning: '64.1%>47.6%。巴拿马R1仅丢1球(但vs加纳),克丢4球但对手是英(def_residual=+2.75)→巴拿马防守含金量有限,克防守被过度看衰', category: 'core' },
        { pick: 'Under 2.75', odds: '@1.93', verdict: 'approved', edge: '+9.7pp', reasoning: '生死战保守倾向+巴拿马off=-1.83=进攻乏力', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '克罗地亚-1', odds: '@2.50', verdict: 'rejected', edge: '-10pp(36%<40%)', reasoning: '克赢2+球仅36%→防守老化不支持深盘', category: 'trap' },
      ],
      marketBehavior: '市场克罗地亚@1.51合理。但+1盘口@2.10/1.84→市场认为克穿盘概率仅47.6%。巴拿马+1的value来自:克R1对英丢4球被过度解读(def_residual=+2.75→对手调整后非灾难)；巴拿马R1仅丢1球但对手加纳非进攻强队→防守含金量有限。两相抵消后+16.5pp是合理估值。', kellyNote: '巴拿马+1建议2%仓位(+16.5pp)。Under 2.75建议1.5%仓位(+9.7pp)。'
    },
    confidence: 'high'
  },
]

export const goalDistributions: Record<string, GoalDistribution> = {
  '葡萄牙vs乌兹别克': { team1: '葡萄牙', team2: '乌兹别克', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0002,'-4':0.0013,'-3':0.0073,'-2':0.0317,'-1':0.099,'0':0.2152,'1':0.2514,'2':0.1999,'3':0.1151,'4':0.0518,'5':0.019,'6':0.0059,'7':0.0016,'8':0.0004} },
  '哥伦比亚vs刚果(金)': { team1: '哥伦比亚', team2: '刚果(金)', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0001,'-4':0.0006,'-3':0.0038,'-2':0.0194,'-1':0.0703,'0':0.1782,'1':0.2404,'2':0.2196,'3':0.1452,'4':0.0749,'5':0.0316,'6':0.0113,'7':0.0035,'8':0.0009} },
  '英格兰vs加纳': { team1: '英格兰', team2: '加纳', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0,'-4':0.0,'-3':0.0004,'-2':0.0035,'-1':0.0229,'0':0.1003,'1':0.1921,'2':0.2322,'3':0.1985,'4':0.1308,'5':0.07,'6':0.0314,'7':0.0122,'8':0.0041} },
  '巴拿马vs克罗地亚': { team1: '巴拿马', team2: '克罗地亚', diffs: {'-8':0.0003,'-7':0.0012,'-6':0.0046,'-5':0.0155,'-4':0.0443,'-3':0.1036,'-2':0.1895,'-1':0.2512,'0':0.2277,'1':0.112,'2':0.0385,'3':0.0095,'4':0.0018,'5':0.0003,'6':0.0,'7':0.0,'8':0.0} },
}

export const tournamentStats: TournamentStats = {
  totalMatches: 52, totalGoals: 128, avgGoals: 2.46,
  homeWins: 23, draws: 16, awayWins: 13,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '西班牙 4-0 沙特', scorer: '待补充', date: '2026-06-21' }
}

export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '葡萄牙vs乌兹别克': {
    summary: 'TYPE_A(反弹效应)→方向跟市场(葡胜)但深盘-2.25穿盘仅19.4%。乌兹别克+2.25(+18.8pp)、Under 3.25(+6.5pp)双value。',
    approvedPicks: [
      { pick: '乌兹别克+2.25', odds: '@1.93', verdict: 'approved', edge: '+18.8pp', reasoning: '模型70.6%>51.8%。葡萄牙-2.25穿盘仅19.4%→深盘无价值', category: 'core' },
      { pick: 'Under 3.25', odds: '@1.85', verdict: 'approved', edge: '+6.5pp', reasoning: '葡λ=1.93(攻击乏力)+乌兹别克全力防守→小球逻辑成立', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '葡萄牙-2.25', odds: '@1.98', verdict: 'rejected', edge: '-31pp(19.4%<50.5%)', reasoning: '葡萄牙穿3+球仅19.4%→史诗负EV', category: 'trap' },
      { pick: '葡萄牙-1.5', odds: '@1.55', verdict: 'rejected', edge: '-25pp(39.4%<64.5%)', reasoning: '赢2+球仅39.4%→深盘陷阱', category: 'trap' },
    ],
    marketBehavior: 'Pinnacle -2.25深盘反映市场预期葡萄牙反弹。方向对(葡大概率赢)但幅度错(穿盘概率远低于市场定价)。乌兹别克+2.25是今日最佳value。',
    kellyNote: '乌兹别克+2.25建议2%仓位(+18.8pp)。Under 3.25建议1%仓位(+6.5pp)。'
  },
  '哥伦比亚vs刚果(金)': {
    summary: 'TYPE_C结构性alpha(模型72.8%>市场62.5%=+10.2pp)。哥伦比亚胜@1.56+Over 2.25双value。市场为DRC1-1冷门过度调整。',
    approvedPicks: [
      { pick: '哥伦比亚胜', odds: '@1.56', verdict: 'approved', edge: '+8.7pp', reasoning: '72.8%>64.1%。TYPE_C核心alpha。Elo330+Form正向', category: 'core' },
      { pick: 'Over 2.25', odds: '@1.95', verdict: 'approved', edge: '+14.6pp', reasoning: '65.9%>51.3%。两队R1都进球→开放对攻+λ=2.86', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '哥伦比亚-1.5', odds: '@2.30', verdict: 'rejected', edge: '-6pp(48.7%<43.5%)', reasoning: 'DRC防守韧性不宜追深盘', category: 'trap' },
    ],
    marketBehavior: 'DRC首轮1-1冷门后市场对哥伦比亚谨慎→@1.56比纯Elo(330差)应有的更贵。这是机会:市场过度调整=价值回归窗口。',
    kellyNote: '哥伦比亚胜建议1.5%仓位(+8.7pp)。Over 2.25建议1.5%仓位(+14.6pp)。'
  },
  '英格兰vs加纳': {
    summary: 'TYPE_D_NOISE(gap=6.2pp)→模型市场基本一致。英胜确定性高但赔率低(@1.21)。Under 3.0(+10.3pp)是更优value pick。',
    approvedPicks: [
      { pick: '英格兰胜', odds: '@1.21', verdict: 'approved', edge: '+4.7pp', reasoning: '87.3%>82.6%。Elo514+Form off=+2.46→确定性极高', category: 'core' },
      { pick: 'Under 3.0', odds: '@1.89', verdict: 'approved', edge: '+10.3pp', reasoning: '加纳R1零封→防守纪律。英可能控制节奏节省体力', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '英格兰-2.5', odds: '@2.50', verdict: 'rejected', edge: '-19pp(31.9%<40%)', reasoning: '加纳防守纪律+英无需刷净胜球→深盘风险', category: 'trap' },
    ],
    marketBehavior: '市场定价基本理性。英格兰@1.21反映514 Elo差+首轮4球。加纳R1零封被合理定价→+2不具明显value。',
    kellyNote: '英胜建议1%仓位(+4.7pp,低赔率)。Under 3.0建议1.5%仓位(+10.3pp)。'
  },
  '巴拿马vs克罗地亚': {
    summary: '克罗地亚MUST-WIN。首轮对英丢4球(def_residual=+2.75→对手调整后非灾难)。巴拿马+1(+16.5pp)和Under 2.75(+9.7pp)双value。克胜仅+3.8pp→边缘。',
    approvedPicks: [
      { pick: '巴拿马+1', odds: '@2.10', verdict: 'approved', edge: '+16.5pp', reasoning: '64.1%>47.6%。巴拿马R1仅丢1球(但vs加纳),克丢4球但对手是英(def_residual=+2.75)→巴拿马防守含金量有限,克防守被过度看衰', category: 'core' },
      { pick: 'Under 2.75', odds: '@1.93', verdict: 'approved', edge: '+9.7pp', reasoning: '生死战保守倾向+巴拿马off=-1.83=进攻乏力', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '克罗地亚-1', odds: '@2.50', verdict: 'rejected', edge: '-10pp(36%<40%)', reasoning: '克赢2+球仅36%→防守老化不支持深盘', category: 'trap' },
    ],
    marketBehavior: '市场克罗地亚@1.51合理。但+1盘口@2.10/1.84→市场认为克穿盘概率仅47.6%。巴拿马+1的value来自:克R1对英丢4球被过度解读(def_residual=+2.75→对手调整后非灾难)；巴拿马R1仅丢1球但对手加纳非进攻强队→防守含金量有限。两相抵消后+16.5pp是合理估值。',
    kellyNote: '巴拿马+1建议2%仓位(+16.5pp)。Under 2.75建议1.5%仓位(+9.7pp)。'
  },
}
