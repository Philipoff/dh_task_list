<template>
  <main class="container h-full">
    <div class="text-center">
      <h2 class="page-header">Контакты</h2>
      <article>
        Актуальные способы связаться со нами по любым вопросам
      </article>
    </div>

    <section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3 mt-8 md:mt-12">
        <ovc-contacts-card
            display-link="dh@itmo.ru"
            link="dh@itmo.ru"
            title="Написать на почту"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M3 9l9 6l9-6l-9-6l-9 6"></path>
              <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9"></path>
              <path d="M3 19l6-6"></path>
              <path d="M15 13l6 6"></path>
            </g>
          </svg>
        </ovc-contacts-card>

        <ovc-contacts-card
            display-link="@ashirovazizz"
            link="https://t.me/ashirovazizz"
            title="Написать в ТГ"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </ovc-contacts-card>


        <ovc-contacts-card
            display-link="vk.com/dhcenter"
            link="https://vk.com/dhcenter"
            title="Написать VK"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M10 6h2v12c-4.5-1-8-6.5-9-12"></path>
              <path d="M20 6c-1 2-3 5-5 6h-3"></path>
              <path d="M20 18c-1-2-3-5-5-6"></path>
            </g>
          </svg>
        </ovc-contacts-card>
      </div>
    </section>

    <hr class="my-12" style="border-color: var(--border-color)">

    <section class="text-center">
      <h3 class="text-2xl">Ещё мы есть тут</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3 mt-8 md:mt-12">
        <ovc-contacts-card
            display-link="DH - center"
            link="https://www.youtube.com/channel/UCsU0VqYLalx97SnpUCDTyGg"
            title="YouTube"
        >
          <svg class="mr-2" viewBox="12 12 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="none" stroke="currentColor">
              <path class="c"
                    d="m43.1124,14.394c-.4637-1.7234-1.8098-3.0695-3.5332-3.5332-2.3145-.8936-24.7326-1.3314-31.2358.0256-1.7235.4637-3.0698,1.8101-3.5334,3.5336-1.0446,4.583-1.1239,14.4914.0256,19.1767.4638,1.7234,1.81,3.0696,3.5334,3.5333,4.5829,1.0548,26.3712,1.2033,31.2358,0,1.7234-.4637,3.0695-1.8099,3.5332-3.5333,1.1138-4.993,1.1931-14.2867-.0256-19.2027Z"/>
              <g>
                <path class="c" d="m19.4715,31.4951l10.0519-5.765c1.34-.7685,1.34-2.7013,0-3.4698l-10.0519-5.7651"/>
                <path class="c"
                      d="m25.1025,23.4747l-4.7325-2.7142c-.4-.2294-.8985.0594-.8985.5205v5.4284c0,.4611.4985.7499.8985.5205l4.7325-2.7142c.402-.2306.402-.8104,0-1.0409Z"/>
              </g>
            </g>
          </svg>
        </ovc-contacts-card>

        <ovc-contacts-card
            display-link="t.me/dhcenter"
            link="https://t.me/dhcenter"
            title="Канал в ТГ"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </ovc-contacts-card>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "accent-color-client",
  variant: "blue"
})

useHead({
  title: "Контакты | DH center"
})
</script>

<style scoped>

</style>
