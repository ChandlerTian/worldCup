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
  predictions: ScorePrediction[]
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
