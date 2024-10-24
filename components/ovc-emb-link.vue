<template>
  <nuxt-link class="embedded-link" :style="{'--link-color': color}">
    <slot/>
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  color: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.embedded-link {
  position: relative;
  cursor: pointer;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -1px;
    left: 0;
    transition: all .3s ease;
    z-index: -1;
    top: 100%;
    opacity: 90%;
    height: 2px;
    background: var(--link-color);
  }

  &:hover::after {
    height: calc(100% + 2px);
    opacity: 50%;
    bottom: -2px;
    top: 0
  }
}
</style>