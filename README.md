# 2026 FIFA World Cup 预测 Dashboard

## Netlify 部署

已配置 `netlify.toml`，推送代码后自动部署：
- Build命令: `npm install && npm run build`
- Publish目录: `dist/`

## 本地开发

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # 输出到 dist/
```

## 项目结构

```
├── src/                 # TypeScript 源码
│   ├── types.ts         # 接口定义
│   ├── style.css        # 样式
│   ├── main.ts          # 主逻辑
│   ├── data/matches.ts  # 比赛数据
│   └── charts/index.ts  # ECharts 图表
├── scripts/postbuild.js # 构建后处理(兼容file://打开)
├── index.html           # 开发入口
├── vite.config.js
├── tsconfig.json
├── netlify.toml         # Netlify部署配置
└── dist/                # 构建产物(部署用)
```

## 每日更新

1. 编辑 `src/data/matches.ts`
2. `git push` → Netlify自动部署
