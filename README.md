# 2026 FIFA World Cup 预测 Dashboard

Poisson-Elo Multi-Agent Prediction System 可视化面板。

## 直接打开（无需安装）

双击打开 `dist/index.html` 即可，无需任何服务器或依赖安装。

适用于任何机器，直接用浏览器打开 dist 文件夹下的 index.html。

## 开发模式

```bash
npm install
npm run dev      # 启动 Vite dev server (http://localhost:5173)
```

## 构建

```bash
npm run build    # 输出到 dist/，base='./' 支持文件系统直接打开
```

## 项目结构

```
├── dist/                  # 构建产物（可直接打开）
│   ├── index.html
│   └── assets/
├── src/
│   ├── types.ts           # TypeScript 接口定义
│   ├── style.css          # 全局样式（深色主题）
│   ├── main.ts            # 主逻辑（Tab切换/渲染/图表初始化）
│   ├── data/
│   │   └── matches.ts     # 所有数据（赛果/预测/Elo/进球分布）
│   └── charts/
│       └── index.ts       # ECharts 图表（概率对比/净胜球分布/趋势）
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

## 每日更新流程

1. 编辑 `src/data/matches.ts`，追加新比赛日结果到 `matchResults`
2. 更新 `todayPredictions` 为当天比赛预测
3. `npm run build`
4. 将 `dist/` 发给任何人即可查看

## 技术栈

- TypeScript (strict mode)
- Vite 5
- ECharts 5 (交互式图表)
- 纯前端，无后端依赖
