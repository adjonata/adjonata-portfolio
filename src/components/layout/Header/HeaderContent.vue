<template>
  <div class="header-content">
    <h1 class="header-content__title">
      {{ title }}
      <span v-if="!isMobile">- {{ author }}</span>
    </h1>
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
    const author = ref<string>('')

    function checkScreen() {
      if (isMobile.value) {
        title.value = 'Seja bem-vindo!'
      } else {
        title.value = 'A credibilidade é consequência do método'
        author.value = 'Carl Sagan'
      }
    }

    checkScreen()

    watch(clientWidth, checkScreen)

    return { title, author, isMobile }
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
