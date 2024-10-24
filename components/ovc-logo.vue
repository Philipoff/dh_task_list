<template>
  <div class="headline justify-content-center flex-column">
    <div class="headline__inner mx-auto relative">
      <client-only>
        <div class="relative">
          <h1 class="m-0" @click="onHeadlineClick">
            <transition v-for="(l, i) in logoLetters" appear name="fade">
              <span :class="{'marked': l.marked}" :style="{transitionDelay: `${i*40}ms`}">
                {{ l.letter }}
              </span>
            </transition>
          </h1>
          <transition appear name="fade">
            <div class="line delay-500"></div>
          </transition>
        </div>
      </client-only>
    </div>
    <div ref="quoteElement" class="quote mt-lg-4 mb-lg-4 mt-3 mb-3">
      {{ quote }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {Ref} from "vue";
import {logoLetters} from "~/data/static/logo";

const quote: Ref<string> = ref("")
const quoteElement: Ref<HTMLElement | null> = ref(null)
const a = ref(false)

const onHeadlineClick = () => {
  console.log(123)
}
</script>

<style lang="scss" scoped>
.headline__inner {
  height: 147px;
}

.headline__inner h1 {
  user-select: none;
  font-size: 86px;
  font-weight: 450;
  line-height: 1.1;

  span {
    transition: all .3s ease;
    color: var(--text-color);

    &.marked {
      color: var(--accent)
    }

    &:hover {
      color: var(--text-color)
    }
  }
}

.headline__inner {
  cursor: pointer;

  .line {
    position: absolute;
    width: 38%;
    height: 7px;
    bottom: -10px;
    transition: all 1.2s ease, background-color .3s ease;
    border-radius: 100px;
    background: var(--accent);
  }

  &:hover {
    .line {
      width: 100%;
    }
  }
}

.quote {
  transition: all .3s ease;
  overflow: hidden;
  text-align: center;
  height: 0;
}

.quote.opened {
  height: 25px;
}

@media screen and (max-width: 768px) {
  .headline__inner h1 {
    font-size: 64px;
  }

  .headline__inner .line {
    height: 6px;
  }

  .quote.opened {
    height: 48px;
  }
}

@media screen and (max-width: 567px) {
  .headline__inner h1 {
    font-size: 48px;
  }

  .headline__inner .line {
    height: 5px;
  }
}
</style>
