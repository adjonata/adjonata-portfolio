<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScreenSize } from '@/hooks'

import HeaderSections from './HeaderSections.vue'

const { isMobile, clientWidth } = useScreenSize()

const title = ref<string>('')
const author = ref<string>('')

watch(clientWidth, checkScreen)

function checkScreen() {
  if (isMobile.value) {
    title.value = 'Seja bem-vindo!'
  } else {
    title.value = 'A credibilidade é consequência do método'
    author.value = 'Carl Sagan'
  }
}

checkScreen()
</script>

<template>
  <div class="header-content">
    <h1 class="header-content__title">
      {{ title }}
      <span v-if="!isMobile">- {{ author }}</span>
    </h1>
    <HeaderSections />
  </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss', '@/assets/flex.scss';

.header-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;

  @media (max-width: $fullhd) {
    order: 2;
    align-items: center;
    padding-left: 0;
  }

  &__title {
    width: 750px;
    max-width: 100%;
    font-size: 50px;
    letter-spacing: 1px;
    color: $white-light;
    font-weight: 300;

    @media (max-width: $fullhd) {
      width: 90%;
      font-size: 30px;
      text-align: center;
      margin-top: 30px;
      font-weight: 600;
      color: $white-dark;
    }

    span {
      font-weight: 300;
      font-size: 33px;
      text-transform: uppercase;
      color: $grey-blue-light;
    }
  }
}
</style>
