import type { MatchPrediction, GoalDistribution, TournamentStats, CommercialAnalysis } from '../types'

// ====== 6/28 — R32淘汰赛第1场: 南非 vs 加拿大 (R32-1) ======
// model_agent "South Africa" "Canada" + The Odds API BetRivers实时盘口
// R32-1: 2A vs 2B → 南非(Group A #2) vs 加拿大(Group B #2)
// 胜者晋级R16对战荷兰(1F)
export const lastUpdated = '2026-06-28 15:00 CST (模型v3.0: 淘汰赛首场)'
export const todayPredictions: MatchPrediction[] = [

  // ==================== 1. 南非 vs 加拿大 (R32-1) ====================
  {
    team1: '南非', team2: '加拿大', group: 'R32', ground: '洛杉矶(Inglewood)', time: '12:00 UTC-7',
    elo1: 1511, elo2: 1767, eloDiff: -256,
    model: { home: 0.088, draw: 0.1895, away: 0.7225 },
    market: { home: 0.1585, draw: 0.2679, away: 0.5736, _note: 'BetRivers (FAIR: +500→15.9%, +255→26.8%, -152→57.4%, vig-removed)' },
    lambda: { home: 0.56, away: 2.04, total: 2.60 },
    gap: { team: '加拿大', value: 14.9, direction: 'model_higher' },
    formation1: '4-2-3-1', formation2: '4-4-2', coach1: 'Hugo Broos', coach2: 'Jesse Marsch',
    style1: `A组第2(4分 GD-1)。R1 0-2负墨西哥(def正常但攻击乏力),R2 1-1平捷克(最后时刻丢球),R3 1-0胜韩国(绝杀)。off_residual=-0.05(进攻低于Elo预期,3场仅2球),def_residual=-0.25(防守略优于预期)。整体缺乏进攻创造力,Mokoena是中场唯一亮点。`,
    style2: `B组第2(4分 GD+5)。R1 1-1平波黑(Larin关键扳平),R2 6-0屠杀卡塔尔(Jonathan David帽子戏法!),R3 1-2负瑞士(被逆转)。off_residual=+1.07(全场最佳进攻状态之一!!→6-0不是偶然,进攻远超Elo预期),def_residual=-0.25(防守正常)。主场国(HOST)享受主场优势。淘汰赛经验(Jesse Marsch带红牛系高位逼抢)。`,
    lineup1: 'Williams; Mudau, Xulu, Mvala, Modiba; Mokoena, Sithole; Tau, Zwane, Foster; Makgopa',
    lineup2: 'St. Clair; Johnston, Bombito, Miller, Davies; Eustáquio, Koné; Buchanan, J.David, Millar; Larin',
    injuries1: '无重大伤情', injuries2: '全员健康(Davies伤愈确认首发)',
    tacticalMatchup: [
      { area: '进攻火力', advantage: '加拿大(碾压)', reason: 'off_residual=+1.07(世界级) vs 南非off=-0.05→3场2球vs3场8球，攻击力差4倍' },
      { area: '防守质量', advantage: '均势', reason: '双方def_residual均为-0.25→防守都接近Elo预期，但对手质量不同(加拿大面对瑞士逆转暴露防守弱点)' },
      { area: '中场控制', advantage: '加拿大', reason: 'Eustáquio(波尔图)+Koné(沃特福德)双后腰 vs Mokoena→技术和身体碾压' },
      { area: '主场优势', advantage: '加拿大(显著)', reason: '加拿大是主办国(CA)，洛杉矶虽在美国但有大量加拿大球迷。HOST_BOOST=+0.15已内置于λ' },
      { area: '淘汰赛经验', advantage: '加拿大', reason: 'Jesse Marsch带队经历欧冠淘汰赛节奏，加拿大球员多在欧洲联赛' },
    ],
    groupContext: `R32淘汰赛: 2A(南非) vs 2B(加拿大)。胜者晋级R16对战荷兰(1F, Elo 1944)。单场淘汰→90分钟平局则加时+点球。双方都无退路。加拿大是48队中进攻状态最热的球队之一(off=+1.07, 对卡塔尔6-0)，且享受北美主场优势。南非进攻极度乏力(3场2球)。`,

    // ===== HANDICAP LINES (主队南非受让) =====
    handicaps: [
      // Market line: 南非 +0.5 @2.18 (MyBookie)
      {line:0.5, win:0.5322, draw:0.0, lose:0.4678, marketWin:"@2.18", marketLose:"@1.69", isMarketLine:true},
      // Bovada: 南非 +0.75 @2.00
      {line:0.75, win:0.5950, draw:0.0, lose:0.4050, marketWin:"@2.00", marketLose:"@1.83", isMarketLine:true},
      {line:-2, win:0.0032, draw:0.0166, lose:0.9799},
      {line:-1.5, win:0.0198, draw:0, lose:0.9802},
      {line:-1, win:0.0198, draw:0.0682, lose:0.9117},
      {line:-0.5, win:0.088, draw:0, lose:0.912},
      {line:0, win:0.088, draw:0.1895, lose:0.7222},
      {line:1, win:0.2775, draw:0.2544, lose:0.4678},
      {line:1.5, win:0.755, draw:0, lose:0.245},
      {line:2, win:0.5319, draw:0.2228, lose:0.245},
      {line:2.5, win:0.8942, draw:0, lose:0.1058},
      {line:3, win:0.7547, draw:0.1392, lose:0.1058},
    ],

    // ===== OVER/UNDER =====
    overUnder: [
      // Market line: O/U 2.5
      {line:2.5, over:0.4816, under:0.5184, marketOver:"@2.33", marketUnder:"@1.75", isMarketLine:true},
      {line:1.5, over:0.7326, under:0.2674},
      {line:2.0, over:0.4816, under:0.5184},
      {line:2.25, over:0.4816, under:0.5184},
      {line:2.75, over:0.4816, under:0.5184},
      {line:3.0, over:0.264, under:0.736},
      {line:3.5, over:0.264, under:0.736},
    ],

    predictions: [
      {score:'0-2', prob:12.1, reason:'最高概率比分。加拿大off=+1.07超级进攻+南非off=-0.05攻击乏力→零封可能高'},
      {score:'0-1', prob:11.6, reason:'加拿大可能慢热但南非无法形成持续威胁→1球足够'},
      {score:'1-2', prob:8.3, reason:'南非定位球可能偷1球(对韩国绝杀)但加拿大整体实力碾压'},
    ],
    recommendations: [
      {type:'胜平负', pick:'加拿大胜', odds:'@1.74', modelProb:0.7225, reason:'模型VALUE+14.9pp! 加拿大off=+1.07(超级进攻)+主场国+Elo差256。市场过度定价平局和南非，严重低估加拿大碾压实力' },
      {type:'让球', pick:'南非+0.75', odds:'@2.00', modelProb:0.595, reason:'保守方向。淘汰赛不确定性高(加时赛因子)。模型+9.5pp→加拿大赢2球以上仅40.5%' },
      {type:'大小球', pick:'Over 2.5', odds:'@2.33', modelProb:0.4816, reason:'微正EV(+5.2pp)。加拿大λ=2.04(单队即可产出2球)+O/U 2.5赔率偏高' },
    ],
    analysis: {
      groupSituation: `**R32淘汰赛第1场: 2A vs 2B — 南非 vs 加拿大**

📍 洛杉矶(Inglewood), 12:00 UTC-7 (北京时间6/29 03:00)

这是2026世界杯48队赛制下的首场淘汰赛! 单场定胜负——90分钟平局直接进入加时赛+点球大战,没有退路。

**晋级奖励:** 胜者将在R16对阵荷兰(Elo 1944, F组第1)。荷兰在小组赛阶段展现顶级实力(2-2日本,5-1瑞典,4-0突尼斯),是本届夺冠热门之一。

**A组出线回顾(南非-第2):**
• R1: 0-2负墨西哥(被完全压制,进攻无力)
• R2: 1-1平捷克(Mokoena绝平,防守在最后时刻松懈)  
• R3: 1-0胜韩国(Mokoena第83分钟进球,4分出线)
总结: 3场仅进2球,依赖定位球和个人闪光。off=-0.05说明进攻手段单一。

**B组出线回顾(加拿大-第2):**
• R1: 1-1平波黑(Larin关键时刻扳平)
• R2: 6-0屠杀卡塔尔(Jonathan David帽子戏法,全队进攻火力全开!)
• R3: 1-2负瑞士(先进球但被逆转,暴露防守端对强队的脆弱)
总结: 3场8球(GD+5)。off=+1.07(全场最佳之一!)→6-0不是偶然。主场国身份加持。`,

      lineup1Detail: `**南非 (4-2-3-1) — Hugo Broos**

• 门将Williams(马梅洛迪日落)经验丰富
• 后防Mudau+Xulu领衔,中场核心Mokoena(阿尔阿赫利)是唯一能在高强度比赛中拿球的球员
• 攻击线Tau(前布莱顿)+Zwane+Makgopa→整体质量严重不足
• 攻防数据: off=-0.05(进攻低于预期,3场2球), def=-0.25(防守略优于预期)
• 优势: 非洲球队的身体对抗能力,定位球有一定威胁
• 劣势: 创造性严重不足,面对高位逼抢容易丢球(对墨西哥暴露)`,

      lineup2Detail: `**加拿大 (4-4-2) — Jesse Marsch**

• 阵中多名欧洲联赛球员: Alphonso Davies(拜仁慕尼黑)、Jonathan David(里尔)、Larin(马洛卡)、Eustáquio(波尔图)
• J.David小组赛帽子戏法(对卡塔尔6-0),Larin 2球→锋线状态火热
• off_residual=+1.07→加拿大进攻远超Elo预期的世界级水平! 平均每场2.67球
• 防守: def=-0.25(正常水平,对瑞士丢了2球说明面对强队有漏洞)
• 优势: 高位逼抢(Marsch红牛体系)+Davies左边路爆破+J.David终结能力
• 劣势: 对强队时防线紧张(被瑞士逆转),淘汰赛经验不足(36年来首次淘汰赛)
• 主场国加成: HOST_BOOST=+0.15已内置于λ计算`,

      styleAnalysis: `**南非:** 4-2-3-1防守反击为主。非洲球队的传统优势——身体对抗+定位球——是破局的唯一武器。但进攻手段极度单一:依赖Mokoena的中场长传和Tau的个人突破,3场仅2球说明创造力严重不足。面对加拿大的高位逼抢,南非后场出球将是最大隐患(对墨西哥时多次被高位抢断)。

**加拿大:** 4-4-2高位逼抢+快速转换。Marsch的红牛体系强调反抢后快速向前——这恰好是南非最怕的(后场控球差→被抢断→快速反击)。Davies左路+J.David/Buchanan在转换中的速度可以撕碎南非防线。但注意:对瑞士的1-2暴露了加拿大面对技术型球队时的防守弱点——被瑞士精准传控打穿。不过南非并不具备瑞士的传控能力。`,

      tacticalNarrative: `**核心对位: 加拿大高位逼抢 vs 南非后场出球**

这是本届淘汰赛最尖锐的风格对决之一。

**加拿大的进攻路径:**
① 高位逼抢→抢断后快速直塞J.David/Larin→直接射门
② Davies左路突破下底传中→Larin禁区抢点(对卡塔尔6-0多次上演)
③ Eustáquio中场拦截后直塞反击→Buchanan右路插上

**南非的防守应对:**
① 5人防线深度回收? → 放弃控球但可能苟到加时→历史上非洲球队淘汰赛惯用策略
② 定位球是唯一主动威胁→Mokoena的远射+Tau的突破制造角球
③ 风险点: 南非后场控球差→如果加拿大高位逼抢成功率高→可能半场崩盘(似卡塔尔)

**本场最大悬念:** 南非能否复制对墨西哥上半场的防守韧性(前45分钟0-0)? 如果能拖到60分钟0-0,淘汰赛的紧张氛围会让加拿大焦躁→机会出现在定位球或反击。但南非攻击力太差(off=-0.05),即使拿到反击机会也难转化成进球。

**淘汰赛经验差:** 加拿大上次世界杯淘汰赛是1986年。南非2010年作为东道主未能出线。双方都缺乏淘汰赛经验,但加拿大球员的欧洲联赛经历(J.David法甲金靴,Davies拜仁)赋予他们更大的场面适应力。`,

      modelInterpretation: `**模型72.3% vs 市场57.4% — 今日最大分歧! (+14.9pp)**

这是今天(model_higher)方向gap最大的比赛。CI95加拿大胜[62%-81%]→市场57.4%低于CI下界→模型判定市场显著低估加拿大。

**为什么市场低估加拿大?**
① 加拿大R3 1-2被瑞士逆转→「强强对话输球」让市场下调评价
② 南非R3 1-0胜韩国→「绝杀出线」叙事推高南非估值
③ 但这是典型的「近因偏误」:加拿大6-0卡塔尔的进攻爆发表明off=+1.07是真实能力;而南非赢韩国是弱队互啄(韩国3场仅2球)
④ 北美主场优势(洛杉矶靠近加拿大边境,预计大量加拿大球迷)市场未充分定价

**λ解读:** 加拿大λ=2.04(单队期望2球!),南非λ=0.56(全场最低之一)→总λ=2.60。加拿大单队进攻产出≈南非的3.6倍。这是碾压级差距。

**O/U 2.5:** 模型Over 48.2% vs 市场Over 43.0% → +5.2pp。市场Under定价偏高(@1.75→隐含57%),模型认为进球概率更高。加拿大λ=2.04单队即可能产出2球→O2.5线被市场过于保守定价。`,

      betReasoning: `🎯 **加拿大胜(@1.74,+14.9pp):** 今日最清晰的价值方向。off=+1.07(世界级进攻状态,6-0不是偶然)+Elo差256+主场国加成→碾压南非的进攻体系(off=-0.05,3场2球)。市场被瑞士逆转叙事拉低定价。核心仓位。

🎯 **南非+0.75(@2.00,+9.5pp):** 保守方向。淘汰赛不确定性高→南非可能深度防守拖到加时。模型南非输2球以上仅40.5%→SA+0.75有显著value。作为对冲/保守仓。

🎯 **Over 2.5(@2.33,+5.2pp):** 轻度价值。加拿大单队λ=2.04→可能覆盖O2.5。但淘汰赛天然倾向保守(双方对攻意愿低)→edge有限,观察仓。

⚠️ 平局(@3.73): 市场26.8% vs 模型19.0%→市场高估平局。淘汰赛紧张氛围让市场过度定价平局,但实力差>250时平局概率系统性低于市场预期。

❌ **南非胜(@6.31):** 模型8.8% vs 市场15.9%→负EV。南非3场只进2球,对加拿大λ=2.04的进攻线几乎无法零封。`
    },
    confidence: 'high'
  },

]

// ====== Goal Distributions ======
export const goalDistributions: Record<string, GoalDistribution> = {
  '南非vs加拿大': { team1: '南非', team2: '加拿大', diffs: {'-8':0.0006,'-7':0.0025,'-6':0.0088,'-5':0.0265,'-4':0.0674,'-3':0.1392,'-2':0.2228,'-1':0.2544,'0':0.1895,'1':0.0682,'2':0.0166,'3':0.0028,'4':0.0004,'5':0.0,'6':0.0,'7':0.0,'8':0.0} },
}

// ====== Tournament Stats ======
export const tournamentStats: TournamentStats = {
  totalMatches: 72, totalGoals: 168, avgGoals: 2.33,
  homeWins: 32, draws: 22, awayWins: 18,
  biggestWin: { match: '加拿大 6-0 卡塔尔', date: '2026-06-18' },
  latestGoal: { match: '淘汰赛阶段', scorer: '首次淘汰赛', date: '2026-06-28' }
}

// ====== Commercial Analyses (精算审核) ======
export const commercialAnalyses: Record<string, CommercialAnalysis> = {
  '南非vs加拿大': {
    summary: '精算审核通过! 加拿大胜是今天最清晰的价值方向——off=+1.07(世界级进攻状态)+主场国+Elo差256碾压南非3场2球的进攻体系。市场被R3瑞士逆转叙事拉低定价(+14.9pp gap=淘汰赛最大分歧)。SA+0.75作为保守方向通过——淘汰赛不确定性+深度防守可能拖到加时。',
    approvedPicks: [
      {pick:'加拿大胜', odds:'@1.74', verdict:'approved', edge:'+14.9pp', reasoning:'off=+1.07世界级进攻+Elo差256+主场国。6-0卡塔尔证明进攻是真实能力而非偶然。市场57.4% vs 模型72.3%→显著低估。', category:'core'},
      {pick:'南非+0.75', odds:'@2.00', verdict:'approved', edge:'+9.5pp', reasoning:'淘汰赛天然保守+南非可能深度防守。加拿大赢2球以上仅40.5%。作为对冲仓/保守仓。', category:'value'},
      {pick:'Over 2.5', odds:'@2.33', verdict:'marginal', edge:'+5.2pp', reasoning:'加拿大λ=2.04单队可能覆盖O2.5。但淘汰赛保守倾向→edge有限。', category:'value'}
    ],
    rejectedPicks: [
      {pick:'平局', odds:'@3.73', verdict:'rejected', edge:'-7.8pp', reasoning:'市场26.8% vs 模型19.0%。市场高估淘汰赛平局概率。实力差>250时平局概率系统性低于市场。', category:'trap'},
      {pick:'南非胜', odds:'@6.31', verdict:'rejected', edge:'-7.0pp', reasoning:'模型8.8% vs 市场15.9%。南非3场仅2球→几乎不可能零封加拿大', category:'trap'}
    ],
    marketBehavior: `市场加拿大胜57.4% vs 模型72.3%→+14.9pp分歧。市场被加拿大R3 1-2被瑞士逆转的「近因效应」拉低→忽视了6-0卡塔尔时off=+1.07的超级进攻状态。南非+0.5 @2.18→模型53.2%覆盖,SA+0.75 @2.00→模型59.5%覆盖。市场在受让方向定价偏低。`,
    kellyNote: '加拿大胜(核心仓2-3%):+14.9pp+off=+1.07双重确认→今日最佳方向信号。SA+0.75(标准仓1-2%):淘汰赛保守天然→作为安全对冲。Over 2.5(观察仓0.5-1%):edge薄(@2.33高赔率但淘汰赛天然Unders)。'
  },
}
