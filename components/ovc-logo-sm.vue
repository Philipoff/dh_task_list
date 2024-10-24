<template>
  <div class="logo-sm relative my-auto" :class="{extended}">
    <h3 ref="text" class="m-0">
      <span v-for="l in expandedLogoLetters"
            :class="{'colored': l.marked}"
            :style="{width: (l.minified || extended) ? l.width : 0}"
      >
        {{ l.letter }}
      </span>
    </h3>
    <div class="line bottom-[0px]"></div>
  </div>
</template>

<script lang="ts" setup>
import {logoLetters} from "~/data/static/logo";
import {computed} from "@vue/reactivity";

interface Props {
  extended: boolean
}

const expandedLogoLetters = computed(() => {
  return logoLetters.filter(l => l.expanded)
})

defineProps<Props>()

const text = ref<HTMLElement>()
</script>

<style lang="scss" scoped>
.headline {
  margin-top: 10vh;
}

.logo-sm {
  h3 {
    user-select: none;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 450;

    span {
      width: 0;
      display: inline-block;
      overflow: hidden;
      transition: all .3s ease;

      &.colored {
        color: var(--accent);

        &:hover {
          color: var(--text-color)
        }
      }
    }
  }

  .line {
    position: absolute;
    width: 38%;
    height: 2px;
    transition: width 1.2s ease, background-color .3s ease;
    border-radius: 100px;
    background: var(--accent);
  }

  &:hover {
    .line {
      width: 100%;
    }
  }
}
</style>
