<template>
  <div class="header-content">
    <h1 class="header-content__title">{{ title }}</h1>
    <HeaderSections />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HeaderSections from './HeaderSections.vue'
import useScreenSize from '@/mixins/useScreenSize'

export default defineComponent({
  components: { HeaderSections },
  setup() {
    const { isMobile, clientWidth } = useScreenSize()

    const title = ref<string>('')

    function checkScreen() {
      if (isMobile.value) {
        title.value = 'Seja bem-vindo!'
      } else {
        title.value = 'A credibilidade é consequência do método'
      }
    }

    checkScreen()

    watch(clientWidth, checkScreen)

    return { title, clientWidth }
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
    font-size: 50px;
    letter-spacing: 1px;
    color: $white-light;

    @media (max-width: $fullhd) {
      width: 90%;
      font-size: 26px;
      text-align: center;
      margin-top: 30px;
      color: $white-dark;
    }
  }
}
</style>
