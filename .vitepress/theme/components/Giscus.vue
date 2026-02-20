<script setup>
import { onMounted, ref } from 'vue'

const repo = 'zuiho-kai/zuiho-kai.github.io'
const repoId = ref('')
const categoryId = ref('')
const loaded = ref(false)

onMounted(async () => {
  // giscus 通过 script 标签加载
  const container = document.getElementById('giscus-container')
  if (!container) return

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', repo)
  script.setAttribute('data-repo-id', 'R_kgDORUyQ3g')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDORUyQ3s4C23gn')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  container.appendChild(script)
  loaded.value = true
})
</script>

<template>
  <div id="giscus-container" class="giscus-wrapper" />
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
