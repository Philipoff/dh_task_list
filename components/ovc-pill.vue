<template>
  <button
      :class="selected && 'selected'"
      :style="'border-color: ' + color + '; background: ' + color + '; color: ' + color"
      class="pill__wrapper"
      @click="emit('update:selected', !selected)"
  >
    <span :style="'color:' + getContrastColor(color)" class="pill__inner">
      <slot></slot>
    </span>
    <span class="pill__back"></span>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click', 'update:selected'])

interface Props {
  color: string;
  selected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  selected: false
})
const {color, selected} = toRefs(props)
</script>

<style lang="scss" scoped>
.pill__wrapper {
  position: relative;
  border-radius: 10px;
  border-width: 1px;
  width: fit-content;
  padding: 6px 12px;
  border-style: solid;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  transition: all .3s ease;

  &:not(.selected):hover {
    opacity: .8;
  }

  &:not(.selected) .pill__inner {
    color: var(--text-color) !important;
  }
}

.pill__back {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all .3s ease;
  left: 0;
  top: 0;
  z-index: -1;
  background: var(--background-primary);
}


.pill__inner {
  transition: all .3s ease;
  z-index: 10;
}

.selected {
  opacity: 1;

  .pill__inner {
    color: inherit;
  }

  &:hover {
    box-shadow: 0 0 10px currentColor;
  }

  .pill__back {
    right: 0;
    width: 0;
  }
}
</style>
