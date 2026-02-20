<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  strings: { type: Array, required: true }
})

const el = ref(null)

onMounted(async () => {
  const { default: Typed } = await import('typed.js')
  if (el.value) {
    new Typed(el.value, {
      strings: props.strings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })
  }
})
</script>

<template>
  <span ref="el" />
</template>
