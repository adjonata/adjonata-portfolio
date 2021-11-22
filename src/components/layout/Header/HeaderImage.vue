<template>
  <div class="header-image">
    <img :src="headerImage" alt="Header Image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const headerImage =
      'https://admin.welcometoalex.space/_nuxt/img/boy.b8a8002.svg'
    return { headerImage }
  },
})
</script>

<style lang="scss">
@import '~/src/assets/variables.scss', '~/src/assets/flex.scss';

.header-image {
  @extend .flex-row-center;

  img {
    width: 350px;
  }

  @media (max-width: $fullhd) {
    img {
      max-width: 70%;
    }
    order: 1;
  }
}
</style>
