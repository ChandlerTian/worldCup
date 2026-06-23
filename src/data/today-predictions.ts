import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/23 (K/L组R2 — Form因子激活) ======
// ✅ market数据来源: The Odds API (betrivers, 实时盘口)
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '葡萄牙', team2: '乌兹别克', group: 'K', ground: '休斯顿', time: '13:00 UTC-5',
    elo1: 1989, elo2: 1714, eloDiff: 275,
    model: { home: 0.6434, draw: 0.2138, away: 0.1427 },
    market: { home: 0.8427, draw: 0.112, away: 0.0453, _note: 'The Odds API (betrivers)' },
    lambda: { home: 1.95, away: 0.79, total: 2.74 },
    gap: { team: '葡萄牙', value: -20.0, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: '马丁内斯', coach2: '卡塔内茨',
    style1: 'Ronaldo核心+快速边路。首轮1-1平刚果(金)表现低于预期。', style2: '首轮1-3负哥伦比亚但Fayzullaev进球。今天必全力防守求1分。',
    lineup1: 'Diogo Costa; Dalot, R Dias, Inacio, N Mendes; B Fernandes, Palhinha, B Silva; P Neto, Ronaldo, R Leao', lineup2: 'Ergashev; Alijonov, Khusanov, Ashurmatov, Abdullaev; Fayzullaev, Khamrobekov, Shukurov, Urunov; Sergeev',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Ronaldo vs 乌兹别克防线', advantage: '葡萄牙(碾压)', reason: 'Ronaldo需证明首轮1-1非正常' },
      { area: '中场控制', advantage: '葡萄牙', reason: 'B费+B席需提升。首轮对DRC中场控制不足' },
      { area: '反击速度', advantage: '乌兹别克(微)', reason: 'Fayzullaev首轮进球状态火热' },
    ],
    groupContext: 'K组R2。葡萄牙1分(1-1DRC)、哥伦比亚3分。葡必须赢否则落后→末轮压力巨大。淘汰赛路径争头名极强。',
    handicaps: [{line:-2, win:0.195, draw:0.199, lose:0.606, marketWin:'@1.71', marketLose:'@2.15', isMarketLine:true},{line:-1.5, win:0.394, draw:0.000, lose:0.606},{line:-1, win:0.394, draw:0.249, lose:0.356},{line:-0.5, win:0.643, draw:0.000, lose:0.357},{line:0, win:0.643, draw:0.214, lose:0.143},{line:0.5, win:0.958, draw:0.000, lose:0.042},{line:1, win:0.857, draw:0.100, lose:0.042}],
    overUnder: [{line:1.5, over:0.991, under:0.009}],
    predictions: [],
    recommendations: [{type:'让球', pick:'乌兹别克+1.5', odds:'@1.90', modelProb:0.606, reason:'输2球内60.6%>需52.6%→+8pp。乌兹别克R1仅输哥伦比亚2球'}],
    analysis: {
      groupSituation: 'K组R2。葡萄牙1分(1-1DRC)、哥伦比亚3分。葡必须赢否则落后→末轮压力巨大。淘汰赛路径争头名极强。',
      lineup1Detail: `葡萄牙 (4-3-3) — 马丁内斯\n\nRonaldo核心+快速边路。首轮1-1平刚果(金)表现低于预期。\n\n首发: Diogo Costa; Dalot, R Dias, Inacio, N Mendes; B Fernandes, Palhinha, B Silva; P Neto, Ronaldo, R Leao`,
      lineup2Detail: `乌兹别克 (4-2-3-1) — 卡塔内茨\n\n首轮1-3负哥伦比亚但Fayzullaev进球。今天必全力防守求1分。\n\n首发: Ergashev; Alijonov, Khusanov, Ashurmatov, Abdullaev; Fayzullaev, Khamrobekov, Shukurov, Urunov; Sergeev`,
      styleAnalysis: `**葡萄牙**: Ronaldo核心+快速边路。首轮1-1平刚果(金)表现低于预期。\n\n**乌兹别克**: 首轮1-3负哥伦比亚但Fayzullaev进球。今天必全力防守求1分。`,
      tacticalNarrative: `K/L组第2轮。各队有1场R1数据→form因子激活。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型64.3% vs 市场83.0%\n\n差距-18.7pp。lambda=1.95/0.79(total=2.74)。Form因子: R1进球=1.0/1.0(lambda从1.99/0.75调整为1.95/0.79)`,
      betReasoning: `R2比赛→有R1数据→form因子提供额外信号。但仅1场样本→权重不宜过高。`
    },
    commercialAnalysis: {
      summary: '葡萄牙R1 1-1平DRC低于预期。必须赢但乌兹别克有R1进球证明。葡萄牙-1.5深盘→市场过度反应。',
      approvedPicks: [
        { pick: '乌兹别克+1.5', odds: '@1.90', verdict: 'approved', edge: '+8pp', reasoning: 'R1对哥伦比亚仅输2球。葡萄牙首轮仅1球→攻击力存疑', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '葡萄牙-1.5', odds: '@1.80', verdict: 'rejected', edge: '-11pp', reasoning: '葡萄牙赢2+球仅39%→显著负EV', category: 'trap' },
      ],
      marketBehavior: '葡萄牙首轮1-1爆冷→市场仍给-1.5深盘。乌兹别克+1.5是value。', kellyNote: '乌兹别克+1.5建议1.5%仓位(+8pp)。葡萄牙首轮攻击力存疑。'
    },
    confidence: 'high'
  },
  {
    team1: '哥伦比亚', team2: '刚果(金)', group: 'K', ground: '瓜达拉哈拉', time: '16:00 UTC-6',
    elo1: 1982, elo2: 1652, eloDiff: 330,
    model: { home: 0.7192, draw: 0.1811, away: 0.0997 },
    market: { home: 0.6147, draw: 0.2442, away: 0.1411, _note: 'The Odds API (betrivers)' },
    lambda: { home: 2.2, away: 0.68, total: 2.88 },
    gap: { team: '哥伦比亚', value: 10.4, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '洛伦索', coach2: '德萨布雷',
    style1: '首轮3-1胜乌兹别克→Luis Diaz状态火热。赢则6分锁定出线。', style2: '首轮1-1逼平葡萄牙=最大冷门! Wissa进球证明攻击力。',
    lineup1: 'Vargas; Munoz, Cuesta, Lucumi, Mojica; Lerma, Uribe; Arias, James, L Diaz; J Duran', lineup2: 'M\'Pasi; Kalulu, Mbemba, Inonga, Masuaku; Pickel, Moutoussamy; Wissa, Kakuta, Bongonda; Bakambu',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Luis Diaz vs DRC右路', advantage: '哥伦比亚(碾压)', reason: 'Diaz世界级。首轮对乌兹别克已证明' },
      { area: 'DRC反击vs哥伦比亚高线', advantage: '刚果(金)(微)', reason: 'Wissa首轮进球+1-1平葡萄牙证明能力' },
    ],
    groupContext: 'K组R2。哥伦比亚3分、DRC1分。哥胜则6分出线。淘汰赛路径争头名极强。',
    handicaps: [{line:-2, win:0.261, draw:0.217, lose:0.521},{line:-1.5, win:0.478, draw:0.000, lose:0.521},{line:-1, win:0.479, draw:0.240, lose:0.281},{line:-0.5, win:0.719, draw:0.000, lose:0.281},{line:0, win:0.719, draw:0.181, lose:0.100},{line:0.5, win:0.974, draw:0.000, lose:0.026},{line:1, win:0.900, draw:0.074, lose:0.026}],
    overUnder: [{line:1.5, over:0.995, under:0.005}],
    predictions: [],
    recommendations: [{type:'胜平负', pick:'哥伦比亚胜', odds:'@1.50', modelProb:0.719, reason:'71.9%>66.7%→+5.2pp。Elo330+首轮3-1'},{type:'大小球', pick:'Over 2.5', odds:'@1.85', modelProb:0.52, reason:'两者R1都进球→λ=2.88。开放对攻'}],
    analysis: {
      groupSituation: 'K组R2。哥伦比亚3分、DRC1分。哥胜则6分出线。淘汰赛路径争头名极强。',
      lineup1Detail: `哥伦比亚 (4-2-3-1) — 洛伦索\n\n首轮3-1胜乌兹别克→Luis Diaz状态火热。赢则6分锁定出线。\n\n首发: Vargas; Munoz, Cuesta, Lucumi, Mojica; Lerma, Uribe; Arias, James, L Diaz; J Duran`,
      lineup2Detail: `刚果(金) (4-3-3) — 德萨布雷\n\n首轮1-1逼平葡萄牙=最大冷门! Wissa进球证明攻击力。\n\n首发: M'Pasi; Kalulu, Mbemba, Inonga, Masuaku; Pickel, Moutoussamy; Wissa, Kakuta, Bongonda; Bakambu`,
      styleAnalysis: `**哥伦比亚**: 首轮3-1胜乌兹别克→Luis Diaz状态火热。赢则6分锁定出线。\n\n**刚果(金)**: 首轮1-1逼平葡萄牙=最大冷门! Wissa进球证明攻击力。`,
      tacticalNarrative: `K/L组第2轮。各队有1场R1数据→form因子激活。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型71.9% vs 市场87.0%\n\n差距-15.1pp。lambda=2.2/0.68(total=2.88)。Form因子: R1进球=3.0/1.0(lambda从2.11/0.63调整为2.2/0.68)`,
      betReasoning: `R2比赛→有R1数据→form因子提供额外信号。但仅1场样本→权重不宜过高。`
    },
    commercialAnalysis: {
      summary: '哥伦比亚优势明显。DRC首轮1-1逼平葡萄牙→不可低估。核心value:哥伦比亚胜@1.50。',
      approvedPicks: [
        { pick: '哥伦比亚胜', odds: '@1.50', verdict: 'approved', edge: '+5.2pp', reasoning: '71.9%>66.7%。Elo330+首轮3-1攻击力', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '哥伦比亚-1.5', odds: '@2.05', verdict: 'rejected', edge: '-4pp(48%<49%)', reasoning: 'DRC防守韧性不宜追深盘', category: 'trap' },
      ],
      marketBehavior: '市场定价理性—哥伦比亚@1.50反映合理优势。DRC首轮冷门被合理定价。', kellyNote: '哥伦比亚胜建议1.5%仓位(+5.2pp)。DRC首轮表现让这场不如纯Elo碾压场。'
    },
    confidence: 'high'
  },
  {
    team1: '英格兰', team2: '加纳', group: 'L', ground: '波士顿', time: '17:00 UTC-4',
    elo1: 2024, elo2: 1510, eloDiff: 514,
    model: { home: 0.8447, draw: 0.1166, away: 0.0387 },
    market: { home: 0.8117, draw: 0.1356, away: 0.0527, _note: 'The Odds API (betrivers)' },
    lambda: { home: 2.65, away: 0.43, total: 3.08 },
    gap: { team: '英格兰', value: 3.3, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '图赫尔', coach2: '阿多',
    style1: '首轮4-2胜克罗地亚→攻击力全开(4球!)。赢则6分锁定出线。', style2: '首轮1-0胜巴拿马→3分! Kudus是关键。防守需大幅提升vs英4球线。',
    lineup1: 'Pickford; TAA, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Grealish; Kane', lineup2: 'Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Samed, Abdul Samed; Kudus, J Ayew, Sulemana; I Williams',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: 'Kane vs 加纳中卫', advantage: '英格兰(碾压)', reason: 'Kane首轮进2球。加纳无法单防世界级9号' },
      { area: 'Kudus反击', advantage: '加纳(微)', reason: '加纳唯一威胁。英高防线有暴露可能' },
    ],
    groupContext: 'L组R2。英格兰3分(GD+2)、加纳3分(GD+1)。胜者6分出线+争头名。淘汰赛路径争头名极强。',
    handicaps: [{line:-2, win:0.408, draw:0.232, lose:0.360},{line:-1.5, win:0.639, draw:0.000, lose:0.361},{line:-1, win:0.640, draw:0.204, lose:0.156},{line:-0.5, win:0.844, draw:0.000, lose:0.156},{line:0, win:0.844, draw:0.117, lose:0.039},{line:0.5, win:0.993, draw:0.000, lose:0.007},{line:1, win:0.961, draw:0.032, lose:0.007}],
    overUnder: [{line:1.5, over:0.999, under:0.001}],
    predictions: [],
    recommendations: [{type:'让球', pick:'加纳+2', odds:'@1.95', modelProb:0.64, reason:'输2球内64%>51.3%→+12.7pp! 加纳R1零封巴拿马'},{type:'大小球', pick:'Over 2.5', odds:'@1.80', modelProb:0.55, reason:'英R1 4球+加纳有进球→λ=3.08'}],
    analysis: {
      groupSituation: 'L组R2。英格兰3分(GD+2)、加纳3分(GD+1)。胜者6分出线+争头名。淘汰赛路径争头名极强。',
      lineup1Detail: `英格兰 (4-2-3-1) — 图赫尔\n\n首轮4-2胜克罗地亚→攻击力全开(4球!)。赢则6分锁定出线。\n\n首发: Pickford; TAA, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Grealish; Kane`,
      lineup2Detail: `加纳 (4-3-3) — 阿多\n\n首轮1-0胜巴拿马→3分! Kudus是关键。防守需大幅提升vs英4球线。\n\n首发: Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Samed, Abdul Samed; Kudus, J Ayew, Sulemana; I Williams`,
      styleAnalysis: `**英格兰**: 首轮4-2胜克罗地亚→攻击力全开(4球!)。赢则6分锁定出线。\n\n**加纳**: 首轮1-0胜巴拿马→3分! Kudus是关键。防守需大幅提升vs英4球线。`,
      tacticalNarrative: `K/L组第2轮。各队有1场R1数据→form因子激活。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型84.5% vs 市场95.1%\n\n差距-10.6pp。lambda=2.65/0.43(total=3.08)。Form因子: R1进球=4.0/1.0(lambda从2.55/0.3调整为2.65/0.43)`,
      betReasoning: `R2比赛→有R1数据→form因子提供额外信号。但仅1场样本→权重不宜过高。`
    },
    commercialAnalysis: {
      summary: '英格兰首轮4球=本届最强攻击力。加纳R1零封证明防守。加纳+2仍是本日最佳value(+12.7pp)。',
      approvedPicks: [
        { pick: '加纳+2', odds: '@1.95', verdict: 'approved', edge: '+12.7pp(本日最大!)', reasoning: '64%>51.3%。加纳R1零封巴拿马→有防守纪律', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '英格兰-2.5', odds: '@2.40', verdict: 'rejected', edge: '-24pp(36%<42%)', reasoning: '首轮4球≠场场碾压', category: 'trap' },
      ],
      marketBehavior: '英格兰首轮4-2后市场-2.5深盘更激进。加纳R1 1-0证明不是鱼腩。品牌溢价持续。', kellyNote: '加纳+2建议2%仓位(+12.7pp)。英格兰强但深盘风险大。'
    },
    confidence: 'high'
  },
  {
    team1: '巴拿马', team2: '克罗地亚', group: 'L', ground: '多伦多', time: '20:00 UTC-4',
    elo1: 1730, elo2: 1912, eloDiff: -182,
    model: { home: 0.1952, draw: 0.2367, away: 0.5681 },
    market: { home: 0.1407, draw: 0.2209, away: 0.6384, _note: 'The Odds API (betrivers)' },
    lambda: { home: 0.94, away: 1.78, total: 2.72 },
    gap: { team: '巴拿马', value: 5.4, direction: 'market_higher' },
    formation1: '5-3-2', formation2: '4-3-3', coach1: '克里斯蒂安森', coach2: '达利奇',
    style1: '首轮0-1负加纳→未进球但仅丢1球→防守纪律尚可。', style2: '首轮2-4负英格兰→进2球但防守老化暴露。必须赢否则0分垫底。',
    lineup1: 'Mejia; Murillo, Escobar, Cordoba, Andrade, Davis; Godoy, Carrasquilla, Barcenas; Fajardo, Diaz', lineup2: 'Livakovic; Stanisic, Sutalo, Gvardiol, Sosa; Modric, Brozovic, Kovacic; Pasalic, Kramaric, Perisic',
    injuries1: '无重大伤情', injuries2: '全员健康(Modric体能管理/40岁)',
    tacticalMatchup: [
      { area: 'Modric组织vs巴拿马中场', advantage: '克罗地亚(碾压)', reason: 'Modric世界级。首轮进2球证明攻击力仍在' },
      { area: '巴拿马5后卫防守', advantage: '巴拿马(微)', reason: '首轮仅丢1球→防守纪律可靠' },
      { area: '克罗地亚防守老化', advantage: '巴拿马(微)', reason: '克首轮丢4球→防线漏洞大' },
    ],
    groupContext: 'L组R2生死战。双方0分→输者基本出局。克必须赢否则黄金一代谢幕。',
    handicaps: [{line:-2, win:0.017, draw:0.049, lose:0.933},{line:-1.5, win:0.067, draw:0.000, lose:0.933},{line:-1, win:0.067, draw:0.129, lose:0.805},{line:-0.5, win:0.195, draw:0.000, lose:0.805},{line:0, win:0.195, draw:0.237, lose:0.568},{line:0.5, win:0.677, draw:0.000, lose:0.323},{line:1, win:0.432, draw:0.245, lose:0.323}],
    overUnder: [{line:1.5, over:0.852, under:0.148}],
    predictions: [],
    recommendations: [{type:'让球', pick:'巴拿马+1.5', odds:'@1.85', modelProb:0.805, reason:'输2球内80.5%>54%→+26.5pp! R1仅丢1球+克丢4球'},{type:'大小球', pick:'Under 2.5', odds:'@1.88', modelProb:0.67, reason:'生死战可能保守→小球'}],
    analysis: {
      groupSituation: 'L组R2生死战。双方0分→输者基本出局。克必须赢否则黄金一代谢幕。',
      lineup1Detail: `巴拿马 (5-3-2) — 克里斯蒂安森\n\n首轮0-1负加纳→未进球但仅丢1球→防守纪律尚可。\n\n首发: Mejia; Murillo, Escobar, Cordoba, Andrade, Davis; Godoy, Carrasquilla, Barcenas; Fajardo, Diaz`,
      lineup2Detail: `克罗地亚 (4-3-3) — 达利奇\n\n首轮2-4负英格兰→进2球但防守老化暴露。必须赢否则0分垫底。\n\n首发: Livakovic; Stanisic, Sutalo, Gvardiol, Sosa; Modric, Brozovic, Kovacic; Pasalic, Kramaric, Perisic`,
      styleAnalysis: `**巴拿马**: 首轮0-1负加纳→未进球但仅丢1球→防守纪律尚可。\n\n**克罗地亚**: 首轮2-4负英格兰→进2球但防守老化暴露。必须赢否则0分垫底。`,
      tacticalNarrative: `K/L组第2轮。各队有1场R1数据→form因子激活。淘汰赛路径争头名动力明确。`,
      modelInterpretation: `模型19.5% vs 市场26.0%\n\n差距-6.5pp。lambda=0.94/1.78(total=2.72)。Form因子: R1进球=0.0/2.0(lambda从0.93/1.75调整为0.94/1.78)`,
      betReasoning: `R2比赛→有R1数据→form因子提供额外信号。但仅1场样本→权重不宜过高。`
    },
    commercialAnalysis: {
      summary: '克罗地亚MUST-WIN。巴拿马+1.5仍有+26.5pp巨大正EV。克首轮丢4球→防守严重老化。',
      approvedPicks: [
        { pick: '巴拿马+1.5', odds: '@1.85', verdict: 'approved', edge: '+26.5pp(本日第二!)', reasoning: '80.5%>54%。R1仅丢1球+克丢4球', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '克罗地亚-1.5', odds: '@2.25', verdict: 'rejected', edge: '-33pp(6.7%<44%)', reasoning: '史诗负EV!克赢2+球仅6.7%', category: 'trap' },
      ],
      marketBehavior: '克\'2022季军\'光环→市场给-1.5。R1 2-4负英暴露防线老化。巴拿马R1仅丢1球被低估。', kellyNote: '巴拿马+1.5建议2%仓位(+26.5pp)。克老化+R1防守崩溃=核心逻辑。'
    },
    confidence: 'high'
  },
]

export const goalDistributions: Record<string, GoalDistribution> = {
  '葡萄牙vs乌兹别克': { team1: '葡萄牙', team2: '乌兹别克', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0002,'-4':0.0014,'-3':0.0078,'-2':0.033,'-1':0.1003,'0':0.2138,'1':0.2491,'2':0.1989,'3':0.1154,'4':0.0524,'5':0.0194,'6':0.0061,'7':0.0017,'8':0.0004} },
  '哥伦比亚vs刚果(金)': { team1: '哥伦比亚', team2: '刚果(金)', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0001,'-4':0.0007,'-3':0.0043,'-2':0.021,'-1':0.0736,'0':0.1811,'1':0.2404,'2':0.2173,'3':0.1425,'4':0.0731,'5':0.0306,'6':0.0108,'7':0.0033,'8':0.0009} },
  '英格兰vs加纳': { team1: '英格兰', team2: '加纳', diffs: {'-8':0.0,'-7':0.0,'-6':0.0,'-5':0.0,'-4':0.0001,'-3':0.0008,'-2':0.006,'-1':0.0319,'0':0.1166,'1':0.2042,'2':0.2322,'3':0.1886,'4':0.1187,'5':0.0608,'6':0.0262,'7':0.0097,'8':0.0032} },
  '巴拿马vs克罗地亚': { team1: '巴拿马', team2: '克罗地亚', diffs: {'-8':0.0002,'-7':0.0009,'-6':0.0036,'-5':0.0128,'-4':0.0379,'-3':0.0922,'-2':0.1758,'-1':0.2447,'0':0.2367,'1':0.1286,'2':0.0493,'3':0.0137,'4':0.003,'5':0.0005,'6':0.0001,'7':0.0,'8':0.0} },
}

export const tournamentStats: TournamentStats = {
  totalMatches: 52, totalGoals: 128, avgGoals: 2.46,
  homeWins: 23, draws: 16, awayWins: 13,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '西班牙 4-0 沙特', scorer: '待补充', date: '2026-06-21' }
}

export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '葡萄牙vs乌兹别克': {
    summary: '葡萄牙R1 1-1平DRC低于预期。必须赢但乌兹别克有R1进球证明。葡萄牙-1.5深盘→市场过度反应。', approvedPicks: [
      { pick: '乌兹别克+1.5', odds: '@1.90', verdict: 'approved', edge: '+8pp', reasoning: 'R1对哥伦比亚仅输2球。葡萄牙首轮仅1球→攻击力存疑', category: 'value' },
    ], rejectedPicks: [
      { pick: '葡萄牙-1.5', odds: '@1.80', verdict: 'rejected', edge: '-11pp', reasoning: '葡萄牙赢2+球仅39%→显著负EV', category: 'trap' },
    ], marketBehavior: '葡萄牙首轮1-1爆冷→市场仍给-1.5深盘。乌兹别克+1.5是value。', kellyNote: '乌兹别克+1.5建议1.5%仓位(+8pp)。葡萄牙首轮攻击力存疑。'
  },
  '哥伦比亚vs刚果(金)': {
    summary: '哥伦比亚优势明显。DRC首轮1-1逼平葡萄牙→不可低估。核心value:哥伦比亚胜@1.50。', approvedPicks: [
      { pick: '哥伦比亚胜', odds: '@1.50', verdict: 'approved', edge: '+5.2pp', reasoning: '71.9%>66.7%。Elo330+首轮3-1攻击力', category: 'core' },
    ], rejectedPicks: [
      { pick: '哥伦比亚-1.5', odds: '@2.05', verdict: 'rejected', edge: '-4pp(48%<49%)', reasoning: 'DRC防守韧性不宜追深盘', category: 'trap' },
    ], marketBehavior: '市场定价理性—哥伦比亚@1.50反映合理优势。DRC首轮冷门被合理定价。', kellyNote: '哥伦比亚胜建议1.5%仓位(+5.2pp)。DRC首轮表现让这场不如纯Elo碾压场。'
  },
  '英格兰vs加纳': {
    summary: '英格兰首轮4球=本届最强攻击力。加纳R1零封证明防守。加纳+2仍是本日最佳value(+12.7pp)。', approvedPicks: [
      { pick: '加纳+2', odds: '@1.95', verdict: 'approved', edge: '+12.7pp(本日最大!)', reasoning: '64%>51.3%。加纳R1零封巴拿马→有防守纪律', category: 'core' },
    ], rejectedPicks: [
      { pick: '英格兰-2.5', odds: '@2.40', verdict: 'rejected', edge: '-24pp(36%<42%)', reasoning: '首轮4球≠场场碾压', category: 'trap' },
    ], marketBehavior: '英格兰首轮4-2后市场-2.5深盘更激进。加纳R1 1-0证明不是鱼腩。品牌溢价持续。', kellyNote: '加纳+2建议2%仓位(+12.7pp)。英格兰强但深盘风险大。'
  },
  '巴拿马vs克罗地亚': {
    summary: '克罗地亚MUST-WIN。巴拿马+1.5仍有+26.5pp巨大正EV。克首轮丢4球→防守严重老化。', approvedPicks: [
      { pick: '巴拿马+1.5', odds: '@1.85', verdict: 'approved', edge: '+26.5pp(本日第二!)', reasoning: '80.5%>54%。R1仅丢1球+克丢4球', category: 'core' },
    ], rejectedPicks: [
      { pick: '克罗地亚-1.5', odds: '@2.25', verdict: 'rejected', edge: '-33pp(6.7%<44%)', reasoning: '史诗负EV!克赢2+球仅6.7%', category: 'trap' },
    ], marketBehavior: '克\'2022季军\'光环→市场给-1.5。R1 2-4负英暴露防线老化。巴拿马R1仅丢1球被低估。', kellyNote: '巴拿马+1.5建议2%仓位(+26.5pp)。克老化+R1防守崩溃=核心逻辑。'
  },
}