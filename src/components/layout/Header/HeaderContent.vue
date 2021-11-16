<template>
  <div class="header-content">
    <h1 class="header-content__title">{{ title }}</h1>
    <HeaderSections />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderSections from './HeaderSections.vue'

export default defineComponent({
  components: { HeaderSections },
  setup() {
    const title = ref('A credibilidade é consequência do método')
    return { title }
  },
})
</script>

<style lang="scss">
@import '~/src/assets/variables.scss', '~/src/assets/flex.scss';

.header-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: $fullhd) {
    order: 2;
    align-items: center;
  }

  &__title {
    width: 650px;
    max-width: 100%;
    font-size: 40px;
    letter-spacing: 1px;
    color: $white-light;

    @media (max-width: $fullhd) {
      width: 90%;
      font-size: 26px;
      text-align: center;
      margin-top: 30px;
      color: $grey-light;
    }
  }
}
</style>
