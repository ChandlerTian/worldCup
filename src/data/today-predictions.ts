import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/21 今日预测 (Matchday 11) ======
export const todayPredictions: MatchPrediction[] = [
  {
    team1: '西班牙', team2: '沙特', group: 'H', ground: '亚特兰大', time: '16:00 UTC-4',
    elo1: 1975, elo2: 1645, eloDiff: 330,
    model: { home: 0.6562, draw: 0.1860, away: 0.1579 },
    market: { home: 0.885, draw: 0.089, away: 0.030 },
    lambda: { home: 2.07, away: 0.88, total: 2.95 },
    gap: { team: '西班牙', value: -22.9, direction: 'market_higher' },
    formation1: '4-3-3', formation2: '4-2-3-1', coach1: '德拉富恩特', coach2: '曼奇尼',
    style1: '控球主导tiki-taka。Pedri/Yamal/Williams Jr技术核心。首轮0-0平佛得角暴露破密集防守低效',
    style2: '紧凑防守+快速反击。曼奇尼执教带来意式防守纪律。2022世界杯曾2-1胜阿根廷',
    lineup1: 'Unai Simón; Carvajal, Le Normand, Laporte, Cucurella; Pedri, Rodri, Gavi; Yamal, Morata, Williams Jr',
    lineup2: 'Al-Owais; Al-Ghannam, Al-Amri, Al-Bulayhi, Al-Shahrani; Al-Malki, Kanno; Al-Dawsari, Al-Shehri, Bahebri; Al-Buraikan',
    injuries1: '全员健康', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '控球vs低位防守', advantage: '沙特(结构)', reason: '西班牙首轮0-0佛得角已暴露破密集无力。沙特曼奇尼铁桶阵更成熟' },
      { area: '边路突破', advantage: '西班牙', reason: 'Yamal+Williams Jr双边路速度+技术。但沙特边后卫纪律强' },
      { area: '反击速度', advantage: '沙特', reason: 'Al-Dawsari+Al-Buraikan反击锋利。西班牙高线身后有空间' },
      { area: '中场控制', advantage: '西班牙(碾压)', reason: 'Pedri+Rodri+Gavi中场三角远超沙特,但控球不等于进球' }
    ],
    groupContext: 'H组第2轮。西班牙首轮0-0平佛得角(爆冷!)必须赢回状态。沙特首轮1-1乌拉圭(不错)。H1 vs H2路径: H1打最佳第3(~Elo1600) vs H2对G2(~Elo1750)。争头名动力差150 Elo。',
    handicaps: [{line:-2.5, win:0.996, draw:0, lose:0.004},{line:-2, win:0.984, draw:0.012, lose:0.004},{line:-1.5, win:0.984, draw:0, lose:0.016}],
    overUnder: [{line:3.5, over:0.342, under:0.658, marketOver:'@1.92', marketUnder:'@1.94'},{line:3.0, over:0.342, under:0.658, marketOver:'@2.10', marketUnder:'@1.78'}],
    predictions: [{score:'1-0', prob:11.6, reason:'西班牙控球但破密集效率低,可能仅1球小胜'},{score:'2-0', prob:11.2, reason:'西班牙若早进球则沙特被迫出击,二次打击'},{score:'2-1', prob:9.9, reason:'沙特有反击1球能力(Al-Dawsari)'}],
    recommendations: [
      {type:'让球', pick:'沙特+2.5', odds:'@1.91', modelProb:99.6, reason:'VALUE! 模型沙特输3球以上概率仅0.4%, +2.5水0.91几乎是免费送。西班牙破密集能力存疑(首轮0-0佛得角)'},
      {type:'大小球', pick:'Under 3.5', odds:'@1.94', modelProb:65.8, reason:'VALUE: 模型小球65.8% > 需51.5% → +14.3pp正EV! 西班牙首轮0-0+沙特曼奇尼防守=结构性小球'},
      {type:'让球', pick:'拒绝西班牙-2.5', odds:'@1.92', modelProb:99.6, reason:'模型西班牙赢3+球仅0.4%概率。首轮0-0佛得角证明破密集无力。追深盘=送钱'},
      {type:'波胆', pick:'1-0', odds:'@6.50', modelProb:11.6, reason:'最高概率比分。西班牙艰难1球小胜最可能'}
    ],
    analysis: {
      groupSituation: '**H组第2轮形势**\n\n西班牙1分(0-0佛得角,爆冷!) vs 沙特1分(1-1乌拉圭,不错)。乌拉圭1分,佛得角1分。四队全平!\n\n**淘汰赛路径:** H1打最佳第3(~Elo1600) vs H2对G2(~Elo1750)。差距150 Elo,争头名有动力但不极端。\n\n**关键:** 西班牙首轮0-0暴露了对低位防守的无力。今天面对同样紧凑的沙特,能否调整?',
      lineup1Detail: '**西班牙 (4-3-3) — 德拉富恩特**\n\n2024欧洲杯冠军阵容。Pedri+Rodri+Gavi中场三角控球率可达70%+。Yamal(17岁)右路+Williams Jr左路提供速度。但首轮0-0暴露:控球≠进球,面对10人防守缺乏穿透力。可能调整:增加Olmo替换Gavi增加前场创造力。',
      lineup2Detail: '**沙特 (4-2-3-1) — 曼奇尼**\n\n曼奇尼(前意大利主帅)带来意式防守纪律。首轮1-1乌拉圭展现组织度。Al-Dawsari是核心反击利器(速度+盘带)。4-2-3-1防守时变5-4-1,两条线紧凑间距≤25米。2022世界杯2-1阿根廷证明大赛爆冷DNA。',
      styleAnalysis: '**西班牙:** 经典tiki-taka传控。70%+控球率但首轮证明"传1000脚不进球"的困境真实存在。Yamal/Williams速度突破是唯一非体系化的破密集手段。\n\n**沙特:** 曼奇尼的意式4-2-3-1防守紧凑(两条线间距≤25米)。失球后快速反击,Al-Dawsari速度+盘带是唯一出球点。首轮1-1乌拉圭证明这套体系可以顶住南美强队。',
      tacticalNarrative: '**核心矛盾: 西班牙能否破解"曼奇尼铁桶"?**\n\n首轮0-0佛得角是重要信号——佛得角是Elo1490的小队都能把西班牙封锁住。沙特Elo1645+曼奇尼意式防守经验远超佛得角。\n\n**关键战术问题:**\n1. 西班牙是否会提速?(首轮节奏太慢)\n2. 沙特能否复制2022对阿根廷的高位逼抢?(那场沙特前场逼抢制造了大量失误)\n3. Al-Dawsari vs Carvajal的边路对位是沙特唯一突破口\n\n**⚠️ 历史教训:** 沙特2022世界杯首轮2-1阿根廷。强队被中东紧凑防守+反击击败的剧本在世界杯反复上演。',
      modelInterpretation: '**模型65.6% vs 市场72%** — 市场比模型多看好西班牙6.4pp。\n\n市场可能高估原因:\n1. 西班牙"名气溢价"(2024欧洲杯冠军品牌效应)\n2. 首轮0-0被视为"意外"而非结构性问题\n3. Public Money自动流向西班牙方向\n\n**无Value方向:** 西班牙方向无任何正EV。模型在所有西班牙相关盘口都低于市场需求概率。\n\n**观察结论:** 这是观察型场次。等市场确认后再考虑live bet。',
      betReasoning: '**结论: 观察型场次,不主动下注**\n\n1. Under 2.5@1.95: 模型43.5%<需51%→数学无value。但西班牙首轮0-0+沙特曼奇尼防守→结构性小球逻辑成立。观望。\n2. 西班牙-1.5@2.45: 模型35%<需41%→拒绝。首轮破密集失败,今天面对更强防守不追。\n3. 沙特+1.5@2.05: 模型沙特不输超1球概率65%>需49%? 需细算。沙特1-1乌拉圭+0-0佛得角首轮→H组结构性小比分。\n\n**⚠️ 教训应用:** 6/20厄瓜多尔0-0库拉索证明碾压预期可以完全落空。西班牙0-0佛得角同理。不追碾压场让球。'
    },
    commercialAnalysis: {
      summary: '西班牙@1.13巨额热门(market 88.5%)但模型仅给65.6%→市场高估+23pp! 首轮0-0佛得角暴露破密集低效。沙特/平局方向有巨大value。',
      approvedPicks: [
        { pick: '沙特+1.5', odds: '@2.05', verdict: 'marginal', edge: '+16pp(需精算让球概率)', reasoning: '沙特首轮1-1乌拉圭+佛得角0-0西班牙→H组结构性小比分。沙特不输超1球的概率结构性偏高', category: 'value' }
      ],
      rejectedPicks: [
        { pick: 'Under 2.5', odds: '@1.95', verdict: 'rejected', edge: '-7.5pp(模型43.5%<需51%)', reasoning: '数学无value。虽然结构性小球逻辑成立但edge太负。不追感觉盘', category: 'trap' },
        { pick: '西班牙-1.5', odds: '@2.45', verdict: 'rejected', edge: '-6pp(模型35%<需41%)', reasoning: '首轮0-0佛得角已证明西班牙破密集无力。不追碾压让球', category: 'trap' },
        { pick: '波胆1-0', odds: '@6.50', verdict: 'rejected', edge: '11.6%概率', reasoning: '波胆是庄家利润池。单一比分概率极低+高overround=长期负EV', category: 'entertainment' }
      ],
      marketBehavior: '西班牙"品牌溢价"明显——2024欧洲杯冠军的光环让市场自动+6pp。但首轮0-0佛得角的信号被市场选择性忽略。Public Money重仓西班牙方向→庄家乐于接受。沙特方向是Smart Money暗流。',
      kellyNote: '本场建议0仓位(纯观察)。如果一定要下,沙特+1.5@2.05可考虑0.5%试探仓。等live赛中信号再决定是否追加。'
    },
    confidence: 'low'
  },
  {
    team1: '比利时', team2: '伊朗', group: 'G', ground: '洛杉矶', time: '13:00 UTC-7',
    elo1: 1880, elo2: 1785, eloDiff: 95,
    model: { home: 0.4824, draw: 0.2309, away: 0.2868 },
    market: { home: 0.662, draw: 0.211, away: 0.125 },
    lambda: { home: 1.58, away: 1.15, total: 2.73 },
    gap: { team: '比利时', value: -18.0, direction: 'market_higher' },
    formation1: '3-4-2-1', formation2: '5-3-2', coach1: '特德斯科', coach2: '格哈尼安',
    style1: '创造力+经验但老化。De Bruyne/Lukaku核心。首轮1-1平埃及,状态平平',
    style2: '紧凑防守+反击有质量。Taremi(国米)+Azmoun双前锋。首轮2-2新西兰(不佳)',
    lineup1: 'Casteels; Castagne, Faes, Theate; Meunier, Tielemans, Onana, Doku; De Bruyne, Trossard; Lukaku',
    lineup2: 'Beiranvand; Moharrami, Kanaani, Hosseini, Pouraliganji, Mohammadi; Noorollahi, Ezatolahi, Hajsafi; Taremi, Azmoun',
    injuries1: 'De Bruyne体能管理(31岁)', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '创造力vs纪律', advantage: '比利时(微)', reason: 'De Bruyne传球能力世界顶级,但伊朗5-3-2封锁中路通道' },
      { area: '反击质量', advantage: '伊朗', reason: 'Taremi(国米)+Azmoun速度+终结能力。比利时3后卫被抓身后' },
      { area: '经验/老化', advantage: '均衡(负面)', reason: '比利时黄金一代老化(De Bruyne 31, Lukaku 33)。伊朗也非年轻队' },
      { area: '定位球', advantage: '比利时', reason: 'De Bruyne主罚+Lukaku头球。伊朗定位球防守一般' }
    ],
    groupContext: 'G组第2轮。比利时首轮1-1埃及(不佳)，伊朗首轮2-2新西兰(不佳)。G组极度均衡(4队全平!都是1分)。双方都必须赢——平局对两队都是灾难性结果。',
    handicaps: [{line:-1.5, win:0.253, draw:0, lose:0.747},{line:-1, win:0.253, draw:0.228, lose:0.519},{line:-0.5, win:0.482, draw:0, lose:0.518}],
    overUnder: [{line:2.5, over:0.514, under:0.486, marketOver:'@1.88', marketUnder:'@1.94'},{line:2.75, over:0.514, under:0.486, marketOver:'@2.15', marketUnder:'@1.75'}],
    predictions: [{score:'1-0', prob:11.3, reason:'比利时经验微优,但进球效率可能不高'},{score:'1-1', prob:10.9, reason:'双方都有进球能力但也都不稳定'},{score:'2-1', prob:9.4, reason:'开放式打法下比利时De Bruyne关键传球制胜'}],
    recommendations: [
      {type:'让球', pick:'伊朗+1.5', odds:'@1.85', modelProb:74.7, reason:'VALUE! 模型伊朗不输超1球74.7% > 需54% → +20.7pp巨大value! 真实盘口比利时-1.25,伊朗方向深度value'},
      {type:'大小球', pick:'Over 2.5', odds:'@1.88', modelProb:51.4, reason:'微弱正EV: 模型51.4%>需53.2%→边缘。但双方must-win开放打法加强Over逻辑'},
      {type:'让球', pick:'拒绝比利时-1.5', odds:'@2.25', modelProb:25.3, reason:'模型仅25.3%→负EV。市场-1.25已经很激进,更大盘口没有支撑'},
      {type:'波胆', pick:'1-1', odds:'@6.00', modelProb:10.9, reason:'最高概率比分但波胆overround高,仅供参考'}
    ],
    analysis: {
      groupSituation: '**G组极度均衡!**\n\n比利时1分(1-1埃及) | 伊朗1分(2-2新西兰) | 埃及1分(1-1比利时) | 新西兰1分(2-2伊朗)\n\n四队全平!!! 这意味着第2轮就是淘汰赛——输球的队伍第3轮将陷入极度被动。\n\n**博弈论:** 双方都知道平局=灾难(第3轮面对另一个1分对手仍需拼)。MUST-WIN动力极强→预期开放式打法。',
      lineup1Detail: '**比利时 (3-4-2-1) — 特德斯科**\n\n黄金一代末期。De Bruyne(31岁,曼城)仍是核心创造力来源但体能下降。Lukaku(33岁)禁区内终结仍可靠但参与进攻减少。3-4-2-1依赖翼卫前插宽度(Meunier/Castagne)。首轮1-1埃及表现平庸——缺乏节奏变化。',
      lineup2Detail: '**伊朗 (5-3-2) — 格哈尼安**\n\n5-3-2防守紧凑+双前锋反击。Taremi(国际米兰)是伊朗核心——在意甲证明了世界级反击嗅觉。Azmoun(勒沃库森)速度型前锋搭配。首轮2-2新西兰暴露了防守注意力不集中的问题(被Just梅开二度)。今天需要更严谨。',
      styleAnalysis: '**比利时:** 3-4-2-1依赖De Bruyne的创造力串联。黄金一代经验丰富但速度/强度下降明显。Doku(曼城)是唯一有爆发力的攻击手。整体偏慢、偏技术。\n\n**伊朗:** 5-3-2亚洲传统紧凑防守+Taremi/Azmoun双前锋反击。反击质量很高(两人都在五大联赛效力)。但首轮2-2新西兰证明整体防守注意力有问题——不是防守能力不行,是纪律性波动。',
      tacticalNarrative: '**核心: 比利时老化 vs 伊朗反击质量**\n\n比利时3-4-2-1的最大弱点是翼卫身后空间。当Meunier/Castagne前插后,3中卫面对Taremi+Azmoun的速度组合非常被动。\n\n**类比:** 这场结构类似2022世界杯比利时0-2摩洛哥。比利时黄金一代面对紧凑防守+反击有质量的中东/非洲球队——结果是输球。\n\n**must-win悖论:** 双方都必须赢→比利时被迫进攻→身后空间增大→伊朗反击更致命。这个逻辑链对伊朗+0.5有利。',
      modelInterpretation: '**模型48.2% vs 市场55%** — 市场比模型多看好比利时6.8pp。\n\n市场高估比利时原因:\n1. "FIFA排名/品牌"溢价(比利时长期前5)\n2. De Bruyne名气效应\n3. Public Money自动流向欧洲强队\n\n**Value方向:** 伊朗不败(模型51.8%) vs 市场需要45.5%(@2.20)→+6.3pp正EV! 这是今天第一个清晰的value bet。\n\nOver 2.5模型51.4% vs需50%→微弱正EV(+1.4pp),结合must-win逻辑加强。',
      betReasoning: '**核心: 伊朗+0.5@2.20 (今日最佳value之一!)**\n\n数学: 模型51.8%>需45.5%→+6.3pp正EV。\n逻辑: Taremi(国米)+Azmoun(勒沃库森)反击质量≥比利时进攻效率。比利时黄金一代老化+首轮平庸。2022世界杯比利时0-2摩洛哥的教训——中东球队可以击败老化比利时。\n\n**辅助: Over 2.5@2.00**\n模型51.4%→微弱正EV。MUST-WIN双方→开放打法→互相进球概率高。\n\n**伊朗+0.5是今日第一推荐。**'
    },
    commercialAnalysis: {
      summary: '比利时@1.51(market 66.2%)被高估→模型仅48.2%! 偏差+18pp。黄金一代老化+首轮仅1-1埃及。伊朗+0.5@2.20有巨大value。',
      approvedPicks: [
        { pick: '伊朗+0.5', odds: '@2.20', verdict: 'approved', edge: '+6.3pp', reasoning: '模型伊朗不败51.8%>需45.5%。6.3pp是本轮最大单场edge。Taremi国米级别+比利时老化+2022比利时0-2摩洛哥教训', category: 'core' },
        { pick: 'Over 2.5', odds: '@2.00', verdict: 'approved', edge: '+1.4pp(must-win加强)', reasoning: '模型51.4%>需50%→微弱正EV。双方都必须赢,平局=灾难→开放打法结构性支持大球', category: 'value' }
      ],
      rejectedPicks: [
        { pick: '平局', odds: '@4.00', verdict: 'rejected', edge: '-1.9pp(模型23.1%<需25%)', reasoning: '数学无value。且must-win语境下平局心理不被接受——双方都会全力进攻', category: 'trap' },
        { pick: '波胆1-1', odds: '@6.00', verdict: 'rejected', edge: '10.9%概率', reasoning: '波胆高overround。已有伊朗+0.5覆盖方向(含1-1结果)', category: 'entertainment' }
      ],
      marketBehavior: '比利时"品牌溢价"最典型案例。FIFA排名长期前5但实际Elo1880(vs伊朗1785仅差95)。黄金一代De Bruyne/Lukaku的名气让Public Money自动流入。Pinnacle虽更理性但仍给了55%——明显高于模型48%。Smart Money在伊朗方向。',
      kellyNote: '伊朗+0.5建议2-2.5%仓位(edge厚6.3pp+逻辑清晰)。Over 2.5建议1-1.5%仓位(edge薄但结构支持)。这是今天第一核心仓位。'
    },
    confidence: 'mid'
  },
  {
    team1: '乌拉圭', team2: '佛得角', group: 'H', ground: '迈阿密', time: '19:00 UTC-4',
    elo1: 1908, elo2: 1490, eloDiff: 418,
    model: { home: 0.7195, draw: 0.1614, away: 0.1191 },
    market: { home: 0.645, draw: 0.233, away: 0.115 },
    lambda: { home: 2.30, away: 0.79, total: 3.09 },
    gap: { team: '乌拉圭', value: +7.5, direction: 'model_higher' },
    formation1: '4-4-2', formation2: '4-4-2', coach1: '比尔萨', coach2: '博卡',
    style1: '比尔萨高压逼抢+进攻丰富。Núñez/Valverde/Araújo。首轮1-1平沙特(不佳)',
    style2: '团队纪律超强,0-0逼平西班牙! 无大牌但防守组织堪比2022摩洛哥',
    lineup1: 'Rochet; Nández, Araújo, Giménez, Olivera; Valverde, Ugarte, Bentancur, De Arrascaeta; Núñez, Suárez',
    lineup2: '全团队型阵容, 无明星球员但纪律性极强。首轮0-0西班牙证明整体防守组织度',
    injuries1: 'Suárez体能管理(37岁)', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '高压逼抢vs纪律', advantage: '均衡', reason: '比尔萨高位逼抢是破低位最有效手段——但佛得角首轮面对西班牙传控仍0-0说明抗压力极强' },
      { area: '个体天赋', advantage: '乌拉圭(碾压)', reason: 'Núñez(利物浦)+Valverde(皇马)+Araújo(巴萨) vs 无五大联赛球员' },
      { area: '防守组织', advantage: '佛得角', reason: '首轮0-0西班牙!!! 防守组织堪比2022摩洛哥。纪律>天赋' },
      { area: '进攻多样性', advantage: '乌拉圭', reason: '比尔萨体系有高压抢断后快攻+定位球+阵地进攻多种手段' }
    ],
    groupContext: 'H组第2轮。乌拉圭1分(1-1沙特,不佳) vs 佛得角1分(0-0西班牙,超级爆冷!)。佛得角是本届最大黑马候选——Elo1490逼平Elo1975的西班牙!\n\n⚠️ 6/20教训: 厄瓜多尔0-0库拉索(Elo差463)。碾压场不等于大胜!佛得角比库拉索强得多(逼平西班牙!)。',
    handicaps: [{line:-1.5, win:0.380, draw:0, lose:0.620},{line:-1, win:0.380, draw:0.195, lose:0.425},{line:-0.5, win:0.720, draw:0, lose:0.280}],
    overUnder: [{line:2.5, over:0.597, under:0.403, marketOver:'@1.87', marketUnder:'@1.99'},{line:2.25, over:0.597, under:0.403, marketOver:'@2.05', marketUnder:'@1.80'}],
    predictions: [{score:'2-0', prob:12.1, reason:'乌拉圭进攻丰富但佛得角防守纪律限制大胜'},{score:'1-0', prob:11.2, reason:'佛得角铁桶阵仅被攻破1次'},{score:'2-1', prob:9.5, reason:'佛得角也有进球能力(反击质量虽低但团队配合好)'}],
    recommendations: [
      {type:'胜平负', pick:'乌拉圭胜', odds:'@1.55', modelProb:72.0, reason:'VALUE! 模型72.0% vs market 64.5% → +7.5pp正EV! 今日唯一模型>市场的强队场次。乌拉圭实力碾压佛得角'},
      {type:'大小球', pick:'Under 2.5 观望', odds:'@1.90', modelProb:40.4, reason:'模型40.4%<need 53%→数学无value。但佛得角0-0西班牙+乌拉圭首轮仅1球→结构性小球'},
      {type:'让球', pick:'乌拉圭-1.5 拒绝!', odds:'@2.30', modelProb:38.0, reason:'⚠️ 厄瓜多尔0-0教训! 佛得角防守已证明(0-0西班牙!),不追碾压让球'},
      {type:'波胆', pick:'1-0', odds:'@6.00', modelProb:11.2, reason:'佛得角铁桶阵限制乌拉圭进球数。比尔萨高压可能只够破防1次'}
    ],
    analysis: {
      groupSituation: '**H组第2轮 — 佛得角是本届最大黑马!**\n\n乌拉圭1分(1-1沙特) | 佛得角1分(0-0西班牙!) | 西班牙1分(0-0佛得角) | 沙特1分(1-1乌拉圭)\n\nH组四队全平!佛得角Elo1490逼平Elo1975西班牙是本届至今最大冷门。\n\n**⚠️ 6/20教训:** 厄瓜多尔(Elo1890) 0-0 库拉索(Elo1427)!!! Elo差463都无法转化为进球。佛得角(Elo1490)已经证明了比库拉索强得多(逼平西班牙!)。不能盲目追乌拉圭碾压。',
      lineup1Detail: '**乌拉圭 (4-4-2) — 比尔萨**\n\n比尔萨标志性高压逼抢+直接进攻。Núñez(利物浦)速度+冲击力,Valverde(皇马)box-to-box覆盖全场,Araújo(巴萨)后防定海神针。首轮1-1沙特略显不佳——比尔萨高压被沙特紧凑防守化解。今天面对同样紧凑的佛得角,问题可能重复。',
      lineup2Detail: '**佛得角 (4-4-2) — 博卡**\n\n无明星球员但团队纪律性超强!首轮0-0西班牙是本届最大冷门之一——面对70%+控球率、1000+传球的西班牙tiki-taka,佛得角全场保持两条线紧凑(4-4-2防守变4-5-1),没给西班牙任何清晰射门机会。\n\n防守组织堪比2022摩洛哥(该届黑马最终第4名!)。佛得角可能是"2026摩洛哥"。',
      styleAnalysis: '**乌拉圭:** 比尔萨高压逼抢是世界足坛最激进的战术体系。前场10秒内完成抢断→快速推进→射门。但代价是体能消耗极大+后场空间大。首轮1-1沙特证明:高压被紧凑防守化解后缺乏Plan B。\n\n**佛得角:** "穷人版摩洛哥"——没有Hakimi/Amrabat这样的大牌,但团队纪律+防守组织度达到了相似水平。0-0西班牙不是运气——是90分钟完美执行了低位防守计划。',
      tacticalNarrative: '**比尔萨高压 vs 佛得角铁桶: 矛vs盾的终极对决**\n\n比尔萨的高压逼抢可能是破解佛得角的唯一办法——西班牙tiki-taka传控做不到的事(0-0),比尔萨的高强度直接打法或许能做到。\n\n**但三个风险:**\n1. 佛得角首轮面对的是更好的传控(西班牙)仍0-0→证明抗压能力极强\n2. 比尔萨高压的代价是后场空间→如果佛得角能反击一次就可能得分\n3. 乌拉圭首轮1-1沙特→比尔萨高压被紧凑防守化解的剧本已经上演过一次\n\n**⚠️ 最重要教训:** 厄瓜多尔0-0库拉索。碾压预期≠碾压结果。佛得角已经证明了不是库拉索级别——他们逼平了西班牙!',
      modelInterpretation: '**模型72.0% vs 市场80%** — 市场比模型多看好乌拉圭8pp。\n\n**为什么不追乌拉圭:**\n1. 模型72% < 市场80%→乌拉圭方向无任何正EV\n2. 佛得角0-0西班牙证明防守组织度远超Elo预期\n3. 厄瓜多尔0-0库拉索(Elo差463)教训——碾压场完全落空\n4. 乌拉圭首轮1-1沙特——比尔萨高压已被类似紧凑防守化解\n\n**Value方向:** 佛得角+1.5@2.05(模型~60%>需49%→+11pp!)。这是防守纪律的直接定价。',
      betReasoning: '**核心: 佛得角+1.5@2.05 (本轮最核心推荐之一!)**\n\n数学: 模型佛得角不输超1球~60%>需49%→+11pp正EV!\n逻辑: 0-0西班牙是铁证。佛得角防守组织度≈2022摩洛哥级别。乌拉圭1-1沙特+厄瓜多尔0-0库拉索=碾压场不等于大胜。\n\n**⚠️ 绝对拒绝乌拉圭-1.5!** 厄瓜多尔0-0库拉索的教训。佛得角远比库拉索强(逼平西班牙)。追碾压让球=送钱。\n\nUnder 2.5虽然数学无value但结构性小球逻辑极强——佛得角0-0+乌拉圭首轮仅1球。观望或live bet。'
    },
    commercialAnalysis: {
      summary: '今日唯一模型>市场强队: 乌拉圭72.0% vs market 64.5%(+7.5pp)。@1.55有正EV! 佛得角0-0西班牙但Elo差418碾压。乌拉圭胜是核心仓位。',
      approvedPicks: [
        { pick: '佛得角+1.5', odds: '@2.05', verdict: 'approved', edge: '+11pp(本轮最大edge!)', reasoning: '模型佛不输超1球~60%>需49%。0-0西班牙是硬证据——Elo1975都打不进,Elo1908乌拉圭凭什么大胜? 厄瓜多尔0-0库拉索教训', category: 'core' }
      ],
      rejectedPicks: [
        { pick: '乌拉圭-1.5', odds: '@2.30', verdict: 'rejected', edge: '-11pp(巨亏!)', reasoning: '⚠️ 本轮最大陷阱! 模型仅38%>需43%→负EV。加上厄瓜多尔0-0教训+佛得角0-0西班牙→追碾压让球=送钱', category: 'trap' },
        { pick: 'Under 2.5', odds: '@1.90', verdict: 'rejected', edge: '-12.6pp(模型40.4%<需53%)', reasoning: '数学巨亏。虽然结构性小球逻辑成立(佛得角0-0+乌拉圭1-1)但赔率太低补不回来', category: 'trap' },
        { pick: '波胆1-0', odds: '@6.00', verdict: 'rejected', edge: '11.2%概率', reasoning: '波胆高overround。佛得角+1.5已覆盖小比分区间', category: 'entertainment' }
      ],
      marketBehavior: '市场给乌拉圭80%是"Elo惯性"定价——Elo差418通常确实对应80%+。但佛得角0-0西班牙已经证明他们的防守组织度远超Elo预期。市场未充分消化这个信息(仅1天前的比赛)。厄瓜多尔0-0教训进一步验证——碾压场市场系统性高估强队大胜概率。',
      kellyNote: '佛得角+1.5建议2.5-3%仓位(本轮最大edge+强逻辑支撑)。这是今天的核心仓位。如果佛得角+1@更高赔率出现,可追加1%。'
    },
    confidence: 'high'
  },
  {
    team1: '新西兰', team2: '埃及', group: 'G', ground: '温哥华', time: '19:00 UTC-7',
    elo1: 1535, elo2: 1720, eloDiff: -185,
    model: { home: 0.2851, draw: 0.2301, away: 0.4848 },
    market: { home: 0.164, draw: 0.233, away: 0.606 },
    lambda: { home: 1.15, away: 1.59, total: 2.74 },
    gap: { team: '埃及', value: -12.1, direction: 'market_higher' },
    formation1: '4-4-2', formation2: '4-2-3-1', coach1: '海', coach2: '维特利亚',
    style1: '团队精神+英式对抗。Matthew Just首轮梅开二度是本届黑马新星!首轮2-2伊朗(惊人)',
    style2: '技术型中东风格+Salah个人能力。首轮1-1比利时(不错)展现竞争力',
    lineup1: 'Sail; Payne, Tuiloma, Smith, Cacace; Just, Bell, Stamenic, Singh; Wood, Waine',
    lineup2: 'El-Shennawy; Ashraf, Hegazy, Abdelmonem, Fatouh; Elneny, Fathy; Trezeguet, Ashour, Marmoush; Salah',
    injuries1: '全员健康(年轻队伍体能充沛)', injuries2: '无重大伤情',
    tacticalMatchup: [
      { area: '个体天赋', advantage: '埃及', reason: 'Salah(利物浦)世界级。但新西兰Just首轮梅开二度证明了有进球能力' },
      { area: '团队精神', advantage: '新西兰', reason: '2-2伊朗的比赛展现了超强战斗意志。英式对抗+永不放弃' },
      { area: '中场控制', advantage: '埃及(微)', reason: 'Elneny经验+Marmoush创造力>新西兰中场。但差距不大' },
      { area: '身体对抗', advantage: '新西兰', reason: '英式身体流。高空球+对抗是新西兰传统优势' }
    ],
    groupContext: 'G组第2轮。新西兰首轮2-2伊朗(惊人!Just梅开二度)。埃及首轮1-1比利时(不错)。G组4队全平(都是1分)。\n\n新西兰Matthew Just是本届黑马新星——大洋洲球队首轮梅开二度震惊世界。',
    handicaps: [{line:1.0, win:0.715, draw:0.165, lose:0.120},{line:0.5, win:0.285, draw:0, lose:0.715},{line:0, win:0.285, draw:0.230, lose:0.485}],
    overUnder: [{line:2.5, over:0.516, under:0.484, marketOver:'@1.86', marketUnder:'@1.96'},{line:2.25, over:0.516, under:0.484, marketOver:'@2.05', marketUnder:'@1.82'}],
    predictions: [{score:'0-1', prob:11.2, reason:'埃及Salah个人能力制胜。新西兰可能攻不破埃及后防'},{score:'1-1', prob:10.9, reason:'双方都有进球能力。G组均衡格局延续'},{score:'1-2', prob:9.4, reason:'新西兰先进球但埃及经验逆转'}],
    recommendations: [
      {type:'让球', pick:'新西兰+1.0', odds:'@2.02', modelProb:71.5, reason:'VALUE! 模型新西兰不输超1球71.5% > 需49.5% → +22pp巨大value! 真实盘口埃及-1.0, NZ+1.0是今天最佳value'},
      {type:'大小球', pick:'Under 2.5', odds:'@1.96', modelProb:48.4, reason:'模型48.4% vs 需51%→边缘。G组must-win可能推高总球数。观望'},
      {type:'胜平负', pick:'拒绝埃及胜', odds:'@1.84', modelProb:48.5, reason:'模型48.5%<需54.3%→无value。埃及被高估,Salah虽强但团队一般'},
      {type:'波胆', pick:'1-1', odds:'@6.50', modelProb:10.9, reason:'G组均衡格局最自然比分。但波胆仅供参考'}
    ],
    analysis: {
      groupSituation: '**G组四队全平——第2轮就是淘汰赛!**\n\n新西兰1分(2-2伊朗) | 埃及1分(1-1比利时) | 比利时1分(1-1埃及) | 伊朗1分(2-2新西兰)\n\n四队1分并列!第2轮结果直接决定出线命运。输球方第3轮将面临极大压力。\n\n**新西兰黑马叙事:** Matthew Just首轮梅开二度是本届最惊喜的个人表演之一。大洋洲球队从来不是鱼腩——但从来没有在世界杯进这么多球!',
      lineup1Detail: '**新西兰 (4-4-2) — 海**\n\nMatthew Just是核心! 首轮梅开二度(7\', 54\')震惊世界。英式4-4-2讲究团队纪律+身体对抗+直接打法。中场球员虽无大牌但工作量充沛。Wood(老将)提供经验支撑。团队精神极强——2-2伊朗展现永不放弃的mentality。',
      lineup2Detail: '**埃及 (4-2-3-1) — 维特利亚**\n\nSalah(利物浦)是绝对核心——世界级右路切入+射门。Marmoush(法兰克福)本赛季爆发提供创造力。Ashour(首轮进球)是中场推进器。首轮1-1比利时证明了与欧洲强队抗衡的能力。整体技术细腻但身体对抗是弱点。',
      styleAnalysis: '**新西兰:** 英式足球DNA——4-4-2直接打法+身体对抗+高空球。Just的爆发给了新西兰前所未有的进攻维度。团队执行力>个体天赋。2-2伊朗证明:足够拼+足够团结=可以和任何人对抗。\n\n**埃及:** 技术型北非/中东风格。Salah是绝对的个人能力差异化因子——世界前5级别的球员。但团队整体不如利物浦时流畅。依赖Salah的个人时刻。',
      tacticalNarrative: '**新西兰身体对抗 vs 埃及技术流**\n\n这是典型的"英式硬朗 vs 技术细腻"的对决。新西兰会用身体+对抗压缩埃及技术发挥空间。Salah能否在高强度对抗中找到个人突破空间是关键。\n\n**Just效应:** Matthew Just的出现改变了新西兰的进攻叙事。以前新西兰是"只能防守等反击"——现在有了Just,他们有了真正的进球威胁。这迫使埃及不能全力进攻,必须留人防反击。\n\n**G组必须赢效应:** 四队全平→双方都不能接受平局→开放打法→互相进球概率上升→BTTS逻辑成立。',
      modelInterpretation: '**模型48.5%(埃及) vs 市场52%(埃及)** — 分歧较小(3.5pp)。双方都认为埃及微优但不碾压。\n\n**关键:** 新西兰不败概率=28.5%(胜)+23.0%(平)=51.5%。市场需要@2.15→46.5%即可。→+5pp正EV!\n\n**Over 2.5:** 模型51.6% vs 需49%(@2.05)→+2.6pp微弱正EV。结合G组must-win逻辑加强。\n\n**总结:** 新西兰+0.5和Over 2.5双推。新西兰被市场低估5pp(因为大洋洲"名气折价")。',
      betReasoning: '**核心: 新西兰+0.5@2.15 (今日第二推荐!)**\n\n数学: 模型51.5%>需46.5%→+5pp正EV。\n逻辑: Just首轮梅开二度证明新西兰有真正的进球威胁。2-2伊朗证明不是鱼腩。英式对抗会限制Salah的技术发挥。G组四队全平=真正的50-50对决。\n\n**辅助: Over 2.5@2.05 / BTTS@1.85**\n新西兰2球(vs伊朗)+埃及1球(vs比利时)=双方都已证明进球能力。G组must-win→双方进球概率高。\n\n**新西兰+0.5是今日第二核心推荐。**'
    },
    commercialAnalysis: {
      summary: '新西兰@6.10被严重低估! 模型28.5% vs market仅16.4%→+12pp value。2-2伊朗证明黑马实力。新西兰+0.5@2.15是今日最强value信号。',
      approvedPicks: [
        { pick: '新西兰+0.5', odds: '@2.15', verdict: 'approved', edge: '+5pp', reasoning: '模型新西兰不败51.5%>需46.5%。Just梅开二度证明进球能力。2-2伊朗证明不是鱼腩。"大洋洲折价"是市场偏见→Smart Money机会', category: 'core' },
        { pick: 'Over 2.5', odds: '@2.05', verdict: 'approved', edge: '+2.6pp', reasoning: '模型51.6%>需49%。新西兰2球+埃及1球(首轮)。G组must-win→开放打法结构', category: 'value' }
      ],
      rejectedPicks: [
        { pick: '波胆1-1', odds: '@6.50', verdict: 'rejected', edge: '10.9%概率', reasoning: '波胆高overround。新西兰+0.5已覆盖含1-1在内的所有不败结果', category: 'entertainment' },
        { pick: '埃及胜', odds: '@1.88', verdict: 'rejected', edge: '-4.5pp(模型48.5%<需53%)', reasoning: '市场高估埃及。Salah虽世界级但团队不如利物浦。新西兰身体对抗会限制', category: 'trap' }
      ],
      marketBehavior: '市场存在"联盟/地区偏见"——大洋洲球队自动被折价。但新西兰2-2伊朗+Just梅开二度应该大幅修正这个偏见。24小时内的新信息可能未被市场充分消化(赔率反应滞后)。这是信息优势窗口。',
      kellyNote: '新西兰+0.5建议2%仓位(edge 5pp+信息优势)。Over 2.5建议1-1.5%仓位。BTTS如有好赔率可配0.5%。今日第二核心仓位。'
    },
    confidence: 'mid'
  }
]

// ====== 进球差分布 ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '西班牙vs沙特': {
    team1: '西班牙', team2: '沙特',
    diffs: {'-2': 0.012, '-1': 0.055, '0': 0.186, '1': 0.265, '2': 0.232, '3': 0.145, '4': 0.068, '5': 0.025, '6': 0.008}
  },
  '比利时vs伊朗': {
    team1: '比利时', team2: '伊朗',
    diffs: {'-3': 0.015, '-2': 0.055, '-1': 0.140, '0': 0.231, '1': 0.240, '2': 0.175, '3': 0.090, '4': 0.036, '5': 0.012}
  },
  '乌拉圭vs佛得角': {
    team1: '乌拉圭', team2: '佛得角',
    diffs: {'-2': 0.010, '-1': 0.048, '0': 0.161, '1': 0.255, '2': 0.245, '3': 0.162, '4': 0.076, '5': 0.029, '6': 0.009}
  },
  '新西兰vs埃及': {
    team1: '新西兰', team2: '埃及',
    diffs: {'-4': 0.014, '-3': 0.048, '-2': 0.120, '-1': 0.210, '0': 0.230, '1': 0.196, '2': 0.108, '3': 0.046, '4': 0.016}
  }
}

// ====== 赛事统计 (更新至6/21早场后) ======
export const tournamentStats: TournamentStats = {
  totalMatches: 36,
  totalGoals: 88,
  avgGoals: 2.44,
  homeWins: 15,
  draws: 14,
  awayWins: 7,
  biggestWin: { match: '德国 7-1 库拉索', date: '6/14' },
  latestGoal: { match: '日本 4-0 突尼斯', scorer: '待补充', date: '6/21' }
}

// ====== 商业盘口精算分析 (6/21) ======
export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '西班牙vs沙特': {
    summary: '西班牙@1.13超级热门但模型仅65.6%→市场高估+23pp! 盘口-2.5极深,0-0佛得角暴露破密集低效。沙特+2.5有巨大value。Under 3.5是今天最佳大小球value。',
    approvedPicks: [
      { pick: '沙特+2.5', odds: '@1.91', verdict: 'approved', edge: '模型99.6%>需52%', reasoning: '模型西班牙赢3+球概率仅0.4%。首轮0-0佛得角是硬证据。深盘2.5球吃下沙特方向几乎免费', category: 'core' },
      { pick: 'Under 3.5', odds: '@1.94', verdict: 'approved', edge: '+14pp(模型65.8%>需51.5%)', reasoning: '今日最佳大小球value。西班牙首轮0球+沙特防守紧凑。3.5门槛极高——西班牙需要进4球才破', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '西班牙-2.5', odds: '@1.92', verdict: 'rejected', edge: '模型仅0.4%概率赢3+球', reasoning: '首轮0-0佛得角已证明西班牙破密集无力。追上盘深让=送钱', category: 'trap' },
      { pick: '波胆1-0', odds: '@6.50', verdict: 'rejected', edge: '11.6%概率', reasoning: '波胆是庄家利润池。单一比分概率极低+高overround=长期负EV', category: 'entertainment' }
    ],
    marketBehavior: '西班牙-2.5深盘反映了\"2024欧洲杯冠军\"品牌溢价。市场未充分定价首轮0-0佛得角的信号。Public Money重仓西班牙方向→庄家乐于接受。沙特+2.5方向是Smart Money暗流。O/U升盘至3.5也是过度反应。',
    kellyNote: '沙特+2.5建议0.5-1%试探仓(水低但edge极大)。Under 3.5建议1.5-2%仓位(今日最佳大小球value)。等live赛确认后再决定是否追加。'
  },
  '比利时vs伊朗': {
    summary: '比利时@1.51(market 66.2%)被高估→模型仅48.2%! 偏差+18pp。盘口升到-1.25反映市场过度看好。伊朗+1.5有巨大value。',
    approvedPicks: [
      { pick: '伊朗+1.5', odds: '@1.85', verdict: 'approved', edge: '+20.7pp(模型74.7%>需54%)', reasoning: '模型伊朗不输超1球概率74.7%。真实盘口比利时仅-1.25,伊朗+1.5深度value。Taremi国米级别+比利时老化', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '平局', odds: '@4.00', verdict: 'rejected', edge: '-1.9pp(模型23.1%<需25%)', reasoning: '数学无value。且must-win语境下平局心理不被接受——双方都会全力进攻', category: 'trap' },
      { pick: '波胆1-1', odds: '@6.00', verdict: 'rejected', edge: '10.9%概率', reasoning: '波胆高overround。已有伊朗+0.5覆盖方向(含1-1结果)', category: 'entertainment' }
    ],
    marketBehavior: '比利时"品牌溢价"最典型案例。FIFA排名长期前5但实际Elo1880(vs伊朗1785仅差95)。黄金一代De Bruyne/Lukaku的名气让Public Money自动流入。Pinnacle虽更理性但仍给了55%——明显高于模型48%。Smart Money在伊朗方向。',
    kellyNote: '伊朗+0.5建议2-2.5%仓位(edge厚6.3pp+逻辑清晰)。Over 2.5建议1-1.5%仓位(edge薄但结构支持)。这是今天第一核心仓位。'
  },
  '乌拉圭vs佛得角': {
    summary: '今日唯一模型>市场强队: 乌拉圭72.0% vs market 64.5%(+7.5pp)。@1.55有正EV! 佛得角0-0西班牙但Elo差418碾压。乌拉圭胜是核心仓位。',
    approvedPicks: [
      { pick: '佛得角+1.5', odds: '@2.05', verdict: 'approved', edge: '+11pp(本轮最大edge!)', reasoning: '模型佛不输超1球~60%>需49%。0-0西班牙是硬证据——Elo1975都打不进,Elo1908乌拉圭凭什么大胜? 厄瓜多尔0-0库拉索教训', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '乌拉圭-1.5', odds: '@2.30', verdict: 'rejected', edge: '-11pp(巨亏!)', reasoning: '⚠️ 本轮最大陷阱! 模型仅38%>需43%→负EV。加上厄瓜多尔0-0教训+佛得角0-0西班牙→追碾压让球=送钱', category: 'trap' },
      { pick: 'Under 2.5', odds: '@1.90', verdict: 'rejected', edge: '-12.6pp(模型40.4%<需53%)', reasoning: '数学巨亏。虽然结构性小球逻辑成立(佛得角0-0+乌拉圭1-1)但赔率太低补不回来', category: 'trap' },
      { pick: '波胆1-0', odds: '@6.00', verdict: 'rejected', edge: '11.2%概率', reasoning: '波胆高overround。佛得角+1.5已覆盖小比分区间', category: 'entertainment' }
    ],
    marketBehavior: '市场给乌拉圭80%是"Elo惯性"定价——Elo差418通常确实对应80%+。但佛得角0-0西班牙已经证明他们的防守组织度远超Elo预期。市场未充分消化这个信息(仅1天前的比赛)。厄瓜多尔0-0教训进一步验证——碾压场市场系统性高估强队大胜概率。',
    kellyNote: '佛得角+1.5建议2.5-3%仓位(本轮最大edge+强逻辑支撑)。这是今天的核心仓位。如果佛得角+1@更高赔率出现,可追加1%。'
  },
  '新西兰vs埃及': {
    summary: '埃及@1.84被高估→模型仅48.5%。盘口埃及-1.0反映市场过度看好。新西兰+1.0@2.02是今日最佳value信号(+22pp)。',
    approvedPicks: [
      { pick: '新西兰+1.0', odds: '@2.02', verdict: 'approved', edge: '+22pp(本轮最大edge)', reasoning: '模型新西兰不输超1球71.5%>需49.5%。真实盘口仅埃及-1.0,NZ+1.0深度value。2-2伊朗证明黑马实力', category: 'core' }
    ],
    rejectedPicks: [
      { pick: '波胆1-1', odds: '@6.50', verdict: 'rejected', edge: '10.9%概率', reasoning: '波胆高overround。新西兰+0.5已覆盖含1-1在内的所有不败结果', category: 'entertainment' },
      { pick: '埃及胜', odds: '@1.88', verdict: 'rejected', edge: '-4.5pp(模型48.5%<需53%)', reasoning: '市场高估埃及。Salah虽世界级但团队不如利物浦。新西兰身体对抗会限制', category: 'trap' }
    ],
    marketBehavior: '市场存在"联盟/地区偏见"——大洋洲球队自动被折价。但新西兰2-2伊朗+Just梅开二度应该大幅修正这个偏见。24小时内的新信息可能未被市场充分消化(赔率反应滞后)。这是信息优势窗口。',
    kellyNote: '新西兰+0.5建议2%仓位(edge 5pp+信息优势)。Over 2.5建议1-1.5%仓位。BTTS如有好赔率可配0.5%。今日第二核心仓位。'
  }
}
