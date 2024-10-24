<template>
  <div
      class="cursor-help rounded-full opacity-50 help-button p-1 flex"
      :data-popup="text"
      :data-max-width="maxWidth"
      :class="position + ' ' + align"
      :style="{maxWidth: maxWidth, '--after-width': width}"
  >
    <svg width="12" height="12" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path
          d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"
          fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40"></path>
      <circle cx="248" cy="399.99" fill="currentColor" r="32"></circle>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  maxWidth?: string,
  width?: string,
}>(), {
  position: 'bottom',
  align: 'center',
  maxWidth: '200px',
  width: 'auto',
})

const {text} = toRefs(props)
</script>

<style scoped lang="scss">
.help-button {
  background: var(--background-secondary);
  position: relative;
  transition: all .3s ease;
  z-index: 29;

  &::after {
    content: attr(data-popup);
    position: absolute;
    width: var(--after-width);
    z-index: 100;
    max-width: inherit;
    top: 125%;
    left: 50%;
    box-shadow: 0 0 5px rgba(125, 125, 125, .2);
    transform: translateX(-50%);
    background: var(--background-secondary);
    color: var(--text-color);
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    opacity: 0;
    transition: all .3s ease;
    pointer-events: none;
  }

  &:hover {
    opacity: 1;

    &::after {
      opacity: 1;
    }
  }

  &.end {
    &::after {
      left: auto;
      right: 0;
      transform: translateX(0);
    }
  }
}
</style>
