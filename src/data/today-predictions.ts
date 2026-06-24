import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/24 (B/C组R3 — 生死战+已出线,λ衰减0.85/0.75) ======
// ✅ market数据来源: Pinnacle (The Odds API, 实时盘口) — 6/24实时
// ✅ 6/23校准规则已应用: TYPE_A禁止逆向/3分铁桶/R3 λ衰减
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '波黑', team2: '卡塔尔', group: 'B', ground: '多伦多', time: '15:00 UTC-4',
    elo1: 1616, elo2: 1447, eloDiff: 169,
    model: { home: 0.7766, draw: 0.1561, away: 0.0639 },
    market: { home: 0.6841, draw: 0.1830, away: 0.1329, _note: 'Pinnacle (1.41/5.27/7.26, vig-removed)' },
    lambda: { home: 2.27, away: 0.50, total: 2.77 },
    gap: { team: '波黑', value: -9.3, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-5-1', coach1: '巴比奇', coach2: '洛佩斯',
    style1: 'R1平加拿大1-1(还行),R2惨败瑞士1-4(崩溃)。Džeko核心但阵容质量有限。今天必须赢否则出局。',
    style2: 'R1 90+4扳平瑞士1-1(精神力!),R2惨败加拿大0-6(士气崩盘)。Elo1447=48队最弱之二。已基本淘汰。',
    lineup1: 'Vasilj; Kolašinac, Ahmedhodžić, Katic; Gazibegovic, Pjanic, Krunic, Civic; Dzeko, Demirovic, Gigovic',
    lineup2: 'Al-Sheeb; Pedro Miguel, Al-Rawi, Khoukhi, Hassan; Madibo, Boudiaf; Al-Haydos, Afif, Ali; Almoez',
    injuries1: '无重大伤情', injuries2: '无重大伤情(士气极低)',
    tacticalMatchup: [
      { area: 'Džeko vs 卡塔尔防线', advantage: '波黑', reason: '卡塔尔R2丢6球→防线已完全崩塌' },
      { area: '中场控制', advantage: '波黑', reason: 'Pjanić技术型中场。卡塔尔Madibo/Boudiaf对抗力不足' },
      { area: '心理状态', advantage: '波黑(微)', reason: '波黑MUST-WIN有动力。但卡塔尔R1 90+4证明仍有精神力' },
    ],
    groupContext: `B组R3。波黑1分(平加拿大+负瑞士)→必须赢且看其他结果。卡塔尔1分(平瑞士+0-6惨败)→几乎淘汰。波黑动力远强于卡塔尔。`,
    handicaps: [
      {line:-2, win:0.3938, draw:0.2411, lose:0.3649},
      {line:-1.5, win:0.6349, draw:0, lose:0.3649},
      {line:-1.25, win:0.5980, draw:0, lose:0.3986, marketWin:'@1.88', marketLose:'@2.02', isMarketLine:true},
      {line:-1, win:0.5384, draw:0.2411, lose:0.2200},
      {line:-0.5, win:0.7795, draw:0, lose:0.2205},
      {line:0, win:0.7766, draw:0.1561, lose:0.0639},
    ],
    overUnder: [
      {line:1.5, over:0.7410, under:0.2590},
      {line:2.5, over:0.5227, under:0.4739},
      {line:3.0, over:0.4117, under:0.5849, marketOver:'@1.95', marketUnder:'@1.93', isMarketLine:true},
      {line:3.5, over:0.2855, under:0.7145},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'波黑-1.25', odds:'@1.88', modelProb:0.5980, reason:'TYPE_C(模型>市场+9.3pp)。波黑MUST-WIN vs 卡塔尔0-6崩盘。模型59.8%>需53.2%→+6.6pp'},
      {type:'大小球', pick:'Under 3.0', odds:'@1.93', modelProb:0.5849, reason:'R3 λ衰减后total=2.77。卡塔尔无进攻动力+波黑可能1-2球解决→小球'},
    ],
    analysis: {
      groupSituation: `**B组R3积分形势**\n\n瑞士4分(GD+3) | 加拿大4分(GD+6) | 波黑1分(GD-3) | 卡塔尔1分(GD-5)\n\n本场同时进行瑞士vs加拿大(头名战)。波黑必须赢+看瑞加结果才有出线希望(最佳第三)。卡塔尔GD-5几乎淘汰。`,
      lineup1Detail: `**波黑 (4-3-3) — 巴比奇**\n\nR1平加拿大1-1尚可,R2惨败瑞士1-4暴露防守问题。Džeko领衔攻击线。Pjanić控节奏。今天MUST-WIN全力以赴。`,
      lineup2Detail: `**卡塔尔 (4-5-1) — 洛佩斯**\n\nR1 90+4扳平瑞士1-1展现精神力!但R2 0-6加拿大完全崩盘。Elo1447(48队倒数第二)。已淘汰但亚洲杯冠军底子仍在。可能求体面结束。`,
      styleAnalysis: `**波黑**: 中东欧力量+技术混合。Džeko支点+Pjanić分球。R2 1-4暴露高位被反击问题。今天预计更稳健,不会高位冒险。\n\n**卡塔尔**: 2023亚洲杯冠军底子。Afif+Almoez有个人能力。但R2 0-6后心理层面崩塌。可能出于尊严防守但无法持续90分钟。`,
      tacticalNarrative: `B组R3生死战。波黑MUST-WIN(否则1分出局) vs 卡塔尔已淘汰(0-6后无动力)。结构上波黑碾压(Elo+169,动力+100),但卡塔尔R1 90+4证明有"末路反扑"能力→不宜追深盘。\n\n关键:卡塔尔是"已淘汰但R1有亮点"型→不同于纯摆烂(如库拉索0-0)。波黑预计2球以内解决。`,
      modelInterpretation: `模型77.7% vs Pinnacle市场68.4%\n\nGap=-9.3pp(model_higher=TYPE_C)。λ=2.27/0.50(total=2.77)。波黑Form: R1进1球(对加拿大还行)+R2进1球丢4球(瑞士太强)。卡塔尔Form: R1进1球(90+4!)+R2进0丢6。\n\nCI95: 波黑胜[62%-89%]`,
      betReasoning: `TYPE_C(模型>市场)→核心alpha区。波黑-1.25(+6.6pp)是今日最核心推荐。\n\n为何不推-1.5?模型穿2球仅63.5%→赔率需>@1.57才有value,市场不会给。-1.25是最佳性价比。\n\nUnder 3.0: R3 λ衰减(0.85)→total仅2.77。卡塔尔无动力进攻+波黑可能早早进球后控节奏。6/23四场avg=1.75球验证R2/R3低节奏趋势。`
    },
    commercialAnalysis: {
      summary: 'TYPE_C(+9.3pp)→波黑-1.25核心alpha。Under 3.0(+6.7pp)辅助。卡塔尔R1有亮点不宜追深盘-2.0。',
      approvedPicks: [
        { pick: '波黑-1.25', odds: '@1.88', verdict: 'approved', edge: '+6.6pp', reasoning: '模型59.8%>需53.2%。TYPE_C结构性alpha+MUST-WIN动力+卡塔尔0-6崩盘', category: 'core' },
        { pick: 'Under 3.0', odds: '@1.93', verdict: 'approved', edge: '+6.7pp', reasoning: 'R3 λ=2.77(衰减后)。卡塔尔无进攻动力。6/23四场avg1.75球验证低节奏', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '波黑-2', odds: '@2.20', verdict: 'rejected', edge: '-6pp(39.4%<45.5%)', reasoning: '卡塔尔R1 90+4证明有末路反扑力。穿2球仅39.4%→负EV', category: 'trap' },
      ],
      marketBehavior: '市场波黑@1.41反映MUST-WIN+Elo差。但-1.25盘口@1.88/2.02→市场认为穿盘仅50%。模型认为60%→+6.6pp差额源自卡塔尔0-6后进攻彻底消亡。',
      kellyNote: '波黑-1.25建议2%仓位(+6.6pp,TYPE_C核心)。Under 3.0建议1.5%仓位。'
    },
    confidence: 'high'
  },
  {
    team1: '瑞士', team2: '加拿大', group: 'B', ground: '温哥华', time: '15:00 UTC-4',
    elo1: 1865, elo2: 1767, eloDiff: 98,
    model: { home: 0.6049, draw: 0.2411, away: 0.1496 },
    market: { home: 0.4051, draw: 0.3093, away: 0.2856, _note: 'Pinnacle (2.39/3.13/3.39, vig-removed)' },
    lambda: { home: 1.65, away: 0.68, total: 2.34 },
    gap: { team: '瑞士', value: -20.0, direction: 'model_higher' },
    formation1: '3-4-2-1', formation2: '4-3-3', coach1: '亚金', coach2: '马施',
    style1: 'R1 1-1卡塔尔(被90+4扳平!低迷),R2 4-1血洗波黑(强势反弹!Xhaka+Manzambi)。反弹已完成→R3正常状态。',
    style2: 'R1 1-1波黑(平淡),R2 6-0血洗卡塔尔(Jonathan David帽子戏法!爆发)。GD+6领跑→平局即头名! 可能保守。温哥华主场。',
    lineup1: 'Kobel; Elvedi, Akanji, Rodriguez; Widmer, Xhaka, Freuler, Aebischer; Ndoye, Shaqiri; Embolo',
    lineup2: 'Crepeau; Johnston, David(E), Bombito, Davies; Eustaquio, Kone, Buchanan; Larin, J.David, Millar',
    injuries1: '全员健康', injuries2: '全员健康',
    tacticalMatchup: [
      { area: '中场控制', advantage: '瑞士', reason: 'Xhaka(勒沃库森)+Freuler技术覆盖。加拿大中场偏工兵型' },
      { area: '前场攻击力', advantage: '加拿大(微)', reason: 'J.David帽子戏法状态! Davies冲击力。但瑞士后防Akanji(曼城)稳健' },
      { area: '比赛动力', advantage: '瑞士(大)', reason: '瑞士必须赢才能头名(GD-3 vs加拿大GD+6)。加拿大平局即头名→大概率保守' },
      { area: '主场因素', advantage: '加拿大', reason: '温哥华主场(+80-100 Elo等效)。R2已在此6-0→主场加成已验证' },
    ],
    groupContext: `B组R3头名之争!瑞士4分(GD+3) vs 加拿大4分(GD+6)。加拿大平局凭GD夺头名→无需冒险!瑞士必须赢。\n\n淘汰赛:B1对弱第3(~1600) vs B2对I2(~1800)。争头名动力中等(+200差距)。`,
    handicaps: [
      {line:-1, win:0.3499, draw:0.2550, lose:0.3951},
      {line:-0.5, win:0.6049, draw:0, lose:0.3951},
      {line:-0.25, win:0.7254, draw:0, lose:0.2746, marketWin:'@2.03', marketLose:'@1.88', isMarketLine:true},
      {line:0, win:0.6049, draw:0.2411, lose:0.1496},
      {line:0.5, win:0.8460, draw:0, lose:0.1540},
    ],
    overUnder: [
      {line:1.5, over:0.6207, under:0.3793},
      {line:2.0, over:0.4525, under:0.3793},
      {line:2.25, over:0.4786, under:0.5170, marketOver:'@1.87', marketUnder:'@2.02', isMarketLine:true},
      {line:2.5, over:0.4132, under:0.5824},
      {line:3.5, over:0.1872, under:0.8128},
    ],
    predictions: [],
    recommendations: [
      {type:'胜平负', pick:'瑞士胜', odds:'@2.39', modelProb:0.6049, reason:'TYPE_C巨大alpha(+20pp!)。模型60.5%>需41.8%→+18.7pp。瑞士MUST-WIN+Elo+98→但加拿大主场+保守=不确定性大'},
      {type:'大小球', pick:'Under 2.25', odds:'@2.02', modelProb:0.5170, reason:'加拿大平局即头名→大概率保守+R3低节奏。λ=2.34(衰减后)。微弱edge+2.2pp但方向逻辑强'},
    ],
    analysis: {
      groupSituation: `**B组R3头名争夺**\n\n瑞士4分(GD+3: 1-1平, 4-1胜) | 加拿大4分(GD+6: 1-1平, 6-0胜)\n\n加拿大GD领先3球→平局即头名!瑞士必须赢(且最好大比分)。加拿大在温哥华主场,R2已6-0证明主场加成。`,
      lineup1Detail: `**瑞士 (3-4-2-1) — 亚金**\n\nR2 4-1血洗波黑后状态回升。Xhaka(阿森纳→勒沃库森)是中场引擎。Embolo中锋+Ndoye边路。Akanji(曼城)后防核心。必须赢。`,
      lineup2Detail: `**加拿大 (4-3-3) — 马施**\n\nR2 6-0卡塔尔(J.David帽子戏法!)后信心爆棚。温哥华主场。Davies(拜仁)左路。GD+6领跑→平局即头名→大概率控制节奏不冒险。`,
      styleAnalysis: `**瑞士**: 经典3-4-2-1控球体系。Xhaka+Freuler技术双核。Ndoye宽度。R2反弹完成→R3正常发挥。今天MUST-WIN会加大进攻投入。\n\n**加拿大**: 反击+身体对抗。J.David+Davies速度+力量。平局即头名→今天大概率5-4-1防守反击,控制比赛节奏,不冒险。主场优势明显。`,
      tacticalNarrative: `核心矛盾: 瑞士MUST-WIN(会猛攻) vs 加拿大平局即头名(会保守)。这个结构=瑞士控球60%+但加拿大反击致命(J.David+Davies速度)。\n\n⚠️ 加拿大温哥华主场(+80-100 Elo等效)→模型不含此因子→实际加拿大强于模型显示。\n\n最可能剧本: 瑞士围攻→加拿大偷反击→最终1-0/1-1。大球概率低。`,
      modelInterpretation: `模型60.5% vs Pinnacle市场40.5%\n\nGap=-20.0pp(model_higher=TYPE_C巨大分歧!)。但⚠️:模型不含主场因素(加拿大温哥华+80-100 Elo),调整后瑞士胜率≈45-50%→与市场接近。\n\n实际edge: 调整主场后仅+5-10pp。仍有value但需降低仓位。`,
      betReasoning: `TYPE_C(+20pp)但有主场干扰→实际edge缩小。瑞士胜@2.39仍有value(调整后仍+5pp以上)。\n\nUnder 2.25: 加拿大"平局即头名"=铁桶防守模式。瑞士λ=1.65(R3衰减)+加拿大防守收缩=双低→Under逻辑成立。\n\n不推加拿大: 虽有主场但@3.39需29.5%→模型仅14.9%(即使+主场也不够)→无value。`
    },
    commercialAnalysis: {
      summary: 'TYPE_C(+20pp)但加拿大温哥华主场(+80-100 Elo)缩小实际edge至~+5-10pp。瑞士胜@2.39仍有value。Under 2.25逻辑强(加拿大保守)。',
      approvedPicks: [
        { pick: '瑞士胜', odds: '@2.39', verdict: 'approved', edge: '+18.7pp(raw)/+5-10pp(主场调整)', reasoning: '模型60.5%>41.8%。主场调整后仍有正EV。瑞士MUST-WIN动力+Elo+98', category: 'value' },
        { pick: 'Under 2.25', odds: '@2.02', verdict: 'approved', edge: '+2.2pp(边缘但逻辑强)', reasoning: '加拿大平局即头名→保守。R3 λ=2.34。结构性小球', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '加拿大胜', odds: '@3.39', verdict: 'rejected', edge: '-14pp(14.9%<29.5%)', reasoning: '模型给加拿大仅14.9%→即使加主场(+5-8pp)仍远低于需求', category: 'trap' },
        { pick: '平局', odds: '@3.13', verdict: 'rejected', edge: '-7pp(24.1%<31.9%)', reasoning: '虽然加拿大有保守动机,但Poisson系统性高估平局+edge不够', category: 'trap' },
      ],
      marketBehavior: '市场给瑞士仅40.5%=极度低估。原因:加拿大温哥华主场+R2 6-0心理冲击。但市场可能过度反应6-0(对手是Elo1447卡塔尔!)。瑞士4-1波黑的含金量远高于加拿大6-0卡塔尔。',
      kellyNote: '瑞士胜建议1-1.5%仓位(主场不确定性→降低仓位)。Under 2.25建议1%仓位(边缘edge)。'
    },
    confidence: 'mid'
  },
  {
    team1: '苏格兰', team2: '巴西', group: 'C', ground: '费城', time: '18:00 UTC-4',
    elo1: 1794, elo2: 1978, eloDiff: -184,
    model: { home: 0.0518, draw: 0.1376, away: 0.8072 },
    market: { home: 0.0998, draw: 0.1774, away: 0.7228, _note: 'Pinnacle (9.63/5.42/1.33, vig-removed)' },
    lambda: { home: 0.46, away: 2.43, total: 2.90 },
    gap: { team: '巴西', value: 8.4, direction: 'model_higher' },
    formation1: '5-3-2', formation2: '4-2-3-1', coach1: '克拉克', coach2: '多里瓦尔',
    style1: 'R1 1-0胜海地(McGinn进球),R2 0-1负摩洛哥(Saibari 2分钟闪击)。苏格兰防守纪律型。3分出线仍有希望→不会完全摆烂。',
    style2: 'R1 1-1摩洛哥(TYPE_A首轮异常!),R2 3-0海地(反弹完成:Cunha x2+Vinícius Jr)。R3正常状态。赢则6分确保出线+争头名。',
    lineup1: 'Gunn; Ralston, Hendry, Hanley, Tierney, Robertson; McTominay, Gilmour, McGinn; Adams, Dykes',
    lineup2: 'Alisson; Danilo, Marquinhos, Gabriel, Arana; Bruno G, André; Raphinha, Paquetá, Vinícius Jr; Cunha',
    injuries1: '无重大伤情', injuries2: '全员健康',
    tacticalMatchup: [
      { area: 'Vinícius Jr vs 苏格兰右路', advantage: '巴西(碾压)', reason: 'Vinícius Jr世界级。苏格兰右后卫Ralston无法1v1防守' },
      { area: '苏格兰5后卫密集防守', advantage: '苏格兰(微)', reason: '5-3-2铁桶。苏格兰对摩洛哥仅丢1球(2分钟闪击非防守系统问题)' },
      { area: '定位球', advantage: '苏格兰', reason: 'McTominay+Hanley头球威胁。巴西历来定位球防守薄弱' },
    ],
    groupContext: `C组R3。摩洛哥6分(已出线!) | 巴西4分(赢即出线+可能头名) | 苏格兰3分(平即可能出线为最佳第三) | 海地0分(淘汰)\n\n苏格兰3分→平局有出线希望(最佳第3看其他组)→会努力保平,不会只挨打。但巴西质量碾压。`,
    handicaps: [
      {line:2, win:0.0518, draw:0.1376, lose:0.5826},
      {line:1.5, win:0.4139, draw:0, lose:0.5826, marketWin:'@1.87', marketLose:'@2.04', isMarketLine:true},
      {line:1, win:0.1893, draw:0.2246, lose:0.5826},
      {line:0.5, win:0.4139, draw:0, lose:0.5826},
      {line:0, win:0.0518, draw:0.1376, lose:0.8072},
    ],
    overUnder: [
      {line:1.5, over:0.7808, under:0.2192},
      {line:2.5, over:0.5522, under:0.4444, marketOver:'@1.87', marketUnder:'@2.02', isMarketLine:true},
      {line:3.0, over:0.3285, under:0.6680},
      {line:3.5, over:0.3285, under:0.6680},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'巴西-1.5', odds:'@2.04', modelProb:0.5826, reason:'模型58.3%>需49.0%→+9.2pp。巴西R2已反弹(3-0海地)→R3正常碾压。苏格兰仅1进球(对海地)→进攻无力'},
      {type:'大小球', pick:'Under 2.5', odds:'@2.02', modelProb:0.4444, reason:'⚠️ 边缘。苏格兰5后卫会全力防守(平局=出线希望!)→巴西可能被拖到只进1-2球。但模型44.4%<需49.5%→严格说无value。观望'},
    ],
    analysis: {
      groupSituation: `**C组R3形势**\n\n摩洛哥6分(已出线!) | 巴西4分 | 苏格兰3分 | 海地0分\n\n巴西赢即出线。苏格兰平局有最佳第3出线希望(取决于其他组)。苏格兰不会摆烂——3分+平局有出线价值→会努力保平。`,
      lineup1Detail: `**苏格兰 (5-3-2) — 克拉克**\n\nR1 1-0海地(McGinn进球),R2 0-1摩洛哥(仅丢1球=2分钟闪击非系统崩盘)。5后卫体系防守纪律可靠。进攻端仅1进球(对弱队)→面对巴西几乎不可能得分。`,
      lineup2Detail: `**巴西 (4-2-3-1) — 多里瓦尔**\n\nR1 1-1平摩洛哥(TYPE_A首轮异常),R2 3-0海地(反弹完成!Cunha双响+Vinícius)。R3正常状态→世界顶级攻击力(Vinícius+Raphinha+Paquetá)。赢即出线。`,
      styleAnalysis: `**苏格兰**: 英式防守纪律型。5-3-2最大化后防厚度。McTominay(曼联→那不勒斯)是进攻中最具威胁的。整体保平思路:拖时间+定位球偷1球。\n\n**巴西**: 世界顶级技术流。Vinícius Jr+Raphinha边路速度+Paquetá插上。R2已完成反弹→R3不存在TYPE_A效应。正常发挥=碾压苏格兰。`,
      tacticalNarrative: `巴西R2已完成反弹(3-0)→R3不适用TYPE_A规则(反弹已发生)。正常碾压逻辑适用。\n\n但苏格兰有3分(平局=出线希望!)→不是"已淘汰摆烂"型(如卡塔尔/库拉索)。会全力保平→5后卫+低位防守+定位球偷袭。\n\n关键问题:苏格兰能顶多久?R2对摩洛哥仅丢1球(2分钟)→防守质量确认。但巴西≠摩洛哥,技术密度高一个档次。预计巴西1-0或2-0艰难取胜。`,
      modelInterpretation: `模型巴西80.7% vs Pinnacle市场72.3%\n\nGap=-8.4pp(model_higher)。λ=0.46(苏)/2.43(巴)(total=2.90)。苏格兰λ=0.46=本轮最低→进攻几乎为零(2场仅1球且对海地)。巴西λ=2.43→预期2-3球。\n\n⚠️ 苏格兰"平局=出线"动机+5后卫→可能拖住巴西。Under方向有逻辑但模型不支持(44.4%<50%)。`,
      betReasoning: `巴西-1.5 @2.04是今日次优推荐(+9.2pp)。逻辑:\n1. 巴西R2已反弹→R3正常碾压(不适用TYPE_A规则)\n2. 苏格兰进攻≈0(λ=0.46,仅1进球对海地)\n3. 巴西赢即出线→全力以赴\n\n⚠️ 风险:苏格兰"3分保平"动机强+5后卫→可能被拖成1-0。-1.5需巴西净胜2球。如果苏格兰70分钟后仍0-1→巴西可能不再冒险追。\n\nUnder观望:逻辑对(苏格兰防守)但模型44.4%<49.5%→严格无value。不硬推。`
    },
    commercialAnalysis: {
      summary: '巴西R2已反弹(不适用TYPE_A)→正常碾压。-1.5(+9.2pp)核心pick。苏格兰"3分保平"是唯一不确定性。Under观望(无value)。',
      approvedPicks: [
        { pick: '巴西-1.5', odds: '@2.04', verdict: 'approved', edge: '+9.2pp', reasoning: '模型58.3%>49.0%。巴西反弹已完成→R3正常发挥。苏格兰λ=0.46(进攻为零)', category: 'core' },
      ],
      rejectedPicks: [
        { pick: 'Under 2.5', odds: '@2.02', verdict: 'rejected', edge: '-5.1pp(44.4%<49.5%)', reasoning: '苏格兰保平逻辑对但模型不支持。巴西λ=2.43太高→Under模型概率不足', category: 'trap' },
        { pick: '苏格兰+1.5', odds: '@1.87', verdict: 'rejected', edge: '-12.1pp(41.4%<53.5%)', reasoning: '⚠️ 6/23新规则: 不做巴西反弹后的逆向让球!苏格兰+1.5=赌巴西最多赢1球→概率仅41.4%', category: 'trap' },
      ],
      marketBehavior: '市场巴西@1.33=72.3%,模型80.7%。+8.4pp分歧不大。-1.5盘口@2.04/1.87→市场认为巴西赢2+球约49%。模型58.3%→有+9.2pp空间。',
      kellyNote: '巴西-1.5建议1.5%仓位(+9.2pp)。Under不推荐(无value)。'
    },
    confidence: 'mid'
  },
  {
    team1: '摩洛哥', team2: '海地', group: 'C', ground: '波士顿', time: '18:00 UTC-4',
    elo1: 1840, elo2: 1536, eloDiff: 304,
    model: { home: 0.9370, draw: 0.0410, away: 0.0080 },
    market: { home: 0.8089, draw: 0.1279, away: 0.0632, _note: 'Pinnacle (1.18/7.46/15.11, vig-removed)' },
    lambda: { home: 3.68, away: 0.24, total: 3.92 },
    gap: { team: '摩洛哥', value: -12.8, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '5-4-1', coach1: '雷格拉吉', coach2: '科莱',
    style1: 'R1 1-1平巴西(!),R2 1-0胜苏格兰(Saibari 2分钟!)→6分小组第一出线!可能轮休主力保护体能。Saibari是本届黑马核心。',
    style2: 'R1 0-1负苏格兰,R2 0-3负巴西→0进球!已淘汰。Elo1536(48队倒数第4)。无任何出线希望,仅为荣誉而战。',
    lineup1: 'Bounou; Hakimi, Aguerd, Saiss, Mazraoui; Amrabat, Ounahi, Saibari; Ziyech, En-Nesyri, Boufal',
    lineup2: 'Duval; Pierrot, Romain, Bazile, Geffrard, Alceus; Gilles, Fedelin, Derilus; Péralte, Casimir',
    injuries1: '可能轮休(已出线)', injuries2: '无重大伤情(士气极低)',
    tacticalMatchup: [
      { area: 'Saibari vs 海地防线', advantage: '摩洛哥(碾压)', reason: 'Saibari本届2球2助=C组最佳。海地丢4球0进→防守已崩' },
      { area: '轮休影响', advantage: '减弱', reason: '摩洛哥已出线→可能轮休Hakimi/Ziyech等主力→攻击力下降' },
      { area: '海地防守决心', advantage: '海地(微)', reason: '最后一场为荣誉而战。已淘汰=零压力=可能超常发挥' },
    ],
    groupContext: `C组R3。摩洛哥6分已出线!头名取决于是否赢球+巴西结果。但R32路径差异不大(C1对F2日本~1910 vs C2对F1荷兰~1944=仅34差)→轮休动力>争头名动力。\n\n海地0分已淘汰。纯荣誉战。`,
    handicaps: [
      {line:-3, win:0.5118, draw:0.1723, lose:0.3159},
      {line:-2.5, win:0.6841, draw:0, lose:0.3159},
      {line:-2, win:0.7380, draw:0.1412, lose:0.1208, marketWin:'@1.95', marketLose:'@1.93', isMarketLine:true},
      {line:-1.5, win:0.8792, draw:0, lose:0.1208},
      {line:-1, win:0.8792, draw:0.0498, lose:0.0710},
      {line:-0.5, win:0.9290, draw:0, lose:0.0710},
      {line:0, win:0.9370, draw:0.0410, lose:0.0080},
    ],
    overUnder: [
      {line:2.0, over:0.7537, under:0.1212},
      {line:2.5, over:0.6988, under:0.2916},
      {line:3.0, over:0.6370, under:0.3534, marketOver:'@1.84', marketUnder:'@2.04', isMarketLine:true},
      {line:3.5, over:0.4649, under:0.5255},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Over 3.0', odds:'@1.84', modelProb:0.6370, reason:'λ=3.92(即使0.75衰减后仍3.68!)。摩洛哥进攻火力本届最强(3场4球!)。海地丢4球0进→防线洞开'},
      {type:'让球', pick:'摩洛哥-2.0', odds:'@1.95', modelProb:0.7380, reason:'模型73.8%>需51.3%→+22.5pp! 但⚠️轮休因素=不确定性→降低仓位'},
    ],
    analysis: {
      groupSituation: `**C组R3**\n\n摩洛哥6分(已出线!) | 巴西4分 | 苏格兰3分 | 海地0分(淘汰)\n\n摩洛哥已确保出线。头名取决于是否赢球+巴西-苏格兰结果。但C1对F2(日本1910) vs C2对F1(荷兰1944)=仅34 Elo差→争头名动力LOW。可能轮休。`,
      lineup1Detail: `**摩洛哥 (4-3-3) — 雷格拉吉**\n\nSaibari本届2球2助=C组最佳球员!Hakimi+Mazraoui(拜仁)双翼卫。已出线→可能轮休主力(Hakimi/Ziyech/En-Nesyri),用替补练兵。\n\n⚠️ 轮休=λ实际可能更低。用0.75衰减更合理。`,
      lineup2Detail: `**海地 (5-4-1) — 科莱**\n\n0进球! 2场0-1+0-3。Elo1536(48队倒数第4)。已淘汰。最后一场为加勒比足球的荣誉而战。可能全力防守保体面(类似库拉索0-0厄瓜多尔?)`,
      styleAnalysis: `**摩洛哥**: 本届最大黑马! 1-1巴西+1-0苏格兰展现世界级实力。Saibari核心创造力+Hakimi冲击。战术纪律+技术能力兼备。\n\n**海地**: 加勒比弱旅。0进球说明进攻完全不存在。5-4-1全力防守。最后一场→可能"库拉索效应"(0-0厄瓜多尔),也可能像R2被巴西打穿。`,
      tacticalNarrative: `核心疑问: 这是"碾压大胜"还是"dead rubber平淡"?\n\n⚠️ 6/23规则应用:\n- 摩洛哥已出线→λ用0.75衰减(dead rubber)\n- 海地已淘汰→可能库拉索效应(全摆烂防守)\n- 但! 摩洛哥R2对苏格兰仅派主力踢了全场(Saibari 2分钟进球)→教练可能R3继续用主力保持状态\n- 且! 海地防守质量远低于苏格兰/库拉索→即使摆烂也顶不住\n\n综合:即使轮休,摩洛哥替补阵容也碾压海地→2-3球大胜最可能。`,
      modelInterpretation: `模型93.7% vs Pinnacle市场80.9%\n\nGap=-12.8pp(model_higher)。λ(0.75 dead rubber衰减)=3.68/0.24=total 3.92。即使重衰减,摩洛哥λ仍极高(Elo差304)。\n\n-2.0穿盘73.8%→即使打8折(轮休)仍~59%>51.3%。Over 3.0=63.7%→edge充足。`,
      betReasoning: `双推Over 3.0(+9.4pp)+ 摩洛哥-2.0(+22.5pp,但轮休降低置信度):\n\nOver逻辑: λ_total=3.92即使0.75衰减仍然极高。海地0进球=不会"偷一个"拉低总球。单边碾压型大球。\n\n-2.0逻辑: 模型73.8%巨大正EV。但轮休不确定性=实际edge可能缩至+10-15pp(仍有value)。降低仓位管理风险。`
    },
    commercialAnalysis: {
      summary: '摩洛哥已出线(dead rubber 0.75衰减)但即使轮休也碾压海地。Over 3.0(+9.4pp)和-2.0(+22.5pp)双core,但轮休降低仓位。',
      approvedPicks: [
        { pick: 'Over 3.0', odds: '@1.84', verdict: 'approved', edge: '+9.4pp', reasoning: 'λ=3.92(极高!)。海地0进球=单边碾压型大球。即使摩洛哥轮休,替补也碾压(Elo差304)', category: 'core' },
        { pick: '摩洛哥-2.0', odds: '@1.95', verdict: 'approved', edge: '+22.5pp(轮休打折后~+10-15pp)', reasoning: '模型73.8%碾压。但轮休不确定性→降低仓位至1%', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '海地+2.0', odds: '@1.93', verdict: 'rejected', edge: '-27pp(24.8%<51.8%)', reasoning: '海地防守质量远低于苏格兰/库拉索。0进球=无反击威胁。摩洛哥即使轮休也穿2球', category: 'trap' },
      ],
      marketBehavior: '市场摩洛哥@1.18+穿盘-2.0@1.95/1.93。市场已定价轮休可能性。模型(即使用0.75衰减)仍远高于市场→结构性alpha。海地≠库拉索(海地R2被巴西3-0打穿=证明无法顶住)。',
      kellyNote: 'Over 3.0建议1.5%仓位(+9.4pp,结构性大球)。摩洛哥-2.0建议1%仓位(轮休不确定性降仓)。'
    },
    confidence: 'mid'
  },
]

export const goalDistributions: Record<string, GoalDistribution> = {
  '波黑vs卡塔尔': { team1: '波黑', team2: '卡塔尔', diffs: {'-2':0.008,'-1':0.038,'0':0.156,'1':0.241,'2':0.241,'3':0.174,'4':0.092,'5':0.037,'6':0.012} },
  '瑞士vs加拿大': { team1: '瑞士', team2: '加拿大', diffs: {'-3':0.011,'-2':0.044,'-1':0.131,'0':0.241,'1':0.255,'2':0.180,'3':0.090,'4':0.033,'5':0.010} },
  '苏格兰vs巴西': { team1: '苏格兰', team2: '巴西', diffs: {'-5':0.021,'-4':0.056,'-3':0.119,'-2':0.201,'-1':0.225,'0':0.138,'1':0.052,'2':0.014,'3':0.003} },
  '摩洛哥vs海地': { team1: '摩洛哥', team2: '海地', diffs: {'-1':0.003,'0':0.041,'1':0.050,'2':0.141,'3':0.172,'4':0.185,'5':0.165,'6':0.121,'7':0.072,'8':0.036} },
}

export const tournamentStats: TournamentStats = {
  totalMatches: 56, totalGoals: 135, avgGoals: 2.41,
  homeWins: 25, draws: 17, awayWins: 14,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '葡萄牙 5-0 乌兹别克', scorer: '待补充', date: '2026-06-23' }
}

export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '波黑vs卡塔尔': {
    summary: 'TYPE_C(+9.3pp)→波黑-1.25核心alpha。Under 3.0(+6.7pp)辅助。卡塔尔R1有亮点不宜追深盘-2.0。',
    approvedPicks: [
      { pick: '波黑-1.25', odds: '@1.88', verdict: 'approved', edge: '+6.6pp', reasoning: '模型59.8%>需53.2%。TYPE_C结构性alpha+MUST-WIN动力+卡塔尔0-6崩盘', category: 'core' },
      { pick: 'Under 3.0', odds: '@1.93', verdict: 'approved', edge: '+6.7pp', reasoning: 'R3 λ=2.77(衰减后)。卡塔尔无进攻动力。6/23四场avg1.75球验证低节奏', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '波黑-2', odds: '@2.20', verdict: 'rejected', edge: '-6pp(39.4%<45.5%)', reasoning: '卡塔尔R1 90+4证明有末路反扑力。穿2球仅39.4%→负EV', category: 'trap' },
    ],
    marketBehavior: '市场波黑@1.41反映MUST-WIN+Elo差。-1.25盘口是最佳性价比位置。',
    kellyNote: '波黑-1.25建议2%仓位。Under 3.0建议1.5%仓位。'
  },
  '瑞士vs加拿大': {
    summary: 'TYPE_C(+20pp)但加拿大温哥华主场缩小edge。瑞士胜@2.39有value但需降仓。Under 2.25逻辑强。',
    approvedPicks: [
      { pick: '瑞士胜', odds: '@2.39', verdict: 'approved', edge: '+18.7pp(raw)/+5-10pp(主场调整)', reasoning: '瑞士MUST-WIN+Elo+98。主场调整后仍有正EV', category: 'value' },
      { pick: 'Under 2.25', odds: '@2.02', verdict: 'approved', edge: '+2.2pp(边缘)', reasoning: '加拿大平局即头名→保守。R3结构性小球', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '加拿大胜', odds: '@3.39', verdict: 'rejected', edge: '-14pp', reasoning: '即使加主场仍远低于需求概率', category: 'trap' },
    ],
    marketBehavior: '市场瑞士仅40.5%=低估。加拿大6-0心理冲击(但对手Elo1447)过度反应。',
    kellyNote: '瑞士胜建议1-1.5%仓位(主场不确定性)。Under 2.25建议1%仓位。'
  },
  '苏格兰vs巴西': {
    summary: '巴西R2已反弹→不适用TYPE_A。-1.5(+9.2pp)核心。苏格兰3分保平动机是唯一风险。Under无value。',
    approvedPicks: [
      { pick: '巴西-1.5', odds: '@2.04', verdict: 'approved', edge: '+9.2pp', reasoning: '巴西反弹完成→正常碾压。苏格兰λ=0.46(进攻为零)', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '苏格兰+1.5', odds: '@1.87', verdict: 'rejected', edge: '-12.1pp', reasoning: '6/23新规: 不做反弹后逆向让球', category: 'trap' },
      { pick: 'Under 2.5', odds: '@2.02', verdict: 'rejected', edge: '-5.1pp', reasoning: '逻辑对但模型不支持(44.4%<49.5%)', category: 'trap' },
    ],
    marketBehavior: '模型80.7% vs 市场72.3%。分歧不大。-1.5是最佳edge位置。',
    kellyNote: '巴西-1.5建议1.5%仓位。'
  },
  '摩洛哥vs海地': {
    summary: '摩洛哥已出线(dead rubber 0.75衰减)但即使轮休也碾压。Over 3.0+摩洛哥-2.0双推,轮休降仓。',
    approvedPicks: [
      { pick: 'Over 3.0', odds: '@1.84', verdict: 'approved', edge: '+9.4pp', reasoning: 'λ=3.92极高。海地0进球=单边碾压型大球', category: 'core' },
      { pick: '摩洛哥-2.0', odds: '@1.95', verdict: 'approved', edge: '+22.5pp(轮休打折后~+10-15pp)', reasoning: '模型73.8%碾压。轮休不确定性降仓', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '海地+2.0', odds: '@1.93', verdict: 'rejected', edge: '-27pp', reasoning: '海地≠库拉索(R2被巴西打穿=证明无法顶住)', category: 'trap' },
    ],
    marketBehavior: '市场已定价轮休。模型(即使0.75衰减)仍远高于市场→结构性alpha。',
    kellyNote: 'Over 3.0建议1.5%仓位。摩洛哥-2.0建议1%仓位(轮休降仓)。'
  },
}
