<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  options: { type: Object, default: null }
})

onMounted(async () => {
  const { tsParticles } = await import('@tsparticles/engine')
  const { loadSlim } = await import('@tsparticles/slim')
  await loadSlim(tsParticles)
  await tsParticles.load({
    id: props.id,
    options: props.options || {
      fullScreen: false,
      background: { color: 'transparent' },
      particles: {
        number: { value: 60, density: { enable: true, width: 800, height: 800 } },
        color: { value: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.1, max: 0.5 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: '#64748b',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          outModes: { default: 'bounce' }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 4 }
        }
      }
    }
  })
})
</script>

<template>
  <div :id="id" class="particles-container" />
</template>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
