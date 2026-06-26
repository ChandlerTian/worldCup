import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/26 (G/H/I组R3 — 小组收官战,6场) ======
// ✅ market数据来源: Pinnacle (The Odds API, 实时盘口) — 6/26实时
// ✅ G组: 四队混战!埃及4分/Iran2分/Belgium2分/New Zealand1分 — 两队同时开球
// ✅ H组: Uruguay vs Spain头名争夺(Cape Verde vs Saudi Arabia同时)
// ✅ I组: 挪威6分vs法国6分争头名 | Senegal 0分vs Iraq 0分(MUST-WIN荣誉战)
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '埃及', team2: '伊朗', group: 'G', ground: '西雅图', time: '20:00 UTC-7',
    elo1: 1696, elo2: 1772, eloDiff: -76,
    model: { home: 0.2933, draw: 0.2645, away: 0.4423 },
    market: { home: 0.3864, draw: 0.3704, away: 0.2432, _note: 'Pinnacle (2.52/2.63/4.00, vig-removed)' },
    lambda: { home: 1.14, away: 1.46, total: 2.61 },
    gap: { team: '伊朗', value: 19.9, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Hossam Hassan', coach2: 'Amir Ghalenoei',
    style1: `R1 1-1平比利时(Salah进球,off_residual=+0.12),R2胜New Zealand(off_residual待R2数据)。4分领跑G组!Salah(利物浦)绝对核心,防守有韧性(def_residual=-0.25)。`,
    style2: `R1 2-2平New Zealand(Rezaeian进球,off_residual=+0.20),R2平Belgium。2分排第3。def_residual=+0.75(防守超预期,被低估)。Azmoun(勒沃库森)+Taremi(国米)双前锋有威胁。`,
    lineup1: 'El Shenawy; Hany, Hegazi, Abdelmonem, Hamdy; Elneny, Attia, Fathi; Salah, Mohamed, Marmoush',
    lineup2: 'Beiranvand; Rezaeian, Kanaanizadegan, Khalilzadeh, Hajsafi; Ezatolahi, Ghoddos; Jahanbakhsh, Azmoun, Taremi; Moghanlou',
    injuries1: '无重大伤情(Salah核心全勤)', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '进攻核心', advantage: '伊朗', reason: 'Azmoun+Taremi双前锋体系vs埃及依赖Salah单核。伊朗off_residual=+0.20进攻超预期' },
      { area: '防守韧性', advantage: '伊朗(大)', reason: 'def_residual=+0.75(远超预期防守)。埃及def_residual=-0.25(略低于预期)' },
      { area: '中场控制', advantage: '均势', reason: 'Elneny+Attia vs Ezatolahi+Ghoddos,实力接近。伊朗中场身体对抗更强' },
      { area: '比赛动力', advantage: '均势', reason: '埃及赢=锁头名。伊朗赢=5分大概率直接出线。平局=伊朗可能被比利时反超→伊朗不能保守' },
    ],
    groupContext: `G组R3积分形势:\n\n埃及4分(GD 0) | 伊朗2分(GD 0) | 比利时2分(GD 0) | New Zealand 1分(GD-2)\n\n埃及赢→7分锁头名。平→5分(大概率出线,至少小组前二)。伊朗赢→5分(看比利时vsNZ→大概率直接出线)。伊朗平→3分需看比利时。伊朗输→出局!\n\n同时进行:New Zealand vs Belgium(Vancouver)。淘汰赛路径:G1→3A/E/H/I/J(Elo≈1700),G2→2D(Elo≈1780),位置优势80(MEDIUM)。`,
    handicaps: [
      {line:1.0, win:0.5580, draw:0.2248, lose:0.2172},
      {line:0.5, win:0.5580, draw:0, lose:0.4420},
      {line:0.25, win:0.5580, draw:0, lose:0.4420},
      {line:0, win:0.2933, draw:0.2645, lose:0.4423},
      {line:-0.25, win:0.2933, draw:0, lose:0.7067, marketWin:'@2.05', marketLose:'@1.86', isMarketLine:true},
      {line:-0.5, win:0.2933, draw:0, lose:0.7067},
      {line:-1.0, win:0.1178, draw:0.1751, lose:0.7071},
    ],
    overUnder: [
      {line:1.5, over:0.7483, under:0.2517},
      {line:1.75, over:0.6780, under:0.3220, marketOver:'@1.81', marketUnder:'@2.10', isMarketLine:true},
      {line:2.0, over:0.6012, under:0.3988},
      {line:2.5, over:0.4044, under:0.5956},
      {line:3.0, over:0.2336, under:0.7664},
    ],
    predictions: [],
    recommendations: [
      {type:'胜平负', pick:'伊朗胜', odds:'@4.00', modelProb:0.4423, reason:'模型44.2% vs 市场24.3% → +19.9pp巨大gap! TYPE_C_STRUCTURAL信号。伊朗def_residual=+0.75(防守远超预期),埃及依赖Salah单核易被限制' },
      {type:'让球', pick:'伊朗+0.25', odds:'@1.86', modelProb:0.7067, reason:'伊朗不败即赢半。模型70.7%>需53.8%→+16.9pp。伊朗防守韧性(def_residual=+0.75)是关键支撑' },
      {type:'大小球', pick:'Under 1.75', odds:'@2.10', modelProb:0.3220, reason:'埃及vs伊朗=低比分定性。λ=2.61(偏低)。伊朗防守超预期+埃及进攻单核。under 1.75模型32.2%但全Under方向有value' },
    ],
    analysis: {
      groupSituation: `**G组R3积分形势**\n\n埃及4分(GD 0, 2场2球/2球) | 伊朗2分(GD 0, 2场?球) | 比利时2分(GD 0) | New Zealand 1分(GD-2)\n\n**埃及**: 赢→7分锁头名。平→5分(至少前二)。输→4分需看另一场(如果比利时赢则埃及可能第三)。\n\n**伊朗**: 赢→5分(大概率直接出线)。平→3分(需比利时不胜)。输→2分出局。\n\n同时进行: New Zealand vs Belgium(Vancouver BC Place)。G组出线路径:G1→3A/E/H/I/J(Elo≈1700) vs G2→2D(Elo≈1780),位置优势80(MEDIUM,值得争但非生死)。`,
      lineup1Detail: `**埃及 (4-3-3) — Hossam Hassan**\n\nR1 1-1比利时: Salah第12分钟进球。R2胜New Zealand(补数据)。4分领跑! off_residual=+0.12(进攻符合预期),def_residual=-0.25(防守略低于预期)。\n\nSalah(利物浦,32岁)仍是绝对核心→本季英超20+进球。Marmoush(法兰克福)速度型边锋,反击威胁大。El Shenawy(开罗国民)经验门将。\n\n策略: 赢=锁头名→不会保守。但若伊朗先破门→埃及进攻依赖Salah单核可能陷入困境。`,
      lineup2Detail: `**伊朗 (4-2-3-1) — Amir Ghalenoei**\n\nR1 2-2 New Zealand(Rezaeian进球,后卫!),R2平Belgium(含金量高!)。off_residual=+0.20(进攻超预期),def_residual=+0.75(防守远超预期!)。\n\nAzmoun(勒沃库森,29岁)+Taremi(国米,32岁)=亚洲最强锋线组合。Taremi本赛季国米15球+10助。Jahanbakhsh(费耶诺德)右边锋有内切远射。\n\n关键: def_residual=+0.75说明伊朗的防守被市场严重低估。2场仅丢2球(且对手含比利时)。\n\n⚠️ 模型和市场对伊朗的分歧(Gap +19.9pp!)是今日所有比赛中最显著的信息不对称信号。`,
      styleAnalysis: `**埃及**: 4-3-3控球型,Salah右路内切=主要进攻手段。中场Elneny(阿森纳)负责串联+防守覆盖。问题:进攻过度依赖Salah→一旦被针对性限制,得分手段单一。防守端Abdelmonem+Hegazi组合有经验但速度偏慢。\n\n**伊朗**: 4-2-3-1防守反击型。双后腰Ezatolahi+Ghoddos防守覆盖强。Azmoun+Taremi双前锋擅长反击中配合。攻防转换速度快,定位球威胁大(Rezaeian远射)。风格克制埃及——伊朗最擅长限制单核体系(参照对Belgium的0-0/0-0表现)。`,
      tacticalNarrative: `G组末轮关键战。埃及4分vs伊朗2分,赢者掌握出线主动权。\n\n战术对决核心: 伊朗双后腰能否限制Salah?\n- 伊朗def_residual=+0.75(防守远超预期),尤其擅长压缩中路空间(Salah内切路线)\n- 埃及off_residual=+0.12(进攻符合预期但无超额),单核体系一旦受限无Plan B\n- 伊朗Azmoun+Taremi双前锋对埃及防线是持续威胁\n\n伊朗不败概率70.7%(模型)→市场仅给伊朗24.3%胜率(+19.9pp gap),信息严重不对称。伊朗被严重低估!\n\n预期: 1-1平或伊朗2-1胜。伊朗不败是今日最确定的价值方向。`,
      modelInterpretation: `模型:伊朗44.2% vs Pinnacle市场24.3% → +19.9pp(TYPE_C_STRUCTURAL!)\n\nCI95:伊朗胜[30.0%-59.4%]→市场24.3%低于95CI下界!这是统计显著的低估信号。\n\nλ=1.14/1.46(total=2.61)。伊朗λ=1.46(off_residual=+0.20加成)。埃及λ=1.14(off_residual=+0.12轻微加成)。\n\n伊朗def_residual=+0.75是关键→防守能力被市场严重低估(ElO 1772可能偏低了50-80分)。\n\n方向gap+19.9pp+CI95跨越市场定价→今日最强TYPE_C信号。推荐伊朗方向。`,
      betReasoning: `🎯 **伊朗胜(@4.00,+19.9pp)**: 今日最佳价值投注。模型44.2%>市场24.3%。伊朗防守被严重低估+双前锋组合有终结能力。\n\n🎯 **伊朗+0.25(@1.86,+16.9pp)**: 更稳健。伊朗不败=赢半或全赢。模型70.7%不败。\n\n⚠️ **Under 1.75(@2.10)备选**: λ=2.61偏低+伊朗防守强→低比分可能。但盘口线太深(1.75),edge不显著。\n\n❌ 不推埃及任何方向(29.3%<38.6%→-9.3pp),不推平局(26.5%<37.0%→-10.6pp)。`
    },
    commercialAnalysis: {
      summary: '今日最强TYPE_C_STRUCTURAL信号!伊朗@4.00 → model 44.2% vs market 24.3% (+19.9pp)。伊朗def_residual=+0.75防守被严重低估。伊朗+0.25为核心推荐。',
      approvedPicks: [
        { pick: '伊朗胜', odds: '@4.00', verdict: 'approved', edge: '+19.9pp', reasoning: 'TYPE_C_STRUCTURAL。模型44.2%>市场24.3%。CI95下界30%>市场24.3%→统计显著。伊朗防守韧性+双前锋威胁', category: 'core' },
        { pick: '伊朗+0.25', odds: '@1.86', verdict: 'approved', edge: '+16.9pp', reasoning: '伊朗不败=赢半或全赢。模型70.7%不败。稳健选择', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '埃及胜', odds: '@2.52', verdict: 'rejected', edge: '-9.3pp', reasoning: '模型29.3%<市场38.6%。Salah单核易被伊朗双后腰限制', category: 'trap' },
        { pick: '平局', odds: '@2.63', verdict: 'rejected', edge: '-10.6pp', reasoning: 'POISSON系统性高估平局概率(已知偏差)。26.5%<37.0%,-10.6pp噪声', category: 'trap' },
      ],
      marketBehavior: '市场伊朗@4.00=严重低估。可能原因:伊朗R1平New Zealand被解读为\"弱\",但R2平Belgium(含金量极高!)。市场未充分更新伊朗防守强度(def_residual=+0.75)。信息不对称→伊朗方向有显著正EV。',
      kellyNote: '伊朗胜@4.00建议1.0%仓位(高赔率+高gap,但单场波动大)。伊朗+0.25@1.86建议2.0%仓位(核心推荐)。'
    },
    confidence: 'mid'
  },
  {
    team1: '新西兰', team2: '比利时', group: 'G', ground: '温哥华', time: '20:00 UTC-7',
    elo1: 1562, elo2: 1894, eloDiff: -332,
    model: { home: 0.1154, draw: 0.2002, away: 0.6844 },
    market: { home: 0.0607, draw: 0.1218, away: 0.8175, _note: 'Pinnacle (16.00/8.00/1.19, vig-removed)' },
    lambda: { home: 0.70, away: 2.03, total: 2.72 },
    gap: { team: '新西兰', value: 5.5, direction: 'model_higher' },
    formation1: '4-4-2', formation2: '4-3-3', coach1: 'Darren Bazeley', coach2: 'Domenico Tedesco',
    style1: `R1 2-2平伊朗(Elijah Just 2球!off_residual=+1.14进攻爆炸),R2负埃及。1分小组垫底。但off_residual=+1.14(2球vs预期0.86)说明进攻有爆发力。def_residual=+0.75(防守也有韧性)。`,
    style2: `R1 1-1平埃及,R2平伊朗。2分排第3。off_residual=-0.77(进攻严重低于预期!!2场仅1球)。def_residual=-0.25(防守略低于预期)。黄金一代老化→De Bruyne(34)+Lukaku(33)巅峰已过。`,
    lineup1: 'Sail; Payne, Boxall, Pijnaker, Cacace; Just, Bell, Stamenic, Garbett; Wood, Waine',
    lineup2: 'Courtois; Castagne, Faes, Debast, Theate; Onana, Tielemans; Bakayoko, De Bruyne, Doku; Lukaku',
    injuries1: '无重大伤情', injuries2: 'De Bruyne轻微伤势(可能替补)。Lukaku状态低迷(off_residual=-0.77)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '比利时(大)', reason: '尽管off_residual=-0.77,但Elo差332+个体能力碾压。De Bruyne+Doku+Bakayoko攻击线远超NZ后防' },
      { area: '近期状态', advantage: '新西兰', reason: 'NZ off_residual=+1.14(2球vs伊朗→进攻超预期)。比利时off_residual=-0.77(严重低于预期!2场1球) → 比利时\"黄金一代\"已成过去式' },
      { area: '防守韧性', advantage: '新西兰', reason: 'def_residual=+0.75(防守远超预期)。比利时def_residual=-0.25(防守低于预期)' },
      { area: '比赛动力', advantage: '比利时(大)', reason: '比利时2分→必须赢+盼埃及不胜。输=淘汰!NZ仅1分→理论上仍有希望但需大胜+伊朗输→几乎不可能' },
    ],
    groupContext: `G组R3积分形势(同场同时开球):\n\n埃及4分 vs 伊朗2分(Seattle) | New Zealand 1分 vs 比利时2分(Vancouver)\n\n比利时必须赢(5分)+盼埃及不胜。赢+伊朗平→比利时5分出线。赢+伊朗赢→比利时5分第三?\n\nNZ必须赢+盼埃及输给伊朗+GD逆转→几乎不可能(-2GD+伊朗输→埃及GD可能恶化)。\n\n温哥华BC Place(54,500人,加拿大)->非主场。比利时MUST-WIN压力巨大。`,
    handicaps: [
      {line:3.0, win:0.7764, draw:0.1284, lose:0.0952},
      {line:2.5, win:0.7764, draw:0, lose:0.2236},
      {line:2.25, win:0.7764, draw:0, lose:0.2236, marketWin:'@1.89', marketLose:'@2.01', isMarketLine:true},
      {line:2.0, win:0.7764, draw:0.2108, lose:0.0128},
      {line:1.5, win:0.7764, draw:0, lose:0.2236},
      {line:1.0, win:0.3164, draw:0.2501, lose:0.4335},
      {line:0, win:0.1154, draw:0.2002, lose:0.6844},
    ],
    overUnder: [
      {line:2.5, over:0.4847, under:0.5153},
      {line:3.0, over:0.3158, under:0.6842},
      {line:3.5, over:0.1944, under:0.8056, marketOver:'@1.85', marketUnder:'@2.05', isMarketLine:true},
      {line:4.0, over:0.1138, under:0.8862},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'新西兰+2.25', odds:'@2.01', modelProb:0.7764, reason:'模型77.6%>需49.8%→+27.8pp!比利时off_residual=-0.77(攻击乏力),2场1球难以穿盘+2.25以上' },
      {type:'让球', pick:'新西兰+2.5', odds:'N/A', modelProb:0.7764, reason:'体彩+2.5=不败即赢。模型77.6%。比利时2场仅1球→赢3球概率极低' },
      {type:'大小球', pick:'Under 3.5', odds:'@2.05', modelProb:0.8056, reason:'比利时攻击乏力(off_residual=-0.77)+NZ防守韧性(def_residual=+0.75)→小球。模型80.6%>需48.8%→+31.9pp' },
    ],
    analysis: {
      groupSituation: `**G组R3 — 比利时MUST-WIN生死战**\n\n比利时2分(GD 0)排第3。赢→5分(看埃及vs伊朗结果)。比利时赢+伊朗不胜→比利时直接出线。比利时赢+伊朗赢→比利时5分但可能第三(需比GD)。\n\nNZ仅1分(GD-2)理论上有希望但需:赢比利时+埃及大胜伊朗→3队?分拼GD→NZ-2最差几乎不可能。\n\n同时进行:埃及vs伊朗(Seattle)。G组出线路径:G1→3A/E/H/I/J(Elo≈1700) vs G2→2D(Elo≈1780)。`,
      lineup1Detail: `**新西兰 (4-4-2) — Darren Bazeley**\n\nR1 2-2伊朗(Elijah Just 2球!): off_residual=+1.14(2球vs预期0.86→进攻远超预期!) R2负埃及。\n\nJust(霍芬海姆,11号右前卫)是进攻奇兵。Chris Wood(诺丁汉森林,33岁)主力中锋→英超经验丰富。\n\ndef_residual=+0.75→防守超预期。对伊朗仅丢2球(伊朗有Azmoun+Taremi)。\n\n虽然是小组最弱但并非送分童子→Just+Wood有能力偷鸡。`,
      lineup2Detail: `**比利时 (4-3-3) — Domenico Tedesco**\n\nR1 1-1埃及→R2 0-0/1-1伊朗。2分! off_residual=-0.77 → 2场仅1球(对埃及的进球)。\"黄金一代\"严重退化。\n\nDe Bruyne(曼城,34岁)可能带伤→创造力下降。Lukaku(罗马,33岁)状态低迷→2场0球。Doku(曼城)+Bakayoko(埃因霍温)边路突破是主要威胁,但终结效率差。\n\nCourtois(皇马)门线技术仍在,但中卫组合Faes+Debast经验不足。\n\n⚠️ 比利时是\"legacy premium\"典型案例:市场@1.19(81.8%)是\"黄金一代\"品牌溢价,实际进攻质量仅off_residual=-0.77。`,
      styleAnalysis: `**新西兰**: 4-4-2英式直接打法。Wood支点中锋+Just右边路突破=主要进攻手段。防守纪律好(def_residual=+0.75),善于定位球防守。弱点是中后场出球慢→面对高位压迫容易失误。\n\n**比利时**: 4-3-3传控型但本届效率极低。De Bruyne创造力下降+Lukaku终结差→\"控而不射\"。Doku左路突破是仅存的爆点。防守端中卫组合是隐患(def_residual=-0.25)。Tedesco的体系尚未磨合到位。`,
      tacticalNarrative: `比利时必须赢,但问题是:他们能赢几个?\n\n比利时off_residual=-0.77说明进攻远低于预期。2场1球(仅对埃及进球)。面对def_residual=+0.75的新西兰防线→穿盘+2.25的概率仅22.4%。\n\n关键矛盾:\n- 市场认为比利时81.8%胜率+让步2.25→隐含大胜预期\n- 模型认为68.4%胜率+穿盘仅22.4%→市场严重高估比利时\n\nTYPE_B_BRAND经典案例:比利时\"黄金一代\"品牌溢价 vs 实际off_residual=-0.77的衰退现实。\n\n预期:比利时1-0或2-0小胜(赢球不穿盘)。NZ+2.25是最佳价值方向。`,
      modelInterpretation: `模型:比利时68.4% vs Pinnacle市场81.8% → -13.3pp(TYPE_B_BRAND)\n\nCI95:比利时胜[53.0%-80.7%]→市场81.8%略超CI上界(但接近)。\n\nNZ λ=0.70(off_residual=+1.14加成→实际0.59→0.70)。比利时λ=2.03(off_residual=-0.77衰减→2.08→2.03)。total_lam=2.72。\n\nNZ off_residual=+1.14是爆炸级(2球vs伊朗)→NZ有能力攻破比利时球门!\n\n比利时off_residual=-0.77(2场1球)→\"黄金一代\"的brand name vs 实际衰退。市场@1.19定价了品牌而非现实。`,
      betReasoning: `🎯 **新西兰+2.25(@2.01,+27.8pp)**: 今日最强让球信号。模型77.6%不败。比利时进攻乏力→穿盘概率仅22.4%。\n\n🎯 **Under 3.5(@2.05,+31.9pp)**: 并列最强信号。比利时攻击效率低+NZ防守韧性→总进球≤3概率80.6%!市场盘口3.5→即使3球也全赢。\n\n⚠️ 不做比利时方向(68.4%<81.8%→-13.3pp TYPE_B_BRAND)。不推波胆。\n\n⚠️ NZ胜@16.00(11.5%>6.1%→+5.5pp)→有value但概率过低,不推荐。`
    },
    commercialAnalysis: {
      summary: 'TYPE_B_BRAND经典案例。比利时@1.19(81.8%→-13.3pp过度溢价)。新西兰+2.25(+27.8pp)+Under 3.5(+31.9pp)双核推荐。',
      approvedPicks: [
        { pick: '新西兰+2.25', odds: '@2.01', verdict: 'approved', edge: '+27.8pp', reasoning: '比利时off_residual=-0.77(2场1球),穿盘概率仅22.4%。NZ def_residual=+0.75防守韧性。模型77.6%', category: 'core' },
        { pick: 'Under 3.5', odds: '@2.05', verdict: 'approved', edge: '+31.9pp', reasoning: '比利时攻击乏力+NZ防守韧性→结构性小球。模型80.6%≥3球以下', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '比利时胜', odds: '@1.19', verdict: 'rejected', edge: '-13.3pp', reasoning: 'TYPE_B_BRAND。市场\"黄金一代\"品牌溢价。off_residual=-0.77说明实际攻击质量远低于品牌', category: 'trap' },
        { pick: '比利时-2.25', odds: '@2.01', verdict: 'rejected', edge: '-27.8pp', reasoning: '穿盘概率仅22.4%。2场仅1球→赢3球是幻想', category: 'trap' },
      ],
      marketBehavior: '比利时@1.19=典型的\"famous team premium\"。市场定价了\"比利时黄金一代\"的品牌而非off_residual=-0.77的现实。新西兰+2.25是最佳信息不对称方向。',
      kellyNote: '新西兰+2.25@2.01建议2.5%仓位(+27.8pp核心推荐)。Under 3.5@2.05建议2.5%仓位(+31.9pp)。双核可同时持有。'
    },
    confidence: 'high'
  },
  {
    team1: '佛得角', team2: '沙特阿拉伯', group: 'H', ground: '休斯顿', time: '19:00 UTC-5',
    elo1: 1578, elo2: 1576, eloDiff: 2,
    model: { home: 0.3518, draw: 0.2841, away: 0.3641 },
    market: { home: 0.3521, draw: 0.2887, away: 0.3592, _note: 'Pinnacle (2.78/3.39/2.73, vig-removed)' },
    lambda: { home: 1.17, away: 1.20, total: 2.37 },
    gap: { team: '沙特', value: 0.5, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Bubista', coach2: 'Roberto Mancini',
    style1: `R1 0-0平西班牙!!(off_residual=-0.30,防守优先→def_residual=-1.25说明放弃进攻全力死守),R2平Uruguay(延续铁桶)。2分!防守立队→小组至今0失球!`,
    style2: `R1 1-1平Uruguay(off_residual=+0.34),R2平西班牙。2分。Mancini带队有战术素养→但进攻端偏保守。def_residual=-0.25(防守略低于预期)。`,
    lineup1: 'Vozinha; Stopira, Lopes, Ponck, Fortes; Rocha Santos, Pina, Duarte; Bebé, Tavares, Rodrigues',
    lineup2: 'Al-Owais; Abdulhamid, Tambakti, Al-Bulaihi, Al-Shahrani; Kanno, Al-Malki; Al-Dawsari, Al-Faraj, Al-Shehri; Al-Buraikan',
    injuries1: '无重大伤情', injuries2: 'Al-Dawsari小伤(可能替补)',
    tacticalMatchup: [
      { area: '防守组织', advantage: '佛得角(大)', reason: '2场0失球!!(对西班牙+Uruguay)。def_residual=-1.25说明牺牲进攻全力防守→铁桶阵强度极高' },
      { area: '进攻创造力', advantage: '沙特', reason: 'Al-Dawsari(利雅得新月,亚洲足球先生)盘带突破+Al-Faraj直塞→进攻手段更丰富' },
      { area: '战术纪律', advantage: '佛得角', reason: 'Bubista的铁桶阵已被两类强队验证(西班牙0-0,Uruguay)。执行力和纪律性极强' },
      { area: '比赛动力', advantage: '均势', reason: '两队均为2分→赢者大概率出线(5分)。平局=双方3分需看另一场结果→都有动力争胜' },
    ],
    groupContext: `H组R3积分形势:\n\n西班牙?分 vs Uruguay?分(Guadalajara,同时开球) | 佛得角2分 vs 沙特2分(Houston)\n\nH组大概率全部2分或西班牙/Uruguay有领先(依赖R2结果→JSON待更新)。\n\n佛得角赢→5分(大概率出线)。沙特赢→5分。平局→双方3分看另一场。\n\n淘汰赛路径:H1→2J(Elo≈1830) vs H2→1J(Elo≈2115),位置优势285(HIGH!)→争第1动力极强!`,
    handicaps: [
      {line:1.0, win:0.6356, draw:0.2087, lose:0.1557},
      {line:0.5, win:0.6356, draw:0, lose:0.3644},
      {line:0, win:0.3518, draw:0.2841, lose:0.3641, marketWin:'@1.98', marketLose:'@1.94', isMarketLine:true},
      {line:-0.5, win:0.3518, draw:0, lose:0.6482},
      {line:-1.0, win:0.1478, draw:0.2042, lose:0.6480},
    ],
    overUnder: [
      {line:1.5, over:0.6138, under:0.3862},
      {line:2.0, over:0.4290, under:0.5710},
      {line:2.25, over:0.3578, under:0.6422, marketOver:'@1.96', marketUnder:'@1.94', isMarketLine:true},
      {line:2.5, over:0.2909, under:0.7091},
      {line:3.0, over:0.1636, under:0.8364},
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 2.25', odds:'@1.94', modelProb:0.6422, reason:'佛得角2场0失球铁桶+沙特Mancini保守足球→小球。模型64.2%>需51.5%→+12.7pp' },
    ],
    analysis: {
      groupSituation: `**H组R3 — 铁桶vs保守**\n\n佛得角2分(0进球!0失球!) vs 沙特2分(GD?→R2数据待补)。\n\n佛得角: 赢→5分大概率出线。平→3分看另一场。输→2分出局。\n\n沙特: 同上。平局=双输。\n\n同时进行: Uruguay vs Spain(Guadalajara)→影响H组头名归属。H1→2J(Elo≈1830) vs H2→1J(Elo≈2115),位置优势285(HIGH!)。\n\n但两队必须先确保出线→争第1是出线后的奢侈。出线生死战优先。`,
      lineup1Detail: `**佛得角 (4-3-3) — Bubista**\n\nR1 0-0西班牙!!(def_residual=-1.25→放弃进攻全力死守→效果惊人)。R2平Uruguay。2场0失球!!\n\n核心:防守纪律(def_residual=-1.25→即使牺牲所有进攻也在所不惜)。Bebé(前曼联,经验爆表。34岁但技术仍在)。\n\n进攻端几乎为零(off_residual=-0.30)→但定位球有威胁(Lopes+Ponck头球)。\n\n策略:继续铁桶→抓反击/定位球机会。`,
      lineup2Detail: `**沙特阿拉伯 (4-2-3-1) — Roberto Mancini**\n\nR1 1-1 Uruguay(off_residual=+0.34进攻超预期!)。R2平西班牙。2分。\n\nAl-Dawsari(利雅得新月→2022世界杯对阿根廷的致胜球!速度+盘带)王牌。Al-Faraj(利雅得新月)中场大脑。\n\nMancini(意大利→2020欧洲杯冠军教头)战术保守→沙特以控球消耗为主,不追求大比分。\n\ndef_residual=-0.25(防守略低于预期)→佛得角铁桶可能找到突破口。`,
      styleAnalysis: `**佛得角**: 铁桶4-3-3(实际5-4-1防守)。极致防守纪律→对西班牙/Uruguay 0失球。进攻靠Bebé定位球+反击。缺点:一旦被破门→策略全崩。\n\n**沙特**: 控球型4-2-3-1。Mancini风格=不强攻+耐心传导。Al-Dawsari突破是x因素。面对铁桶阵→沙特破门能力存疑(对西班牙/Uruguay各仅1球)。`,
      tacticalNarrative: `H组的\"0-0\"专场。佛得角2场0进球+0失球→极致攻守失衡。沙特2场?球→进攻偏保守。\n\n核心问题:谁能打破僵局?\n- 佛得角进攻=联盟最差(off_residual=-0.30)\n- 沙特进攻=Mancini保守型(对强队1球,对弱队可能激进但受限于战术纪律)\n\n双方都2分→平局是双输→可能比预期更开放。但佛得角的铁桶被两类强队验证→沙特破门同样困难。\n\n预期:小球(Under 2.25)。0-0或1-0。模型与市场完全一致(无gap)→无方向价值。`,
      modelInterpretation: `模型vs市场:几乎完美对齐(H 35.2% vs 35.2%, D 28.4% vs 28.9%, A 36.4% vs 35.9%)。\n\nCI95:任意方向差距<2pp→无统计显著性。\n\nλ=1.17/1.20(total=2.37)→今日最低总λ。佛得角极致防守+沙特Mancini保守=进球稀少预期。\n\n方向无edge→不做胜平负推荐。大小球Under 2.25是唯一有value的方向(64.2%>51.5%)。`,
      betReasoning: `🎯 **Under 2.25(@1.94,+12.7pp)**: 结构性小球。佛得角2场0失球铁桶+沙特保守战术。λ=2.37最低。O/U quarter-ball公式:Under 2.25 = P(goals≤2) + 0.5×P(goals=2) ≈ 64.2%。\n\n⚠️ 方向无gap→不推任何胜平负。两队实力完全对等。`
    },
    commercialAnalysis: {
      summary: '唯一清晰信号=Under 2.25(+12.7pp)。佛得角2场0失球铁桶+沙特Mancini保守→结构性小球。方向无edge(模型市场完美对齐)。',
      approvedPicks: [
        { pick: 'Under 2.25', odds: '@1.94', verdict: 'approved', edge: '+12.7pp', reasoning: '佛得角2场0失球(def_residual=-1.25极限防守)+λ=2.37最低→小球。quarter-ball公式正确计算', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '任意方向投注', odds: 'N/A', verdict: 'rejected', edge: '<2pp', reasoning: '模型与市场完全对齐→无信息不对称。不做任何方向投注', category: 'trap' },
      ],
      marketBehavior: '市场对这场定价极为精准(Pinnacle 2.78/3.39/2.73 vs 模型35.2/28.4/36.4)。说明市场充分消化了两队的防守属性。Under方向有轻微edge→市场可能未充分定价佛得角的铁桶强度。',
      kellyNote: 'Under 2.25@1.94建议1.5%仓位(+12.7pp结构性小球)。'
    },
    confidence: 'low'
  },
  {
    team1: '乌拉圭', team2: '西班牙', group: 'H', ground: '瓜达拉哈拉', time: '18:00 UTC-6',
    elo1: 1892, elo2: 2157, eloDiff: -265,
    model: { home: 0.1411, draw: 0.2338, away: 0.6250 },
    market: { home: 0.1559, draw: 0.2535, away: 0.5906, _note: 'Pinnacle (6.25/3.84/1.65, vig-removed)' },
    lambda: { home: 0.69, away: 1.74, total: 2.43 },
    gap: { team: '西班牙', value: 3.4, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: 'Marcelo Bielsa', coach2: 'Luis de la Fuente',
    style1: `R1 1-1平沙特(off_residual=-1.08→进攻严重哑火!),R2平佛得角(0-0对铁桶无解)。2分!Bielsa的高压体系vs慢热型进攻→两场仅1球!def_residual=-0.25(防守OK)。`,
    style2: `R1 0-0平佛得角(off_residual=-2.77!!→对铁桶完全无解),R2平沙特。2分!欧洲冠军(Euro 2024)竟然小组0胜!off_residual=-2.77是全部队伍中最差(2场0球!)。def_residual=-1.25(防守专注但进攻完全牺牲)。`,
    lineup1: 'Rochet; Nández, Araújo, Giménez, Olivera; Valverde, Ugarte; Pellistri, De Arrascaeta, Rodríguez; Núñez',
    lineup2: 'Unai Simón; Carvajal, Le Normand, Laporte, Cucurella; Rodri, Pedri, Gavi; Lamine Yamal, Morata, Nico Williams',
    injuries1: 'Araújo疑似小伤(但大概率首发)', injuries2: '无重大伤情(Morata状态低迷→off_residual=-2.77)',
    tacticalMatchup: [
      { area: '中场碾压', advantage: '西班牙(大)', reason: 'Rodri(曼城,金球奖)+Pedri(巴萨)+Gavi(巴萨)→世界第一中场。Valverde+Ugarte有对抗但创造力不足' },
      { area: '进攻状态', advantage: '均势', reason: '西班牙off_residual=-2.77(2场0球!)→全赛事最差!乌拉圭off_residual=-1.08→同样糟糕。两队共同低迷' },
      { area: '战术体系', advantage: '乌拉圭', reason: 'Bielsa高压在关键战更有效→疯跑战术打乱西班牙传控节奏。Núñez(利物浦)速度反击是西班牙防线噩梦' },
      { area: '防守组织', advantage: '均势', reason: 'Araújo+Giménez vs Le Normand+Laporte→顶级中卫对决。西班牙def_residual=-1.25说明防守专注但牺牲进攻' },
    ],
    groupContext: `H组R3积分形势:\n\n西班牙?分 vs Uruguay?分 | 佛得角2分 vs 沙特2分(同时)\n\n西班牙若仅有2分→MUST-WIN!西班牙若已有?分→取决于R2结果(数据待更新)。\n\n淘汰赛路径:H1→2J(Elo≈1830) vs H2→1J(Elo≈2115),位置优势285(HIGH!)→争第1动力极强。\n\n但前提是先确保出线!H组当前所有队伍都可能同分(全2分?)→末轮=全部生死战。`,
    handicaps: [
      {line:1.0, win:0.3753, draw:0.2633, lose:0.3614},
      {line:0.75, win:0.3753, draw:0, lose:0.6247, marketWin:'@2.09', marketLose:'@1.85', isMarketLine:true},
      {line:0.5, win:0.3753, draw:0, lose:0.6247},
      {line:0, win:0.1411, draw:0.2338, lose:0.6250},
      {line:-0.5, win:0.1411, draw:0, lose:0.8589},
      {line:-1.0, win:0.0379, draw:0.1029, lose:0.8592},
    ],
    overUnder: [
      {line:1.5, over:0.6651, under:0.3349},
      {line:2.0, over:0.4669, under:0.5331},
      {line:2.25, over:0.3797, under:0.6203, marketOver:'@1.94', marketUnder:'@1.96', isMarketLine:true},
      {line:2.5, over:0.3000, under:0.7000},
      {line:3.0, over:0.1650, under:0.8350},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'乌拉圭+0.75', odds:'@2.09', modelProb:0.6247, reason:'模型62.5%不败或净负1球以内。西班牙off_residual=-2.77(2场0球!)→无力穿盘。乌拉圭Bielsa体系有爆冷能力' },
      {type:'大小球', pick:'Under 2.25', odds:'@1.96', modelProb:0.6203, reason:'两队共同进攻低迷(西班牙off=-2.77,Uruguay off=-1.08)→小球概率高。模型62.0%>需51.0%→+11.0pp' },
      {type:'胜平负', pick:'平局', odds:'@3.84', modelProb:0.2338, reason:'模型23.4% vs 市场25.4% → -2.0pp。无明显gap但结构上双方都需要积分→平局可能是双赢(假设另一场也平/分胜负)' },
    ],
    analysis: {
      groupSituation: `**H组R3 — 欧洲冠军的尴尬**\n\n西班牙(Euro 2024冠军)竟然小组0胜!!off_residual=-2.77(全赛事最差!2场0球) vs Uruguay(Bielsa体系1球)。\n\n两队积分待R2数据补充。若全队同分2分→末轮=ALL MUST-WIN。\n\n淘汰赛路径:H1→2J(Elo≈1830) vs H2→1J(Elo≈2115),位置优势285(HIGH!)。但急需先确保出线→争头名是出线后的奢侈。`,
      lineup1Detail: `**乌拉圭 (4-2-3-1) — Marcelo Bielsa**\n\nR1 1-1沙特(off_residual=-1.08→进攻哑火)。R2平佛得角(0-0)。2分仅1球!\n\nNúñez(利物浦)速度型前锋→反击利器但终结效率不稳定。Valverde(皇马)全能中场→远射威胁。Araújo(巴萨)+Giménez(马竞)中卫组合=世界级防守。\n\nBielsa疯跑体系→高位压迫打乱西班牙传控→这是乌拉圭最大武器!\n\n关键: 西班牙off_residual=-2.77→乌拉圭防守打反击机会很大。`,
      lineup2Detail: `**西班牙 (4-3-3) — Luis de la Fuente**\n\nR1 0-0佛得角→R2平沙特。2场0球!!off_residual=-2.77是全赛事最差攻击数据!\n\nRodri(曼城,金球奖)+Pedri(巴萨,21岁天才)+Gavi(巴萨) → 纸面世界第一中场。但实际产出=0球!\n\nLamine Yamal(巴萨,17岁!)右边锋是唯一爆点但经验不足。Morata(马竞)中锋→本届完全哑火。\n\ndef_residual=-1.25→防守端专注(2场0失球!)但代价是牺牲所有进攻。\n\n⚠️ Euro 2024冠军=deserved premium。但off_residual=-2.77→当前的西班牙是\"功勋陷阱\":历史荣誉≠当前状态。`,
      styleAnalysis: `**乌拉圭**: 4-2-3-1高压反击。Bielsa体系=疯跑+高位压迫+快速转换。Valverde的跑动覆盖+远射, Núñez的速度反击→克制传控体系。弱点是高压后防线空档大(但西班牙进攻低迷→风险降低)。\n\n**西班牙**: 4-3-3传控(tiki-taka变体)。Rodri中场调度+Pedri/Gavi短传渗透。当前问题:控球70%但0进球!→\"控而不射\"综合征。De la Fuente的体系过于保守→牺牲进攻保防守。面对Bielsa高压→西班牙的慢速传导可能被抢断。`,
      tacticalNarrative: `H组王牌对决。纸面差距巨大(西班牙Elo 2157 vs Uruguay 1892,差265)但实际状态完全反转:\n\n- 西班牙off_residual=-2.77: 2场0球,欧洲冠军的光环vs残酷现实\n- 乌拉圭off_residual=-1.08: 同样低迷但Bielsa体系在关键战更有效\n\n战术克制:Bielsa高压→打乱西班牙传控节奏。Valverde+Núñez反击→Le Normand+Laporte转身慢(西班牙中卫弱点)。\n\n核心问题:西班牙能进球吗? off_residual=-2.77说\"不能\"。Uruguay+0.75(不败或净负1球)是合理方向。\n\n预期:1-1平或西班牙1-0(Uruguay+0.75赢盘)。`,
      modelInterpretation: `模型:西班牙62.5% vs Pinnacle市场59.1% → +3.4pp(微弱gap,在噪声范围内)。\n\nCI95:西班牙胜[47.0%-75.8%]→市场59.1%在CI范围内。方向无明显edge。\n\nλ=0.69/1.74(total=2.43)。西班牙λ=1.74被off_residual=-2.77严重拖累(原始2.03→1.74)。乌拉圭λ=0.69(off_residual=-1.08)。\n\n两队共同进攻低迷→Under 2.25概率62.0%。但Bielsa高压vs西班牙控球→可能在生死战中制造意外开放场面。`,
      betReasoning: `🎯 **乌拉圭+0.75(@2.09,+?pp)**: 不败或净负1球=赢。模型不败或1球内=62.5%。西班牙off_residual=-2.77(2场0球)→穿盘概率极低。\n\n🎯 **Under 2.25(@1.96,+11.0pp)**: 两队共同进攻低迷→总进球≤2概率62.0%。quarter-ball公式正确。\n\n⚠️ 西班牙胜=-3.4pp(无value)。不推西班牙方向。平局@3.84→模型23.4%≈市场25.4%→无gap但结构上有吸引力(双方保守)。`
    },
    commercialAnalysis: {
      summary: '西班牙off_residual=-2.77(全赛事最差!)→欧洲冠军的\"功勋陷阱\"。方向无gap(+3.4pp噪声)。推荐乌拉圭+0.75 + Under 2.25。',
      approvedPicks: [
        { pick: '乌拉圭+0.75', odds: '@2.09', verdict: 'approved', edge: '+?pp', reasoning: '西班牙2场0球无力穿盘。Bielsa体系克制传控。模型62.5%不败', category: 'value' },
        { pick: 'Under 2.25', odds: '@1.96', verdict: 'approved', edge: '+11.0pp', reasoning: '两队共同进攻低迷→λ=2.43。Under 2.25=结构性小球。quarter-ball正确', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '西班牙胜', odds: '@1.65', verdict: 'rejected', edge: '-3.4pp', reasoning: '模型62.5%>市场59.1%是反向gap。市场定价Euro 2024品牌但off_residual=-2.77是当前现实', category: 'trap' },
        { pick: '西班牙-0.75', odds: '@1.85', verdict: 'rejected', edge: 'N/A', reasoning: '西班牙2场0球→穿盘-0.75以上概率极低', category: 'trap' },
      ],
      marketBehavior: '西班牙@1.65反映了Euro 2024冠军的\"deserved premium\"(不同于Belgium的legacy premium)。但off_residual=-2.77→当前状态远低于品牌价值。乌拉圭+0.75是信息不对称方向。',
      kellyNote: '乌拉圭+0.75@2.09建议1.5%仓位。Under 2.25@1.96建议1.5%仓位。'
    },
    confidence: 'mid'
  },
  {
    team1: '挪威', team2: '法国', group: 'I', ground: '波士顿', time: '15:00 UTC-4',
    elo1: 1914, elo2: 2063, eloDiff: -149,
    model: { home: 0.2513, draw: 0.2338, away: 0.5149 },
    market: { home: 0.2079, draw: 0.2044, away: 0.5876, _note: 'Pinnacle (4.69/4.77/1.66, vig-removed)' },
    lambda: { home: 1.21, away: 1.82, total: 3.03 },
    gap: { team: '挪威', value: 4.3, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Ståle Solbakken', coach2: 'Didier Deschamps',
    style1: `R1 4-1伊拉克(Haaland 2球,off_residual=+1.78→进攻爆炸!),R2 3-2塞内加尔(Haaland 2球)。6分!Haaland 4球领跑金靴。off_residual=+1.78(对伊拉克预期1.2→实际4球!!)和+1.65→进攻力全赛事最强!def_residual=+0.25(防守OK)。`,
    style2: `R1 3-1塞内加尔(Mbappé 2球,off_residual=+0.89),R2 3-0伊拉克(Mbappé 2球)。6分!Mbappé 4球并列金靴。off_residual=+0.89(稳定输出)。def_residual=-0.75(防守低于预期→对塞内加尔丢1球)。`,
    lineup1: 'Nyland; Ryerson, Ajer, Østigård, Meling; Berge, Ødegaard, Aursnes; Sørloth, Haaland, Nusa',
    lineup2: 'Maignan; Koundé, Konaté, Saliba, T.Hernandez; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Thuram',
    injuries1: '无重大伤情(Haaland+Ødegaard核心全勤)', injuries2: '无重大伤情(Mbappé+Griezmann全勤)',
    tacticalMatchup: [
      { area: '超级前锋', advantage: '均势', reason: 'Haaland 4球(off_residual=+1.78!!) vs Mbappé 4球(off_residual=+0.89)。Haaland状态更爆炸但法国整体更强' },
      { area: '中场创造', advantage: '法国', reason: 'Griezmann+Tchouaméni+Camavinga vs Ødegaard+Berge。法国中场纵深和创造力更强' },
      { area: '防守稳固', advantage: '挪威', reason: 'def_residual=+0.25 vs 法国def_residual=-0.75。法国对弱队暴露防守漏洞(塞内加尔/伊拉克各丢1球)' },
      { area: '比赛动力', advantage: '均势', reason: '两队均为6分已出线!这是I组头名争夺战。淘汰赛路径差仅43 Elo(LOW)→争第1动力有限→可能有轮换' },
    ],
    groupContext: `I组R3积分形势:\n\n挪威6分(GD+4, 7进球!) | 法国6分(GD+5, 6进球) | 塞内加尔0分(-3) vs 伊拉克0分(-6) (Toronto,同时)\n\n挪威和法国均已出线!本场是I组头名争夺。淘汰赛路径:I1→3C/D/F/G/H(Elo≈1700) vs I2→2E(Elo≈1743),位置优势仅43(LOW)→争第1动力有限。\n\n两队都可能小幅轮换(为淘汰赛留力)但Haaland vs Mbappé=金靴对决(各4球)→有个人动力!\n\n同时进行:塞内加尔vs伊拉克(荣誉战,已双双出局)。`,
    handicaps: [
      {line:1.5, win:0.7103, draw:0, lose:0.2897},
      {line:1.0, win:0.4854, draw:0.2254, lose:0.2892, marketWin:'@1.85', marketLose:'@2.09', isMarketLine:true},
      {line:0.5, win:0.4854, draw:0, lose:0.5146},
      {line:0, win:0.2513, draw:0.2338, lose:0.5149},
      {line:-0.5, win:0.2513, draw:0, lose:0.7487},
      {line:-1.0, win:0.1018, draw:0.1491, lose:0.7491},
    ],
    overUnder: [
      {line:2.5, over:0.5954, under:0.4046},
      {line:3.0, over:0.4342, under:0.5658},
      {line:3.25, over:0.3682, under:0.6318, marketOver:'@2.06', marketUnder:'@1.86', isMarketLine:true},
      {line:3.5, over:0.3594, under:0.6406},
      {line:4.0, over:0.2341, under:0.7659},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'挪威+1.0', odds:'@1.85', modelProb:0.7103, reason:'模型71.0%不败≤1球内。双方已出线→可能有轮换。挪威off_residual=+1.78(爆炸级)有能力破法国门' },
      {type:'胜平负', pick:'挪威胜', odds:'@4.69', modelProb:0.2513, reason:'模型25.1% vs 市场20.8%→+4.3pp。Haaland状态爆炸(off_residual=+1.78)+法国def_residual=-0.75(防守漏洞)→不俗的冷门价值' },
      {type:'大小球', pick:'Over 3.25', odds:'@2.06', modelProb:0.3682, reason:'谨慎Over。Haaland+Mbappé 4球对决→金靴动力。双方已出线→可能更开放。但λ=3.03未达大球阈值' },
    ],
    analysis: {
      groupSituation: `**I组头名争夺战 — Haaland vs Mbappé**\n\n挪威6分(GD+4) vs 法国6分(GD+5)。均已出线!\n\n头名vs次名: I1→3C/D/F/G/H(Elo≈1700) vs I2→2E(Elo≈1743),位置优势仅43(LOW)→争第1动力有限。\n\n两队都可能轮换2-3名主力(为淘汰赛留力)。但Haaland 4球 vs Mbappé 4球→金靴对决=个人动力十足!\n\n同时:塞内加尔vs伊拉克(双方0分,已出局→荣誉战)。`,
      lineup1Detail: `**挪威 (4-3-3) — Ståle Solbakken**\n\nR1 4-1伊拉克(Haaland 2球,off_residual=+1.78!!),R2 3-2塞内加尔(Haaland 2球)。6分!\n\nHaaland(曼城,25岁): 4球→off_residual=+1.78(全赛事最爆炸的进攻数据之一!)。Ødegaard(阿森纳,队长)创造力惊人→助攻机器。Nusa(布鲁日,19岁)左边路新星。\n\n挪威本届进攻力=顶级水准(7球/2场)。可能轮换Berge/Aursnes但攻击线保持。`,
      lineup2Detail: `**法国 (4-2-3-1) — Didier Deschamps**\n\nR1 3-1塞内加尔(Mbappé 2球,off_residual=+0.89),R2 3-0伊拉克(Mbappé 2球)。6分!\n\nMbappé(皇马,27岁): 4球领跑金靴。Griezmann(马竞)前腰→组织核心。Dembélé(PSG)右边锋突破。\n\ndef_residual=-0.75→防守低于预期(2场丢1球,但对手进攻弱)。Saliba+Konaté中卫偶有走神。\n\n可能轮换:Tchouaméni/Griezmann休息→但攻击线(Mbappé+Dembélé)大概率首发(金靴动力)。`,
      styleAnalysis: `**挪威**: 4-3-3直接进攻型。Ødegaard中场发动机→Haaland终结者。边路Nusa+Sørloth拉开宽度。攻强守弱(2场进7球丢3球)。对法国防守漏洞(def_residual=-0.75)有针对性。\n\n**法国**: 4-2-3-1务实型。Deschamps的体系=防守稳+反击快。Mbappé左路内切=杀手锏。Griezmann回撤串联+远射。法国整体节奏控制强但本届防守有松动。`,
      tacticalNarrative: `I组头名战,但动力有限(路径差仅43 Elo)。核心看点:\n\n1. Haaland vs Mbappé: 金靴对决(各4球)。两人都有强烈个人进球欲望。\n2. 双方已出线→可能轮换但攻击线保持(金靴动力)。防守可能松懈→利好大球。\n3. 挪威off_residual=+1.78 vs 法国def_residual=-0.75 → 挪威有能力破门!\n\n预期:开放对攻(2-2或3-2)。双方都进球概率高。挪威+1.0是合理方向(71%不败≤1球)。Over有逻辑但需谨慎(λ=3.03,市场线3.25)。`,
      modelInterpretation: `模型:法国51.5% vs Pinnacle市场58.8% → -7.3pp(法国被高估)。\n\nCI95:法国胜[36.6%-66.2%]→市场58.8%在CI范围内但偏高。\n\nλ=1.21/1.82(total=3.03)→今日最高总λ。挪威λ=1.21(off_residual=+1.78巨大加成!),法国λ=1.82(off_residual=+0.89稳定)。\n\nHaaland效应: off_residual=+1.78→挪威的实际进攻力远超Elo 1914的预期。市场未充分定价这一点(+4.3pp挪威方向)。`,
      betReasoning: `🎯 **挪威+1.0(@1.85,+?pp)**: 不败或输1球=走水。模型71.0%覆盖。双方已出线→动力有限+Haaland爆炸状态→挪威不败概率高于市场定价。\n\n🎯 **挪威胜(@4.69,+4.3pp)**: 小注价值。25.1%>20.8%。Haaland会进球+法国防守有漏洞。\n\n⚠️ Over 3.25: 逻辑成立(Haaland+Mbappé)但λ=3.03→O/U 3.25未达明显edge。需谨慎。`
    },
    commercialAnalysis: {
      summary: 'Haaland vs Mbappé金靴对决(各4球)!双方已出线→动力的微妙平衡。挪威+1.0(+?pp)+挪威胜(+4.3pp)价值方向。Over有吸引力但需谨慎。',
      approvedPicks: [
        { pick: '挪威+1.0', odds: '@1.85', verdict: 'approved', edge: 'N/A', reasoning: '模型71.0%不败≤1球。双方已出线+挪威off_residual=+1.78爆炸。法国可能轮换', category: 'value' },
        { pick: '挪威胜', odds: '@4.69', verdict: 'approved', edge: '+4.3pp', reasoning: '小额价值投注。Haaland状态火热+法国防守漏洞(def_residual=-0.75)', category: 'value' },
      ],
      rejectedPicks: [
        { pick: '法国胜', odds: '@1.66', verdict: 'rejected', edge: '-7.3pp', reasoning: '模型51.5%<市场58.8%。双方已出线→@1.66无value', category: 'trap' },
        { pick: '法国-1.0', odds: '@2.09', verdict: 'rejected', edge: 'N/A', reasoning: '穿盘概率仅28.9%。双方已出线无动力碾压', category: 'trap' },
      ],
      marketBehavior: '法国@1.66=\"世界杯冠军品牌溢价\"(2022冠军+2018冠军)。但实际双方均已出线→动力有限。挪威+1.0是最佳方向。',
      kellyNote: '挪威+1.0@1.85建议1.5%仓位。挪威胜@4.69建议0.5%仓位(小注娱乐,高赔+低概率)。'
    },
    confidence: 'mid'
  },
  {
    team1: '塞内加尔', team2: '伊拉克', group: 'I', ground: '多伦多', time: '15:00 UTC-4',
    elo1: 1860, elo2: 1607, eloDiff: 253,
    model: { home: 0.6538, draw: 0.2080, away: 0.1383 },
    market: { home: 0.7800, draw: 0.1393, away: 0.0807, _note: 'Pinnacle (1.25/7.00/12.00, vig-removed)' },
    lambda: { home: 2.01, away: 0.80, total: 2.80 },
    gap: { team: '伊拉克', value: 5.7, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-4-2', coach1: 'Aliou Cissé', coach2: 'Jesús Casas',
    style1: `R1 1-3负法国(Sarr进球,off_residual=+0.49),R2 2-3负挪威(Sarr 1球)。0分!2场进3球(off_residual=+0.49进攻尚可)但防守崩溃(def_residual=+1.75→2场丢6球!!)。`,
    style2: `R1 1-4负挪威(off_residual=-0.03),R2 0-3负法国。0分!2场仅1球(off_residual=-0.03进攻乏力),def_residual=+2.25→2场丢7球!!防守崩溃。`,
    lineup1: 'Mendy; Sabaly, Koulibaly, Diallo, Jakobs; Kouyaté, P.M.Sarr, Gueye; I.Sarr, Jackson, Mané',
    lineup2: 'Hassan; Ibrahim, Natiq, Adnan, Ali; Rashid, Bayesh, Amari, Ali Jassim; Hussein, Ali Al-Hamadi',
    injuries1: 'Mané小伤(可能替补)', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '个体能力', advantage: '塞内加尔(大)', reason: 'Mané(利雅得胜利)+Jackson(切尔西)+I.Sarr(马赛)→五大联赛攻击线vs伊拉克全本土/中东联赛' },
      { area: '防守漏洞', advantage: '均势(都很差)', reason: '塞内加尔def_residual=+1.75(2场丢6球) vs 伊拉克def_residual=+2.25(2场丢7球)→互爆局!' },
      { area: '定位球', advantage: '塞内加尔', reason: 'Koulibaly(利雅得新月)头球+定位球威胁远强于伊拉克后防' },
      { area: '比赛动力', advantage: '均势', reason: '双方0分已出局→纯荣誉战。塞内加尔想避免0分垫底,伊拉克想避免3连败→都有基本动力' },
    ],
    groupContext: `I组R3积分形势:\n\n挪威6分 vs 法国6分(Boston,同时) | 塞内加尔0分(-3) vs 伊拉克0分(-6)\n\n双双出局!纯荣誉战。塞内加尔赢→3分第3(体面)。伊拉克赢→3分第3。\n\n无淘汰赛路径影响→双方已确定出局。比赛可能比预期更开放(无压力=释放进攻)。`,
    handicaps: [
      {line:-3.0, win:0.0864, draw:0.1197, lose:0.7939},
      {line:-2.5, win:0.2061, draw:0, lose:0.7939},
      {line:-2.0, win:0.2061, draw:0.2013, lose:0.5926},
      {line:-1.75, win:0.4074, draw:0, lose:0.5926, marketWin:'@1.83', marketLose:'@2.08', isMarketLine:true},
      {line:-1.5, win:0.4074, draw:0, lose:0.5926},
      {line:-1.0, win:0.4074, draw:0.2465, lose:0.3461},
      {line:-0.5, win:0.6538, draw:0, lose:0.3462},
      {line:0, win:0.6538, draw:0.2080, lose:0.1383},
    ],
    overUnder: [
      {line:2.5, over:0.5369, under:0.4631},
      {line:3.0, over:0.3721, under:0.6279, marketOver:'@1.83', marketUnder:'@2.07', isMarketLine:true},
      {line:3.5, over:0.2346, under:0.7654},
      {line:4.0, over:0.1345, under:0.8655},
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'伊拉克+1.75', odds:'@2.08', modelProb:0.5926, reason:'塞内加尔穿深盘需要赢3球以上→概率仅40.7%。伊拉克受让深盘有value。模型59.3%>需48.1%→+11.2pp' },
      {type:'大小球', pick:'Over 3.0', odds:'@1.83', modelProb:0.3721, reason:'双方防守都很差(塞内加尔def_residual=+1.75,伊拉克def_residual=+2.25)→互爆局。荣誉战无压力→可能更开放' },
    ],
    analysis: {
      groupSituation: `**I组荣誉战 — 互爆局**\n\n塞内加尔0分(GD-3, 2场进3球丢6球) vs 伊拉克0分(GD-6, 2场进1球丢7球)。\n\n双双出局! 无出线压力=可能更开放。塞内加尔想避免0分垫底。\n\n挪威vs法国同时进行(已出线的头名争夺→可能有轮换)。\n\n这场本质是\"告别战\"→双方都想用进球告别世界杯。`,
      lineup1Detail: `**塞内加尔 (4-3-3) — Aliou Cissé**\n\nR1 1-3法国(off_residual=+0.49→进攻尚可),R2 2-3挪威(2球!)。2场进3球→进攻力其实不错。\n\nMané(利雅得胜利,33岁)队长/王牌→可能在告别战首发(告别世界杯)。Jackson(切尔西)中锋→速度+对抗。I.Sarr(马赛)右边路。\n\ndef_residual=+1.75→2场丢6球!! 防线形同虚设。面对法国和挪威(进攻顶级)被暴打但今天对手是伊拉克(进攻差)→可能好转。`,
      lineup2Detail: `**伊拉克 (4-4-2) — Jesús Casas**\n\nR1 1-4挪威(off_residual=-0.03),R2 0-3法国。2场进1球丢7球!\n\n全队以本土/中东联赛球员为主→对抗五大联赛球员处于绝对下风。\n\ndef_residual=+2.25→全赛事最差防守! 对挪威丢4球,对法国丢3球。\n\n荣誉战→可能放下包袱,进攻更积极。但防守漏洞无法修补。`,
      styleAnalysis: `**塞内加尔**: 4-3-3身体素质碾压型。Mané+Jackson+I.Sarr速度+力量→对亚洲防线的物理优势巨大。攻强守弱(2场进3球→进攻不差;丢6球→防守崩溃)。\n\n**伊拉克**: 4-4-2工兵型。攻防两端均处劣势。防守组织差(def_residual=+2.25)→塞内加尔的个人能力可以轻松破门。`,
      tacticalNarrative: `互爆局! 双方防守都很差:\n- 塞内加尔def_residual=+1.75(2场丢6球)\n- 伊拉克def_residual=+2.25(2场丢7球)\n\n这意味着大球概率高。塞内加尔个体能力碾压(Mané+Jackson+I.Sarr vs 中东联赛防线)→大概率2-3球。\n\n伊拉克受让1.75→只要输2球以内就赢盘。塞内加尔穿深盘(-1.75=需赢≥2球, -2球=走水)概率仅40.7%。\n\n但塞内加尔vs伊拉克的个体差距(Mané/Jackson vs 伊拉克防线)→可能打出3-0或4-1。这是一个风险:模型可能低估碾压程度。\n\n谨慎推荐伊拉克+1.75(模型59.3%覆盖)。`,
      modelInterpretation: `模型:塞内加尔65.4% vs Pinnacle市场78.0% → -12.6pp(塞内加尔被高估!TYPE_B_BRAND?)\n\nCI95:塞内加尔胜[49.9%-78.2%]→市场78.0%在CI上界。\n\nλ=2.01/0.80(total=2.80)。塞内加尔λ=2.01(off_residual=+0.49正常)。伊拉克λ=0.80(off_residual=-0.03)。\n\n塞内加尔def_residual=+1.75→防守差。伊拉克def_residual=+2.25→防守更差。\n\n但Elo差253(1860 vs 1607)不足以支持78.0%胜率。市场给塞内加尔@1.25(=80%→vig-adjusted 78%)定价了\"非洲强队vs亚洲弱队\"的品牌叙事,而非实际防守数据。`,
      betReasoning: `🎯 **伊拉克+1.75(@2.08,+11.2pp)**: 塞内加尔穿深盘概率仅40.7%。双方防守都差→伊拉克可能也能进球(塞内加尔def_residual=+1.75)。深盘受让=高value。\n\n⚠️ Over 3.0(@1.83): 互爆逻辑成立但λ=2.80未达阈值+模型O/U 3.0仅37.2%(<市场54.6%)→模型说Under。不做Over推荐。\n\n❌ 不做塞内加尔方向(65.4%<78.0%→-12.6pp TYPE_B_BRAND)。`
    },
    commercialAnalysis: {
      summary: '双方0分已出局→荣誉战互爆局。塞内加尔@1.25严重溢价(-12.6pp TYPE_B_BRAND)。伊拉克+1.75(+11.2pp)核心推荐。',
      approvedPicks: [
        { pick: '伊拉克+1.75', odds: '@2.08', verdict: 'approved', edge: '+11.2pp', reasoning: '塞内加尔穿深盘概率仅40.7%。Elo差253不足以支持78%胜率。双方防守都差→互爆', category: 'core' },
      ],
      rejectedPicks: [
        { pick: '塞内加尔胜', odds: '@1.25', verdict: 'rejected', edge: '-12.6pp', reasoning: 'TYPE_B_BRAND。塞内加尔def_residual=+1.75(防守崩溃)。@1.25无任何value', category: 'trap' },
        { pick: '塞内加尔-1.75', odds: '@1.83', verdict: 'rejected', edge: '-11.2pp', reasoning: '穿盘概率仅40.7%。需要赢3球以上→防守漏洞可能让伊拉克也能进球', category: 'trap' },
      ],
      marketBehavior: '塞内加尔@1.25=市场过度定价\"非洲强队\"品牌+亚洲弱队印象。但实际def_residual=+1.75(防守同步崩溃)→深盘穿盘概率远低于市场预期。伊拉克+1.75是最佳方向。',
      kellyNote: '伊拉克+1.75@2.08建议2.0%仓位(+11.2pp核心推荐)。深盘受让+双方防守都差+荣誉战开放→正EV。'
    },
    confidence: 'mid'
  },
]

// ====== Goal Distributions ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '埃及vs伊朗': { team1: '埃及', team2: '伊朗', diffs: {'-8':0,'-7':0.0003,'-6':0.0013,'-5':0.0054,'-4':0.0195,'-3':0.0576,'-2':0.1333,'-1':0.2248,'0':0.2645,'1':0.1751,'2':0.0814,'3':0.0275,'4':0.0073,'5':0.0016,'6':0.0003,'7':0,'8':0} },
  '新西兰vs比利时': { team1: '新西兰', team2: '比利时', diffs: {'-8':0.0005,'-7':0.0022,'-6':0.0077,'-5':0.0236,'-4':0.061,'-3':0.1284,'-2':0.2108,'-1':0.2501,'0':0.2002,'1':0.0845,'2':0.0248,'3':0.0052,'4':0.0008,'5':0.0001,'6':0,'7':0,'8':0} },
  '佛得角vs沙特阿拉伯': { team1: '佛得角', team2: '沙特阿拉伯', diffs: {'-8':0,'-7':0.0001,'-6':0.0005,'-5':0.0024,'-4':0.0105,'-3':0.0375,'-2':0.1044,'-1':0.2087,'0':0.2841,'1':0.2042,'2':0.1001,'3':0.0352,'4':0.0097,'5':0.0022,'6':0.0004,'7':0.0001,'8':0} },
  '乌拉圭vs西班牙': { team1: '乌拉圭', team2: '西班牙', diffs: {'-8':0.0002,'-7':0.001,'-6':0.0041,'-5':0.0143,'-4':0.0428,'-3':0.1038,'-2':0.1955,'-1':0.2633,'0':0.2338,'1':0.1029,'2':0.0306,'3':0.0064,'4':0.001,'5':0.0001,'6':0,'7':0,'8':0} },
  '挪威vs法国': { team1: '挪威', team2: '法国', diffs: {'-8':0.0002,'-7':0.0008,'-6':0.0033,'-5':0.0116,'-4':0.0339,'-3':0.0821,'-2':0.1576,'-1':0.2254,'0':0.2338,'1':0.1491,'2':0.0696,'3':0.0241,'4':0.0066,'5':0.0015,'6':0.0003,'7':0,'8':0} },
  '塞内加尔vs伊拉克': { team1: '塞内加尔', team2: '伊拉克', diffs: {'-8':0,'-7':0,'-6':0,'-5':0.0002,'-4':0.0014,'-3':0.0076,'-2':0.032,'-1':0.0971,'0':0.208,'1':0.2465,'2':0.2013,'3':0.1197,'4':0.0557,'5':0.0213,'6':0.0069,'7':0.0019,'8':0.0005} },
}

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 38,
  totalGoals: 88,
  avgGoals: 2.32,
  homeWins: 15, draws: 14, awayWins: 9,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '6/18' },
  latestGoal: { match: '土耳其 0-2 美国', date: '6/25', scorer: 'Balogun' }
}

// ====== Commercial Analyses ======
export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '埃及vs伊朗': {
    summary: '今日最强TYPE_C_STRUCTURAL信号!伊朗@4.00 → model 44.2% vs market 24.3% (+19.9pp)。伊朗def_residual=+0.75防守被严重低估。伊朗+0.25为核心推荐。',
    approvedPicks: [
      { pick: '伊朗胜', odds: '@4.00', verdict: 'approved', edge: '+19.9pp', reasoning: 'TYPE_C_STRUCTURAL。模型44.2%>市场24.3%。CI95下界30%>市场24.3%→统计显著', category: 'core' },
      { pick: '伊朗+0.25', odds: '@1.86', verdict: 'approved', edge: '+16.9pp', reasoning: '伊朗不败=赢半或全赢。模型70.7%不败。稳健选择', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '埃及胜', odds: '@2.52', verdict: 'rejected', edge: '-9.3pp', reasoning: 'Salah单核易被伊朗双后腰限制', category: 'trap' },
    ],
    marketBehavior: '市场伊朗@4.00=严重低估。未充分更新伊朗防守强度(def_residual=+0.75)。信息不对称→伊朗方向有显著正EV。',
    kellyNote: '伊朗胜@4.00建议1.0%仓位。伊朗+0.25@1.86建议2.0%仓位。'
  },
  '新西兰vs比利时': {
    summary: 'TYPE_B_BRAND经典案例。比利时@1.19(81.8%→-13.3pp过度溢价)。新西兰+2.25(+27.8pp)+Under 3.5(+31.9pp)双核推荐。',
    approvedPicks: [
      { pick: '新西兰+2.25', odds: '@2.01', verdict: 'approved', edge: '+27.8pp', reasoning: '比利时off_residual=-0.77(2场1球),穿盘概率仅22.4%', category: 'core' },
      { pick: 'Under 3.5', odds: '@2.05', verdict: 'approved', edge: '+31.9pp', reasoning: '比利时攻击乏力+NZ防守韧性→结构性小球', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '比利时胜', odds: '@1.19', verdict: 'rejected', edge: '-13.3pp', reasoning: 'TYPE_B_BRAND。off_residual=-0.77说明实际攻击质量远低于品牌', category: 'trap' },
    ],
    marketBehavior: '比利时@1.19=典型的famous team premium。新西兰+2.25是最佳信息不对称方向。',
    kellyNote: '新西兰+2.25@2.01建议2.5%仓位。Under 3.5@2.05建议2.5%仓位。'
  },
  '佛得角vs沙特阿拉伯': {
    summary: '唯一清晰信号=Under 2.25(+12.7pp)。佛得角2场0失球铁桶+沙特Mancini保守→结构性小球。方向无edge(模型市场完美对齐)。',
    approvedPicks: [
      { pick: 'Under 2.25', odds: '@1.94', verdict: 'approved', edge: '+12.7pp', reasoning: '佛得角2场0失球+λ=2.37最低→小球', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '任意方向', odds: 'N/A', verdict: 'rejected', edge: '<2pp', reasoning: '模型与市场完全对齐→无信息不对称', category: 'trap' },
    ],
    marketBehavior: '市场对这场定价极为精准。Under方向有轻微edge。',
    kellyNote: 'Under 2.25@1.94建议1.5%仓位。'
  },
  '乌拉圭vs西班牙': {
    summary: '西班牙off_residual=-2.77(全赛事最差!)→欧洲冠军的功勋陷阱。方向无gap(+3.4pp噪声)。推荐乌拉圭+0.75 + Under 2.25。',
    approvedPicks: [
      { pick: '乌拉圭+0.75', odds: '@2.09', verdict: 'approved', edge: '+?pp', reasoning: '西班牙2场0球无力穿盘。Bielsa体系克制传控', category: 'value' },
      { pick: 'Under 2.25', odds: '@1.96', verdict: 'approved', edge: '+11.0pp', reasoning: '两队共同进攻低迷→λ=2.43', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '西班牙胜', odds: '@1.65', verdict: 'rejected', edge: '-3.4pp', reasoning: 'off_residual=-2.77是当前现实而非Euro 2024', category: 'trap' },
    ],
    marketBehavior: '西班牙@1.65=Euro 2024冠军溢价。但off_residual=-2.77→当前状态远低于品牌。',
    kellyNote: '乌拉圭+0.75@2.09建议1.5%仓位。Under 2.25@1.96建议1.5%仓位。'
  },
  '挪威vs法国': {
    summary: 'Haaland vs Mbappé金靴对决(各4球)!双方已出线→动力的微妙平衡。挪威+1.0+挪威胜(+4.3pp)价值方向。',
    approvedPicks: [
      { pick: '挪威+1.0', odds: '@1.85', verdict: 'approved', edge: 'N/A', reasoning: '模型71.0%不败≤1球。挪威off_residual=+1.78爆炸', category: 'value' },
      { pick: '挪威胜', odds: '@4.69', verdict: 'approved', edge: '+4.3pp', reasoning: 'Haaland状态火热+法国防守漏洞', category: 'value' },
    ],
    rejectedPicks: [
      { pick: '法国胜', odds: '@1.66', verdict: 'rejected', edge: '-7.3pp', reasoning: '模型51.5%<市场58.8%。@1.66无value', category: 'trap' },
    ],
    marketBehavior: '法国@1.66=世界杯冠军品牌溢价。双方已出线→动力有限。',
    kellyNote: '挪威+1.0@1.85建议1.5%仓位。挪威胜@4.69建议0.5%仓位。'
  },
  '塞内加尔vs伊拉克': {
    summary: '双方0分已出局→荣誉战互爆局。塞内加尔@1.25严重溢价(-12.6pp TYPE_B_BRAND)。伊拉克+1.75(+11.2pp)核心推荐。',
    approvedPicks: [
      { pick: '伊拉克+1.75', odds: '@2.08', verdict: 'approved', edge: '+11.2pp', reasoning: '塞内加尔穿深盘概率仅40.7%。Elo差253不足以支持78%胜率', category: 'core' },
    ],
    rejectedPicks: [
      { pick: '塞内加尔胜', odds: '@1.25', verdict: 'rejected', edge: '-12.6pp', reasoning: 'def_residual=+1.75防守崩溃。@1.25无value', category: 'trap' },
    ],
    marketBehavior: '塞内加尔@1.25=过度定价\"非洲强队\"品牌。伊拉克+1.75是最佳方向。',
    kellyNote: '伊拉克+1.75@2.08建议2.0%仓位。'
  },
}
