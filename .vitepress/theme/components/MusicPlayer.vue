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
  if (document.querySelector('meting-js')) return

  loadCSS('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css')
  await loadScript('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js')

  const el = document.createElement('meting-js')
  el.setAttribute('server', 'netease')
  el.setAttribute('type', 'playlist')
  el.setAttribute('id', '7167563029')
  el.setAttribute('fixed', 'true')
  el.setAttribute('mini', 'true')
  el.setAttribute('order', 'random')
  el.setAttribute('volume', '0.6')
  el.setAttribute('autoplay', 'false')
  el.setAttribute('preload', 'metadata')
  el.setAttribute('theme', '#000000')
  document.body.appendChild(el)

  // 等 APlayer 渲染后强制收起：只加 narrow class，不改 body width
  // body inline style 由 APlayer 自己管理（400px），CSS !important 在 narrow 时覆盖
  const observer = new MutationObserver(() => {
    const aplayer = document.querySelector('.aplayer-fixed')
    if (aplayer) {
      aplayer.classList.add('aplayer-narrow')
      observer.disconnect()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })
  setTimeout(() => observer.disconnect(), 10000)
})
</script>

<template>
  <div />
</template>
