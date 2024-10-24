<template>
  <header :class="{'scrolled': isScrolled}" class="z-20 ovc-header mx-auto">
    <div class="ovc-header__menu z-20 fixed w-full py-3.5">
      <client-only>
        <transition appear name="slide-down">
          <div class="container flex justify-between relative">
            <div class="hidden lg:block"/>

            <nuxt-link class="logo h-full flex my-auto lg:absolute md:static" to="/">
              <ovc-logo-sm :extended="isScrolled"/>
            </nuxt-link>

            <menu class="nav hidden md:flex">
              <ovc-menu-item v-for="menuItem in navigationMenu" :href="menuItem.href" class="mx-1.5">
                {{ menuItem.title }}
              </ovc-menu-item>
            </menu>

            <theme-switcher class="hidden md:block"/>

            <div class="flex md:hidden">
              <span class="flex my-auto cursor-pointer" @click="onMobileMenuOpen">
                <svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path
                    d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></g></svg>
              </span>
            </div>
          </div>
        </transition>
      </client-only>
    </div>

    <transition name="fade">
      <div
          v-if="isMobileMenuOpen"
          class="menu-backdrop bg-black bg-opacity-40 fixed z-30 w-full h-full transition"
          @click="onMobileMenuClose"
      />
    </transition>

    <div
        :class="{'open': isMobileMenuOpen}"
        class="mobile-menu flex flex-col md:hidden fixed h-full z-40 px-6 pt-4"
    >
      <div class="flex justify-between">
        <theme-switcher btn/>

        <div class="cursor-pointer" @click="onMobileMenuClose">
          <close-add/>
        </div>
      </div>

      <menu class="nav flex flex-col mt-8">
        <li v-for="menuItem in navigationMenu" class="block">
          <ovc-menu-item :href="menuItem.href" class="mr-auto inline-block pt-3 text-xl">
            {{ menuItem.title }}
          </ovc-menu-item>
        </li>
      </menu>
    </div>


    <ovc-logo class="pt-[130px] container flex"/>
  </header>
</template>

<script lang="ts" setup>
import type {ComputedRef, Ref} from "vue";

import ThemeSwitcher from "~/components/ovc-theme-switcher";
import {navigationMenu} from "~/data/static/navigation-menu";
import CloseAdd from "~/components/icons/close-add.vue";

const scrollTop: Ref<number> = ref(0)
const isMobileMenuOpen: Ref<boolean> = ref(false)
const a = ref(false)
const route = useRoute()

const onMobileMenuOpen = () => {
  isMobileMenuOpen.value = true
  document.body.style.overflow = "hidden"
}

const onMobileMenuClose = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = "auto"
}

watch(route, () => {
  onMobileMenuClose()
})

const isScrolled: ComputedRef<boolean> = computed(() => {
  return scrollTop.value > 5

})

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY
  });

  scrollTop.value = window.scrollY
})

</script>

<style lang="scss" scoped>
.ovc-header.scrolled .ovc-header__menu {
  backdrop-filter: blur(7px);
}

.dark-mode body .ovc-header .ovc-header__menu {
  background: transparent;
  border-bottom: transparent solid 0;
}

.dark-mode body .ovc-header.scrolled .ovc-header__menu {
  background: rgba(21, 21, 21, .6);
  /*border-bottom: rgba(120, 120, 120, .2) solid 1px;*/
}

.light-mode body .ovc-header.scrolled .ovc-header__menu {
  background: rgba(240, 240, 240, .5);
  /*border-bottom: rgba(120, 120, 120, .15) solid 1px;*/
}

.ovc-header .ovc-header__menu {
  transition: background .2s ease-in-out,
  backdrop-filter .2s ease-in-out,
  border-bottom-color .2s ease-in-out,
  border-bottom-width .2s ease-in-out;
}

.dark-mode body .mobile-menu {
  background: rgba(44, 44, 44, .85);
}

.light-mode body .mobile-menu {
  background: rgba(255, 255, 255, .85);
}


.mobile-menu {
  transform: translateX(100%);
  transition: transform .3s ease-in-out;
  backdrop-filter: blur(5px);
  right: 0;
  min-width: 300px;
  max-width: 350px;

  &.open {
    transform: translateX(0);
  }
}
</style>
