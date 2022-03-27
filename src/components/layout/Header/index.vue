<script setup lang="ts">
import HeaderImage from './HeaderImage.vue'
import HeaderContent from './HeaderContent.vue'
</script>

<template>
  <header class="header">
    <HeaderImage />
    <HeaderContent />
  </header>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.header {
  width: 1300px;
  max-width: 100%;
  padding: 90px 30px 60px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: $fullhd) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 60px 0 0;
  }
}
</style>
