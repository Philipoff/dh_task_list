<template>
  <transition name="fade">
    <div v-if="show" class="modal">
      <div class="modal__wrapper">
        <slot></slot>
      </div>

      <transition name="fade">
        <div class="modal__backdrop" v-if="show" @click="emit('close')">
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts" setup>
interface Props {
  show: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

// watch(() => props.show, () => {
// })
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
}

.modal__backdrop {
  position: fixed;
  /*backdrop-filter: blur(6px);*/
  background: rgba(0, 0, 0, .55);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}

.modal__wrapper {
  z-index: 1001;
  margin: auto;
  max-width: 95vw;
}
</style>