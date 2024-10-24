<template>
  <div class="text-center">
    <h4 class="text-2xl">{{ title }}</h4>

    <p class="flex justify-center items-center mt-3">
      <slot></slot>

      <ovc-emb-link class="text-lg" color="var(--accent-blue)" :to="link">
        {{ displayLink }}
      </ovc-emb-link>
    </p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  link: string
  displayLink: string
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>