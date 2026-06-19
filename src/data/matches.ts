import type { MatchResult, MatchPrediction, ModelVsActual, GoalDistribution, TournamentStats } from '../types'

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

// ====== 6/19 今日预测 ======
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '苏格兰', team2: '摩洛哥',
    group: 'C', ground: '波士顿', time: '18:00 UTC-4',
    elo1: 1794, elo2: 1840, eloDiff: -46,
    model: { home: 0.3247, draw: 0.2765, away: 0.3988 },
    market: { home: 0.174, draw: 0.266, away: 0.559 },
    lambda: { home: 1.27, away: 1.43, total: 2.7 },
    gap: { team: '苏格兰', value: 15.0, direction: 'model_higher' },
    formation1: '3-5-2', formation2: '4-3-3',
    coach1: '克拉克', coach2: '雷格拉吉',
    style1: '中位防守 + 快速纵向转换 + 定位球。McTominay后插上核心武器',
    style2: '防守紧凑 + 快速转换 + Hakimi前插宽度。2022半决赛基因',
    lineup1: 'Gunn; Hendry, Hanley, Tierney; Patterson, McTominay, Gilmour, McGinn, Robertson; Adams, Dykes',
    lineup2: 'Bounou; Hakimi, Aguerd?, Saiss, Mazraoui; Amrabat, Ounahi, Saibari; Ziyech, En-Nesyri, B.Diaz',
    injuries1: 'Dykes轻伤可出场。全员可用',
    injuries2: 'Aguerd腿筋伤存疑 → El Yamiq替补',
    tacticalMatchup: [
      { area: '边路', advantage: '苏格兰', reason: '5人中场天然克制4-3-3边路，Patterson/Robertson 1v1+三中卫保护' },
      { area: '中路', advantage: '摩洛哥', reason: 'McTominay前压时中场暴露，Ounahi/Saibari可穿透' },
      { area: '转换', advantage: '摩洛哥', reason: '快速转换能力强于苏格兰，Hakimi助攻→反击速度极快' },
      { area: '定位球', advantage: '苏格兰', reason: '3中卫身高+McTominay头球，首轮唯一得分方式' }
    ],
    groupContext: '苏格兰3分领跑(赢/平即可)。摩洛哥1分 → must-win',
    predictions: [
      { score: '0-1', prob: 8.6, reason: '摩洛哥must-win + Hakimi/Saibari转换速度制造机会' },
      { score: '1-1', prob: 13.2, reason: '最高概率比分。苏格兰定位球/McTominay后插上有得分能力' }
    ],
    confidence: 'low'
  },
  {
    team1: '巴西', team2: '海地',
    group: 'C', ground: '费城', time: '20:30 UTC-4',
    elo1: 1978, elo2: 1536, eloDiff: 442,
    model: { home: 0.724, draw: 0.1898, away: 0.0863 },
    market: { home: 0.864, draw: 0.091, away: 0.045 },
    lambda: { home: 2.17, away: 0.63, total: 2.8 },
    gap: { team: '巴西', value: -14.0, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '5-4-1',
    coach1: '多里瓦尔', coach2: '德莱赫尔',
    style1: '控球型(62%) + 高位逼抢 + 内切型边锋 + 边后卫套边',
    style2: '极端低位防守(38%控球) + Étienne Jr速度反击 + 定位球Adé头球',
    lineup1: 'Alisson; Danilo, Marquinhos, G.Magalhães, Wendell; Bruno Guimarães, Paquetá; Raphinha, Rodrygo, Vinícius Jr; Endrick↑',
    lineup2: 'Duverger; Arcus, Adé, Désiré, Jérôme, Lafrance; Étienne Jr, CM, CM, LM; Pierrot',
    injuries1: 'Endrick替换Richarlison首发。Neymar/Militão/Bremer赛前报销',
    injuries2: 'Pierrot轻伤恢复可出场。全员可用',
    tacticalMatchup: [
      { area: '控球vs低位', advantage: '巴西', reason: '5种破密集手段: 边后卫宽度/内切/Endrick跑身后/Rodrygo肋部/定位球' },
      { area: '反击', advantage: '海地(微)', reason: 'Étienne Jr速度vs巴西高线。但首轮被孤立执行力不足' },
      { area: '个体天赋', advantage: '巴西(碾压)', reason: 'Vinícius+Rodrygo+Endrick vs 海地无世界级球员' },
      { area: '空中对抗', advantage: '中性', reason: '海地Adé有头球威胁。概率极低但定位球需注意' }
    ],
    groupContext: '巴西1分急需大胜追苏格兰(3分)+净胜球。海地0分已半出局',
    predictions: [
      { score: '3-0', prob: 10.4, reason: 'Elo差442碾压+追分动机+Endrick跑身后克制低位。海地首轮0射正' },
      { score: '4-0', prob: 5.7, reason: '加拿大320差打6-0。巴西442差+攻击天赋更强+不会收工' }
    ],
    confidence: 'high'
  },
  {
    team1: '美国', team2: '澳大利亚',
    group: 'D', ground: '西雅图', time: '12:00 UTC-7',
    elo1: 1780, elo2: 1839, eloDiff: -59,
    model: { home: 0.4303, draw: 0.2742, away: 0.2956 },
    market: { home: 0.600, draw: 0.217, away: 0.183 },
    lambda: { home: 1.50, away: 1.20, total: 2.7 },
    gap: { team: '美国', value: -17.0, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1',
    coach1: '波切蒂诺', coach2: '阿诺德',
    style1: '激进高位逼抢(首轮抢断14次!) + 边后卫极度前压 + pressing traps',
    style2: '务实中低位防守(38%控球) + 双后腰屏蔽 + Irankunda反击(67%射正转化)',
    lineup1: 'Turner; Dest, Richards, Robinson, A.Robinson; McKennie, Adams, Reyna; Weah, Balogun, Pulisic',
    lineup2: 'Ryan; Atkinson, Souttar(196cm), Rowles, Behich; Mooy, Irvine; Irankunda, Metcalfe, Goodwin; Duke',
    injuries1: 'Weah脚踝轻伤已通过测试。全员可用',
    injuries2: '全员健康',
    tacticalMatchup: [
      { area: '高压vs低位', advantage: '澳大利亚(克制)', reason: '美国高压需对手出球配合。澳大利亚放弃控球+长传找速度点→高压踩空' },
      { area: '反击通道', advantage: '澳大利亚', reason: 'A.Robinson前压→身后空间→Irankunda速度利用(首轮67%射正转化)' },
      { area: '个体1v1', advantage: '美国', reason: 'Pulisic/Reyna/Balogun阵地战突破。个人能力制造机会' },
      { area: '主场因素', advantage: '美国', reason: '西雅图6.8万人。北美主场buff已验证(墨西哥1-0/加拿大6-0)' }
    ],
    groupContext: '双方都3分。争头名直接对话——赢者通吃',
    predictions: [
      { score: '2-1', prob: 9.1, reason: '美国主场+个体天赋进2球。澳大利亚Irankunda反击一定能得1球' },
      { score: '1-0', prob: 9.1, reason: '澳大利亚低位防守克制高压。美国65%+控球但创造有限。定位球破门' }
    ],
    confidence: 'mid'
  },
  {
    team1: '土耳其', team2: '巴拉圭',
    group: 'D', ground: '旧金山(圣克拉拉)', time: '20:00 UTC-7',
    elo1: 1849, elo2: 1780, eloDiff: 69,
    model: { home: 0.418, draw: 0.2748, away: 0.3072 },
    market: { home: 0.481, draw: 0.284, away: 0.235 },
    lambda: { home: 1.48, away: 1.23, total: 2.71 },
    gap: { team: '土耳其', value: -6.3, direction: 'market_higher' },
    formation1: '4-3-3 (换阵)', formation2: '5-3-2 (换阵)',
    coach1: '蒙特拉', coach2: '阿尔法罗',
    style1: '控球型+换阵增加边路宽度。Çalhanoğlu深层组织+Arda Güler/Kökçü创造力',
    style2: '极端防守+快速反击。换门将+加一中卫。Almirón+Enciso反击组合',
    lineup1: 'Bayindir; Çelik, Demiral, Akaydin, Kadioğlu?; Çalhanoğlu, Kökçü, Arda Güler; Yıldız, B.A.Yılmaz, Yazıcı',
    lineup2: 'Coronel↑; Escobar, Gómez, Balbuena, Alderete↑, Espinoza; Cubas, Villasanti, Almirón; Enciso, Sanabria',
    injuries1: 'Kadioğlu腿筋待定 → Ridvan Yılmaz替。3处换人+换阵',
    injuries2: 'Gómez大腿轻微不适可出场。换门将(战术非伤病)',
    tacticalMatchup: [
      { area: '边路进攻', advantage: '土耳其', reason: 'Yıldız/Yılmaz自然宽度。巴拉圭翼卫需同时盯边锋+覆盖中路→overload' },
      { area: '反击速度', advantage: '巴拉圭', reason: 'Almirón+Enciso速度极快。土耳其首轮转换防守被同样方式打穿' },
      { area: '个体天赋', advantage: '土耳其', reason: 'Arda Güler(皇马)+Çalhanoğlu(国米)+Yıldız(尤文) 明显更高' },
      { area: '防守纪律', advantage: '巴拉圭(微)', reason: '5-3-2加固后比首轮4-4-2更稳。但组织度远不如澳大利亚' }
    ],
    groupContext: '双方都0分 — 输者回家。两队首轮都惨败(0-2/1-4)',
    predictions: [
      { score: '2-1', prob: 8.9, reason: '土耳其4-3-3宽度打开巴拉圭5-3-2。但Almirón+Enciso反击抓住转换软肋' },
      { score: '1-0', prob: 8.9, reason: '生死战不敢冒险。Çalhanoğlu任意球或Arda Güler个人突破进1球' }
    ],
    confidence: 'mid'
  }
]

// ====== 进球差分布 ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '苏格兰vs摩洛哥': {
    team1: '苏格兰', team2: '摩洛哥',
    diffs: { '-4': 0.017, '-3': 0.051, '-2': 0.121, '-1': 0.204, '0': 0.277, '1': 0.180, '2': 0.095, '3': 0.036, '4': 0.010 }
  },
  '巴西vs海地': {
    team1: '巴西', team2: '海地',
    diffs: { '-2': 0.018, '-1': 0.064, '0': 0.190, '1': 0.239, '2': 0.221, '3': 0.145, '4': 0.074, '5': 0.031, '6': 0.011 }
  },
  '美国vs澳大利亚': {
    team1: '美国', team2: '澳大利亚',
    diffs: { '-3': 0.030, '-2': 0.085, '-1': 0.169, '0': 0.274, '1': 0.213, '2': 0.132, '3': 0.058, '4': 0.020, '5': 0.006 }
  },
  '土耳其vs巴拉圭': {
    team1: '土耳其', team2: '巴拉圭',
    diffs: { '-3': 0.032, '-2': 0.089, '-1': 0.174, '0': 0.275, '1': 0.210, '2': 0.128, '3': 0.055, '4': 0.019, '5': 0.005 }
  }
}

// ====== 赛事统计 ======
export const tournamentStats: TournamentStats = {
  totalMatches: 28,
  totalGoals: 68,
  avgGoals: 2.43,
  homeWins: 12,
  draws: 12,
  awayWins: 4,
  biggestWin: { match: '德国 7-1 库拉索', date: '6/14' },
  latestGoal: { match: '加纳 1-0 巴拿马', scorer: 'Yirenkyi 90+5\'', date: '6/17' }
}
