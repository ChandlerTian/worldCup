import { matchResults, todayPredictions, modelVsActual, goalDistributions } from './data/matches'
import { renderProbComparison, renderGoalDiffChart, renderGoalsTrend, renderModelAccuracy } from './charts/index'
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

// ====== Render Model Comparison ======
function renderModelComparison(): void {
  const container = document.getElementById('model-comparison')
  if (!container) return
  container.innerHTML = `<div class="card"><div class="card-header"><div class="card-title">6/18 模型 vs 专家修正 vs 实际</div><span class="stat-badge">模型方向 3/4 | 专家 0/4</span></div><div id="accuracy-chart" style="height:200px;margin-bottom:16px;"></div><table class="comparison-table"><tr><th>场次</th><th>模型推荐</th><th>专家修正</th><th>实际结果</th><th>判定</th></tr>${modelVsActual.map((m: MVA) => `<tr><td>${m.match}</td><td>${m.model.topPick}</td><td class="${m.expertCorrect ? 'correct' : 'wrong'}">${m.expertRevision}</td><td class="actual">${m.actual}</td><td class="${m.modelCorrect ? 'correct' : ''}">${m.winner}</td></tr>`).join('')}</table></div>`
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

  const accEl = document.getElementById('accuracy-chart')
  if (accEl && accEl.offsetParent !== null) {
    charts.push(renderModelAccuracy(accEl, modelVsActual))
  }
}

// ====== Init ======
document.addEventListener('DOMContentLoaded', () => {
  renderTodayMatch(0)
  renderHistory()
  renderModelComparison()
  setTimeout(renderAllCharts, 250)
  window.addEventListener('resize', () => charts.forEach(c => c.resize()))
})
