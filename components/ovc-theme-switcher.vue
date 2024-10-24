<template>
  <div class="theme-switcher">
    <div class="theme-switcher__button" @click="onThemeSwitcherClick">
      <button
          :class="{btn}"
          class="theme-switcher__button__icon flex relative flex-col cursor-pointer
                 w-[28px] h-[28px] md:w-[40px] md:h-[40px]
                 transition ease-in-out duration-300 rounded-full"
      >
        <client-only>
          <transition-group :duration="200" name="slide-up">
            <span v-if="!theme.unknown && theme.value === 'dark'" class="m-auto">
              <svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path
                  d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
                  fill="currentColor"></path></svg>
            </span>
            <span v-else-if="!theme.unknown" class="m-auto">
              <svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink"><path
                  d="M11.57 2.3c2.38-.59 4.68-.27 6.63.64c.35.16.41.64.1.86C15.7 5.6 14 8.6 14 12s1.7 6.4 4.3 8.2c.32.22.26.7-.09.86c-1.28.6-2.71.94-4.21.94c-6.05 0-10.85-5.38-9.87-11.6c.61-3.92 3.59-7.16 7.44-8.1z"
                  fill="currentColor"></path></svg>
            </span>
          </transition-group>
        </client-only>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  btn?: boolean
}

defineProps<Props>()


import {useThemeStore} from "~/stores/themeStore";

const {theme} = useThemeStore()

const onThemeSwitcherClick = () => {
  if (theme.value === "light") {
    theme.preference = "dark"
  } else {
    theme.preference = "light"
  }
}
</script>

<style lang="scss" scoped>
.theme-switcher__button__icon.btn {
  background: var(--background-secondary);
  box-shadow: 0 0 7px var(--shadow-color);
}

.theme-switcher__button__icon {
  overflow: hidden;
  user-select: none;

  &:hover span {
    color: var(--accent);
  }

  span {
    font-size: 20px;
    transition: color .3s ease-in-out;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
