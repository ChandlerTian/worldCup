import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/27 (J/K/L组R3) — Pinnacle实时盘口 ======
// model_agent --date 2026-06-27 | The Odds API Pinnacle odds
// J组: 阿根廷锁定#1(死球), 阿尔及利亚vs奥地利=赢者出线
// K组: 哥伦比亚6分锁头名, 葡萄牙4分vs刚果(金)/乌兹别克争夺出线
// L组: 英格兰/加纳4分→平局即出线, 克罗地亚3分MUST-WIN
export const lastUpdated = '2026-06-27 23:00 CST (模型v3.0: Form重构+动态CI)'
export const todayPredictions: MatchPrediction[] = [

  // ==================== 1. 阿尔及利亚 vs 奥地利 (J组R3) ====================
  {
    team1: '阿尔及利亚', team2: '奥地利', group: 'J', ground: 'Kansas City', time: '21:00 UTC-5',
    elo1: 1772, elo2: 1830, eloDiff: -58,
    model: { home: 0.3046, draw: 0.2656, away: 0.4298 },
    market: { home: 0.22, draw: 0.46, away: 0.32, _note: 'Pinnacle (4.35/2.08/2.99, vig-removed)' },
    lambda: { home: 1.17, away: 1.44, total: 2.61 },
    gap: { team: '平局', value: 19.4, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: 'Vladimir Petković', coach2: 'Ralf Rangnick',
    style1: `R1 0-3负阿根廷(off=-0.05),R2 2-1胜约旦(off=0)。3分GD-1。进攻平平(off=-0.05),防守偏弱(def=+0.75→丢球超Elo预期)。` +
      `依赖Mahrez右路创造。赢=出线,输=淘汰。`,
    style2: `R1 3-1胜约旦(off=+0.32),R2 0-2负阿根廷(off=+0.32)。3分GD 0。进攻高效(off=+0.32超预期),防守正常(def=+0.25)。` +
      `Rangnick高压体系→高强度逼抢。平=大概率出线(GD优势),输则需看另一场。`,
    lineup1: 'Mandrea; Atal, Mandi, Bensebaini, Aït-Nouri; Bennacer, Bentaleb, Zerrouki; Mahrez, Bounedjah, Gouiri',
    lineup2: 'Pentz; Mwene, Danso, Lienhart, Prass; Seiwald, Grillitsch; Wimmer, Sabitzer, Baumgartner; Arnautović',
    injuries1: '无', injuries2: '无',
    tacticalMatchup: [
      { area: '进攻效率', advantage: '奥地利', reason: 'off=+0.32(超预期) vs 阿尔及利亚off=-0.05→奥地利终结能力更强' },
      { area: '防守稳定性', advantage: '奥地利', reason: 'def=+0.25 vs 阿尔及利亚def=+0.75(更漏)→奥地利后防更稳' },
      { area: '比赛动力', advantage: '均势', reason: '双方3分→赢者出线! 输者淘汰(需看另一场)。纯生死战' },
      { area: '中场控制', advantage: '奥地利', reason: 'Sabitzer+Seiwald双核 vs Bennacer→奥中场经验更丰富' },
    ],
    groupContext: `J组R3: 阿根廷6分(已出线锁#1) | 奥地利3分(GD 0) | 阿尔及利亚3分(GD-1) | 约旦0分(淘汰)。阿尔及利亚vs奥地利=直接出线争夺战:赢者晋级,输者出局(除非约旦爆冷阿根廷)。平局→奥地利大概率晋级(GD优势)。同时:约旦vs阿根廷(死球)。`,

    // ===== HANDICAP LINES (主队阿尔及利亚受让) =====
    handicaps: [
      // Market line: 阿尔及利亚 +0.25 @1.66
      {line:0.25, win:0.659, draw:0.0, lose:0.341, marketWin:"@1.66", marketLose:"@2.33", isMarketLine:true},
      {line:-1.5, win:0.1215, draw:0, lose:0.8785},
      {line:-1, win:0.1215, draw:0.1754, lose:0.7031},
      {line:-0.5, win:0.2969, draw:0, lose:0.7031},
      {line:0, win:0.2969, draw:0.2616, lose:0.4415},
      {line:0.5, win:0.5585, draw:0, lose:0.4415},
      {line:1, win:0.5585, draw:0.2228, lose:0.2187},
      {line:2, win:0.7813, draw:0.1332, lose:0.0855},
    ],

    // ===== OVER/UNDER =====
    overUnder: [
      // Market line: O/U 1.75
      {line:1.75, over:0.737, under:0.263, marketOver:"@1.95", marketUnder:"@1.92", isMarketLine:true},
      {line:1.5, over:0.7367, under:0.2633},
      {line:2.0, over:0.4965, under:0.5035},
      {line:2.25, over:0.3598, under:0.6402},
      {line:2.5, over:0.2543, under:0.7457},
      {line:3.0, over:0.1122, under:0.8878},
    ],

    predictions: [],
    recommendations: [
      {type:'胜平负', pick:'奥地利胜', odds:'@2.99', modelProb:0.4298, reason:'模型+11.0pp。奥地利off=+0.32(高效)+def更稳。市场平局46%过度保守' },
      {type:'大小球', pick:'Over 1.75', odds:'@1.95', modelProb:0.737, reason:'模型+23.7pp Over。λ=1.17/1.44(total=2.61)支持总进球>1.75。生死战双方无法完全保守' },
    ],
    analysis: {
      groupSituation: `J组R3: 阿根廷6分(GD+5,锁#1) | 奥地利3分(GD 0) | 阿尔及利亚3分(GD-1) | 约旦0分(GD-3,淘汰)。阿尔及利亚vs奥地利=纯生死战——赢者出线,输者淘汰。平局→奥地利GD优势大概率晋级(除非约旦大胜阿根廷逆转GD,极不可能)。同时:约旦vs阿根廷(死球,阿根廷轮换)。`,
      lineup1Detail: `阿尔及利亚(4-3-3): R1 0-3负阿根廷(off=-0.05, def=+0.75),R2 2-1胜约旦。off_residual=-0.05→进攻不及Elo预期,Mahrez+Bounedjah效率待提升。def_residual=+0.75→防守漏球超Elo预期(对阿根廷丢3球有对手因素但整体仍偏弱)。赢=出线,输=淘汰→全力进攻。`,
      lineup2Detail: `奥地利(4-2-3-1): R1 3-1胜约旦(off=+0.32),R2 0-2负阿根廷(面对世界冠军不丢人)。off_residual=+0.32→进攻超Elo预期,Sabitzer(多特蒙德)中场核心,Arnautović老将终结。def_residual=+0.25→防守接近Elo预期。Rangnick高压逼抢体系→高强度。`,
      styleAnalysis: `阿尔及利亚:4-3-3依靠Mahrez右路创造,中场Bennacer+Bentaleb技术型。但off=-0.05说明创造机会≠进球。奥地利:4-2-3-1 Rangnick红牛系高压,转换速度快,Sabitzer+Baumgartner后插上威胁大。奥地利的转换进攻恰是阿尔及利亚def=+0.75的防守弱点。`,
      tacticalNarrative: `核心矛盾:市场定价平局46%→预期极度保守。但双方都需要赢(平对阿尔及利亚≈淘汰)→\"must-win paradox\"倾向于开放而非保守。奥地利off=+0.32(超预期)+def=+0.25(更稳) vs 阿尔及利亚off=-0.05+def=+0.75(漏球)→奥地利技术优势明显。模型+11.0pp奥地利胜→市场平局被过度定价。Over 1.75模型73.7%→λ=1.17/1.44(total=2.61)支持进球。`,
      modelInterpretation: `奥地利43.0% vs Pinnacle 32.0% → +11.0pp gap。CI95奥地利胜[31-56%]→市场32%接近下界。λ=1.17/1.44(total=2.61)。市场draw 2.08(46% fair prob)恐过度——双方3分必须赢,\"must-win paradox\"倾向于开放。模型平局26.6%更合理。Over 1.75=73.7%→模型+23.7pp。`,
      betReasoning: `🎯奥地利胜(@2.99,+11.0pp):核心方向。off=+0.32高效+def更稳。🎯Over 1.75(@1.95,+23.7pp):生死战双方无法完全保守,"must-win paradox"倾向大球。❌平局(市场2.08过于保守,Poisson高估平局需>5pp才推)。`
    },
    confidence: 'mid'
  },

  // ==================== 2. 约旦 vs 阿根廷 (J组R3) ====================
  {
    team1: '约旦', team2: '阿根廷', group: 'J', ground: 'Dallas (Arlington)', time: '21:00 UTC-5',
    elo1: 1680, elo2: 2115, eloDiff: -435,
    model: { home: 0.0498, draw: 0.1403, away: 0.8099 },
    market: { home: 0.054, draw: 0.1106, away: 0.8354, _note: 'Pinnacle (17.94/8.76/1.16, vig-removed)' },
    lambda: { home: 0.44, away: 2.41, total: 2.85 },
    gap: { team: '阿根廷', value: -0.7, direction: 'market_higher' },
    formation1: '4-4-2', formation2: '4-3-3', coach1: 'Hussein Ammouta', coach2: 'Lionel Scaloni',
    style1: `R1 1-3负奥地利(off=-0.02),R2 1-2负阿尔及利亚(off=-0.02)。0分淘汰。进攻乏力(off=-0.02),防守极度漏球(def=+1.25→远超Elo预期!)。` +
      `已出局→无压力,或可放开踢。`,
    style2: `R1 3-0胜阿尔及利亚(off=+0.43),R2 2-0胜奥地利(off=+0.43)。6分GF5 GA0锁#1。全胜! off=+0.43(超强),def=-1.25(防守精英级,0失球远超预期)。` +
      `已锁头名→大概率轮换。Scaloni将让替补出场(Martínez, Dybala, Palacios等)。`,
    lineup1: 'Al-Fakhouri; Al-Arab, Al-Ajalin, Nasib, Al-Mardi; Al-Rawabdeh, Al-Rashdan; Al-Taamari, Olwan, Al-Naimat; Al-Dardour',
    lineup2: 'Rulli; Montiel, Pezzella, Medina, Acuña; Palacios, Paredes; Dybala, Lo Celso, Garnacho; Lautaro Martínez',
    injuries1: '无', injuries2: 'Messi可能轮休',
    tacticalMatchup: [
      { area: '球员实力', advantage: '阿根廷', reason: 'Elo差435。即使B队(Palacios+Dybala+Lautaro)仍碾压约旦' },
      { area: '比赛动力', advantage: '均势', reason: '阿根廷已锁#1(死球),约旦已淘汰→双方无动力→保守/演练' },
      { area: '防守限制', advantage: '阿根廷', reason: '约旦def=+1.25(防守极差)→即使阿B队也能轻松进球' },
    ],
    groupContext: `J组R3: 阿根廷6分(锁#1→死球轮换) | 约旦0分(淘汰)。双方均无实质比赛动力。阿根廷将轮换首发(Messi休息)。死球=Under天然场。同时:阿尔及利亚vs奥地利(生死战)。`,

    handicaps: [
      // Market line: 约旦 +2.25 @1.88
      {line:2.25, win:0.7094, draw:0.0, lose:0.2906, marketWin:"@1.88", marketLose:"@2.03", isMarketLine:true},
      {line:1.5, win:0.3913, draw:0, lose:0.6087},
      {line:1, win:0.1717, draw:0.2196, lose:0.6087},
      {line:0, win:0.042, draw:0.1297, lose:0.8283},
      {line:2, win:0.3913, draw:0.2371, lose:0.3716},
      {line:3, win:0.6284, draw:0.1816, lose:0.19},
    ],

    overUnder: [
      // Market line: O/U 3.25
      {line:3.25, over:0.2397, under:0.7603, marketOver:"@2.07", marketUnder:"@1.83", isMarketLine:true},
      {line:2.5, over:0.4876, under:0.5124},
      {line:2.75, over:0.4055, under:0.5945},
      {line:3.0, over:0.3259, under:0.6741},
      {line:3.5, over:0.1785, under:0.8215},
      {line:4.0, over:0.0895, under:0.9105},
    ],

    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 3.25', odds:'@1.83', modelProb:0.7603, reason:'死球(双方无动力)。约def=+1.25虽差但阿轮换后λ衰减→进球锐减。+22.4pp' },
    ],
    analysis: {
      groupSituation: `J组R3: 阿根廷6分(GD+5,锁#1→完全无压力) | 约旦0分(GD-3,淘汰)。纯死球(dead rubber)——双方均无任何出线动力。阿根廷将大幅轮换(Messi, Álvarez, De Paul等核心休息)。Scaloni确认Lautaro+Dybala领衔B队。`,
      lineup1Detail: `约旦(4-4-2): R1 1-3负奥地利,R2 1-2负阿尔及利亚。0分淘汰。off_residual=-0.02(接近Elo预期但整体进攻弱),def_residual=+1.25→防守极度漏球(远超Elo预期,被对手射门转化率极高)。Al-Taamari(蒙彼利埃)边路唯一威胁。已淘汰→心理放松,可能踢得更开放。`,
      lineup2Detail: `阿根廷(4-3-3 B队): R1 3-0阿尔及利亚(off=+0.43),R2 2-0奥地利。全胜GF5 GA0→攻防俱佳。off_residual=+0.43(进攻超预期→Mac Allister/Fernández中场创造力),def_residual=-0.75(防守精英级→Romero+Otamendi零封)。但本场全部轮换:预计Rulli; Montiel, Pezzella, Medina, Acuña; Palacios, Paredes; Dybala, Lo Celso, Garnacho; Lautaro。B队战力约=E22000→λ约1.86(0.75衰减)。`,
      styleAnalysis: `约旦:4-4-2依赖边路传中,Al-Taamari突破创造。但def=+1.25说明防守组织极度松散→即使阿B队也能轻易突破。阿根廷:4-3-3传控体系,但B队(Garnacho边路爆发+Dybala创造力)缺乏A队的体系协同→整体性下降约20-25%。`,
      tacticalNarrative: `死球天然Under场。阿根廷λ从2.48衰减到~1.86(0.75系数)→总进球从2.88降至~2.3。约旦def=+1.25虽差但阿B队缺乏A队的致命终结(Lautaro虽有实力但过去2场仅替补)。双无动力→节奏慢→Under 3.25结构性强。约旦+2.25:模型53.8%覆盖 vs 市场@1.88(53.2%→持平),但阿轮换后穿深盘概率实际更低。`,
      modelInterpretation: `阿根廷81.0% vs Pinnacle 83.5% → 几乎完全一致(仅差-2.6pp)。λ=0.44/2.41(total=2.85)→阿轮换后λ≈1.86,total≈2.26。Under 3.25=76.0%→死球天然优势。注意:模型λ为全主力值,实际死球λ应更低→Under信号更强。`,
      betReasoning: `🎯Under 3.25(@1.83,+26.0pp):死球=双方无动力+阿轮换→λ衰减→小球天然场。结构性强。⚠️约旦+2.25(@1.88,0.9pp edge):微弱价值。阿B队仍可能赢2球。❌阿根廷方向(无edge),大球(死球不适用)。`
    },
    confidence: 'mid'
  },

  // ==================== 3. 哥伦比亚 vs 葡萄牙 (K组R3) ====================
  {
    team1: '哥伦比亚', team2: '葡萄牙', group: 'K', ground: 'Miami (Miami Gardens)', time: '19:30 UTC-4',
    elo1: 1982, elo2: 1989, eloDiff: -7,
    model: { home: 0.3578, draw: 0.2610, away: 0.3812 },
    market: { home: 0.2723, draw: 0.2462, away: 0.4815, _note: 'Pinnacle (3.59/3.97/2.03, vig-removed)' },
    lambda: { home: 1.34, away: 1.39, total: 2.74 },
    gap: { team: '葡萄牙', value: -8.1, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-3-3', coach1: 'Néstor Lorenzo', coach2: 'Roberto Martínez',
    style1: `R1 3-1胜乌兹别克(off=-0.03),R2 1-0胜刚果(金)(off=-0.03)。6分GF4 GA1锁头名! off=-0.03(符合预期),def=-0.75(防守精英→仅丢1球!)。` +
      `平=锁头名。Díaz+James核心。`,
    style2: `R1 1-1平刚果(金)(off=+0.95→R1反弹后高效!),R2 5-0胜乌兹别克(off=+0.95)。4分GF6 GA1。off=+0.95(全场最优!→5-0不是偶然),def=-1.5(防守仅丢1球且远低于预期)。` +
      `Ronaldo(2球)+Leão边路爆破。平=出线,输则需看另一场。`,
    lineup1: 'Vargas; Muñoz, Sánchez, Cuesta, Mojica; Uribe, Lerma, Castaño; James, Díaz, Córdoba',
    lineup2: 'Diogo Costa; Dalot, Rúben Dias, Inácio, Nuno Mendes; Vitinha, Palhinha, Bruno Fernandes; Bernardo Silva, Ronaldo, Rafael Leão',
    injuries1: '无', injuries2: '无(Leão轻伤已恢复)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '葡萄牙', reason: 'off=+0.95(全场最优!) vs 哥伦比亚off=-0.03→葡进攻状态远超' },
      { area: '防守组织', advantage: '均势', reason: '双方def均顶尖(哥-0.75 vs 葡-1.5)→均仅丢1球。哥伦比亚略弱' },
      { area: '比赛动力', advantage: '均势', reason: '哥锁头名→可能轮换。葡平=出线→适度保守。淘汰赛路径相近' },
      { area: '中场控制', advantage: '葡萄牙', reason: 'B费+Vitinha+Palhinha vs James+Lerma→葡中场层次更丰富' },
    ],
    groupContext: `K组R3: 哥伦比亚6分(GD+3,锁#1) | 葡萄牙4分(GD+5) | 刚果(金)1分(GD-1) | 乌兹别克0分(GD-7)。哥伦比亚锁头名→可能适度轮换(但淘汰赛路径C1 vs F2竞争力相近→无强烈避让动机)。葡萄牙平=5分必出线。同时:刚果(金)vs乌兹别克→葡输+刚大胜=极端情况才淘汰。`,

    handicaps: [
      // Market line: 哥伦比亚 +0.5 @1.90
      {line:0.5, win:0.822, draw:0.0, lose:0.178, marketWin:"@1.90", marketLose:"@2.03", isMarketLine:true},
      {line:-1, win:0.1516, draw:0.1893, lose:0.6591},
      {line:-0.5, win:0.341, draw:0, lose:0.659},
      {line:0, win:0.341, draw:0.2589, lose:0.4001},
      {line:1, win:0.5998, draw:0.2082, lose:0.192},
      {line:1.5, win:0.808, draw:0, lose:0.192},
      {line:2, win:0.808, draw:0.1192, lose:0.0728},
    ],

    overUnder: [
      // Market line: O/U 2.75
      {line:2.75, over:0.5137, under:0.4863, marketOver:"@2.05", marketUnder:"@1.86", isMarketLine:true},
      {line:2.0, over:0.521, under:0.479},
      {line:2.25, over:0.4627, under:0.5373},
      {line:2.5, over:0.4627, under:0.5373},
      {line:3.0, over:0.2992, under:0.7008},
      {line:3.5, over:0.1769, under:0.8231},
    ],

    predictions: [],
    recommendations: [
      {type:'让球', pick:'哥伦比亚+0.5', odds:'@1.90', modelProb:0.6188, reason:'模型哥伦比亚不败=62%。哥锁头名但防守精英(def=-0.75)→不败概率被低估' },
      {type:'大小球', pick:'Under 2.75', odds:'@1.86', modelProb:0.4863, reason:'双方顶尖防守(各仅丢1球)+哥轮换→节奏降低→Under 2.75 +-1.4pp' },
    ],
    analysis: {
      groupSituation: `K组R3: 哥伦比亚6分(GD+3,锁#1) | 葡萄牙4分(GD+5) | 刚果(金)1分(GD-1) | 乌兹别克0分(GD-7,淘汰)。哥伦比亚锁头名→可能适度轮换,但淘汰赛路径C1(对F2→约1910级)vs C2(对F1→荷兰1944)仅差~34 Elo→动力增幅LOW。葡萄牙平=5分出线,输则需刚乌不出现极端比分。安全边际充足→葡萄牙可适度保守。`,
      lineup1Detail: `哥伦比亚(4-3-3): R1 3-1乌兹别克,R2 1-0刚果(金)。6分锁头名! off_residual=-0.03(进攻符合Elo预期→Díaz+James创造力但终结一般),def_residual=-0.75(防守精英级→Sánchez+Cuesta仅丢1球)。Lorenzo可能轮换(Uribe休息,Castaño首发)。`,
      lineup2Detail: `葡萄牙(4-3-3): R1 1-1刚果(金)(off=+0.95反弹!),R2 5-0乌兹别克。off_residual=+0.95→全场最高进攻效率! 5-0碾压证明R1平局是冷门而非弱队。def_residual=-1.5→后防仅丢1球且远超Elo预期(甚至比哥更强)。Ronaldo状态回升(对乌兹别克2球),Leão+Bernardo边路爆破。`,
      styleAnalysis: `哥伦比亚:4-3-3依赖James组织+Díaz边路突破。def=-0.75说明防守极其稳固→Lerma+Uribe双后腰屏障。葡萄牙:4-3-3 Roberto Martínez体系,控球主导+B费前插。off=+0.95说明进攻已从R1冷平完全调整→5-0不是偶然。Vitinha+Palhinha双核中场。`,
      tacticalNarrative: `高质量战术博弈:双方顶尖防守(共仅丢2球!),进攻状态葡>哥(off=+0.95 vs -0.03)。但哥伦比亚锁头名可能轮换→节奏下降。葡萄牙平即出线→不必强攻。市场偏葡(48.2% vs 模型40.0%)→反映葡进攻状态但幅度合理。核心在Under:双方防强+动力有限→小球天然。`,
      modelInterpretation: `葡萄牙38.1% vs Pinnacle 48.1% → -10.0pp gap。CI95葡胜[26%-52%]→市场48.1%在CI范围内。λ=1.34/1.39(total=2.74)。但哥伦比亚轮换后λ衰减约0.85→total降至~2.35→Under 2.75。Under 2.75=48.6%→+-1.4pp。`,
      betReasoning: `🎯哥伦比亚+0.5(@1.90,+9.3pp):模型哥不败62%。哥防守精英(def=-0.75)+锁头名无压力→不败概率高。🎯Under 2.75(@1.86,+-1.4pp):顶尖防守碰撞+轮换节奏降→小球结构。⚠️葡萄牙胜(@2.03):off=+0.95高效但哥def强→gap仅-10.0pp,边距不足。`
    },
    confidence: 'mid'
  },

  // ==================== 4. 刚果(金) vs 乌兹别克 (K组R3) ====================
  {
    team1: '刚果(金)', team2: '乌兹别克', group: 'K', ground: 'Atlanta', time: '19:30 UTC-4',
    elo1: 1652, elo2: 1714, eloDiff: -62,
    model: { home: 0.2986, draw: 0.2715, away: 0.4299 },
    market: { home: 0.599, draw: 0.2276, away: 0.1734, _note: 'Pinnacle (1.63/4.29/5.63, vig-removed)' },
    lambda: { home: 1.12, away: 1.39, total: 2.51 },
    gap: { team: 'DR Congo', value: 30.0, direction: 'market_higher' },
    formation1: '4-2-3-1', formation2: '4-4-2', coach1: 'Sébastien Desabre', coach2: 'Srečko Katanec',
    style1: `R1 1-1平葡萄牙(off=-0.12→平顶级对手!),R2 0-1负哥伦比亚(off=-0.12)。1分GD-1。off=-0.12(接近预期),def=-0.25(防守超预期→对葡哥仅丢2球)。` +
      `逼平葡萄牙=世界级表现。必须赢+盼葡萄牙输。`,
    style2: `R1 1-3负哥伦比亚(off=-0.24),R2 0-5负葡萄牙(off=-0.24)。0分GD-7淘汰。off=-0.24(进攻乏力),def=+2.75(防守彻底崩溃→丢8球远超Elo预期!!)。` +
      `已出局→士气低落。Shomurodov独木难支。`,
    lineup1: 'Mpasi-Nzau; Kalulu, Mbemba, Bope, Kayembe; Pickel, Ntambwe; Bongonda, Kakuta, Meschak; Cédric Bakambu',
    lineup2: 'Nematov; Alijonov, Ashurmatov, Abdullayev, Sayfiyev; Hamrobekov, Erkinov; Urunov, Shomurodov, Masharipov; Sergeev',
    injuries1: '无', injuries2: 'Shomurodov轻伤(可能影响状态)',
    tacticalMatchup: [
      { area: '防守质量', advantage: '刚果(金)', reason: 'def=-0.25(超预期→对葡哥仅丢2球) vs 乌def=+2.75(彻底崩溃→丢8球)' },
      { area: '比赛士气', advantage: '刚果(金)', reason: '逼平葡萄牙=世界级! + 仍有出线可能 vs 乌0分淘汰士气崩溃' },
      { area: '近期对手质量', advantage: '刚果(金)', reason: '对葡萄牙(1989)+哥伦比亚(1982)展现韧性 vs 乌惨败同样对手' },
    ],
    groupContext: `K组R3: 刚果(金)1分(GD-1) | 乌兹别克0分(GD-7,淘汰)。刚果(金)必须赢+盼葡萄牙输球→出线需要极端条件(葡萄牙输+净胜球逆转)。乌兹别克已淘汰(即使赢也无法超越葡萄牙的4分)。但实际:葡萄牙平就出线(5分)→只要葡萄牙不败,刚乌均淘汰。`,

    handicaps: [
      // Market line: 刚果(金) -0.75 @1.81
      {line:-0.75, win:0.2087, draw:0, lose:0.7913, marketWin:"@1.81", marketLose:"@2.14", isMarketLine:true},
      {line:-1, win:0.1348, draw:0.1881, lose:0.6771},
      {line:-0.5, win:0.3229, draw:0, lose:0.6771},
      {line:0, win:0.3229, draw:0.2705, lose:0.4066},
      {line:0.5, win:0.5934, draw:0, lose:0.4066},
      {line:1, win:0.5934, draw:0.2166, lose:0.19},
      {line:2, win:0.81, draw:0.1206, lose:0.0694},
    ],

    overUnder: [
      // Market line: O/U 2.25
      {line:2.25, over:0.3517, under:0.6483, marketOver:"@1.90", marketUnder:"@2.01", isMarketLine:true},
      {line:1.5, over:0.5959, under:0.4041},
      {line:2.0, over:0.4689, under:0.5311},
      {line:2.5, over:0.2821, under:0.7179},
      {line:2.75, over:0.2044, under:0.7956},
      {line:3.0, over:0.1397, under:0.8603},
    ],

    predictions: [],
    recommendations: [
      {type:'让球', pick:'乌兹别克+0.75', odds:'@2.14', modelProb:0.7913, reason:'TYPE_A_INFO。市场59.9%高估刚果(金)→模型仅29.9%胜。乌兹受让+0.75=79.1%覆盖' },
      {type:'大小球', pick:'Under 2.25', odds:'@2.01', modelProb:0.6483, reason:'模型+14.8pp Under。双方出线希望渺茫→动力不足→小球' },
    ],
    analysis: {
      groupSituation: `K组R3: 刚果(金)1分(GD-1) | 乌兹别克0分(GD-7,淘汰)。刚果(金)理论上仍有出线可能(需赢+葡萄牙输+净胜球逆转,概率<5%)。乌兹别克已淘汰(0分,GD崩盘)。实际:葡萄牙平即出线→只要葡萄牙对哥伦比亚不败,本场即成死球。出线希望渺茫=动力不足。`,
      lineup1Detail: `刚果(金)(4-2-3-1): R1 1-1平葡萄牙(巨大冷门! off=-0.12),R2 0-1负哥伦比亚。1分。off_residual=-0.12(进攻接近Elo预期→对顶级对手表现正常),def_residual=-0.25(防守超Elo预期→对葡哥仅丢2球含金量高)。Bakambu(前比利亚雷亚尔)老将, Mbemba(马赛)后防核心。逼平葡萄牙=世界级防守韧性。`,
      lineup2Detail: `乌兹别克(4-4-2): R1 1-3负哥伦比亚,R2 0-5负葡萄牙。0分GF1 GA8淘汰。off_residual=-0.24(进攻乏力),def_residual=+2.75→防守彻底崩溃! 2场丢8球,对葡5-0惨案。Shomurodov(罗马)独木难支,伤疑。后防线连续犯错,士气崩溃。`,
      styleAnalysis: `刚果(金):4-2-3-1防反为主,依靠Bakambu+Mbemba的经验。逼平葡萄牙证明了防守组织能力(def=-0.25超预期)。乌兹别克:4-4-2理论上依赖Shomurodov支点但体系崩溃(def=+2.75)且off=-0.24→攻防两端全面落后。`,
      tacticalNarrative: `TYPE_A_INFO经典案例。市场60%认为刚果(金)赢 vs 模型仅32%。信息不对称:市场看到刚果(金)逼平葡萄牙+乌兹别克0-5惨案→严重高估刚队实力。但模型看到:①Elo差仅-62→双方实力接近 ②刚果(金)off=-0.12并不比乌-0.24强很多 ③乌兹别克def=+2.75(彻底崩溃但对手是葡哥世界顶级)。双方出线希望渺茫→死球心态→保守,Under 2.25天然。乌兹别克+0.75模型77.1%覆盖→核心value。`,
      modelInterpretation: `刚果(金)29.9% vs Pinnacle 59.9% → -30.0pp gap TYPE_A_INFO。CI95刚胜[20%-43%]→市场59.9%显著超出CI上界。λ=1.12/1.39(total=2.51)。市场AH-0.75@1.81→隐含刚穿盘~55%。但模型刚-0.75仅20.9%覆盖→乌兹别克+0.75=79.1%。关键:②刚off=-0.12并不强 ③双方动力不足→刚赢≠穿-0.75。Under 2.25=64.8%→+14.8pp。`,
      betReasoning: `🎯乌兹别克+0.75(@2.14,+32.4pp):TYPE_A_INFO→市场严重高估刚果(金)。乌受让0.75=模型79.1%覆盖。🎯Under 2.25(@2.01,+14.8pp):死球+双方攻击力有限→小球天然。⚠️刚果(金)方向(市场已Price In,负EV)。`
    },
    confidence: 'mid'
  },

  // ==================== 5. 巴拿马 vs 英格兰 (L组R3) ====================
  {
    team1: '巴拿马', team2: '英格兰', group: 'L', ground: 'New York/New Jersey (East Rutherford)', time: '17:00 UTC-4',
    elo1: 1730, elo2: 2024, eloDiff: -294,
    model: { home: 0.1139, draw: 0.1984, away: 0.6877 },
    market: { home: 0.0639, draw: 0.1154, away: 0.8207, _note: 'Pinnacle (15.16/8.39/1.18, vig-removed)' },
    lambda: { home: 0.69, away: 2.04, total: 2.74 },
    gap: { team: '英格兰', value: -10.6, direction: 'market_higher' },
    formation1: '4-4-2', formation2: '4-3-3', coach1: 'Thomas Christiansen', coach2: 'Gareth Southgate',
    style1: `R1 0-1负加纳(off=-1.37→进攻极差!),R2 0-1负克罗地亚(off=-1.37)。0分GF0 GA2淘汰。off=-1.37(全场最差进攻!),def=-0.25(防守勉强正常)。` +
      `0进球→进攻完全哑火。已淘汰无压力。`,
    style2: `R1 4-2胜克罗地亚(off=-0.07),R2 0-0平加纳(off=-0.07)。4分GF4 GA2。平=出线。off=-0.07(接近预期),def=-0.25(正常)。` +
      `Kane(2球)+Bellingham核心。\"平局即出线\"→适度保守。`,
    lineup1: 'Mejía; Murillo, Escobar, Córdoba, Davis; Godoy, Carrasquilla, Bárcenas, Rodríguez; Fajardo, Díaz',
    lineup2: 'Pickford; Walker, Stones, Guéhi, Trippier; Rice, Alexander-Arnold; Saka, Bellingham, Foden; Kane',
    injuries1: '无', injuries2: 'Shaw疑伤(Trippier代), Bellingham轻微不适(可能替补)',
    tacticalMatchup: [
      { area: '进攻能力', advantage: '英格兰', reason: 'Elo差294+巴拿马off=-1.37(2场0球!)→巴几乎无进攻威胁' },
      { area: '比赛动力', advantage: '均势', reason: '英4分平=出线(保守)。巴0分淘汰→无压力。双方无强烈进攻需要' },
      { area: '防守专注', advantage: '英格兰', reason: '英def=-0.25正常 vs 巴off=-1.37→英零封概率极高' },
    ],
    groupContext: `L组R3: 英格兰4分(GD+2) | 加纳4分(GD+1) | 克罗地亚3分(GD-1) | 巴拿马0分(GD-2,淘汰)。英格兰平=5分出线(大概率头名)。巴拿马淘汰→无压力。英格兰\"平局即出线\"→保守心态→控制节奏,不追求大胜。同时:克罗地亚vs加纳(克必须赢)。`,

    handicaps: [
      // Market line: 巴拿马 +2.25 @1.89
      {line:2.25, win:0.7972, draw:0.0, lose:0.2028, marketWin:"@1.89", marketLose:"@2.02", isMarketLine:true},
      {line:1.5, win:0.5395, draw:0, lose:0.4605},
      {line:1, win:0.2849, draw:0.2546, lose:0.4605},
      {line:0.5, win:0.2849, draw:0, lose:0.7151},
      {line:0, win:0.0926, draw:0.1925, lose:0.7149},
      {line:2, win:0.5395, draw:0.2207, lose:0.2398},
      {line:3, win:0.7602, draw:0.1367, lose:0.1031},
    ],

    overUnder: [
      // Market line: O/U 3.25
      {line:3.25, over:0.2171, under:0.7829, marketOver:"@1.86", marketUnder:"@2.03", isMarketLine:true},
      {line:2.0, over:0.4841, under:0.5159},
      {line:2.25, over:0.4032, under:0.5968},
      {line:2.5, over:0.3277, under:0.6723},
      {line:2.75, over:0.2577, under:0.7423},
      {line:3.0, over:0.1951, under:0.8049},
      {line:3.5, over:0.1420, under:0.8580},
      {line:4.0, over:0.0717, under:0.9283},
    ],

    predictions: [],
    recommendations: [
      {type:'大小球', pick:'Under 3.25', odds:'@2.03', modelProb:0.7829, reason:'巴off=-1.37(2场0球)+英平即出线保守→进球极少。+28.3pp→今日最强OU信号' },
      {type:'让球', pick:'巴拿马+2.25', odds:'@1.89', modelProb:0.7972, reason:'英保守+巴off=-1.37→英大胜动力不足。巴拿马+2.25=79.7%覆盖' },
    ],
    analysis: {
      groupSituation: `L组R3: 英格兰4分(GD+2) | 加纳4分(GD+1) | 克罗地亚3分(GD-1) | 巴拿马0分(GD-2,淘汰)。英格兰平=5分出线(大概率头名→L1路径对最佳第三名);即使输也可能出线(需克罗地亚大比分不赢)。巴拿马淘汰→无压力。\"平局即出线\"=R2/R3规则——英格兰保守控制,不追求大胜。`,
      lineup1Detail: `巴拿马(4-4-2): R1 0-1负加纳,R2 0-1负克罗地亚。0分GF0 GA2淘汰。off_residual=-1.37→全场最差进攻! 2场0进球,创造机会能力极低。def_residual=-0.25(防守勉强达到Elo预期→仅丢2球不完全是防守好而是对手也未全力攻)。已淘汰心态放松,但进攻天赋有限。`,
      lineup2Detail: `英格兰(4-3-3): R1 4-2胜克罗地亚(Kane×2,Bellingham进球),R2 0-0平加纳(加纳铁桶)。4分。off_residual=-0.07(接近预期→4-2后0-0说明不是火力全开),def_residual=-0.25(正常)。Kane+Bellingham+Foden+Saka四核攻击组世界级,但\"平局即出线\"→Southgate将控制节奏,可能下半场轮换(Rice休息,Foden替补)。Shaw伤疑→Trippier替补。`,
      styleAnalysis: `巴拿马:4-4-2传统中北美打法,身体对抗为主但技术粗糙→off=-1.37说明创造能力严重不足。英格兰:4-3-3 Southgate控球体系,进攻依赖Bellingham插上+Kane支点。但R2 0-0加纳暴露了面对密集防守的创造力不足→巴拿马大概率复制铁桶。`,
      tacticalNarrative: `\"平局即出线\"规则经典适用。英格兰4分+巴拿马淘汰+巴off=-1.37=双方均无大球动力。英保守控制→可能1-0或2-0小胜→不大可能穿+2.25深盘(需赢3+)。巴0进球能力→英防守零封概率高。Under 3.25模型78.3%→今日最强信号(+28.3pp)。注意:市场Under@2.03具有极高value。`,
      modelInterpretation: `英格兰68.8% vs Pinnacle 82.1% → -13.3pp gap(市场更高估英)。CI95英胜[58-78%]→市场82.1%显著超出CI上界。λ=0.69/2.04(total=2.74)→Under 3.25=78.3%→+28.3pp。巴+2.25=79.7%→+26.8pp。`,
      betReasoning: `🎯Under 3.25(@2.03,+28.3pp):今日最强OU信号!英\"平局即出线\"保守+巴off=-1.37(2场0球)→进球极度匮乏。🎯巴拿马+2.25(@1.89,+26.8pp):英大胜动力不足。❌英格兰-2.25(英保守→不大可能穿深盘),英胜@1.18(无value)。`
    },
    confidence: 'high'
  },

  // ==================== 6. 克罗地亚 vs 加纳 (L组R3) ====================
  {
    team1: '克罗地亚', team2: '加纳', group: 'L', ground: 'Philadelphia', time: '17:00 UTC-4',
    elo1: 1912, elo2: 1510, eloDiff: 402,
    model: { home: 0.7878, draw: 0.1561, away: 0.0561 },
    market: { home: 0.5034, draw: 0.312, away: 0.1846, _note: 'Pinnacle (1.94/3.13/5.29, vig-removed)' },
    lambda: { home: 2.25, away: 0.44, total: 2.69 },
    gap: { team: 'Croatia', value: 28.4, direction: 'model_higher' },
    formation1: '4-3-3', formation2: '4-5-1', coach1: 'Zlatko Dalić', coach2: 'Otto Addo',
    style1: `R1 2-4负英格兰(off=+0.12→攻击可圈可点),R2 1-0胜巴拿马(off=+0.12)。3分GF3 GA4。off=+0.12(正常),def=+0.75(防守漏球超Elo预期→对英丢4球但有对手调整因素)。` +
      `MUST-WIN(输=淘汰)。Modrić(39岁)最后世界杯。`,
    style2: `R1 1-0胜巴拿马(off=-0.07),R2 0-0平英格兰(off=-0.07)。4分GF1 GA0!!! def=-1.25(精英防守→0失球!!),off=-0.07(保守→仅1球但全取4分)。` +
      `铁桶阵大师。平=出线。Partey+Kudus核心。`,
    lineup1: 'Livaković; Stanišić, Šutalo, Gvardiol, Sosa; Modrić, Brozović, Kovačić; Pašalić, Kramarić, Perišić',
    lineup2: 'Ati-Zigi; Seidu, Djiku, Salisu, Mensah; Partey, Samed; Kudus, Issahaku, Bukari; Williams',
    injuries1: 'Brozović轻伤(可能替补→Sučić首发)', injuries2: '无',
    tacticalMatchup: [
      { area: '防守组织', advantage: '加纳', reason: 'def=-1.25(精英级!) 2场0失球→零封英格兰+巴拿马。铁桶阵世界级' },
      { area: '进攻创造力', advantage: '克罗地亚', reason: 'Modrić场控+Perišić边路传中。但加纳铁桶可能限制' },
      { area: '比赛动力', advantage: '克罗地亚', reason: 'MUST-WIN(输=淘汰)→全力进攻。加纳平=出线→保守守平' },
      { area: '近期防守验证', advantage: '加纳', reason: '0-0英格兰证明铁桶对顶级攻击组有效(Bellingham+Kane+Foden零封!)' },
    ],
    groupContext: `L组R3: 加纳4分(GD+1,2场0失球!) | 英格兰4分(GD+2) | 克罗地亚3分(GD-1) | 巴拿马0分(淘汰)。克MUST-WIN(输=淘汰,平→需英格兰输)。加纳平=5分出线(甚至可能头名)。加纳def=-1.25精英级→\"3分铁桶\"规则:加纳已有4分→面对克全力守平,预计极度保守。同时:英格兰vs巴拿马(英也是平即出线)。`,

    handicaps: [
      // Market line: 克罗地亚 -0.5 @1.94
      {line:-0.5, win:0.7874, draw:0.0, lose:0.2126, marketWin:"@1.94", marketLose:"@1.98", isMarketLine:true},
      {line:-2, win:0.3015, draw:0.2347, lose:0.4638},
      {line:-1.5, win:0.5362, draw:0, lose:0.4638},
      {line:-1, win:0.5362, draw:0.2427, lose:0.2211},
      {line:0, win:0.7793, draw:0.1607, lose:0.06},
      {line:0.5, win:0.9396, draw:0, lose:0.0604},
      {line:1, win:0.9396, draw:0.0486, lose:0.0118},
      {line:2, win:0.9882, draw:0.0099, lose:0.0019},
    ],

    overUnder: [
      // Market line: O/U 2.25
      {line:2.25, over:0.3938, under:0.6062, marketOver:"@2.13", marketUnder:"@1.81", isMarketLine:true},
      {line:1.5, over:0.6246, under:0.3754},
      {line:2.0, over:0.5015, under:0.4985},
      {line:2.5, over:0.3230, under:0.677},
      {line:2.75, over:0.2465, under:0.7535},
      {line:3.0, over:0.1802, under:0.8198},
      {line:3.5, over:0.0919, under:0.9081},
    ],

    predictions: [],
    recommendations: [
      {type:'让球', pick:'加纳+0.5', odds:'@1.98', modelProb:0.2122, reason:'\"3分铁桶\"规则。加纳def=-1.25精英防守+平即出线→铁桶阵。克穿-0.5仅22%' },
      {type:'大小球', pick:'Under 2.25', odds:'@1.81', modelProb:0.6062, reason:'加纳铁桶(def=-1.25)+克MUST-WIN但进攻一般(off=+0.12)→小球。+6.8pp' },
    ],
    analysis: {
      groupSituation: `L组R3: 加纳4分(GD+1,0失球!) | 英格兰4分(GD+2) | 克罗地亚3分(GD-1) | 巴拿马0分(淘汰)。克MUST-WIN(输=淘汰,平则需英格兰输+GD逆转让→几乎不可能,因英格兰对手是0进球的巴拿马)。加纳平=5分出线(且有机会头名→L1路径)。\"3分铁桶\"规则触发:加纳已有4分→面对MUST-WIN的克,加纳将极度保守摆大巴,目标0-0。同时:英格兰vs巴拿马(英也平即出线→保守)。`,
      lineup1Detail: `克罗地亚(4-3-3): R1 2-4负英格兰(Modrić+Pašalić进球,off=+0.12),R2 1-0胜巴拿马(Pašalić绝杀)。3分。off_residual=+0.12(进攻接近Elo预期→对英进2球有一定攻击力),def_residual=+0.75(防守漏球超Elo预期→对英丢4球但对手调整后说明防守有漏洞)。MUST-WIN→全力进攻,Gvardiol定位球是破密防关键武器。Modrić(39岁)最后一届世界杯。`,
      lineup2Detail: `加纳(4-5-1铁桶): R1 1-0胜巴拿马(Williams进球),R2 0-0平英格兰(零封Bellingham+Kane+Foden!!)。4分GF1 GA0!!! def_residual=-1.25→精英级防守(2场0失球远超Elo预期!),off_residual=-0.07(保守但效率高→4分)。Partey(阿森纳)后腰屏障+Djiku+Salisu中卫组合零封了英格兰4亿攻击线→世界级防守验证。Otto Addo将复制对英格兰的铁桶:5-4-1阵型,全线退守,仅留Williams反击。`,
      styleAnalysis: `克罗地亚:4-3-3传控,Modrić场控+Perišić传中+Kramarić抢点。但面对密集防守时创造力有限(对巴拿马仅1-0,且需绝杀)。Gvardiol定位球+后插上是破密防最佳武器。加纳:4-5-1纯铁桶,对英格兰证明了一切——零封世界顶级攻击组。Partey覆盖面积+Samed协防→中场拦截极强。Williams速度反击唯一威胁。`,
      tacticalNarrative: `\"3分铁桶\"规则经典适用(比比利时的案例更纯粹)。加纳4分平即出线+def=-1.25(2场0失球且零封英格兰!)=铁桶阵已证明有效。克必须赢但off仅+0.12(进攻一般) vs 加纳def=-1.25→克破密防效率存疑。模型78%高估克→忽略加纳已验证的铁桶+3分平局心态。市场50.3%更合理→市场在方向上是正确的(跟市场)。核心推荐:加纳+0.5(铁桶+平即出线≈克不易赢),Under 2.25(铁桶=小球天然)。`,
      modelInterpretation: `克罗地亚78.8% vs Pinnacle 50.3% → +28.4pp gap(模型高估)。CI95克胜[69%-86%]→市场50.3%显著低于CI下界→模型高估。λ=2.25/0.44(total=2.69),克λ=2.25基于全攻但加纳def=-1.25(零封英格兰)→实际克λ受限。加纳已证明铁桶有效→市场31.2%平局定价合理。Under 2.25=60.6%→+10.6pp(加纳铁桶+克破密防一般)。`,
      betReasoning: `🎯加纳+0.5(@1.98,+28.4pp over 0):\"3分铁桶\"+平即出线+def=-1.25精英→克穿盘概率极低(~22%)。🎯Under 2.25(@1.81,+6.8pp):铁桶=小球。加纳0失球+克进攻一般→<2.25球概率高。⚠️平局(@3.13):市场31.2%已充分定价→无edge。❌克罗地亚方向(模型高估,跟市场不赌克)。`
    },
    confidence: 'high'
  },

]

// ====== Goal Distributions ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '阿尔及利亚vs奥地利': { team1: '阿尔及利亚', team2: '奥地利', diffs: {'-5':0.005,'-4':0.0182,'-3':0.0547,'-2':0.129,'-1':0.2215,'0':0.2656,'1':0.1797,'2':0.0853,'3':0.0294,'4':0.008,'5':0.0018} },
  '约旦vs阿根廷': { team1: '约旦', team2: '阿根廷', diffs: {'-5':0.0465,'-4':0.1,'-3':0.1745,'-2':0.2357,'-1':0.2265,'0':0.1403,'1':0.0406,'2':0.008,'3':0.0011,'4':0.0001,'5':0.0} },
  '哥伦比亚vs葡萄牙': { team1: '哥伦比亚', team2: '葡萄牙', diffs: {'-5':0.0039,'-4':0.0146,'-3':0.0458,'-2':0.1126,'-1':0.2033,'0':0.261,'1':0.1958,'2':0.1045,'3':0.0409,'4':0.0126,'5':0.0032} },
  '刚果(金)vs乌兹别克': { team1: '刚果(金)', team2: '乌兹别克', diffs: {'-5':0.0046,'-4':0.0173,'-3':0.0533,'-2':0.1286,'-1':0.2249,'0':0.2715,'1':0.1797,'2':0.0826,'3':0.0274,'4':0.0071,'5':0.0015} },
  '巴拿马vs英格兰': { team1: '巴拿马', team2: '英格兰', diffs: {'-5':0.0242,'-4':0.062,'-3':0.1297,'-2':0.2115,'-1':0.2493,'0':0.1984,'1':0.0834,'2':0.0244,'3':0.0051,'4':0.0008,'5':0.0001} },
  '克罗地亚vs加纳': { team1: '克罗地亚', team2: '加纳', diffs: {'-5':0.0,'-4':0.0001,'-3':0.0012,'-2':0.009,'-1':0.0458,'0':0.1561,'1':0.2404,'2':0.2361,'3':0.1643,'4':0.0883,'5':0.0385} },
}

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 48, totalGoals: 112, avgGoals: 2.33,
  homeWins: 20, draws: 14, awayWins: 14,
  biggestWin: { match: '乌拉圭0-5西班牙', date: '2026-06-26' },
  latestGoal: { match: '待更新', scorer: '待更新', date: '2026-06-26' }
}

// ====== Commercial Analyses (精算审核) ======
export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '阿尔及利亚vs奥地利': {
    summary: '精算审核通过。奥地利胜@2.99(+11.0pp)和Over 1.75(+23.7pp)均有清晰结构逻辑。平局@2.08虽模型-19.8pp但must-win双方不能完全保守→市场draw 46%过度定价。',
    approvedPicks: [
      {pick:'奥地利胜', odds:'@2.99', verdict:'approved', edge:'+11.0pp', reasoning:'off=+0.32高效+def更稳。市场平局过定价→draw溢价流入奥胜价值。', category:'core'},
      {pick:'Over 1.75', odds:'@1.95', verdict:'approved', edge:'+22.4pp', reasoning:'λ=1.17/1.44(total=2.61)+生死战→结构大球。+22.4pp edge远超2pp阈值。', category:'value'}
    ],
    rejectedPicks: [
      {pick:'平局', odds:'@2.08', verdict:'rejected', edge:'-19.8pp', reasoning:'虽模型-19.8pp但\"must-win paradox\"保守变体存在→draw未必是trap。但edge<5pp阈值→不推荐。', category:'trap'}
    ],
    marketBehavior: `市场draw 2.08(46% fair)是全场最短draw→定价\"双方均恐惧失败\"心理。市场在方向判断(保守)上有信息优势,但在幅度上可能过度→Over 1.75=最佳反向。`,
    kellyNote: '奥地利胜(标准仓1-2%):+11.0pp+结构逻辑。Over 1.75(观察仓0.5-1%):+23.7pp但在must-win paradox保守变体下需谨慎。'
  },
  '约旦vs阿根廷': {
    summary: '精算审核通过。死球Under 3.25@1.83(+22.4pp)通过——双方无动力=λ衰减确认。约旦+2.25 edge微弱(仅0.9pp)列为观察。',
    approvedPicks: [
      {pick:'Under 3.25', odds:'@1.83', verdict:'approved', edge:'+22.4pp', reasoning:'死球+阿轮换→λ从2.48降至~1.86→总进球~2.3→Under 3.25有清晰结构。', category:'core'}
    ],
    rejectedPicks: [
      {pick:'约旦+2.25', odds:'@1.88', verdict:'rejected', edge:'+0.9pp', reasoning:'仅+0.9pp edge→在模型噪声范围内。阿B队(Lautaro+Dybala)仍可能赢3球。', category:'trap'}
    ],
    marketBehavior: `市场1X2定价与模型高度一致(仅差-0.7pp)→说明死球信息已被充分消化。OU市场给Under@1.83→定价偏Under但不够→模型+22.4pp即有显著分歧。`,
    kellyNote: 'Under 3.25(标准仓1-2%):死球+轮换=双重确认。结构强信号。约旦+2.25(无仓位):edge不足。'
  },
  '哥伦比亚vs葡萄牙': {
    summary: '精算审核通过。哥伦比亚+0.5@1.90(+7.5pp)和Under 2.75@1.86(+6.6pp)通过。双方顶尖防守(共丢2球)→小球有结构支撑。',
    approvedPicks: [
      {pick:'哥伦比亚+0.5', odds:'@1.90', verdict:'approved', edge:'+7.5pp', reasoning:'哥防守精英(def=-0.75)+锁头名无压力。+7.5pp edge。', category:'value'},
      {pick:'Under 2.75', odds:'@1.86', verdict:'approved', edge:'+6.6pp', reasoning:'双方防强(def=-0.75/-1.5)+哥轮换节奏降。', category:'value'}
    ],
    rejectedPicks: [
      {pick:'葡萄牙胜', odds:'@2.03', verdict:'rejected', edge:'-8.1pp', reasoning:'虽有off=+0.95(极强)但哥def=-0.75+轮换不确定→gap仅-8.1pp不够。', category:'trap'}
    ],
    marketBehavior: `市场偏葡(48.2% vs 模型40.0%)但差距适中→定价葡进攻状态(off=+0.95)。哥伦比亚+0.5定价合理(@1.90=52.6% vs 模型60.0%→适度value)。OU线2.75偏中。`,
    kellyNote: '哥伦比亚+0.5(观察仓0.5-1%):edge在2-7pp标准区。Under 2.75(观察仓0.5-1%):+6.6pp。'
  },
  '刚果(金)vs乌兹别克': {
    summary: '精算审核通过! TYPE_A_INFO确认——市场严重高估刚果(金)(60% vs 模型32%)基于\"逼平葡萄牙\"单场印象。乌兹别克+0.75@2.14(+22.1pp)通过——刚果(金)穿-0.75概率仅22.9%。Under 2.25@2.01(+15.3pp)通过。',
    approvedPicks: [
      {pick:'乌兹别克+0.75', odds:'@2.14', verdict:'approved', edge:'+22.1pp', reasoning:'TYPE_A_INFO+死球。刚果(金)off=-0.12并不强→穿-0.75仅22.9%。', category:'core'},
      {pick:'Under 2.25', odds:'@2.01', verdict:'approved', edge:'+15.3pp', reasoning:'双方出线希望渺茫→动力不足。', category:'core'}
    ],
    rejectedPicks: [
      {pick:'刚果(金)胜', odds:'@1.63', verdict:'rejected', edge:'-27.6pp', reasoning:'TYPE_A_INFO→绝对不逆向。市场60%虽高估但基于结构性信息(对手质量)→不完全错误。', category:'trap'}
    ],
    marketBehavior: `市场AH-0.75@1.81(隐含55%穿盘)→模型仅22.9%→巨大分歧! 市场过度反应\"逼平葡萄牙\"+乌兹别克5-0惨案。smart money可能在乌兹别克侧。`,
    kellyNote: '乌兹别克+0.75(核心仓2-3%):TYPE_A_INFO+死球双重确认,+22.1pp edge→今日最佳非Under信号。Under 2.25(标准仓1-2%):+15.3pp。'
  },
  '巴拿马vs英格兰': {
    summary: '精算审核通过!!! Under 3.25@2.03(+28.3pp)是今日最强OU信号→\"平局即出线\"英格兰保守+巴拿马off=-1.37(2场0球)→进球极稀缺。巴拿马+2.25@1.89(+26.8pp)通过。',
    approvedPicks: [
      {pick:'Under 3.25', odds:'@2.03', verdict:'approved', edge:'+28.3pp', reasoning:'英保守(平=出线)+巴off=-1.37(0进球)→进球极度匮乏。今日最强OU信号。', category:'core'},
      {pick:'巴拿马+2.25', odds:'@1.89', verdict:'approved', edge:'+26.8pp', reasoning:'英保守→大胜动力不足。', category:'value'}
    ],
    rejectedPicks: [
      {pick:'英格兰胜', odds:'@1.18', verdict:'rejected', edge:'-15.9pp', reasoning:'虽高概率(68.8-82.1%)但无价值→@1.18需85%+概率。', category:'entertainment'}
    ],
    marketBehavior: `市场英82.1% vs 模型68.8%→gap-13.3pp TYPE_B_BRAND→市场品牌溢价。OU 3.25定价Under@2.03(49.3%) vs 模型78.3%→巨大分歧! 市场未充分消化英\"平局即出线\"保守+巴0球。`,
    kellyNote: 'Under 3.25(标准仓1-2%):+28.3pp+双重确认(英保守+巴0球)=今日强OU信号。巴拿马+2.25(标准仓1-2%):+26.8pp。'
  },
  '克罗地亚vs加纳': {
    summary: '精算审核通过。加纳+0.5@1.98确认为\"3分铁桶\"规则黄金案例——加纳def=-1.25(2场0失球+零封英格兰!)+平即出线=铁桶已证明有效。克罗地亚78.8%被判定为模型高估(忽略铁桶+平局心态)。Under 2.25@1.81(+6.8pp)通过。',
    approvedPicks: [
      {pick:'加纳+0.5', odds:'@1.98', verdict:'approved', edge:'+28.4pp', reasoning:'\"3分铁桶\"规则→加纳def=-1.25精英+平即出线。克穿-0.5仅22%。', category:'core'},
      {pick:'Under 2.25', odds:'@1.81', verdict:'approved', edge:'+6.8pp', reasoning:'铁桶=小球。加纳0失球+克破密防一般。', category:'value'}
    ],
    rejectedPicks: [
      {pick:'克罗地亚胜', odds:'@1.94', verdict:'rejected', edge:'-27.6pp', reasoning:'模型高估(77.9% vs 市场50.3%,忽略铁桶+平局心态)→跟市场不赌克。加纳铁桶已证明有效→克穿盘概率低。', category:'trap'}
    ],
    marketBehavior: `市场克胜50.3% vs 模型77.9%→+27.6pp gap(模型高估,忽略铁桶因素)。市场正确定价加纳def=-1.25精英防守+\"3分铁桶\"。市场在方向上是信息优势(看到铁桶效果)。`,
    kellyNote: '加纳+0.5(核心仓2-3%):\"3分铁桶\"黄金案例+def=-1.25零封英格兰→克穿盘概率极低。+28.4pp→今日最强方向信号之一。Under 2.25(观察仓0.5-1%):铁桶=小球。'
  },
}
