<script setup lang="ts">
import { ref } from 'vue'

const headerImage = ref('https://github.com/adjonata.png')
</script>

<template>
  <div class="header-image">
    <img :src="headerImage" alt="Header Image" />
  </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss', '@/assets/flex.scss';

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
