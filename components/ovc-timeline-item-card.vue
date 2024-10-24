<template>
  <div class="flex flex-col transition duration-500 timeline-item" :style="{'--item-accent': color}">
    <div
        v-if="showDivider"
        class="h-20 w-0.5 ml-[15px] md:mx-auto my-3"
        style="background: var(--border-color)"
    ></div>

    <article class="flex">
      <div id="date_pc" class="timeline-item-side text-right text-xl hidden md:block">
        {{dateReadable}}
      </div>
      <div :style="{borderColor: color}" class="timeline-item-dot">
      </div>
      <div class="timeline-item-side">
        <div id="date_mobile" class="text-xl mb-2 block md:hidden">
          {{dateReadable}}
        </div>

        <h4 class="mb-1 text-lg font-medium">
          <slot name="title"></slot>
        </h4>
        <div class="timeline-description">
          <slot name="description"></slot>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  color: string
  dateReadable: string
  showDivider?: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.timeline-item {
  .timeline-item-dot {
    width: 30px;
    height: 30px;
    border-radius: 7px;
    border-width: 2px;
    position: relative;
    aspect-ratio: 1;
    @apply md:mx-3;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: var(--item-accent);
      transform: scale(0);
      transition: all .3s ease;
      border-radius: 5px;
    }

  }

  &:hover .timeline-item-dot {
    &::after {
      transform: scale(1);
    }
  }
}

.timeline-item-side {
  @media screen and (min-width: 768px) {
    width: calc(50% - 30px / 2 - 0.75rem / 2);
  }

  @media screen and (max-width: 768px) {
    @apply ml-3;
  }
}
</style>

<style lang="scss">
.timeline-description {
  a {
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
      background: var(--item-accent);
    }

    &:hover::after {
      height: calc(100% + 2px);
      opacity: 50%;
      bottom: -2px;
      top: 0
    }
  }
}
</style>