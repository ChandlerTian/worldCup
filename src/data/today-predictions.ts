import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/26 (G/H/I组R3) — CORRECTED =====
// model_agent --date 2026-06-26 re-run | H组R2 ESPN verified
// Contradictory O/U removed | 平局(edge<5pp) removed | off_residual corrected
export const todayPredictions: MatchPrediction[] = [

  {
    team1: '埃及', team2: '伊朗', group: 'G', ground: '西雅图', time: '20:00 UTC-7',
    elo1: 1696, elo2: 1772, eloDiff: -76,
    model: { home: 0.3132, draw: 0.2681, away: 0.4187 },
    market: { home: 0.3864, draw: 0.3702, away: 0.2434, _note: 'Pinnacle (2.52/2.63/4.0, vig-removed)' },
    lambda: { home: 1.18, away: 1.4, total: 2.58 },
    gap: { team: '伊朗', value: 17.5, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Hossam Hassan', coach2: 'Amir Ghalenoei',
    style1: `R1 1-1比利时(Salah进球,off=+0.76),R2 3-1胜新西兰。4分领跑! off=+0.76(超预期),def=-0.25(正常)。`,
    style2: `R1 2-2平新西兰(后卫进球,off=-0.41),R2 0-0比利时。2分。off=-0.41(2场0运动战进球!),def=-0.25(正常)。Azmoun+Taremi效率待提升。`,
    lineup1: 'El Shenawy; Hany, Hegazi, Abdelmonem, Hamdy; Elneny, Attia, Fathi; Salah, Mohamed, Marmoush',
    lineup2: 'Beiranvand; Rezaeian, Kanaanizadegan, Khalilzadeh, Hajsafi; Ezatolahi, Ghoddos; Jahanbakhsh, Azmoun, Taremi; Moghanlou',
    injuries1: '无', injuries2: '无',
    tacticalMatchup: [
      { area: '进攻核心', advantage: '埃及', reason: 'Salah off=+0.76(高效) vs Iran off=-0.41(低于预期)' },
      { area: '比赛动力', advantage: '伊朗', reason: '伊朗MUST-WIN。埃及平局即安全→可能保守' },
      { area: '防守组织', advantage: '均势', reason: 'def均为-0.25,表现正常' },
    ],
    groupContext: `G组R3: 埃及4分 vs 伊朗2分。埃及平=5分安全。伊朗MUST-WIN。同时:NZ vs Belgium。`,
    handicaps: [
      {line:1.0, win:0.5814, draw:0.2193, lose:0.1993},      {line:0.5, win:0.5814, draw:0.0, lose:0.4186},      {line:0.25, win:0.5144, draw:0.0, lose:0.4856},      {line:0, win:0.3133, draw:0.2681, lose:0.4186},      {line:-0.25, win:0.3803, draw:0.0, lose:0.6197, marketWin:"@2.05", marketLose:"@1.86", isMarketLine:true},      {line:-0.5, win:0.3133, draw:0.0, lose:0.6867},      {line:-1.0, win:0.1296, draw:0.1837, lose:0.6867}
    ],
    overUnder: [
      {line:1.5, over:0.7287, under:0.2713},      {line:1.75, over:0.6026, under:0.3974},      {line:2.0, over:0.4765, under:0.5235},      {line:2.25, over:0.6026, under:0.3974, marketOver:"@1.98", marketUnder:"@1.94", isMarketLine:true},      {line:2.5, over:0.4765, under:0.5235},      {line:3.0, over:0.2597, under:0.7403}
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'伊朗+0.25', odds:'@1.86', modelProb:0.6197, reason:'核心推荐。伊朗不败=赢盘。MUST-WIN+埃及保守→不败概率被低估' },
      {type:'胜平负', pick:'伊朗胜', odds:'@4.0', modelProb:0.4187, reason:'TYPE_C_STRUCTURAL +17.5pp。但CI宽[28-57%]→小额投注' },
      {type:'大小球', pick:'Over 2.25', odds:'@1.98', modelProb:0.6026, reason:'双方进球动力充足,lambda=2.58支持>2.25球' }
    ],
    analysis: {
      groupSituation: `G组R3: 埃及4分(GD+2) | 伊朗2分(GD 0) | 比利时2分 | NZ 1分。埃及平=5分大概率出线→可能保守。伊朗MUST-WIN(输=出局)→战术从防反转进攻。同时:NZ vs Belgium(Vancouver)。`,
      lineup1Detail: `埃及(4-3-3): R1 1-1比利时(Salah进球),R2 3-1新西兰。4分。Salah off_residual=+0.76(超高效!)→单核体系效率极高。Marmoush边路速度。平局即可→稳守反击。`,
      lineup2Detail: `伊朗(4-2-3-1): R1 2-2新西兰(后卫Rezaeian进球),R2 0-0比利时。2分。off_residual=-0.41→2场0运动战进球! Azmoun+Taremi双前锋效率不达预期。但MUST-WIN解锁进攻潜力——前两场保守战术将被抛弃。def_residual=-0.25(正常,旧版误报为+0.75已纠正)。`,
      styleAnalysis: `埃及:4-3-3控球,Salah右路内切=主威胁。平局即可→战术保守,收缩+快速反击。伊朗:4-2-3-1防反→MUST-WIN转型进攻。双前锋Azmoun+Taremi世界级→前两场off=-0.41是保守战术产物,本场将获更多支持。`,
      tacticalNarrative: `核心矛盾:埃及平局安全 vs 伊朗必须赢。伊朗前两场off=-0.41不能反映MUST-WIN时的进攻潜力。Azmoun+Taremi在必须进球时获更多支持。埃及Salah高效(off=+0.76)→反击威胁大。市场@4.00严重低估伊朗(gap+17.5pp TYPE_C)。伊朗不败=今日最佳方向。预期:开放对攻,进球>2.25。`,
      modelInterpretation: `伊朗41.9% vs Pinnacle 24.3% → +17.5pp(TYPE_C_STRUCTURAL)。CI95伊朗胜[28%-57%]→市场24.3%接近CI下界。λ=1.18/1.40(total=2.58)。Over 2.25=60.3%。关键纠正:伊朗def=-0.25(非旧版+0.75),off=-0.41(非旧版+0.20)。gap从+19.9→+17.5pp(仍显著)。`,
      betReasoning: `🎯伊朗+0.25(@1.86):核心。伊朗不败=赢盘,MUST-WIN动力+埃及保守。🎯伊朗胜(@4.00,+17.5pp):TYPE_C→小额。🎯Over 2.25(@1.98):双方进球动力,λ=2.58支持。❌埃及方向(负EV),平局(-10.2pp,Poisson高估)。旧版Under 1.75已移除(模型Over~70%)。`
    },
    confidence: 'mid'
  },

  {
    team1: '新西兰', team2: '比利时', group: 'G', ground: '温哥华', time: '20:00 UTC-7',
    elo1: 1562, elo2: 1894, eloDiff: -332,
    model: { home: 0.1034, draw: 0.1987, away: 0.6979 },
    market: { home: 0.0608, draw: 0.1216, away: 0.8176, _note: 'Pinnacle (16.0/8.0/1.19, vig-removed)' },
    lambda: { home: 0.62, away: 2.0, total: 2.63 },
    gap: { team: '比利时', value: 12.0, direction: 'market_higher' },
    formation1: '4-4-2', formation2: '4-3-3', coach1: 'Darren Bazeley', coach2: 'Domenico Tedesco',
    style1: `R1 2-2平伊朗(Just 2球!off=+0.57),R2 1-3负埃及。1分垫底。off=+0.57(有爆发力),def=+1.25(防守远超预期!)。`,
    style2: `R1 1-1平埃及,R2 0-0平伊朗。2分排第3。off=-1.17(2场仅1球!!),def=-0.75(防守低于预期)。黄金一代老化。`,
    lineup1: 'Sail; Payne, Boxall, Pijnaker, Cacace; Just, Bell, Stamenic, Garbett; Wood, Waine',
    lineup2: 'Courtois; Castagne, Faes, Debast, Theate; Onana, Tielemans; Bakayoko, De Bruyne, Doku; Lukaku',
    injuries1: '无', injuries2: 'De Bruyne轻微伤势(可能替补)',
    tacticalMatchup: [
      { area: '防守韧性', advantage: '新西兰', reason: 'def=+1.25(远超预期)。比利时穿深盘需质变' },
      { area: '比赛动力', advantage: '比利时', reason: 'MUST-WIN(输=淘汰)。NZ 1分几乎出局' },
      { area: '进攻状态', advantage: '均势', reason: '比利时off=-1.17但Elo差332+个体能力碾压' },
    ],
    groupContext: `G组R3: NZ 1分 vs 比利时2分。比利时MUST-WIN+盼埃及不胜。温哥华非主场。`,
    handicaps: [
      {line:3.0, win:0.7724, draw:0.1312, lose:0.0963},      {line:2.5, win:0.7724, draw:0.0, lose:0.2275},      {line:2.25, win:0.7185, draw:0.0, lose:0.2814},      {line:2.0, win:0.5566, draw:0.2158, lose:0.2275},      {line:1.5, win:0.5566, draw:0.0, lose:0.4433},      {line:1.0, win:0.3021, draw:0.2545, lose:0.4433},      {line:0, win:0.1034, draw:0.1987, lose:0.6978}
    ],
    overUnder: [
      {line:2.5, over:0.4891, under:0.5109},      {line:3.0, over:0.2705, under:0.7295},      {line:3.5, over:0.2705, under:0.7295, marketOver:"@1.85", marketUnder:"@2.05", isMarketLine:true},      {line:4.0, over:0.1269, under:0.8731}
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'新西兰+2.25', odds:'@2.01', modelProb:0.7185, reason:'比利时off=-1.17(2场1球)→穿深盘概率~22%。今日最强让球信号' },
      {type:'大小球', pick:'Under 3.5', odds:'@2.05', modelProb:0.7295, reason:'比利时攻击乏力+Nz防守韧性→结构性小球。+24pp' }
    ],
    analysis: {
      groupSituation: `G组R3: NZ 1分(GD-2) | 比利时2分(GD 0,MUST-WIN)。比利时必须赢+盼埃及不胜。NZ几乎出局(需大胜+GD逆转)。温哥华BC Place→非主场。同时:埃及vs伊朗(Seattle)。`,
      lineup1Detail: `新西兰(4-4-2): R1 2-2伊朗(Just 2球!off=+0.57),R2 1-3埃及。def_residual=+1.25(防守远超预期!)。Chris Wood(诺丁汉森林)中锋。Just(霍芬海姆)进攻奇兵。`,
      lineup2Detail: `比利时(4-3-3): R1 1-1埃及,R2 0-0伊朗。off_residual=-1.17(2场仅1球!!)——攻击力全赛事最差级别。De Bruyne(34岁,可能带伤),Lukaku(33岁,2场0球)。"黄金一代"严重退化。Doku+Bakayoko边路突破是仅存威胁。`,
      styleAnalysis: `新西兰:4-4-2英式直接打法,Wood支点+Just突破。def=+1.25(防守韧性)。比利时:4-3-3传控但效率极低→off=-1.17说明2场1球不是偶然而是结构性问题。`,
      tacticalNarrative: `TYPE_B_BRAND经典案例。市场81.8%定价"比利时黄金一代"品牌而非off=-1.17的现实。比利时必须赢但off=-1.17+NZ def=+1.25→穿盘+2.25概率极低(~22%)。NZ+2.25+Under 3.5=今日最确定双核。`,
      modelInterpretation: `比利时69.8% vs Pinnacle 81.8% → -12.0pp(TYPE_B_BRAND)。CI95比利时胜[54%-82%]→市场81.8%在CI上界。λ=0.62/2.00(total=2.63)。比利时λ=2.00(off=-1.17严重衰减)。Under 3.5=73.0%→结构性信号。`,
      betReasoning: `🎯新西兰+2.25(@2.01,+27.8pp):比利时穿深盘概率~22%。🎯Under 3.5(@2.05,+24.3pp):比利时攻击乏力+Nz防守韧性→结构性小球。❌比利时方向(TYPE_B_BRAND,负EV)。`
    },
    confidence: 'mid'
  },

  {
    team1: '佛得角', team2: '沙特阿拉伯', group: 'H', ground: '休斯顿', time: '19:00 UTC-5',
    elo1: 1578, elo2: 1576, eloDiff: 2,
    model: { home: 0.3872, draw: 0.2752, away: 0.3376 },
    market: { home: 0.3523, draw: 0.2889, away: 0.3588, _note: 'Pinnacle (2.78/3.39/2.73, vig-removed)' },
    lambda: { home: 1.3, away: 1.19, total: 2.49 },
    gap: { team: '佛得角', value: 3.5, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Bubista', coach2: 'Roberto Mancini',
    style1: `R1 0-0平西班牙(铁桶成功!),R2 2-2平乌拉圭(进2球!off=+0.52)。2分。off=+0.52(进攻有起色),def=-0.25(正常)。`,
    style2: `R1 1-1平乌拉圭(off=+0.02),R2 0-4惨败西班牙!! 1分垫底! def=+1.25(防守崩溃!丢4球)。`,
    lineup1: 'Vozinha; Stopira, Lopes, Ponck, Fortes; Rocha Santos, Pina, Duarte; Bebé, Tavares, Rodrigues',
    lineup2: 'Al-Owais; Abdulhamid, Tambakti, Al-Bulaihi, Al-Shahrani; Kanno, Al-Malki; Al-Dawsari, Al-Faraj, Al-Shehri; Al-Buraikan',
    injuries1: '无', injuries2: 'Al-Dawsari小伤(可能替补)',
    tacticalMatchup: [
      { area: '进攻状态', advantage: '佛得角', reason: 'off=+0.52(R2进2球) vs 沙特def=+1.25(防守崩溃)' },
      { area: '比赛动力', advantage: '均势', reason: '双方都需赢→利好大球' },
      { area: '防守漏洞', advantage: '佛得角', reason: '沙特def=+1.25(对西班牙丢4球)→致命弱点' },
    ],
    groupContext: `H组R3: 西班牙4分 vs 乌拉圭2分(同时) | 佛得角2分 vs 沙特1分。佛得角赢=5分(需看Uruguay)。沙特必须赢。`,
    handicaps: [
      {line:1.0, win:0.6623, draw:0.1953, lose:0.1423},      {line:0.5, win:0.6623, draw:0.0, lose:0.3376},      {line:0, win:0.3871, draw:0.2752, lose:0.3376, marketWin:"@1.98", marketLose:"@1.94", isMarketLine:true},      {line:-0.5, win:0.3871, draw:0.0, lose:0.6128},      {line:-1.0, win:0.1746, draw:0.2125, lose:0.6128}
    ],
    overUnder: [
      {line:1.5, over:0.7106, under:0.2894},      {line:2.0, over:0.4536, under:0.5464},      {line:2.25, over:0.5821, under:0.4179, marketOver:"@1.96", marketUnder:"@1.94", isMarketLine:true},      {line:2.5, over:0.4536, under:0.5464},      {line:3.0, over:0.2403, under:0.7597}
    ],
    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Over 2.25', odds:'@1.96', modelProb:0.5821, reason:'佛得角R2进2球(off=+0.52)+沙特def=+1.25防守崩溃→大球。旧版Under基于错误R2数据已纠正' }
    ],
    analysis: {
      groupSituation: `H组R3: 西班牙4分 vs 乌拉圭2分(同时) | 佛得角2分(GD-2) vs 沙特1分(GD-4)。佛得角:赢→5分(需看Uruguay结果)。沙特:必须赢(4分)+盼Uruguay输→才有可能出线。H1→2J vs H2→1J,优势285(HIGH)。`,
      lineup1Detail: `佛得角(4-3-3): R1 0-0西班牙(铁桶成功!),R2 2-2乌拉圭(进2球!off=+0.52)。2分。off=+0.52→进攻有起色。需要赢→不会死守。def=-0.25(正常)。`,
      lineup2Detail: `沙特(4-2-3-1): R1 1-1乌拉圭,R2 0-4惨败西班牙!! 1分垫底。def_residual=+1.25(防守崩溃!对西班牙丢4球)。Mancini必须赢→保守不适用。但防线漏洞(def=+1.25)是致命隐患。`,
      styleAnalysis: `佛得角:4-3-3反击型,R2进2球→off=+0.52进攻有起色。沙特:4-2-3-1控球型,R2 0-4惨败暴露防守漏洞(def=+1.25)。双方都需赢→利好大球。`,
      tacticalNarrative: `数据修正后全新视角:佛得角R2进2球(off=+0.52),沙特防守崩溃(def=+1.25)→利好大球。双方都需赢→不存在"平局即可"选项。预期:双方都有进球,总球>2.25。方向gap仅+3.5pp(噪声)→不推方向。`,
      modelInterpretation: `佛得角38.7% vs Pinnacle 35.2% → +3.5pp(噪声,<5pp)。CI95佛得角胜[25%-54%]→市场35.2%在CI内。λ=1.30/1.19(total=2.49)。Over 2.25=58.2%。关键纠正:旧版Under 2.25(64.2%)基于佛得角0进球+0失球的错误R2数据。R2实际2-2乌拉圭→模型方向反转。`,
      betReasoning: `🎯Over 2.25(@1.96,+7.2pp):佛得角能进球+沙特防守崩溃→大球。❌方向gap仅+3.5pp→不做胜平负。旧版Under 2.25已移除(基于错误R2数据)。`
    },
    confidence: 'mid'
  },

  {
    team1: '乌拉圭', team2: '西班牙', group: 'H', ground: '瓜达拉哈拉', time: '18:00 UTC-6',
    elo1: 1892, elo2: 2157, eloDiff: -265,
    model: { home: 0.1307, draw: 0.2104, away: 0.6589 },
    market: { home: 0.1559, draw: 0.2537, away: 0.5904, _note: 'Pinnacle (6.25/3.84/1.65, vig-removed)' },
    lambda: { home: 0.74, away: 1.96, total: 2.7 },
    gap: { team: '西班牙', value: 6.9, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-3-3', coach1: 'Marcelo Bielsa', coach2: 'Luis de la Fuente',
    style1: `R1 1-1平沙特(off=-0.58),R2 2-2平佛得角(进2球!进攻好转)。2分。Bielsa高压→两场3球。def=+0.25(防守OK)。`,
    style2: `R1 0-0平佛得角(铁桶无解,off=-0.77),R2 4-0大胜沙特!! 4分领跑! Euro 2024冠军强势反弹! off=-0.77(仍略低于预期但攻击力回归)。def=-0.25。`,
    lineup1: 'Rochet; Nández, Araújo, Giménez, Olivera; Valverde, Ugarte; Pellistri, De Arrascaeta, Rodríguez; Núñez',
    lineup2: 'Unai Simón; Carvajal, Le Normand, Laporte, Cucurella; Rodri, Pedri, Gavi; Lamine Yamal, Morata, Nico Williams',
    injuries1: 'Araújo疑似小伤', injuries2: '无(Morata状态回升→R2进球)',
    tacticalMatchup: [
      { area: '中场控制', advantage: '西班牙', reason: 'Rodri+Pedri+Gavi=世界第一中场' },
      { area: '战术体系', advantage: '乌拉圭', reason: 'Bielsa高压→克制传控。Núñez速度反击' },
      { area: '进攻状态', advantage: '西班牙', reason: 'R2 4-0大胜→攻击力回归。Uruguay off=-0.58仍低迷' },
    ],
    groupContext: `H组R3: 西班牙4分(GD+4) vs 乌拉圭2分(GD+1)。西班牙赢/平=锁头名。乌拉圭赢=5分锁头名。H1→2J vs H2→1J,优势285。`,
    handicaps: [
      {line:1.0, win:0.3411, draw:0.2515, lose:0.4074},      {line:0.75, win:0.404, draw:0.0, lose:0.596},      {line:0.5, win:0.3411, draw:0.0, lose:0.6589},      {line:0, win:0.1307, draw:0.2104, lose:0.6589},      {line:-0.5, win:0.1307, draw:0.0, lose:0.8693},      {line:-1.0, win:0.0369, draw:0.0938, lose:0.8693}
    ],
    overUnder: [
      {line:1.5, over:0.7513, under:0.2487},      {line:2.0, over:0.5064, under:0.4936},      {line:2.25, over:0.6289, under:0.3711, marketOver:"@1.94", marketUnder:"@1.96", isMarketLine:true},      {line:2.5, over:0.5064, under:0.4936},      {line:3.0, over:0.2859, under:0.7141}
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'乌拉圭+0.75', odds:'@2.09', modelProb:0.404, reason:'Bielsa体系克制传控。西班牙off=-0.77(攻击力在回归但非巅峰)→穿盘-0.75概率有限' },
      {type:'胜平负', pick:'西班牙胜', odds:'@1.65', modelProb:0.6589, reason:'TYPE_C_STRUCTURAL +6.9pp。R2 4-0反弹+ElO差265→胜率被低估' }
    ],
    analysis: {
      groupSituation: `H组R3: 西班牙4分(GD+4) vs 乌拉圭2分(GD+1)。西班牙:赢/平=锁头名。乌拉圭:赢=5分锁头名,平=3分危险,输=出局。同时:佛得角vs沙特(Houston)。H1→2J vs H2→1J,优势285(HIGH)。`,
      lineup1Detail: `乌拉圭(4-2-3-1): R1 1-1沙特,R2 2-2佛得角(进2球!)。2分。off=-0.58(仍低于预期但进步中)。Bielsa高压→克制传控。Núñez速度反击,Valverde远射。def=+0.25(防守OK)。`,
      lineup2Detail: `西班牙(4-3-3): R1 0-0佛得角(铁桶无解),R2 4-0大胜沙特!! 4分领跑! Euro 2024冠军强势反弹! off=-0.77(仍略低于预期但R2 4球证明攻击力回归)。Rodri+Pedri+Gavi=世界第一中场。Lamine Yamal(17岁!)右边路爆点。⭐⭐⭐关键纠正:旧版称西班牙"2场0球"是完全错误的!`,
      styleAnalysis: `乌拉圭:4-2-3-1高压反击,Bielsa疯跑体系→克制传控。西班牙:4-3-3传控,R2 4-0大胜证明攻击力回归。Rodri调度+Yamal突破→乌拉圭高压有破绽。`,
      tacticalNarrative: `H组头名争夺。西班牙R2 4-0强势反弹→攻击力回归(旧版off=-2.77是错误数据!)。乌拉圭R2进2球→进攻好转。战术克制:Bielsa高压vs西班牙传控。ElO差265+反弹势头→西班牙胜率被市场低估(gap+6.9pp TYPE_C)。预期:西班牙2-1或2-0,乌拉圭+0.75有对冲价值。`,
      modelInterpretation: `西班牙65.9% vs Pinnacle 59.0% → +6.9pp(TYPE_C_STRUCTURAL,修正后)。CI95西班牙胜[50%-78%]→市场59%在CI内偏低。λ=0.74/1.96(total=2.70)。Over 2.25=62.9%。关键纠正:旧版off=-2.77是错误数据(R2 Spain 4-0非平局)。gap从+3.4→+6.9pp→超过噪声阈值。`,
      betReasoning: `🎯乌拉圭+0.75(@2.09):Bielsa克制传控,西班牙穿盘-0.75概率有限。🎯西班牙胜(@1.65,+6.9pp):TYPE_C,但赔率低→建议搭配让球。❌平局(edge=-4.3pp<5pp,违反规则)。❌旧版Under 2.25(基于错误off=-2.77已纠正)。`
    },
    confidence: 'mid'
  },

  {
    team1: '挪威', team2: '法国', group: 'I', ground: '波士顿', time: '15:00 UTC-4',
    elo1: 1914, elo2: 2063, eloDiff: -149,
    model: { home: 0.2513, draw: 0.2338, away: 0.5149 },
    market: { home: 0.208, draw: 0.2045, away: 0.5876, _note: 'Pinnacle (4.69/4.77/1.66, vig-removed)' },
    lambda: { home: 1.21, away: 1.82, total: 3.03 },
    gap: { team: '法国', value: 7.3, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Ståle Solbakken', coach2: 'Didier Deschamps',
    style1: `R1 4-1伊拉克(Haaland 2球,off=+1.78!!),R2 3-2塞内加尔(Haaland 2球)。6分! off=+1.78(全赛事最强进攻!),def=+0.25。Haaland 4球领跑金靴。`,
    style2: `R1 3-1塞内加尔(Mbappé 2球,off=+0.89),R2 3-0伊拉克(Mbappé 2球)。6分! off=+0.89(稳定),def=-0.75(防守有漏洞)。Mbappé 4球。`,
    lineup1: 'Nyland; Ryerson, Ajer, Østigård, Meling; Berge, Ødegaard, Aursnes; Sørloth, Haaland, Nusa',
    lineup2: 'Maignan; Koundé, Konaté, Saliba, T.Hernandez; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Thuram',
    injuries1: '无', injuries2: '无',
    tacticalMatchup: [
      { area: '超级前锋', advantage: '均势', reason: 'Haaland 4球(off=+1.78) vs Mbappé 4球(off=+0.89)。金靴对决' },
      { area: '比赛动力', advantage: '均势', reason: '双方已出线→路径差仅43Elo(LOW)。可能轮换' },
      { area: '防守', advantage: '挪威', reason: 'def=+0.25 vs 法国def=-0.75(有漏洞)' },
    ],
    groupContext: `I组R3: 挪威6分 vs 法国6分——均已出线! 头名争夺,路径差43(LOW)→动力有限。双方可能轮换。Haaland vs Mbappé金靴对决。`,
    handicaps: [
      {line:1.5, win:0.7104, draw:0.0, lose:0.2895},      {line:1.0, win:0.485, draw:0.2254, lose:0.2895},      {line:0.5, win:0.485, draw:0.0, lose:0.5149},      {line:0, win:0.2512, draw:0.2338, lose:0.5149},      {line:-0.5, win:0.2512, draw:0.0, lose:0.7487},      {line:-1.0, win:0.1021, draw:0.1491, lose:0.7487, marketWin:"@1.85", marketLose:"@2.09", isMarketLine:true}
    ],
    overUnder: [
      {line:2.5, over:0.5835, under:0.4165},      {line:3.0, over:0.3595, under:0.6405},      {line:3.25, over:0.4715, under:0.5285, marketOver:"@2.06", marketUnder:"@1.86", isMarketLine:true},      {line:3.5, over:0.3595, under:0.6405},      {line:4.0, over:0.1898, under:0.8102}
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'挪威+1.0', odds:'@2.09', modelProb:0.485, reason:'双方已出线→可能轮换。+1.0深盘吸收轮换不确定性。唯一合理推荐' }
    ],
    analysis: {
      groupSituation: `I组R3: 挪威6分(GD+4) | 法国6分(GD+5)——均已出线! 头名vs次名路径差仅43 Elo(LOW)→争第1动力有限。双方都可能小幅轮换(为淘汰赛留力)。Haaland 4球 vs Mbappé 4球→金靴对决有个人动力。同时:塞内加尔vs伊拉克(已双双出局)。`,
      lineup1Detail: `挪威(4-3-3): R1 4-1伊拉克(Haaland 2球),R2 3-2塞内加尔(Haaland 2球)。6分! off_residual=+1.78(全赛事最强进攻!!)。Haaland(曼城)4球领跑金靴。Ødegaard(阿森纳)创造力。双方已出线→可能轮换。`,
      lineup2Detail: `法国(4-2-3-1): R1 3-1塞内加尔(Mbappé 2球),R2 3-0伊拉克(Mbappé 2球)。6分! off=+0.89(稳定),def=-0.75(防守有漏洞)。Mbappé(皇马)4球。双方已出线→可能轮换。Griezmann/Tchouaméni可能休息。`,
      styleAnalysis: `挪威:4-3-3直接进攻型,Ødegaard中场发动机→Haaland终结。攻强守弱(7球/2场)。法国:4-2-3-1务实型,Mbappé左路内切=杀手锏。def=-0.75有漏洞。`,
      tacticalNarrative: `⚠️双方已出线→轮换风险是核心变量。模型基于全主力数据→λ值可能高估。但Haaland+Mbappé金靴对决(各4球)提供个人进攻动力。挪威+1.0深盘吸收轮换不确定性。Over方向:λ=3.03但模型Under 3.25=52.9%→Over方向负EV。旧版Over 3.25推荐已移除。`,
      modelInterpretation: `法国51.5% vs Pinnacle 58.8% → -7.3pp(TYPE_B_BRAND→市场高估法国)。λ=1.21/1.82(total=3.03)。挪威λ=1.21(off=+1.78巨大加成!),法国λ=1.82。Under 3.25=52.9%。⚠️已出线轮换→模型不可靠(qualified team rotation blind spot,skill Rule 5)。`,
      betReasoning: `🎯挪威+1.0(@1.85):唯一合理推荐。模型71.0%不败≤1球,深盘吸收轮换不确定性。⚠️挪威胜@4.69(+4.3pp)在噪声范围(<5pp)+轮换→降至极小注(0.25%)或不投。❌法国方向(负EV)。❌旧版Over 3.25已移除(模型Under 52.9%→Over负EV)。`
    },
    confidence: 'mid'
  },

  {
    team1: '塞内加尔', team2: '伊拉克', group: 'I', ground: '多伦多', time: '15:00 UTC-4',
    elo1: 1860, elo2: 1607, eloDiff: 253,
    model: { home: 0.6538, draw: 0.208, away: 0.1383 },
    market: { home: 0.7796, draw: 0.1392, away: 0.0812, _note: 'Pinnacle (1.25/7.0/12.0, vig-removed)' },
    lambda: { home: 2.01, away: 0.8, total: 2.8 },
    gap: { team: '塞内加尔', value: 12.6, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-4-2', coach1: 'Aliou Cissé', coach2: 'Jesús Casas',
    style1: `R1 1-3负法国(off=+0.49),R2 2-3负挪威(Sarr 1球)。0分! 2场进3球→进攻还行但def=+1.75(防守崩溃!丢6球)。`,
    style2: `R1 1-4负挪威(off=-0.03),R2 0-3负法国。0分! def=+2.25(全赛事最差防守!丢7球)。`,
    lineup1: 'Mendy; Sabaly, Koulibaly, Diallo, Jakobs; Kouyaté, P.M.Sarr, Gueye; I.Sarr, Jackson, Mané',
    lineup2: 'Hassan; Ibrahim, Natiq, Adnan, Ali; Rashid, Bayesh, Amari, Ali Jassim; Hussein, Ali Al-Hamadi',
    injuries1: 'Mané小伤(可能替补)', injuries2: '无',
    tacticalMatchup: [
      { area: '个体能力', advantage: '塞内加尔', reason: 'Mané+Jackson+I.Sarr vs 中东联赛防线→物理优势' },
      { area: '比赛动力', advantage: '均势', reason: '双方0分已出局→荣誉战。无压力=节奏松散(利好Under)' },
      { area: '防守漏洞', advantage: '均势(都很差)', reason: '塞内加尔def=+1.75(丢6球) vs 伊拉克def=+2.25(丢7球)' },
    ],
    groupContext: `I组R3: 塞内加尔0分 vs 伊拉克0分——均已出局! 纯荣誉战。同时:挪威vs法国。`,
    handicaps: [
      {line:-3.0, win:0.0863, draw:0.1197, lose:0.7941},      {line:-2.5, win:0.206, draw:0.0, lose:0.7941},      {line:-2.0, win:0.206, draw:0.2013, lose:0.5928},      {line:-1.75, win:0.357, draw:0.0, lose:0.6431, marketWin:"@1.83", marketLose:"@2.08", isMarketLine:true},      {line:-1.5, win:0.4073, draw:0.0, lose:0.5928},      {line:-1.0, win:0.4073, draw:0.2465, lose:0.3463},      {line:-0.5, win:0.6538, draw:0.0, lose:0.3463},      {line:0, win:0.6538, draw:0.208, lose:0.1383}
    ],
    overUnder: [
      {line:2.5, over:0.5305, under:0.4695},      {line:3.0, over:0.3081, under:0.6919, marketOver:"@1.83", marketUnder:"@2.07", isMarketLine:true},      {line:3.5, over:0.3081, under:0.6919},      {line:4.0, over:0.1523, under:0.8477}
    ],
    predictions: [],
    recommendations: [
      {type:'让球', pick:'伊拉克+1.75', odds:'@2.08', modelProb:0.6431, reason:'塞内加尔穿深盘概率~36%。TYPE_B_BRAND→@1.25严重溢价' },
      {type:'大小球', pick:'Under 3.0', odds:'@2.07', modelProb:0.6919, reason:'模型Under=69.2%。荣誉战≠互爆→节奏松散利好小球。旧版Over已纠正' }
    ],
    analysis: {
      groupSituation: `I组R3: 塞内加尔0分(GD-3) | 伊拉克0分(GD-6)——均已出局! 荣誉战。塞内加尔想避免0分垫底。伊拉克想避免3连败。无出线压力=节奏可能松散(非"互爆局"→利好Under)。同时:挪威vs法国(Boston)。`,
      lineup1Detail: `塞内加尔(4-3-3): R1 1-3法国,R2 2-3挪威(进2球→进攻还行)。0分! 2场进3球(off=+0.49正常),但def_residual=+1.75(防守崩溃!2场丢6球)。Mané(利雅得胜利)可能告别战。Jackson(切尔西)中锋。`,
      lineup2Detail: `伊拉克(4-4-2): R1 1-4挪威,R2 0-3法国。0分! def_residual=+2.25(全赛事最差防守!2场丢7球)。全队以本土/中东联赛球员为主→对抗五大联赛球员处绝对下风。`,
      styleAnalysis: `塞内加尔:4-3-3身体素质碾压型,Mané+Jackson+I.Sarr对亚洲防线有物理优势。但def=+1.75防守漏洞大。伊拉克:4-4-2工兵型,攻防两端均处劣势。双方防守都差但节奏松散→不一定大球。`,
      tacticalNarrative: `荣誉战≠互爆局! 双方0分已出局→无压力=节奏松散,非"全力对攻"。塞内加尔@1.25严重溢价(-12.6pp TYPE_B_BRAND)。伊拉克+1.75(+?pp)+Under 3.0(+20.9pp)双核推荐。旧版Over 3.0是叙事覆盖模型的典型错误→已纠正。`,
      modelInterpretation: `塞内加尔65.4% vs Pinnacle 78.0% → -12.6pp(TYPE_B_BRAND→市场严重高估塞内加尔)。λ=2.01/0.80(total=2.80)。Under 3.0=69.2%→模型说Under。关键纠正:旧版Over 3.0(推荐)与模型方向矛盾,是"互爆局"叙事覆盖模型的错误。`,
      betReasoning: `🎯伊拉克+1.75(@2.08,+?pp):塞内加尔穿深盘概率~36%。TYPE_B_BRAND。🎯Under 3.0(@2.07,+20.9pp):模型Under=69.2%,荣誉战节奏松散利好小球。❌塞内加尔方向(TYPE_B_BRAND,负EV)。❌旧版Over 3.0(模型说Under→叙事覆盖错误)。`
    },
    confidence: 'mid'
  }
]

// ====== Goal Distributions ======
export const goalDistributions: Record<string, GoalDistribution> = {}

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 38, totalGoals: 88, avgGoals: 2.32,
  homeWins: 15, draws: 14, awayWins: 9,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '6/18' },
  latestGoal: { match: '土耳其 0-2 美国', date: '6/25', scorer: 'Balogun' }
}

export const commercialAnalyses: Record<string, CommercialAnalysis> = {}