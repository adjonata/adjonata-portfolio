<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('Até mais 👋')
</script>

<template>
  <footer class="footer">{{ message }}</footer>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.footer {
  width: 1200px;
  max-width: 80%;
  border-top: solid 4px $black-light;
  padding: 30px 0 60px 0;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  color: $white-dark;
}
</style>
