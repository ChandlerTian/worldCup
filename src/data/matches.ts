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
  // Matchday 9 (6/19)
  { date: '2026-06-19', group: 'C', team1: '苏格兰', team2: '摩洛哥', score1: 0, score2: 1, scorers1: [], scorers2: ['Saibari 2\''], ground: '波士顿' },
  { date: '2026-06-19', group: 'C', team1: '巴西', team2: '海地', score1: 3, score2: 0, scorers1: ['Cunha 23\'', 'Cunha 36\'', 'Vinícius Jr 45+3\''], scorers2: [], ground: '费城' },
  { date: '2026-06-19', group: 'D', team1: '美国', team2: '澳大利亚', score1: 2, score2: 0, scorers1: ['Burgess OG 11\'', 'Freeman 43\''], scorers2: [], ground: '西雅图' },
  { date: '2026-06-19', group: 'D', team1: '土耳其', team2: '巴拉圭', score1: 0, score2: 1, scorers1: [], scorers2: ['进球者未知'], ground: '旧金山' },
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

// ====== 6/19 今日预测 ======
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '苏格兰', team2: '摩洛哥',
    group: 'C', ground: '波士顿', time: '18:00 UTC-4',
    elo1: 1794, elo2: 1840, eloDiff: -46,
    model: { home: 0.3247, draw: 0.2765, away: 0.3988 },
    market: { home: 0.166, draw: 0.261, away: 0.573 },
    lambda: { home: 1.27, away: 1.43, total: 2.7 },
    gap: { team: '苏格兰', value: 15.9, direction: 'model_higher' },
    formation1: '3-5-2', formation2: '4-3-3',
    coach1: '克拉克', coach2: '雷格拉吉',
    style1: '中位防守 + 快速纵向转换 + 定位球。McTominay box-to-box后插上是核心武器',
    style2: '防守紧凑 + 快速转换 + Hakimi前插宽度。2022世界杯半决赛DNA',
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
    groupContext: '苏格兰3分领跑(赢/平即可出线)。摩洛哥1分 → must-win。淘汰赛路径: C1对F2(日本Elo1910) vs C2对F1(荷兰Elo1944)，争第1优势不大(+34)但方向明确',
    predictions: [
      { score: '0-1', prob: 8.6, reason: '摩洛哥must-win + Hakimi/Saibari转换速度制造机会' },
      { score: '1-1', prob: 13.2, reason: '最高概率比分。苏格兰定位球/McTominay后插上有得分能力' }
    ],
    recommendations: [
      { type: '胜平负', pick: '苏格兰胜或平 (受让0.75)', odds: '@1.97', modelProb: 60.1, reason: 'VALUE: 模型给苏格兰不败60%，Pinnacle受让0.75@1.97(需51%)。苏格兰3分在手不冒险，3-5-2边路覆盖克制摩洛哥4-3-3' },
      { type: '大小球', pick: 'Under 2.25', odds: '@1.87', modelProb: 49.4, reason: '苏格兰mid-block+摩洛哥防守基因→低球。市场主盘在2.25小球@1.87' },
      { type: '波胆', pick: '1-1', odds: '@7.0', modelProb: 13.2, reason: '最高概率比分。苏格兰定位球得分+摩洛哥转换进1球。平局模型27.7%远高于市场26.5%' }
    ],
    handicaps: [
      { line: 0.75, win: 0.601, draw: 0, lose: 0.399 },
      { line: 0, win: 0.325, draw: 0.277, lose: 0.399 },
      { line: -1, win: 0.144, draw: 0.180, lose: 0.675 }
    ],
    overUnder: [
      { line: 2.25, over: 0.506, under: 0.494, marketOver: '@2.05', marketUnder: '@1.87' },
      { line: 2.5, over: 0.506, under: 0.494, marketOver: '@2.28', marketUnder: '@1.67' }
    ],
    analysis: {
      groupSituation: `**C组积分形势**

| 球队 | 积分 | 本场意义 |
|---|---|---|
| 苏格兰 | 3分 | 赢球=6分几乎锁定出线+争C1；平=4分仍占主动；输=3分可能被追平 |
| 摩洛哥 | 1分 | **必须赢**。平=2分第三轮必须赢巴西，几乎死路 |

→ 摩洛哥有更强的进攻动机，苏格兰有"不输就行"的战略选择权。

**淘汰赛路径影响:** C1对F2(日本Elo1910) vs C2对F1(荷兰Elo1944)。争第1优势不大(+34分)，苏格兰不会为了排位冒险——"出线优先"心态明确。`,
      lineup1Detail: `**苏格兰 (3-5-2) — 主教练：克拉克**

| 位置 | 球员 | 状态 |
|---|---|---|
| 门将 | Gunn | ✓ |
| 中卫 | Hendry, Hanley, Tierney | ✓ |
| 右翼卫 | Patterson | ✓ |
| 中场 | McTominay, Gilmour, McGinn | ✓ |
| 左翼卫 | Robertson | ✓ |
| 前锋 | Adams, Dykes | Dykes轻伤但可出场 |

首轮1-0胜海地后不太可能变阵——"赢球不换人"。三中卫体系在防守端给了苏格兰充足安全感。`,
      lineup2Detail: `**摩洛哥 (4-3-3) — 主教练：雷格拉吉**

| 位置 | 球员 | 状态 |
|---|---|---|
| 门将 | Bounou | ✓ |
| 右后卫 | Hakimi | ✓(负荷大) |
| 中卫 | Aguerd, Saiss | ⚠️ Aguerd腿筋伤存疑 → El Yamiq替补 |
| 左后卫 | Mazraoui | ✓ |
| 中场 | Amrabat(后腰), Ounahi, Saibari | ✓ |
| 前锋 | Ziyech(右), En-Nesyri(中), Brahim Diaz(左) | ✓ |

**关键变量:** Aguerd能否出场。缺少他后中卫线稳定性下降，苏格兰定位球威胁增大。`,
      styleAnalysis: `**苏格兰 (克拉克体系):**
- 稳固的3-5-2防守体系，不追求超高位压迫
- 采用中位逼抢(mid-block)，不冒险
- 依赖快速纵向转换 + 定位球
- McTominay后插上是核心进攻武器(曼联训练出的box-to-box能力完美适配)
- **阵型匹配度: 高。** 3中卫+5中场的覆盖面积完美匹配"防反"定位

**摩洛哥 (雷格拉吉体系):**
- 2022世界杯半决赛基因延续的4-3-3攻防兼备体系
- 防守紧凑+快速转换，Hakimi前插提供宽度，Mazraoui内收
- 中场三角分工明确：Amrabat拖后、Ounahi创造力、Saibari覆盖
- **阵型匹配度: 高。** 4-3-3完美利用了Hakimi的助攻能力和Ziyech的创造力`,
      tacticalNarrative: `**战术克制关系 — 这场比赛的关键对位:**

**边路: 苏格兰占优** — 3-5-2的5人中场线天然克制4-3-3的边路进攻。Patterson/Robertson可以1v1盯防Ziyech/Diaz，身后还有三中卫保护。摩洛哥最大的武器(Hakimi套边+Ziyech内切)在3-5-2面前空间被压缩。

**中路: 摩洛哥占优** — 当McTominay前压时(他的本能反应)，苏格兰中场出现真空。Ounahi和Saibari可以在这个缝隙中穿针引线。这是摩洛哥最可能得分的方式。

**转换: 摩洛哥占优** — 摩洛哥快速转换能力强于苏格兰。特别是Hakimi的助攻→一旦断球直接长传找前场，苏格兰翼卫回防速度是软肋。

**定位球: 苏格兰占优** — 3中卫Hendry/Hanley/Tierney + McTominay的身高和头球能力。如果Aguerd缺阵，El Yamiq在空中对抗上更吃亏。

**克制总结:** 苏格兰3-5-2的5人中场是天然的"摩洛哥克制器"——压缩了Ziyech和Diaz的空间。代价是进攻端依赖McTominay前插和定位球。如果摩洛哥先进球，苏格兰追分能力有限。`,
      modelInterpretation: `**模型 vs 市场巨大分歧:**

| 维度 | 模型 | Pinnacle市场 |
|---|---|---|
| 苏格兰胜 | 32.5% | 17.4%(@5.76) |
| 平局 | 27.7% | 27.2%(@3.68) |
| 摩洛哥胜 | 39.9% | 56.6%(@1.72) |

**Gap: +15.9pp** — 模型认为苏格兰被市场严重低估。

为什么分歧这么大？市场给摩洛哥57%可能过度反应了：1) 2022世界杯半决赛光环；2) 首轮1-1平巴西(Saibari先进球)的表现。但Elo差仅46分——这几乎是coin flip级别的实力差距。

**Value判断:** 苏格兰胜@5.76(需17.4%，模型32.5%)有明确正EV。平局@3.68(需27.2%，模型27.7%)有微弱正EV。摩洛哥胜@1.72(需58.1%，模型39.9%)无value。`,
      betReasoning: `**核心推荐: 苏格兰受让0.75 @1.97**

逻辑链:
1. 模型给苏格兰不败(胜+平)概率 = 32.5% + 27.7% = **60.2%**
2. Pinnacle受让0.75@1.97 → 需要的盈亏平衡概率 = 1/1.97 = **50.8%**
3. 60.2% > 50.8% → 正EV约9.4%
4. 战术支撑: 苏格兰3-5-2边路覆盖克制摩洛哥4-3-3，"不输就出线"心态→防守稳固

**波胆推荐: 1-1 @7.0**

逻辑: 最高概率比分(13.2%)。苏格兰靠定位球/McTominay后插上得1球 + 摩洛哥通过中路渗透或Hakimi转换进1球。双方实力接近(Elo差仅46)，互有一球最合理。

**大小球: Under 2.25 @1.87**

逻辑: 苏格兰mid-block压缩空间 + 摩洛哥2022世界杯防守基因(那届4场淘汰赛只丢1球)。双方λ合计2.7，但实际受阵型克制影响可能更低。`
    },
    confidence: 'low'
  },
  {
    team1: '巴西', team2: '海地',
    group: 'C', ground: '费城', time: '20:30 UTC-4',
    elo1: 1978, elo2: 1536, eloDiff: 442,
    model: { home: 0.724, draw: 0.1898, away: 0.0863 },
    market: { home: 0.864, draw: 0.091, away: 0.045 },
    lambda: { home: 2.17, away: 0.63, total: 2.8 },
    gap: { team: '巴西', value: 14.0, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '5-4-1',
    coach1: '多里瓦尔', coach2: '德莱赫尔',
    style1: '控球型(62%均值) + 高位逼抢 + 内切型边锋 + 边后卫套边。Endrick跑身后拉伸低位防线',
    style2: '极端低位防守5-4-1(资格赛38%控球)。Étienne Jr速度反击 + Adé头球定位球。首轮守住苏格兰72分钟',
    lineup1: 'Alisson; Danilo, Marquinhos, G.Magalhães, Wendell; Bruno Guimarães, Paquetá; Raphinha, Rodrygo, Vinícius Jr; Endrick',
    lineup2: 'Duverger; Arcus, Adé, Désiré, Jérôme, Lafrance; Étienne Jr, CM, CM, LM; Pierrot',
    injuries1: 'Neymar/Militão/Bremer赛前报销。Endrick替换Richarlison(战术调整)',
    injuries2: 'Pierrot轻伤恢复可出场。全员可用',
    tacticalMatchup: [
      { area: '控球vs低位', advantage: '巴西', reason: '5种破密集手段: 边后卫宽度/内切/Endrick跑身后/Rodrygo肋部/定位球' },
      { area: '反击', advantage: '海地(微)', reason: 'Étienne Jr速度vs巴西高线。但首轮被孤立执行力不足' },
      { area: '个体天赋', advantage: '巴西(碾压)', reason: 'Vinícius+Rodrygo+Endrick vs 海地无世界级球员' },
      { area: '空中对抗', advantage: '中性', reason: '海地Adé有头球威胁。概率极低但定位球需注意' }
    ],
    groupContext: '巴西1分急需大胜追苏格兰(3分)+净胜球。海地0分已半出局。淘汰赛路径: C1对日本(1910) vs C2对荷兰(1944)。巴西不想第2碰荷兰→追分动力叠加',
    predictions: [
      { score: '3-0', prob: 10.4, reason: 'Elo差442碾压+追分动机+Endrick跑身后克制低位。海地首轮0射正' },
      { score: '4-0', prob: 5.7, reason: '加拿大320差打6-0。巴西442差+攻击天赋更强+不会收工' }
    ],
    recommendations: [
      { type: '让球', pick: '巴西 -2.5', odds: '@1.88', modelProb: 26.4, reason: 'VALUE方向: 模型给26%偏保守，Pinnacle@1.88(需53%)说明市场认为赢3+是主流。加拿大320差打6-0→巴西442差碾压。跟市场走' },
      { type: '大小球', pick: 'Over 3.5', odds: '@1.85', modelProb: 31.8, reason: '市场主盘在3.5而非2.5(Over 2.5@1.30已无value)。巴西追净胜球不会收工+Endrick首发拉纵深' },
      { type: '波胆', pick: '2-0', odds: '@6.5', modelProb: 14.4, reason: '模型最高概率比分(14.4%)。但市场定价偏大比分→3-0(10.4%)作为备选' },
      { type: '胜平负', pick: '平局', odds: '@11.0', modelProb: 19.0, reason: 'VALUE陷阱: 模型给19%平局远高于市场9%隐含。海地5-4-1曾守苏格兰72分钟。高赔value但风险大' }
    ],
    handicaps: [
      { line: -2.5, win: 0.264, draw: 0, lose: 0.736 },
      { line: -2, win: 0.264, draw: 0.221, lose: 0.515 },
      { line: -1, win: 0.485, draw: 0.239, lose: 0.276 }
    ],
    overUnder: [
      { line: 2.5, over: 0.530, under: 0.469, marketOver: '@1.30', marketUnder: '@3.25' },
      { line: 3.5, over: 0.318, under: 0.682, marketOver: '@1.85', marketUnder: '@2.05' }
    ],
    analysis: {
      groupSituation: `**C组积分形势**

| 球队 | 积分 | 本场意义 |
|---|---|---|
| 巴西 | 1分 | **急需大胜** — 落后苏格兰2分+净胜球，需要多球取胜追赶 |
| 海地 | 0分 | 已经半只脚出局。赢巴西是几乎不可能的任务 |

→ 巴西有追净胜球的极强动机，不会60分钟就收工。

**淘汰赛路径:** C1对日本(1910) vs C2对荷兰(1944)。巴西不想第2碰荷兰 → 追分动力叠加。`,
      lineup1Detail: `**巴西 (4-2-3-1) — 主教练：多里瓦尔**

| 位置 | 球员 | 变化 |
|---|---|---|
| 门将 | Alisson | ✓ |
| 后卫 | Danilo, Marquinhos, Gabriel Magalhães, Wendell | ✓ |
| 双后腰 | Bruno Guimarães, Paquetá | ⬆️ Paquetá替换João Gomes |
| 右翼 | Raphinha | ✓ |
| 前腰 | Rodrygo(自由10号) | ✓ |
| 左翼 | Vinícius Jr | ✓ |
| 前锋 | **Endrick** | ⬆️ 替换Richarlison(首轮低效) |

Neymar/Militão/Bremer赛前报销。**Endrick首发是关键变化** — 19岁、速度快、跑身后能力强，完美克制海地高位缩退。`,
      lineup2Detail: `**海地 (5-4-1) — 主教练：德莱赫尔**

| 位置 | 球员 | 状态 |
|---|---|---|
| 门将 | Duverger | ✓ |
| 后卫线(5) | Arcus, Adé, Désiré, Jérôme, Lafrance | ✓ |
| 中场(4) | Étienne Jr(右), CM, CM, 左边前卫 | ✓ |
| 前锋 | Pierrot | ✓(轻伤恢复) |

海地全员可用。首轮vs苏格兰的5-4-1阵型坚守了72分钟才失球，0射正 — 攻击端几乎没有威胁。`,
      styleAnalysis: `**巴西 (多里瓦尔体系):**
- 控球型4-2-3-1，预选赛平均控球62%，高位逼抢
- 内切型边锋：Vinícius从左切入、Raphinha从右切入
- 边后卫套边提供宽度，高防线
- **Endrick替换Richarlison:** 多里瓦尔明确表示"Endrick能跑到身后拉开纵深"——面对海地低位防线时冲击力比背身做球更有效
- **弱点:** 高防线面对快速反击有暴露风险

**海地 (德莱赫尔体系):**
- 极端防守型5-4-1低位防守
- 主动放弃控球(预选赛38%)，10人退守己方30米区域
- 依赖Étienne Jr的速度打反击(MLS经验)
- 定位球是最佳得分手段(Adé头球)
- 首轮vs苏格兰：坚守72分钟，但0射正说明反击执行力极差`,
      tacticalNarrative: `**战术克制关系 — 这是一场"矛vs盾"的纯粹较量:**

**控球vs低位防守: 巴西全面占优** — 巴西拥有至少5种破密集防守的手段：边后卫套边制造宽度、内切边锋射门、Endrick跑身后拉纵深、Rodrygo肋部渗透、定位球。海地的5-4-1在72分钟内可以顶住苏格兰，但巴西的进攻维度远超苏格兰。

**海地反击vs巴西高线: 海地微弱威胁** — Étienne Jr的速度是海地唯一武器。但首轮证明他经常被孤立——缺乏支援跑位。Marquinhos的回追速度+高位逼抢让Étienne Jr拿球机会极少。

**个体天赋: 巴西降维打击** — Vinícius+Rodrygo+Endrick+Raphinha(皇马+巴萨级别) vs 海地无任何世界级球员。在技术密度上是本轮最大不对称。

**Endrick首发的克制效应:** 海地5-4-1的防线会退到30米甚至25米区域。此时Richarlison的背身做球无用，但Endrick的直线冲击+跑身后可以让海地后卫线不敢退得太深——一旦退深了Endrick就跑身后，不退就给Vinícius/Rodrygo空间。这是"以矛制盾"的最佳人选。`,
      modelInterpretation: `**模型 vs 市场:**

| 维度 | 模型 | Pinnacle市场 |
|---|---|---|
| 巴西胜 | 72.4% | 89.3%(@1.12) |
| 平局 | 19.0% | 9.1%(@11.0) |
| 海地胜 | 8.6% | 3.8%(@26.0) |
| 巴西-2.5 | 26.4% | 53.2%(@1.88) |

**市场比模型更激进14pp** — 市场认为巴西赢3+球的概率(53%)远高于模型(26%)。

**解读:** 模型用纯Poisson-Elo计算，不含"追分动机"、"教练换人"、"主场"等定性因素。加拿大(Elo差320)打出6-0证明：当Elo差>300+有碾压动机时，真实比分往往**超越**模型的数学预期。巴西Elo差442比加拿大还大 — 信市场的幅度。

**Value判断:** 巴西胜@1.12无value(太低)。但**平局@11.0**有巨大value(模型19% vs 需9%)——虽然概率低但赔率补偿足够。`,
      betReasoning: `**核心推荐: 巴西 -2.5 @1.88 (跟市场)**

逻辑链:
1. Pinnacle定价巴西-2.5@1.88 → 隐含53%赢3+球
2. 模型只给26% — 但模型已被证明系统性低估碾压场(加拿大6-0教训)
3. 教训: "当市场比模型更看好强队且Elo差>300时，信市场幅度"
4. 巴西追净胜球动机(追苏格兰) + Endrick首发(拉纵深克制低位) + 海地首轮0射正

**大小球: Over 3.5 @1.85**

逻辑: 市场主盘在3.5(不是2.5！Over 2.5@1.30已无水)。巴西λ=2.17意味着期望进2.17球。加上追分不收工+Endrick/Vinícius贪婪进球→总进球>3.5合理。

**波胆: 2-0 (14.4%) / 3-0 (10.4%)**

2-0是模型最高概率比分——但市场方向偏大。逻辑折中: 如果巴西上半场只进1球(海地5-4-1确实能顶一段时间)，下半场才爆发→3-0或4-0。不要压缩到1-0。`
    },
    confidence: 'high'
  },
  {
    team1: '美国', team2: '澳大利亚',
    group: 'D', ground: '西雅图', time: '12:00 UTC-7',
    elo1: 1780, elo2: 1839, eloDiff: -59,
    model: { home: 0.4303, draw: 0.2742, away: 0.2956 },
    market: { home: 0.600, draw: 0.217, away: 0.183 },
    lambda: { home: 1.50, away: 1.20, total: 2.7 },
    gap: { team: '美国', value: 17.0, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1',
    coach1: '波切蒂诺', coach2: '阿诺德',
    style1: '激进高位逼抢(首轮14次前场抢断!) + 边后卫极度前压 + 前场三叉戟pressing traps。本届赛事R1最高压强度球队',
    style2: '务实中低位防守(首轮38%控球)。双后腰屏蔽防线 + Irankunda速度反击。防守4-4-2阵型。极高效率: 首轮67%射正转化(3射正2球)',
    lineup1: 'Turner; Dest, Richards, Robinson, A.Robinson; McKennie, Adams, Reyna; Weah, Balogun, Pulisic',
    lineup2: 'Ryan; Atkinson, Souttar(196cm), Rowles, Behich; Mooy, Irvine; Irankunda, Metcalfe, Goodwin; Duke',
    injuries1: 'Weah脚踝轻伤已通过测试。全员可用',
    injuries2: '全员健康',
    tacticalMatchup: [
      { area: '高压vs低位', advantage: '澳大利亚(克制)', reason: '美国高压需对手出球配合。澳大利亚放弃控球+长传找速度点→高压踩空' },
      { area: '反击通道', advantage: '澳大利亚', reason: 'A.Robinson前压→身后空间→Irankunda速度利用(首轮67%射正转化)' },
      { area: '个体1v1', advantage: '美国', reason: 'Pulisic/Reyna/Balogun阵地战突破。个人能力制造机会' },
      { area: '主场因素', advantage: '美国', reason: '西雅图6.8万人。北美主场buff已验证(墨西哥1-0/加拿大6-0) +80-100 Elo' }
    ],
    groupContext: '双方都3分。争头名直接对话——赢者通吃。淘汰赛: D1对最佳第3(Elo≈1700) vs D2对G2伊朗(1772)。第1路线更舒服(+72 Elo)',
    predictions: [
      { score: '2-1', prob: 9.1, reason: '美国主场+个体天赋进2球。澳大利亚Irankunda反击一定能得1球' },
      { score: '1-0', prob: 9.1, reason: '澳大利亚低位防守克制高压。美国65%+控球但创造有限。定位球破门' }
    ],
    recommendations: [
      { type: '让球', pick: '澳大利亚 +1.0 (受让1球)', odds: '@1.83', modelProb: 57.0, reason: 'VALUE: 模型给美国胜仅43%→澳大利亚不败57%。Pinnacle +1@1.83(需55%)。澳大利亚低位反击体系天然克制美国高压' },
      { type: '胜平负', pick: '平局', odds: '@4.40', modelProb: 27.4, reason: 'VALUE: 模型27.4%平局 vs Pinnacle需22.7%。两队都3分不想输→保守对局概率高' },
      { type: '大小球', pick: 'Under 2.5', odds: '@1.98', modelProb: 49.4, reason: '澳大利亚低位防守压制进球数(首轮38%控球仍零封土耳其)。Pinnacle接近50-50' },
      { type: '波胆', pick: '1-1', odds: '@6.5', modelProb: 13.1, reason: '模型最高概率比分。美国主场压制但澳大利亚Irankunda反击必得1球' }
    ],
    handicaps: [
      { line: -1.0, win: 0.217, draw: 0, lose: 0.783 },
      { line: -0.5, win: 0.430, draw: 0, lose: 0.570 },
      { line: 0, win: 0.430, draw: 0.274, lose: 0.296 }
    ],
    overUnder: [
      { line: 2.5, over: 0.506, under: 0.494, marketOver: '@1.93', marketUnder: '@1.98' }
    ],
    analysis: {
      groupSituation: `**D组积分形势**

| 球队 | 积分 | 本场意义 |
|---|---|---|
| 美国 | 3分 | 赢=6分基本锁定出线+争D1；但输=陷入被动(澳大利亚也3分) |
| 澳大利亚 | 3分 | 同上。这是D组"争头名"的直接对话 |

→ 双方都是"赢者通吃"心态，但**都不想输**。可能出现前半段谨慎试探的局面。

**淘汰赛路径:** D1对最佳第3(Elo≈1700) vs D2对G2伊朗(1772)。第1路线更舒服(+72 Elo)，但差距不极端——两队不会为了排位做出疯狂冒险。`,
      lineup1Detail: `**美国 (4-3-3) — 主教练：波切蒂诺**

| 位置 | 球员 | 状态 |
|---|---|---|
| 门将 | Turner | ✓ |
| 右后卫 | Dest | ✓ |
| 中卫 | Richards, Robinson(CB) | ✓ |
| 左后卫 | A.Robinson | ✓ |
| 中场 | McKennie, Tyler Adams(队长,单后腰), Reyna | ✓ |
| 右翼 | Weah | ✓(脚踝轻伤已通过测试) |
| 中锋 | Balogun | ✓(首轮双响，状态火热) |
| 左翼 | Pulisic | ✓ |

无伤病无停赛，全员可用。Balogun首轮梅开二度状态极佳。`,
      lineup2Detail: `**澳大利亚 (4-2-3-1) — 主教练：阿诺德**

| 位置 | 球员 | 状态 |
|---|---|---|
| 门将 | Maty Ryan | ✓ |
| 右后卫 | Atkinson | ✓ |
| 中卫 | Souttar(196cm), Rowles | ✓ |
| 左后卫 | Behich | ✓ |
| 双后腰 | Mooy, Irvine(队长) | ✓ |
| 右前卫 | Irankunda(19岁新星) | ✓ |
| 10号 | Metcalfe | ✓ |
| 左前卫 | Goodwin | ✓ |
| 前锋 | Duke | ✓ |

双方均全员健康。Irankunda首轮27'进球+Metcalfe 75'锁胜——状态同样火热。`,
      styleAnalysis: `**美国 (波切蒂诺体系):**
- 激进高位逼抢4-3-3。预选赛平均控球62%
- Adams回撤到中卫之间组织出球，边后卫极度前压
- 前场三叉戟触发高位逼抢(首轮在对方半场抢断14次!)
- 高防线——**本届开幕轮最具压迫性的球队**
- 首轮4-1巴拉圭：Balogun双响(状态火热)，Reyna锁定胜局
- **阵型匹配度：高。** Pulisic左路内切、Weah右路冲击、Balogun支点——三人组完美适配pressing traps

**澳大利亚 (阿诺德体系):**
- 务实型4-2-3-1，中低位防守(距己方球门约40米)
- 舒适地放弃控球(首轮vs土耳其38%控球)
- 双后腰(Mooy+Irvine)屏蔽防线前沿
- 防守时变阵4-4-2(10号回撤与前锋平行)
- 快速反击核心：**Irankunda的速度**(首轮27'进球，19岁新星)
- **极度高效：** 首轮3次射正进2球(67%转化率！)
- **阵型匹配度：高。** Mooy/Irvine双后腰覆盖完美适配低位防守，Irankunda速度完美适配反击`,
      tacticalNarrative: `**战术克制关系 ⭐⭐ — 本轮战术对位最有趣的一场:**

**美国高压 vs 澳大利亚低位 → 澳大利亚克制!**
经典"力量vs阻力"。美国首轮高压摧毁了巴拉圭——但巴拉圭试图正面对攻暴露了空间。**澳大利亚不会犯这个错误。** 他们会主动退守，让美国面对密集防线而非转换空间。美国的高压需要对手"配合"(从后场出球时被抢)。澳大利亚直接放弃控球+长传找速度点→高压踩空。

**⚠️ 核心克制点: A.Robinson前压 vs Irankunda反击**
A.Robinson(左后卫)极度前压时身后空间巨大。Irankunda(首轮进球，67%射正转化率)的速度可以利用这个空间。这是澳大利亚最致命的反击路线。每一次美国边后卫压上，都是Irankunda的机会。

**美国控球 vs 澳大利亚双后腰**
Mooy+Irvine封锁了中路渗透通道。美国可能被迫走边路传中——但Souttar身高196cm，制空能力强。美国将面临70%控球但难以破门的困境。

**个体1v1: 美国占优**
如果比赛变成阵地战消耗，Pulisic/Reyna/Balogun在局部突破上有优势。这是美国打破僵局的唯一路径。

**主场因素: 美国占优**
西雅图Lumen Field，6.8万球迷。北美主场buff本届已验证(墨西哥1-0韩国、加拿大6-0卡塔尔)。但澳大利亚不是卡塔尔——他们有真正的比赛计划和执行力。`,
      modelInterpretation: `**模型 vs 市场 — 本轮最大分歧(17pp):**

| 维度 | 模型 | Pinnacle市场 |
|---|---|---|
| 美国胜 | 43.0% | 61.3%(@1.63) |
| 平局 | 27.4% | 22.7%(@4.40) |
| 澳大利亚胜 | 29.6% | 18.2%(@5.50) |
| 美国-1.0 | 21.7% | 47.2%(@2.12) |

**Gap: -17pp** — 市场比模型多看好美国17个百分点。

**为什么分歧:** 模型纯Elo不含主场加成(澳大利亚Elo 1839实际更高!)。市场pricing了北美主场+80-100 Elo等效。如果给美国+80 Elo → 1860 vs 1839 → 模型概率会上升到约48-50%。市场的61%可能还包含了"4-1首轮momentum"溢价。

**真实概率估计:** 大约在50-55%美国。市场61%偏高(考虑到澳大利亚也2-0赢了首轮)。

**Value判断:** 美国胜@1.63(需61%)→模型仅43%→**无value**。平局@4.40(需22.7%)→模型27.4%→**有value(+4.7pp)**。澳大利亚@5.50(需18.2%)→模型29.6%→**有value(+11.4pp)**。`,
      betReasoning: `**核心推荐: 澳大利亚 +1.0 (受让1球) @1.83**

逻辑链:
1. 模型给美国胜仅43% → 澳大利亚不败概率 = 27.4% + 29.6% = **57.0%**
2. Pinnacle +1@1.83 → 需要盈亏平衡概率 = 1/1.83 = **54.6%**
3. 57.0% > 54.6% → 正EV约2.4%
4. 战术支撑: 澳大利亚4-2-3-1低位反击**天然克制**美国高位逼抢体系
5. 历史: 澳大利亚首轮2-0零封土耳其(也是被高压队)→已证明这套体系有效

**平局 @4.40 — Value bet**

逻辑: 模型27.4% vs 需22.7%。两队都3分都不想输→保守心态概率升高。美国高压被澳大利亚低位化解→65%控球难以破门→平局。

**波胆: 1-1 @6.5 (模型最高概率13.1%)**

逻辑: 美国靠个体能力(Pulisic/Balogun)在阵地战中攻入1球。澳大利亚Irankunda在A.Robinson身后空间精准反击得1球(67%转化率是真实能力不是运气)。双方各1球打平。`
    },
    confidence: 'mid'
  },
  {
    team1: '土耳其', team2: '巴拉圭',
    group: 'D', ground: '旧金山(圣克拉拉)', time: '20:00 UTC-7',
    elo1: 1849, elo2: 1780, eloDiff: 69,
    model: { home: 0.418, draw: 0.2748, away: 0.3072 },
    market: { home: 0.481, draw: 0.284, away: 0.235 },
    lambda: { home: 1.48, away: 1.23, total: 2.71 },
    gap: { team: '土耳其', value: 6.3, direction: 'market_higher' },
    formation1: '4-3-3 (换阵)', formation2: '5-3-2 (换阵)',
    coach1: '蒙特拉', coach2: '阿尔法罗',
    style1: '控球型+换阵增加边路宽度。Çalhanoğlu深层组织+Arda Güler/Kökçü创造力。Yıldız/Yılmaz自然宽度。弱点: 转换防守脆弱(首轮被澳大利亚同方式打穿)',
    style2: '极端防守5-3-2(首轮1-4惨败后加固)。Almirón速度+Enciso盘带快速反击。弱点: 组织度远不如澳大利亚体系。换门将(战术调整非伤病)',
    lineup1: 'Bayindir; Çelik, Demiral, Akaydin, Kadioğlu?; Çalhanoğlu, Kökçü, Arda Güler; Yıldız, B.A.Yılmaz, Yazıcı',
    lineup2: 'Coronel(新GK); Escobar, Gómez, Balbuena, Alderete(加入), Espinoza; Cubas, Villasanti, Almirón; Enciso, Sanabria',
    injuries1: 'Kadioğlu腿筋待定(Ridvan Yılmaz可替)。3处换人+换阵',
    injuries2: 'Gómez大腿轻微不适可出场。换门将属战术(Fernandez首轮丢4球)',
    tacticalMatchup: [
      { area: '边路进攻', advantage: '土耳其', reason: 'Yıldız/Yılmaz自然宽度。巴拉圭翼卫需同时盯边锋+覆盖中路→overload' },
      { area: '反击速度', advantage: '巴拉圭', reason: 'Almirón+Enciso速度极快。土耳其首轮转换防守被同样方式打穿' },
      { area: '个体天赋', advantage: '土耳其', reason: 'Arda Güler(皇马)+Çalhanoğlu(国米)+Yıldız(尤文) 明显更高' },
      { area: '防守纪律', advantage: '巴拉圭(微)', reason: '5-3-2加固后比首轮4-4-2更稳。但组织度远不如澳大利亚' }
    ],
    groupContext: '双方都0分 — 输者回家。两队首轮都惨败(0-2/1-4)。淘汰赛路径同D组: 争第1对弱第3(1700) vs 第2对伊朗(1772)。但先活下来再说',
    predictions: [
      { score: '2-1', prob: 8.9, reason: '土耳其4-3-3宽度打开巴拉圭5-3-2。但Almirón+Enciso反击抓住转换软肋' },
      { score: '1-0', prob: 8.9, reason: '生死战不敢冒险。Çalhanoğlu任意球或Arda Güler个人突破进1球' }
    ],
    recommendations: [
      { type: '让球', pick: '巴拉圭 +0.5 (受让半球)', odds: '@1.85', modelProb: 58.2, reason: 'VALUE: 模型给土耳其胜仅41.8%→巴拉圭不败58.2%。Pinnacle+0.5@1.85(需54%)。巴拉圭5-3-2加固+Almirón反击速度克制土耳其转换弱点' },
      { type: '大小球', pick: 'Under 2.25', odds: '@2.08', modelProb: 49.1, reason: '双方首轮惨败后防守优先。Pinnacle主盘2.25偏低。生死战心态保守+巴拉圭摆铁桶' },
      { type: '波胆', pick: '1-1', odds: '@6.0', modelProb: 13.1, reason: '模型最高概率比分。生死战双方都得分但无力打破僵局' },
      { type: '胜平负', pick: '巴拉圭胜', odds: '@3.90', modelProb: 30.7, reason: 'VALUE: 模型30.7% vs Pinnacle需25.6%。5pp正EV。Almirón+Enciso反击有爆冷能力' }
    ],
    handicaps: [
      { line: -0.5, win: 0.418, draw: 0, lose: 0.582 },
      { line: 0, win: 0.418, draw: 0.275, lose: 0.307 },
      { line: -1, win: 0.208, draw: 0.210, lose: 0.582 }
    ],
    overUnder: [
      { line: 2.25, over: 0.509, under: 0.491, marketOver: '@1.84', marketUnder: '@2.08' },
      { line: 2.5, over: 0.509, under: 0.491, marketOver: '@2.05', marketUnder: '@1.78' }
    ],
    analysis: {
      groupSituation: `**D组积分形势**

| 球队 | 积分 | 本场意义 |
|---|---|---|
| 土耳其 | 0分 | **必须赢。** 输=基本出局(0分2连败) |
| 巴拉圭 | 0分 | **必须赢。** 输=基本出局(0分2连败) |

→ **双方都是生死战。** 输者回家。两队首轮都惨败(土耳其0-2澳大利亚、巴拉圭1-4美国)。

**淘汰赛路径:** 赢者仍需第3轮结果决定排位。但先活下来再说——这场是纯粹的"survival mode"。`,
      lineup1Detail: `**土耳其 (4-3-3 ←换阵!) — 主教练：蒙特拉**

| 位置 | 球员 | 变化 |
|---|---|---|
| 门将 | Bayindir | ✓ |
| 右后卫 | Zeki Çelik | ✓ |
| 中卫 | Demiral, Akaydin | ✓ |
| 左后卫 | Kadioğlu | ⚠️ 腿筋问题待定(Ridvan Yılmaz替) |
| 中场 | **Çalhanoğlu**(深层组织), Kökçü, **Arda Güler** | 换阵增加创造力 |
| 前锋 | **Kenan Yıldız**(左), Barış A. Yılmaz, Yazıcı | 3处换人 |

⚠️ 首轮4-2-3-1被澳大利亚零封后**变阵4-3-3**，增加边路宽度。3人换血。`,
      lineup2Detail: `**巴拉圭 (5-3-2 ←换阵!) — 主教练：阿尔法罗**

| 位置 | 球员 | 变化 |
|---|---|---|
| 门将 | **Coronel** | ⬆️ 换门将(Fernandez首轮丢4球) |
| 后卫(5) | Escobar(翼卫), Gómez, Balbuena, **Alderete**(加一中卫), Espinoza(翼卫) | 4改5后卫 |
| 中场(3) | Cubas, Villasanti, **Almirón**(更居中创造角色) | ✓ |
| 前锋(2) | **Enciso**(20岁/布莱顿), Sanabria | ✓ |

⚠️ 首轮4-4-2被美国打穿(1-4)后**加一中卫变5-3-2**，换门将。Gómez轻微大腿不适但可出场。`,
      styleAnalysis: `**土耳其 (蒙特拉改造版):**
- 从首轮4-2-3-1变为4-3-3，增加自然宽度(Yıldız/Yılmaz)
- Çalhanoğlu从深层组织出球，Arda Güler+Kökçü中场创造力极强
- **弱点依旧:** 边后卫前压时的转换防守脆弱(被澳大利亚就是这样打穿的)
- **阵型匹配度:** Arda Güler(皇马型自由人)在4-3-3内切位置更自如，Yıldız(尤文)有了自然宽度→调整合理

**巴拉圭 (阿尔法罗防守加强版):**
- 5-3-2极端防守(首轮4-4-2被打穿后加固)
- 依赖Almirón(纽卡)的速度+Enciso(布莱顿,20岁)的盘带打反击
- Almirón从边锋移到中路→更能发挥视野和传球
- **弱点:** 防守组织度远不如澳大利亚(首轮被打4球说明纪律性差)`,
      tacticalNarrative: `**战术克制关系 — 谁先进球谁赢:**

**土耳其边路宽度 vs 巴拉圭翼卫 → 土耳其占优**
土耳其换阵增加了Yıldız/Yılmaz的边路自然宽度。巴拉圭翼卫Escobar/Espinoza需要同时盯边锋+覆盖中路——可能overload。如果土耳其能在边路制造2v1，巴拉圭的5-3-2就会被拉开。

**⚠️ 巴拉圭反击 vs 土耳其高位 → 巴拉圭的命门**
Almirón+Enciso的反击组合速度极快。土耳其首轮的转换防守就是被同样的方式(澳大利亚Irankunda)打穿。**同一个弱点可能被再次利用。** 如果Çelik/Kadioğlu前压后回防不及→Almirón长传找Enciso→1v1机会。

**个体天赋: 土耳其明显更高**
Arda Güler(皇马)+Çalhanoğlu(国米)+Yıldız(尤文) vs Almirón(纽卡)+Enciso(布莱顿)。在阵地战中土耳其能通过个人能力打破僵局。

**心理层面:** 两队都首轮惨败。但土耳其的"惨"是0进球闷输(心理压抑)，巴拉圭的"惨"是被撕裂崩盘(心理创伤)。**巴拉圭换门将+加中卫的操作说明他们更怕再被打穿→5-3-2本质是恐惧的产物。**

**谁先进球是关键:** 先进球方可以收缩，让对方冒险进攻暴露空间。如果土耳其先进球→巴拉圭必须出来→空间暴露→可能变大比分。如果巴拉圭先进球→土耳其崩溃风险更低(天赋够追)。`,
      modelInterpretation: `**模型 vs 市场 — 分歧最小的一场(6pp):**

| 维度 | 模型 | Pinnacle市场 |
|---|---|---|
| 土耳其胜 | 41.8% | 48.1%(@2.08) |
| 平局 | 27.5% | 28.6%(@3.50) |
| 巴拉圭胜 | 30.7% | 25.6%(@3.90) |
| 土耳其-0.5 | 41.8% | 48.1%(@2.08) |

**Gap: -6.3pp** — 市场稍微多看好土耳其，但分歧不大。

**Value判断:** 土耳其@2.08(需48.1%)→模型41.8%→**无value**。平局@3.50(需28.6%)→模型27.5%→**无value(微差)**。巴拉圭@3.90(需25.6%)→模型30.7%→**有value(+5.1pp)**!`,
      betReasoning: `**核心推荐: 巴拉圭 +0.5 (受让半球) @1.85**

逻辑链:
1. 模型给土耳其胜仅41.8% → 巴拉圭不败概率 = 27.5% + 30.7% = **58.2%**
2. Pinnacle +0.5@1.85 → 需要盈亏平衡 = 1/1.85 = **54.1%**
3. 58.2% > 54.1% → 正EV约4.1%
4. 战术支撑: 巴拉圭5-3-2加固+Almirón/Enciso反击速度克制土耳其已知弱点(转换防守)
5. 生死战"不输"比"赢"更重要心态→巴拉圭铁桶阵不易被攻破

**巴拉圭胜 @3.90 — Value bet**

逻辑: 模型30.7% vs Pinnacle需25.6%。5pp正EV。如果巴拉圭先通过Almirón反击得分→土耳其被迫冒险→空间暴露→巴拉圭反击第二波。

**Under 2.25 @2.08**

逻辑: 双方首轮惨败后防守优先。巴拉圭换门将+加中卫=摆明了"先不丢球"。土耳其首轮0进球的心理阴影→可能前30分钟试探而非猛攻。生死战低比分是常态。

**波胆: 1-1 @6.0 (模型最高13.1%)**

逻辑: 双方都得分但无力打破僵局。土耳其靠Çalhanoğlu任意球或Arda Güler个人能力进1球，巴拉圭靠Almirón/Enciso反击抓1球。`
    },
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
