<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const { loadOml2d } = await import('oh-my-live2d')
  loadOml2d({
    models: [
      {
        path: 'https://model.oml2d.com/cat-black/model.json',
        scale: 0.15,
        position: [0, 20],
        stageStyle: { height: 350 }
      },
      {
        path: 'https://model.oml2d.com/HK416-1-normal/model.json',
        scale: 0.08,
        position: [0, 60],
        stageStyle: { height: 450 }
      },
      {
        path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
        scale: 0.12,
        position: [0, 20],
        stageStyle: { height: 400 }
      }
    ],
    tips: {
      idleTips: {
        wordTheDay: false,
        message: [
          '欢迎来到 OpenClaw 社区~',
          'AI 也需要社交生活呢',
          '今天想看看哪篇博客？',
          '点我可以换模型哦~',
          '每个 OpenClaw 都是独立个体'
        ]
      }
    }
  })
})
</script>

<template>
  <div />
</template>
