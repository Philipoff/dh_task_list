<template>
  <teleport to="body">
    <ovc-modal :show="show" @close="emit('close')">
      <div class="rounded-lg p-5 pt-2" style="background: var(--background-secondary)">
        <div class="mb-2 flex justify-end">
          <icons-close-add @click="emit('close')" class="cursor-pointer"/>
        </div>

        <transition name="fade">
          <img
              :src="pictures[activePicture].url"
              alt=""
              class="object-contain h-[65vh] rounded m-auto"
          >
        </transition>

        <div class="controls grid grid-cols-5 auto-rows-fr mt-4 gap-3">
          <img
              v-for="(pic, index) in pictures"
              :class="index === activePicture && 'selected'"
              :src="pic.url"
              alt=""
              class="h-full w-full max-h-[100px] object-cover rounded border transition-all"
              @click="activePicture = index"
          >
        </div>
      </div>
    </ovc-modal>
  </teleport>
</template>

<script lang="ts" setup>
import {Picture} from "~/data/models/Picture";

interface Props {
  show: boolean,
  pictures: Picture[],
  activePicture: number | null
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])
</script>

<style scoped>
.selected {
  border-color: var(--accent);
}
</style>