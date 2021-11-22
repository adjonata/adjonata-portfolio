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
      'https://raw.githubusercontent.com/adjonata/adjonata.dashboard/01136e867cccd14f6a7da8ec1bb1ae828f1ce8d8/assets/boy.svg'
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
