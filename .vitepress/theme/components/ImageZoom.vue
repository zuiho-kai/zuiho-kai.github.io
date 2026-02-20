<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

const route = useRoute()

function initZoom() {
  mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
}

onMounted(() => initZoom())
watch(() => route.path, () => setTimeout(initZoom, 500))
</script>

<template>
  <div />
</template>
