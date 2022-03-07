<script setup lang="ts">
const title = 'Bem-vindo ao meu Portfólio!'
const description = `Todas informações estão sendo carregadas via HTTP, aguarde um momento.<br/>`
</script>

<template>
  <aside class="loading">
    <div class="loader" />
    <span>{{ title }}</span>
    <p v-html="description" />
  </aside>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.loading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;

  span {
    color: $white-light;
    margin-bottom: 10px;
    font-size: 26px;
  }

  p {
    color: $white-dark;
    font-weight: lighter;
  }
}
</style>
