<template>
  <div class="header-image">
    <img :src="headerImage" alt="Header Image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const headerImage = 'https://github.com/adjonata.png'
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
    border-radius: $items-radius;
    border: solid 5px $grey-dark;
    box-shadow: 5px 5px 0 0 $black-light;
  }

  @media (max-width: $fullhd) {
    img {
      max-width: 70%;
    }
    order: 1;
  }
}
</style>
