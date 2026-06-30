import type { MatchPrediction, GoalDistribution, TournamentStats } from '../types'

// ====== 6/29 — R32 淘汰赛: 巴西vs日本 / 德国vs巴拉圭 (+ 6/30 荷兰vs摩洛哥) ======
// model_agent v3.0 + ESPN API + Pinnacle实时赔率 (via The Odds API)
export const lastUpdated = '2026-06-29 14:30 CST (模型v3.0: Pinnacle odds, ⚠️荷兰vs摩洛哥实际为6/30)'

export const todayPredictions: MatchPrediction[] = [

  // ==================== 1. 巴西 vs 日本 (R32-2) ====================
  {
    team1: '巴西', team2: '日本', group: 'R32', ground: '休斯顿(NRG Stadium)', time: '12:00 UTC-5',
    elo1: 1978, elo2: 1910, eloDiff: 68,
    model: { home: 0.4393, draw: 0.2572, away: 0.3035 },
    market: { home: 0.5455, draw: 0.2646, away: 0.1899, _note: 'Pinnacle (FAIR: BRA 1.79→54.5%, Draw 3.69→26.5%, JPN 5.14→19.0%, vig-removed)' },
    lambda: { home: 1.52, away: 1.22, total: 2.75 },
    gap: { team: '日本', value: 11.4, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-2-3-1', coach1: 'Dorival Júnior', coach2: '森保一(Hajime Moriyasu)',
    style1: `C组第1(7分 GD+6 GF7)。R1 4-0胜海地(Vinícius Jr帽子戏法→攻防碾压),R2 2-1胜苏格兰(Vinícius Jr首开纪录,防守末段脱节),R3 1-1平摩洛哥(轮换,被对手破门)。off_residual=+0.41(进攻与Elo匹配,未超预期),def_residual=-0.92(防线质变,本届最佳防守数据!仅对阵苏格兰丢1球)。Vinícius Jr以4球领跑射手榜,但中场组织依赖Paquetá节奏。`,
    style2: `F组第2(5分 GD+4 GF7)。R1 2-2平荷兰(绝平钢巴!久保建英/Kamada落后2球连追),R2 3-1胜瑞典(久保建英2球,Kamada助攻→统治力),R3 2-0胜突尼斯(三笘薫首球,控制全局)。off_residual=+0.68(进攻超预期,面对荷兰瑞典均得分),def_residual=-0.25(防守稳固)。Kamada 2球,久保建英2球→多点开花,森保一体系强调反击速度和边路爆点。`,
    lineup1: 'Alisson; Danilo, Marquinhos, Gabriel Magalhães, Guilherme Arana; Bruno Guimarães, Paquetá; Raphinha, Rodrygo, Vinícius Jr; Endrick',
    lineup2: '鈴木彩艶; 板倉滉, 遠藤航, 富安健洋; 菅原由勢, 田中碧, 守田英正, 三笘薫; 久保建英, Kamada; 上田綺世',
    injuries1: 'Ederson伤疑(锁骨,大概率轮休)', injuries2: '全员健康(板倉滉轻伤确认首发)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '均势(差异化)', reason: 'BRA off=+0.41(Vinícius Jr个人能力) vs JPN off=+0.68(体系化多点开花)。巴西效率高,日本创造力更强。' },
      { area: '防守质量', advantage: '巴西(显著)', reason: 'BRA def=-0.92(本届最佳!Gabriel+Marquinhos双塔仅丢1球) vs JPN def=-0.25→巴西防线远优于日本,但需警惕三笘薫1v1突破制造的混乱。' },
      { area: '中场控制', advantage: '巴西', reason: 'Bruno Guimarães+Paquetá的传控体系 vs 遠藤航(定位球威胁)+守田英正(扫荡)→巴西技术优势明显,但遠藤航拦截力不可小觑。' },
      { area: '体能+换人深度', advantage: '巴西(碾压)', reason: '巴西板凳深度(Endrick,Martinelli,Savinho)远超日本。淘汰赛加时赛场景下巴西换人更能改变局势。' },
      { area: '淘汰赛经验', advantage: '巴西', reason: '5届冠军底蕴 vs 日本2022年R16出局。森保一虽有逆转德国/西班牙的神迹,但单场淘汰赛面对巴西的心理压力是另一层级。' },
    ],
    groupContext: `R32淘汰赛: 1C(巴西) vs 2F(日本)。胜者晋级R16对阵德国/巴拉圭胜者(1E vs 3D)。单场淘汰制→90分钟平则加时+点球。巴西以5届冠军底蕴面对2022年惊艳世界的日本。日本F组面对荷兰/瑞典两大强敌不败(胜瑞典,平荷兰),证明有能力与强队周旋。`,
    handicaps: [
      { line: -0.75, win: 0.332, draw: 0, lose: 0.668, marketWin: '@2.04', marketLose: '@1.89', isMarketLine: true },
      { line: -0.5, win: 0.4392, draw: 0, lose: 0.5607 },
      { line: 0, win: 0.4392, draw: 0.2572, lose: 0.3035 },
      { line: 0.5, win: 0.6964, draw: 0, lose: 0.3035 },
      { line: 0.75, win: 0.783, draw: 0, lose: 0.217, marketWin: '@1.89', marketLose: '@2.04', isMarketLine: true },
      { line: -1.5, win: 0.2199, draw: 0, lose: 0.78 },
      { line: -1, win: 0.2199, draw: 0.2193, lose: 0.5607 },
      { line: 1, win: 0.6964, draw: 0.1759, lose: 0.1276 },
      { line: 1.5, win: 0.8723, draw: 0, lose: 0.1276 },
      { line: -2, win: 0.0872, draw: 0.1327, lose: 0.78 },
      { line: 2, win: 0.8723, draw: 0.0858, lose: 0.0418 },
    ],
    overUnder: [
      { line: 2.25, over: 0.5161, under: 0.4839, marketOver: '@1.87', marketUnder: '@2.05', isMarketLine: true },
      { line: 1.5, over: 0.7585, under: 0.2415 },
      { line: 2.0, over: 0.5161, under: 0.4839 },
      { line: 2.5, over: 0.5161, under: 0.4839 },
      { line: 3.0, over: 0.2947, under: 0.7053 },
      { line: 3.5, over: 0.2947, under: 0.7053 },
    ],
    predictions: [
      { score: '1-1', prob: 12.0, reason: '最高概率比分。双方都有进球能力,巴西防守好但日本off=+0.68能破门' },
      { score: '1-0', prob: 9.8, reason: '巴西def=-0.92+零封可能,但进攻可能受阻于日本密集防守' },
      { score: '2-1', prob: 9.1, reason: '巴西2球攻击力+日本强行破1门的可能性' },
    ],
    recommendations: [
      { type: '胜平负', pick: '日本胜', odds: '@5.14', modelProb: 0.3035, reason: '🟢VALUE+11.4pp! 模型30.4% vs 市场19.0%(fair)。Pinnacle@5.14(real EV+56%)。日本F组对荷兰/瑞典不败证明其可与强队抗衡,Elo差仅68。' },
      { type: '让球', pick: '日本+0.75', odds: '@1.89', modelProb: 0.783, reason: '🟢超级VALUE+25.4pp! Pinnacle Japan+0.75: 模型Japan不败或输1球概率78.3% vs 市场隐含52.9%。日本面对强队极少大败(本届F组0场输2+)。' },
      { type: '大小球', pick: 'Under 2.25', odds: '@2.05', modelProb: 0.484, reason: '真实Pinnacle线2.25。模型Under概率48.4% vs @2.05隐含48.8%→接近均衡。淘汰赛保守节奏+日本def=-0.25倾向低比分。' },
    ],
    analysis: {
      groupSituation: `**R32第2场: 1C vs 2F — 巴西 vs 日本**
      
📍 休斯顿(NRG Stadium), 12:00 UTC-5 (北京时间6/30 01:00)

这是2026世界杯淘汰赛首轮最具话题性的一场对决! 巴西以5届冠军的历史底蕴闯入R32,而日本则延续2022年世界杯的惊艳表现——F组面对荷兰(2-2平)和瑞典(3-1胜)两强不败,JFA的"世界一流"宣言正在兑现。

**晋级路径:** C组第1(7分) vs F组第2(5分)。胜者将在R16面对德国/巴拉圭的胜者。

**历史交锋:** 巴西在2006年小组赛4-1胜日本,但现在的日本与20年前的日本已是两个物种——森保一的团队在2022年逆转德国/西班牙,绝非泛泛之辈。`,
      lineup1Detail: `**巴西首发(4-2-3-1):** GK: Alisson。防线: Danilo(RB), Marquinhos+Gabriel Magalhães(CB双塔,本届世界杯仅丢1球!), Guilherme Arana(LB→进攻型左后卫助攻)。双后腰: Bruno Guimarães(纽卡核心,拦截+推进)+ Paquetá(西汉姆节奏掌控者)。攻击线: Raphinha(RW,巴萨边路爆点), Rodrygo(CAM,皇马灵动串联), Vinícius Jr(LW,本届4球射手王!)。单箭头: Endrick(17岁天才,速度+射术)。巴西的边路是核心武器——Vinícius+Arana左路形成超强进攻走廊。`,
      lineup2Detail: `**日本首发(4-2-3-1):** GK: 鈴木彩艶(年轻但有欧战经验)。防线: 板倉滉(RB), 遠藤航+富安健洋(CB双核,立足英超/意甲), 菅原由勢(LB→AZ主力)。双后腰: 田中碧(奔跑机器)+ 守田英正(葡萄牙体育扫荡型)。攻击线: 三笘薫(LW→"日本贝斯特",英超盘带王), 久保建英(CAM→皇家社会10号), Kamada(RW→拉齐奥进攻发动机)。单箭头: 上田綺世(费耶诺德射手)。**关键战术棋子:** 三笘薫是日本的破局者,巴西RB Danilo的防守机动性是最大考验。Japan的3后卫转换阵型会在比赛不同阶段切换——这是森保一的秘密武器。`,
      styleAnalysis: `**巴西风格:** 技术压迫+边路个人能力。Dorival体系以球权控制为基础,Vinícius Jr左路一对一爆点是最大武器(本届4球→市场可能过度依赖这一数据)。双后腰Bruno Guimarães+Paquetá负责控制节奏,但面对日本密集防守时创造性可能受限。**致命弱点:** 右路防守(Danilo速度下降)在面对三笘薫高速突破时暴露风险极高。本届3场球权率60%+但转化为λ=1.52(非碾压级→日本有能力抵抗)。

**日本风格:** 反击速度+边路爆点+防守纪律。森保一的3-4-3到4-2-3-1的转换体系极具迷惑性——面对强队时自动切换为5后卫密集防守,然后通过三笘薫/久保建英的速度打转换。**致命弱点:** 中卫速度在面对Endrick的反击冲刺时可能不堪重负。远藤航的定位球头球是日本一个意外得分来源(尤其面对巴西门将Alisson少有的犹豫时)。`,
      tacticalNarrative: `**战术克制链:**
1. **巴西左路攻势 vs 日本右路防守:** Vinícius Jr+Arna的左边路组合是巴西最强进攻路径→但日本板倉滉(RB)以速度见长,有可能限制。关键是三笘薫能否通过深度回防协助锁死巴西左路。
2. **日本转换速度 vs 巴西漏洞:** 三笘薫vs Danilo的一对一将是决定性的——Danilo速度已被证明是巴西防线短板(对苏格兰暴露出问题),三笘薫的单挑能力可直接制造威胁。
3. **中场控制权争夺:** Bruno Guimarães的传球+Paquetá的创造 vs 遠藤航的拦截+守田英正的扫荡→如果巴西控制不了中场,Japan的反击将更具威胁。
4. **定位球威胁:** 巴西Gabriel+Marquinhos身高优势(188cm+) vs Japan平均身高劣势→远藤航的头球(184cm)是Japan唯一角球威胁。
5. **板凳深度差距(淘汰赛X因素):** 巴西替补(Endrick/Savinho/Martinelli/Gerson)完爆日本替补(伊东纯也/前田大然)→加时赛阶段巴西优势将呈指数增长。

**胜平负预测逻辑:** 巴西晋级概率43.9%(非碾压,市场54.2%高估),平局25.7%,日本30.4%。模型比市场更看好日本(VALUE+10.8pp)→淘汰赛首轮不确定性极高,尤其面对日本这种"下克上"能力极强的队伍。`,
      modelInterpretation: `**模型v3.0解读 (Pinnacle数据):**
- **λ(预期进球):** BRA λ=1.52(受日本def约束),JPN λ=1.22(受巴西def=-0.92强约束)。total λ=2.75→中等节奏比赛。
- **Form效应:** BRA off=+0.41(正常),def=-0.92(防线质变,但只有3场样本且对手质量一般→海地/苏格兰非顶级对手)。JPN off=+0.68(超预期,面对荷兰/瑞典防线进球有质量)。
- **Elo差68(微量优势):** 1978 vs 1910→差距很小,历史上这种Elo差距的比赛任何结果都有可能(方向准确率仅57%)。
- **CI95:** 巴西胜[32.2%-56.4%←宽泛!不确定性大]。这解释了为什么模型不能简单推"巴西胜"——置信区间太宽(±12pp!),存在显著模型不确定性。
- **Market vs Model (Pinnacle):** 市场定价巴西54.5% vs 模型43.9%→-10.6pp差异。日本11.4pp的定价差距是本届最大的\"下狗VALUE\"信号之一。Pinnacle作为最尖的市场竟然给日本@5.14(19.0%公平概率)→模型认为真实概率30.4%,存在巨大信息不对称。
- **日本+0.75是核心发现:** 模型Japan不败或输1球概率78.3% vs 市场仅定价52.9%。+25.4pp的VALUE即使扣除模型不确定性(±12pp)也远远超出噪音范围。日本F组从未输2球以上(对荷兰2-2,对瑞典3-1胜,对突尼斯2-0胜)——\"不会大败\"是已验证的事实。`,
      betReasoning: `**推荐逻辑链:**
1. **核心推荐: 日本+0.5(@2.10, 模型69.6% vs 市场定价47.6% → +22pp VALUE):** 日本接受+0.5让球意味着"平局=赢,只输巴西净胜2球以上才输"。模型计算日本赢或平的概率为69.6%,这与市场定价有显著价值差距。巴西的def=-0.92虽然强但off仅+0.41→"无法碾压"的可能性很高。
2. **辅助推荐: 平局(@3.65):** 模型与市场高度一致(25.7% vs 26.3%),但市场赔率@3.65意味着隐含概率仅27.4%→对于淘汰赛首轮"双方试探"的比赛节奏来说,这个赔率有吸引力。
3. **大小球: Over 2.5(@2.05):** λ_total=2.75(中等偏高),模型O/U 2.5的Over概率51.6%。日本面对强队倾向于"偷球后龟缩"→Over价值受此战术模式影响,确定性不高。

**不推荐:** 巴西让球(BRA -0.5 @1.71),模型认为P(Brazil净胜1+)=43.9% < 市场隐含的58.5%→ -14.6pp负EV,是市场制造的"陷阱盘口"。` ,
    },
    confidence: 'mid',
  },

  // ==================== 2. 德国 vs 巴拉圭 (R32-3) ====================
  {
    team1: '德国', team2: '巴拉圭', group: 'R32', ground: '波士顿/福克斯堡(Gillette Stadium)', time: '16:30 UTC-4',
    elo1: 1939, elo2: 1780, eloDiff: 159,
    model: { home: 0.5533, draw: 0.24, away: 0.2067 },
    market: { home: 0.7021, draw: 0.1915, away: 0.1064, _note: 'DraftKings (FAIR: GER -275→70.2%, Draw +400→19.2%, PAR +800→10.6%, vig-removed)' },
    lambda: { home: 1.75, away: 0.97, total: 2.72 },
    gap: { team: '巴拉圭', value: 10.0, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-4-2(低位防守)', coach1: 'Julian Nagelsmann', coach2: 'Gustavo Alfaro',
    style1: `E组第1(6分 GD+6 GF10!)。R1 4-1胜库拉索(Undav帽子戏法,碾压),R2 1-2负厄瓜多尔(被反击击穿),R3 5-1胜科特迪瓦(Wirtz+Muisala爆发,进攻全面开花)。off_residual=+1.42(怪兽级!本届最强进攻残差,面对库拉索/科特迪瓦高效输出,但对厄瓜多尔哑火),def_residual=+0.08(防守中等,第二场被厄瓜多尔打穿暴露后防脆弱→高位防线推太高)。Undav 3球领跑,Wirtz+Musiala各2球。`,
    style2: `D组第3(4分 GD-2 GF2)→以最佳第三名晋级。R1 0-0平澳大利亚(零封),R2 2-0胜土耳其(闪电反击进球),R3 0-4负美国(暴露面对强队进攻线时的崩溃风险)。off_residual=-0.50(攻击乏力!3场仅2球,Galarza唯一得分手),def_residual=+0.08(防守中等,但面对美国4球溃败→德国式碾压可能重现)。典型的南美"大巴式"防守队——只求存活,不求得分。Galarza是唯一进攻威胁。`,
    lineup1: 'ter Stegen; Kimmich, Rüdiger, Schlotterbeck, Raum; Andrich, Groß; Wirtz, Musiala, Sané; Undav',
    lineup2: 'Morínigo; Rojas, Balbuena, Gómez, Alonso; Villasanti, Cubas, Galarza, Almirón; Ávalos, Enciso',
    injuries1: 'Gündoğan轻伤(可能轮休),Havertz替补', injuries2: '无重大伤情(全员可出战)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '德国(碾压)', reason: 'off=+1.42(10球!) vs off=-0.50(2球)→实力差距5倍。德国多点开花,巴拉圭只能靠零星反击。' },
      { area: '防守质量', advantage: '德国(稍优)', reason: 'GER def=+0.08 vs PAR def=+0.08(数值相同!)→但对手质量完全不同。德国对强队防守不稳定,巴拉圭面对弱队能零封但遇强队崩溃。' },
      { area: '中场控制', advantage: '德国(完胜)', reason: 'Groß(布莱顿)+Andrich(勒沃库森)双后腰 vs Villasanti+Cubas→技术/身体/战术素养全面碾压。巴拉圭中场估计将被完全压制。' },
      { area: '战术纪律', advantage: '巴拉圭', reason: '南美大巴队→Alfaro体系高度依赖防守组织。巴拉圭能保持0-0到半场,考验德国耐心。但若丢球→南美大巴变敞篷车。' },
      { area: '场地优势', advantage: '中立(德国球迷多)', reason: '波士顿有大量德裔社区,但非实质主场优势。北美气候与欧洲接近→对德国无不利影响。' },
    ],
    groupContext: `R32淘汰赛: 1E(德国) vs 3D(巴拉圭,最佳第三名晋级)。胜者R16对阵科特迪瓦/厄瓜多尔胜者(2E vs 3E)→晋级路线相对有利(避开巴西/荷兰)。巴拉圭是南美大巴队典型——0-0平澳大利亚,0-4被美国击穿→面对德国这种进攻火力(GF10!)可能被彻底打爆。`,
    handicaps: [
      { line: -1.25, win: 0.3106, draw: 0, lose: 0.6893, marketWin: '@1.87', marketLose: '@2.06', isMarketLine: true },
      { line: -1.5, win: 0.3106, draw: 0, lose: 0.6893 },
      { line: -1, win: 0.3106, draw: 0.2427, lose: 0.4466 },
      { line: -0.5, win: 0.5533, draw: 0, lose: 0.4466 },
      { line: 0, win: 0.5533, draw: 0.24, lose: 0.2066 },
      { line: 0.5, win: 0.7933, draw: 0, lose: 0.2066 },
      { line: 1, win: 0.7933, draw: 0.1342, lose: 0.0724 },
      { line: 1.25, win: 0.859, draw: 0, lose: 0.141, marketWin: '@2.06', marketLose: '@1.87', isMarketLine: true },
      { line: 1.5, win: 0.9275, draw: 0, lose: 0.0724 },
    ],
    overUnder: [
      { line: 2.75, over: 0.5113, under: 0.4887, marketOver: '@1.98', marketUnder: '@1.93', isMarketLine: true },
      { line: 1.5, over: 0.7549, under: 0.2451 },
      { line: 2.0, over: 0.5113, under: 0.4887 },
      { line: 2.5, over: 0.5113, under: 0.4887 },
      { line: 3.0, over: 0.2903, under: 0.7097 },
      { line: 3.5, over: 0.2903, under: 0.7097 },
    ],
    predictions: [
      { score: '1-0', prob: 11.5, reason: '最高概率比分。德国1球小胜(市场高估碾压,模型说不是)。巴拉圭大巴死守80分钟。' },
      { score: '1-1', prob: 11.2, reason: '惊人但合理——二线概率比分。巴拉圭偷1球(Galarza定位球/反击),德国久攻不下。' },
      { score: '2-0', prob: 10.1, reason: '德国2球零封(最预期比分如果大巴提前崩)。南美大巴若早丢球→敞开。' },
    ],
    recommendations: [
      { type: '胜平负', pick: '巴拉圭胜', odds: '@9.50', modelProb: 0.2067, reason: 'VALUE+10.4pp! 模型20.7% vs 市场10.3%(fair)。Pinnacle@9.50(real EV+97%)。淘汰赛首轮最大冷门赔率——德国def普通且南美大巴能制造意外。' },
      { type: '让球', pick: '巴拉圭+1.25', odds: '@2.06', modelProb: 0.859, reason: '超级VALUE+37.3pp! Pinnacle Paraguay+1.25: 模型Paraguay不败或输1球概率85.9% vs 市场隐含48.5%。南美大巴+淘汰赛节奏→德国净胜2+概率仅14.1%!这是今天最大的市场错误定价。' },
      { type: '大小球', pick: 'Under 2.75', odds: '@1.93', modelProb: 0.489, reason: '真实Pinnacle线2.75。模型Under概率48.9% vs @1.93隐含51.8%→轻微负EV。但巴拉圭off=-0.50(极度乏力)+大巴战术→Under倾向合理。' },
    ],
    analysis: {
      groupSituation: `**R32第3场: 1E vs 3D — 德国 vs 巴拉圭**
      
📍 波士顿/福克斯堡(Gillette Stadium), 16:30 UTC-4 (北京时间6/30 04:30)

这是淘汰赛首轮实力差距最大的一场对决。德国以ElO 1939(E组第1,GF10!)对阵以最佳第三名身份晋级的巴拉圭(ElO 1780,3场仅2球)。市场定价德国胜率70.2%,但模型认为仅55.3%→存在14.9pp的过度定价。

**晋级路径:** E组第1(6分,GF10!) vs D组第三(4分,GD-2)。胜者R16对阵科特迪瓦/厄瓜多尔→是本届最幸运的淘汰赛路径之一。

**关键疑问:** 德国能碾压吗? 还是巴拉圭的南美大巴能让比赛变成丑陋的0-0肉搏,拖进加时赛创造奇迹?`,
      lineup1Detail: `**德国首发(4-2-3-1):** GK: ter Stegen(巴萨门神)。防线: Kimmich(RB,拜仁核心), Rüdiger(皇马CB,身体怪兽), Schlotterbeck(多特CB), Raum(LB,攻击型边卫)。双后腰: Andrich(勒沃库森扫荡)+ Groß(布莱顿控球组织者)。攻击线: Wirtz(RW,勒沃库森10号,2球3助!), Musiala(CAM,拜仁天才), Sané(LW,拜仁速度爆点→但最近状态不稳)。单箭头: Undav(3球→本届射手榜领跑者,前斯图加特战术型前锋)。**Nagelsmann的武器库:** 德国板凳实力冠绝全场(Havertz/Gnabry/Füllkrug/Schlotterbeck),每名替补都可独立改变比赛节奏。`,
      lineup2Detail: `**巴拉圭首发(4-4-2低谷防守):** GK: Morínigo(常规首发)。防线: Rojas(RB), Balbuena(莫斯科迪纳摩→老将经验), Gómez(Nacional→最具组织能力), Alonso(LB)。中场四人平行线: Villasanti(格雷米奥→唯一技术型), Cubas(温哥华白帽→纯防守苦力), Galarza(唯一得分手→远射威胁), Almirón(英超经验→唯一的反击速度)。前锋: Ávalos+Enciso(期望值极低的双箭头)。**Alfaro的战术哲学:** "不求赢球,只求不丢球"。巴拉圭将完全退到自己的半场——9-1阵型→期待0-0到60分钟然后换人博一场。`,
      styleAnalysis: `**德国风格:** 高位压迫+快速转换+Nagelsmann的战术多变性。德国在小组赛展现两种面貌: ①对库拉索/科特迪瓦的高效碾压(GF10!); ②对厄瓜多尔的无力(1-2负,被两次流畅反击击穿)。Nagelsmann的高位防线在遇到快速转换时脆弱——**这正是巴拉圭唯一的希望。**

**巴拉圭风格:** 极端防守+低预期进球+定位球偷鸡。南美大巴的精髓: 4-4-2站位,两道防线极致压缩空间,让对手在30米区域内控球无威胁。Paraguay在小组赛证明了两件事: ①对澳大利亚0-0→可以零封中等攻击力队伍; ②对美国0-4→面对高压和高强度进攻时崩溃→**德国是美国级别的威胁,甚至更强。**`,
      tacticalNarrative: `**战术克制链:**
1. **德国如何打破大巴:** 两条路→(a)Wirtz的贴身过人+传中找Undav(Fülkrug替补),身高优势在面对巴拉圭中卫时(180cm左右)是绝杀武器;(b)Musiala的变奏过人→一对一摆脱后制造混乱,迫使巴拉圭犯规(禁区前任意球→Rüdiger头球!)。但德国的关键弱点:创意储备不足(Musiala状态波动+Sané失误率高)→如果大巴坚持到70分钟,德国可能陷入焦躁。
2. **巴拉圭如何偷鸡:** 仅有的希望是↧德国角球时的快速转换→Almirón的速度vs Kimmich高位时的回追劣势。Galarza的定位球远射(本届1球)是意外的得分渠道。
3. **Nagelsmann vs Alfaro的博弈:** 德国需避免"久攻不下→急躁→被打反击"的剧本。Nagelsmann的板凳深度(Havertz换下Sané,Füllkrug换下Undav)是加时赛王牌。Alfaro只有Plan A(大巴)→Plan B是什么?如果0-0到80分钟,巴拉圭会开始攻吗?历史上南美大巴在淘汰赛0-0到加时赛是最危险的状态。
4. **关键数据点:** 德国在厄瓜多尔一战暴露出面对低位反击时的防守脆弱→巴拉圭的4-4-2站位可能给Musiala/Wirtz更多空间(不如厄瓜多尔那样的高压)。这意味着德国可能"更容易打开局面"。

**结论:** 德国应该赢。但55.3%的胜率(非70.2%)说明→"碾压"的概率(31%)远低于市场预期,"小胜或加时赛"(44.7%)才是合理的预期。`,
      modelInterpretation: `**模型v3.0解读:**
- **λ(预期进球):** GER λ=1.75(高效但不碾压级→面对大巴得分效率打折),PAR λ=0.97(面对强队防守,几乎没能力制造持续威胁)。total λ=2.72→中低节奏比赛。
- **Form效应:** GER off=+1.42(怪兽级,但3场样本→库拉索/科特迪瓦的数据,对厄瓜多尔哑火→样本偏差风险)。PAR off=-0.50(极度乏力,且无迹象能改善)。关键:residual来自3场比赛→当对手实力悬殊时,form效应可能被高估。
- **Elo差159:** ElO不确定性高→CI95德国胜[43.7%-66.4%],宽度22.7pp→"舒服的胜利"和"焦灼的比赛"都在合理范围。
- **Market vs Model:** 市场定价德国胜率70.2% vs 模型55.3%→-14.9pp差异。市场可能低估了"南美大巴淘汰赛"的不可预测性——历史上世界杯淘汰赛首轮,这种实力差距的比赛被"乌龟"逼平的概率不低。
- **O/U偏差:** λ_total=2.72(偏低),但市场更倾向Under(@2.10 vs @1.74)→市场在暗示"低比分比赛"。模型O/U 2.5 Over=51.1%→与市场方向一致(偏低),但Under的价值因大巴预期而模糊。`,
      betReasoning: `**推荐逻辑链:**
1. **核心推荐: 巴拉圭+1.5(@1.74, 模型68.9% vs 市场定价57.5% → +11.4pp VALUE):** 模型计算P(德国净胜2+)=31.1%。南美大巴+淘汰赛首轮→德国打出碾压胜利的概率只有31%,市场过度定价了"德国牌面实力"。巴拉圭"输1球也赢"的让球方向有显著价值。
2. **辅助: 德国胜(@1.36):** 模型EV=-18.2pp(严重负EV!)→市场定价(70.2%)远高于模型(55.3%)。这意味着德国胜出的概率被高估,因此"买德国胜"不是好投资——但如果你持有德国晋级信念(基本面角度),这个EV低也是合理结果。
3. **大小球: Under 2.5(@2.10):** 接近均衡。λ_total=2.72(偏低)+巴拉圭off=-0.50(几乎无进攻)→德国的单方面进球可能是2球或3球(取决于大巴何时崩)。淘汰赛氛围倾向于Under。

**不推荐:** 德国-1.5(@2.05),因为模型显示P(德国净胜2+)=31.1% << @2.05隐含的48.8%→-17.7pp严重负EV。这是市场制造的"屠杀幻想"。`,
    },
    confidence: 'high',
  },

  // ==================== 3. 荷兰 vs 摩洛哥 (R32-4) ====================
  {
    team1: '荷兰', team2: '摩洛哥', group: 'R32', ground: '蒙特雷/瓜达卢佩(Estadio BBVA)', time: '19:00 UTC-6',
    elo1: 1944, elo2: 1840, eloDiff: 104,
    model: { home: 0.4875, draw: 0.2509, away: 0.2616 },
    market: { home: 0.4200, draw: 0.3097, away: 0.2703, _note: 'Pinnacle (FAIR: NED 2.33→42.0%, Draw 3.16→31.0%, MAR 3.62→27.0%, vig-removed)' },
    lambda: { home: 1.63, away: 1.13, total: 2.75 },
    gap: { team: '荷兰', value: 6.7, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-3-3', coach1: 'Ronald Koeman', coach2: 'Walid Regragui',
    style1: `F组第1(7分 GD+6 GF10!)。R1 2-2平日本(Brobbey梅开二度,领先2球被日本绝平,防守末段断电),R2 5-1胜瑞典(全队开挂→Brobbey/Gakpo/Simons各处开花),R3 4-0胜突尼斯(轮换阵容仍打出高效,统治全场)。off_residual=+1.57(全场最佳进攻状态!F组10球→名副其实)。def_residual=+0.08(防守中规中矩,但面对日本末段断电暴露老毛病→荷兰大赛"掉链子"基因)。Brobbey以3球+2助成为F组最有价值球员,Gakpo 2球。`,
    style2: `C组第2(7分 GD+3 GF6)。R1 3-0胜海地(Saibari帽子戏法!),R2 2-0胜苏格兰(Hakimi远射+Saibari轻松补刀),R3 1-1平巴西(面对Vinícius Jr+Rodrygo的超级前场保持不败!→证明防守能对抗世界最强)。off_residual=+0.53(高效,面对海地/苏格兰虐菜,但对巴西被限制),def_residual=-0.25(防守稳固→Bounou+Saïss的2022四强组合依然可靠)。Saibari 3球→摩洛哥新10号,Hakimi仍是世界级右后卫。`,
    lineup1: 'Verbruggen; Dumfries, Van Dijk, Aké, Malacia; De Jong, Reijnders, Gravenberch; Simons, Brobbey, Gakpo',
    lineup2: 'Bounou; Hakimi, Aguerd, Saïss, Mazraoui; Amrabat, Ounnahi, Amallah; Saibari, En-Nesyri, Boufal',
    injuries1: 'De Ligt替补(伤愈后状态不确定)', injuries2: '全员健康(Saïss大腿轻伤确认首发)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '荷兰(显著)', reason: 'off=+1.57(世界级!F组10球) vs off=+0.53(虐菜高效,对强队受限)。荷兰攻击线深度碾压(Gakpo+Simons+Brobbey vs Saibari+En-Nesyri)。' },
      { area: '防守质量', advantage: '均势', reason: 'NED def=+0.08 vs MAR def=-0.25→数值上摩洛哥稍优,但对手质量不同。Van Dijk的经验 vs 2022四强Bounou+Saïss→防守端不会差太多。' },
      { area: '中场控制', advantage: '荷兰', reason: 'De Jong(技术核心)+Reijnders+Gravenberch(年轻活力) vs Amrabat(纯防守)+Ounnahi(过气)→技术代差明显。但Amrabat的欧战经验可限制De Jong。' },
      { area: '心理韧性', advantage: '摩洛哥(显著)', reason: '2022年摩洛哥在淘汰赛击败西班牙/葡萄牙→淘汰赛心理优势!荷兰则典型"小组强、淘汰赛崩"(自2014年后未突破QF)。这是摩洛哥的最大武器。' },
      { area: '门将', advantage: '摩洛哥', reason: 'Bounou(2022世界杯金手套!) vs Verbruggen(年轻未经淘汰赛考验)→这一点是摩洛哥真实的优势。博努的点球扑救能力在加时赛场景是秘密武器。' },
    ],
    groupContext: `R32淘汰赛: 1F(荷兰) vs 2C(摩洛哥)。胜者R16对阵巴西/日本胜者。这是本日最具悬念的比赛!荷兰以F组10球的超级攻击力,面对2022世界杯神话摩洛哥(淘汰赛击败西班牙+葡萄牙→四强)。摩洛哥C组对巴西保持不败(1-1)证明他们具有对抗世界最强的能力。历史交锋: 2022年世界杯半决赛碰面未发生(荷兰QF被阿根廷淘汰) → 两人"应该发生但未发生"的对决,现在在R32献给我们。`,
    handicaps: [
      { line: -0.25, win: 0.4875, draw: 0, lose: 0.5125, marketWin: '@1.97', marketLose: '@1.95', isMarketLine: true },
      { line: -0.5, win: 0.4875, draw: 0, lose: 0.5125 },
      { line: 0, win: 0.4875, draw: 0.2509, lose: 0.2616 },
      { line: 0.25, win: 0.7384, draw: 0, lose: 0.2616, marketWin: '@1.95', marketLose: '@1.97', isMarketLine: true },
      { line: 0.5, win: 0.7384, draw: 0, lose: 0.2616 },
      { line: -1.5, win: 0.2574, draw: 0, lose: 0.7426 },
      { line: -1, win: 0.2574, draw: 0.2301, lose: 0.5125 },
      { line: 1, win: 0.7384, draw: 0.1588, lose: 0.1028 },
      { line: 1.5, win: 0.8972, draw: 0, lose: 0.1028 },
    ],
    overUnder: [
      { line: 2.25, over: 0.521, under: 0.479, marketOver: '@1.97', marketUnder: '@1.93', isMarketLine: true },
      { line: 1.5, over: 0.762, under: 0.238 },
      { line: 2.0, over: 0.521, under: 0.479 },
      { line: 2.5, over: 0.521, under: 0.479 },
      { line: 3.0, over: 0.2992, under: 0.7008 },
      { line: 3.5, over: 0.2992, under: 0.7008 },
    ],
    predictions: [
      { score: '1-1', prob: 11.7, reason: '最高概率比分!双方实力接近,摩洛哥面对强队善于制造平局(对巴西1-1)' },
      { score: '1-0', prob: 10.3, reason: '荷兰小胜(最典型的淘汰赛结果,但摩洛哥零封可能性不高)' },
      { score: '2-1', prob: 9.5, reason: '荷兰2球+摩洛哥保底1球,进攻力比拼的最可能结果' },
    ],
    recommendations: [
      { type: '胜平负', pick: '荷兰胜', odds: '@2.33', modelProb: 0.4875, reason: '🟢VALUE+6.7pp! 模型48.8% vs Pinnacle fair 42.0%→real EV+13.5%。荷兰off=+1.57(F组10球)攻击力足以突破摩洛哥防线。摩洛哥对巴西平1-1是"大巴"不是"赢球"。' },
      { type: '让球', pick: '摩洛哥+0.25', odds: '@1.95', modelProb: 0.5125, reason: 'Pinnacle Morocco+0.25: 模型摩洛哥不败概率51.3% vs 市场fair 58.0%→轻微负EV。但淘汰赛Bounou魔法+摩洛哥淘汰赛底蕴→合理。' },
      { type: '大小球', pick: 'Over 2.25', odds: '@1.97', modelProb: 0.521, reason: 'Pinnacle线2.25。微正EV。λ_total=2.75+双方off正值→进球来源充足。淘汰赛可能保守但对攻可能性不低。' },
    ],
    analysis: {
      groupSituation: `**R32第4场: 1F vs 2C — 荷兰 vs 摩洛哥**

📍 蒙特雷/瓜达卢佩(Estadio BBVA), 19:00 UTC-6 (北京时间6/30 09:00)

这是2026世界杯R32最具历史张力的一场比赛! 2022年世界杯"本应发生但未发生"的对决现在上演——荷兰在2022年四分之一决赛被阿根廷淘汰,未能与半决赛对手摩洛哥(击败西班牙+葡萄牙)相会。两年半后,这场神话级对决在R32献给了世界杯。

**晋级路径:** F组第1(7分,GF10!) vs C组第2(7分,GD+3)。胜者R16对阵巴西/日本胜者。

**核心悬念:** 荷兰的攻击力(off=+1.57)是否能穿透摩洛哥的"淘汰赛不败防线"(-def=0.25)? 还是2022年的摩洛哥淘汰赛魔法再次降临,将荷兰送回家?`,
      lineup1Detail: `**荷兰首发(4-3-3):** GK: Verbruggen(布莱顿,年轻但有出球能力)。防线: Dumfries(RB→进攻型翼卫), Van Dijk(利物浦队长,身高193cm→头球核心), Aké(曼城→面对Hakimi的速度是关键), Malacia(LB→曼联,可内切协助中场)。三人中场: De Jong(巴萨→技术组织者,荷兰的"大脑"), Reijnders(米兰→活力型跑动), Gravenberch(利物浦→年轻全能型)。三叉戟: Simons(RW→莱比锡爆点), Brobbey(CF→阿贾克斯,3球2助,状态火热), Gakpo(LW→利物浦,2球→面对Hakimi的考验)。**Koeman的优势:** 荷兰板凳有Depay(经验型替补),Malen(多特速度),Weghorst(头球怪物→定位球致命)。`,
      lineup2Detail: `**摩洛哥首发(4-3-3):** GK: Bounou(2022世界杯金手套!→扑点能力世界级,在加时赛场景是超级武器)。防线: Hakimi(RB→世界级RB,对位Gakpo是巨人对决), Aguerd(西汉姆CB→伤愈归来状态关键), Saïss(贝西克塔斯→防守组织者,头球能力), Mazraoui(LB→拜仁→具备攻击能力)。中场三人: Amrabat(费内巴切→2022世界杯"中场扫荡者",纯防守型足球的化身), Ounnahi(马赛→2022年爆发之星但表现下滑), Amallah(瓦伦西亚→唯一具备创造性的中场)。三叉戟: Saibari(RW→摩洛哥新10号,3球!超级大杀器), En-Nesyri(CF→塞维利亚→2022年对葡萄牙头球绝杀者), Boufal(LW→技术大师→面对Dumfries的一对一是机会)。**Regragui的魔法:** 摩洛哥可以切换为5后卫(将Amallah撤回到防守线),增加Bounou面前的防线密度。`,
      styleAnalysis: `**荷兰风格:** 技术控球+边路速度+高位压迫。Koeman的荷兰融合了荷兰传统的"全攻全守"与现代4-3-3——De Jong控制节奏,Dumfries/Gakpo分别在右/左路提供宽度。但荷兰在小组赛暴露了两个致命缺陷: ①防守末段断电(对日本被绝平)——这就是"荷兰大赛基因":总在关键时刻崩盘;②面对快速转换时中卫速度不足(Van Dijk/Aké都是高大中卫,被灵巧边锋突破时吃力→Hakimi+Saibari的1v1能力可能制造混乱)。

**摩洛哥风格:** 防守纪律+快速反击+Bounou。2022年摩洛哥以"中场Amrabat一堵墙"+"防线Saïss领导"+"Bounou扑点"杀入四强。现在的摩洛哥增加了Saibari的创造性(3球,2022年无此类球员),但Ounnahi的退化削弱了中场创造力。关键:摩洛哥对强队(巴西)摆出9-1防守能守平→对荷兰也可以。但巴西的战术与荷兰不同——荷兰有Brobbey这样的大中锋(193cm),可直接砸传中→摩洛哥防线有被头球打穿的风险。`,
      tacticalNarrative: `**战术克制链:**
1. **荷兰的进攻武器 vs 摩洛哥防线:** 荷兰有三条进攻路径→(a)Gakpo左路内切vs Hakimi正面防守→技术vs速度;(b)Dumfries右路插上传中→Brobbey(193cm)头球→Aguerd+Saïss能否控制空中?这是决定性的;(c)De Jong的长传转换→直接越过Amrabat→找到空档区。
2. **摩洛哥的反击威胁:** Saibari(3球)在一对一面对Malacia/Dumfries时→速度+创造能力可制造单刀。Hakimi的定位球长传+En-Nesyri的头球→对荷兰防线的高点威胁(Van Dijk可以,但Aké/Aké不够敏捷)。
3. **中场的零和博弈:** 如果Amrabat能像2022年那样限制De Jong(世界最擅长限制深组织者的扫荡者之一),荷兰的进攻组织将被打乱。但Amrabat年长了4岁→体能是否支撑90分钟高强度扫荡?Gravenberch的体能和跑动可以"车轮战"消耗Amrabat。
4. **心理战:** 摩洛哥是淘汰赛魔法队(连续击败西班牙/葡萄牙);荷兰是"崩盘基因"队(自2014年后一直在大赛关键时刻崩)。这场比赛的心理层面可能比战术层面更重要。

**结论:** 这是本日最难预测的比赛。荷兰应该赢(48.8%),但不是大概率事件。摩洛哥的"2022魔法"就是为这样不可能的比赛而生的。`,
      modelInterpretation: `**模型v3.0解读:**
- **λ(预期进球):** NED λ=1.63(面对强队:摩洛哥def=-0.25限制荷兰威力,但off=+1.57的form会提升λ),MAR λ=1.13(面对强队:荷兰def一般,摩洛哥可进球但不多)。total λ=2.75→有进球能力的比赛。
- **Form效应:** NED off=+1.57(全场最佳!但样本包含瑞典+突尼斯两场碾压→摩洛哥是不同级别的对手)。MAR off=+0.53(对海地/苏格兰高效,但对巴西被限制→面对高防守强度时创造力不足)。**关键教训:** 摩洛哥攻强队的能力受限于对手的防守质量。
- **Elo差104:** 荷兰有优势但非碾压→CI95荷兰胜[37.0%-60.6%](宽度23.6pp→高度不确定性!)。这意味着模型认可"荷兰大概率赢但远非必然"。
- **Market vs Model:** 市场定价荷兰胜率41.7% vs 模型48.8%→+7.1pp VALUE。市场可能过度恐惧摩洛哥(2022魔法效应),或过度低估荷兰的攻击力(off+1.57是硬数据)。Draw的market偏高(30.9% vs 模型25.1%)→市场在给平局过度定价,可能因为"爆冷投注"的心理偏好。
- **Value判断:** 荷兰胜@2.30→模型概率48.8%→EV=+12.2%(真实正EV!)→这是本日最佳单场投注(虽然第1场日本+0.5有更大的模型vs市场差距)。`,
      betReasoning: `**推荐逻辑链:**
1. **核心推荐: 荷兰胜(@2.30, 模型48.8% vs 市场41.7% → +7.1pp → +12.2%真实EV!):** 这是本日最具价值投注。荷兰off=+1.57(10球F组)是硬数据,摩洛哥虽然2022年魔法惊人但已过4年。荷兰的边路速度+大中锋战术可克制摩洛哥体系。@2.30赔率真实正EV。
2. **辅助: Over 2.5(@2.15):** 正EV+5.6pp。λ_total=2.75+双方off正值→进球来源充足。荷兰必须进攻,摩洛哥面对强队善于偷球→比赛不大会是沉闷的0-0。
3. **保守: 摩洛哥+0.5(@1.65):** 轻微负EV(-9.3pp),但摩洛哥的不败概率(51.3%)确有合理性。面对淘汰赛博努的魔法,摩洛哥"不败"的可能性值得考虑——尤其如果进入加时赛(博努扑点→摩洛哥将胜出)。

**不推荐:** 平局(@3.10),模型25.1% vs 市场30.9%→市场过度定价了平局。荷兰不会容忍平局(必须进攻),摩洛哥也不会接受平局(踢防守反击求胜)→平局概率低于市场预期。`,
    },
    confidence: 'mid',
  },
]

// ====== Goal Distributions ======
export const goalDistributions: GoalDistribution[] = [
  {
    team1: '巴西', team2: '日本',
    diffs: { '-8': 0, '-7': 0.0001, '-6': 0.0004, '-5': 0.002, '-4': 0.0086, '-3': 0.0307, '-2': 0.0858, '-1': 0.1759, '0': 0.2572, '1': 0.2193, '2': 0.1327, '3': 0.0589, '4': 0.0206, '5': 0.0059, '6': 0.0014, '7': 0.0003, '8': 0.0001 }
  },
  {
    team1: '德国', team2: '巴拉圭',
    diffs: { '-8': 0, '-7': 0, '-6': 0.0001, '-5': 0.0006, '-4': 0.0034, '-3': 0.0152, '-2': 0.0531, '-1': 0.1342, '0': 0.24, '1': 0.2427, '2': 0.171, '3': 0.088, '4': 0.0355, '5': 0.0118, '6': 0.0033, '7': 0.0008, '8': 0.0002 }
  },
  {
    team1: '荷兰', team2: '摩洛哥',
    diffs: { '-8': 0, '-7': 0, '-6': 0.0002, '-5': 0.0013, '-4': 0.0061, '-3': 0.0236, '-2': 0.0716, '-1': 0.1588, '0': 0.2509, '1': 0.2301, '2': 0.1491, '3': 0.0709, '4': 0.0265, '5': 0.0082, '6': 0.0021, '7': 0.0005, '8': 0.0001 }
  },
]

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 75,
  totalGoals: 175,       // 小组赛72场+已完成的R32场次
  avgGoals: 2.33,
  homeWins: 32,
  draws: 18,
  awayWins: 25,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-14' },
  latestGoal: { match: '南非 1-0 韩国', scorer: 'Mokoena', date: '2026-06-24' },
}

// ====== Commercial Analyses (空, 后续补充) ======
export const commercialAnalyses: Record<string, import('../types').CommercialAnalysis> = {}
