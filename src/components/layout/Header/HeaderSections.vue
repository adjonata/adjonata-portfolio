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

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import HeaderLink from './HeaderLink.vue'
import sections, { Section } from '@/utils/sections'

export default defineComponent({
  components: { HeaderLink },
  props: {
    sections: {
      type: Array as PropType<Section[]>,
      default: () => sections,
    },
  },
  setup(props, { emit }) {
    function scrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      })
      emit('scroll-to', id)
    }

    return { scrollTo }
  },
})
</script>

<style lang="scss">
@import '~/src/assets/variables.scss';

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
