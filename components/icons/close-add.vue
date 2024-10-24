<template>
  <svg :class="rotate && 'rotate-45'" viewBox="0 0 32 32" width="24"
       class="transition-all"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
          fill="currentColor"></path>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  rotate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rotate: false
})
</script>

<style scoped>

</style>