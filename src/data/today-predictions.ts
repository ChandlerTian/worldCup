import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/22 今日预测 (Matchday 12) ======
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '法国', team2: '伊拉克', group: 'I', ground: '费城', time: '17:00 UTC-4',
    elo1: 2063, elo2: 1607, eloDiff: 456,
    model: { home: 0.8325, draw: 0.1319, away: 0.0356 },
    market: { home: 0.896, draw: 0.075, away: 0.029 },
    lambda: { home: 2.38, away: 0.33, total: 2.71 },
    gap: { team: '法国', value: -6.4, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: '德尚', coach2: '卡萨斯',
    style1: '快速反击+技术控制。Mbappé左路速度核心，Griezmann组织串联。首轮3-1塞内加尔展现攻击火力',
    style2: '防守紧凑+有限反击。亚洲杯2023曾进8强但首轮1-4惨败挪威暴露防线质量问题',
    lineup1: 'Maignan; Koundé, Saliba, Upamecano, T.Hernandez; Tchouaméni, Camavinga, Griezmann; Dembélé, Mbappé, Thuram',
    lineup2: 'Hassan; Al-Ammari, Natiq, Sulaka, Adnan; Rashid, Amari; Hussein, Bayesh, Ali; Aymen Hussein',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Mbappé速度vs伊拉克右路', advantage: '法国(碾压)', reason: 'Mbappé世界级速度+盘带。伊拉克右后卫Al-Ammari无法单防。首轮被挪威边路打爆(丢4球)' },
      { area: '中场控制', advantage: '法国(碾压)', reason: 'Tchouaméni+Cama双后腰覆盖+拦截。伊拉克中场创造力有限' },
      { area: '反击速度', advantage: '伊拉克(微)', reason: 'Aymen Hussein是伊拉克唯一威胁点但法国Saliba+Upamecano中卫组合速度足够' },
      { area: '定位球', advantage: '法国', reason: 'Griezmann主罚+Upamecano头球。伊拉克定位球防守存疑' }
    ],
    groupContext: 'I组第2轮。法国3分(GD+2,3-1胜塞内加尔)，挪威3分(GD+3,4-1胜伊拉克)。伊拉克0分(GD-3)。法国赢则6分几乎锁定出线，伊拉克输则基本出局。伊拉克必须死守求1分延续希望。',
    handicaps: [
      {line:-2.75, win:0.27, draw:0, lose:0.73},
      {line:-2, win:0.374, draw:0.252, lose:0.374},
      {line:-1, win:0.626, draw:0.237, lose:0.137},
      {line:0, win:0.863, draw:0.137, lose:0.0}
    ],
    overUnder: [
      {line:3.5, over:0.213, under:0.787, marketOver:'@1.87', marketUnder:'@2.02'},
      {line:2.5, over:0.399, under:0.601}
    ],
    predictions: [
      {score:'2-0', prob:18.9, reason:'法国控制节奏，2-0是最可能比分'},
      {score:'1-0', prob:15.7, reason:'若伊拉克死守成功，法国可能仅1球小胜'},
      {score:'3-0', prob:15.0, reason:'若早进球，法国可扩大比分'}
    ],
    recommendations: [
      {type:'让球', pick:'伊拉克+2.75', odds:'@1.95', modelProb:0.73, reason:'模型伊拉克输3球内概率73% > 需51% → +22pp! 但模型λ压缩可能低估碾压场。谨慎仓位'},
      {type:'大小球', pick:'Under 3.5', odds:'@2.02', modelProb:0.787, reason:'VALUE: 模型小球78.7% > 需49.5% → +29.2pp正EV! 法国不一定能大开杀戒'},
      {type:'让球', pick:'拒绝法国-2.75', odds:'@1.93', modelProb:0.27, reason:'模型仅27%→巨亏。市场给的-2.75极深但model未确认'}
    ],
    analysis: {
      groupSituation: '**I组第2轮形势**\n\n法国3分(GD+2,3-1塞内加尔) | 挪威3分(GD+3,4-1伊拉克) | 塞内加尔0分(GD-2) | 伊拉克0分(GD-3)\n\n法国vs伊拉克、挪威vs塞内加尔同天开打。法国胜则6分几乎锁定小组头名(末轮vs挪威)。伊拉克输则0分基本出局(末轮vs塞内加尔)。\n\n**淘汰赛路径**: I1对J2(~1715-1830 Elo) vs I2对J1(~2115 Elo阿根廷)。差距300-400 Elo，争头名动力极强。',
      lineup1Detail: '**法国 (4-3-3) — 德尚**\n\n2022世界杯亚军+2024欧洲杯四强。Mbappé(25岁,皇马)是当今世界最佳球员之一。Griezmann(35岁)仍是组织核心但体能下降。中场Tchouaméni+Camavinga双后腰控制力强。首轮3-1塞内加尔展现攻击力(Dembélé 2助攻)。\n\n**关键**: 法国已进7届大赛半决赛——大赛经验无人能及。',
      lineup2Detail: '**伊拉克 (4-2-3-1) — 卡萨斯(西班牙人)**\n\n2023亚洲杯8强有一定实力但首轮1-4惨败挪威暴露防线漏洞——面对北欧高大前锋完全被动。卡萨斯(前西班牙助教)尝试4-2-3-1传控但球员执行困难。\n\n**核心问题**: 首轮被挪威灌4球→防线信心可能崩溃。今天面对更强的法国...',
      styleAnalysis: '**法国:** 4-3-3以Mbappé左路为第一爆破点。Griezmann回撤组织+定位球(世界级)。Dembélé右路内切提供宽度。整体攻守均衡——后防Saliba+Upamecano世界级中卫组合。\n\n**伊拉克:** 4-2-3-1理论上偏传控但面对强队变5-4-1大巴。首轮对挪威尝试进攻→被反击打爆4球。今天大概率全线退守。',
      tacticalNarrative: '**核心: 法国碾压但能否大胜?**\n\nElo差456是世界级vs亚洲中游。但世界杯历史上超大Elo差不一定产生大比分——弱队全线退守可限制比分。\n\n**对比**: 法国首轮3-1塞内加尔(Elo差203)→但塞内加尔有进攻能力所以比分开放。伊拉克-256更弱但会全线防守→可能小比分。\n\n**关键:** 若法国15分钟内进球→伊拉克被迫出击→3-0/4-0。若前30分钟0-0→伊拉克越守越有信心→1-0/2-0。',
      modelInterpretation: '**模型83.3% vs 市场89.6%** — 市场比模型更看好法国(+6.4pp)。\n\n差距在模型误差带内(3-5pp)，属于TYPE_D_NOISE。市场-2.75深盘说明预期碾压——但模型认为法国赢3+球概率仅36%。\n\n⚠️ 模型λ=2.38过于保守? 对比: Elo差456的历史匹配常产生4+总球。但模型ρ=0.02(极端差距时最弱draw correction)是合理的。\n\n**结论**: 方向(法国胜)市场与模型一致。幅度有分歧但差距不大。观察型场次。',
      betReasoning: '**结论: 不追碾压场深盘**\n\n1. Under 3.5@2.02: 模型78.7%小球→大value但需要验证模型λ是否过于压缩。同类Elodiff456→首轮挪威4-1伊拉克(Elo差~300)→4球。所以模型可能低估总进球。\n\n2. 伊拉克+2.75@1.95: 受模型支持但首轮1-4vs挪威提示防线脆弱。\n\n3. 波胆2-0@6.50: 最高概率18.9%。可作为娱乐注。\n\n**⚠️ 遵循碾压场纪律**: 6/20厄瓜多尔0-0库拉索教训→碾压预期可完全落空。不重注。'
    },
    commercialAnalysis: {
      summary: '法国@1.09超级热门。Elo差456碾压场。市场-2.75深盘。模型方向一致(83%)但幅度分歧(模型仅27%覆盖-2.75)。无明确value——观察型场次。',
      approvedPicks: [],
      rejectedPicks: [
        { pick: '法国-2.75', odds: '@1.93', verdict: 'rejected', edge: '-23pp(模型27%<需52%)', reasoning: '模型巨大负EV。法国可能碾压但市场已完全定价。厄瓜多尔0-0库里索同类教训', category: 'trap' },
        { pick: '波胆2-0', odds: '@6.50', verdict: 'rejected', edge: '18.9%概率', reasoning: '波胆高overround。娱乐注不建议超过0.3%仓位', category: 'entertainment' }
      ],
      marketBehavior: '法国\"品牌溢价\"存在但不会过分(Pinnacle最理性)。@1.09反映真实碾压概率(~90%)。盘口-2.75说明市场预期至少3球差距。模型保守可能因λ压缩。',
      kellyNote: '本场建议0仓位。Under 3.5@2.02有模型支撑但需验证λ压缩→最大0.5%试探仓。'
    },
    confidence: 'high'
  },
  {
    team1: '挪威', team2: '塞内加尔', group: 'I', ground: '费城', time: '20:00 UTC-4',
    elo1: 1914, elo2: 1860, eloDiff: 54,
    model: { home: 0.4228, draw: 0.2687, away: 0.3085 },
    market: { home: 0.445, draw: 0.275, away: 0.280 },
    lambda: { home: 1.40, away: 1.16, total: 2.56 },
    gap: { team: '挪威', value: -2.2, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-3-3', coach1: '索尔巴肯', coach2: '西塞',
    style1: 'Haaland核心高效进攻。Ødegaard创造+Haaland终结世界级连线。首轮4-1碾压伊拉克展现火力',
    style2: '身体对抗+速度反击。AFCON 2021冠军底蕴。Mané/Sarr边路爆破。但首轮1-3法国暴露与顶级差距',
    lineup1: 'Nyland; Ryerson, Ajer, Østigård, Meling; Ødegaard, Berge, Aursnes; Sørloth, Haaland, Nusa',
    lineup2: 'E.Mendy; B.Dieng, Koulibaly, Niakhaté, Jakobs; I.Sarr, P.M.Sarr, Gueye; Mané, H.Diallo, Ndiaye',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Haaland vs Koulibaly', advantage: '挪威(微)', reason: 'Haaland世界最佳9号但Koulibaly经验丰富。巅峰对决!' },
      { area: '中场创造力', advantage: '挪威', reason: 'Ødegaard(阿森纳队长)传球想象力远超塞内加尔中场' },
      { area: '边路速度', advantage: '塞内加尔', reason: 'Mané(利雅得胜利)+I.Sarr双翼齐飞。挪威边后卫Ryerson/Meling防守有隐患' },
      { area: '身体对抗', advantage: '均衡', reason: '挪威北欧体格vs塞内加尔非洲力量。双方都不会被压垮' }
    ],
    groupContext: 'I组第2轮关键战!挪威3分(GD+3) vs 塞内加尔0分(GD-2)。塞内加尔MUST-WIN——输则99%出局。挪威赢则6分几乎出线。双方都必须主动进攻(平局对塞不够,对挪威浪费)。预期开放对攻。',
    handicaps: [
      {line:-0.25, win:0.312, draw:0, lose:0.688},
      {line:-1, win:0.203, draw:0.224, lose:0.574},
      {line:0, win:0.426, draw:0.272, lose:0.302},
      {line:1, win:0.698, draw:0.184, lose:0.117}
    ],
    overUnder: [
      {line:2.5, over:0.363, under:0.637, marketOver:'@1.90', marketUnder:'@2.01'}
    ],
    predictions: [
      {score:'1-1', prob:12.8, reason:'实力接近+双方都有进球能力=最可能1-1'},
      {score:'1-0', prob:10.6, reason:'挪威Haaland关键一击1球制胜'},
      {score:'2-1', prob:8.8, reason:'开放对攻下挪威主场微优'}
    ],
    recommendations: [
      {type:'让球', pick:'塞内加尔+0.25', odds:'@2.03', modelProb:0.577, reason:'模型塞内加尔不败57.7% > 需49.3% → +8.4pp正EV! 塞背水一战+实力接近'},
      {type:'大小球', pick:'Under 2.5', odds:'@2.01', modelProb:0.637, reason:'模型小球63.7% > 需49.8% → +13.9pp! 战术大战可能保守开场'},
      {type:'波胆', pick:'1-1', odds:'@6.50', modelProb:0.128, reason:'最高概率比分。双方都有进球力'}
    ],
    analysis: {
      groupSituation: '**I组生死战!**\n\n挪威3分(GD+3) vs 塞内加尔0分(GD-2)\n\n塞内加尔MUST-WIN——输则0分垫底+GD劣势等于100%出局。平局也不够(只1分,末轮需大胜伊拉克并看别人脸色)。\n\n挪威赢则6分→若法国也胜→挪威法国末轮争头名(已锁定出线)。放松心态优于塞内加尔。\n\n**博弈论**: 塞内加尔必须赢→开场便会猛攻→挪威反击Haaland单刀→进球大战概率高。',
      lineup1Detail: '**挪威 (4-3-3) — 索尔巴肯**\n\nHaaland(25岁,曼城)是世界最佳9号——2023三冠王+英超金靴。Ødegaard(27岁,阿森纳队长)创造力世界级。两人连线是挪威进攻核心。首轮4-1伊拉克: Haaland帽子戏法→状态火热!\n\n**挪威核心问题**: 防线一般(Ajer/Østigård非顶级)。面对Mané级别边锋有被爆破风险。',
      lineup2Detail: '**塞内加尔 (4-3-3) — 西塞(执教7年)**\n\n2021 AFCON冠军底蕴仍在。Mané(33岁,利雅得胜利)虽欧洲顶级告别但仍具杀伤力。Koulibaly(35岁)后防领袖经验丰富。首轮1-3法国但展现了进攻组织度(Mané助攻H.Diallo进球)。\n\n**关键**: 塞内加尔世界杯大赛经验(2022 16强)。背水一战心理素质待验证。',
      styleAnalysis: '**挪威:** 4-3-3围绕Haaland设计——Ødegaard的through ball+Haaland的跑位是世界级。Sørloth(马竞)提供第二点。边路Nusa速度补充。防守端4后卫偏重体型对抗。\n\n**塞内加尔:** 4-3-3偏直接——Mané左路内切+I.Sarr右路爆点。中场P.M.Sarr(热刺)+Gueye(埃弗顿)有英超身体对抗能力。整体风格:身体碾压+速度转换。',
      tacticalNarrative: '**核心: Haaland vs Koulibaly = 世纪对决**\n\nHaaland速度+力量vs Koulibaly经验+位置感。2020-2023两人多次交手(多特/曼城vs那不勒斯/切尔西)→Haaland占优但未碾压。\n\n**Mané vs Ryerson**: 塞内加尔左路是最大优势对位。Ryerson(多特替补)面对Mané(巅峰金球第二)可能被爆。\n\n**节奏预测**: 塞内加尔开场猛攻10-15分钟→若进球则控制节奏→若不进球则挪威Ødegaard开始组织→半场0-0或1-0。',
      modelInterpretation: '**模型42.3% vs 市场44.5%** — 差距仅-2.2pp，TYPE_D_NOISE。模型和市场基本一致。\n\n**但模型看到Value方向: 塞内加尔+0.25**\n- 模型塞内加尔不败57.7% > 市场49.3% → +8.4pp正EV\n- 逻辑: Elo仅差54=实力几乎无差距。市场给挪威-0.25是微偏。\n\nUnder 2.5: 模型63.7% >> 市场49.8% → 模型强烈看小球。但must-win语境对Over有利。**这是模型vs情境矛盾的典型——模型倾向Under,情境倾向Over**→观察。',
      betReasoning: '**核心推荐: 塞内加尔+0.25@2.03**\n\n数学: +8.4pp正EV是今天第二清晰value(仅次于约旦+1.0)。\n\n逻辑: \n1. Elo差54=实力无差距。市场给挪威-0.25是\"Haaland效应\"。\n2. 塞内加尔背水一战=战力100%输出,挪威放松心态可能掉以轻心。\n3. Koulibaly领衔防线有大赛经验。\n\n**辅助: Under 2.5@2.01 (边缘)**\n+13.9pp模型edge但情境不支持→建议0.5-1%试探。\n\n**波胆1-1@6.50 (娱乐)** 最高概率比分。含在+0.25内。'
    },
    commercialAnalysis: {
      summary: 'Elo差仅54→实力极度接近。市场微偏挪威(Haaland效应)。塞内加尔+0.25@2.03有+8.4pp正EV——今日第二value信号。双方must-win语境潜在开放对攻但模型倾向Under 2.5。',
      approvedPicks: [
        { pick: '塞内加尔+0.25', odds: '@2.03', verdict: 'approved', edge: '+8.4pp', reasoning: 'Elo差54=完全均势。市场因Haaland名气偏挪威3pp。塞内加尔背水一战+AFCoN冠军底蕴', category: 'value' }
      ],
      rejectedPicks: [
        { pick: '平局(1X2)', odds: '@3.56', verdict: 'rejected', edge: '-0.6pp(噪音级)', reasoning: 'Model 26.9% vs 市场27.5%→差距仅0.6pp=无信号。泊松平局偏高不可靠', category: 'trap' },
        { pick: '波胆1-1', odds: '@6.50', verdict: 'rejected', edge: '12.8%概率', reasoning: '波胆结构性负EV。塞内加尔+0.25已覆盖含1-1的不败方向', category: 'entertainment' }
      ],
      marketBehavior: '挪威有\"Haaland溢价\"——Haaland的存在让市场自动+2-3pp给挪威方向。但Elo实际差距极小(54)。Pinnacle-0.25是对这个溢价的最理性表达。塞内加尔方向是Smart Money。',
      kellyNote: '塞内加尔+0.25建议1.5-2%仓位(edge厚+.逻辑清晰)。Under 2.5建议0.5%试探(数学好但情境矛盾)。这是今天第二大仓位。'
    },
    confidence: 'mid'
  },
  {
    team1: '阿根廷', team2: '奥地利', group: 'J', ground: '达拉斯(阿灵顿)', time: '12:00 UTC-5',
    elo1: 2115, elo2: 1830, eloDiff: 285,
    model: { home: 0.6728, draw: 0.2041, away: 0.1231 },
    market: { home: 0.656, draw: 0.222, away: 0.122 },
    lambda: { home: 2.01, away: 0.73, total: 2.73 },
    gap: { team: '阿根廷', value: 1.7, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-2-2', coach1: '斯卡洛尼', coach2: '朗尼克',
    style1: 'Messi核心传控+快速转换。2022世界杯冠军。首轮3-0阿尔及利亚展现统治力。团队默契极高(7年体系)',
    style2: 'Rangnick高位压迫+快速垂直进攻。首轮3-1约旦表现不俗。Sabitzer+Baumgartner组成德式双核',
    lineup1: 'E.Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Mac Allister, Enzo Fernández; Messi, Lautaro, Álvarez',
    lineup2: 'Pentz; Posch, Lienhart, Daniliuc, Mwene; Seiwald, Sabitzer; Laimer, Baumgartner; Gregoritsch, Arnautović',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Messi vs Rangnick体系', advantage: '阿根廷', reason: 'Messi(38岁但仍是世界级)穿透高位压迫的能力独一无二。Rangnick体系对他有漏洞' },
      { area: '中场对抗', advantage: '均衡', reason: 'Mac Allister/Enzo vs Sabitzer/Laimer=英超vs德甲顶级中场。精彩对决' },
      { area: '高位压迫效果', advantage: '奥地利(微)', reason: '朗尼克体系以强度著称。阿根廷后场出球可能被逼抢制造失误' },
      { area: '大赛经验', advantage: '阿根廷(碾压)', reason: '世界杯冠军+美洲杯冠军。奥地利队缺乏同级别大赛硬仗经验' }
    ],
    groupContext: 'J组第2轮——小组头名争夺战!阿根廷3分(GD+3,3-0阿尔及利亚) vs 奥地利3分(GD+2,3-1约旦)。胜者基本锁定小组头名。两队都不愿平局(头名对晋级路径重要)。高质量对决。',
    handicaps: [
      {line:-1, win:0.423, draw:0.250, lose:0.327},
      {line:-2, win:0.215, draw:0.208, lose:0.577},
      {line:0, win:0.673, draw:0.204, lose:0.122},
      {line:1, win:0.878, draw:0.089, lose:0.033}
    ],
    overUnder: [
      {line:2.5, over:0.403, under:0.597, marketOver:'@1.96', marketUnder:'@1.94'}
    ],
    predictions: [
      {score:'2-0', prob:13.0, reason:'阿根廷经验+技术优势最可能2-0'},
      {score:'1-0', prob:12.8, reason:'首球后控制节奏，1-0足以'},
      {score:'1-1', prob:9.7, reason:'奥地利高位压迫制造混乱，平局可接受'}
    ],
    recommendations: [
      {type:'胜平负', pick:'阿根廷胜', odds:'@1.49', modelProb:0.673, reason:'微小value: 模型67.3% > 需67.1% → +0.2pp。几乎无edge但方向确认'},
      {type:'让球', pick:'拒绝阿根廷-1.0', odds:'@1.83', modelProb:0.423, reason:'模型42.3% < 需54.7% → -12.4pp。让1球负EV'},
      {type:'大小球', pick:'Under 2.5', odds:'@1.94', modelProb:0.597, reason:'模型小球59.7% > 需51.5% → +8.2pp正EV'}
    ],
    analysis: {
      groupSituation: '**J组头名争夺战!**\n\n阿根廷3分(GD+3,3-0阿尔及利亚) | 奥地利3分(GD+2,3-1约旦) | 阿尔及利亚0分 | 约旦0分\n\n胜者基本锁定小组头名→R32打I2(法国或挪威)位置有利。\n\n**淘汰赛路径重要性**: J1对I2(~1860-1914 Elo) vs J2对I1(~2063法国)。差距150-200 Elo——头名明显更有优势。争头名动力明确。',
      lineup1Detail: '**阿根廷 (4-3-3) — 斯卡洛尼(执教7年)**\n\n2022世界杯冠军+2024美洲杯冠军——世界最佳国家队之一。Messi(38岁)虽年龄偏大但决定性能力仍在。Lautaro(国米)+Álvarez(曼城)提供双前锋选项。中场Mac Allister(利物浦)+Enzo(切尔西)英超级别。首轮3-0阿尔及利亚稳如泰山。\n\n**关键**: 体系稳定(7年不变)+球员默契度世界第一。',
      lineup2Detail: '**奥地利 (4-2-2-2) — 朗尼克(执教3年)**\n\n朗尼克体系以高强度压迫闻名——\"gegenpressing\"之父。Sabitzer(多特)+Baumgartner(莱比锡)组成攻击双核。Arnautović(35岁)经验丰富但速度下降。首轮3-1约旦展现攻击力但防守有漏洞(丢1球)。\n\n**奥地利核心问题**: 高位压迫对Messi级别出球者效果存疑。后卫线Lienhart/Daniliuc非世界级。',
      styleAnalysis: '**阿根廷:** 4-3-3传控+快速转换。Messi回撤组织→Lautaro/Álvarez跑身后。De Paul+Mac Allister+Enzo中场三人组技术/体能/战术纪律兼备。防守端Romero+Otamendi经验丰富但速度下降(35+)。\n\n**奥地利:** Rangnick 4-2-2-2 = 极小间距+高强度压迫+快速垂直进攻。球员不断奔跑补位。但面对Messi级大脑,高强度压迫可能瞬间被一个传球瓦解。',
      tacticalNarrative: '**核心: Messi能否破解Rangnick体系?**\n\nRangnick高位压迫对普通后场出球有效(2020年代莱比锡打爆无数弱队)。但Messi有\"一个传球杀死压迫\"的能力。2022世界杯阿根廷面对高位压迫(荷兰/克罗地亚)都成功突围。\n\n**关键对位:**\n1. Sabitzer/Laimer双中场压迫Enzo/Mac Allister——英超级别技术vs德甲强度。\n2. Arnautović vs Romero——35岁老将对33岁老将。经验vs经验的硬仗。\n3. 奥地利左右卫Posch/Mwene vs Álvarez/Lautaro跑位——Rangnick体系边后卫助攻后身后空间大。',
      modelInterpretation: '**模型67.3% vs 市场65.6%** — 几乎完全一致(+1.7pp)。TYPE_D_NOISE。\n\n这是今天模型与市场最一致的一场比赛!说明:\n- 市场理性定价阿根廷(无品牌溢价)\n- 模型准确捕获实力差距\n\n**Value发现: Under 2.5@1.94**\n- 模型59.7% > 需51.5% → +8.2pp\n- 两队都有防守质量(阿根廷世界杯冠军级防守+奥地利体系纪律)\n- 头名争夺可能战术保守开场',
      betReasoning: '**结论: 高质量无value比赛**\n\n1. 阿根廷胜@1.49: 模型67.3%几乎等于市场(67.1%)→无value。\n2. 阿根廷-1.0@1.83: 模型42.3% << 需54.7%→拒绝。\n3. Under 2.5@1.94: 模型59.7% > 需51.5%→+8.2pp正EV——今天唯一的阿根廷方向value。\n\n**推荐: Under 2.5@1.94** 作为低仓位辅助。\n\n**⚠️ Messi 38岁:** 年龄是因数但他仍是大赛关键先生(2022决赛2球)。不因年龄低估。'
    },
    commercialAnalysis: {
      summary: '今日最理性定价场次。模型67.3%≈市场65.6%(+1.7pp)→完全一致。阿根廷1.49胜价格合理。唯一微弱value: Under 2.5@1.94(+8.2pp)。高质量观察场。',
      approvedPicks: [
        { pick: 'Under 2.5', odds: '@1.94', verdict: 'approved', edge: '+8.2pp', reasoning: '模型59.7%>需51.5%。头名争夺战可能保守开场+双方防守质量高', category: 'value' }
      ],
      rejectedPicks: [
        { pick: '阿根廷-1.0', odds: '@1.83', verdict: 'rejected', edge: '-12.4pp(模型42.3%<需55%)', reasoning: '模型严重不支持覆盖-1.0。奥地利3-1约旦证明进攻力不弱', category: 'trap' },
        { pick: '波胆2-0', odds: '@7.00', verdict: 'rejected', edge: '13.0%概率', reasoning: '波胆结构性负EV。含在Under 2.5范围内', category: 'entertainment' }
      ],
      marketBehavior: 'Pinnacle定价极其精准——1x2几乎与模型完全一致。这是市场效率最高的标志。奥地利的Rangnick体系让市场不敢高估阿根廷(Messi外其他球员对欧洲市场知名度不高)。',
      kellyNote: 'Under 2.5建议1%仓位(edge温和)。阿根廷胜有微小正EV(+0.2pp)可配1%仓位作为方向确认。这是今天最保守仓位配置。'
    },
    confidence: 'high'
  },
  {
    team1: '约旦', team2: '阿尔及利亚', group: 'J', ground: '旧金山湾区(圣克拉拉)', time: '20:00 UTC-7',
    elo1: 1680, elo2: 1772, eloDiff: -92,
    model: { home: 0.2662, draw: 0.2704, away: 0.4634 },
    market: { home: 0.153, draw: 0.223, away: 0.624 },
    lambda: { home: 1.02, away: 1.44, total: 2.46 },
    gap: { team: '阿尔及利亚', value: -16.1, direction: 'market_higher' },
    formation1: '4-4-2', formation2: '4-3-3', coach1: '阿穆塔', coach2: '佩特科维奇',
    style1: '防守反击+身体对抗。2024亚洲杯亚军(意外)。首轮1-3奥地利暴露与欧洲差距但韧性可嘉',
    style2: '技术型传控。2019 AFCON冠军但近年衰退。首轮0-3惨败阿根廷暴露防守漏洞',
    lineup1: 'Al-Fakhouri; Al-Hadid, Al-Arab, Nasib, Al-Mardi; Al-Rawabdeh, Rateb, Al-Taamari, Olwan; Al-Naimat, Haddad',
    lineup2: 'Mandrea; Atal, Mandi, Tougai, Aït-Nouri; Bennacer, Bentaleb, Aouar; Mahrez, Slimani, Amoura',
    injuries1: '无重大伤情', injuries2: 'Mahrez体能管理(35岁)',
    tacticalMatchup: [
      { area: 'Al-Taamari创造力 vs 阿尔及利亚左路', advantage: '约旦(微)', reason: 'Al-Taamari(蒙彼利埃)是约旦最有威胁球员。阿尔及利亚Aït-Nouri前插后身后空间大' },
      { area: 'Mahrez经验 vs 约旦经验不足', advantage: '阿尔及利亚', reason: 'Mahrez(35岁,前曼城)仍有一脚关键传球。约旦后防线世界杯经验为0' },
      { area: '防守纪律', advantage: '约旦', reason: '约旦亚洲杯亚军靠的就是防守纪律(淘汰赛2场零封)。阿尔及利亚防线频繁失误(首轮0-3)' },
      { area: '心态/斗志', advantage: '约旦', reason: '约旦不被看好(下狗心态)=无压力反而能超常发挥。阿尔及利亚是\"必须赢\"的心理包袱' }
    ],
    groupContext: 'J组第2轮——输者出局战!约旦0分(GD-2,1-3奥地利) vs 阿尔及利亚0分(GD-3,0-3阿根廷)。双方输则0分垫底+巨大GD劣势=100%出局。双方都必须赢——淘汰赛级别压力。',
    handicaps: [
      {line:1, win:0.540, draw:0.238, lose:0.223},
      {line:0, win:0.267, draw:0.273, lose:0.460},
      {line:-1, win:0.099, draw:0.168, lose:0.733},
      {line:-2, win:0.027, draw:0.072, lose:0.901}
    ],
    overUnder: [
      {line:2.5, over:0.340, under:0.660, marketOver:'@1.94', marketUnder:'@1.96'}
    ],
    predictions: [
      {score:'1-1', prob:12.8, reason:'双方都有进球力但都不稳定→1-1是自然结果'},
      {score:'0-1', prob:12.1, reason:'阿尔及利亚个体质量微优但仅1球小胜'},
      {score:'1-2', prob:9.0, reason:'开放对攻下阿尔及利亚把握机会能力更强'}
    ],
    recommendations: [
      {type:'让球', pick:'约旦+1.0', odds:'@1.96', modelProb:0.540, reason:'今日BEST VALUE! 模型约旦+1体彩胜53.9% > 需51% → 但真实价值在AH: 模型约旦不输2+球77.8% > 需50% → +27.8pp!!! TYPE_B_BRAND'},
      {type:'胜平负', pick:'约旦胜(1X2)', odds:'@6.38', modelProb:0.266, reason:'爆炸value: 模型26.6% > 市场15.3% → +11.4pp。市场严重低估约旦'},
      {type:'大小球', pick:'Under 2.5', odds:'@1.96', modelProb:0.660, reason:'模型小球66.0% > 需51% → +15pp正EV。双方防守都糟糕但场面可能紧张'}
    ],
    analysis: {
      groupSituation: '**J组淘汰战——输者出局!**\n\n约旦0分(GD-2,1-3奥地利) | 阿尔及利亚0分(GD-3,0-3阿根廷) | 阿根廷3分 | 奥地利3分\n\n**场景分析:**\n- 约旦输→0分+GD劣势→末轮vs阿根廷=99%出局\n- 阿尔及利亚输→0分+GD劣势→末轮vs奥地利=99%出局\n- 平局→双方都是1分→末轮需大赢+看别人脸色→虽未死但概率极低\n\n**因此: 双方都必须全力争胜!** 这就产生了must-win悖论——开放对攻可能导致进球大战,但也可能因紧张导致保守。',
      lineup1Detail: '**约旦 (4-4-2) — 阿穆塔**\n\n2024亚洲杯亚军(在卡塔尔击败韩国→历史性成就!)。虽然最终0-4输东道主卡塔尔但整届赛事表现惊艳。Al-Taamari(蒙彼利埃,法甲)是球队核心——盘带/传中/射门兼备。首轮1-3奥地利展现了韧性(78分钟仍1-2)。\n\n**关键**: 约旦下狗心理=无压力。亚洲杯亚军证明他们可以超常发挥。',
      lineup2Detail: '**阿尔及利亚 (4-3-3) — 佩特科维奇**\n\n2019 AFCON冠军但近年严重衰退——2022世界杯预选被喀麦隆绝杀、2024 AFCON首轮出局。Mahrez(35岁,吉达国民)虽有技术但体能下降明显。首轮0-3阿根廷暴露防线组织混乱(3个失球全是防守失误)。\n\n**核心问题**: 阿尔及利亚\"名气大于实力\"——AFCON 2019光环已过去7年。当前Elo仅1772(与约旦差92=微优)。',
      styleAnalysis: '**约旦:** 4-4-2紧凑防守+快速反击。亚洲杯亚军靠防守纪律(淘汰赛零封伊拉克/塔吉克斯坦)。Al-Taamari左路是进攻发起点。整体风格: 不控球(35-40%)但每次反击有质量。\n\n**阿尔及利亚:** 4-3-3技术型传控但近年失效。Mahrez(35岁)右路内切组织是唯一创造力源。中场Bennacer(米兰)+Bentaleb(里尔)应能控制中场但防守贡献不匹配。整体: 有球控制好但无球时脆弱。',
      tacticalNarrative: '**核心: 约旦下狗逆袭剧本**\n\n1. **市场严重高估阿尔及利亚** — 给62.4%获胜概率相当于Elo+330差距,但实际仅+92。TYPE_B_BRAND分类: 市场为\"AFCON冠军\"品牌付费,模型看到实际衰退。\n\n2. **阿尔及利亚首轮0-3暴露的结构性问题:**\n   - 防线组织混乱(3失球均来自防守失误)\n   - Mahrez体能无法支撑90分钟高强度\n   - 中场对回防贡献不足\n\n3. **约旦的亚洲杯剧本可以复制:**\n   - 不被看好→下狗心态→超常发挥\n   - 防守纪律(亚洲杯淘汰赛2场零封)\n   - Al-Taamari(法甲级别)是真实的进攻威胁',
      modelInterpretation: '**⚠️ 今日最大模型-市场分歧! -16.1pp**\n\n模型46.3% vs 市场62.4% → 阿尔及利亚被市场严重高估!\n\n**分类: TYPE_B_BRAND** — \"遗产溢价\"(Legacy Premium)\n- 阿尔及利亚有2019 AFCON冠军光环→市场自动+16pp\n- 但实际2020-2026年间: 2022世界杯缺席、2024 AFCON首轮出局、首轮0-3惨败\n- 约旦在亚洲杯证明实力→亚洲亚军绝不是鱼腩\n\n**这是本日最清晰的value信号。** 遵循模型方向,逆市场而行。',
      betReasoning: '**🔥 本日最佳推荐: 约旦+1.0@1.96 (TYPE_B_BRAND核心仓位!)**\n\n**数学:**\n- AH +1.0: 模型约旦不输2+球 = 77.8% → 市场仅给50% → 差距+27.8pp!\n- 体彩 +1: 模型约旦不败 = 53.9% > 需51% → +2.9pp\n- 1X2 约旦胜@6.38: 模型26.6% > 需15.7% → +11.4pp → 爆炸value!\n\n**逻辑:**\n1. 市场为\"阿尔及利亚品牌\"支付16pp溢价=系统性错误定价\n2. 阿尔及利亚首轮0-3证明衰退是结构性的,不是暂时性\n3. 约旦亚洲杯亚军证明大赛发挥能力\n4. 双方0分=输者出局→约旦背水一战有心理优势(下狗心理)\n\n**仓位: 约旦+1.0@1.96 → 2.5-3%仓位。约旦胜@6.38 → 0.5%额外试探。**\n\n**辅助: Under 2.5@1.96**\n模型66.0% > 需51% → +15pp。双方0分+输者出局→可能因紧张保守开场。'
    },
    commercialAnalysis: {
      summary: '⚠️ 今日最大定价错误! 阿尔及利亚市场62.4% vs 模型46.3% = 差距-16.1pp。TYPE_B_BRAND — AFCON 2019冠军光环已过7年,首轮0-3阿根廷证明结构性问题。约旦+1.0@1.96是本日核心仓位(模型+27.8pp edge)。',
      approvedPicks: [
        { pick: '约旦+1.0(亚盘)', odds: '@1.96', verdict: 'approved', edge: '+27.8pp(今日最大!)', reasoning: '模型约旦不输2+球77.8%>需50%。阿尔及利亚\"品牌溢价\"TYPE_B_BRAND。核心仓位', category: 'core' },
        { pick: '约旦胜(1X2)', odds: '@6.38', verdict: 'approved', edge: '+11.4pp', reasoning: '模型26.6%>市场15.3%。爆炸value。小仓位试探', category: 'value' }
      ],
      rejectedPicks: [
        { pick: '阿尔及利亚-1.0', odds: '@2.40', verdict: 'rejected', edge: '-17pp+(模型仅9.9%)', reasoning: '⚠️ 最大陷阱! 市场63%赢球→让1球后胜率暴跌至9.9%。绝对不碰', category: 'trap' },
        { pick: 'Over 2.5', odds: '@1.94', verdict: 'rejected', edge: '-16.3pp(模型34%<需51%)', reasoning: '深渊负EV。双方都可能紧张→小球概率高', category: 'trap' },
        { pick: '波胆1-1', odds: '@6.00', verdict: 'rejected', edge: '12.8%概率', reasoning: '波胆结构性负EV。约旦+1.0已覆盖所有不败结果', category: 'entertainment' }
      ],
      marketBehavior: '阿尔及利亚是TYPE_B_BRAND的教科书案例——AFCON 2019冠军光环让市场自动+16pp。但过去3年的衰退(世界杯缺席+AFCON首轮出局+首轮0-3)未被消化。市场用\"7年前的历史\"定价今天的实力。约旦方向是Smart Money。',
      kellyNote: '约旦+1.0是本日核心仓位→建议2.5-3%仓位(edge最大+27.8pp+TYPE_B逻辑清晰)。约旦胜@6.38→建议0.5%额外试探。这是今天最重要的下注。'
    },
    confidence: 'mid'
  }
]

// ====== 进球差分布 ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '法国vs伊拉克': { team1: '法国', team2: '伊拉克', diffs: {'0':0.1319,'1':0.2282,'2':0.2431,'3':0.1814,'4':0.104,'5':0.0482,'6':0.0188,'7':0.0063,'8':0.0019} },
  '挪威vs塞内加尔': { team1: '挪威', team2: '塞内加尔', diffs: {'-3':0.0297,'-2':0.0864,'-1':0.1823,'0':0.2687,'1':0.221,'2':0.1264,'3':0.0525,'4':0.0171,'5':0.0046} },
  '阿根廷vs奥地利': { team1: '阿根廷', team2: '奥地利', diffs: {'-3':0.0059,'-2':0.0271,'-1':0.089,'0':0.2041,'1':0.2498,'2':0.2075,'3':0.1247,'4':0.0585,'5':0.0224,'6':0.0073,'7':0.002} },
  '约旦vs阿尔及利亚': { team1: '约旦', team2: '阿尔及利亚', diffs: {'-4':0.0202,'-3':0.0603,'-2':0.1402,'-1':0.2355,'0':0.2704,'1':0.1669,'2':0.0711,'3':0.0218,'4':0.0052} },
}

// ====== 赛事统计 (更新至6/22赛前，含6/21赛果) ======
export const tournamentStats: TournamentStats = {
  totalMatches: 45,
  totalGoals: 108,
  avgGoals: 2.40,
  homeWins: 19,
  draws: 14,
  awayWins: 12,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '西班牙 4-0 沙特', scorer: '待补充', date: '2026-06-21' }
}

// ====== 商业盘口精算分析 (6/22) ======
export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '法国vs伊拉克': {
    summary: '法国@1.09超级热门。Elo差456碾压场。市场-2.75深盘。模型方向一致(83%)但幅度保守(仅27%覆盖-2.75)。无明确value——观察型场次。',
    approvedPicks: [],
    rejectedPicks: [
      { pick: '法国-2.75', odds: '@1.93', verdict: 'rejected', edge: '-23pp(模型27%<需52%)', reasoning: '模型巨大负EV。法国可能碾压但市场已完全定价。碾压场纪律:不追深盘', category: 'trap' },
      { pick: '波胆2-0', odds: '@6.50', verdict: 'rejected', edge: '18.9%概率', reasoning: '波胆高overround。娱乐注不建议超0.3%仓位', category: 'entertainment' }
    ],
    marketBehavior: '法国\"品牌溢价\"存在但合理(Pinnacle定价)。@1.09反映真实碾压概率(~90%)。盘口-2.75说明市场预期至少3球差距。模型保守可能因λ压缩机制。',
    kellyNote: '建议0仓位。Under 3.5@2.02有模型支撑(78.7%)但需验证λ压缩→最大0.5%试探。'
  },
  '挪威vs塞内加尔': {
    summary: 'Elo差仅54→实力极度接近。市场微偏挪威(Haaland效应)。塞内加尔+0.25@2.03有+8.4pp正EV——今日第二value信号。must-win语境潜在开放对攻但模型倾向Under。',
    approvedPicks: [
      { pick: '塞内加尔+0.25', odds: '@2.03', verdict: 'approved', edge: '+8.4pp', reasoning: 'Elo差54=完全均势。市场因Haaland名气偏挪威。塞内加尔背水一战+AFCoN冠军底蕴', category: 'value' }
    ],
    rejectedPicks: [
      { pick: '平局(1X2)', odds: '@3.56', verdict: 'rejected', edge: '-0.6pp(噪音级)', reasoning: 'Model 26.9% vs 市场27.5%→差距仅0.6pp=无信号。泊松平局偏高不可靠', category: 'trap' },
      { pick: '波胆1-1', odds: '@6.50', verdict: 'rejected', edge: '12.8%概率', reasoning: '波胆结构性负EV。塞内加尔+0.25已覆盖含1-1的不败方向', category: 'entertainment' }
    ],
    marketBehavior: '挪威有\"Haaland溢价\"——Haaland的存在让市场自动+2-3pp给挪威方向。但Elo实际差距极小(54)。Pinnacle-0.25是对这个溢价的最理性表达。塞内加尔方向是Smart Money。',
    kellyNote: '塞内加尔+0.25建议1.5-2%仓位(edge厚+.逻辑清晰)。这是今天第二大仓位。'
  },
  '阿根廷vs奥地利': {
    summary: '今日最理性定价场次。模型67.3%≈市场65.6%(+1.7pp)→完全一致。阿根廷1.49胜价格合理。唯一微弱value: Under 2.5@1.94(+8.2pp)。高质量观察场。',
    approvedPicks: [
      { pick: 'Under 2.5', odds: '@1.94', verdict: 'approved', edge: '+8.2pp', reasoning: '模型59.7%>需51.5%。头名争夺战可能保守开场+双方防守质量高', category: 'value' }
    ],
    rejectedPicks: [
      { pick: '阿根廷-1.0', odds: '@1.83', verdict: 'rejected', edge: '-12.4pp(模型42.3%<需55%)', reasoning: '模型严重不支持覆盖-1.0。奥地利3-1约旦证明进攻力不弱', category: 'trap' },
      { pick: '波胆2-0', odds: '@7.00', verdict: 'rejected', edge: '13.0%概率', reasoning: '波胆结构性负EV。含在Under 2.5范围内', category: 'entertainment' }
    ],
    marketBehavior: 'Pinnacle定价极其精准——1x2几乎与模型完全一致。这是市场效率最高的标志。',
    kellyNote: 'Under 2.5建议1%仓位(edge温和)。阿根廷胜有微小正EV(+0.2pp)可配1%作为方向确认。'
  },
  '约旦vs阿尔及利亚': {
    summary: '⚠️ 今日最大定价错误! 阿尔及利亚市场62.4% vs 模型46.3% = 差距-16.1pp。TYPE_B_BRAND — AFCON 2019冠军光环已过7年。约旦+1.0@1.96是本日核心仓位(模型+27.8pp edge)。',
    approvedPicks: [
      { pick: '约旦+1.0(亚盘)', odds: '@1.96', verdict: 'approved', edge: '+27.8pp(今日最大!)', reasoning: '模型约旦不输2+球77.8%>需50%。阿尔及利亚\"品牌溢价\"TYPE_B_BRAND。核心仓位', category: 'core' },
      { pick: '约旦胜(1X2)', odds: '@6.38', verdict: 'approved', edge: '+11.4pp', reasoning: '模型26.6%>市场15.3%。爆炸value。小仓位试探', category: 'value' }
    ],
    rejectedPicks: [
      { pick: '阿尔及利亚-1.0', odds: '@2.40', verdict: 'rejected', edge: '-17pp+(模型仅9.9%)', reasoning: '⚠️ 最大陷阱! 市场63%赢球→让1球后胜率暴跌至9.9%。绝对不碰', category: 'trap' },
      { pick: 'Over 2.5', odds: '@1.94', verdict: 'rejected', edge: '-16.3pp(模型34%<需51%)', reasoning: '深渊负EV。双方都可能紧张→小球概率高', category: 'trap' },
      { pick: '波胆1-1', odds: '@6.00', verdict: 'rejected', edge: '12.8%概率', reasoning: '波胆结构性负EV。约旦+1.0已覆盖所有不败结果', category: 'entertainment' }
    ],
    marketBehavior: 'TYPE_B_BRAND教科书案例——AFCON 2019冠军光环让市场自动+16pp。过去3年衰退未被消化。市场用\"7年前的历史\"定价今天的实力。约旦方向是Smart Money。',
    kellyNote: '约旦+1.0是本日核心仓位→建议2.5-3%仓位(edge最大+27.8pp+TYPE_B逻辑清晰)。约旦胜@6.38→建议0.5%额外试探。这是今天最重要的下注。'
  }
}
