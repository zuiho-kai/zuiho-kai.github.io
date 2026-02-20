<script setup>
import { onMounted } from 'vue'

function loadCSS(href) {
  if (document.querySelector(`link[href="${href}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  if (document.getElementById('pio-container')) return

  loadCSS('/live2d/lib/pio.css')

  await loadScript('/live2d/lib/TweenLite.js')
  await loadScript('/live2d/lib/live2dcubismcore.min.js')
  await loadScript('/live2d/lib/pixi.min.js')
  await loadScript('/live2d/lib/cubism4.min.js')
  await loadScript('/live2d/lib/pio.js')
  await loadScript('/live2d/lib/pio_sdk4.js')

  // pio_sdk4 监听 DOMContentLoaded 来初始化，但 SPA 里这个事件早就触发了
  // 手动调用初始化
  if (typeof _pio_initialize_pixi === 'function') {
    _pio_initialize_pixi()
  }

  await loadScript('/live2d/lib/load.js?v=2')
})
</script>

<template>
  <div />
</template>

<style>
#pio-container {
  z-index: 50;
}
#pio {
  height: 240px;
}
</style>
