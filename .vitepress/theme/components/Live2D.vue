<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (document.getElementById('live2d-script')) return
  const script = document.createElement('script')
  script.id = 'live2d-script'
  script.src = 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js'
  document.head.appendChild(script)
})
</script>

<template>
  <div />
</template>
