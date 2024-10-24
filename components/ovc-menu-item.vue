<template>
  <ovc-link
      :class="isActive ? 'active' : ''"
      :color="isActive ? 'var(--accent)' : 'var(--text-color)'"
      :href="href"
      check-active
      class="ovc-menu-item font-light my-auto text-md md:text-lg lg:text-xl"
      underline="smooth"
  >
    <slot/>
  </ovc-link>
</template>

<script lang="ts" setup>
import {ComputedRef} from "@vue/reactivity";

interface Props {
  href: string
}

const props = defineProps<Props>()
const route = useRoute()

const isActive: ComputedRef<boolean> = computed(() => {
  return route.path === props.href
})
</script>

<style scoped>
.ovc-menu-item.active {
  color: var(--accent);
}

.ovc-menu-item {
  transition: color .3s ease-in-out;
}
</style>
