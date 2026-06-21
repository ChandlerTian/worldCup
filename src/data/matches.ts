import type { MatchResult, MatchPrediction, ModelVsActual, GoalDistribution, TournamentStats, CommercialAnalysis, ModelArchitecture } from '../types'

// ====== 历史赛果 ======
export const matchResults: MatchResult[] = [
  // Matchday 1-2 (6/11-12)
  { date: '2026-06-11', group: 'A', team1: '墨西哥', team2: '南非', score1: 2, score2: 0, scorers1: ['Quiñones 9\'', 'Jiménez 67\''], scorers2: [], ground: '瓜达拉哈拉' },
  { date: '2026-06-11', group: 'A', team1: '韩国', team2: '捷克', score1: 2, score2: 1, scorers1: ['Hwang In-Beom 67\'', 'Oh Hyeon-Gyu 80\''], scorers2: ['Krejcí 59\''], ground: '亚特兰大' },
  { date: '2026-06-12', group: 'B', team1: '加拿大', team2: '波黑', score1: 1, score2: 1, scorers1: ['Larin 78\''], scorers2: ['Lukić 21\''], ground: '温哥华' },
  { date: '2026-06-12', group: 'D', team1: '美国', team2: '巴拉圭', score1: 4, score2: 1, scorers1: ['Bobadilla OG 7\'', 'Balogun 31\'', 'Balogun 45+5\'', 'Reyna 90+8\''], scorers2: ['Mauricio 73\''], ground: '西雅图' },
  // Matchday 3-4 (6/13-14)
  { date: '2026-06-13', group: 'B', team1: '卡塔尔', team2: '瑞士', score1: 1, score2: 1, scorers1: ['Khoukhi 90+4\''], scorers2: ['Embolo(P) 17\''], ground: '洛杉矶' },
  { date: '2026-06-13', group: 'C', team1: '巴西', team2: '摩洛哥', score1: 1, score2: 1, scorers1: ['Vinícius Jr 32\''], scorers2: ['Saibari 21\''], ground: '费城' },
  { date: '2026-06-13', group: 'C', team1: '海地', team2: '苏格兰', score1: 0, score2: 1, scorers1: [], scorers2: ['McGinn 28\''], ground: '波士顿' },
  { date: '2026-06-13', group: 'D', team1: '澳大利亚', team2: '土耳其', score1: 2, score2: 0, scorers1: ['Irankunda 27\'', 'Metcalfe 75\''], scorers2: [], ground: '旧金山' },
  { date: '2026-06-14', group: 'E', team1: '德国', team2: '库拉索', score1: 7, score2: 1, scorers1: ['Nmecha 6\'', 'Schlotterbeck 38\'', 'Havertz(P) 45+5\'', 'Musiala 47\'', 'Brown 68\'', 'Undav 78\'', 'Havertz 88\''], scorers2: ['Comenencia 21\''], ground: '纽约' },
  { date: '2026-06-14', group: 'E', team1: '科特迪瓦', team2: '厄瓜多尔', score1: 1, score2: 0, scorers1: ['Diallo 90\''], scorers2: [], ground: '迈阿密' },
  { date: '2026-06-14', group: 'F', team1: '荷兰', team2: '日本', score1: 2, score2: 2, scorers1: ['van Dijk 51\'', 'Summerville 64\''], scorers2: ['Nakamura 57\'', 'Kamada 88\''], ground: '达拉斯' },
  { date: '2026-06-14', group: 'F', team1: '瑞典', team2: '突尼斯', score1: 5, score2: 1, scorers1: ['Ayari 7\'', 'Isak 30\'', 'Gyökeres 59\'', 'Svanberg 84\'', 'Ayari 90+6\''], scorers2: ['Rekik 43\''], ground: '休斯顿' },
  // Matchday 5-6 (6/15-16)
  { date: '2026-06-15', group: 'G', team1: '比利时', team2: '埃及', score1: 1, score2: 1, scorers1: ['Hany OG 66\''], scorers2: ['Ashour 19\''], ground: '多伦多' },
  { date: '2026-06-15', group: 'G', team1: '伊朗', team2: '新西兰', score1: 2, score2: 2, scorers1: ['Rezaeian 32\'', 'Mohebbi 64\''], scorers2: ['Just 7\'', 'Just 54\''], ground: '蒙特利尔' },
  { date: '2026-06-15', group: 'H', team1: '西班牙', team2: '佛得角', score1: 0, score2: 0, scorers1: [], scorers2: [], ground: '达拉斯' },
  { date: '2026-06-15', group: 'H', team1: '沙特', team2: '乌拉圭', score1: 1, score2: 1, scorers1: ['Al-Amri 41\''], scorers2: ['Araújo 80\''], ground: '休斯顿' },
  { date: '2026-06-16', group: 'I', team1: '法国', team2: '塞内加尔', score1: 3, score2: 1, scorers1: ['Mbappé 66\'', 'Barcola 82\'', 'Mbappé 90+6\''], scorers2: ['Mbaye 90+5\''], ground: '纽约' },
  { date: '2026-06-16', group: 'I', team1: '伊拉克', team2: '挪威', score1: 1, score2: 4, scorers1: ['Hussein 39\''], scorers2: ['Haaland 29\'', 'Haaland 43\'', 'Østigard 76\'', 'Hussein OG 90+6\''], ground: '多伦多' },
  { date: '2026-06-16', group: 'J', team1: '阿根廷', team2: '阿尔及利亚', score1: 0, score2: 0, scorers1: [], scorers2: [], ground: '迈阿密' },
  { date: '2026-06-16', group: 'J', team1: '奥地利', team2: '约旦', score1: 0, score2: 0, scorers1: [], scorers2: [], ground: '费城' },
  // Matchday 7 (6/17)
  { date: '2026-06-17', group: 'K', team1: '葡萄牙', team2: '刚果(金)', score1: 1, score2: 1, scorers1: ['J.Neves 6\''], scorers2: ['Wissa 45+5\''], ground: '纽约' },
  { date: '2026-06-17', group: 'K', team1: '乌兹别克', team2: '哥伦比亚', score1: 1, score2: 3, scorers1: ['Fayzullaev 60\''], scorers2: ['Muñoz 40\'', 'L.Díaz 65\'', 'Campaz 90+9\''], ground: '迈阿密' },
  { date: '2026-06-17', group: 'L', team1: '英格兰', team2: '克罗地亚', score1: 4, score2: 2, scorers1: ['Kane 12\'', 'Kane 42\'', 'Bellingham 47\'', 'Rashford 85\''], scorers2: ['Baturina 36\'', 'Musa 45+5\''], ground: '达拉斯' },
  { date: '2026-06-17', group: 'L', team1: '加纳', team2: '巴拿马', score1: 1, score2: 0, scorers1: ['Yirenkyi 90+5\''], scorers2: [], ground: '休斯顿' },
  // Matchday 8 (6/18)
  { date: '2026-06-18', group: 'A', team1: '捷克', team2: '南非', score1: 1, score2: 1, scorers1: ['Sadílek 6\''], scorers2: ['Mokoena 83\''], ground: '亚特兰大' },
  { date: '2026-06-18', group: 'A', team1: '墨西哥', team2: '韩国', score1: 1, score2: 0, scorers1: ['Romo 50\''], scorers2: [], ground: '瓜达拉哈拉' },
  { date: '2026-06-18', group: 'B', team1: '瑞士', team2: '波黑', score1: 4, score2: 1, scorers1: ['Manzambi 74\'', 'Vargas 84\'', 'Manzambi 90\'', 'Xhaka 90+7\''], scorers2: ['Mahmic 90+3\''], ground: '洛杉矶' },
  { date: '2026-06-18', group: 'B', team1: '加拿大', team2: '卡塔尔', score1: 6, score2: 0, scorers1: ['Larin 16\'', 'J.David 29\'', 'J.David 45+3\'', 'Saliba 64\'', 'Manai 75\'', 'J.David 90+2\''], scorers2: [], ground: '温哥华' },
  // Matchday 9 (6/19)
  { date: '2026-06-19', group: 'C', team1: '苏格兰', team2: '摩洛哥', score1: 0, score2: 1, scorers1: [], scorers2: ['Saibari 2\''], ground: '波士顿' },
  { date: '2026-06-19', group: 'C', team1: '巴西', team2: '海地', score1: 3, score2: 0, scorers1: ['Cunha 23\'', 'Cunha 36\'', 'Vinícius Jr 45+3\''], scorers2: [], ground: '费城' },
  { date: '2026-06-19', group: 'D', team1: '美国', team2: '澳大利亚', score1: 2, score2: 0, scorers1: ['Burgess OG 11\'', 'Freeman 43\''], scorers2: [], ground: '西雅图' },
  { date: '2026-06-19', group: 'D', team1: '土耳其', team2: '巴拉圭', score1: 0, score2: 1, scorers1: [], scorers2: ['进球者未知'], ground: '旧金山' },
  // Matchday 10 (6/20)
  { date: '2026-06-20', group: 'E', team1: '德国', team2: '科特迪瓦', score1: 2, score2: 1, scorers1: ['待补充'], scorers2: ['待补充'], ground: '多伦多' },
  { date: '2026-06-20', group: 'E', team1: '厄瓜多尔', team2: '库拉索', score1: 0, score2: 0, scorers1: [], scorers2: [], ground: '堪萨斯城' },
  { date: '2026-06-20', group: 'F', team1: '荷兰', team2: '瑞典', score1: 5, score2: 1, scorers1: ['待补充'], scorers2: ['待补充'], ground: '休斯顿' },
  // Matchday 11 (6/21 早场)
  { date: '2026-06-21', group: 'F', team1: '突尼斯', team2: '日本', score1: 0, score2: 4, scorers1: [], scorers2: ['待补充'], ground: '蒙特雷' },
]

// ====== 6/18 模型 vs 实际 ======
export const modelVsActual: ModelVsActual[] = [
  {
    match: '捷克 vs 南非',
    model: { home: 0.5296, draw: 0.2633, away: 0.2071, topPick: '2-0 / 1-0' },
    expertRevision: '1-0',
    actual: '1-1',
    modelCorrect: false,
    expertCorrect: false,
    winner: '都没中'
  },
  {
    match: '墨西哥 vs 韩国',
    model: { home: 0.5608, draw: 0.2492, away: 0.1899, topPick: '1-0 ✓' },
    expertRevision: '1-1',
    actual: '1-0',
    modelCorrect: true,
    expertCorrect: false,
    winner: '模型命中'
  },
  {
    match: '瑞士 vs 波黑',
    model: { home: 0.5703, draw: 0.2475, away: 0.1822, topPick: '2-0 / 2-1' },
    expertRevision: '1-1',
    actual: '4-1',
    modelCorrect: true,
    expertCorrect: false,
    winner: '模型方向正确'
  },
  {
    match: '加拿大 vs 卡塔尔',
    model: { home: 0.7455, draw: 0.185, away: 0.0695, topPick: '2-0 / 3-0' },
    expertRevision: '1-0',
    actual: '6-0',
    modelCorrect: true,
    expertCorrect: false,
    winner: '模型方向正确'
  }
]

// ====== 6/19 模型 vs 实际 ======
export const modelVsActualDay19: ModelVsActual[] = [
  {
    match: '苏格兰 vs 摩洛哥',
    model: { home: 0.3247, draw: 0.2765, away: 0.3988, topPick: '0-1 / 1-1' },
    expertRevision: '苏格兰受让0.75',
    actual: '0-1',
    modelCorrect: true,
    expertCorrect: false,
    winner: '模型波胆命中0-1'
  },
  {
    match: '巴西 vs 海地',
    model: { home: 0.724, draw: 0.1898, away: 0.0863, topPick: '3-0 / 4-0' },
    expertRevision: '巴西-2.5',
    actual: '3-0',
    modelCorrect: true,
    expertCorrect: true,
    winner: '双命中! 巴西-2.5✓ 波胆3-0✓'
  },
  {
    match: '美国 vs 澳大利亚',
    model: { home: 0.4303, draw: 0.2742, away: 0.2956, topPick: '2-1 / 1-0' },
    expertRevision: '澳大利亚+1.0',
    actual: '2-0',
    modelCorrect: false,
    expertCorrect: false,
    winner: '都没中(主场buff低估)'
  },
  {
    match: '土耳其 vs 巴拉圭',
    model: { home: 0.418, draw: 0.2748, away: 0.3072, topPick: '2-1 / 1-0' },
    expertRevision: '巴拉圭+0.5',
    actual: '0-1',
    modelCorrect: false,
    expertCorrect: true,
    winner: 'Value bet命中! 巴拉圭+0.5✓'
  }
]

// ====== 6/20 模型 vs 实际 ======
export const modelVsActualDay20: ModelVsActual[] = [
  {
    match: '德国 vs 科特迪瓦',
    model: { home: 0.5255, draw: 0.2555, away: 0.219, topPick: '2-1 ✓' },
    expertRevision: 'Over 2.5 + 科+1.0',
    actual: '2-1',
    modelCorrect: true,
    expertCorrect: true,
    winner: '波胆精准命中! Over 2.5✓ 科+1走水'
  },
  {
    match: '厄瓜多尔 vs 库拉索',
    model: { home: 0.7421, draw: 0.1837, away: 0.0742, topPick: '2-0 / 3-0' },
    expertRevision: '厄-2.25 + Over 3.0',
    actual: '0-0',
    modelCorrect: false,
    expertCorrect: false,
    winner: '爆冷! 碾压预期完全落空'
  },
  {
    match: '荷兰 vs 瑞典',
    model: { home: 0.5196, draw: 0.2565, away: 0.2239, topPick: '1-1 / 2-1' },
    expertRevision: 'Over 2.5',
    actual: '5-1',
    modelCorrect: true,
    expertCorrect: true,
    winner: 'Over 2.5大球命中! 方向正确但低估幅度'
  },
  {
    match: '突尼斯 vs 日本',
    model: { home: 0.1399, draw: 0.227, away: 0.6332, topPick: '0-2 / 0-1' },
    expertRevision: '日本胜 + Over 2.25',
    actual: '0-4',
    modelCorrect: true,
    expertCorrect: true,
    winner: '日本胜✓ Over 2.25✓ 碾压度再被低估'
  }
]

// ====== 6/21 今日预测 — 从 today-predictions.ts 导入 ======
// todayPredictions, goalDistributions, tournamentStats, commercialAnalyses
// 已迁移至 ./today-predictions.ts (6/21 Matchday 11)
// 保留下方为6/20历史预测数据存档

// ====== 6/20 历史预测存档 (Matchday 10) ======
export const day20Predictions: MatchPrediction[] = [
  {
    team1: '德国', team2: '科特迪瓦', group: 'E', ground: '多伦多', time: '16:00 UTC-4',
    elo1: 1939, elo2: 1743, eloDiff: 196,
    model: { home: 0.5255, draw: 0.2555, away: 0.219 },
    market: { home: 0.626, draw: 0.206, away: 0.168 },
    lambda: { home: 1.73, away: 1.04, total: 2.77 },
    gap: { team: '德国', value: -10.0, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '纳格尔斯曼', coach2: '法埃',
    style1: '高节奏逼抢+位置进攻。Musiala/Wirtz双核。首轮7-1库拉索',
    style2: '身体对抗+快速转换。2023非洲杯冠军。Amad Diallo 90分绝杀厄瓜多尔',
    lineup1: 'ter Stegen; Kimmich, Rüdiger, Schlotterbeck, Raum; Andrich, Wirtz; Musiala, Havertz, Sané; Undav',
    lineup2: 'Sangaré; Aurier, Bailly, Kossounou, Diallo; Kessié, Seri, Pepe; Diallo A., Haller',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '逼抢vs对抗', advantage: '均衡', reason: '德国高位逼抢vs科特迪瓦身体对抗，互有胜负' },
      { area: '边路宽度', advantage: '德国', reason: 'Kimmich+Raum套边提供极大宽度' },
      { area: '反击速度', advantage: '科特迪瓦', reason: 'Amad Diallo速度+德国高线身后空间' },
      { area: '定位球', advantage: '均衡', reason: '双方都有身高和头球能力' }
    ],
    groupContext: '双方都3分争头名。淘汰赛E1对弱第3(1700) vs E2对挪威(1914)。争第1动力极强(+214)！',
    handicaps: [{line:-1, win:0.289, draw:0.231, lose:0.480},{line:-0.5, win:0.526, draw:0, lose:0.474},{line:0, win:0.526, draw:0.256, lose:0.219}],
    overUnder: [{line:2.5, over:0.547, under:0.453, marketOver:'@1.95', marketUnder:'@1.93'},{line:3.0, over:0.420, under:0.580, marketOver:'@1.95', marketUnder:'@1.93'}],
    predictions: [{score:'2-1', prob:9.8, reason:'德国进攻火力+科特迪瓦有反击1球(Amad Diallo)'},{score:'1-1', prob:12.2, reason:'最高概率比分。科特迪瓦身体对抗强能顶住'}],
    recommendations: [
      {type:'胜平负', pick:'平局', odds:'@4.69', modelProb:25.6, reason:'VALUE: 模型25.6% vs需21.3%。科特迪瓦CAN冠军有实力，德国7-1对手太弱不具参考'},
      {type:'让球', pick:'科特迪瓦+1.0', odds:'@2.03', modelProb:48.0, reason:'模型科不败47.5%。Pinnacle@2.03(需49%)接近边缘。非洲杯冠军有对抗能力'},
      {type:'大小球', pick:'Over 2.5', odds:'@1.95', modelProb:54.7, reason:'德国进攻爆发+科有反击→双方都能进球'},
      {type:'波胆', pick:'2-1', odds:'@8.0', modelProb:9.8, reason:'德国碾压但科非鱼腩(CAN冠军)必有1球反击'}
    ],
    analysis: { groupSituation: '**E组积分形势**\n\n德国3分(GD+6, 7-1库拉索) vs 科特迪瓦3分(GD+1, 1-0厄瓜多尔)。双方都首轮赢了，这是争头名的直接对话。\n\n**淘汰赛路径:** E1对最佳第3(Elo≈1700) vs E2对I2挪威(Elo1914)。争第1动力极强(+214差距)！', lineup1Detail: '**德国 (4-2-3-1) — 纳格尔斯曼**\n\n首轮7-1血洗库拉索展现恐怖火力。Musiala+Wirtz双核驱动,Havertz假9号,Undav替补双响。全员健康。', lineup2Detail: '**科特迪瓦 (4-3-3) — 法埃**\n\n2023非洲杯冠军阵容为班底。Amad Diallo(曼联)90分钟绝杀厄瓜多尔展现大心脏。Kessié+Seri中场攻守兼备。', styleAnalysis: '**德国:** 高节奏逼抢+位置进攻。Musiala/Wirtz双10号创造力爆表。Kimmich右后卫前插+Raum左路冲击。首轮7-1但对手是Elo1427库拉索。\n\n**科特迪瓦:** 身体对抗强硬+快速转换。非洲杯冠军证明大赛抗压能力。Amad Diallo个人能力可改变比赛。', tacticalNarrative: '**核心对位:** 德国高位逼抢 vs 科特迪瓦身体对抗。科特迪瓦不会像库拉索被打穿——有对抗力+反击速度。但德国进攻维度(Musiala内切+Wirtz直塞+Kimmich套边)远超首轮对手。\n\n**关键:** 科特迪瓦能否前30分钟顶住→能则比赛变紧凑。Amad Diallo的反击速度是德国高线最大威胁。', modelInterpretation: '**模型52.6% vs 市场62.6%** — 市场多看好德国10pp。可能因7-1心理冲击过度反应。但7-1对手是Elo1427库拉索(48队最弱之一)不具参考性。科特迪瓦Elo1743是正经对手。\n\nValue在科特迪瓦方向: 平局@4.69(模型25.6%>需21.3%)和科胜@5.74(模型21.9%>需17.4%)。', betReasoning: '**核心: 科特迪瓦+1.0@2.03 + Over 2.5@1.95**\n\n让球逻辑: 模型给科不败47.5%,Pinnacle需49%→微亏但接近。结合德国7-1是虚假繁荣(对手太弱)→实际科不败>50%。\n\nOver逻辑: 模型54.7%>需51%→有value。德国进攻恐怖+科有反击能力(Amad Diallo)。双方都能进球。' },
    confidence: 'mid'
  },
  {
    team1: '厄瓜多尔', team2: '库拉索', group: 'E', ground: '堪萨斯城', time: '19:00 UTC-5',
    elo1: 1890, elo2: 1427, eloDiff: 463,
    model: { home: 0.7421, draw: 0.1837, away: 0.0742 },
    market: { home: 0.856, draw: 0.102, away: 0.042 },
    lambda: { home: 2.18, away: 0.56, total: 2.73 },
    gap: { team: '厄瓜多尔', value: -11.4, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '5-4-1', coach1: '贝卡塞切', coach2: '比森蒂尼',
    style1: '南美技术流+Caicedo(切尔西)核心。首轮0-1负科特迪瓦必须赢',
    style2: '首轮1-7惨败德国。加勒比弱旅全力防守',
    lineup1: 'Galíndez; Preciado, Torres, Hincapié, Estupiñán; Caicedo, Franco, Páez; Plata, Valencia, Sarmiento',
    lineup2: 'Room; 首轮被打7球后调整阵容',
    injuries1: '全员健康', injuries2: '无伤但士气极低',
    tacticalMatchup: [
      { area: '控球vs低位', advantage: '厄瓜多尔(碾压)', reason: 'Caicedo+Páez控制力远超。类似巴西vs海地' },
      { area: '个体天赋', advantage: '厄瓜多尔(碾压)', reason: 'Caicedo(切尔西)+Hincapié(勒沃库森) vs 无知名球员' },
      { area: '心理', advantage: '厄瓜多尔', reason: '库拉索1-7后崩溃。厄瓜多尔must-win猛攻' },
      { area: '反击', advantage: '库拉索(微)', reason: '唯一武器但首轮证明执行力极差' }
    ],
    groupContext: '厄瓜多尔0分必须大胜追分。库拉索0分(1-7)已淘汰。Elo差463=本轮最大碾压',
    handicaps: [{line:-2.25, win:0.264, draw:0, lose:0.736},{line:-2, win:0.264, draw:0.226, lose:0.510},{line:-1, win:0.490, draw:0.240, lose:0.270}],
    overUnder: [{line:2.5, over:0.538, under:0.462, marketOver:'@1.93', marketUnder:'@1.92'},{line:3.0, over:0.420, under:0.580, marketOver:'@1.93', marketUnder:'@1.92'}],
    predictions: [{score:'2-0', prob:15.4, reason:'厄瓜多尔碾压+库拉索防线已被打穿7球'},{score:'3-0', prob:11.2, reason:'厄瓜多尔追净胜球不手软'}],
    recommendations: [
      {type:'让球', pick:'厄瓜多尔-2.25', odds:'@1.98', modelProb:26.4, reason:'跟市场。巴西-2.5昨天命中。库拉索1-7后崩盘'},
      {type:'大小球', pick:'Over 3.0', odds:'@1.93', modelProb:53.8, reason:'厄瓜多尔必须大胜+库拉索防线被打穿7球'},
      {type:'波胆', pick:'3-0', odds:'@7.0', modelProb:11.2, reason:'追分+崩盘对手。跟昨天巴西3-0同模式'},
      {type:'胜平负', pick:'平局(防冷)', odds:'@9.50', modelProb:18.4, reason:'VALUE陷阱: 模型18.4% vs市场10.2%。高赔但风险极大'}
    ],
    analysis: { groupSituation: '**E组**\n\n厄瓜多尔0分(0-1负科特迪瓦)必须大胜追分+净胜球。库拉索0分(1-7负德国)已被淘汰。Elo差463=本轮最大碾压场。', lineup1Detail: '**厄瓜多尔 (4-3-3) — 贝卡塞切**\n\nCaicedo(切尔西)中场核心。Hincapié(勒沃库森)后防。Páez新星崛起。首轮0-1负科特迪瓦→必须全力猛攻。', lineup2Detail: '**库拉索 (5-4-1) — 比森蒂尼**\n\n首轮1-7惨败德国。加勒比弱旅Elo1427(48队倒数第二)。士气完全崩溃。将全力摆铁桶祈祷。', styleAnalysis: '**厄瓜多尔:** 南美技术流+身体强度。Caicedo(切尔西)控制中场。首轮输球后心态急躁但有追分动力。\n\n**库拉索:** 1-7后心态+体能双崩。首轮被打穿7球说明防守组织度极低。可能全场退守祈祷。', tacticalNarrative: '类似巴西vs海地的碾压格局。厄瓜多尔有5种破密集手段,库拉索唯一的反击武器首轮证明执行力极差。\n\n教训应用: 巴西昨天3-0海地(Elo差442,半场解决战斗)。厄瓜多尔463差应该更大。不缩比分。', modelInterpretation: '**模型74.2% vs 市场85.6%** — 市场比模型激进11.4pp。与巴西vs海地结构完全相同(模型72%市场86%→实际3-0命中-2.5)。\n\n跟市场走。模型偏保守已被反复验证。', betReasoning: '**核心: 厄瓜多尔-2.25@1.98 + Over 3.0@1.93**\n\n跟市场。昨天巴西-2.5@1.88命中(半场3-0)。今天完全相同结构: 碾压级Elo差+必须大胜+对手1-7后崩盘。不缩比分。' },
    confidence: 'high'
  },
  {
    team1: '荷兰', team2: '瑞典', group: 'F', ground: '休斯顿', time: '12:00 UTC-5',
    elo1: 1944, elo2: 1755, eloDiff: 189,
    model: { home: 0.5196, draw: 0.2565, away: 0.2239 },
    market: { home: 0.551, draw: 0.238, away: 0.211 },
    lambda: { home: 1.72, away: 1.06, total: 2.78 },
    gap: { team: '荷兰', value: -3.1, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-4-2', coach1: '科曼', coach2: '托马松',
    style1: '荷兰全攻全守4-3-3。控球主导van Dijk坐镇。首轮2-2日本暴露防守问题',
    style2: '瑞典力量足球。Isak+Gyökeres致命双前锋。首轮5-1血洗突尼斯',
    lineup1: 'Verbruggen; Dumfries, de Vrij, van Dijk, Aké; F.de Jong, Gravenberch, Reijnders; Simons, Depay, Gakpo',
    lineup2: 'Olsen; Krafth, Lindelöf, Starfelt, Augustinsson; Kulusevski, Ayari, Svanberg, Forsberg; Isak, Gyökeres',
    injuries1: '全员可用', injuries2: '全员可用',
    tacticalMatchup: [
      { area: '控球vs反击', advantage: '荷兰(微)', reason: '控球主导但瑞典反击质量极高(Isak速度+Gyökeres力量)' },
      { area: '防守稳定', advantage: '瑞典', reason: '荷兰首轮2-2暴露高线被打身后。van Dijk速度隐患' },
      { area: '前场火力', advantage: '均衡', reason: 'Simons/Gakpo/Depay vs Isak/Gyökeres/Kulusevski双方接近' },
      { area: '中场控制', advantage: '荷兰', reason: 'de Jong+Gravenberch+Reijnders技术覆盖强于瑞典' }
    ],
    groupContext: '荷兰1分(2-2日本)压力大。瑞典3分(5-1)领跑。荷兰必须赢。F1对C2 vs F2对C1',
    handicaps: [{line:-0.75, win:0.520, draw:0, lose:0.480},{line:0, win:0.520, draw:0.257, lose:0.224},{line:-1, win:0.282, draw:0.230, lose:0.488}],
    overUnder: [{line:2.5, over:0.550, under:0.450, marketOver:'@1.89', marketUnder:'@1.99'},{line:2.75, over:0.480, under:0.520, marketOver:'@1.89', marketUnder:'@1.99'}],
    predictions: [{score:'1-1', prob:12.2, reason:'两队都有进球能力。攻强于守'},{score:'2-1', prob:9.7, reason:'荷兰实力微优最终占上风'}],
    recommendations: [
      {type:'胜平负', pick:'平局', odds:'@4.06', modelProb:25.7, reason:'VALUE: 模型25.7% vs需24.6%。荷兰防守问题+瑞典Isak/Gyökeres'},
      {type:'让球', pick:'瑞典+0.75', odds:'@1.93', modelProb:48.0, reason:'瑞典不败48%。首轮5-1状态极佳'},
      {type:'大小球', pick:'Over 2.5', odds:'@1.89', modelProb:55.0, reason:'两队首轮合计9球。本轮最佳大球场'},
      {type:'波胆', pick:'2-2', odds:'@12.0', modelProb:5.5, reason:'荷兰首轮2-2+瑞典进攻爆发互破防线'}
    ],
    analysis: { groupSituation: '**F组**\n\n荷兰1分(2-2日本)压力大——必须赢才能重回争第1轨道。瑞典3分(5-1突尼斯)领跑。\n\n**淘汰赛:** F1对C2 vs F2对C1。目前瑞典是F1。', lineup1Detail: '**荷兰 (4-3-3) — 科曼**\n\nvan Dijk坐镇后防。Simons+Gakpo+Depay三叉戟。F.de Jong控节奏。首轮2-2日本暴露防守被打身后的问题。', lineup2Detail: '**瑞典 (4-4-2) — 托马松**\n\nIsak(阿森纳)+Gyökeres(葡超金靴)致命双前锋。Kulusevski(热刺)右路。首轮5-1血洗突尼斯火力全开。', styleAnalysis: '**荷兰:** 经典全攻全守4-3-3。控球主导,技术细腻。但首轮2-2日本暴露高线+van Dijk速度不足被跑身后的隐患。\n\n**瑞典:** 力量型足球。Isak+Gyökeres双前锋组合速度+力量兼备。Kulusevski提供创造力。5-1首轮状态极佳。', tacticalNarrative: '**本轮最佳大球场!**\n\n两队首轮合计进9球(荷兰2+瑞典5)。双方攻击端火力充沛但防守都有漏洞:\n- 荷兰: 高线被日本两次打穿(Nakamura+Kamada)\n- 瑞典: 5-1的对手突尼斯太弱,防守能力未被真正检验\n\nIsak+Gyökeres的速度+力量组合 vs van Dijk的回追速度是核心对位。', modelInterpretation: '**模型52.0% vs 市场55.1%** — 分歧极小(3pp)。双方都认为荷兰微优但不碾压。\n\n**Value:** 平局@4.06(模型25.7%>需24.6%)微弱正EV。瑞典@4.56(模型22.4%>需21.9%)微弱正EV。荷兰@1.75(模型52%<需57%)无value。', betReasoning: '**核心: Over 2.5@1.89 (本轮最强信号)**\n\n模型55%>需53%→有value。两队首轮9球说明攻守比极度失衡。荷兰高线被打身后+瑞典Isak/Gyökeres反击=几乎必然互相进球。\n\n平局@4.06也有微弱value——两队实力接近且荷兰防守不稳。' },
    confidence: 'mid'
  },
  {
    team1: '突尼斯', team2: '日本', group: 'F', ground: '蒙特雷', time: '22:00 UTC-6',
    elo1: 1585, elo2: 1910, eloDiff: -325,
    model: { home: 0.1399, draw: 0.227, away: 0.6332 },
    market: { home: 0.159, draw: 0.242, away: 0.599 },
    lambda: { home: 0.81, away: 1.94, total: 2.75 },
    gap: { team: '日本', value: 3.4, direction: 'model_higher' },
    formation1: '5-4-1', formation2: '4-2-3-1', coach1: '卡德里', coach2: '森保一',
    style1: '防守紧凑5-4-1。首轮1-5惨败瑞典后士气崩溃',
    style2: '技术型逼抢+高节奏。首轮2-2荷兰证明顶级竞争力。Kamada 88分扳平',
    lineup1: 'Dahmen; Drager, Meriah, Talbi, Bronn, Abdi; Skhiri, Mejbri, Laidouni; Msakni; Khazri',
    lineup2: 'Suzuki; Itakura, Tomiyasu, Machida; Doan, Endo, Kamada, Mitoma; Kubo, Nakamura; Ueda',
    injuries1: '无重大伤情', injuries2: '全员健康',
    tacticalMatchup: [
      { area: '技术碾压', advantage: '日本', reason: 'Kubo+Kamada+Mitoma+Doan技术密度远超突尼斯' },
      { area: '防守纪律', advantage: '突尼斯(未崩时)', reason: '5-4-1北非特色但1-5后心理执行力是问号' },
      { area: '进攻效率', advantage: '日本', reason: 'λ=1.94期望进球极高。Nakamura+Kamada状态好' },
      { area: '心理韧性', advantage: '日本', reason: '88分扳平荷兰顶级心态vs突尼斯1-5崩盘' }
    ],
    groupContext: '突尼斯0分(1-5)几乎出局。日本1分(2-2荷兰)需赢保出线。Elo差325碾压级',
    handicaps: [{line:1.0, win:0.632, draw:0.242, lose:0.126},{line:0.5, win:0.860, draw:0, lose:0.140}],
    overUnder: [{line:2.25, over:0.530, under:0.470, marketOver:'@1.88', marketUnder:'@2.00'},{line:2.5, over:0.480, under:0.520}],
    predictions: [{score:'0-2', prob:12.1, reason:'日本技术碾压+突尼斯1-5后士气低落'},{score:'0-1', prob:11.6, reason:'日本可能慢热但足够赢1球'}],
    recommendations: [
      {type:'胜平负', pick:'日本胜', odds:'@1.61', modelProb:63.3, reason:'VALUE: 模型63.3% vs需62.1%。唯一强队有value的场次'},
      {type:'大小球', pick:'Over 2.25', odds:'@1.88', modelProb:53.0, reason:'日本λ=1.94+突尼斯防线1-5后信心崩塌'},
      {type:'波胆', pick:'0-2', odds:'@7.0', modelProb:12.1, reason:'模型最高概率比分。日本碾压突尼斯进攻乏力'},
      {type:'让球', pick:'观望', odds:'-', modelProb:0, reason:'双方让球盘均无value。日本-1@2.11需47%模型仅37%'}
    ],
    analysis: { groupSituation: '**F组**\n\n突尼斯0分(1-5惨败瑞典)几乎出局。日本1分(2-2荷兰)需要赢来保住出线希望。\n\nElo差325=碾压级(同加拿大vs卡塔尔级别)。', lineup1Detail: '**突尼斯 (5-4-1) — 卡德里**\n\n首轮1-5被瑞典血洗后士气崩溃。北非球队有组织时防守纪律强,但心理层面已经破碎。Khazri/Msakni老将带队但无力回天。', lineup2Detail: '**日本 (4-2-3-1) — 森保一**\n\n首轮2-2平荷兰证明了与世界顶级对抗的能力。Kamada 88分钟扳平展现顶级心态。Kubo+Mitoma+Doan技术型三叉戟。Endo后腰稳健。', styleAnalysis: '**突尼斯:** 5-4-1防守紧凑是北非传统。但1-5后心理层面是否还能维持纪律性存疑。进攻端几乎没有威胁(首轮唯一进球是瑞典后卫送的)。\n\n**日本:** 技术型逼抢+高节奏。与荷兰2-2证明了他们是本届黑马级存在。Kamada/Kubo/Mitoma的创造力在亚洲球队中无与伦比。', tacticalNarrative: '**日本技术碾压:**\n\nKubo+Kamada+Mitoma+Doan的技术密度远超突尼斯中前场。日本在荷兰面前都能控球对攻——面对突尼斯会更从容。\n\n**唯一变量:** 突尼斯5-4-1如果能像海地对苏格兰那样坚守70+分钟,日本可能需要耐心。但突尼斯1-5的心理创伤比海地0-1严重得多——崩盘概率更高。', modelInterpretation: '**模型63.3% vs 市场59.9%** — 模型比市场更看好日本3.4pp。这是今天唯一一场模型>市场的比赛。\n\n**Value:** 日本@1.61(模型63.3%>需62.1%)有微弱正EV(+1.2pp)。这是今天唯一强队有value的场次。', betReasoning: '**核心: 日本胜@1.61 + Over 2.25@1.88**\n\n日本胜: 唯一模型概率>市场需求的强队方向。微弱正EV但方向明确。日本2-2荷兰证明了绝对实力,突尼斯1-5后心态崩盘。\n\nOver: 日本λ=1.94(本轮所有队伍最高!)。即使突尼斯摆铁桶,日本的技术密度也能创造足够机会。突尼斯防线1-5后信心归零。' },
    confidence: 'mid'
  }
]

// ====== 进球差分布 ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '德国vs科特迪瓦': { team1: '德国', team2: '科特迪瓦', diffs: {'-3':0.018,'-2':0.060,'-1':0.136,'0':0.256,'1':0.231,'2':0.164,'3':0.083,'4':0.033,'5':0.011} },
  '厄瓜多尔vs库拉索': { team1: '厄瓜多尔', team2: '库拉索', diffs: {'-2':0.015,'-1':0.057,'0':0.184,'1':0.240,'2':0.227,'3':0.150,'4':0.077,'5':0.032,'6':0.011} },
  '荷兰vs瑞典': { team1: '荷兰', team2: '瑞典', diffs: {'-3':0.019,'-2':0.061,'-1':0.138,'0':0.257,'1':0.230,'2':0.162,'3':0.082,'4':0.032,'5':0.011} },
  '突尼斯vs日本': { team1: '突尼斯', team2: '日本', diffs: {'-5':0.019,'-4':0.052,'-3':0.114,'-2':0.198,'-1':0.243,'0':0.227,'1':0.096,'2':0.034,'3':0.008} }
}

// ====== 赛事统计 ======
export const tournamentStats: TournamentStats = {
  totalMatches: 32,
  totalGoals: 75,
  avgGoals: 2.34,
  homeWins: 13,
  draws: 13,
  awayWins: 6,
  biggestWin: { match: '德国 7-1 库拉索', date: '6/14' },
  latestGoal: { match: '巴拉圭 1-0 土耳其', scorer: '进球者', date: '6/19' }
}

// ====== 商业盘口精算分析 (6/20) ======
export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '德国vs科特迪瓦': {
    summary: '市场因德国7-1心理冲击过度反应(+10pp)。科特迪瓦是2023非洲杯冠军,非鱼腩。Value在客队方向但edge不够厚。',
    approvedPicks: [
      { pick: 'Over 2.5', odds: '@1.95', verdict: 'approved', edge: '+3.7pp', reasoning: '模型54.7%>需51.3%。德国进攻维度高+科有Amad Diallo反击能力。双方都能进球结构清晰', category: 'core' },
      { pick: '科特迪瓦+1.0', odds: '@2.03', verdict: 'marginal', edge: '-1.0pp(边缘)', reasoning: '模型科不败48% vs需49%。逻辑正确但edge不够。7-1虚假繁荣(Elo1427对手)→实际科不败可能>50%', category: 'value' }
    ],
    rejectedPicks: [
      { pick: '平局', odds: '@4.69', verdict: 'rejected', edge: '+4.3pp(模型误差范围内)', reasoning: '泊松模型天然高估平局概率。+4.3pp在3-5pp标准误差内=噪音。平局是庄家利润盘口(overround集中)', category: 'trap' },
      { pick: '波胆2-1', odds: '@8.0', verdict: 'rejected', edge: '9.8%概率', reasoning: '波胆是庄家利润率最高盘口(overround 15-25%)。任何单一比分概率极低且方差极大。散户长期不可能在波胆上获得正EV', category: 'entertainment' }
    ],
    marketBehavior: '市场被德国7-1库拉索的"印象分"拉偏。Elo1427的库拉索≠Elo1743的科特迪瓦。Public Money导致德国方向overpriced。Pinnacle虽更理性但世界杯大赛中也受大量公众投注影响。',
    kellyNote: 'Over 2.5建议1-2%仓位(edge薄但方向明确)。科特迪瓦+1.0观望或0.5%试探仓(edge不足)。'
  },
  '厄瓜多尔vs库拉索': {
    summary: '本轮最明确的碾压场。Elo差463=本轮最大。库拉索1-7后士气崩盘+厄瓜多尔must-win追净胜球。跟市场走,已有巴西3-0验证同模式。',
    approvedPicks: [
      { pick: '厄瓜多尔-2.25', odds: '@1.98', verdict: 'approved', edge: '跟市场(模型保守已被验证)', reasoning: '巴西-2.5昨天命中(半场3-0)。完全相同结构:碾压Elo差463+必须大胜+对手1-7后崩盘。模型在碾压场系统性保守→跟市场', category: 'core' },
      { pick: 'Over 3.0', odds: '@1.93', verdict: 'approved', edge: '+2.8pp', reasoning: '厄瓜多尔必须大胜追分+库拉索防线被打穿7球。λ_home=2.18暗示3+球高概率', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '波胆3-0', odds: '@7.0', verdict: 'rejected', edge: '11.2%概率', reasoning: '波胆任何单一比分=高方差赌博。即使模式对(巴西3-0),2-0/4-0/4-1的概率合计远高于精确3-0。已有-2.25覆盖', category: 'entertainment' },
      { pick: '平局(防冷)', odds: '@9.50', verdict: 'rejected', edge: '自标"风险极大"', reasoning: '自己都标了VALUE陷阱还列入推荐=典型散户心态。精算师逻辑:认定是陷阱→直接不列入。"防冷"不是投注逻辑', category: 'trap' }
    ],
    marketBehavior: '模型74.2% vs 市场85.6%→市场比模型激进11.4pp。与巴西vs海地结构完全相同(模型72%市场86%→实际3-0命中-2.5)。碾压场模型已被反复验证为保守→信任市场定价。',
    kellyNote: '厄瓜多尔-2.25建议2-3%仓位(高信心+前日验证)。Over 3.0建议1.5-2%。这是今天最核心的仓位。'
  },
  '荷兰vs瑞典': {
    summary: '本轮最佳大球场!两队首轮合计9球(荷兰2-2+瑞典5-1)。攻强于守的结构性大球格局。平局edge过薄不构成可下注信号。',
    approvedPicks: [
      { pick: 'Over 2.5', odds: '@1.89', verdict: 'approved', edge: '+2.0pp(本轮最强信号)', reasoning: '模型55%>需53%。荷兰高线被日本打穿(2-2)+瑞典Isak/Gyökeres双前锋反击=几乎必然互相进球。两队首轮攻守比极度失衡。', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '平局', odds: '@4.06', verdict: 'rejected', edge: '+1.1pp=纯噪音', reasoning: '+1.1pp完全在模型标准误差(3-5pp)内。不构成任何可下注的edge。泊松模型高估平局的已知偏差在这里放大了效果', category: 'trap' },
      { pick: '瑞典+0.75', odds: '@1.93', verdict: 'rejected', edge: '-1.0pp(微亏)', reasoning: '模型瑞典不败48% vs需52%=实际负EV。首轮5-1的对手突尼斯太弱(Elo1585),瑞典防守能力未被真正检验', category: 'trap' },
      { pick: '波胆2-2', odds: '@12.0', verdict: 'rejected', edge: '5.5%概率', reasoning: '5.5%概率×@12.0=EV -34%。波胆在高overround下几乎必亏。纯娱乐', category: 'entertainment' }
    ],
    marketBehavior: '模型52.0% vs 市场55.1%→分歧极小(3pp)。双方都认为荷兰微优但不碾压。价格已经很"公平",没有明显的信息不对称可供利用。唯一的alpha在大小球方向(结构性大球)。',
    kellyNote: 'Over 2.5建议1.5-2%仓位(结构性大球信号强但赔率不高)。其他方向全部观望。'
  },
  '突尼斯vs日本': {
    summary: '今天唯一模型>市场的强队方向(+3.4pp)。日本2-2荷兰证明顶级实力,突尼斯1-5后心态崩盘。微弱正EV但方向确定性强。',
    approvedPicks: [
      { pick: '日本胜', odds: '@1.61', verdict: 'approved', edge: '+1.2pp(微弱但方向明确)', reasoning: '模型63.3%>需62.1%。今天唯一强队有value的场次。日本2-2荷兰证明绝对实力→面对1-5崩盘的突尼斯更从容', category: 'value' },
      { pick: 'Over 2.25', odds: '@1.88', verdict: 'approved', edge: '+2.0pp', reasoning: '日本λ=1.94(本轮所有队伍最高!)。即使突尼斯摆铁桶,日本技术密度也能创造足够机会。突尼斯防线1-5后信心归零', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '波胆0-2', odds: '@7.0', verdict: 'rejected', edge: '12.1%概率', reasoning: '同理波胆逻辑。已有日本胜@1.61覆盖方向。精确比分是庄家的利润池', category: 'entertainment' }
    ],
    marketBehavior: '模型63.3% vs 市场59.9%→模型比市场更看好日本。这是极少见的"模型>市场"在强队方向的case。通常market更准,但突尼斯1-5的心理崩盘可能被市场低估(市场可能过度相信北非球队5-4-1防守纪律)。',
    kellyNote: '日本胜建议1-1.5%仓位(edge薄@1.61赔率)。Over 2.25建议1%。低赔率场不宜重仓。'
  }
}

// ====== 模型架构 ======
export const modelArchitecture: ModelArchitecture = {
  name: 'Poisson-Elo Multi-Agent System',
  version: '3.0',
  coreEngine: '双泊松分布(Bivariate Poisson) + Dixon-Coles修正(ρ=0.08)',
  dimensions: [
    { name: 'Elo实力评估', icon: '📊', description: '基于历史比赛结果的球队相对实力量化。Elo差值驱动泊松λ参数,决定预期进球数', weight: '核心(40%)', dataSource: 'eloratings.net/2026_World_Cup.tsv' },
    { name: '泊松进球建模', icon: '⚽', description: '将Elo差转化为双泊松λ(主队/客队期望进球)。计算所有比分概率(0-0到7-7)的联合概率矩阵', weight: '核心(30%)', dataSource: 'model_agent.py — λ = f(Elo_diff)' },
    { name: '市场隐含概率', icon: '💹', description: '从Pinnacle/William Hill等尖盘提取decimal odds→反推fair probability。作为模型校准的参照系', weight: '参照(15%)', dataSource: 'The Odds API (reports/app/odds_api.py)' },
    { name: '小组博弈动机', icon: '🎯', description: '淘汰赛路径分析: R32对阵表固定→计算1st vs 2nd path的对手Elo差→量化争头名动力', weight: '调节(5%)', dataSource: 'context_agent.py — knockout_path_analysis()' },
    { name: '战术克制分析', icon: '⚔️', description: '阵型匹配度、球风相克(高位逼抢vs身体对抗、反击速度vs高防线)、定位球优势', weight: '定性(5%)', dataSource: '人工标注 + 首轮表现' },
    { name: '心理/士气因子', icon: '🧠', description: '首轮大胜/大败后的心理状态、must-win压力、北美主场buff(+80-100 Elo等效)', weight: '定性(5%)', dataSource: 'context_agent.py — qual_pressure + 经验规则' }
  ],
  pipeline: [
    '1. Elo数据获取 → eloratings.net每日更新',
    '2. model_agent.py → 纯数学: Elo→λ→双泊松→1X2/波胆/进球差分布',
    '3. context_agent.py → 情境: 休息天/出线形势/淘汰赛路径/动力评估',
    '4. Pinnacle赔率获取 → The Odds API (3 quota/call)',
    '5. handicap_agent.py → 体彩让球胜平负概率 + EV计算',
    '6. Value分析 → model_prob vs 1/decimal_odds → 正EV才推荐',
    '7. 商业盘口审核 → 精算师视角过滤: 砍波胆/砍噪音edge/砍平局陷阱',
    '8. Kelly仓位 → 按edge厚度分配1-3%仓位'
  ],
  limitations: [
    'Elo不含阵容/伤病权重 — 虽列了阵容但未数学化纳入模型λ',
    '双泊松假设两队进球独立 — 实际存在相关性(落后方加强进攻)',
    '模型在碾压场系统性保守 — Elo差>400时,市场定价通常比模型准',
    '平局概率系统性偏高 — 泊松分布的已知特性,需Dixon-Coles修正但仍有残差',
    '无主场优势修正 — 北美主场buff(+80-100 Elo)未内置到λ计算中',
    '世界杯样本稀缺 — 4年一次+48队新赛制,历史参照有限'
  ],
  calibration: '每日回测前一天推荐 vs 实际结果。6/18验证:模型方向3/4正确(专家0/4)。6/19验证:Value bet 2/4命中(50%)。碾压场跟市场方向,中性场信任模型edge。'
}
