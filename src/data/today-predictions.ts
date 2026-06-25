import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/25 (D/E/F组R3 — 小组收官战,6场同时开球) ======
// ✅ market数据来源: Pinnacle (The Odds API, 实时盘口) — 6/25实时
// ✅ D组: 美国锁第1(主场不放水) | 巴拉圭vs澳大利亚=出线生死战
// ✅ E组: 德国锁第1(路径优势214 HIGH) | 科特迪瓦vs库拉索=科特胜即出线
// ✅ F组: 荷兰/日本4分,瑞典3分 — 三队争两个直接出线名额
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '土耳其', team2: '美国', group: 'D', ground: '西雅图', time: '15:00 UTC-4',
    elo1: 1849, elo2: 1780, eloDiff: 69,
    model: { home: 0.2915, draw: 0.2617, away: 0.4467 },
    market: { home: 0.2620, draw: 0.2315, away: 0.5064, _note: 'Pinnacle (3.71/4.20/1.92, vig-removed)' },
    lambda: { home: 1.16, away: 1.49, total: 2.65 },
    gap: { team: '美国', value: -6.0, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: '蒙特拉', coach2: '贝尔哈特',
    style1: 'R1负澳大利亚0-2(off_residual=-1.35,进攻乏力),R2负巴拉圭0-1(彻底哑火!)→0进球2场。MUST-WIN但进攻完全失灵。防守有韧性(def_residual=+0.25)。',
    style2: 'R1 4-1血洗巴拉圭(Pulisic+Balogun齐爆),R2 2-0击败澳大利亚(稳健)。6分锁定D组第1!主场西雅图(温带海洋性气候,美国堡垒)。off_residual=+1.81进攻火热,def_residual=-0.75(密不透风)。',
    lineup1: 'Çakır; Çelik, Demiral, Kabak, Kadıoğlu; Çalhanoğlu, Özcan; Güler, Yıldız, Aktürkoğlu; Yılmaz',
    lineup2: 'Turner; Dest, Richards, Ream, A.Robinson; Musah, McKennie, Reyna; Pulisic, Balogun, Weah',
    injuries1: '无重大伤情(但攻击力=0)', injuries2: '无重大伤情(可能轻微轮换)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '美国(大)', reason: '美国off_residual=+1.81(2场6球) vs 土耳其2场0球。土耳其进攻=完全哑火' },
      { area: '主场因素', advantage: '美国(大)', reason: '西雅图Lumen Field(美式足球场馆,67,000人)。北美主场+80-100 Elo等效' },
      { area: '比赛动力', advantage: '土耳其', reason: '土耳其0分MUST-WIN(理论出线可能)。美国锁定#1,但北美主场不放水(规则5)' },
      { area: '中场控制', advantage: '美国', reason: 'McKennie+Musah+Reyna跑动覆盖远强于土耳其。Çalhanoğlu单核难支撑' },
    ],
    groupContext: `D组R3。美国6分(锁#1,GD+5) | 澳大利亚3分(GD0) | 巴拉圭3分(GD-2) | 土耳其0分(GD-3)。\n\n土耳其必须赢+盼巴拉圭vs澳大利亚平局 → 3队3分拼GD(土耳其-3最差→几乎不可能)。美国锁定#1但北美主场不放水(规则5:墨西哥/美国/加拿大主场不出dead rubber)。\n\n淘汰赛路径:D1→3B/E/F/I/J(Elo≈1700) vs D2→2G(Elo≈1772),差距72(MEDIUM)→美国有动力保持不败记录但非生死攸关。`,
    handicaps: [
      {line:1.5, win:0.8125, draw:0, lose:0.1875},
      {line:1.0, win:0.7082, draw:0.2245, lose:0.0673},
      {line:0.5, win:0.5532, draw:0, lose:0.4467, marketWin:'@1.99', marketLose:'@1.92', isMarketLine:true},
      {line:0, win:0.2915, draw:0.2617, lose:0.4467},
      {line:-0.5, win:0.2915, draw:0, lose:0.7085},
      {line:-1.0, win:0.1180, draw:0.1735, lose:0.7085},
    ],
    overUnder: [
      {line:1.5, over:0.7482, under:0.2518},
      {line:2.0, over:0.5855, under:0.4145},
      {line:2.5, over:0.4940, under:0.5060, marketOver:'@1.89', marketUnder:'@2.00', isMarketLine:false},
      {line:2.75, over:0.3838, under:0.6162, marketOver:'@1.89', marketUnder:'@2.00', isMarketLine:true},
      {line:3.0, over:0.2745, under:0.7255},
      {line:3.5, over:0.1860, under:0.8140},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 2.75', odds:'@2.00', modelProb:0.6162, reason:'土耳其2场0球(攻击哑火)+美国锁#1可能适度轮换→小球。模型61.6%>需50.0%→+11.6pp'},
      {type:'让球', pick:'土耳其+0.5', odds:'@1.99', modelProb:0.5532, reason:'土耳其+0.5=不败即赢。模型55.3%>需50.3%→+5.0pp。美国锁#1后可能留力→土耳其不败概率实际更高'},
    ],
    analysis: {
      groupSituation: `**D组R3积分形势**\n\n美国6分(GD+5,锁定#1) | 澳大利亚3分(GD 0) | 巴拉圭3分(GD-2) | 土耳其0分(GD-3)\n\n土耳其必须赢+巴拉圭vs澳大利亚打平→3队3分拼GD(土耳其-3最差→需净胜3球以上!)。现实是几乎出局。美国锁定#1,但北美主场不出dead rubber(规则5)。\n\n同时进行:巴拉圭vs澳大利亚(生死战!胜者出线)。D组#2出线路径:D2→2G(Elo≈1772,伊朗/阿尔及利亚层面),中等难度。`,
      lineup1Detail: `**土耳其 (4-2-3-1) — 蒙特拉**\n\nR1 0-2负澳大利亚→R2 0-1负巴拉圭。2场0球! off_residual=-1.35(对澳大利亚预期1.2球→0球)和-0.85(对巴拉圭)→进攻完全失灵。Çalhanoğlu(国米)中场组织核心但前场终结能力为零。Yılmaz(38岁)已过巅峰。Arda Güler(皇马)天赋但经验不足。今天MUST-WIN但信心全无。`,
      lineup2Detail: `**美国 (4-3-3) — 贝尔哈特**\n\nR1 4-1巴拉圭(Pulisic 1球2助!Balogun梅开二度)→R2 2-0澳大利亚(稳定碾压)。6分锁定D组第1! off_residual=+1.81(进攻超预期),def_residual=-0.75(防守超预期)。主场西雅图Lumen Field→6.7万球迷。美国可能轮换2-3名主力(为淘汰赛留力)但主场观众面前不会\"放水\"。`,
      styleAnalysis: `**土耳其**: 4-2-3-1技术型,但本次赛事进攻端完全崩塌(0球)。Çalhanoğlu+Arda Güler有创造力但缺终结者。心理层面:MUST-WIN但0分+0进球→士气可能已崩。\n\n**美国**: 4-3-3高节奏转换型。Pulisic(米兰)+Balogun(摩纳哥)+Weah(尤文)攻击线个人能力碾压土耳其。McKennie+Musah中场跑动覆盖极大。可能有轮换但主场观众+不败记录=动力仍在。`,
      tacticalNarrative: `D组末轮,结构上美国碾压(主场+Elo虽仅+69但实际差距远超)。\n\n但两个关键因素限制美国大胜预期:\n1. 美国锁定#1→可能轮换2-3名主力(但北美主场不放水=不会大轮换)\n2. 土耳其0球进攻=即使美国轮换后防,土耳其也未必能进球\n\n预期:美国1-2球小胜或1-1平。土耳其进攻为零→难以威胁Turner。美国可能70%控球但不会全力进攻(避免受伤+消耗)。\n\n⚠️ 土耳其0球并非对手太强——澳大利亚(Elo1839)和巴拉圭(Elo1780)都是中游队。土耳其off_residual=-1.35说明是自身问题而非对手压制。`,
      modelInterpretation: `模型:美国44.7% vs Pinnacle市场50.6%\n\nGap=-6.0pp(market_higher)。市场更看好美国→合理(主场+进攻火热+土耳其0球)。\n\nλ=1.16/1.49(total=2.65)。土耳其λ仅1.16(off_residual=-1.35拖累→实际0球2场验证)。美国λ=1.49(off_residual=+1.81加成)。\n\nCI95:美国胜[30.4%-59.9%]→模型对美国的支持未达显著。市场50.6%在95CI内→市场定价合理。\n\n方向无value→不推胜平负。让球+大小球找机会。`,
      betReasoning: `方向无value(美国@1.92→需52.1%,模型仅44.7%→-7.4pp负EV)。\n\n🎯 **土耳其+0.5(@1.99,+5.0pp)**: 土耳其不败即赢盘。模型55.3%>需50.3%。美国锁#1+可能轮换→土耳其不败概率实际更高。土耳其防守有韧性(def_residual=+0.25,2场仅丢3球)。\n\n🎯 **Under 2.75(@2.00,+11.6pp)**: 今日最强Under信号。土耳其0球攻击+美国可能轮换→总进球2球概率48%,3球仅22%。模型Under=61.6%>需50%→显著正EV。\n\n⚠️ 不做土耳其胜(29.2%<26.2%→仅+3pp,POISSON噪声级别)。`
    },
    commercialAnalysis: {
      summary: '美国锁#1轮换+土耳其0球→Under 2.75(+11.6pp)今日最强Under。土耳其+0.5(+5.0pp)辅助。方向无value。',
      approvedPicks: [
        { pick: 'Under 2.75', odds: '@2.00', verdict: 'approved', edge: '+11.6pp', reasoning: '土耳其2场0球+美国锁#1轮换→结构性小球。模型61.6%>市场48.6%', category: 'core' },
        { pick: '土耳其+0.5', odds: '@1.99', verdict: 'approved', edge: '+5.0pp', reasoning: '美国锁定#1→轮换2-3主力。土耳其防守韧性(def_residual=+0.25)。不败概率55%>50%', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '美国胜', odds: '@1.92', verdict: 'rejected', edge: '-7.4pp(44.7%<52.1%)', reasoning: '模型不支持。即使美国赢,轮换后@1.92没有value', category: 'trap' },
        { pick: '美国-0.5', odds: '@1.92', verdict: 'rejected', edge: '-7.4pp', reasoning: '同上。土耳其+0.5才是value方向', category: 'trap' },
      ],
      marketBehavior: '市场美国@1.92→50.6%合理。已充分定价主场+进攻优势。但因锁#1→市场可能未充分计入轮换影响。Under 2.75是最佳信息不对称方向。',
      kellyNote: 'Under 2.75建议1.5%仓位(+11.6pp,结构性小球)。土耳其+0.5建议1%仓位。'
    },
    confidence: 'mid'
  },
  {
    team1: '巴拉圭', team2: '澳大利亚', group: 'D', ground: '旧金山', time: '15:00 UTC-4',
    elo1: 1780, elo2: 1839, eloDiff: -59,
    model: { home: 0.3001, draw: 0.2673, away: 0.4325 },
    market: { home: 0.3518, draw: 0.4206, away: 0.2276, _note: 'Pinnacle (2.75/2.30/4.25, vig-removed)' },
    lambda: { home: 1.15, away: 1.43, total: 2.57 },
    gap: { team: '澳大利亚', value: 20.5, direction: 'model_higher' },
    formation1: '4-4-2', formation2: '4-2-3-1', coach1: '谢洛托', coach2: '阿诺德',
    style1: 'R1惨败美国1-4(防守崩溃),R2 1-0胜土耳其(Enciso关键球)→3分。def_residual=+0.75(防线漏风,4球丢给美国→但对手E1780级进攻)。今天MUST-WIN才能掌控出线。Enciso(布莱顿)是唯一威胁点。',
    style2: 'R1 2-0胜土耳其(稳健),R2 0-2负美国(被碾压)。def_residual=-0.25(防守尚可→对阵美国仅丢2球实际不错)。平局即出线(GD 0 vs巴拉圭GD-2)→战术将偏向保守。Goodwin(边路)+Duke(支点)是反击武器。',
    lineup1: 'Morínigo; Rojas, Balbuena, Gómez, Alonso; Villasanti, Cubas, Enciso, Almirón; González, Sanabria',
    lineup2: 'Ryan; Karacic, Souttar, Rowles, Behich; Mooy, Irvine; Goodwin, Hrustic, McGree; Duke',
    injuries1: '无重大伤情', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '比赛动力/策略', advantage: '澳大利亚', reason: '澳大利亚平局即出线→可安心退守反击。巴拉圭必须赢→被迫压上→给澳大利亚反击空间' },
      { area: '防守组织', advantage: '澳大利亚(微)', reason: 'def_residual=-0.25(R2对美国仅丢2球=尚可)。Souttar+Rowles英超/英冠级别中卫组合' },
      { area: '进攻爆发力', advantage: '巴拉圭', reason: 'Enciso(布莱顿)个人突破能力是本场最大X因子。Almirón(纽卡)速度可撕裂澳防线' },
      { area: '心理稳定', advantage: '澳大利亚', reason: '平局即出线=心态放松。巴拉圭MUST-WIN=压力巨大→可能急躁犯错' },
    ],
    groupContext: `D组R3生死战! 美国6分(锁定#1)。澳大利亚3分(GD 0) vs 巴拉圭3分(GD-2)。\n\n澳大利亚平局即出线(GD优势),巴拉圭必须赢。如果巴拉圭赢:巴拉圭6分出线#2,澳大利亚3分离场(除非土耳其狂胜美国→3队3分比GD→澳大利亚GD至少-1,大概率出局)。\n\n同时进行:土耳其vs美国。D2→2G(Elo≈1772)淘汰赛首轮。`,
    handicaps: [
      {line:1.0, win:0.5644, draw:0.1787, lose:0.2569},
      {line:0.5, win:0.4793, draw:0, lose:0.5207},
      {line:0.25, win:0.5668, draw:0, lose:0.4332},
      {line:0, win:0.3001, draw:0.2673, lose:0.4325},
      {line:-0.25, win:0.3001, draw:0, lose:0.6999, marketWin:'@2.16', marketLose:'@1.76', isMarketLine:true},
      {line:-0.5, win:0.3001, draw:0, lose:0.6999},
      {line:-1.0, win:0.1214, draw:0.1787, lose:0.6999},
    ],
    overUnder: [
      {line:1.5, over:0.7238, under:0.2762},
      {line:1.75, over:0.6006, under:0.3994, marketOver:'@1.87', marketUnder:'@2.00', isMarketLine:true},
      {line:2.0, over:0.5258, under:0.4742},
      {line:2.5, over:0.4583, under:0.5417},
      {line:3.0, over:0.2544, under:0.7456},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Over 1.75', odds:'@1.87', modelProb:0.6006, reason:'巴拉圭MUST-WIN倾巢而出+澳大利亚反击→开放对攻。模型60.1%>需53.5%→+6.6pp。R3生死战≠小球!'},
      {type:'让球', pick:'澳大利亚+0.25', odds:'@1.76', modelProb:0.6999, reason:'澳大利亚平局即出线→退守反击。巴拉圭2场进1球(攻击乏力)→难以穿盘。模型70%vs需56.8%→+13.2pp'},
    ],
    analysis: {
      groupSituation: `**D组R3积分形势**\n\n美国6分(锁定#1) | 澳大利亚3分(GD 0) | 巴拉圭3分(GD-2) | 土耳其0分(GD-3)\n\n澳大利亚平局→4分(GD 0)→出线#2。巴拉圭必须赢→6分出线#2。如果巴拉圭平→4分,但澳大利亚也是4分→澳大利亚凭GD(0 vs -2)出线。\n\n同时进行:土耳其vs美国。土耳其需赢+本场平+GD反超(不可能)→实际只影响本场赛果和可能的第三名积分。`,
      lineup1Detail: `**巴拉圭 (4-4-2) — 谢洛托**\n\nR1惨败美国1-4(def_residual=+2.75→对美国丢4球非灾难,是顶级对手),R2 1-0胜土耳其(Enciso关键进球)。3分,进攻输出不足(2场1球,off_residual=-0.19)。Enciso(布莱顿)是唯一爆点。Almirón(纽卡)速度仍在线。今天MUST-WIN→预计积极进攻。`,
      lineup2Detail: `**澳大利亚 (4-2-3-1) — 阿诺德**\n\nR1 2-0胜土耳其(Goodwin+Duke进球),R2 0-2负美国(被完全压制但防守未崩溃)。3分,GD0。平局即出线→战术核心=不输球。Souttar(莱斯特城)+Rowles(哈茨)中卫组合防空能力强。Mooy(前英超)组织中场。Goodwin+McGree边路反击速度快。`,
      styleAnalysis: `**巴拉圭**: 传统南美防守反击→但今天必须攻出去。4-4-2阵型,Enciso左侧内切+Almirón右侧突破。问题是创造机会能力弱(2场仅xG约1.5)。攻出去=防线暴露。\n\n**澳大利亚**: 4-2-3-1稳守反击型。阿诺德杯赛经验丰富→\"不输=出线\"心态下必摆大巴。Goodwin+McGree两翼速度→反击中一箭封喉。Duke支点能力强。`,
      tacticalNarrative: `R3经典结构:\"一方MUST-WIN攻出去 vs 一方平局即出线守回来\"\n\n⚠️ 这不是小球场! 巴拉圭被迫进攻(even if attack is weak)→后防空虚→澳大利亚反击得分。同时澳大利亚退守=巴拉圭进攻次数增加→进球概率上升(虽然每次进攻质量低)。\n\n🔴 关键假设:澳大利亚不会完全龟缩——平局即出线但被压着打90分钟风险太大。阿诺德可能打\"安全反击\"而非\"纯大巴\"。\n\n模型vs市场最大分歧:澳大利亚胜43.3% vs 市场22.8%(+20.5pp!)→市场巨幅低估澳大利亚。但需谨慎:市场42.1%平局概率反映了\"澳大利亚平局策略\"的现实。模型POISSON画不出\"保守战术→平局概率飙升\"。→澳大利亚+0.25是更安全的value表达。`,
      modelInterpretation: `模型:澳大利亚43.3% vs Pinnacle市场22.8%\n\nGap=+20.5pp(model_higher)→今日最大分歧! ⚠️ 但需区分:是模型正确还是结构盲点?\n\n澳大利亚Elo1839>巴拉圭1780(+59)。模型λ=1.15 vs 1.43(澳大利亚进攻更强)。模型认为澳大利亚是更好的球队→给43%胜率。\n\n市场:平局42.1%=\"澳大利亚保守战术\"定价。这是典型的R3信息不对称——市场知道澳大利亚会防守,模型不知道。\n\n🔴 结论:澳大利亚胜@4.25的+20pp可能部分为\"保守战术==高平局\"的结构性模型盲点。澳洲+0.25(@1.76,+13.2pp)更安全。`,
      betReasoning: `🎯 **Over 1.75(@1.87,+6.6pp)**: \n1. 巴拉圭MUST-WIN→被迫进攻→给澳大利亚反击空间→双向得分概率上升\n2. 澳大利亚反击效率高(Goodwin/Duke对土耳其已验证)\n3. 总λ=2.57→P(≥2球)=72.4%→Over 1.75=模型60.1%>需53.5%\n4. 不适用R3小球逻辑(MUST-WIN vs 可平≠双方保守)\n\n🎯 **澳大利亚+0.25(@1.76,+13.2pp)**:\n1. 澳大利亚整体实力更强(Elo+59,防守更稳)\n2. 平局即出线→退守反击是最优策略\n3. 模型70%不败>需56.8%\n\n⚠️ 不做澳大利亚胜@4.25(结构盲点风险→实际概率可能低于模型43%)`
    },
    commercialAnalysis: {
      summary: 'Model-Market最大分歧(+20.5pp)。澳洲+0.25(+13.2pp)是安全的value表达。Over 1.75(+6.6pp)基于MUST-WIN→开放对攻逻辑。澳洲胜@4.25有结构盲点风险→谨慎。',
      approvedPicks: [
        { pick: '澳大利亚+0.25', odds: '@1.76', verdict: 'approved', edge: '+13.2pp', reasoning: 'Elo+59+平局即出线退守。模型70%不败>需56.8%。+0.25=输0球全赢/输0.5球半赢→安全', category: 'core' },
        { pick: 'Over 1.75', odds: '@1.87', verdict: 'approved', edge: '+6.6pp', reasoning: 'MUST-WIN方必须进攻→开放对攻结构。模型60.1%>需53.5%', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '澳大利亚胜', odds: '@4.25', verdict: 'rejected', edge: '结构盲点(模型不知保守战术→平局概率被低估)', reasoning: '+20.5pp可能为POISSON盲点。澳洲+0.25是更安全的表达', category: 'trap' },
        { pick: '巴拉圭胜', odds: '@2.75', verdict: 'rejected', edge: '-5.2pp(30%<35.2%)', reasoning: '巴拉圭进攻乏力+面对退守大巴→破门更难', category: 'trap' },
      ],
      marketBehavior: '市场平局@2.30→42.1%=巨幅高于模型26.7%。市场在\"澳大利亚保守战术→高平局\"上定价正确。澳洲胜被结构性低估但澳洲+0.25绕过此问题。',
      kellyNote: '澳大利亚+0.25建议1.5%仓位(+13.2pp,安全边界)。Over 1.75建议1%仓位。'
    },
    confidence: 'mid'
  },
  {
    team1: '库拉索', team2: '科特迪瓦', group: 'E', ground: '迈阿密', time: '20:00 UTC-4',
    elo1: 1427, elo2: 1743, eloDiff: -316,
    model: { home: 0.0899, draw: 0.1884, away: 0.7217 },
    market: { home: 0.0613, draw: 0.1153, away: 0.8235, _note: 'Pinnacle (16.0/8.50/1.19, vig-removed)' },
    lambda: { home: 0.58, away: 2.06, total: 2.64 },
    gap: { team: '科特迪瓦', value: -10.2, direction: 'market_higher' },
    formation1: '5-4-1', formation2: '4-3-3', coach1: '希多夫', coach2: '加塞特',
    style1: 'R1惨败德国1-7(防线崩塌,def_residual=+3.50→历史级漏风),R2 0-0平厄瓜多尔(铁桶防守成功!def_residual=-0.75→证明有摆大巴能力)。1分,GD-7,已淘汰(需赢科特+厄瓜大败德国+追回GD→不可能)。但R2证明可以死守。',
    style2: 'R1 1-0胜厄瓜多尔(高效),R2 1-2负德国(仅输1球=防守韧性好!def_residual=-0.25)。3分。赢即出线#2(平=4分→厄瓜需赢德国→大概率出线)。Fofana(朗斯)+Haller(前阿贾克斯)个人能力碾压库拉索。',
    lineup1: 'Room; Gaari, Martina, Van Ewijk, Floranus, Maria; Bacuna, L.Bacuna, Anita; Janga, Hooi',
    lineup2: 'Y.Fofana; Aurier, Boly, Ndicka, Konan; Kessie, S.Fofana, Seri; Pépé, Haller, Zaha',
    injuries1: '无重大伤情(但整体实力48队垫底)', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '个人能力', advantage: '科特迪瓦(碾压)', reason: 'Haller(Ajax)+Pépé+Zaha+ Kessie=全是五大联赛级别。库拉索最高级别=英冠/荷甲轮换' },
      { area: '防守大巴能力', advantage: '库拉索(策略性)', reason: 'R2 0-0厄瓜证明能死守90分钟。但德国1-7→面对真正强队无抵抗力。科特介于两者之间' },
      { area: '比赛动力', advantage: '科特迪瓦(大)', reason: '赢=出线#2。平=4分(大概率够)。库拉索已淘汰→\"荣誉之战\"但无法改变结局' },
      { area: '空中威胁', advantage: '科特迪瓦', reason: 'Haller 190cm+Boly 195cm→定位球双塔。库拉索R2防住厄瓜0定位球→有防空能力但面对更强冲击' },
    ],
    groupContext: `E组R3。德国6分(锁定#1,GD+7) | 科特迪瓦3分(GD 0) | 厄瓜多尔1分(GD-1) | 库拉索1分(GD-7)。\n\n科特迪瓦赢=出线#2。平=4分→厄瓜需赢德国(难)→科特大概率出线。库拉索已淘汰(GD-7+需奇迹)→\"荣誉之战\"。德国vs厄瓜同时进行→德国锁#1但有路径优势(214Elo差HIGH动力!)。\n\n淘汰赛路径:E1→3A/B/C/D/F(Elo≈1700)优先,E2→2I(Elo≈1914挪威!)差距214→科特迪瓦即使只能争#2也要尽量多进球(万一德国轮休输厄瓜→科特有机会#1)。`,
    handicaps: [
      {line:2.5, win:0.7305, draw:0, lose:0.2695},
      {line:2.25, win:0.7061, draw:0, lose:0.2939, marketWin:'@2.03', marketLose:'@1.87', isMarketLine:true},
      {line:2.0, win:0.6641, draw:0.2524, lose:0.0835},
      {line:1.5, win:0.4117, draw:0.2524, lose:0.3359},
      {line:1.0, win:0.3126, draw:0.222, lose:0.4654},
      {line:0, win:0.0899, draw:0.1884, lose:0.7217},
    ],
    overUnder: [
      {line:1.5, over:0.7482, under:0.2518},
      {line:2.0, over:0.5853, under:0.4147},
      {line:2.5, over:0.4937, under:0.5063},
      {line:3.0, over:0.4916, under:0.5084},
      {line:3.25, over:0.3818, under:0.6182, marketOver:'@1.93', marketUnder:'@1.94', isMarketLine:true},
      {line:3.5, over:0.2723, under:0.7277},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 3.25', odds:'@1.94', modelProb:0.6182, reason:'库拉索R2证明可死守0-0。科特攻击不算凶猛(2场2球)。已淘汰=\"尊严大巴\"。模型61.8%>需51.5%→+10.3pp'},
      {type:'让球', pick:'库拉索+2.25', odds:'@2.03', modelProb:0.7061, reason:'科特R2对德国仅进1球→攻击力有限。库拉索R2 0-0证明能守。70.6%不输3球→+4.2pp'},
    ],
    analysis: {
      groupSituation: `**E组R3积分形势**\n\n德国6分(GD+7,锁定#1) | 科特迪瓦3分(GD 0) | 厄瓜多尔1分(GD-1) | 库拉索1分(GD-7)\n\n科特迪瓦赢=出线#2。平=4分(厄瓜需赢德国→德国锁#1但有路径优势HIGH→不太可能输)。库拉索GD-7已淘汰。\n\nE1→3A/B/C/D/F(Elo≈1700)优先路径,E2→2I(Elo≈1914挪威)→差距214!科特即使只能争#2也要尽量多进球以防德国翻车。`,
      lineup1Detail: `**库拉索 (5-4-1) — 希多夫**\n\nR1惨败德国1-7→def_residual=+3.50(历史级漏风,但对Elo1939德国→非完全意外)。R2 0-0厄瓜多尔→铁桶阵成功! 证明5-4-1低位防守有效(def_residual=-0.75→对厄瓜未丢球=远超预期)。1分已淘汰→今天为尊严而战。预计继续5-4-1铁桶。`,
      lineup2Detail: `**科特迪瓦 (4-3-3) — 加塞特**\n\nR1 1-0厄瓜多尔(高效)→R2 1-2德国(只输1球!防守韧性好)。3分。off_residual=+0.07(攻击中规中矩)。Haller(前阿贾克斯)+Pépé(前阿森纳)+Zaha(水晶宫)→个人能力碾压库拉索。Kessie(巴萨)+S.Fofana(朗斯)中场碾压。赢=出线→动力充分。`,
      styleAnalysis: `**库拉索**: 5-4-1低位大巴专家。R2 vs厄瓜证明可守90分钟。问题是德国1-7→强队能打穿。科特介于德国(碾压)和厄瓜(0进球)之间。\n\n**科特迪瓦**: 4-3-3进攻型但实际进球不多(2场2球)。依赖个人能力而非体系流畅。面对铁桶时可能创造力不足→需Kessie远射+Haller头球。`,
      tacticalNarrative: `库拉索\"已淘汰铁桶\"模式。⚠️ 注意:库拉索R2 0-0≠库拉索防守好——厄瓜多尔攻击力为零(off_residual=-2.05,2场0球!)。库拉索确实能守但对手攻击力是变量。\n\n科特迪瓦攻击力(Fofana/Haller/Pépé/Zaha)远强于厄瓜多尔。但科特2场进2球也不算凶猛。且库拉索在被德国打穿后→调整了防守(R2丢0球)→有学习曲线。\n\n科特大概率1-0或2-0赢球。库拉索的\"尊严大巴\"不会轻易崩溃(已淘汰=零压力=纯防守享受)。追让球深盘(-2.25)风险大。Under 3.25是最佳方向。`,
      modelInterpretation: `模型:科特72.2% vs Pinnacle市场82.4%\n\nGap=-10.2pp(market_higher,TYPE_A)。市场巨幅看好科特→合理(Elo差316+已淘汰对手)。\n\n⚠️ 但市场82.4%可能过激! 原因:①科特仅2场2球≠进球机器②库拉索R2证明能守③科特赢1-0/2-0也是赢→不穿盘。\n\nλ=0.58/2.06(total=2.64)。库拉索λ仅0.58(对厄瓜0进球+对德1球→进攻为零)。科特λ=2.06→预期进2球合理。\n\n方向:科特胜无value(72.2%<82.4%→-10.2pp)。让球+大小球找机会。`,
      betReasoning: `🎯 **Under 3.25(@1.94,+10.3pp)**: \n1. 科特2场进2球→攻击力有限\n2. 库拉索R2 0-0证明大巴有效\n3. 库拉索已淘汰→零压力→全力防守无后顾之忧(类似库拉索0-0厄瓜)\n4. 总λ=2.64→3+球概率49.2%→3.25线含quarterball折扣\n5. 模型Under=61.8%>需51.5%→+10.3pp\n\n🎯 **库拉索+2.25(@2.03,+4.2pp)**: \n1. 科特R2对德国仅1球→攻击力有限\n2. 库拉索R2 0-0=\"大巴已校准\"\n3. +2.25=不输3球即赢盘。70.6%>需49.3%→超额\n4. 科特可能1-0/2-0(赢球不穿盘)→+2.25覆盖此情景\n\n⚠️ 不做科特胜(负EV)`
    },
    commercialAnalysis: {
      summary: 'TYPE_A(市场>模型-10pp)。科特胜无value。Under 3.25(+10.3pp)最优。库拉索+2.25(+4.2pp)辅助。库拉索已淘汰=\'尊严大巴\'可复现R2 0-0模式。',
      approvedPicks: [
        { pick: 'Under 3.25', odds: '@1.94', verdict: 'approved', edge: '+10.3pp', reasoning: '科特2场2球+库拉索R2 0-0验证大巴+淘汰后零压力。模型61.8%>需51.5%', category: 'core' },
        { pick: '库拉索+2.25', odds: '@2.03', verdict: 'approved', edge: '+4.2pp', reasoning: '科特攻击力有限→大概率1-0/2-0。库拉索大巴经过R2校准', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '科特迪瓦胜', odds: '@1.19', verdict: 'rejected', edge: '-10.2pp', reasoning: '模型72.2%<82.4%→负EV。超低赔率无价值', category: 'trap' },
        { pick: 'Over 3.25', odds: '@1.93', verdict: 'rejected', edge: '-12pp', reasoning: '科特非进球机器。库拉索大巴+R2 0-0验证小球', category: 'trap' },
        { pick: '科特迪瓦-2.25', odds: '@1.87', verdict: 'rejected', edge: '-5.9pp(70.6%>但含推),实际穿盘率更低', reasoning: '科特穿深盘能力存疑(对强队也仅1球)。库拉索有尊严大巴', category: 'trap' },
      ],
      marketBehavior: '市场科特@1.19→82.4%→极端定价。市场过度外推Elo差316(忽略库拉索R2防守调整+科特自身攻击力一般)。Under是最佳信息不对称方向。',
      kellyNote: 'Under 3.25建议1.5%仓位(+10.3pp)。库拉索+2.25建议1%仓位。'
    },
    confidence: 'mid'
  },
  {
    team1: '厄瓜多尔', team2: '德国', group: 'E', ground: '纽约', time: '20:00 UTC-4',
    elo1: 1890, elo2: 1939, eloDiff: -49,
    model: { home: 0.2297, draw: 0.2486, away: 0.5217 },
    market: { home: 0.1780, draw: 0.1864, away: 0.6356, _note: 'Pinnacle (5.50/5.25/1.54, vig-removed)' },
    lambda: { home: 1.02, away: 1.66, total: 2.68 },
    gap: { team: '德国', value: -11.4, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: '桑切斯', coach2: '纳格尔斯曼',
    style1: 'R1 0-1负科特(平淡),R2 0-0平库拉索(灾难!对Elo1427无法进球→off_residual=-2.05,2场0球!)。1分。MUST-WIN但攻击线完全失灵!Caicedo(切尔西)中场有创造力但前场Estupiñán/Pacho→无终结者。防守尚可(def_residual=-0.75)。',
    style2: 'R1 7-1血洗库拉索(Musiala+Wirtz),R2 2-1胜科特(稳健)。6分,锁定#1。off_residual=+2.32(进攻超强!9球/2场)。lock #1+路径优势214(HIGH→保持状态=不轮休!)。可能小幅轮换1-2人但不影响体系。',
    lineup1: 'Dominguez; Preciado, Torres, Pacho, Estupiñán; Caicedo, Cifuentes, Páez; M.Caicedo, Valencia, Sarmiento',
    lineup2: 'ter Stegen; Kimmich, Tah, Schlotterbeck, Raum; Andrich, Gündoğan; Musiala, Wirtz, Sané; Havertz(或Füllkrug)',
    injuries1: '无重大伤情(但攻击力=0是结构性问题)', injuries2: '无重大伤情(可能轮换1人)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '德国(碾压)', reason: '德国9球/2场(off_residual=+2.32)=场均4.5球。厄瓜多尔0球/2场=历史级哑火。Caicedo中路对德国Gündoğan/Musiala=全面下风' },
      { area: '防守组织', advantage: '厄瓜多尔(微)', reason: 'def_residual=-0.75(2场仅丢1球→防守确实好)。但对手是科特(Lo1724)+库拉索(Lo1427)→含金量有限。面对德国攻击=真正考验' },
      { area: '比赛动力', advantage: '厄瓜多尔(生死)', reason: '厄瓜MUST-WIN否则出局。德国锁#1但路径优势214(HIGH)→纳格尔斯曼不轮休→保持比赛节奏' },
      { area: '战术纪律', advantage: '德国(大)', reason: '纳格尔斯曼体系成熟。德国即使小幅轮换→替补(Sané/Füllkrug)仍是世界级。厄瓜进攻失灵=即使拼命也未必能转化' },
    ],
    groupContext: `E组R3。德国6分(锁定#1,GD+7) | 科特迪瓦3分(GD 0) | 厄瓜多尔1分(GD-1) | 库拉索1分(GD-7)。\n\n厄瓜多尔必须赢才能出线! 如果科特胜库拉索→科特6分出线#2,厄瓜即使赢也最多4分(需最佳第三)。如果科特平→厄瓜赢=4分vs科特4分→比GD(厄瓜-1 vs科特0→厄瓜至少需赢2-0+科特平)。\n\n淘汰赛路径:E1→弱第3(Elo≈1700) vs E2→2I(Elo≈1914挪威)→差距214!德国有极强动力保持#1。`,
    handicaps: [
      {line:2.0, win:0.7726, draw:0, lose:0.2274},
      {line:1.5, win:0.6374, draw:0.2393, lose:0.1233},
      {line:1.0, win:0.4783, draw:0.2393, lose:0.2824, marketWin:'@1.98', marketLose:'@1.94', isMarketLine:true},
      {line:0.5, win:0.2889, draw:0, lose:0.7111},
      {line:0, win:0.2297, draw:0.2486, lose:0.5217},
      {line:-0.5, win:0.2297, draw:0, lose:0.7703},
    ],
    overUnder: [
      {line:1.5, over:0.7521, under:0.2479},
      {line:2.0, over:0.5857, under:0.4143},
      {line:2.5, over:0.4976, under:0.5024},
      {line:2.75, over:0.3913, under:0.6087, marketOver:'@1.84', marketUnder:'@2.08', isMarketLine:true},
      {line:3.0, over:0.2813, under:0.7187},
      {line:3.5, over:0.1904, under:0.8096},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 2.75', odds:'@2.08', modelProb:0.6087, reason:'厄瓜0球攻击(off_residual=-2.05)+德国锁#1→非必须大胜。模型60.9%>需48.1%→+12.8pp。德国仅需控场不失即可保持#1'},
      {type:'让球', pick:'厄瓜多尔+1.0', odds:'@1.98', modelProb:0.4783, reason:'厄瓜防守好(def_residual=-0.75,2场仅丢1球)+德国小胜即可。模型47.8%→需50.5%→薄edge但逻辑对'},
    ],
    analysis: {
      groupSituation: `**E组R3积分形势**\n\n德国6分(锁定#1,GD+7) | 科特迪瓦3分(GD 0) | 厄瓜多尔1分(GD-1) | 库拉索1分(GD-7)\n\n厄瓜MUST-WIN否则出局!同时需要科特不赢(平或负)→厄瓜需至少赢德国2-0(追GD-1→+1)才能超科特(如果科特平则4分)。\n\n德国锁#1但E1→弱第3(Elo≈1700) vs E2→挪威(Elo≈1914)→差距214!纳格尔斯曼有极强动力保持#1(不轮休主力)。\n\n同时进行:库拉索vs科特迪瓦。`,
      lineup1Detail: `**厄瓜多尔 (4-3-3) — 桑切斯**\n\nR1 0-1科特(R1正常,科特更强)→R2 0-0库拉索(灾难!对Elo1427无法进球→off_residual=-2.05,2场0球!)。Caicedo(切尔西,$146M)是中场唯一世界级。Estupiñán(Pacho)左路有冲击力。但前场终结者为零→Valencia(37岁,已过巅峰)。MUST-WIN→必须想办法进球。\n\n⚠️ 注意:厄瓜对库拉索0-0不是库拉索大巴强→是厄瓜攻击力太差(off_residual=-2.05,对Elo1427预期2.05球→实际0球!)。`,
      lineup2Detail: `**德国 (4-2-3-1) — 纳格尔斯曼**\n\nR1 7-1库拉索(碾压),R2 2-1科特(控制性胜利)。6分,GD+7,锁定#1。off_residual=+2.32→9球/2场=攻击火热! Musiala+Wirtz双核创造力世界顶级。Gündoğan节拍器。Havertz伪9或Füllkrug支点。\n\n⚠️ 锁#1=有轮换可能?但E1路径(弱第3,Elo≈1700) vs E2路径(挪威,Elo≈1914)→差距214=HIGH动力保持状态。纳帅大概率不会大轮换(可能换1人如Sané替Wirtz轮休)。`,
      styleAnalysis: `**厄瓜多尔**: 4-3-3控球型但最终产品为零(2场0球!)。Caicedo是唯一世界级中枢→但前场缺乏finisher。防守有组织(对科特丢1球+对库拉索0=2场丢1球)但含金量有限。今天面对德国真正攻击→防线将经受考验。\n\n**德国**: 4-2-3-1高压控球。Musiala+Wirtz创造力世界顶级。全队技术密度远高于厄瓜。不会大轮换(路径优势)→保持比赛节奏+控场风格。目标:1-2球领先→然后控局。非必须屠杀。`,
      tacticalNarrative: `E组末轮。德国锁#1但E1 vs E2差距214(HIGH动力)→纳帅不会\"放水\"。但也不会全力进攻屠杀——风险是受伤+消耗→最可能:正常发挥→1-2球领先→控局到终场。\n\n厄瓜MUST-WIN=会全力进攻。但2场0球→即使面对德国轮换后防,也没有证据表明厄瓜能进球。\n\n🔴 核心矛盾:厄瓜必须赢→会进攻(理论带来开放对攻=大球)。但厄瓜攻击力为零→进攻=给德国反击机会(可能德国多进球=大球)。\n\n⚠️ 两种可能:\nA) 德国正常发挥(控球70%+反击得分)→2-0/3-0→Over\nB) 德国控场不全力进攻+厄瓜进攻无用→1-0/0-0→Under\n\n我倾向B:德国锁#1→\"不受伤\"优先于\"多进球\"。纳帅会打控制型比赛。厄瓜虽然有Caicedo但前场无法终结。`,
      modelInterpretation: `模型:德国52.2% vs Pinnacle市场63.6%\n\nGap=-11.4pp(market_higher,TYPE_A)。市场巨幅看好德国。\n\nλ=1.02/1.66。厄瓜λ被off_residual=-2.05严重惩罚(lam1_raw=1.23→1.02)。德国λ=1.66(off_residual=+2.32加成后)。\n\n模型低估德国? 纳帅锁#1可能轮换→模型\"全主力\"假设可能高估德国实际输出。但市场63.6%可能也部分忽略轮换→实际概率可能在55-60%之间。\n\nCI95:德国胜[37.2%-66.8%]→市场63.6%在CI上限。方向不确定→不推胜平负。`,
      betReasoning: `🎯 **Under 2.75(@2.08,+12.8pp)**今日第二强Under:\n1. 厄瓜攻击力为零(off_residual=-2.05,2场0球)→即使德国轮换后防也未必丢球\n2. 德国锁#1→不会全力进攻→\"不受伤\"优先于屠杀\n3. 纳帅控场风格→德国大概率60-70%控球→低节奏\n4. 总λ=2.68→3+球概率50%→Under 2.75(含quarter折扣)=60.9%\n5. 模型60.9%>需48.1%→+12.8pp\n\n🎯 **厄瓜+1.0(@1.98)**薄edge:\n1. 厄瓜防守好(def_residual=-0.75,2场仅丢1球)\n2. 德国锁#1+非全力→可能仅赢1球\n3. 模型47.8%vs需50.5%→仅-2.7pp→但在轮换情境下实际概率更高\n\n⚠️ 不做德国胜(负EV)。不推Over(厄瓜不进球)。`
    },
    commercialAnalysis: {
      summary: 'TYPE_A(市场>模型-11.4pp)。德国锁#1→可能限功率。Under 2.75(+12.8pp)今日第二强。厄瓜+1.0薄edge但逻辑对。',
      approvedPicks: [
        { pick: 'Under 2.75', odds: '@2.08', verdict: 'approved', edge: '+12.8pp', reasoning: '厄瓜0球2场+德国锁#1控场不屠杀。模型60.9%>需48.1%', category: 'core' },
        { pick: '厄瓜多尔+1.0', odds: '@1.98', verdict: 'marginal', edge: '-2.7pp(但轮换情境更优)', reasoning: '德国锁#1可能仅赢1球。厄瓜防守好。实际概率在轮换后>50.5%', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '德国胜', odds: '@1.54', verdict: 'rejected', edge: '-11.4pp', reasoning: '模型52.2%<63.6%→负EV。锁#1+可能轮换→更无value', category: 'trap' },
        { pick: '德国-1.0', odds: '@1.94', verdict: 'rejected', edge: '-3.2pp', reasoning: '德国仅需小胜(控场非屠杀)。穿盘能力存疑→锁#1不必大胜', category: 'trap' },
        { pick: 'Over 2.75', odds: '@1.84', verdict: 'rejected', edge: '-14pp(39.1%<53.1%)', reasoning: '厄瓜不进球。德国非必须屠杀。仅39.1%>需54.3%→巨幅负EV', category: 'trap' },
      ],
      marketBehavior: '市场德国@1.54→63.6%可能未充分计入轮换+赛程管理影响。德国E1路径优势214(HIGH)→不会消极但也不会100%全力。市场可能过度定价Germany brand name。',
      kellyNote: 'Under 2.75建议1.5%仓位(+12.8pp,结构性强)。厄瓜+1.0建议0.5%仓位(薄edge但逻辑对)。'
    },
    confidence: 'mid'
  },
  {
    team1: '日本', team2: '瑞典', group: 'F', ground: '洛杉矶', time: '15:00 UTC-4',
    elo1: 1910, elo2: 1755, eloDiff: 155,
    model: { home: 0.5404, draw: 0.2297, away: 0.2299 },
    market: { home: 0.5109, draw: 0.2758, away: 0.2133, _note: 'Pinnacle (1.90/3.52/4.55, vig-removed)' },
    lambda: { home: 1.87, away: 1.15, total: 3.02 },
    gap: { team: '日本', value: 3.0, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-4-2', coach1: '森保一', coach2: '安德森',
    style1: 'R1 2-2荷兰(Mitoma+Minamino→强强平局!),R2 4-0血洗突尼斯(碾压!off_residual=+1.36→攻击火热)。4分,GD+4。平局即出线(5分)→但F1路径(2C≈1840) vs F2(1C≈1978巴西!)→差距138→有动力争#1! def_residual=-0.25(防守稳固)。',
    style2: 'R1 5-1血洗突尼斯(Isak爆发!),R2 1-5惨败荷兰(防线崩溃!def_residual=+4.25→对荷兰丢5球虽然荷兰强但仍是灾难)。3分。必须赢才能确保出线! off_residual=+1.70(攻击力强但防守是漏洞)。Isak+Gyökeres双锋=威胁极大。',
    lineup1: 'Suzuki; Sugawara, Itakura, Taniguchi, H.Ito; Morita, Endo; Dōan, Minamino, Mitoma; Ueda',
    lineup2: 'Olsen; Holm, Lindelöf, Hien, Augustinsson; Kulusevski, Cajuste, Larsson, Forsberg; Gyökeres, Isak',
    injuries1: '无重大伤情', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '进攻效率', advantage: '日本', reason: '日本off_residual=+1.36(Mitoma+Dōan+Minamino)。瑞典def_residual=+4.25(荷兰5球!防线崩塌)→日本将利用此漏洞' },
      { area: '攻击威胁', advantage: '瑞典(微)', reason: 'Isak+Gyökeres双锋vs荷兰进1球→有质量。日本def_residual=-0.25→防守稳但瑞典攻击力非突尼斯级别' },
      { area: '中场控制', advantage: '日本(大)', reason: 'Endo(利物浦)+Morita(葡体)→世界级双后腰。瑞典Cajuste+Larsson英冠级别→全面下风' },
      { area: '比赛节奏', advantage: '日本', reason: '森保一体系强调控球+耐心。平局即出线→不会慌乱。瑞典必须赢→被迫压上→暴露防线' },
      { area: '淘汰赛路径', advantage: '日本(中等)', reason: 'F1→2C(Elo≈1840摩洛哥) vs F2→1C(Elo≈1978巴西!)→争第1动力中等(+138Elo差距)' },
    ],
    groupContext: `F组R3! 荷兰4分(GD+4) | 日本4分(GD+4) | 瑞典3分(GD 0) | 突尼斯0分(GD-9)。\n\n日本平局→5分→出线(除非瑞典赢+荷兰大败突尼斯→3队5分)。日本赢→7分→争头名。瑞典必须赢→否则出局(除非荷兰输+比GD→但荷兰vs已淘汰突尼斯→荷兰几乎稳赢)。\n\nF1→2C(Elo≈1840摩洛哥) vs F2→1C(Elo≈1978巴西)。差距138(MEDIUM)→日本有动力争#1但非生死。\n\n同时进行:突尼斯vs荷兰。`,
    handicaps: [
      {line:-1.5, win:0.3115, draw:0, lose:0.6885},
      {line:-1.0, win:0.3115, draw:0.2296, lose:0.4589},
      {line:-0.75, win:0.4263, draw:0, lose:0.5737},
      {line:-0.5, win:0.5404, draw:0, lose:0.4596, marketWin:'@1.90', marketLose:'@2.00', isMarketLine:true},
      {line:0, win:0.5404, draw:0.2297, lose:0.2299},
      {line:0.5, win:0.7703, draw:0, lose:0.2297},
    ],
    overUnder: [
      {line:1.5, over:0.8009, under:0.1991},
      {line:2.0, over:0.6573, under:0.3427},
      {line:2.5, over:0.5812, under:0.4188, marketOver:'@1.93', marketUnder:'@1.96', isMarketLine:true},
      {line:3.0, over:0.3586, under:0.6414},
      {line:3.5, over:0.2693, under:0.7307},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Over 2.5', odds:'@1.93', modelProb:0.5812, reason:'今日最高总λ=3.02! 日本攻击火热+瑞典防守漏洞(对荷兰丢5球)。双方都能进→开放对攻。模型58.1%>需51.8%→+6.3pp'},
      {type:'胜平负', pick:'日本胜', odds:'@1.90', modelProb:0.5404, reason:'Elo+155+日本近期状态远优(endō/Mitoma世界级)。模型54.0%>需52.6%→+1.4pp(薄但正)'},
    ],
    analysis: {
      groupSituation: `**F组R3积分形势**\n\n荷兰4分(GD+4) | 日本4分(GD+4) | 瑞典3分(GD 0) | 突尼斯0分(GD-9)\n\n日本平局=5分→出线(F1或F2取决于荷兰vs突尼斯结果)。日本赢=7分→大概率F1。瑞典必须赢→否则出局(荷兰vs突尼斯几乎稳赢→荷兰≥5分)。\n\nF1→2C(Elo≈1840) vs F2→1C(Elo≈1978巴西)→差距138(MEDIUM)。争#1有动力但非生死。\n\n同时进行:突尼斯vs荷兰(荷兰大概率赢→至少5分→日本平局即可出线F2)。`,
      lineup1Detail: `**日本 (4-2-3-1) — 森保一**\n\nR1 2-2荷兰(Mitoma左脚世界波+Dōan→战平顶级强队!off_residual=+2.0!)→R2 4-0突尼斯(碾压)。4分,GD+4。off_residual=+1.36,def_residual=-0.25→攻守均衡且攻击火热! Endo(利物浦队长)+Morita(葡体)→世界级双后腰。Mitoma(布莱顿)+Dōan(弗赖堡)边路爆破。Minamino(摩纳哥)前腰串联。Ueda(费耶诺德)支点。\n\n森保一\"平局即出线但争#1\"→不会保守。日本世界杯淘汰赛经验丰富(2022胜德国/西班牙)。`,
      lineup2Detail: `**瑞典 (4-4-2) — 安德森**\n\nR1 5-1突尼斯(Isak梅开二度!Kulusevski穿针引线),R2 1-5惨败荷兰(防线彻底崩塌!def_residual=+4.25→对荷兰丢5球虽荷兰强但5球是灾难)。3分。off_residual=+1.70(Isak+Gyökeres双锋有质量)。但def_residual=+1.75(防守大漏洞!对荷兰被任意撕扯)。必须赢→会全力进攻→防线更暴露。`,
      styleAnalysis: `**日本**: 4-2-3-1控球+转换型。森保一体系成熟(2022世界杯验证)。Endo+Morita双后腰提供世界级屏障→解放前方四人组创造机会。Mitoma左路一对一世界顶级。弱点:防空(Ueda非高大中锋)。\n\n**瑞典**: 4-4-2北欧力量型。Isak(纽卡)+Gyökeres(葡体)双锋在世界杯合计已进3球→攻击力确实强。但防线被荷兰5球打穿→问题在体系而非个体(荷兰5球来自4次反击+1次定位球=体系性漏风)。面对日本传控→可能再次暴露。`,
      tacticalNarrative: `今日最佳比赛!日本控球vs瑞典反击的经典对决。\n\n⚽ 双方攻击力历史级:\n- 日本:2场6球,off_residual=+1.36(对荷兰2球+对突尼斯4球)\n- 瑞典:2场6球(对荷兰5-1:只进1球但进攻端也确实有产出)。off_residual=+1.70\n\n🛡️ 双方防守:\n- 日本:def_residual=-0.25(仅丢2球=稳固)\n- 瑞典:def_residual=+1.75(丢6球=大漏洞!)\n\n🔴 关键:瑞典必须赢=会进攻→防线更暴露→日本反击+控球将惩罚瑞典防守漏洞。\n\n预期:开放对攻(>2.5球→概率高)。日本赢面大(Elo+155+攻防更均衡)。可能比分:日本2-1/3-1。`,
      modelInterpretation: `模型:日本54.0% vs Pinnacle市场51.1%\n\nGap=+3.0pp(微弱model_higher)。模型与市场高度一致→定价有效。\n\nλ=1.87/1.15(total=3.02→今日最高!)。日本λ=1.87(off_residual=+1.36+Elo diff加成)。瑞典λ=1.15(off_residual=+1.70但被日本防守牵制)。\n\nCI95:日本胜[38.9-68.4%]→市场51.1%在CI内。\n\n⚠️ Gap仅+3pp=噪音级别。日本胜@1.90→需52.6%→模型54.0%→仅+1.4pp薄edge。\n\nDirection信号不强。大小球是更好方向。`,
      betReasoning: `🎯 **Over 2.5(@1.93,+6.3pp)**今日最佳Over:\n1. 总λ=3.02→P(≥3球)=58.1%→今日最高\n2. 日本攻击火热(6球/2场) vs 瑞典防守漏洞(6球丢/2场)\n3. 瑞典必须赢→进攻=日本反击得分=≥3球高概率\n4. 双方都已展示世界杯进球能力(非0球死守型)\n5. F组唯一不适用R3小球规则的比赛(MUST-WIN vs争头名=开放)\n\n🎯 **日本胜(@1.90,+1.4pp)**:\n1. Elo+155+攻防更均衡\n2. 日本vs荷兰2-2证明能对顶级对手进球→对瑞典防守漏洞更轻松\n3. 森保一杯赛体系成熟→\"争#1\"会正常发挥\n4. 薄edge→适合做小注或组合过关\n\n⚠️ 不做日本-0.5(模型54.0% vs需52.6%→仅+1.4pp→handicap赔率更低→可能负EV)`
    },
    commercialAnalysis: {
      summary: '今日最佳比赛! Over 2.5(+6.3pp,总λ=3.02最高)核心pick。日本胜(+1.4pp)薄edge。瑞典防守漏洞(def_residual=+1.75)是最强信号。',
      approvedPicks: [
        { pick: 'Over 2.5', odds: '@1.93', verdict: 'approved', edge: '+6.3pp', reasoning: 'λ=3.02今日最高。双方攻击火热+瑞典防守漏洞。MUST-WIN→开放对攻', category: 'core' },
        { pick: '日本胜', odds: '@1.90', verdict: 'approved', edge: '+1.4pp(薄)', reasoning: 'Elo+155+攻防更均衡。对荷兰2-2验证质量。薄edge但方向正确→小注或组合', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '瑞典胜', odds: '@4.55', verdict: 'rejected', edge: '-1.3pp(23%<21.3%)', reasoning: '方向不符。瑞典防守漏洞+日本控球→瑞典赢概率实际可能更低', category: 'trap' },
        { pick: 'Under 2.5', odds: '@1.96', verdict: 'rejected', edge: '-8pp(41.8%<49.6%)', reasoning: '最高λ比赛推Under=逆结构。MUST-WIN+双方攻击力=不适用小球', category: 'trap' },
      ],
      marketBehavior: '市场日本@1.90→51.1%定价有效。Over 2.5→定价50.4%=市场预期开放。双方攻击力被定价但瑞典防守漏洞(def_residual=+1.75)可能被低估。',
      kellyNote: 'Over 2.5建议1.5%仓位(+6.3pp,核心)。日本胜建议0.5-1%仓位(+1.4pp薄,小注)。'
    },
    confidence: 'high'
  },
  {
    team1: '突尼斯', team2: '荷兰', group: 'F', ground: '休斯顿', time: '15:00 UTC-4',
    elo1: 1585, elo2: 1944, eloDiff: -359,
    model: { home: 0.0592, draw: 0.1433, away: 0.7975 },
    market: { home: 0.0316, draw: 0.0853, away: 0.8831, _note: 'Pinnacle (31.0/11.50/1.11, vig-removed)' },
    lambda: { home: 0.53, away: 2.46, total: 2.98 },
    gap: { team: '荷兰', value: -8.6, direction: 'market_higher' },
    formation1: '5-3-2', formation2: '4-3-3', coach1: '卡德里', coach2: '科曼',
    style1: 'R1 1-5惨败瑞典(防守崩溃),R2 0-4日本(再次被碾压)。0分,GD-9,已淘汰。def_residual=+3.25(历史级漏风,9球/2场!)。off_residual=-0.29(攻击也乏善)。今天\"荣誉之战\"→可能摆大巴避免更大耻辱。',
    style2: 'R1 2-2日本(Gakpo+De Jong→强强对攻),R2 5-1血洗瑞典(Gakpo帽子戏法!off_residual=+1.96→火力全开)。4分,GD+4。赢=大概率F1(F1→2C vs F2→1C巴西→差距138→有动力争#1)。不会轮休。防线def_residual=+0.25(对日本丢2球=略有漏洞)。',
    lineup1: 'Ben Said; Talbi, Meriah, Bronn; Abdi, Skhiri, Laïdouni, Dräger; Ben Romdhane, Msakn; Jaziri',
    lineup2: 'Verbruggen; Dumfries, De Vrij, Van Dijk, Aké; De Jong, Koopmeiners, Gravenberch; Malen, Gakpo, Simons',
    injuries1: '无重大伤情(但整体实力与荷兰差距巨大)', injuries2: '无重大伤情(可能小幅轮换1人)',
    tacticalMatchup: [
      { area: '综合实力', advantage: '荷兰(碾压)', reason: 'Elo差359=Dixon-Coles ρ=0.02已最小化draw。荷兰Gakpo(帽戏状态!)+Van Dijk=世界级' },
      { area: '防守组织', advantage: '荷兰(碾压)', reason: '突尼斯def_residual=+3.25(9球/2场!)。荷兰5-1瑞典证明攻击力可任意撕扯弱队防线' },
      { area: '比赛动力', advantage: '荷兰(大)', reason: '荷兰赢=大概率F1(有利淘汰赛路径)。突尼斯已淘汰→\"荣誉之战\"但0-9净胜球→心气全无' },
      { area: '轮换影响', advantage: '突尼斯(微)', reason: '荷兰可能小幅轮换1-2人为淘汰赛留力→但不影响整体碾压' },
    ],
    groupContext: `F组R3。荷兰4分(GD+4) | 日本4分(GD+4) | 瑞典3分(GD 0) | 突尼斯0分(GD-9)。\n\n荷兰赢=7分→F1(除非日本也赢且比GD→日本+4 vs荷兰当前+4)。荷兰平=5分→出线(瑞典最多6分但需赢日本)。突尼斯已淘汰(GD-9,+需瑞典输+比GD→实际上不可能)。\n\nF1→2C(Elo≈1840) vs F2→1C(Elo≈1978巴西)。差距138(MEDIUM)→荷兰有动力赢且多进球争#1。\n\n同时进行:日本vs瑞典。`,
    handicaps: [
      {line:3.5, win:0.7462, draw:0, lose:0.2538},
      {line:3.0, win:0.7462, draw:0.2229, lose:0.0309},
      {line:2.75, win:0.6347, draw:0, lose:0.3653, marketWin:'@2.01', marketLose:'@1.88', isMarketLine:true},
      {line:2.5, win:0.5233, draw:0.2229, lose:0.2538},
      {line:2.0, win:0.4010, draw:0.2303, lose:0.3687},
      {line:1.5, win:0.2776, draw:0.2229, lose:0.4995},
      {line:0, win:0.0592, draw:0.1433, lose:0.7975},
    ],
    overUnder: [
      {line:2.0, over:0.8354, under:0.1646},
      {line:2.5, over:0.7355, under:0.2645},
      {line:3.0, over:0.6089, under:0.3911},
      {line:3.5, over:0.4679, under:0.5321, marketOver:'@2.02', marketUnder:'@1.85', isMarketLine:true},
      {line:4.0, over:0.3469, under:0.6531},
      {line:4.5, over:0.2394, under:0.7606},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 3.5', odds:'@1.85', modelProb:0.5321, reason:'突尼斯已淘汰→可能死守避免更大耻辱。荷兰赢球即可(不必屠杀)。3.5是深线。模型53.2%>需54.1%→薄但结构正确'},
      {type:'让球', pick:'突尼斯+2.75', odds:'@2.01', modelProb:0.6347, reason:'荷兰大概率赢2-3球但突尼斯淘汰后死守→深盘风险。模型63.5%不输3球→需49.8%→+13.7pp'},
    ],
    analysis: {
      groupSituation: `**F组R3积分形势**\n\n荷兰4分(GD+4) | 日本4分(GD+4) | 瑞典3分(GD 0) | 突尼斯0分(GD-9)\n\n荷兰赢=7分→大概率F1(除非日本也赢且GD超→日本+4vs荷兰当前+4→都赢则比进球数→荷兰2场7球vs日本6球)。荷兰平=5分→F2(瑞典最多6分→需赢日本)。\n\n突尼斯GD-9已淘汰。\n\n淘汰赛:F1→2C(Elo≈1840) vs F2→1C(Elo≈1978巴西)。差距138→有动力争#1。`,
      lineup1Detail: `**突尼斯 (5-3-2) — 卡德里**\n\nR1 1-5瑞典→R2 0-4日本→两场溃败! def_residual=+3.25(对瑞典丢5球+对日本丢4球=9球!)。没有一场是\"差点守住的\"(def_residual全部为正=每次都丢球超预期)。0分已淘汰→心理崩溃。可能摆大巴最保守的5-4-1,目标=避免输5+球。`,
      lineup2Detail: `**荷兰 (4-3-3) — 科曼**\n\nR1 2-2日本(强强对攻,Gakpo+De Jong),R2 5-1血洗瑞典(Gakpo帽子戏法!off_residual=+1.96)。4分,GD+4。def_residual=+0.25(对日本丢2球→略有漏洞但对瑞典仅丢1球→防守在进步)。赢=大概率F1→有利淘汰赛路径。科曼不会大轮换→正常发挥即可。De Jong(巴萨)+Van Dijk(利物浦)+Gakpo(利物浦)=世界级中轴线。`,
      styleAnalysis: `**突尼斯**: 5-3-2摆大巴但阵容质量不足以对抗世界级球队。两场溃败后信心全无。即使摆大巴→面对荷兰Gakpo+De Jong→可能仍是溃败。但\"荣誉之战\"至少会试图不丢5球。\n\n**荷兰**: 4-3-3全攻全守。科曼体系攻防均衡。Gakpo状态火热(帽戏!)=3场5球。De Jong控制节奏。Van Dijk防空+组织。目标是:上半场2-0→下半场控场→保存体力→净胜球+2或+3即可。不会追求屠杀(没意义+风险)。`,
      tacticalNarrative: `最不均衡的比赛(Elo差359,Gakpo帽子戏法vs突尼斯2场9球丢)。\n\n🔴 核心问题:荷兰会屠杀吗?\n\nAn argument for Over:突尼斯防线崩溃(def_residual=+3.25),荷兰攻击火热(8球/2场)→5-0/6-0? \n\nAn argument for Under:荷兰赢球即可(不需屠杀→\"赢+保存体力\"优先)→2-0或3-0足矣。突尼斯可能死守5-4-1(输2-0好过输6-0)→降低节奏。\n\n⚠️ 6/24教训:TYPE_C中的碾压场→Over 3.0 ALL失败(波黑3-1+摩洛哥4-2=大球,但都是MUST-WIN/MUST-GD场景)。这里的结构不同:荷兰只需赢(不必追GD→日本vs瑞典结果未知)。\n\n倾向:荷兰2-0/3-0型胜利。Under 3.5是结构正确的方向。`,
      modelInterpretation: `模型:荷兰79.8% vs Pinnacle市场88.3%\n\nGap=-8.6pp(market_higher)。市场巨幅看好荷兰→合理(Elo差359+状态差距)。\n\nλ=0.53/2.46(total=2.98)。突尼斯λ仅0.53(off_residual=-0.29→实际0球级)。荷兰λ=2.46(off_residual=+1.96→预期2.5球)。\n\nCI95:荷兰胜[65.0-89.3%]→市场88.3%接近CI上限。模型认为市场可能略高估→但差距小。\n\n方向:荷兰胜无value(79.8%<88.3%→-8.6pp负EV)。@1.11更是垃圾赔率。`,
      betReasoning: `🎯 **突尼斯+2.75(@2.01,+13.7pp)**:\n1. 荷兰只需赢(不必屠杀)→2-0/3-0足够→+2.75覆盖\n2. 突尼斯淘汰后可能死守避免惨案→\"荣誉大巴\"\n3. 荷兰可能轮换(Gakpo踢60分钟)→下半场功率降低\n4. 模型63.5%不输3球→需49.8%→+13.7pp\n5. ⚠️ 风险:如果荷兰上半场3-0→下半场可能轻松加码\n\n🎯 **Under 3.5(@1.85)**薄edge:\n1. 3.5深线→需要4+球\n2. 荷兰2-0或3-0=Under 3.5\n3. 模型53.2%→需54.1%→仅-0.9pp(基本打平)\n4. 在\"荷兰不需屠杀\"情境下→实际Under概率更高\n\n⚠️ 不做荷兰方向(赔率垃圾+负EV)`
    },
    commercialAnalysis: {
      summary: '最悬殊比赛(Elo差359)。突尼斯+2.75(+13.7pp)核心pick(深盘价值)。Under 3.5薄edge。荷兰方向全负EV。',
      approvedPicks: [
        { pick: '突尼斯+2.75', odds: '@2.01', verdict: 'approved', edge: '+13.7pp', reasoning: '荷兰只需赢不必屠杀。突尼斯淘汰后死守。模型63.5%>需49.8%', category: 'core' },
        { pick: 'Under 3.5', odds: '@1.85', verdict: 'marginal', edge: '-0.9pp(但结构对)', reasoning: '3.5深线+荷兰非必须屠杀。模型/市场基本持平但在\"控场\"情境更优', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '荷兰胜', odds: '@1.11', verdict: 'rejected', edge: '-8.6pp', reasoning: '超低赔率+负EV。模型79.8%<88.3%。即使猜对也没钱赚', category: 'trap' },
        { pick: '荷兰-2.75', odds: '@1.88', verdict: 'rejected', edge: '-17pp(25.8%<51.7%)', reasoning: '荷兰不必屠杀。+2.75才是value方向。穿深盘概率仅25.8%', category: 'trap' },
        { pick: 'Over 3.5', odds: '@2.02', verdict: 'rejected', edge: '-1.1pp(46.8%<47.8%)', reasoning: '荷兰控场不需要4+球。突尼斯死守降低总球', category: 'trap' },
      ],
      marketBehavior: '市场荷兰@1.11=88.3%极端定价。荷兰-2.75→51.7%市场看好穿深盘。但模型仅25.8%穿盘→市场可能高估Gakpo\"帽子戏法\"的可持续性(帽子戏法不每天发生)。',
      kellyNote: '突尼斯+2.75建议1-1.5%仓位(+13.7pp)。Under 3.5建议0.5%仓位(边缘)或不参与。'
    },
    confidence: 'mid'
  },
]

export const goalDistributions: Record<string, GoalDistribution> = {
  '土耳其vs美国': { team1: '土耳其', team2: '美国', diffs: {'-4':0.026,'-3':0.059,'-2':0.135,'-1':0.225,'0':0.262,'1':0.174,'2':0.081,'3':0.028,'4':0.007} },
  '巴拉圭vs澳大利亚': { team1: '巴拉圭', team2: '澳大利亚', diffs: {'-4':0.023,'-3':0.055,'-2':0.130,'-1':0.223,'0':0.267,'1':0.179,'2':0.084,'3':0.028,'4':0.008} },
  '库拉索vs科特迪瓦': { team1: '库拉索', team2: '科特迪瓦', diffs: {'-5':0.036,'-4':0.068,'-3':0.140,'-2':0.222,'-1':0.252,'0':0.188,'1':0.069,'2':0.017,'3':0.003} },
  '厄瓜多尔vs德国': { team1: '厄瓜多尔', team2: '德国', diffs: {'-5':0.012,'-4':0.030,'-3':0.079,'-2':0.161,'-1':0.239,'0':0.249,'1':0.146,'2':0.060,'3':0.018} },
  '日本vs瑞典': { team1: '日本', team2: '瑞典', diffs: {'-3':0.021,'-2':0.062,'-1':0.140,'0':0.230,'1':0.230,'2':0.166,'3':0.089,'4':0.038,'5':0.013} },
  '突尼斯vs荷兰': { team1: '突尼斯', team2: '荷兰', diffs: {'-5':0.066,'-4':0.099,'-3':0.171,'-2':0.230,'-1':0.223,'0':0.143,'1':0.047,'2':0.011,'3':0.002} },
}

export const tournamentStats: TournamentStats = {
  totalMatches: 56, totalGoals: 135, avgGoals: 2.41,
  homeWins: 25, draws: 17, awayWins: 14,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '葡萄牙 5-0 乌兹别克', scorer: '待补充', date: '2026-06-23' }
}

export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '土耳其vs美国': {
    summary: '美国锁#1轮换+土耳其0球→Under 2.75(+11.6pp)今日最强Under。土耳其+0.5(+5.0pp)辅助。方向无value。',
    approvedPicks: [
      { pick: 'Under 2.75', odds: '@2.00', verdict: 'approved', edge: '+11.6pp', reasoning: '土耳其2场0球+美国锁#1轮换→结构性小球。61.6%>48.6%', category: 'core' },
      { pick: '土耳其+0.5', odds: '@1.99', verdict: 'approved', edge: '+5.0pp', reasoning: '美国锁#1→轮换2-3主力。土耳其防守韧性(def_residual=+0.25)', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '美国胜', odds: '@1.92', verdict: 'rejected', edge: '-7.4pp', reasoning: '模型44.7%<52.1%→负EV', category: 'trap' },
    ],
    marketBehavior: '市场美国@1.92→50.6%已充分定价。但锁#1轮换影响未充分计入。Under 2.75是最佳信息不对称方向。',
    kellyNote: 'Under 2.75建议1.5%仓位。土耳其+0.5建议1%仓位。'
  },
  '巴拉圭vs澳大利亚': {
    summary: 'Model-Market最大分歧(+20.5pp)。澳洲+0.25(+13.2pp)安全value表达。Over 1.75(+6.6pp)基于MUST-WIN→开放对攻。',
    approvedPicks: [
      { pick: '澳大利亚+0.25', odds: '@1.76', verdict: 'approved', edge: '+13.2pp', reasoning: 'Elo+59+平局即出线退守。70%不败>56.8%', category: 'core' },
      { pick: 'Over 1.75', odds: '@1.87', verdict: 'approved', edge: '+6.6pp', reasoning: 'MUST-WIN必须进攻→开放对攻。60.1%>53.5%', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '澳大利亚胜', odds: '@4.25', verdict: 'rejected', edge: '结构盲点风险', reasoning: '+20.5pp可能为POISSON保守战术盲点。+0.25更安全', category: 'trap' },
    ],
    marketBehavior: '市场平局42.1%=巨幅高于模型26.7%。市场在保守战术定价上正确。澳洲+0.25绕过平局问题。',
    kellyNote: '澳洲+0.25建议1.5%仓位。Over 1.75建议1%仓位。'
  },
  '库拉索vs科特迪瓦': {
    summary: 'TYPE_A(市场>模型-10pp)。科特胜无value。Under 3.25(+10.3pp)最优。库拉索+2.25(+4.2pp)辅助。',
    approvedPicks: [
      { pick: 'Under 3.25', odds: '@1.94', verdict: 'approved', edge: '+10.3pp', reasoning: '科特2场2球+库拉索R2 0-0大巴。61.8%>51.5%', category: 'core' },
      { pick: '库拉索+2.25', odds: '@2.03', verdict: 'approved', edge: '+4.2pp', reasoning: '科特攻击有限→1-0/2-0型胜利。大巴经过校准', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '科特迪瓦胜', odds: '@1.19', verdict: 'rejected', edge: '-10.2pp', reasoning: '超低赔率+负EV', category: 'trap' },
    ],
    marketBehavior: '市场科特@1.19→82.4%极端定价。过度外推Elo差316忽略了科特攻击力有限+库拉索R2防守调整。',
    kellyNote: 'Under 3.25建议1.5%仓位。库拉索+2.25建议1%仓位。'
  },
  '厄瓜多尔vs德国': {
    summary: 'TYPE_A。德国锁#1→限功率。Under 2.75(+12.8pp)今日第二强。厄瓜+1.0薄edge但逻辑对。',
    approvedPicks: [
      { pick: 'Under 2.75', odds: '@2.08', verdict: 'approved', edge: '+12.8pp', reasoning: '厄瓜0球+德国锁#1控场不屠杀。60.9%>48.1%', category: 'core' },
      { pick: '厄瓜多尔+1.0', odds: '@1.98', verdict: 'marginal', edge: '-2.7pp(轮换情境更优)', reasoning: '德国可能仅赢1球。厄瓜防守好。轮换后实际概率更高', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '德国胜', odds: '@1.54', verdict: 'rejected', edge: '-11.4pp', reasoning: '锁#1+轮换→无value', category: 'trap' },
      { pick: 'Over 2.75', odds: '@1.84', verdict: 'rejected', edge: '-14pp', reasoning: '厄瓜不进球+德国非屠杀', category: 'trap' },
    ],
    marketBehavior: '德国@1.54→63.6%未充分计入轮换影响。市场可能过度定价German brand。',
    kellyNote: 'Under 2.75建议1.5%仓位。厄瓜+1.0建议0.5%仓位。'
  },
  '日本vs瑞典': {
    summary: '今日最佳比赛! Over 2.5(+6.3pp,λ=3.02最高)核心pick。日本胜(+1.4pp)薄edge。瑞典防守漏洞是最大信号。',
    approvedPicks: [
      { pick: 'Over 2.5', odds: '@1.93', verdict: 'approved', edge: '+6.3pp', reasoning: 'λ=3.02今日最高。双方攻击火热+瑞典防守漏洞。MUST-WIN→开放对攻', category: 'core' },
      { pick: '日本胜', odds: '@1.90', verdict: 'approved', edge: '+1.4pp(薄)', reasoning: 'Elo+155+攻防更均衡。薄但方向正确→小注', category: 'value' },
    ],
    rejectedPicks: [
      { pick: 'Under 2.5', odds: '@1.96', verdict: 'rejected', edge: '-8pp', reasoning: '最高λ比赛推Under=逆结构', category: 'trap' },
    ],
    marketBehavior: 'Over 2.5定价50.4%合理。双方攻击力被定价但瑞典防守漏洞(def_residual=+1.75)可能被低估。',
    kellyNote: 'Over 2.5建议1.5%仓位。日本胜建议0.5-1%仓位。'
  },
  '突尼斯vs荷兰': {
    summary: '最悬殊(Elo差359)。突尼斯+2.75(+13.7pp)核心pick。Under 3.5薄edge。荷兰方向全负EV。',
    approvedPicks: [
      { pick: '突尼斯+2.75', odds: '@2.01', verdict: 'approved', edge: '+13.7pp', reasoning: '荷兰只需赢不必屠杀。63.5%不输3球>49.8%', category: 'core' },
      { pick: 'Under 3.5', odds: '@1.85', verdict: 'marginal', edge: '-0.9pp(但结构对)', reasoning: '3.5深线+荷兰非必须屠杀', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '荷兰胜', odds: '@1.11', verdict: 'rejected', edge: '-8.6pp', reasoning: '超低赔率+负EV', category: 'trap' },
      { pick: '荷兰-2.75', odds: '@1.88', verdict: 'rejected', edge: '-17pp', reasoning: '荷兰不必屠杀。25.8%穿盘', category: 'trap' },
    ],
    marketBehavior: '荷兰@1.11极端定价。市场高估Gakpo帽子戏法可持续性。',
    kellyNote: '突尼斯+2.75建议1-1.5%仓位。Under 3.5建议0.5%仓位或不参与。'
  },
}
