<template>
  <div class="header-image">
    <img :src="`https://github.com/${githubUser}.png`" alt="Github Image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const githubUser = ref('adjonata')
    return { githubUser }
  },
})
</script>

<style lang="scss">
@import '~/src/assets/variables.scss', '~/src/assets/flex.scss';

.header-image {
  @extend .flex-row-center;

  img {
    width: 350px;
    border: solid 10px $grey-light;
    border-radius: 10px;
    box-shadow: 10px 10px 0 0 $black-light;
  }

  @media (max-width: $fullhd) {
    img {
      max-width: 60%;
    }
    order: 1;
  }
}
</style>
