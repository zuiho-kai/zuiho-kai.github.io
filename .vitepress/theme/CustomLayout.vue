<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import ParticlesBg from './components/ParticlesBg.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import Live2D from './components/Live2D.vue'
import ImageZoom from './components/ImageZoom.vue'
import Giscus from './components/Giscus.vue'

const { Layout } = DefaultTheme
const route = useRoute()

const isBlogPost = computed(() => {
  return route.path.startsWith('/blog/') && route.path !== '/blog/'
})
</script>

<template>
  <Layout>
    <template #layout-top>
      <ReadingProgress />
    </template>
    <template #doc-after>
      <Giscus v-if="isBlogPost" />
    </template>
  </Layout>
  <ParticlesBg id="tsparticles" />
  <Live2D />
  <ImageZoom />
</template>
