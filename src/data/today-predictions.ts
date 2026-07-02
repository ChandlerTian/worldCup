import type { MatchPrediction, GoalDistribution, TournamentStats } from '../types'

// ====== 7/2-7/4 — R32 淘汰赛第5-7日: 6场预测 ======
// model_agent v3.0 + ESPN API + Pinnacle实时赔率 (via The Odds API)
export const lastUpdated = '2026-07-02 18:00 CST (模型v3.0: Pinnacle odds, R32第5-7日六场)'

export const todayPredictions: MatchPrediction[] = [

  // ==================== 1. 西班牙 vs 奥地利 (R32-10) ====================
  {
    team1: '西班牙', team2: '奥地利', group: 'R32', ground: 'SoFi Stadium(洛杉矶)', time: '19:00 UTC-5',
    elo1: 2157, elo2: 1830, eloDiff: 327,
    model: { home: 0.7062, draw: 0.187, away: 0.1068 },
    market: { home: 0.752, draw: 0.185, away: 0.090, _note: 'Pinnacle (ESP 1.33, Draw 5.40, AUT 11.1)' },
    lambda: { home: 2.15, away: 0.70, total: 2.86 },
    gap: { team: '奥地利', value: 1.7, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Luis de la Fuente', coach2: 'Ralf Rangnick',
    style1: `H组第1(9分全胜 GD+5)。R1 0-0佛得角(慢热), R2 4-0沙特(爆发), R3 1-0乌拉圭(控制)。def=-1.25(防线质变!全赛事最佳), off=-0.77(保守但高效)。Yamal/Oyarzabal双核。`,
    style2: `J组第2(7分 GD+2)。R1 3-1约旦, R2 0-2阿根廷(双Messi进球), R3 3-3阿尔及利亚(末段被绝平)。off=+0.32(进攻超预期), def=+0.25(防守一般)。Rangnick高压逼抢。`,
    lineup1: 'Unai Simón; Carvajal, Le Normand, Laporte, Cucurella; Pedri, Rodri, Olmo; Yamal, Morata, Williams',
    lineup2: 'Pentz; Posch, Danso, Wöber, Mwene; Seiwald, Laimer; Sabitzer, Wimmer, Baumgartner; Arnautovic',
    injuries1: '全员健康', injuries2: 'Alaba(长期伤缺)',
    tacticalMatchup: [
      { area: '防守质量', advantage: '西班牙(碾压)', reason: 'def=-1.25(全赛事最佳!) vs def=+0.25。Rodri+Laporte铜墙铁壁。' },
      { area: '进攻创造力', advantage: '西班牙(显著)', reason: 'Yamal(17岁天才)+Pedri+Olmo vs Sabitzer+Baumgartner。技术代差。' },
      { area: '高位逼抢', advantage: '均势', reason: 'Rangnick体系强调逼抢,但西班牙控球能力可化解。' },
      { area: '体能+板凳', advantage: '西班牙', reason: '板凳深度冠绝(Williams,Olmo,Ferran Torres)。' },
    ],
    groupContext: `R32淘汰赛: H1(西班牙) vs J2(奥地利)。胜者R16对瑞士/阿尔及利亚胜者。西班牙全胜晋级,零封3场。奥地利R3被阿尔及利亚3-3暴露防守脆弱。`,
    handicaps: [
      { line: -1.5, win: 0.456, draw: 0, lose: 0.544, marketWin: '@1.96', marketLose: '@1.96', isMarketLine: true },
      { line: -1, win: 0.456, draw: 0.243, lose: 0.301 },
      { line: -0.5, win: 0.706, draw: 0, lose: 0.294 },
    ],
    overUnder: [
      { line: 2.75, over: 0.45, under: 0.55, marketOver: '@1.92', marketUnder: '@1.99', isMarketLine: true },
      { line: 2.5, over: 0.52, under: 0.48 },
    ],
    predictions: [
      { score: '2-0', prob: 14.2, reason: '西班牙def=-1.25零封+Yamal/Oyarzabal各入1球' },
      { score: '1-0', prob: 12.8, reason: 'de la Fuente稳健风格1球小胜(R3对乌拉圭模式)' },
      { score: '2-1', prob: 9.5, reason: '西班牙2球+Rangnick体系偷1球反击' },
    ],
    recommendations: [
      { type: '胜平负', pick: '西班牙胜', odds: '(@1.33)', modelProb: 0.706, reason: '确定性极高但赔率低无value。模型70.6% vs 市场75.2%→轻微负EV(-4.6pp)。配多串用。' },
      { type: '让球', pick: '奥地利+1.5', odds: '@1.96', modelProb: 0.544, reason: '模型VALUE+3.4pp。奥地利不输2球54.4%>市场51%。Rangnick有抗压能力(对阿根廷仅0-2)。' },
      { type: '大小球', pick: 'Under 2.75', odds: '@1.99', modelProb: 0.55, reason: '微正EV(+0.8pp)。de la Fuente不追求大比分(R3 1-0乌拉圭)。西班牙def=-1.25限制对手。' },
    ],
    analysis: { groupSituation: `**R32: H1 vs J2 — 西班牙 vs 奥地利**\n\n📍 SoFi Stadium(洛杉矶), 19:00 UTC-5 (北京时间7/3 08:00)\n\n西班牙H组全胜(9分)晋级,零封3场(def=-1.25全赛事最佳!)。奥地利J组第2(7分),Rangnick体系有冲击力但R3被阿尔及利亚3-3绝平(Kalajdzic 90+6)暴露防守脆弱。\n\n**胜者R16对:** 瑞士/阿尔及利亚胜者。`, lineup1Detail: `**西班牙(4-3-3):** Simón; Carvajal, Le Normand, Laporte, Cucurella; Pedri, Rodri(曼城→世界最佳后腰), Olmo; Yamal(17岁巴萨天才), Morata(CF), Williams(LW速度)。板凳:Gavi,Torres,Joselu。`, lineup2Detail: `**奥地利(4-2-3-1):** Pentz; Posch, Danso, Wöber, Mwene; Seiwald, Laimer(拜仁); Sabitzer(多特→核心), Wimmer, Baumgartner; Arnautovic。Rangnick高位逼抢4-2-3-1。`, styleAnalysis: `**西班牙:** 控球大师+技术碾压。Pedri/Rodri/Olmo中场可能是本届最强。Yamal右路1v1世界级。de la Fuente比传统西班牙更务实(def=-1.25!)。\n\n**奥地利:** Rangnick高位逼抢+快速转换。Sabitzer+Laimer引擎。但def=+0.25面对西班牙技术将被碾压。R3被阿尔及利亚3-3暴露末段心理脆弱。`, tacticalNarrative: `**核心对位:** 西班牙控球vs奥地利逼抢。Rangnick逼抢对阿根廷失效(Messi直接突破)→面对Pedri/Rodri同样难奏效。\n\n但奥地利绝非鱼腩: Sabitzer创造力+Arnautovic经验有偷1球能力。关键是能否坚持60分钟不丢球。`, modelInterpretation: `**模型70.6% vs 市场75.2%** — 市场略高4.6pp。Elo差327=碾压级。CI95[60.0%-79.4%]。\n\n西班牙def=-1.25(全赛事最佳)是硬数据。Value在奥地利让球方向: +1.5@1.96(模型54.4%>51%)。`, betReasoning: `**推荐: 奥地利+1.5(@1.96) + Under 2.75(@1.99)**\n\n让球: de la Fuente不追大比分(R3 1-0乌拉圭)。Rangnick有抗压(对阿根廷仅0-2)。奥地利不输2球54.4%。\n\nUnder: 西班牙def=-1.25限制进球。R1/R3都低比分(0-0, 1-0)。淘汰赛保守。` },
    confidence: 'high',
  },

  // ==================== 2. 葡萄牙 vs 克罗地亚 (R32-11) ====================
  {
    team1: '葡萄牙', team2: '克罗地亚', group: 'R32', ground: 'BMO Field(多伦多)', time: '23:00 UTC-5',
    elo1: 1989, elo2: 1912, eloDiff: 77,
    model: { home: 0.4548, draw: 0.2557, away: 0.2895 },
    market: { home: 0.571, draw: 0.263, away: 0.188, _note: 'Pinnacle (POR 1.75, Draw 3.80, CRO 5.33)' },
    lambda: { home: 1.55, away: 1.19, total: 2.74 },
    gap: { team: '克罗地亚', value: 10.2, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-3-3', coach1: 'Roberto Martínez', coach2: 'Zlatko Dalić',
    style1: `K组第1(7分 GD+7)。R1 1-1刚果金, R2 5-0乌兹别克(Ronaldo双响), R3 0-0哥伦比亚。off=+0.95(超预期), def=-0.75(防线稳)。Ronaldo追逐世界杯遗产。`,
    style2: `L组第2(4分)。R1 2-4英格兰(惨败), R2 1-0巴拿马, R3 2-1加纳(Sucic+Vlasic)。off=+0.12(平平), def=+0.75(脆弱!)。莫德里奇最后一届。`,
    lineup1: 'Diogo Costa; Cancelo, Pepe, Dias, Mendes; B.Fernandes, Vitinha, B.Silva; Leão, Ronaldo, Jota',
    lineup2: 'Livaković; Juranović, Šutalo, Caleta-Car, Gvardiol; Modrić, Brozović, Kovačić; Sučić, Budimir, Kramarić',
    injuries1: '全员健康', injuries2: 'Pašalić(小腿不确定)',
    tacticalMatchup: [
      { area: '中场控制', advantage: '克罗地亚(微)', reason: 'Modrić+Brozović+Kovačić→2018/2022核心。但年龄40!体能隐患。' },
      { area: '进攻火力', advantage: '葡萄牙(显著)', reason: 'off=+0.95 vs +0.12。Ronaldo+Leão+Jota+B.Fernandes多点爆破。' },
      { area: '防守质量', advantage: '葡萄牙(显著)', reason: 'def=-0.75 vs +0.75→1.5σ差距!Dias稳健 vs 老化中卫线。' },
      { area: '大赛经验', advantage: '均势', reason: '两队大赛常客。Modrić 3届世界杯 vs Ronaldo最后荣耀。' },
    ],
    groupContext: `R32: K1(葡萄牙) vs L2(克罗地亚)。胜者R16对哥伦比亚/加纳胜者。两大传统强队黄昏之战(Ronaldo 40 vs Modrić 40)。`,
    handicaps: [
      { line: -0.75, win: 0.455, draw: 0, lose: 0.545, marketWin: '@1.94', marketLose: '@1.98', isMarketLine: true },
      { line: -0.5, win: 0.455, draw: 0, lose: 0.545 },
      { line: 0, win: 0.455, draw: 0.256, lose: 0.290 },
    ],
    overUnder: [
      { line: 2.75, over: 0.42, under: 0.58, marketOver: '@1.97', marketUnder: '@1.93', isMarketLine: true },
      { line: 2.5, over: 0.49, under: 0.51 },
    ],
    predictions: [
      { score: '1-1', prob: 11.5, reason: '最高概率。两队实力接近,可能进加时/点球' },
      { score: '1-0', prob: 10.8, reason: '葡萄牙1球小胜(Ronaldo制胜球)' },
      { score: '2-1', prob: 9.5, reason: '葡萄牙微优但克罗地亚有1球能力' },
    ],
    recommendations: [
      { type: '让球', pick: '克罗地亚+0.75', odds: '@1.98', modelProb: 0.545, reason: '本日最佳VALUE+10.2pp!克罗地亚不败54.5%>市场50.5%。市场被R1 2-4英格兰锚定过深。Modrić中场控制+淘汰赛经验。' },
      { type: '大小球', pick: 'Under 2.75', odds: '@1.93', modelProb: 0.58, reason: '正EV(+6.2pp)。淘汰赛+两队年龄偏大→节奏慢。Dalić和Martínez都是保守教练。' },
      { type: '胜平负', pick: '克罗地亚胜', odds: '(@5.33)', modelProb: 0.290, reason: '显著VALUE! 模型29.0% vs 市场18.8%→+10.2pp。高赔高风险但正EV=+54%!' },
    ],
    analysis: { groupSituation: `**R32: K1 vs L2 — 葡萄牙 vs 克罗地亚**\n\n📍 BMO Field(多伦多), 23:00 UTC-5 (北京时间7/3 12:00)\n\n两大传统豪强黄昏之战。葡萄牙K组头名(7分),R2 5-0乌兹别克展现火力。克罗地亚L组第2(4分),首轮2-4惨败英格兰后逐渐恢复。\n\n**胜者R16对:** 哥伦比亚/加纳胜者。`, lineup1Detail: `**葡萄牙(4-3-3):** Costa; Cancelo, Pepe(41岁!), Dias(曼城), Mendes; B.Fernandes(曼联10号), Vitinha(PSG→节奏), B.Silva(曼城→全能); Leão(米兰LW速度), Ronaldo(CF→40岁传奇), Jota(利物浦→得分)。`, lineup2Detail: `**克罗地亚(4-3-3):** Livaković; Juranović, Šutalo, Caleta-Car, Gvardiol(曼城→世界级LB); Modrić(40岁→中场大师!), Brozović(拦截+分配), Kovačić(曼城→技术); Sučić(新星), Budimir(CF), Kramarić(创造力)。`, styleAnalysis: `**葡萄牙:** Martínez体系进攻化。Ronaldo R2帽子戏法证明状态。Leão左路速度是破局关键。def=-0.75说明Dias+Costa后防稳固。\n\n**克罗地亚:** Dalić延续中场控球传统。Modrić+Brozović+Kovačić仍是世界级——但体能和速度衰退。Gvardiol唯一世界级后卫。R1 2-4英格兰暴露速度和防守老化。`, tacticalNarrative: `**黄昏之战:** Ronaldo(40) vs Modrić(40)。克罗地亚中场控球→但葡萄牙有Vitinha+B.Silva对位。\n\n关键: Leão速度vs Juranović。如果克罗地亚能控中场70分钟不丢球→加时赛体能是真正考验。但葡萄牙off=+0.95→更可能在常规时间决定比赛。`, modelInterpretation: `**模型45.5% vs 市场57.1%** — 本轮最大分歧之一(+11.6pp)!\n\n模型给克罗地亚29.0% vs 市场18.8%→+10.2pp显著VALUE。市场被R1 2-4惨败锚定。但R2/R3恢复证明初始崩盘是偶然。\n\nElo差77→非碾压级,属均势偏葡萄牙。`, betReasoning: `**核心: 克罗地亚+0.75(@1.98, +10.2pp!) + Under 2.75(@1.93, +6.2pp)**\n\n让球: 模型克罗地亚不败54.5%→市场仅50.5%。Modrić控制+淘汰赛经验。市场被R1惨败锚定过深。\n\nUnder: 两队都年龄偏大+淘汰赛谨慎。λ_total=2.74实际节奏会更慢。\n\n**高赔:** 克罗地亚胜@5.33(模型29%→+54%EV!)高风险但极高正期望。` },
    confidence: 'mid',
  },

  // ==================== 3. 瑞士 vs 阿尔及利亚 (R32-12) ====================
  {
    team1: '瑞士', team2: '阿尔及利亚', group: 'R32', ground: 'BC Place(温哥华)', time: '03:00 UTC-5',
    elo1: 1865, elo2: 1772, eloDiff: 93,
    model: { home: 0.4691, draw: 0.2595, away: 0.2714 },
    market: { home: 0.490, draw: 0.304, away: 0.229, _note: 'Pinnacle (SUI 2.04, Draw 3.29, ALG 4.36)' },
    lambda: { home: 1.53, away: 1.11, total: 2.64 },
    gap: { team: '阿尔及利亚', value: 4.2, direction: 'model_higher' },
    formation1: '3-4-3', formation2: '4-3-3', coach1: 'Murat Yakin', coach2: 'Vladimir Petković',
    style1: `B组第1(10分 GD+6)。R1 1-1卡塔尔, R2 4-1波黑, R3 2-1加拿大。off=+0.41(进攻ok), def=-0.25(防守稳)。Xhaka+Manzambi组合小组赛爆发。体系化团队。`,
    style2: `J组第3→最佳第3出线(5分)。R1 待确认, R2 1-2约旦→修正为2-1, R3 3-3奥地利(Mahrez双响!)。off=-0.05(进攻平平), def=+0.75(防守脆弱)。Mahrez状态回春是唯一亮点。`,
    lineup1: 'Sommer; Elvedi, Akanji, Rodriguez; Widmer, Xhaka, Freuler, Vargas; Shaqiri, Manzambi, Ndoye',
    lineup2: "M'Bolhi; Atal, Mandi, Bedrane, Bensebaini; Bennacer, Zerrouki; Mahrez, Feghouli, Benrahma; Gouiri",
    injuries1: '全员健康', injuries2: 'Slimani(替补)',
    tacticalMatchup: [
      { area: '体系化程度', advantage: '瑞士', reason: 'Yakin 3-4-3成熟体系 vs 阿尔及利亚个人能力型。' },
      { area: '个人天赋', advantage: '阿尔及利亚(微)', reason: 'Mahrez(状态回春)+Benrahma+Gouiri vs 瑞士无单点爆破。' },
      { area: '防守组织', advantage: '瑞士', reason: 'def=-0.25 vs def=+0.75。Akanji(曼城)+Rodriguez经验。' },
      { area: '板凳深度', advantage: '瑞士', reason: '欧洲联赛球员储备>阿尔及利亚混合联赛。' },
    ],
    groupContext: `R32: B1(瑞士) vs J3(阿尔及利亚,最佳第3)。胜者R16对西班牙/奥地利胜者(大概率西班牙)。瑞士B组全胜晋级稳定。阿尔及利亚R3 3-3奥地利证明有搅局能力。`,
    handicaps: [
      { line: -0.5, win: 0.469, draw: 0, lose: 0.531, marketWin: '@2.04', marketLose: '@1.88', isMarketLine: true },
      { line: 0, win: 0.469, draw: 0.260, lose: 0.271 },
      { line: -1, win: 0.234, draw: 0.235, lose: 0.531 },
    ],
    overUnder: [
      { line: 2.25, over: 0.48, under: 0.52, marketOver: '@1.95', marketUnder: '@1.95', isMarketLine: true },
      { line: 2.5, over: 0.44, under: 0.56 },
    ],
    predictions: [
      { score: '1-1', prob: 12.0, reason: '最高概率。两队实力接近,阿尔及利亚有搅局能力' },
      { score: '1-0', prob: 11.2, reason: '瑞士体系化1球小胜(Manzambi制胜)' },
      { score: '2-1', prob: 9.2, reason: '瑞士微优+阿尔及利亚Mahrez偷1球' },
    ],
    recommendations: [
      { type: '让球', pick: '阿尔及利亚+0.5', odds: '@1.88', modelProb: 0.531, reason: '模型VALUE+4.2pp!阿尔及利亚不败53.1%>市场47.2%。R3 3-3奥地利(Mahrez双响)证明进攻爆发力。市场低估北非球队淘汰赛韧性。' },
      { type: '胜平负', pick: '平局', odds: '(@3.29)', modelProb: 0.260, reason: '微正EV(+0.3pp)。两队实力接近(Elo差93)。淘汰赛平局→加时/点球概率高。' },
      { type: '大小球', pick: 'Under 2.25', odds: '@1.95', modelProb: 0.52, reason: '微正EV(+0.7pp)。λ_total=2.64偏低+淘汰赛节奏保守。' },
    ],
    analysis: { groupSituation: `**R32: B1 vs J3 — 瑞士 vs 阿尔及利亚**\n\n📍 BC Place(温哥华), 03:00 UTC-5 (北京时间7/3 16:00)\n\n瑞士B组全胜(10分)状态稳定。阿尔及利亚作为最佳第3出线,R3 3-3奥地利(Mahrez双响)证明有搅局能力。\n\n**胜者R16对:** 西班牙/奥地利胜者(大概率西班牙)。`, lineup1Detail: `**瑞士(3-4-3):** Sommer; Elvedi, Akanji(曼城), Rodriguez; Widmer(RWB), Xhaka(勒沃库森→队长核心), Freuler(诺丁汉森林), Vargas(LWB进攻型); Shaqiri(经验), Manzambi(小组赛新星!), Ndoye(博洛尼亚→速度)。`, lineup2Detail: `**阿尔及利亚(4-3-3):** M'Bolhi; Atal(RB速度), Mandi(经验CB), Bedrane, Bensebaini(多特LB); Bennacer(米兰→中场核心), Zerrouki; Mahrez(RW→状态回春!R3双响), Feghouli(经验), Benrahma(LW技术); Gouiri(CF→R3进球)。`, styleAnalysis: `**瑞士:** Yakin 3-4-3成熟体系。Xhaka(33岁)组织+Akanji(曼城)防守。小组赛稳定(10分)但无碾压级表现。Manzambi R2/R3连续进球是惊喜。\n\n**阿尔及利亚:** 个人能力+北非韧性。Mahrez R3 3-3奥地利双响证明状态巅峰。Bennacer中场是真正的组织者。但整体不如瑞士体系化。`, tacticalNarrative: `**体系vs天赋:** 瑞士的3-4-3多年磨合 vs 阿尔及利亚Mahrez个人爆发。\n\n关键: 瑞士3CB能否限制Mahrez+Benrahma的个人突破?Xhaka经验vs Bennacer技术。如果阿尔及利亚前30分钟不丢球→信心增长,Mahrez可能制造意外。`, modelInterpretation: `**模型46.9% vs 市场49.0%** — 分歧不大(2pp)。但阿尔及利亚方向有hidden value: 模型27.1% vs 市场22.9%→+4.2pp。\n\n市场可能低估Mahrez R3回春效应和北非球队大赛韧性(2022摩洛哥四强)。`, betReasoning: `**推荐: 阿尔及利亚+0.5(@1.88, +4.2pp)**\n\n让球: 阿尔及利亚不败53.1%。R3 Mahrez双响3-3奥地利证明进攻爆发力。市场低估北非韧性。瑞士稳定但无碾压→平局高概率。\n\nUnder 2.25(@1.95): 微正EV。淘汰赛+两队实力接近→低比分。` },
    confidence: 'mid',
  },

  // ==================== 4. 澳大利亚 vs 埃及 (R32-13) ====================
  {
    team1: '澳大利亚', team2: '埃及', group: 'R32', ground: '待确认', time: '18:00 UTC-5',
    elo1: 1839, elo2: 1696, eloDiff: 143,
    model: { home: 0.5147, draw: 0.2532, away: 0.2321 },
    market: { home: 0.292, draw: 0.346, away: 0.394, _note: 'Pinnacle (AUS 3.42, Draw 2.89, EGY 2.54)' },
    lambda: { home: 1.62, away: 1.00, total: 2.62 },
    gap: { team: '澳大利亚', value: 22.3, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Graham Arnold', coach2: 'Hossam Hassan',
    style1: `D组第2(7分 GD+2)。R1 2-0土耳其(Irankunda爆发!), R2 0-2美国, R3 0-0巴拉圭。off=-0.68(进攻下滑), def=-0.58(防守稳固)。Irankunda(18岁拜仁新星)是亮点。`,
    style2: `G组第2(5分 GD+1)。R1 1-1比利时, R2 3-1新西兰(Salah回归), R3 1-1伊朗。off=+0.76(进攻超预期!Salah效应), def=-0.25(防守ok)。Salah(利物浦)是核心威胁。`,
    lineup1: 'Ryan; Atkinson, Souttar, Rowles, Behich; Mooy, Irvine, McGree; Irankunda, Duke, Goodwin',
    lineup2: 'El-Shenawy; Ashraf, Hegazy, Abdelmonem, Fatouh; Elneny, Fathy; Salah, Trezeguet, Zizo; Marmoush',
    injuries1: '全员健康', injuries2: '全员健康(Salah确认首发)',
    tacticalMatchup: [
      { area: '个人天赋', advantage: '埃及(碾压)', reason: 'Salah(利物浦→世界级) vs 澳大利亚无同级球星。单点差距巨大。' },
      { area: '防守纪律', advantage: '澳大利亚', reason: 'def=-0.58 vs def=-0.25。澳大利亚防守更有组织性(R1零封土耳其)。' },
      { area: '体能+跑动', advantage: '澳大利亚', reason: '澳式跑动覆盖是传统优势。加时赛体能优势。' },
      { area: '进攻效率', advantage: '埃及', reason: 'Salah个人能力可改变比赛。off=+0.76 vs off=-0.68→进攻端埃及远优。' },
    ],
    groupContext: `R32: D2(澳大利亚) vs G2(埃及)。胜者R16对阿根廷/佛得角胜者(大概率阿根廷!)。本场最大反常: 模型vs市场分歧22.3pp!市场大幅看好埃及但模型看好澳大利亚!`,
    handicaps: [
      { line: 0.25, win: 0.515, draw: 0, lose: 0.485, marketWin: '@1.81', marketLose: '@2.12', isMarketLine: true },
      { line: 0, win: 0.515, draw: 0.253, lose: 0.232 },
      { line: -0.5, win: 0.515, draw: 0, lose: 0.485 },
    ],
    overUnder: [
      { line: 1.75, over: 0.59, under: 0.41, marketOver: '@1.79', marketUnder: '@2.12', isMarketLine: true },
      { line: 2.5, over: 0.42, under: 0.58 },
    ],
    predictions: [
      { score: '1-0', prob: 12.5, reason: '澳大利亚防守优先+1球偷鸡(Irankunda反击)' },
      { score: '1-1', prob: 11.8, reason: '两队各入1球→加时/点球概率高' },
      { score: '0-1', prob: 10.2, reason: 'Salah个人能力1球制胜' },
    ],
    recommendations: [
      { type: '让球', pick: '澳大利亚+0.25', odds: '@1.81', modelProb: 0.515, reason: '⚠️ 本轮最大模型-市场分歧(22.3pp)!模型看好澳大利亚(Elo差+143)但市场看好埃及(Salah效应)。模型51.5%澳不败 vs 市场定价。跟模型有风险——Salah是X因素。' },
      { type: '大小球', pick: 'Over 1.75', odds: '@1.79', modelProb: 0.59, reason: '正EV(+3.2pp)。λ_total=2.62+两队都有进球能力→1.75线极低,至少2球高概率。' },
      { type: '胜平负', pick: '澳大利亚胜', odds: '(@3.42)', modelProb: 0.515, reason: '巨大VALUE! 模型51.5% vs 市场29.2%→+22.3pp!但⚠️模型可能低估Salah。高风险高回报。' },
    ],
    analysis: { groupSituation: `**R32: D2 vs G2 — 澳大利亚 vs 埃及**\n\n📍 待确认场地, 18:00 UTC-5 (北京时间7/4 07:00)\n\n⚠️ **本轮最大分歧!** 模型(Elo)大幅看好澳大利亚(51.5%),但Pinnacle市场大幅看好埃及(39.4%)。22.3pp差距是极端异常!\n\n原因: Elo差+143(澳更高),但Salah个人能力是Elo无法量化的。\n\n**胜者R16对:** 阿根廷/佛得角胜者。`, lineup1Detail: `**澳大利亚(4-3-3):** Ryan(GK); Atkinson, Souttar(莱斯特→高中卫), Rowles, Behich; Mooy(经验), Irvine(跑动), McGree(能量); Irankunda(18岁拜仁→速度爆点!), Duke(CF), Goodwin。Irankunda是R1 2-0土耳其英雄。`, lineup2Detail: `**埃及(4-2-3-1):** El-Shenawy(GK); Ashraf, Hegazy(经验CB), Abdelmonem, Fatouh; Elneny(阿森纳→稳定), Fathy; Salah(利物浦→世界级!R2进球), Trezeguet(R2进球), Zizo; Marmoush(法兰克福→进攻型)。Salah是绝对核心。`, styleAnalysis: `**澳大利亚:** 跑动覆盖+防守纪律(def=-0.58)。R1 2-0土耳其展现防守+反击能力。Irankunda(18岁拜仁)速度是唯一世界级个体。但R2/R3进攻下滑(0球)令人担忧。\n\n**埃及:** 以Salah为核心。off=+0.76(Salah效应显著)。Marmoush+Trezeguet支持。R2 3-1新西兰证明进攻多点。但整体体系不如澳大利亚有组织。`, tacticalNarrative: `**Elo vs 球星:** 这是"体系+Elo"与"个人天赋"之争。澳大利亚Elo高143点(D组第2)但无世界级球星。埃及Elo低但Salah(利物浦)是世界前10球员。\n\n**关键:** 澳大利亚能否用体系限制Salah?R1对土耳其(也有Güler个体天赋)成功零封→有经验。但Salah>Güler。\n\n**建议:** 市场可能更对→Salah效应是真实的,Elo无法捕捉。谨慎对待模型信号。`, modelInterpretation: `**模型51.5% vs 市场29.2%** — 22.3pp极端分歧!⚠️\n\n模型纯看Elo(澳1839 vs 埃及1696)→澳大利亚显著优势。但市场定价埃及更高(39.4%)→Salah效应+非洲杯经验。\n\n**判断:** 真实概率可能在模型和市场中间。模型低估Salah,市场可能高估。风险警告级别。`, betReasoning: `**谨慎推荐: Over 1.75(@1.79, +3.2pp) — 唯一安全方向**\n\nOver: 两队都有进球能力(澳Irankunda+埃及Salah)。1.75线低→至少2球高概率。\n\n**高风险推荐:** 澳大利亚胜@3.42(模型51.5%→+76%EV!但可能错)。建议极小仓位或回避。\n\n**核心分歧:** 跟模型=信任Elo体系,跟市场=信任Salah个体。本场无明确共识→降低仓位。` },
    confidence: 'low',
  },

  // ==================== 5. 阿根廷 vs 佛得角 (R32-14) ====================
  {
    team1: '阿根廷', team2: '佛得角', group: 'R32', ground: '待确认', time: '22:00 UTC-5',
    elo1: 2115, elo2: 1578, eloDiff: 537,
    model: { home: 0.8671, draw: 0.1063, away: 0.0266 },
    market: { home: 0.862, draw: 0.121, away: 0.051, _note: 'Pinnacle (ARG 1.16, Draw 8.29, CPV 19.51)' },
    lambda: { home: 2.64, away: 0.31, total: 2.95 },
    gap: { team: '佛得角', value: 2.4, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '5-4-1', coach1: 'Lionel Scaloni', coach2: 'Bubista',
    style1: `J组第1(9分全胜)。R1 3-0阿尔及利亚(Messi帽子戏法!), R2 2-0奥地利(Messi双响), R3 3-1约旦(Lo Celso+Messi)。off=+0.43(高效), def=-1.25(防线铁壁!)。Messi 7球领跑射手榜!`,
    style2: `H组第3→最佳第3出线(4分)。R1 0-0西班牙(!), R2 2-2乌拉圭(Pina+Varela), R3 0-0沙特。off=+0.52(黑马进攻超预期!), def=-0.25(防守有韧性)。两场逼平强队!`,
    lineup1: 'E.Martínez; Molina, Romero, Otamendi, Acuña; De Paul, E.Fernández, Mac Allister; Messi, Álvarez, Di María',
    lineup2: 'Vozinha; Stopira, Santos, Borges, Tavares, Pina; Dias, Fortes; Varela, Rodrigues, Andrade',
    injuries1: '全员健康(Messi状态巅峰)', injuries2: '全员健康',
    tacticalMatchup: [
      { area: '个人天赋', advantage: '阿根廷(碾压)', reason: 'Messi(7球!)+Álvarez+Di María vs 无知名球星。差距如天壤。' },
      { area: '防守韧性', advantage: '佛得角(惊人!)', reason: '0-0西班牙+2-2乌拉圭!两场逼平世界前10→防守韧性真实(def=-0.25)。' },
      { area: '中场控制', advantage: '阿根廷(碾压)', reason: 'De Paul+Fernández+Mac Allister vs 佛得角工兵型中场→技术代差3级。' },
      { area: '心理+X因素', advantage: '佛得角', reason: '毫无压力的黑马!已经超越所有人期待→每场比赛都是bonus。' },
    ],
    groupContext: `R32: J1(阿根廷) vs H3(佛得角,最佳第3)。胜者R16对澳大利亚/埃及胜者。阿根廷Messi 7球状态逆天。佛得角0-0西班牙+2-2乌拉圭是本届最大黑马故事!Elo差537=本轮碾压级。`,
    handicaps: [
      { line: -2.0, win: 0.438, draw: 0, lose: 0.562, marketWin: '@1.95', marketLose: '@1.95', isMarketLine: true },
      { line: -1.5, win: 0.533, draw: 0, lose: 0.467 },
      { line: -1, win: 0.533, draw: 0.202, lose: 0.265 },
    ],
    overUnder: [
      { line: 2.75, over: 0.52, under: 0.48, marketOver: '@1.85', marketUnder: '@2.04', isMarketLine: true },
      { line: 2.5, over: 0.57, under: 0.43 },
      { line: 3.0, over: 0.39, under: 0.61 },
    ],
    predictions: [
      { score: '2-0', prob: 18.5, reason: '最高概率。Messi+Álvarez各1球,佛得角大巴坚持但不进球' },
      { score: '3-0', prob: 14.2, reason: 'Messi帽子戏法(已做3次!)+佛得角进攻力不足以破Martínez' },
      { score: '1-0', prob: 9.8, reason: '佛得角大巴极限坚守→仅1球(0-0西班牙证明能做到!)' },
    ],
    recommendations: [
      { type: '让球', pick: '佛得角+2.0', odds: '@1.95', modelProb: 0.562, reason: '模型VALUE+5.2pp!佛得角不输2球56.2%>市场50%。0-0西班牙+2-2乌拉圭证明防守韧性真实!Messi虽强但佛得角大巴有实力。' },
      { type: '胜平负', pick: '阿根廷胜', odds: '(@1.16)', modelProb: 0.867, reason: '极高确定性但@1.16赔率无value。配多串。' },
      { type: '大小球', pick: 'Over 2.75', odds: '@1.85', modelProb: 0.52, reason: '微正EV(+0.7pp)。Messi状态(7球)+ λ=2.64期望。但佛得角防守韧性可能限制→谨慎。' },
    ],
    analysis: { groupSituation: `**R32: J1 vs H3 — 阿根廷 vs 佛得角**\n\n📍 待确认场地, 22:00 UTC-5 (北京时间7/4 11:00)\n\n梅西7球状态逆天 vs 本届最大黑马故事(0-0西班牙+2-2乌拉圭)!Elo差537=碾压级但佛得角已证明防守韧性真实。\n\n**胜者R16对:** 澳大利亚/埃及胜者。`, lineup1Detail: `**阿根廷(4-3-3):** E.Martínez; Molina, Romero, Otamendi, Acuña; De Paul, E.Fernández(本菲卡→世界级!), Mac Allister(利物浦); Messi(7球→射手榜第1!), Álvarez(曼城CF), Di María(本届退役之战?)。板凳:Lo Celso,Garnacho。`, lineup2Detail: `**佛得角(5-4-1):** Vozinha; Stopira, Santos, Borges, Tavares, Pina(FK专家!); Dias, Fortes; Varela(R2对乌拉圭进球), Rodrigues, Andrade。全员防守阵型5-4-1,大巴策略已对西班牙+乌拉圭奏效!`, styleAnalysis: `**阿根廷:** Messi最后一届(39岁!)→7球状态逆天。Álvarez支援+Di María经验。def=-1.25(全赛事并列最佳)。Scaloni体系成熟(2022冠军)。\n\n**佛得角:** 本届最大黑马!Elo仅1578(48队倒数)但0-0西班牙+2-2乌拉圭→防守韧性惊人。5-4-1全队防守+定位球偷鸡。Pina任意球+Varela反击是仅有得分手段。`, tacticalNarrative: `**Messi vs 大巴:** 佛得角的5-4-1对西班牙(4-3-3控球)成功零封→但Messi≠西班牙任何个体。Messi的个人突破+传球可能在第3防线间找到空间。\n\n**关键:** 佛得角能坚持多久?对西班牙坚持90分钟(0-0)。但阿根廷有Messi(比Yamal更具终结能力)+Álvarez前场逼抢。60分钟内不丢球→有戏。80分钟后体能下降→Messi空间打开。`, modelInterpretation: `**模型86.7% vs 市场86.2%** — 罕见地完全一致!双方都认为阿根廷碾压级胜率。\n\nElo差537是本轮最大。模型λ=2.64(阿根廷预期2.64球) vs 0.31(佛得角)→碾压。\n\n但佛得角def=-0.25(防守超预期!)→实际可能比模型预期更难攻破。让球+2.0方向有价值(佛得角不输2球56.2%)。`, betReasoning: `**核心: 佛得角+2.0(@1.95, +5.2pp)**\n\n让球: 佛得角0-0西班牙+2-2乌拉圭→防守韧性REAL。不输2球56.2%。即使阿根廷赢2-0也走水保本。Messi虽7球但前3场对手(阿尔及利亚/奥地利/约旦)防守远不如佛得角。\n\nOver 2.75(@1.85): 微正但佛得角大巴可能把比赛拖成低比分。谨慎小仓。` },
    confidence: 'high',
  },

  // ==================== 6. 哥伦比亚 vs 加纳 (R32-15) ====================
  {
    team1: '哥伦比亚', team2: '加纳', group: 'R32', ground: '待确认', time: '01:30 UTC-5',
    elo1: 1982, elo2: 1510, eloDiff: 472,
    model: { home: 0.8435, draw: 0.1247, away: 0.0318 },
    market: { home: 0.654, draw: 0.247, away: 0.135, _note: 'Pinnacle (COL 1.53, Draw 4.05, GHA 7.40)' },
    lambda: { home: 2.43, away: 0.31, total: 2.74 },
    gap: { team: '哥伦比亚', value: 19.0, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Néstor Lorenzo', coach2: 'Otto Addo',
    style1: `K组第2(7分 GD+4)。R1 3-1乌兹别克(Muñoz+Díaz+Campaz), R2 1-0刚果金(Muñoz), R3 0-0葡萄牙(全力防守保出线)。off=-0.03(进攻中规), def=-0.75(防线稳固!)。L.Díaz+James组合。`,
    style2: `L组第3→最佳第3出线(4分)。R1 1-0巴拿马(Yirenkyi 90+5绝杀!), R2 0-0英格兰(!), R3 1-2克罗地亚。off=-0.07(进攻乏力), def=-1.25(防守极佳!0-0英格兰!)。黑马防守型。`,
    lineup1: 'Vargas; Muñoz, Sánchez, Lucumí, Mojica; Ríos, Lerma, J.Rodríguez; L.Díaz, Córdoba, Arias',
    lineup2: 'Ati-Zigi; Lamptey, Amartey, Djiku, Mensah; Partey, Sulemana; Kudus, Semenyo, Yirenkyi; Ayew',
    injuries1: '全员健康', injuries2: '全员健康',
    tacticalMatchup: [
      { area: '进攻创造力', advantage: '哥伦比亚(碾压)', reason: 'James+L.Díaz(利物浦)+Muñoz vs 加纳创造力不足(off=-0.07)。' },
      { area: '防守纪律', advantage: '加纳(惊人!)', reason: 'def=-1.25! 0-0英格兰证明防线世界级!Partey(阿森纳)是中场屏障。' },
      { area: '中场控制', advantage: '哥伦比亚', reason: 'James+Ríos+Lerma vs Partey独扛→哥中场人数优势。' },
      { area: '个人天赋', advantage: '均势', reason: 'L.Díaz(利物浦) vs Kudus(西汉姆)+Partey(阿森纳)→各有1-2世界级个体。' },
    ],
    groupContext: `R32: K2(哥伦比亚) vs L3(加纳,最佳第3)。胜者R16对葡萄牙/克罗地亚胜者。哥伦比亚K组稳定出线。加纳0-0英格兰+90+5绝杀巴拿马是黑马之旅!`,
    handicaps: [
      { line: -1.0, win: 0.469, draw: 0, lose: 0.531, marketWin: '@1.92', marketLose: '@1.99', isMarketLine: true },
      { line: -0.5, win: 0.844, draw: 0, lose: 0.156 },
      { line: -1.5, win: 0.321, draw: 0, lose: 0.679 },
    ],
    overUnder: [
      { line: 2.25, over: 0.46, under: 0.54, marketOver: '@1.99', marketUnder: '@1.90', isMarketLine: true },
      { line: 2.5, over: 0.41, under: 0.59 },
    ],
    predictions: [
      { score: '1-0', prob: 15.8, reason: '最高概率!加纳def=-1.25限制进球+哥伦比亚仅1球突破' },
      { score: '2-0', prob: 14.5, reason: '哥伦比亚攻坚2球(L.Díaz+Muñoz)' },
      { score: '0-0', prob: 8.2, reason: '加纳大巴极限坚守(0-0英格兰模式复制!)' },
    ],
    recommendations: [
      { type: '胜平负', pick: '哥伦比亚胜', odds: '(@1.53)', modelProb: 0.844, reason: '模型VALUE+19.0pp!哥84.4% vs 市场65.4%→+19pp巨大正EV(@1.53→EV+29%)!模型Elo差472碾压级。但⚠️加纳def=-1.25可能让比赛焦灼。' },
      { type: '让球', pick: '加纳+1.0', odds: '@1.99', modelProb: 0.531, reason: '模型VALUE+3.8pp!加纳不输1球53.1%>市场50.3%。0-0英格兰+Partey中场屏障→有能力顶住90分钟。' },
      { type: '大小球', pick: 'Under 2.25', odds: '@1.90', modelProb: 0.54, reason: '正EV(+1.3pp)。加纳def=-1.25(与阿根廷并列全赛事最佳!)限制进球。哥伦比亚off=-0.03无碾压攻击力。' },
    ],
    analysis: { groupSituation: `**R32: K2 vs L3 — 哥伦比亚 vs 加纳**\n\n📍 待确认场地, 01:30 UTC-5 (北京时间7/4 14:30)\n\n哥伦比亚K组稳定出线(7分),James+L.Díaz组合有创造力。加纳L组最佳第3(4分),0-0英格兰+R1绝杀巴拿马是黑马之旅!加纳def=-1.25(全赛事并列最佳!)。\n\n**胜者R16对:** 葡萄牙/克罗地亚胜者。`, lineup1Detail: `**哥伦比亚(4-3-3):** Vargas; Muñoz(3球R32!多特RB进攻型), Sánchez(经验CB), Lucumí, Mojica; Ríos, Lerma(伯恩利→拦截), J.Rodríguez(James→35岁经验+传球大师!); L.Díaz(利物浦LW→速度+突破), Córdoba(CF), Arias。`, lineup2Detail: `**加纳(4-2-3-1):** Ati-Zigi; Lamptey(布莱顿RB→速度!), Amartey(莱斯特→经验), Djiku, Mensah; Partey(阿森纳→世界级后腰!中场屏障), Sulemana; Kudus(西汉姆→创造力核心), Semenyo, Yirenkyi(R1绝杀英雄); Ayew(老将CF)。`, styleAnalysis: `**哥伦比亚:** Lorenzo体系:控球+James创造力+L.Díaz速度。小组赛稳定但无碾压(R3 0-0葡萄牙=拼防守)。off=-0.03说明进攻端非爆发型→有攻坚困难。\n\n**加纳:** Otto Addo防守体系。def=-1.25(0-0英格兰!)Partey(阿森纳)中场拦截是基石。进攻仅靠Kudus+定位球。R1 Yirenkyi 90+5绝杀巴拿马→心理坚韧。`, tacticalNarrative: `**攻坚战:** 哥伦比亚如何打穿加纳def=-1.25?\n\nJames传球+L.Díaz速度是主要武器。但加纳0-0英格兰(Kane+Bellingham都没进)→证明能对抗世界级攻击线。Partey vs James中场对位是核心。\n\n**关键:** 如果60分钟0-0→加纳信心爆棚。哥伦比亚需在前半小时打破僵局,否则将陷入攻坚泥潭。`, modelInterpretation: `**模型84.4% vs 市场65.4%** — 19.0pp巨大分歧!模型纯看Elo差472(碾压级)→但加纳def=-1.25是模型未充分权重的因素。\n\n市场更合理定价:加纳虽Elo低但防守真实(0-0英格兰=硬数据)。实际概率可能在70-75%之间(模型偏高,市场偏低)。\n\n哥伦比亚胜@1.53→即使取75%也有+EV。`, betReasoning: `**核心: 哥伦比亚胜(@1.53, +19pp!) + Under 2.25(@1.90)**\n\n哥伦比亚胜: 即使保守取70%(模型和市场中间)→@1.53仍有+7%EV。Elo差太大,加纳进攻力(off=-0.07)几乎无法得分。\n\nUnder: 加纳def=-1.25+哥off=-0.03→进球来源受限。低比分1-0最可能。\n\n**风险:** 加纳真的可能0-0坚守90分钟→但点球赛哥伦比亚心理更强。` },
    confidence: 'high',
  },
]

// ====== Goal Distributions ======
export const goalDistributions: GoalDistribution[] = [
  {
    team1: '西班牙', team2: '奥地利',
    diffs: { '-5': 0.0001, '-4': 0.0008, '-3': 0.0048, '-2': 0.0229, '-1': 0.0781, '0': 0.187, '1': 0.2425, '2': 0.2145, '3': 0.1378, '4': 0.0692, '5': 0.0284, '6': 0.0099, '7': 0.003, '8': 0.0008 }
  },
  {
    team1: '葡萄牙', team2: '克罗地亚',
    diffs: { '-5': 0.0017, '-4': 0.0077, '-3': 0.0282, '-2': 0.081, '-1': 0.1705, '0': 0.2557, '1': 0.2232, '2': 0.138, '3': 0.0626, '4': 0.0224, '5': 0.0066, '6': 0.0016 }
  },
  {
    team1: '瑞士', team2: '阿尔及利亚',
    diffs: { '-5': 0.0013, '-4': 0.0062, '-3': 0.0242, '-2': 0.0742, '-1': 0.1653, '0': 0.2595, '1': 0.2303, '2': 0.1427, '3': 0.0645, '4': 0.0229, '5': 0.0067, '6': 0.0016 }
  },
  {
    team1: '澳大利亚', team2: '埃及',
    diffs: { '-5': 0.0008, '-4': 0.0042, '-3': 0.018, '-2': 0.0608, '-1': 0.1481, '0': 0.2532, '1': 0.2406, '2': 0.1583, '3': 0.0758, '4': 0.0284, '5': 0.0087, '6': 0.0023 }
  },
  {
    team1: '阿根廷', team2: '佛得角',
    diffs: { '-3': 0.0003, '-2': 0.0033, '-1': 0.023, '0': 0.1063, '1': 0.2019, '2': 0.2374, '3': 0.1963, '4': 0.1247, '5': 0.0642, '6': 0.0277, '7': 0.0103, '8': 0.0034 }
  },
  {
    team1: '哥伦比亚', team2: '加纳',
    diffs: { '-3': 0.0004, '-2': 0.0039, '-1': 0.0275, '0': 0.1247, '1': 0.2225, '2': 0.2432, '3': 0.1861, '4': 0.1092, '5': 0.0519, '6': 0.0207, '7': 0.0071, '8': 0.0021 }
  },
]

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 88,
  totalGoals: 211,
  avgGoals: 2.40,
  homeWins: 37,
  draws: 22,
  awayWins: 29,
  biggestWin: { match: '德国 7-1 库拉索', date: '2026-06-14' },
  latestGoal: { match: '比利时 3-2 塞内加尔', scorer: 'Tielemans(P)', date: '2026-07-01' },
}

// ====== Commercial Analyses ======
export const commercialAnalyses: Record<string, import('../types').CommercialAnalysis> = {}
