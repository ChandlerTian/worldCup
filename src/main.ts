import { matchResults, modelVsActualDay19, modelArchitecture } from './data/matches'
import { todayPredictions, goalDistributions, commercialAnalyses } from './data/today-predictions'
import { renderProbComparison, renderGoalDiffChart, renderGoalsTrend } from './charts/index'
import type { MatchResult, ModelVsActual as MVA } from './types'
import type { ECharts } from 'echarts'

let charts: ECharts[] = []
let currentMatchIdx = 0

declare global {
  interface Window {
    switchTab: (id: string) => void
    switchMatch: (idx: number) => void
  }
}

window.switchTab = function(id: string) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'))
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'))
  document.getElementById(`tab-${id}`)?.classList.add('active')
  ;(event?.target as HTMLElement)?.classList.add('active')
  setTimeout(renderAllCharts, 150)
}

window.switchMatch = function(idx: number) {
  currentMatchIdx = idx
  document.querySelectorAll('.match-tab-btn').forEach((el, i) => {
    el.classList.toggle('active', i === idx)
  })
  renderTodayMatch(idx)
  setTimeout(renderAllCharts, 150)
}

// ====== Render single match (Today tab) ======
function renderTodayMatch(idx: number): void {
  const container = document.getElementById('today-matches')
  if (!container) return
  const p = todayPredictions[idx]
  if (!p) return

  const confClass = `confidence-${p.confidence}`
  const confLabel = p.confidence === 'high' ? '高' : p.confidence === 'mid' ? '中' : '低'

  container.innerHTML = `
  <div class="card match-card ${confClass}">
    <div class="card-header">
      <div class="card-title">${p.team1} vs ${p.team2}</div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span class="confidence-tag ${p.confidence}">${confLabel}信心</span>
        <span class="card-badge">${p.group} | ${p.ground} ${p.time}</span>
      </div>
    </div>

    <!-- Key Stats -->
    <div class="stats-grid">
      <div class="stat-item"><div class="stat-label">Elo差</div><div class="stat-value ${p.eloDiff > 200 ? 'green' : p.eloDiff < -50 ? 'red' : ''}">${p.eloDiff > 0 ? '+' : ''}${p.eloDiff}</div></div>
      <div class="stat-item"><div class="stat-label">${p.team1} λ</div><div class="stat-value blue">${p.lambda.home}</div></div>
      <div class="stat-item"><div class="stat-label">${p.team2} λ</div><div class="stat-value">${p.lambda.away}</div></div>
      <div class="stat-item"><div class="stat-label">总期望进球</div><div class="stat-value">${p.lambda.total}</div></div>
      <div class="stat-item"><div class="stat-label">模型vs市场Gap</div><div class="stat-value ${Math.abs(p.gap.value) > 10 ? 'yellow' : ''}">${p.gap.value > 0 ? '+' : ''}${p.gap.value}pp</div></div>
      <div class="stat-item"><div class="stat-label">Gap方向</div><div class="stat-value" style="font-size:0.85rem;">${p.gap.direction === 'model_higher' ? '模型更看好' + p.gap.team : '市场更看好' + p.gap.team}</div></div>
    </div>

    <!-- Charts -->
    <div class="chart-row">
      <div id="prob-chart-active" class="chart-container" style="height:200px;"></div>
      <div id="goaldiff-chart-active" class="chart-container" style="height:200px;"></div>
    </div>

    <!-- Tactics -->
    <div class="section-divider">阵容 & 战术</div>
    <div class="tactics-grid">
      <div class="tactics-box">
        <h5>${p.team1} <span class="formation-tag">${p.formation1}</span> <span style="color:var(--text-muted);font-size:0.8rem;">${p.coach1}</span></h5>
        <p class="style-desc">${p.style1}</p>
        <p class="lineup">${p.lineup1}</p>
        <p class="injury-note">${p.injuries1}</p>
      </div>
      <div class="tactics-box">
        <h5>${p.team2} <span class="formation-tag">${p.formation2}</span> <span style="color:var(--text-muted);font-size:0.8rem;">${p.coach2}</span></h5>
        <p class="style-desc">${p.style2}</p>
        <p class="lineup">${p.lineup2}</p>
        <p class="injury-note">${p.injuries2}</p>
      </div>
    </div>

    <!-- Tactical Matchup -->
    <div class="section-divider">战术克制</div>
    <div class="matchup-table">
      ${p.tacticalMatchup.map(m => `
        <div class="matchup-row">
          <span class="matchup-area">${m.area}</span>
          <span class="matchup-advantage ${m.advantage.includes(p.team1) ? 'adv-home' : m.advantage.includes('中性') || m.advantage.includes('Neutral') ? 'adv-neutral' : 'adv-away'}">${m.advantage}</span>
          <span class="matchup-reason">${m.reason}</span>
        </div>
      `).join('')}
    </div>

    <!-- Group Context -->
    <div class="context-box">${p.groupContext}</div>

    <!-- Handicap & Over/Under -->
    <div class="section-divider">让球 & 大小球</div>
    <div class="bet-tables">
      <div class="bet-table-wrap">
        <h5>让球胜平负</h5>
        <table class="bet-table">
          <tr><th>盘口</th><th>胜</th><th>平</th><th>负</th></tr>
          ${(p.handicaps || []).map(h => `
            <tr>
              <td>${h.line > 0 ? '+' : ''}${h.line}</td>
              <td class="${h.win > 0.45 ? 'highlight-green' : ''}">${(h.win * 100).toFixed(1)}%</td>
              <td>${(h.draw * 100).toFixed(1)}%</td>
              <td class="${h.lose > 0.45 ? 'highlight-red' : ''}">${(h.lose * 100).toFixed(1)}%</td>
            </tr>
          `).join('')}
        </table>
      </div>
      <div class="bet-table-wrap">
        <h5>大小球</h5>
        <table class="bet-table">
          <tr><th>盘口</th><th>大</th><th>小</th><th>市场赔率</th></tr>
          ${(p.overUnder || []).map(ou => `
            <tr>
              <td>${ou.line}</td>
              <td class="${ou.over > 0.52 ? 'highlight-green' : ''}">${(ou.over * 100).toFixed(1)}%</td>
              <td class="${ou.under > 0.52 ? 'highlight-green' : ''}">${(ou.under * 100).toFixed(1)}%</td>
              <td style="font-size:0.8rem;color:var(--text-muted);">${ou.marketOver || '-'} / ${ou.marketUnder || '-'}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </div>

    <!-- Score Predictions -->
    <div class="section-divider">波胆推荐</div>
    <div class="prediction-card">
      ${p.predictions.map(pred => `
        <div class="prediction-row">
          <div class="prediction-score">${pred.score}</div>
          <div class="prediction-prob">${pred.prob}%</div>
          <div class="prediction-reason">${pred.reason}</div>
        </div>
      `).join('')}
    </div>

    <!-- Betting Recommendations -->
    <div class="section-divider">综合推荐</div>
    <div class="recommendations-grid">
      ${(p.recommendations || []).map(r => `
        <div class="rec-card rec-${r.type === '让球' ? 'handicap' : r.type === '大小球' ? 'total' : r.type === '波胆' ? 'score' : 'result'}">
          <div class="rec-type">${r.type}</div>
          <div class="rec-pick">${r.pick}</div>
          <div class="rec-prob">${(r.modelProb * 100).toFixed(1)}%</div>
          <div class="rec-reason">${r.reason}</div>
        </div>
      `).join('')}
    </div>

    <!-- Commercial Analysis (精算师审核) -->
    ${(() => {
      const key = `${p.team1}vs${p.team2}`
      const ca = commercialAnalyses[key]
      if (!ca) return ''
      return `
    <div class="section-divider">🎯 商业盘口精算审核</div>
    <div class="commercial-analysis">
      <div class="commercial-summary">${ca.summary}</div>

      <div class="commercial-section">
        <h5 class="commercial-heading approved-heading">✅ 通过审核 — 符合商业逻辑</h5>
        <div class="commercial-picks">
          ${ca.approvedPicks.map(pick => `
            <div class="commercial-pick-card pick-${pick.verdict}">
              <div class="pick-header">
                <span class="pick-name">${pick.pick}</span>
                <span class="pick-odds">${pick.odds}</span>
                <span class="pick-verdict verdict-${pick.verdict}">${pick.verdict === 'approved' ? '✓ 通过' : '⚠ 边缘'}</span>
              </div>
              <div class="pick-edge">Edge: ${pick.edge}</div>
              <div class="pick-reasoning">${pick.reasoning}</div>
              <div class="pick-category cat-${pick.category}">${pick.category === 'core' ? '核心仓位' : pick.category === 'value' ? 'Value Bet' : pick.category === 'trap' ? '陷阱' : '娱乐'}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="commercial-section">
        <h5 class="commercial-heading rejected-heading">❌ 否决 — 不符合商业逻辑</h5>
        <div class="commercial-picks">
          ${ca.rejectedPicks.map(pick => `
            <div class="commercial-pick-card pick-rejected">
              <div class="pick-header">
                <span class="pick-name">${pick.pick}</span>
                <span class="pick-odds">${pick.odds}</span>
                <span class="pick-verdict verdict-rejected">✗ 否决</span>
              </div>
              <div class="pick-edge">Edge: ${pick.edge}</div>
              <div class="pick-reasoning">${pick.reasoning}</div>
              <div class="pick-category cat-${pick.category}">${pick.category === 'trap' ? '⚠️ 陷阱' : '🎲 娱乐注'}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="commercial-footer">
        <div class="commercial-meta">
          <div class="meta-item"><span class="meta-label">市场行为学:</span> ${ca.marketBehavior}</div>
          <div class="meta-item"><span class="meta-label">Kelly仓位:</span> ${ca.kellyNote}</div>
        </div>
      </div>
    </div>`
    })()}
    ${p.analysis ? `
    <!-- Deep Analysis -->
    <div class="section-divider">深度分析</div>
    <div class="analysis-article">
      <div class="analysis-section">
        <h4>小组出线形势</h4>
        <div class="analysis-content">${p.analysis.groupSituation}</div>
      </div>
      <div class="analysis-section">
        <h4>${p.team1} 首发阵容</h4>
        <div class="analysis-content">${p.analysis.lineup1Detail}</div>
      </div>
      <div class="analysis-section">
        <h4>${p.team2} 首发阵容</h4>
        <div class="analysis-content">${p.analysis.lineup2Detail}</div>
      </div>
      <div class="analysis-section">
        <h4>球队风格 & 阵型匹配度</h4>
        <div class="analysis-content">${p.analysis.styleAnalysis}</div>
      </div>
      <div class="analysis-section">
        <h4>战术克制关系</h4>
        <div class="analysis-content">${p.analysis.tacticalNarrative}</div>
      </div>
      <div class="analysis-section">
        <h4>模型数据解读</h4>
        <div class="analysis-content">${p.analysis.modelInterpretation}</div>
      </div>
      <div class="analysis-section">
        <h4>投注逻辑</h4>
        <div class="analysis-content">${p.analysis.betReasoning}</div>
      </div>
    </div>` : ''}
  </div>`
}

// ====== Render History ======
function renderHistory(): void {
  const container = document.getElementById('history-matches')
  if (!container) return
  const dateGroups: Record<string, MatchResult[]> = {}
  matchResults.forEach(m => { if (!dateGroups[m.date]) dateGroups[m.date] = []; dateGroups[m.date].push(m) })

  let html = ''
  Object.keys(dateGroups).sort().forEach(date => {
    const matches = dateGroups[date]
    const totalGoals = matches.reduce((s, m) => s + m.score1 + m.score2, 0)
    const avgG = (totalGoals / matches.length).toFixed(1)
    const draws = matches.filter(m => m.score1 === m.score2).length
    html += `<div class="card"><div class="card-header"><div class="card-title">${date.slice(5)} (${matches.length}场)</div><div style="display:flex;gap:8px;"><span class="stat-badge">进球${totalGoals}</span><span class="stat-badge">场均${avgG}</span><span class="stat-badge ${draws === matches.length ? 'warn' : ''}">平局${draws}/${matches.length}</span></div></div>`
    matches.forEach(m => {
      const cls = m.score1 > m.score2 ? 'home-win' : m.score1 === m.score2 ? 'draw' : 'away-win'
      html += `<div class="match-row ${cls}"><div class="match-teams"><span class="team home">${m.team1}</span><span class="match-score">${m.score1} - ${m.score2}</span><span class="team away">${m.team2}</span></div><div class="match-meta"><span class="group-tag">${m.group}</span><span class="ground">${m.ground}</span></div>${(m.scorers1.length || m.scorers2.length) ? `<div class="scorers-row"><span class="scorers-home">${m.scorers1.join(', ')}</span><span class="scorers-away">${m.scorers2.join(', ')}</span></div>` : ''}</div>`
    })
    html += '</div>'
  })
  container.innerHTML = html
}

// ====== Render Model Architecture ======
function renderModelArchitecture(): void {
  const container = document.getElementById('model-architecture')
  if (!container) return
  const ma = modelArchitecture

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${ma.name} v${ma.version}</div>
        <span class="card-badge">${ma.coreEngine}</span>
      </div>

      <!-- Architecture Diagram -->
      <div class="arch-diagram">
        <div class="arch-coordinator">
          <div class="arch-node arch-node-main">
            <span class="arch-icon">🎛️</span>
            <span class="arch-label">Coordinator 协调器</span>
            <span class="arch-sublabel">合并所有Agent输出 + 商业审核</span>
          </div>
        </div>
        <div class="arch-connectors">
          <div class="arch-line"></div>
          <div class="arch-line"></div>
          <div class="arch-line"></div>
        </div>
        <div class="arch-agents">
          <div class="arch-node arch-node-agent">
            <span class="arch-icon">📊</span>
            <span class="arch-label">Model Agent</span>
            <span class="arch-sublabel">Poisson-Elo纯数学</span>
          </div>
          <div class="arch-node arch-node-agent">
            <span class="arch-icon">🎯</span>
            <span class="arch-label">Context Agent</span>
            <span class="arch-sublabel">情境/动机/路径</span>
          </div>
          <div class="arch-node arch-node-agent">
            <span class="arch-icon">💹</span>
            <span class="arch-label">Handicap Agent</span>
            <span class="arch-sublabel">盘口EV计算</span>
          </div>
        </div>
      </div>

      <!-- Dimensions -->
      <div class="section-divider">分析维度 (6维)</div>
      <div class="dimensions-grid">
        ${ma.dimensions.map(d => `
          <div class="dimension-card">
            <div class="dimension-header">
              <span class="dimension-icon">${d.icon}</span>
              <span class="dimension-name">${d.name}</span>
              <span class="dimension-weight">${d.weight}</span>
            </div>
            <div class="dimension-desc">${d.description}</div>
            <div class="dimension-source">数据源: ${d.dataSource}</div>
          </div>
        `).join('')}
      </div>

      <!-- Pipeline -->
      <div class="section-divider">分析流水线 (Pipeline)</div>
      <div class="pipeline-steps">
        ${ma.pipeline.map((step, i) => `
          <div class="pipeline-step ${i === 6 ? 'pipeline-highlight' : ''}">
            <div class="pipeline-dot"></div>
            <div class="pipeline-text">${step}</div>
          </div>
        `).join('')}
      </div>

      <!-- Limitations -->
      <div class="section-divider">已知局限性</div>
      <div class="limitations-list">
        ${ma.limitations.map(l => `
          <div class="limitation-item">
            <span class="limitation-icon">⚠️</span>
            <span class="limitation-text">${l}</span>
          </div>
        `).join('')}
      </div>

      <!-- Calibration -->
      <div class="section-divider">校准方法</div>
      <div class="calibration-box">${ma.calibration}</div>
    </div>`
}

// ====== Charts ======
function renderAllCharts(): void {
  charts.forEach(c => c.dispose())
  charts = []

  const p = todayPredictions[currentMatchIdx]
  const probEl = document.getElementById('prob-chart-active')
  const gdEl = document.getElementById('goaldiff-chart-active')

  if (probEl && probEl.offsetParent !== null && p) {
    charts.push(renderProbComparison(probEl, p))
  }
  if (gdEl && gdEl.offsetParent !== null && p) {
    const key = `${p.team1}vs${p.team2}`
    const dist = goalDistributions[key]
    if (dist) charts.push(renderGoalDiffChart(gdEl, dist))
  }

  const trendEl = document.getElementById('goals-trend-chart')
  if (trendEl && trendEl.offsetParent !== null) {
    charts.push(renderGoalsTrend(trendEl, matchResults))
  }
}

// ====== Init ======
// ====== Render: Recap (6/19) ======
function renderRecap(): void {
  const container = document.getElementById('recap-content')
  if (!container) return

  const lessons = `
    <div class="lesson-box" style="margin-bottom:16px;">
      <h4 style="color:var(--accent-orange);margin-bottom:8px;">6/19 核心教训</h4>
      <ul style="list-style:none;padding:0;color:var(--text-secondary);font-size:0.9rem;">
        <li style="padding:4px 0;">✅ 巴西-2.5 命中 — 碾压场跟市场走(半场3-0)</li>
        <li style="padding:4px 0;">✅ 巴拉圭+0.5 命中 — 中性场value逻辑有效(还赢了1-0!)</li>
        <li style="padding:4px 0;">❌ 苏格兰受让0.75 — 摩洛哥2分钟闪击未能回应</li>
        <li style="padding:4px 0;">❌ 澳大利亚+1 — 北美主场buff再次验证(美国2-0)</li>
        <li style="padding:4px 0;color:var(--accent-yellow);font-weight:600;">→ 规则更新: 不要逆北美主场队下注!</li>
      </ul>
    </div>`

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-title">Matchday 9 推荐 vs 实际 (6/19)</div>
        <span class="stat-badge">战绩: 2/4 (50%)</span>
      </div>
      <table class="comparison-table">
        <tr><th>场次</th><th>推荐</th><th>赔率</th><th>实际结果</th><th>判定</th></tr>
        ${modelVsActualDay19.map((m: MVA) => `
          <tr>
            <td>${m.match}</td>
            <td>${m.expertRevision}</td>
            <td style="color:var(--text-muted);">-</td>
            <td class="actual">${m.actual}</td>
            <td class="${m.modelCorrect ? 'correct' : 'wrong'}">${m.winner}</td>
          </tr>
        `).join('')}
      </table>
      ${lessons}
    </div>`
}

document.addEventListener('DOMContentLoaded', () => {
  renderTodayMatch(0)
  renderHistory()
  renderModelArchitecture()
  renderRecap()
  setTimeout(renderAllCharts, 250)
  window.addEventListener('resize', () => charts.forEach(c => c.resize()))
})
