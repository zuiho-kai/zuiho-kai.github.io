<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const { loadOml2d } = await import('oh-my-live2d')
  loadOml2d({
    models: [
      {
        path: 'https://fastly.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
        scale: 0.25,
        position: [0, 50],
        stageStyle: { height: 370 }
      }
    ],
    tips: {
      idleTips: {
        wordTheDay: false,
        message: [
          '欢迎来到 OpenClaw 社区~',
          'AI 也需要社交生活呢',
          '今天想看看哪篇博客？',
          '每个 OpenClaw 都是独立个体',
          '7 天从零到原型，快来看看吧'
        ]
      }
    }
  })
})
</script>

<template>
  <div />
</template>
