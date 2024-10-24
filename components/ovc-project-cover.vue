<template>
  <nuxt-link class="project-cover relative overflow-hidden">
    <div class="absolute poster-color -z-[2]" :style="{background: bgColor}"></div>
    <img :src="bg" alt="" class="absolute -z-[1]">

    <div :style="{color: textColor}" class="flex flex-col h-full">
      <h3 class="text-3xl font-semibold leading-none mb-9">
        <slot/>
      </h3>
      <p class="mt-auto">
        <slot name="description"/>
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
interface Props {
  bg: string,
  bgColor?: string,
  textColor?: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.project-cover {
  padding: 45px 60px 20px 20px;
  border-radius: 10px;
  border: solid 1px var(--border-color);
  transition: all .3s ease;

  img, .poster-color {
    right: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px);
  }
}
</style>