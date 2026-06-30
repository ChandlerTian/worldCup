import type { MatchPrediction, GoalDistribution, TournamentStats } from '../types'

// ====== 6/30 — R32 淘汰赛第3日: 荷兰vs摩洛哥 / 科特迪瓦vs挪威 / 法国vs瑞典 ======
// model_agent v3.0 + ESPN API + Pinnacle实时赔率 (via The Odds API)
export const lastUpdated = '2026-06-30 12:00 CST (模型v3.0: Pinnacle odds, R32第3日三场)'

export const todayPredictions: MatchPrediction[] = [

  // ==================== 1. 荷兰 vs 摩洛哥 (R32-4) ====================
  {
    team1: '荷兰', team2: '摩洛哥', group: 'R32', ground: '蒙特雷/瓜达卢佩(Estadio BBVA)', time: '19:00 UTC-6',
    elo1: 1944, elo2: 1840, eloDiff: 104,
    model: { home: 0.4875, draw: 0.2509, away: 0.2616 },
    market: { home: 0.359, draw: 0.391, away: 0.250, _note: 'Pinnacle (FAIR: NED 2.65→35.9%, Draw 2.43→39.1%, MAR 3.80→25.0%, vig-removed)' },
    lambda: { home: 1.63, away: 1.13, total: 2.75 },
    gap: { team: '荷兰', value: 12.9, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-3-3', coach1: 'Ronald Koeman', coach2: 'Walid Regragui',
    style1: `F组第1(7分 GD+6 GF10!)。R1 2-2平日本(Brobbey梅开二度,领先2球被绝平),R2 5-1胜瑞典(全队开挂),R3 4-0胜突尼斯(统治全场)。off_residual=+1.57(全场最佳进攻状态!),def_residual=+0.08(防守中规中矩)。Brobbey 3球2助,Gakpo 2球。`,
    style2: `C组第2(7分 GD+3 GF6)。R1 3-0胜海地(Saibari帽子戏法),R2 2-0胜苏格兰(Hakimi远射),R3 1-1平巴西(面对Vinícius Jr保持不败!)。off_residual=+0.53(高效进攻),def_residual=-0.25(防守稳固,Bounou+Saïss组合可靠)。Saibari 3球成为新10号。`,
    lineup1: 'Verbruggen; Dumfries, Van Dijk, Aké, Malacia; De Jong, Reijnders, Gravenberch; Simons, Brobbey, Gakpo',
    lineup2: 'Bounou; Hakimi, Aguerd, Saïss, Mazraoui; Amrabat, Ounnahi, Amallah; Saibari, En-Nesyri, Boufal',
    injuries1: 'De Ligt替补(伤愈后状态不确定)', injuries2: '全员健康(Saïss大腿轻伤确认首发)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '荷兰(显著)', reason: 'off=+1.57(F组10球) vs off=+0.53(虐菜高效,对强队受限)。荷兰攻击线深度碾压。' },
      { area: '防守质量', advantage: '均势', reason: 'NED def=+0.08 vs MAR def=-0.25→数值上摩洛哥稍优,但对手质量不同。Van Dijk vs Bounou+Saïss。' },
      { area: '中场控制', advantage: '荷兰', reason: 'De Jong+Reijnders+Gravenberch vs Amrabat(纯防守)+Ounnahi→技术代差明显。' },
      { area: '心理韧性', advantage: '摩洛哥(显著)', reason: '2022年淘汰赛击败西班牙+葡萄牙→四强!荷兰则典型"小组强、淘汰赛崩"。' },
      { area: '门将', advantage: '摩洛哥', reason: 'Bounou(2022金手套!)vs Verbruggen→摩洛哥真实优势,扑点能力在加时赛是秘密武器。' },
    ],
    groupContext: `R32淘汰赛: 1F(荷兰) vs 2C(摩洛哥)。胜者R16对阵巴西/日本胜者。这是本日最具悬念的比赛!荷兰F组10球超级攻击力 vs 2022世界杯神话摩洛哥。摩洛哥C组对巴西1-1不败证明能对抗最强。历史: 2022年世界杯"本应发生但未发生"的对决(R16荷兰对阿根廷出局,摩洛哥半决赛出场)→现在终于上演。`,
    handicaps: [
      { line: -0.25, win: 0.613, draw: 0, lose: 0.387, marketWin: '@2.15', marketLose: '@1.77', isMarketLine: true },
      { line: -0.5, win: 0.4875, draw: 0, lose: 0.5125 },
      { line: 0, win: 0.4875, draw: 0.2509, lose: 0.2616 },
      { line: 0.25, win: 0.512, draw: 0, lose: 0.488, marketWin: '@1.77', marketLose: '@2.15', isMarketLine: true },
      { line: -1.5, win: 0.2574, draw: 0, lose: 0.7426 },
      { line: -1, win: 0.2574, draw: 0.2301, lose: 0.5125 },
      { line: 1, win: 0.7384, draw: 0.1588, lose: 0.1028 },
      { line: 1.5, win: 0.8972, draw: 0, lose: 0.1028 },
    ],
    overUnder: [
      { line: 1.25, over: 0.76, under: 0.24, marketOver: '@1.80', marketUnder: '@2.09', isMarketLine: true },
      { line: 1.5, over: 0.762, under: 0.238 },
      { line: 2.0, over: 0.521, under: 0.479 },
      { line: 2.5, over: 0.521, under: 0.479 },
      { line: 3.0, over: 0.2992, under: 0.7008 },
    ],
    predictions: [
      { score: '1-1', prob: 11.4, reason: '最高概率比分。双方实力接近,摩洛哥面对强队善于制造平局' },
      { score: '1-0', prob: 10.5, reason: '荷兰小胜(最典型的淘汰赛结果,摩洛哥防守可能被突破1次)' },
      { score: '2-1', prob: 9.5, reason: '荷兰2球+摩洛哥保底1球,进攻力比拼的最可能结果' },
    ],
    recommendations: [
      { type: '胜平负', pick: '荷兰胜', odds: '(@2.65)', modelProb: 0.4875, reason: '模型VALUE+12.9pp!荷兰48.8% vs 市场35.9%→显著正EV。off=+1.57,攻击力足以突破摩洛哥防线。市场过度恐惧摩洛哥2022魔法。@2.65赔率真实EV=+29.2%。' },
      { type: '让球', pick: '荷兰-0.25', odds: '@2.15', modelProb: 0.613, reason: '模型VALUE+14.8pp!荷兰不败(含半输平局)概率61.3%远超市场定价46.5%。荷兰胜率+半平局保护。' },
      { type: '大小球', pick: 'Over 1.25', odds: '@1.80', modelProb: 0.76, reason: '强烈正EV(+20.4pp)。λ_total=2.75+双方off正值→进球来源充足。1.25线极低,淘汰赛1球即触发。' },
    ],
    analysis: {
      groupSituation: `**R32第4场: 1F vs 2C — 荷兰 vs 摩洛哥**

📍 蒙特雷/瓜达卢佩(Estadio BBVA), 19:00 UTC-6 (北京时间7/1 09:00)

这是2026世界杯R32最具历史张力的一场比赛: 2022年世界杯"本应发生但未发生"的对决。荷兰在2022年QF被阿根廷淘汰,未能与半决赛对手摩洛哥(击败西班牙+葡萄牙)相会。两年半后,这场神话级对决在R32上演。

**晋级路径:** F组第1(7分,GF10!) vs C组第2(7分,GD+3)。胜者R16对阵巴西/日本胜者。

**核心悬念:** 荷兰攻击力(off=+1.57)能否穿透摩洛哥防御(Bounou+Saïss)? 还是2022年的摩洛哥淘汰赛魔法再次降临?`,
      lineup1Detail: `**荷兰首发(4-3-3):** GK: Verbruggen(布莱顿)。防线: Dumfries(RB,进攻型翼卫), Van Dijk(利物浦队长,193cm头球核心), Aké(曼城), Malacia(LB,曼联)。三人中场: De Jong(巴萨→"大脑"), Reijnders(米兰,活力型), Gravenberch(利物浦,全能)。三叉戟: Simons(RW,莱比锡爆点), Brobbey(CF,3球2助), Gakpo(LW,利物浦2球)。板凳: Depay(经验),Malen(速度),Weghorst(头球怪物→定位球致命)。`,
      lineup2Detail: `**摩洛哥首发(4-3-3):** GK: Bounou(2022金手套!扑点能力世界级)。防线: Hakimi(RB,世界级RB), Aguerd(西汉姆CB), Saïss(贝西克塔斯,防守组织者), Mazraoui(LB,拜仁)。中场三人: Amrabat(费内巴切→2022"中场扫荡者"), Ounnahi(马赛→2022爆发之星但下滑), Amallah(瓦伦西亚→创造性中场)。三叉戟: Saibari(RW→新10号,3球!), En-Nesyri(CF→2022对葡萄牙头球绝杀者), Boufal(LW→技术大师)。Regragui可切换5后卫龟缩防守。`,
      styleAnalysis: `**荷兰风格:** 技术控球+边路速度+高位压迫。Koeman融合传统"全攻全守"与现代4-3-3。De Jong控制节奏,Dumfries/Gakpo提供宽度。致命弱点: 防守末段断电(对日本被绝平)和面对快速转换时中卫速度不足。Brobbey(193cm)大中锋可砸传中→摩洛哥防线有头球风险。

**摩洛哥风格:** 防守纪律+快速反击+Bounou魔法。2022年以Amrabat一堵墙+Saïss领导+Bounou扑点杀入四强。增加了Saibari(3球)提高创造性,但Ounnahi退化削弱中场。关键: 对强队(巴西)摆9-1防守能守平→对荷兰同理,但荷兰有Brobbey大中锋不同。`,
      tacticalNarrative: `**战术克制链:**
1. **荷兰三路进攻 vs 摩洛哥防线:** (a)Gakpo左路vs Hakimi正面防守→技术vs速度;(b)Dumfries右路传中→Brobbey头球→Aguerd+Saïss能否控空?(c)De Jong长传转换→越过Amrabat。
2. **摩洛哥反击:** Saibari(3球)vs Malacia/Dumfries→速度+创造可造单刀。Hakimi定位球+En-Nesyri头球→荷兰防线高点威胁。
3. **中场零和博弈:** Amrabat能否限制De Jong?但Amrabat年老4岁→体能问题。Gravenberch体能可车轮战消耗。
4. **心理战:** 摩洛哥淘汰赛魔法队 vs 荷兰崩盘基因队→心理可能比战术重要。

**结论:** 本日最难预测比赛。荷兰应赢(48.8%)但远非必然。摩洛哥2022魔法就是为这样的不可能比赛而生的。`,
      modelInterpretation: `**模型v3.0解读:**
- **λ:** NED 1.63(受摩洛哥def=-0.25约束但off=+1.57拉高),MAR 1.13。total=2.75→有进球能力。
- **Form:** NED off=+1.57(全场最佳!但样本含瑞典+突尼斯碾压→摩洛哥不同级别)。MAR off=+0.53(对弱队高效,对巴西受限)。
- **Elo差104:** 荷兰优势非碾压→CI95荷兰胜[37.0%-60.6%](宽度23.6pp→高度不确定性)。
- **Market vs Model:** 市场荷兰胜率35.9% vs 模型48.8%→+12.9pp! 市场极度恐惧摩洛哥魔法。Draw市场偏高(39.1% vs 模型25.1%)→市场过度定价平局。
- **Value判断:** 荷兰胜@2.65→模型48.8%→真实EV=+29.2%!本日最佳单场投注。`,
      betReasoning: `**推荐逻辑链:**
1. **核心: 荷兰胜(@2.65, +12.9pp → +29.2%真实EV):** 本日最具价值投注。荷兰off=+1.57(10球F组)是硬数据,摩洛哥魔法已过4年。边路速度+大中锋可克制摩洛哥体系。
2. **让球: 荷兰-0.25(@2.15, +14.8pp):** 荷兰不败61.3%→含半输平局保护。胜率48.8%+平局25.1%均有利。
3. **大小球: Over 1.25(@1.80, +20.4pp):** 超低1.25线!λ_total=2.75→模型76%超过1.25球。淘汰赛保守但有价值。

**不推荐:** 平局(@2.43),模型25.1% vs 市场39.1%→市场过度定价。摩洛哥+0.25(@1.77):模型51.2% vs 市场56.5%→轻微负EV。`,
    },
    confidence: 'mid',
  },

  // ==================== 2. 科特迪瓦 vs 挪威 (R32-5) ====================
  {
    team1: '科特迪瓦', team2: '挪威', group: 'R32', ground: '待确认', time: '01:00 UTC-6',
    elo1: 1743, elo2: 1914, eloDiff: -171,
    model: { home: 0.2004, draw: 0.2387, away: 0.5609 },
    market: { home: 0.269, draw: 0.279, away: 0.452, _note: 'Pinnacle (FAIR: CIV 3.59→26.9%, Draw 3.46→27.9%, NOR 2.14→45.2%, vig-removed)' },
    lambda: { home: 0.95, away: 1.76, total: 2.71 },
    gap: { team: '挪威', value: 10.9, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-3-3', coach1: '待确认', coach2: 'Ståle Solbakken',
    style1: `小组赛晋级数据。off_residual=+0.02(进攻平平),def_residual=-0.58(防线稳固!)。进攻乏力但防守有韧性,典型的非洲杯风格队伍。`,
    style2: `小组赛晋级数据。off_residual=+1.78(极强进攻!Haaland效应),def_residual=+0.25(防线一般)。依赖Haaland个人能力,但整体体系不如顶级强队。挪威小组赛进攻火力凶猛。`,
    lineup1: '待确认(科特迪瓦首发11人)',
    lineup2: 'Nyland; Ryerson, Østigård, Ajer, Bjørkan; Ødegaard, Berge, Aursnes; Sørloth, Haaland, Nusa',
    injuries1: '待确认', injuries2: '全员健康(Haaland确认首发)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '挪威(碾压)', reason: 'off=+1.78 vs off=+0.02→5倍差距!Haaland+Ødegaard组合是世界级。' },
      { area: '防守质量', advantage: '科特迪瓦', reason: 'def=-0.58 vs def=+0.25→科特迪瓦防线更稳固,但面对Haaland考验巨大。' },
      { area: '中场控制', advantage: '挪威', reason: 'Ødegaard(阿森纳核心)是全场最佳球员,Berge+Aursnes提供支持→技术碾压。' },
      { area: '体能+板凳', advantage: '挪威', reason: '北欧体能+五大联赛班底,淘汰赛加时赛挪威优势明显。' },
      { area: '大赛经验', advantage: '挪威', reason: 'Ødegaard+Haaland的欧冠经验远超科特迪瓦球员,淘汰赛心理素质更强。' },
    ],
    groupContext: `R32淘汰赛: 某组第1 vs 某组第2(待ESPN确认)。胜者R16将面对其他淘汰赛胜者。挪威凭借Haaland+Ødegaard双子星入选世界杯,进攻火力令人瞩目。科特迪瓦是非洲杯传统强队,防守有组织性但创造力不足。`,
    handicaps: [
      { line: -0.25, win: 0.68, draw: 0, lose: 0.32, marketWin: '@1.85', marketLose: '@2.06', isMarketLine: true },
      { line: -0.5, win: 0.5609, draw: 0, lose: 0.4391 },
      { line: 0, win: 0.5609, draw: 0.2387, lose: 0.2004 },
      { line: 0.25, win: 0.439, draw: 0, lose: 0.561, marketWin: '@2.06', marketLose: '@1.85', isMarketLine: true },
      { line: -1.5, win: 0.3176, draw: 0, lose: 0.6824 },
      { line: -1, win: 0.3176, draw: 0.2433, lose: 0.4391 },
      { line: 1, win: 0.7996, draw: 0.1313, lose: 0.0691 },
    ],
    overUnder: [
      { line: 2.5, over: 0.509, under: 0.491, marketOver: '@1.96', marketUnder: '@1.93', isMarketLine: true },
      { line: 1.5, over: 0.755, under: 0.245 },
      { line: 2.0, over: 0.509, under: 0.491 },
      { line: 3.0, over: 0.287, under: 0.713 },
      { line: 3.5, over: 0.287, under: 0.713 },
    ],
    predictions: [
      { score: '0-1', prob: 11.9, reason: '最高概率比分。Haaland制胜球,挪威1球小胜(典型淘汰赛结果)' },
      { score: '1-1', prob: 10.9, reason: '科特迪瓦偷1球+挪威扳平。非洲队韧性值得尊重' },
      { score: '0-2', prob: 10.3, reason: 'Haaland双响,挪威2球零封(强势碾压剧本)' },
    ],
    recommendations: [
      { type: '胜平负', pick: '挪威胜', odds: '(@2.14)', modelProb: 0.5609, reason: '模型VALUE+10.9pp!挪威56.1% vs 市场45.2%→+10.9pp正EV。off=+1.78(Haaland效应)对防守型队伍有碾压能力。@2.14赔率真实EV=+20.1%。' },
      { type: '让球', pick: '挪威-0.25', odds: '@1.85', modelProb: 0.68, reason: '模型VALUE+14.0pp!挪威不败(含半输平局)概率68.0%远超市场54.1%。Haaland+Ødegaard组合对科特迪瓦防线是降维打击。' },
      { type: '大小球', pick: 'Over 2.5', odds: '@1.96', modelProb: 0.509, reason: '微正EV(+0.1pp)。λ_total=2.71+挪威off=+1.78→进球预期充足,但科特迪瓦def=-0.58可能限制比分。' },
    ],
    analysis: {
      groupSituation: `**R32第5场: 科特迪瓦 vs 挪威**

📍 待确认场地, 01:00 UTC-6 (北京时间7/1 15:00)

挪威在Haaland+Ødegaard黄金一代带领下进军世界杯淘汰赛,进攻火力令人瞩目(off=+1.78)。科特迪瓦作为非洲杯传统强队以防守能力晋级,但创造力严重不足(off=+0.02)。

**晋级路径:** 待ESPN确认。胜者R16对阵其他淘汰赛胜者。

**核心悬念:** Haaland能否在世界杯淘汰赛证明自己是"大场面先生"?科特迪瓦的大巴防守能否让比赛拖入加时?`,
      lineup1Detail: `**科特迪瓦首发(4-3-3):** 待确认。非洲杯班底+欧洲联赛球员混合阵容,依靠体能和身体对抗。防线是最大武器(def=-0.58)。`,
      lineup2Detail: `**挪威首发(4-3-3):** GK: Nyland(塞维利亚)。防线: Ryerson(多特RB), Østigård(雷恩CB), Ajer(布伦特福德CB), Bjørkan(博德闪耀LB)。中场: Ødegaard(阿森纳→世界级10号), Berge(伯恩利→拦截+推进), Aursnes(本菲卡→技术型)。三叉戟: Sørloth(比利亚雷亚尔RW), Haaland(曼城CF→世界最佳射手!), Nusa(布鲁日LW→速度爆点)。板凳: Thorstvedt, Larsen, Elyounoussi。`,
      styleAnalysis: `**科特迪瓦风格:** 防守优先+身体对抗+零星反击。def=-0.58说明防线有组织性,但off=+0.02暴露创造力不足→依靠定位球+转换制造机会。非洲杯底蕴意味着不会轻易崩盘。

**挪威风格:** 以Haaland为中心的进攻体系+Ødegaard创造力。off=+1.78说明Haaland效应显著→但这种"一人球队"在淘汰赛面对密集防守时可能受阻。Solbakken体系强调边路传中找Haaland头球,Ødegaard负责最后一传。`,
      tacticalNarrative: `**战术克制链:**
1. **挪威进攻 vs 科特迪瓦防守:** Haaland(194cm)头球威胁vs科特迪瓦中卫高度→这是身高战争。Ødegaard的传球能力可精准找到Haaland跑位。
2. **科特迪瓦反击:** 仅有的希望是定位球+快速转换,利用挪威防线高度不足(def=+0.25)。
3. **中场控制:** Ødegaard vs 科特迪瓦工兵型中场→技术差距明显。挪威应能控制比赛节奏。
4. **加时赛:** 挪威体能(北欧传统+五大联赛)和板凳深度占优,加时赛挪威优势增长。

**结论:** 挪威应该赢(56.1%)。但科特迪瓦def=-0.58意味着不会大比分溃败→1球小胜最可能。`,
      modelInterpretation: `**模型v3.0解读:**
- **λ:** CIV 0.95(弱攻击,受挪威def约束),NOR 1.76(强攻击,off=+1.78效应)。total=2.71→中等进球比赛。
- **Form:** CIV off=+0.02(接近Elo预期,无惊喜),def=-0.58(防线好)。NOR off=+1.78(极强!Haaland效应显著),def=+0.25(一般)。
- **Elo差171:** 挪威显著优势→CI95挪威胜[44.2%-67.3%]。
- **Market vs Model:** 市场挪威45.2% vs 模型56.1%→+10.9pp正EV!市场可能低估Haaland在淘汰赛的X因素。
- **Value判断:** 挪威胜@2.14→模型56.1%→真实EV=+20.1%,有显著价值。`,
      betReasoning: `**推荐逻辑链:**
1. **核心: 挪威胜(@2.14, +10.9pp → +20.1%真实EV):** Haaland+Ødegaard组合是降维打击。市场定价挪威仅45.2%→严重低估。
2. **让球: 挪威-0.25(@1.85, +14.0pp):** 挪威不败概率68.0%→含半输平局保护,安全方向。
3. **大小球: Over 2.5(@1.96):** 接近均衡(50.9%)。λ_total=2.71+Haaland效应→进球预期偏多但科特迪瓦def可能压制。谨慎推荐。

**不推荐:** 科特迪瓦方向,off=+0.02意味着几乎无主动得分能力。平局(@3.46):模型23.9% vs 市场27.9%→轻微负EV。`,
    },
    confidence: 'high',
  },

  // ==================== 3. 法国 vs 瑞典 (R32-6) ====================
  {
    team1: '法国', team2: '瑞典', group: 'R32', ground: '待确认', time: '05:00 UTC-6',
    elo1: 2063, elo2: 1755, eloDiff: 308,
    model: { home: 0.6919, draw: 0.1933, away: 0.1148 },
    market: { home: 0.742, draw: 0.158, away: 0.100, _note: 'Pinnacle (FAIR: FRA 1.30→74.2%, Draw 6.10→15.8%, SWE 9.61→10.0%, vig-removed)' },
    lambda: { home: 2.11, away: 0.73, total: 2.84 },
    gap: { team: '瑞典', value: 1.4, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-4-2', coach1: 'Didier Deschamps', coach2: 'Jon Dahl Tomasson',
    style1: `小组赛头名晋级。off_residual=+0.89(高效进攻),def_residual=-0.75(防线质变!世界级防守)。Mbappé领军,进攻有保证,但Deschamps保守风格在淘汰赛更显谨慎。`,
    style2: `小组赛晋级。off_residual=+1.15(进攻超预期!面对弱队高效),def_residual=+1.08(防线脆弱!容易被强队打穿)。北欧球队风格:体能好+高空球威胁,但面对法国世界级防线可能束手无策。`,
    lineup1: 'Maignan; Koundé, Konaté, Upamecano, Hernández; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Kolo Muani',
    lineup2: 'Olsen; Krafth, Lindelöf, Hien, Augustinsson; Kulusevski, Cajuste, Karlström, Elanga; Gyökeres, Isak',
    injuries1: '全员健康(Deschamps有完整阵容选择)', injuries2: '待确认',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '法国(碾压)', reason: 'off=+0.89(Mbappé+Griezmann) vs off=+1.15(面对弱队虚高→对法国强防守将受限)。法国质量完爆。' },
      { area: '防守质量', advantage: '法国(显著)', reason: 'def=-0.75(世界级!) vs def=+1.08(脆弱!)→差距接近2σ。瑞典防线面对Mbappé+Dembélé速度可能不堪重负。' },
      { area: '中场控制', advantage: '法国(完胜)', reason: 'Tchouaméni+Camavinga(皇马双星)+Griezmann后撤 vs Cajuste+Karlström→世界杯冠军级 vs 普通欧联级。' },
      { area: '体能+板凳', advantage: '法国', reason: '法国板凳深度冠绝世界杯(Barcola,Thuram,Zaïre-Emery),远超瑞典任何替补。加时赛法国优势指数增长。' },
      { area: '大赛经验', advantage: '法国(碾压)', reason: '2018冠军+2022亚军 vs 瑞典未进2022世界杯。Deschamps淘汰赛经验无人能及。' },
    ],
    groupContext: `R32淘汰赛: 某组第1 vs 某组第2(待ESPN确认)。胜者R16对阵其他淘汰赛胜者。法国是本届最大热门之一,Deschamps带队追求连续三届世界杯进决赛。瑞典是北欧硬朗派代表,但实力差距过大。`,
    handicaps: [
      { line: -1.75, win: 0.57, draw: 0, lose: 0.43, marketWin: '@2.07', marketLose: '@1.85', isMarketLine: true },
      { line: -1.5, win: 0.570, draw: 0, lose: 0.430 },
      { line: -1, win: 0.692, draw: 0, lose: 0.308 },
      { line: -0.5, win: 0.692, draw: 0, lose: 0.308 },
      { line: 0, win: 0.692, draw: 0.193, lose: 0.115 },
      { line: 1.75, win: 0.658, draw: 0, lose: 0.342, marketWin: '@1.85', marketLose: '@2.07', isMarketLine: true },
    ],
    overUnder: [
      { line: 3.25, over: 0.317, under: 0.683, marketOver: '@1.96', marketUnder: '@1.93', isMarketLine: true },
      { line: 2.5, over: 0.544, under: 0.456 },
      { line: 2.0, over: 0.544, under: 0.456 },
      { line: 3.0, over: 0.317, under: 0.683 },
      { line: 3.5, over: 0.144, under: 0.856 },
    ],
    predictions: [
      { score: '2-0', prob: 13.0, reason: '最高概率比分。法国2球零封(Mbappé双响),瑞典def=+1.08面对强队崩盘' },
      { score: '1-0', prob: 12.6, reason: '法国1球小胜(Deschamps保守淘汰赛模式)。瑞典大巴坚持到70分钟' },
      { score: '2-1', prob: 9.5, reason: '法国2球+瑞典偷1球(Gyökeres定位球/反击)' },
    ],
    recommendations: [
      { type: '胜平负', pick: '法国胜', odds: '(@1.30)', modelProb: 0.6919, reason: '模型EV=-5.0pp(轻微负EV)。市场过度定价法国(74.2%)但Elo差308+实力差距决定法国应胜出。平价但非超值。' },
      { type: '让球', pick: '瑞典+1.75', odds: '@1.85', modelProb: 0.658, reason: '模型VALUE+11.8pp!瑞典+1.75(输1球也赢一半):模型P(法国净胜2+)=43.0%→瑞典不输2球概率65.8%远超市场54.1%。淘汰赛Deschamps保守风格+瑞典大巴→"大胜"可能性低。' },
      { type: '大小球', pick: 'Under 3.25', odds: '@1.93', modelProb: 0.683, reason: '强烈Under信号(-19.4pp vs Over)!λ_total=2.84但市场3.25线过高。淘汰赛保守+Deschamps防守优先→进球数不会多。' },
    ],
    analysis: {
      groupSituation: `**R32第6场: 法国 vs 瑞典**

📍 待确认场地, 05:00 UTC-6 (北京时间7/1 19:00)

2026世界杯最悬殊的R32对决之一。法国(Elo 2063,def=-0.75世界级防线)对阵瑞典(Elo 1755,def=+1.08脆弱防线),实力差距巨大。但模型揭示有趣结论: 市场过度定价法国"碾压"概率。

**晋级路径:** 待ESPN确认。胜者R16对阵其他淘汰赛胜者。

**核心悬念:** 法国能否"碾压"(2球+)? 还是瑞典大巴能让比赛变成1-0焦灼?`,
      lineup1Detail: `**法国首发(4-2-3-1):** GK: Maignan(米兰)。防线: Koundé(RB,巴萨), Konaté(CB,利物浦→身体怪兽), Upamecano(CB,拜仁), Hernández(LB,米兰→进攻型边卫)。双后腰: Tchouaméni(皇马→拦截+远射)+ Camavinga(皇马→技术+跑动)。攻击线: Dembélé(RW,PSG→速度爆点), Griezmann(CAM,马竞→"法国大脑"), Mbappé(LW,皇马→世界最佳)。单箭头: Kolo Muani(PSG)。板凳: Barcola,Thuram,Kanté,Zaïre-Emery。`,
      lineup2Detail: `**瑞典首发(4-4-2):** GK: Olsen(阿斯顿维拉)。防线: Krafth(纽卡RB), Lindelöf(曼联CB), Hien(亚特兰大CB,速度不错), Augustinsson(安德莱赫特LB)。中场四人: Kulusevski(RM,热刺→瑞典唯一技术威胁), Cajuste(那不勒斯CM→拦截), Karlström(波兹南→工兵型), Elanga(LM,诺丁汉森林→速度型)。双前锋: Gyökeres(葡萄牙体育→瑞典最危险武器,本赛季欧洲金靴!), Isak(纽卡→速度+技术)。Tomasson的4-4-2大巴将完全退到半场。`,
      styleAnalysis: `**法国风格:** 技术+速度+Deschamps保守哲学。Mbappé左路一对一爆点是世界最危险武器。但Deschamps淘汰赛倾向"防守优先"→大比分"碾压"非典型。def=-0.75说明防线世界级,瑞典难以破门。

**瑞典风格:** 北欧体能+高空球+大巴防守。off=+1.15但面对弱队样本→对法国强防守将大幅打折。Gyökeres(欧洲金靴!)是唯一真实威胁→法国中卫Konaté+Upamecano身体对抗可限制。`,
      tacticalNarrative: `**战术克制链:**
1. **法国如何破大巴:** Mbappé左边路vs Krafth(RB,纽卡)→速度碾压。Dembélé右路假动作+传中→瑞典防线高度不足。Griezmann的渗透传球是破解密集防守关键。
2. **瑞典如何偷鸡:** Gyökeres(194cm)的头球+Isak速度→定位球是瑞典唯一得分希望。Kulusevski的纵向突破是创造力的唯一来源。
3. **Deschamps vs Tomasson:** 法国不会全力进攻(Deschamps保守哲学),可能1-0后控节奏。Tomasson大巴能坚持多久?→过早丢球则大巴变敞篷车。
4. **加时赛:** 如果0-0到80分钟?不可能→法国至少1球。但1-0后Deschamps会收缩,Lindelöf+Gyökeres头球是绝平威胁。

**结论:** 法国应该赢(69.2%)。但"碾压"(净胜2+)概率仅43%。瑞典+1.75有显著价值,Deschamps的淘汰赛保守是最大X因素。`,
      modelInterpretation: `**模型v3.0解读:**
- **λ:** FRA 2.11(世界级攻击力),SWE 0.73(面对强队哑火)。total=2.84→中等偏高但受Deschamps保守影响。
- **Form:** FRA off=+0.89(高效),def=-0.75(防线质变)。SWE off=+1.15(虚高→对弱队数据),def=+1.08(脆弱→真实防线质量差)。
- **Elo差308:** 碾压级优势→CI95法国胜[58.4%-78.2%]→仍然是大概率但不是100%。
- **Market vs Model:** 市场法国74.2% vs 模型69.2%→-5pp差异。市场轻微过度定价法国。Sweden+1.75的eff=65.8% vs 市场54.1%→+11.8pp→强烈价值信号!
- **O/U偏差:** Over 3.25模型31.7% vs 市场51.0%→-19.3pp! 市场3.25线设置过高。淘汰赛Deschamps保守+瑞典大巴→Under信号强烈。`,
      betReasoning: `**推荐逻辑链:**
1. **核心推荐: 瑞典+1.75(@1.85, 模型65.8% vs 市场54.1% → +11.8pp):** 瑞典接受+1.75让球→输1球也赢一半!模型法国净胜2+仅43%。Deschamps保守淘汰赛+瑞典体能大巴→"屠杀"概率被市场高估。这是本日最佳让球投注。
2. **辅助: Under 3.25(@1.93, 模型68.3% vs 市场51.8% → -19.3pp差异!):** 强烈Under信号。Deschamps保守+淘汰赛防守优先→进球数低于3.25概率68.3%。最被市场错价的O/U线。
3. **辅助: 法国胜(@1.30):** 轻微负EV但高确定性。Elo差308决定实力差距→可配多串。

**不推荐:** 法国-1.75(@2.07):模型法国净胜2+仅43% << @2.07隐含的48.3%→负EV。Over 3.25(@1.96):模型31.7% vs 市场51.0%→-19.3pp!市场"屠杀幻想"最严重的错价。`,
    },
    confidence: 'high',
  },
]

// ====== Goal Distributions ======
export const goalDistributions: GoalDistribution[] = [
  {
    team1: '荷兰', team2: '摩洛哥',
    diffs: { '-8': 0, '-7': 0, '-6': 0.0002, '-5': 0.0013, '-4': 0.0061, '-3': 0.0236, '-2': 0.0716, '-1': 0.1588, '0': 0.2509, '1': 0.2301, '2': 0.1491, '3': 0.0709, '4': 0.0265, '5': 0.0082, '6': 0.0021, '7': 0.0005, '8': 0.0001 }
  },
  {
    team1: '科特迪瓦', team2: '挪威',
    diffs: { '-8': 0.0002, '-7': 0.0008, '-6': 0.0034, '-5': 0.0122, '-4': 0.0366, '-3': 0.09, '-2': 0.1735, '-1': 0.2441, '0': 0.2387, '1': 0.1313, '2': 0.051, '3': 0.0143, '4': 0.0032, '5': 0.0006, '6': 0.0001, '7': 0, '8': 0 }
  },
  {
    team1: '法国', team2: '瑞典',
    diffs: { '-8': 0, '-7': 0, '-6': 0, '-5': 0.0001, '-4': 0.0009, '-3': 0.0055, '-2': 0.0252, '-1': 0.0832, '0': 0.1933, '1': 0.2444, '2': 0.2112, '3': 0.1326, '4': 0.0652, '5': 0.0262, '6': 0.0089, '7': 0.0026, '8': 0.0007 }
  },
]

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 78,
  totalGoals: 182,
  avgGoals: 2.33,
  homeWins: 33,
  draws: 19,
  awayWins: 26,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-14' },
  latestGoal: { match: '南非 1-0 韩国', scorer: 'Mokoena', date: '2026-06-24' },
}

// ====== Commercial Analyses (空, 后续补充) ======
export const commercialAnalyses: Record<string, import('../types').CommercialAnalysis> = {}
