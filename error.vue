<template>
  <default>
    <section class="container error text-center" style="--accent: var(--accent-error)">
      <h1 class="text-8xl font-medium text-accent shadow-accent transition-all duration-300">{{ error.statusCode }}</h1>
      <h2 class="mt-3">{{ error.message }}</h2>

      <button class="rounded-lg mt-8 border px-4 py-2 border-accent transition-all duration-300" @click="clearError({redirect: '/'})">
        Вернуться на главную
      </button>
    </section>
  </default>
</template>

<script lang="ts" setup>
import Default from "~/layouts/default.vue";
import {useThemeStore} from "~/stores/themeStore";
import {VariantEnum} from "~/data/types/theme";

definePageMeta({
  layout: "default",
})

useHead({
  title: `Ошибка | samolyev`
})

const props = defineProps({
  error: Object,
});

useThemeStore().setVariant(VariantEnum.error);


const error = useError();
</script>
