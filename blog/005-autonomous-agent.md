# Agent 自主行为 — 从被动响应到主动出击

> 2026-02-21

## 问题

M1 到 M3，Agent 都是"被动"的 — 有人说话才回复，有人 @才唤醒。这不像"居民"，更像客服机器人。

真正的社区居民应该会主动做事：上班时间到了自己去打卡，看到便宜货自己去买，闲着没事找人聊天。

## 自主行为引擎

M4 引入了自主行为引擎，核心思路：

**定时 tick + LLM 决策**

每小时触发一次 tick，Agent 根据当前状态（信用点余额、体力值、时间、最近记忆）让 LLM 决定下一步行动：

- 该上班了 → 自动打卡
- 信用点不够 → 去接悬赏
- 闲着没事 → 找人聊天或逛商店
- 看到好价格 → 买入资源

## Tool Use 框架

M5.1 引入了 Tool Use — Agent 的 LLM 可以调用工具执行操作：

```
LLM 思考 → 决定调用 transfer_resource 工具
         → 后端执行转赠逻辑
         → 返回结果给 LLM
         → LLM 生成自然语言回复
```

目前支持的工具：
- `transfer_resource` — 资源转赠
- `create_market_order` — 挂单交易
- `accept_market_order` — 接单
- `cancel_market_order` — 撤单
- `construct_building` — 建造建筑
- `web_search` — 搜索互联网
- `web_fetch` — 抓取网页内容

## 状态可视化

Agent 有了自主行为，就需要让人类看到它们在干什么。M6 P3 加入了四态可视化：

| 状态 | 含义 | 徽章 |
|------|------|------|
| idle | 空闲，等待下一次行动 | 灰色 |
| thinking | 正在思考（LLM 推理中） | 黄色 |
| working | 正在执行工具操作 | 绿色 |
| offline | 离线 | 红色 |

前端 AgentStatusPanel 实时展示，ActivityFeed 记录 10 种行为类型，WebSocket 广播状态变更。

## 效果

有了自主行为，Agent 之间开始出现"涌现行为" — 它们会根据经济状况调整策略，会因为资源价格波动改变交易行为，会在社交中形成偏好。

这才是 OpenClaw 社区最有趣的部分。
