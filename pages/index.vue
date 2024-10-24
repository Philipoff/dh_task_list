<template>
  <main class="container">
    <div class="text-center">
      <h1 class="text-4xl font-semibold">Привет!</h1>
      <h2 class="text-3xl font-medium mt-3">Это сайт, посвященный цифровой гуманитаристике в ИТМО.</h2>

      <p class="mt-8 md:w-2/3 mx-auto">
        Это наша домашняя страница. Тут можно найти наши
        <ovc-emb-link :color="'var(--accent-green)'" to="/projects">проекты</ovc-emb-link>,
        объединяющие технологии и гуманитарные науки, посмотреть наши
         <ovc-emb-link :color="'var(--accent-purple)'" to="/researches">исследования</ovc-emb-link>
        и
         <ovc-emb-link :color="'var(--accent-orange)'" to="/timeline">таймлайн</ovc-emb-link>
        и узнать как
         <ovc-emb-link :color="'var(--accent-blue)'" to="/contacts">связаться с нами</ovc-emb-link>
      </p>
    </div>

    <section class="mt-16">
      <h3 class="text-center text-2xl mb-4">Что мы делаем?</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-3">
        <ovc-project-cover
            :bg="ovcCover"
            bg-color="#1A7137"
            text-color="#FFFFFF"
        >
          Пушкин &lt;цифровой&gt;
          <template #description>
            Проект и портал, который организует и представляет знания об А. C. Пушкине
          </template>
        </ovc-project-cover>

        <ovc-project-cover
            :bg="cdCover"
            bg-color="#FFDB58"
            text-color="#363636"
        >
          DH про AI
          <template #description>
            Исследуем и осмысляем изменения академии, труда и привычек
            в ходе цифровизации и развития AI.
          </template>
        </ovc-project-cover>

        <ovc-project-cover
            :bg="dtCover"
            text-color="#FFFFFF"
            bg-color="#252536"
        >
          Мы в медиа
          <template #description>
            Рассказываем о жизни центра, учёбе в магистратуре, работах и проектах студентов. Ведём блог в издании «Системный Блокъ».
          </template>
        </ovc-project-cover>

        <ovc-project-cover
            :bg="allCover"
            text-color="var(--text-color)"
            to="/projects"
        >
          Все проекты

          <template #description>
            Наши работы в разных институциях
          </template>
        </ovc-project-cover>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import OvcEmbLink from "~/components/ovc-emb-link.vue";
import ovcCover from "@/assets/ovc-cover.png"
import cdCover from "@/assets/cd-cover.png"
import dtCover from "@/assets/dt-cover.png"
import allCover from "@/assets/all-cover.png"
import {useThemeStore} from "~/stores/themeStore";

definePageMeta({
  middleware: "accent-color-client",
  variant: "project"
})

useHead({
  title: "Главная | DH center"
})

onMounted(() => {
  useThemeStore().setProjectAccentColor("var(--text-color)")
})
</script>

<style scoped>

</style>
