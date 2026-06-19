import * as echarts from 'echarts'
import type { MatchPrediction, MatchResult, ModelVsActual, GoalDistribution } from '../types'

type EChartsInstance = ReturnType<typeof echarts.init>

export function renderProbComparison(container: HTMLElement, p: MatchPrediction): EChartsInstance {
  const chart = echarts.init(container)
  chart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['模型', '市场'], textStyle: { color: '#94a8bc' }, top: 0 },
    grid: { left: 80, right: 30, top: 40, bottom: 30 },
    xAxis: { type: 'value', max: 100, axisLabel: { formatter: '{value}%', color: '#5f7a92' }, splitLine: { lineStyle: { color: '#2a4a64' } } },
    yAxis: { type: 'category', data: [`${p.team2}胜`, '平局', `${p.team1}胜`], axisLabel: { color: '#e8f0f7' } },
    series: [
      {
        name: '模型', type: 'bar', barWidth: 14,
        data: [+(p.model.away * 100).toFixed(1), +(p.model.draw * 100).toFixed(1), +(p.model.home * 100).toFixed(1)],
        itemStyle: { color: '#4fc3f7', borderRadius: [0, 4, 4, 0] }
      },
      {
        name: '市场', type: 'bar', barWidth: 14,
        data: [+(p.market.away * 100).toFixed(1), +(p.market.draw * 100).toFixed(1), +(p.market.home * 100).toFixed(1)],
        itemStyle: { color: '#ff9800', borderRadius: [0, 4, 4, 0] }
      }
    ]
  })
  return chart
}

export function renderGoalDiffChart(container: HTMLElement, dist: GoalDistribution): EChartsInstance {
  const chart = echarts.init(container)
  const labels = Object.keys(dist.diffs)
  const values = Object.values(dist.diffs).map(v => +(v * 100).toFixed(1))
  const colors = labels.map(k => {
    const n = parseInt(k)
    return n > 0 ? '#66bb6a' : n === 0 ? '#ffd54f' : '#ef5350'
  })

  chart.setOption({
    tooltip: { trigger: 'axis', formatter: (params: any) => `净胜球 ${params[0].name}: ${params[0].value}%` },
    grid: { left: 50, right: 20, top: 30, bottom: 40 },
    xAxis: {
      type: 'category', data: labels,
      axisLabel: { color: '#94a8bc', formatter: (v: string) => parseInt(v) > 0 ? `+${v}` : v },
      name: `← ${dist.team2}胜 | ${dist.team1}胜 →`, nameLocation: 'middle', nameGap: 25, nameTextStyle: { color: '#5f7a92', fontSize: 11 }
    },
    yAxis: { type: 'value', axisLabel: { formatter: '{value}%', color: '#5f7a92' }, splitLine: { lineStyle: { color: '#2a4a64' } } },
    series: [{
      type: 'bar',
      data: values.map((v, i) => ({ value: v, itemStyle: { color: colors[i] } })),
      barWidth: '60%',
      itemStyle: { borderRadius: [4, 4, 0, 0] }
    }]
  })
  return chart
}

export function renderGoalsTrend(container: HTMLElement, results: MatchResult[]): EChartsInstance {
  const chart = echarts.init(container)
  const dateGroups: Record<string, { goals: number; matches: number; draws: number }> = {}
  results.forEach(m => {
    if (!dateGroups[m.date]) dateGroups[m.date] = { goals: 0, matches: 0, draws: 0 }
    dateGroups[m.date].goals += m.score1 + m.score2
    dateGroups[m.date].matches += 1
    if (m.score1 === m.score2) dateGroups[m.date].draws += 1
  })

  const dates = Object.keys(dateGroups).sort()
  const avgGoals = dates.map(d => +(dateGroups[d].goals / dateGroups[d].matches).toFixed(1))
  const drawRate = dates.map(d => +((dateGroups[d].draws / dateGroups[d].matches) * 100).toFixed(0))

  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { data: ['场均进球', '平局率%'], textStyle: { color: '#94a8bc' }, top: 0 },
    grid: { left: 50, right: 50, top: 40, bottom: 30 },
    xAxis: { type: 'category', data: dates.map(d => d.slice(5)), axisLabel: { color: '#94a8bc' } },
    yAxis: [
      { type: 'value', name: '场均进球', nameTextStyle: { color: '#5f7a92' }, axisLabel: { color: '#5f7a92' }, splitLine: { lineStyle: { color: '#2a4a64' } } },
      { type: 'value', name: '平局率%', nameTextStyle: { color: '#5f7a92' }, axisLabel: { color: '#5f7a92' }, max: 100 }
    ],
    series: [
      { name: '场均进球', type: 'line', data: avgGoals, smooth: true, lineStyle: { color: '#4fc3f7', width: 3 }, itemStyle: { color: '#4fc3f7' }, areaStyle: { color: 'rgba(79,195,247,0.1)' } },
      { name: '平局率%', type: 'bar', yAxisIndex: 1, data: drawRate, itemStyle: { color: 'rgba(255,213,79,0.5)', borderRadius: [4, 4, 0, 0] } }
    ]
  })
  return chart
}

export function renderModelAccuracy(container: HTMLElement, data: ModelVsActual[]): EChartsInstance {
  const chart = echarts.init(container)
  chart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 100, right: 40, top: 20, bottom: 30 },
    xAxis: { type: 'value', max: 100, axisLabel: { formatter: '{value}%', color: '#5f7a92' }, splitLine: { lineStyle: { color: '#2a4a64' } } },
    yAxis: { type: 'category', data: data.map(d => d.match), axisLabel: { color: '#e8f0f7', fontSize: 11 } },
    series: [{
      name: '模型主胜概率', type: 'bar', barWidth: 18,
      data: data.map(d => ({
        value: +(d.model.home * 100).toFixed(1),
        itemStyle: { color: d.modelCorrect ? '#66bb6a' : '#ef5350', borderRadius: [0, 6, 6, 0] }
      })),
      label: { show: true, position: 'right', color: '#94a8bc', fontSize: 11, formatter: (p: any) => `${p.value}%` }
    }]
  })
  return chart
}
