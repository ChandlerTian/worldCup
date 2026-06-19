import { matchResults, todayPredictions, modelVsActual, goalDistributions } from './data/matches'
import { renderProbComparison, renderGoalDiffChart, renderGoalsTrend, renderModelAccuracy } from './charts/index'
import type { MatchPrediction, MatchResult, ModelVsActual as MVA } from './types'
import type { ECharts } from 'echarts'

// ====== Global state ======
let charts: ECharts[] = []

// ====== Tab switching (attached to window for HTML onclick) ======
declare global {
  interface Window {
    switchTab: (id: string) => void
    switchMatchday: (id: string) => void
  }
}

window.switchTab = function(id: string) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'))
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'))
  document.getElementById(`tab-${id}`)?.classList.add('active')
  ;(event?.target as HTMLElement)?.classList.add('active')
  setTimeout(renderAllCharts, 150)
}

window.switchMatchday = function(id: string) {
  document.querySelectorAll('.matchday-content').forEach(el => el.classList.remove('active'))
  document.querySelectorAll('.matchday-btn').forEach(el => el.classList.remove('active'))
  document.getElementById(`md-${id}`)?.classList.add('active')
  ;(event?.target as HTMLElement)?.classList.add('active')
}

// ====== Render: History ======
function renderHistory(): void {
  const container = document.getElementById('history-matches')
  if (!container) return

  const dateGroups: Record<string, MatchResult[]> = {}
  matchResults.forEach(m => {
    if (!dateGroups[m.date]) dateGroups[m.date] = []
    dateGroups[m.date].push(m)
  })

  let html = ''
  Object.keys(dateGroups).sort().forEach(date => {
    const matches = dateGroups[date]
    const totalGoals = matches.reduce((s, m) => s + m.score1 + m.score2, 0)
    const avgG = (totalGoals / matches.length).toFixed(1)
    const draws = matches.filter(m => m.score1 === m.score2).length

    html += `<div class="card">
      <div class="card-header">
        <div class="card-title">${date.slice(5)} (${matches.length}场)</div>
        <div style="display:flex;gap:8px;">
          <span class="stat-badge">进球${totalGoals}</span>
          <span class="stat-badge">场均${avgG}</span>
          <span class="stat-badge ${draws === matches.length ? 'warn' : ''}">平局${draws}/${matches.length}</span>
        </div>
      </div>`

    matches.forEach(m => {
      const cls = m.score1 > m.score2 ? 'home-win' : m.score1 === m.score2 ? 'draw' : 'away-win'
      html += `
      <div class="match-row ${cls}">
        <div class="match-teams">
          <span class="team home">${m.team1}</span>
          <span class="match-score">${m.score1} - ${m.score2}</span>
          <span class="team away">${m.team2}</span>
        </div>
        <div class="match-meta">
          <span class="group-tag">${m.group}</span>
          <span class="ground">${m.ground}</span>
        </div>
        ${(m.scorers1.length || m.scorers2.length) ? `<div class="scorers-row">
          <span class="scorers-home">${m.scorers1.join(', ')}</span>
          <span class="scorers-away">${m.scorers2.join(', ')}</span>
        </div>` : ''}
      </div>`
    })
    html += '</div>'
  })
  container.innerHTML = html
}

// ====== Render: Today ======
function renderToday(): void {
  const container = document.getElementById('today-matches')
  if (!container) return

  let html = ''
  todayPredictions.forEach((p: MatchPrediction, idx: number) => {
    const confClass = `confidence-${p.confidence}`
    const confLabel = p.confidence === 'high' ? '高' : p.confidence === 'mid' ? '中' : '低'

    html += `
    <div class="card match-card ${confClass}">
      <div class="card-header">
        <div class="card-title">${p.team1} vs ${p.team2}</div>
        <div style="display:flex;gap:8px;align-items:center;">
          <span class="confidence-tag ${p.confidence}">${confLabel}信心</span>
          <span class="card-badge">${p.group} | ${p.ground} ${p.time}</span>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-item"><div class="stat-label">Elo差</div><div class="stat-value ${p.eloDiff > 200 ? 'green' : p.eloDiff < -50 ? 'red' : ''}">${p.eloDiff > 0 ? '+' : ''}${p.eloDiff}</div></div>
        <div class="stat-item"><div class="stat-label">${p.team1} λ</div><div class="stat-value blue">${p.lambda.home}</div></div>
        <div class="stat-item"><div class="stat-label">${p.team2} λ</div><div class="stat-value">${p.lambda.away}</div></div>
        <div class="stat-item"><div class="stat-label">模型vs市场</div><div class="stat-value ${Math.abs(p.gap.value) > 10 ? 'yellow' : ''}">${p.gap.value > 0 ? '+' : ''}${p.gap.value}pp</div></div>
      </div>

      <div class="chart-row">
        <div id="prob-chart-${idx}" class="chart-container" style="height:180px;"></div>
        <div id="goaldiff-chart-${idx}" class="chart-container" style="height:180px;"></div>
      </div>

      <div class="section-divider">阵容 & 战术</div>
      <div class="tactics-grid">
        <div class="tactics-box">
          <h5>${p.team1} <span class="formation-tag">${p.formation1}</span></h5>
          <p class="style-desc">${p.style1}</p>
          <p class="lineup">${p.lineup1}</p>
          <p class="injury-note">${p.injuries1}</p>
        </div>
        <div class="tactics-box">
          <h5>${p.team2} <span class="formation-tag">${p.formation2}</span></h5>
          <p class="style-desc">${p.style2}</p>
          <p class="lineup">${p.lineup2}</p>
          <p class="injury-note">${p.injuries2}</p>
        </div>
      </div>

      <div class="section-divider">战术克制</div>
      <div class="matchup-table">
        ${p.tacticalMatchup.map(m => `
          <div class="matchup-row">
            <span class="matchup-area">${m.area}</span>
            <span class="matchup-advantage ${m.advantage.includes(p.team1) ? 'adv-home' : m.advantage.includes('中性') ? 'adv-neutral' : 'adv-away'}">${m.advantage}</span>
            <span class="matchup-reason">${m.reason}</span>
          </div>
        `).join('')}
      </div>

      <div class="context-box">${p.groupContext}</div>

      <div class="prediction-card">
        <h4>波胆推荐</h4>
        ${p.predictions.map(pred => `
          <div class="prediction-row">
            <div class="prediction-score">${pred.score}</div>
            <div class="prediction-prob">${pred.prob}%</div>
            <div class="prediction-reason">${pred.reason}</div>
          </div>
        `).join('')}
      </div>
    </div>`
  })
  container.innerHTML = html
}

// ====== Render: Model Comparison ======
function renderModelComparison(): void {
  const container = document.getElementById('model-comparison')
  if (!container) return

  container.innerHTML = `<div class="card">
    <div class="card-header">
      <div class="card-title">6/18 模型 vs 专家修正 vs 实际</div>
      <span class="stat-badge">模型方向 3/4 | 专家 0/4</span>
    </div>
    <div id="accuracy-chart" style="height:200px;margin-bottom:16px;"></div>
    <table class="comparison-table">
      <tr><th>场次</th><th>模型推荐</th><th>专家修正</th><th>实际结果</th><th>判定</th></tr>
      ${modelVsActual.map((m: MVA) => `
        <tr>
          <td>${m.match}</td>
          <td>${m.model.topPick}</td>
          <td class="${m.expertCorrect ? 'correct' : 'wrong'}">${m.expertRevision}</td>
          <td class="actual">${m.actual}</td>
          <td class="${m.modelCorrect ? 'correct' : ''}">${m.winner}</td>
        </tr>
      `).join('')}
    </table>
  </div>`
}

// ====== Charts ======
function renderAllCharts(): void {
  charts.forEach(c => c.dispose())
  charts = []

  todayPredictions.forEach((p, idx) => {
    const probEl = document.getElementById(`prob-chart-${idx}`)
    const gdEl = document.getElementById(`goaldiff-chart-${idx}`)

    if (probEl && probEl.offsetParent !== null) {
      charts.push(renderProbComparison(probEl, p))
    }
    if (gdEl && gdEl.offsetParent !== null) {
      const key = `${p.team1}vs${p.team2}`
      const dist = goalDistributions[key]
      if (dist) {
        charts.push(renderGoalDiffChart(gdEl, dist))
      }
    }
  })

  const trendEl = document.getElementById('goals-trend-chart')
  if (trendEl && trendEl.offsetParent !== null) {
    charts.push(renderGoalsTrend(trendEl, matchResults))
  }

  const accEl = document.getElementById('accuracy-chart')
  if (accEl && accEl.offsetParent !== null) {
    charts.push(renderModelAccuracy(accEl, modelVsActual))
  }
}

// ====== Bootstrap ======
document.addEventListener('DOMContentLoaded', () => {
  renderToday()
  renderHistory()
  renderModelComparison()
  setTimeout(renderAllCharts, 250)

  window.addEventListener('resize', () => {
    charts.forEach(c => c.resize())
  })
})
