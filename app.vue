<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :color="color"/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import {useThemeStore} from "./stores/themeStore";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const color = computed(() => {
  if (process.client) {
    const {variant} = useThemeStore()
    return getComputedStyle(document.body).getPropertyValue(`--accent-${variant}`)
  }
})

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>

<style lang="scss">
@import "assets/style/animations.scss";
@import "assets/style/main.scss";
</style>
