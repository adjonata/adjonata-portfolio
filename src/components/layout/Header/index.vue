<script lang="ts">
import { defineComponent } from 'vue'
import HeaderImage from './HeaderImage.vue'
import HeaderContent from './HeaderContent.vue'

export default defineComponent({
  components: { HeaderImage, HeaderContent },
  setup() {
    return {}
  },
})
</script>

<template>
  <header class="header">
    <HeaderContent />
    <HeaderImage />
  </header>
</template>

<style lang="scss">
@import '~/src/assets/variables.scss', '~/src/assets/flex.scss';

.header {
  width: 1300px;
  max-width: 100%;
  padding: 90px 30px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $fullhd) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 60px 0 0;
  }
}
</style>
