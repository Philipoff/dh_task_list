<template>
  <div class="ovc-link relative">
    <nuxt-link v-if="!external" :href="href" class="ovc-link__inner">
      <slot></slot>
    </nuxt-link>
    <a v-else :href="href" :target="external ? '_blank' : ''" class="ovc-link__inner">
      <slot></slot>
    </a>

    <div
        v-if="underline !== 'none'"
        :class="underline"
        :style="{backgroundColor: color}"
        class="underline absolute w-0 h-[1px]"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  href: string,
  external?: boolean,
  underline?: "none" | "smooth" | "always" | "sharp",
  color: string,
}

const props = withDefaults(
    defineProps<Props>(),
    {
      underline: "smooth",
      external: false,
      color: 'var(--text-color)'
    })

const route = useRoute()
</script>

<style lang="scss" scoped>

.ovc-link {
  .underline {
    transition: width ease-in-out .3s, background-color ease-in-out .3s;
  }

  &:hover {
    .underline {
      width: 100%;
    }
  }
}
</style>
