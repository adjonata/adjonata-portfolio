<script setup lang="ts">
import sections from '@/utils/sections'

import HeaderLink from './HeaderLink.vue'

const emit = defineEmits(['scroll-to'])

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
  emit('scroll-to', id)
}
</script>

<template>
  <div class="header-sections">
    <HeaderLink
      v-for="(section, sectionIndex) in sections"
      :key="'section_' + sectionIndex"
      :title="section.title"
      :icon="section.icon"
      :color="section.color"
      @on-navigate="scrollTo(section.id)"
    />
  </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.header-sections {
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: $fullhd) {
    justify-content: center;
    margin: 30px 0;
  }

  .header-link {
    margin-right: 15px;
    margin-bottom: 15px;

    @media (max-width: $mobile) {
      margin-right: 0;

      &:nth-child(2n + 1) {
        margin-right: 15px;
      }
    }
  }
}
</style>
