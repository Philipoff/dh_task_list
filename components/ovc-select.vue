<template>
  <div class="ovc-select relative">
    <div
        ref="searchInput"
        class="ovc-select__input relative"
        role="combobox"
        tabindex="0"
        @blur="onSelectBlur"
        @focus="onSelectFocus"
    >
      <span class="ovc-select__chevron absolute right-0 top-0 h-[100%] flex items-center">
        <svg viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path
            d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
            fill="currentColor"></path></svg>
      </span>
    </div>
    <div
        v-if="isDropdownOpen"
        class="ovc-select__options-dropdown flex flex-col absolute top-full left-0 w-full text-start"
    >
      <div
          tabindex="0"
          v-for="option in options"
          :key="option.value"
          class="ovc-select__options-dropdown__options__option"
          @click="onSelect(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"])

interface Props {
  options: OptionItem[]
  modelValue: OptionItem
}

const props = defineProps<Props>()
const {options, modelValue} = toRefs(props)

const isDropdownOpen = ref(false)
const searchInput = ref<HTMLElement>()

const onSelectFocus = () => {
  isDropdownOpen.value = true
}

const onSelectBlur = () => {
  isDropdownOpen.value = false
}

const onSelect = (option: OptionItem) => {
  emit('update:modelValue', option.value)
}
</script>

<style lang="scss" scoped>
.ovc-select__input {
  border: 1px solid var(--text-color);
  min-height: calc(1px + 10px + 1.5rem);
  border-radius: 6px;
  background: var(--background-tetriary);

  .ovc-select__selected {
    line-height: 1;
  }
}

.ovc-select__options-dropdown {
  position: absolute;
  background-color: var(--background-color);
  border: 1px solid var(--text-color);
  padding: 5px;
  border-radius: 5px;
  z-index: 1;
}

.ovc-select__options-dropdown__options__option {
  padding: 5px;
  cursor: pointer;
}

.ovc-select__options-dropdown__options__option:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}
</style>
