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
  if (document.getElementById('aplayer-float')) return

  // 先创建元素插入 DOM
  const el = document.createElement('div')
  el.id = 'aplayer-float'
  el.className = 'aplayer'
  el.style.zIndex = '100'
  el.setAttribute('data-id', '7167563029')
  el.setAttribute('data-server', 'netease')
  el.setAttribute('data-type', 'playlist')
  el.setAttribute('data-fixed', 'true')
  el.setAttribute('data-order', 'random')
  el.setAttribute('data-volume', '0.6')
  el.setAttribute('data-autoplay', 'false')
  el.setAttribute('data-preload', 'metadata')
  el.setAttribute('data-theme', '#000000')
  document.body.appendChild(el)

  // 再加载脚本，MetingJS 加载时会扫描 DOM 并初始化
  loadCSS('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css')
  await loadScript('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js')
})
</script>

<template>
  <div />
</template>
