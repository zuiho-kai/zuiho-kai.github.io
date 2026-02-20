<script setup>
import { onMounted } from 'vue'

function loadCSS(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  if (typeof window.Paul_Pio !== 'undefined') return

  loadCSS('/live2d/lib/pio.css')

  await loadScript('/live2d/lib/TweenLite.js')
  await loadScript('/live2d/lib/live2dcubismcore.min.js')
  await loadScript('/live2d/lib/pixi.min.js')
  await loadScript('/live2d/lib/cubism4.min.js')
  await loadScript('/live2d/lib/pio.js')
  await loadScript('/live2d/lib/pio_sdk4.js')
  await loadScript('/live2d/lib/load.js')
})
</script>

<template>
  <div class="pio-container" id="pio-container">
    <div class="pio-action"></div>
    <canvas id="pio"></canvas>
  </div>
</template>

<style>
#pio-container {
  z-index: 50;
}
#pio {
  height: 240px;
}
</style>
