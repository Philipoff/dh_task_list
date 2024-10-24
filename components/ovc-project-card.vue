<template>
  <nuxt-link
      :href=projectItem.link
      class="project-card flex flex-col"
      role="article"
  >
    <h3 :style="{color: makeMoreContrast(theme.value, projectItem.color), '--raw-color': projectItem.color}"
        class="text-center font-medium text-2xl project-card__header mb-2">
      {{ projectItem.title }}
    </h3>

    <div class="flex items-center flex-1 mb-2">
      <p class="project-card__description w-full text-center font-light">{{ projectItem.description }}</p>
    </div>

    <section
        :style="{color: makeMoreContrast(theme.value, projectItem.color)}"
        class="project-card__properties mb-3 mt-auto"
    >
      <div class="mb-1.5 w-full flex whitespace-nowrap" v-if="projectItem.techs.length">
        <icons-code/>
        <p class="text-color ml-1.5 max-w-[calc(100%-20px-0.375rem)] overflow-ellipsis overflow-hidden">
          {{ projectItem.plain_techs }}
        </p>
      </div>

      <div v-if="projectItem.developTime" class="mb-1.5 w-full flex whitespace-nowrap">
        <icon-time/>
        <p class="text-color ml-1.5 max-w-[calc(100%-20px-0.375rem)] overflow-ellipsis overflow-hidden">
          {{ projectItem.developTime }}
        </p>
      </div>
    </section>

    <div class="flex h-[20px]">
      <div class="flex gap-1 mt-auto">
        <span
            v-for="topic in projectItem.topics"
            :style="{color: topic.color}" class="w-2 aspect-square bg-current rounded-full"
        ></span>
      </div>

      <div class="flex ml-auto gap-1 opacity-40" :style="{color: makeMoreContrast(theme.value, projectItem.color)}">
        <icon-github v-if="projectItem.github"/>
        <icon-behance v-if="projectItem.behance"/>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import {Project} from "~/data/models/Project";
import {useThemeStore} from "~/stores/themeStore";
import {makeMoreContrast} from "~/utils/color";
import IconTime from "~/components/icons/time.vue";
import IconGithub from "~/components/icons/github.vue";
import IconBehance from "~/components/icons/behance.vue";

interface Props {
  projectItem: Project
}

const props = defineProps<Props>()

const {theme} = useThemeStore()
</script>

<style lang="scss" scoped>
.project-card {
  background: var(--background-secondary);
  border: 1px var(--border-color) solid;
  border-radius: 8px;
  padding: 10px;

  .project-card__header {
    transition: all .3s ease;
  }

  .project-card__description {
    opacity: .8;
    transition: opacity .3s ease;
    word-wrap: break-word;
  }

  .text-color {
    opacity: .8;
    transition: opacity .3s ease, color .3s ease;
    color: var(--text-color);
  }

  &:hover {
    //background: var(--background-secondary-hover);
    transform: translateY(-5px);
    box-shadow: 0 0 10px 1px var(--shadow-color);

    .project-card__header {
      text-shadow: 0 0 15px currentColor;
    }

    .project-card__description, .text-color {
      opacity: 1;
    }
  }
}
</style>

<style>
.project-card__properties svg {
  transition: all .3s ease;
}
</style>
