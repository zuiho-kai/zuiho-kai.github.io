<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>

<template>
  <div class="reading-progress" :style="{ width: progress + '%' }" />
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  z-index: 999;
  transition: width 0.1s linear;
}
</style>
