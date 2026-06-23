// ====== Core Types ======

export interface Scorer {
  name: string
  minute: string
}

export interface MatchResult {
  date: string
  group: string
  team1: string
  team2: string
  score1: number
  score2: number
  scorers1: string[]
  scorers2: string[]
  ground: string
}

export interface ModelProb {
  home: number
  draw: number
  away: number
  _note?: string  // '模型估算(非真实盘口)' when market is estimated, absent for real data
}

export interface Lambda {
  home: number
  away: number
  total: number
}

export interface ModelGap {
  team: string
  value: number
  direction: 'model_higher' | 'market_higher' | 'neutral'
}

export interface TacticalMatchup {
  area: string
  advantage: string
  reason: string
}

export interface ScorePrediction {
  score: string
  prob: number
  reason: string
}

export type Confidence = 'high' | 'mid' | 'low'

export interface BetRecommendation {
  type: string
  pick: string
  odds?: string
  modelProb: number
  reason: string
}

export interface HandicapLine {
  line: number
  win: number
  draw: number
  lose: number
}

export interface OverUnder {
  line: number
  over: number
  under: number
  marketOver?: string
  marketUnder?: string
}

export interface MatchAnalysis {
  groupSituation: string        // 小组出线形势(含淘汰赛路径)
  lineup1Detail: string         // 主队首发阵容详细描述
  lineup2Detail: string         // 客队首发阵容详细描述
  styleAnalysis: string         // 双方球队风格+阵型匹配度
  tacticalNarrative: string     // 战术克制关系深度分析
  modelInterpretation: string   // 模型数据解读(含市场对比)
  betReasoning: string          // 波胆+推荐理由(完整逻辑链)
}

export interface MatchPrediction {
  team1: string
  team2: string
  group: string
  ground: string
  time: string
  elo1: number
  elo2: number
  eloDiff: number
  model: ModelProb
  market: ModelProb
  lambda: Lambda
  gap: ModelGap
  formation1: string
  formation2: string
  coach1: string
  coach2: string
  style1: string
  style2: string
  lineup1: string
  lineup2: string
  injuries1: string
  injuries2: string
  tacticalMatchup: TacticalMatchup[]
  groupContext: string
  handicaps?: HandicapLine[]
  overUnder?: OverUnder[]
  predictions?: ScorePrediction[]   // 已移除波胆, 保留字段兼容旧数据
  recommendations: BetRecommendation[]
  analysis?: MatchAnalysis
  commercialAnalysis?: CommercialAnalysis
  confidence: Confidence
}

export interface ModelVsActual {
  match: string
  model: ModelProb & { topPick: string }
  expertRevision: string
  actual: string
  modelCorrect: boolean
  expertCorrect: boolean
  winner: string
}

export interface GoalDistribution {
  team1: string
  team2: string
  diffs: Record<string, number>
}

export interface TournamentStats {
  totalMatches: number
  totalGoals: number
  avgGoals: number
  homeWins: number
  draws: number
  awayWins: number
  biggestWin: { match: string; date: string }
  latestGoal: { match: string; scorer: string; date: string }
}

// ====== 商业盘口精算分析 ======
export type CommercialVerdict = 'approved' | 'rejected' | 'marginal'

export interface CommercialPick {
  pick: string              // 推荐内容
  odds: string              // 赔率
  verdict: CommercialVerdict // 精算师判定：approved通过/rejected否决/marginal边缘
  edge: string              // 正EV边际描述 (e.g. "+4.3pp" or "噪音级别")
  reasoning: string         // 商业逻辑原因
  category: 'core' | 'value' | 'trap' | 'entertainment' // 分类
}

export interface CommercialAnalysis {
  summary: string           // 精算师整体评语
  approvedPicks: CommercialPick[]   // 通过商业逻辑审核的推荐
  rejectedPicks: CommercialPick[]   // 不符合商业逻辑的推荐
  marketBehavior: string    // 市场行为学分析
  kellyNote: string         // 资金管理建议
}

// ====== 模型架构 ======
export interface ModelDimension {
  name: string
  icon: string
  description: string
  weight: string
  dataSource: string
}

export interface ModelArchitecture {
  name: string
  version: string
  coreEngine: string
  dimensions: ModelDimension[]
  pipeline: string[]        // 流水线步骤
  limitations: string[]     // 已知局限性
  calibration: string       // 校准方法
}
