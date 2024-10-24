<template>
  <section :style="{'--accent': project?.color}" class="container grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
    <section>
      <h1 class="text-5xl font-medium duration-300">
        <span class="text-accent shadow-accent transition-all">{{
            project?.title.charAt(0)
          }}</span>{{ project?.title.slice(1) }}
      </h1>

      <p class="mt-3 italic">
        {{ project?.description }}
      </p>

      <nuxt-link
          v-if="project?.link"
          :style="{color: getContrastColor(project?.color)}"
          :to="project?.link"
          class="mt-4 px-3 py-2 block border bg-accent border-accent rounded-lg text-center cursor-pointer transition-all"
          target="_blank"
      >
        Посетить проект
      </nuxt-link>

      <hr class="my-7" style="border-color: var(--border-color)">

      <article
          v-if="project?.fullDescription"
          class="markdown-content"
          v-html="marked.parse(project?.fullDescription)"
      />
    </section>

    <section>
      <div class="mb-5">
        <h4 class="text-xl mb-2">Топики</h4>
        <div class="flex flex-wrap gap-3">
          <ovc-pill
              v-for="topic in project?.topics"
              :color="topic?.color"
              class="cursor-[default!important]"
              selected
          >
            {{ topic?.title }}
          </ovc-pill>
        </div>
      </div>

      <div class="mb-5" v-if="project?.techs?.length">
        <div class="flex mb-2 items-center">
          <h4 class="text-xl">
            Технологии
          </h4>
          <ovc-help class="inline-block ml-1.5" text="Технологии, использовавшиеся при азработке проекта"/>
        </div>

        <div class="flex flex-wrap gap-3">
          <ovc-pill
              v-for="tech in project?.techs"
              class="cursor-[default!important]"
              color="var(--accent)"
              selected
          >
            {{ tech?.title }}
          </ovc-pill>
        </div>
      </div>

      <div v-if="project?.behance || project?.github" class="mb-5">
        <h4 class="text-xl mb-2">Ссылки</h4>
        <div class="flex gap-3">
          <nuxt-link v-if="project?.behance" :to="project?.behance" target="_blank">
            <icon-behance color="var(--accent)" width="48"/>
          </nuxt-link>
          <nuxt-link v-if="project?.github" :to="project?.github" target="_blank">
            <icon-github color="var(--accent)" width="48"/>
          </nuxt-link>
        </div>
      </div>

      <div v-if="project?.pictures?.length">
        <h4 class="text-xl mb-2">Изображения проекта</h4>

        <div class="grid grid-cols-2 gap-3 transition-all">
          <img
              v-for="(picture, index) in project?.pictures?.slice(0, 4)"
              :class="index === 0 && 'col-span-2'"
              :src="picture.url"
              alt=""
              class="cursor-pointer picture-card w-full aspect-video rounded-lg border border-stone-500 transition-all h-full object-cover"
              @click="onClickPicture(index)"
          >
          <div
              v-if="project?.pictures?.slice(4)?.length"
              class="cursor-pointer picture-card w-full aspect-video rounded-lg border border-stone-500 transition-all h-full text-accent text-3xl text-center flex"
              style="background: var(--background-secondary)"
              @click="onClickPicture(4)"
          >
            <span class="m-auto">
              +{{ project?.pictures?.slice(4)?.length }}
            </span>
          </div>
        </div>

        <ovc-gallery
            :active-picture="activeGalleryPicture"
            :pictures="project?.pictures"
            :show="isGalleryShown"
            @close="onCloseGallery"
        />
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import {Project} from "~/data/models/Project";
import {useThemeStore} from "~/stores/themeStore";
import {VariantEnum} from "~/data/types/theme";
import {marked} from "marked";
import IconBehance from "~/components/icons/behance.vue";
import IconGithub from "~/components/icons/github.vue";
import {Ref} from "vue";

const route = useRoute()
const project = ref<Project>()
const isGalleryShown: Ref<boolean> = ref(false)
const activeGalleryPicture: Ref<number | null> = ref(null)

definePageMeta({
  middleware: 'accent-color-client',
  variant: 'project'
})

useHead({
  title: () => {
    return project.value?.title + ' | samolyev'
  }
})

const onClickPicture = (index: number) => {
  isGalleryShown.value = true
  activeGalleryPicture.value = index
}

const onCloseGallery = () => {
  isGalleryShown.value = false
  activeGalleryPicture.value = null
}

const fetchProject = async () => {
  const res = await Project.fetchBySlug(route.params.slug as string)

  if (!res) {
    useThemeStore().setVariant(VariantEnum.error);

    throw createError({
      statusCode: 404,
      message: 'Проект не найден',
      fatal: true
    })
  }

  project.value = res
  useThemeStore().setProjectAccentColor(project.value.color)
}

await fetchProject()
</script>

<style lang="scss" scoped>
.picture-card {
  &:hover {
    box-shadow: 0 0 3px 1px var(--shadow-color);
    transform: scale(1.01);
  }
}
</style>
